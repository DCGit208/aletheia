"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  grantContentAccess,
  grantProductAccess,
  listMembers,
  lookupMember,
  revokeContentAccess,
  setMemberDisabled,
  setMemberRole,
  type AdminEntitlement,
  type AdminMember,
  type AdminOrder,
} from "@/lib/admin/client";
import { STRIPE_OFFERS } from "@/lib/commerce/offerings";
import { useI18n } from "@/lib/i18n/provider";

const ROLES = ["member", "student", "author", "contributor", "moderator", "administrator"] as const;

export function PeoplePanel() {
  const { t } = useI18n();
  const [members, setMembers] = useState<AdminMember[]>([]);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [detail, setDetail] = useState<{
    member: AdminMember;
    entitlements: AdminEntitlement[];
    orders: AdminOrder[];
    programEnrollments: { programId: string }[];
  } | null>(null);
  const [productId, setProductId] = useState("product-foundation-year");
  const [contentKind, setContentKind] = useState("course");
  const [contentId, setContentId] = useState("");

  const loadList = useCallback(() => {
    void listMembers()
      .then(setMembers)
      .catch((error) => toast.error(error instanceof Error ? error.message : t("state.error")));
  }, [t]);

  useEffect(() => {
    loadList();
  }, [loadList]);

  const load = (target = email) => {
    if (!target.trim()) return;
    setBusy(true);
    void lookupMember(target.trim())
      .then((result) => {
        setDetail(result);
        setEmail(result.member.email);
      })
      .catch((error) => toast.error(error instanceof Error ? error.message : t("state.error")))
      .finally(() => setBusy(false));
  };

  const run = (work: () => Promise<void>, ok: string) => {
    if (!detail) return;
    setBusy(true);
    void work()
      .then(() => {
        toast.success(ok);
        load(detail.member.email);
        loadList();
      })
      .catch((error) => toast.error(error instanceof Error ? error.message : t("state.error")))
      .finally(() => setBusy(false));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t("auth.email")}
          className="h-11 rounded-xl"
        />
        <Button type="button" className="h-11 rounded-full" disabled={busy} onClick={() => load()}>
          {t("admin.findMember")}
        </Button>
      </div>

      {members.length > 0 ? (
        <ul className="overflow-hidden rounded-2xl bg-card">
          {members.map((member) => (
            <li key={member.uid}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 border-b border-white/6 px-4 py-3 text-left last:border-0"
                onClick={() => load(member.email)}
              >
                <span>
                  <span className="block font-medium">{member.displayName}</span>
                  <span className="text-sm text-muted-foreground">{member.email}</span>
                </span>
                <span className="text-xs tracking-wide text-muted-foreground uppercase">
                  {member.role}
                  {member.disabled ? ` · ${t("admin.disabled")}` : ""}
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {detail ? (
        <Card>
          <CardHeader>
            <CardTitle>{detail.member.displayName}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              {detail.member.email}
              <br />
              {t("admin.role")}: {detail.member.role}
              {detail.member.disabled ? ` · ${t("admin.disabled")}` : ""}
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <select
                className="h-10 flex-1 rounded-xl border border-input bg-transparent px-3 text-sm"
                value={detail.member.role}
                onChange={(event) =>
                  run(() => setMemberRole(detail.member.uid, event.target.value), t("admin.roleSaved"))
                }
                disabled={busy}
              >
                {ROLES.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <Button
                type="button"
                variant="outline"
                disabled={busy}
                onClick={() =>
                  run(
                    () => setMemberDisabled(detail.member.uid, !detail.member.disabled),
                    detail.member.disabled ? t("admin.enabled") : t("admin.disabled"),
                  )
                }
              >
                {detail.member.disabled ? t("admin.enable") : t("admin.disable")}
              </Button>
            </div>

            <div>
              <Label>{t("admin.grantProduct")}</Label>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                <select
                  className="h-10 flex-1 rounded-xl border border-input bg-transparent px-3 text-sm"
                  value={productId}
                  onChange={(event) => setProductId(event.target.value)}
                >
                  {Object.values(STRIPE_OFFERS).map((offer) => (
                    <option key={offer.productId} value={offer.productId}>
                      {offer.title}
                    </option>
                  ))}
                </select>
                <Button
                  type="button"
                  disabled={busy}
                  onClick={() =>
                    run(() => grantProductAccess(detail.member.uid, productId), t("admin.accessGranted"))
                  }
                >
                  {t("admin.grant")}
                </Button>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{t("admin.grantHint")}</p>
            </div>

            <div>
              <Label>{t("admin.grantContent")}</Label>
              <div className="mt-2 grid gap-2 sm:grid-cols-[8rem_1fr_auto]">
                <select
                  className="h-10 rounded-xl border border-input bg-transparent px-3 text-sm"
                  value={contentKind}
                  onChange={(event) => setContentKind(event.target.value)}
                >
                  <option value="book">book</option>
                  <option value="course">course</option>
                  <option value="program">program</option>
                </select>
                <Input value={contentId} onChange={(event) => setContentId(event.target.value)} placeholder="id" />
                <Button
                  type="button"
                  disabled={busy || !contentId.trim()}
                  onClick={() =>
                    run(
                      () => grantContentAccess(detail.member.uid, contentKind, contentId.trim()),
                      t("admin.accessGranted"),
                    )
                  }
                >
                  {t("admin.grant")}
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-medium">{t("account.purchases")}</h3>
              {detail.entitlements.length === 0 ? (
                <p className="mt-1 text-muted-foreground">{t("state.empty")}</p>
              ) : (
                <ul className="mt-2 space-y-2">
                  {detail.entitlements.map((item) => (
                    <li key={item.id} className="flex items-center justify-between gap-2">
                      <span>
                        {item.contentKind}:{item.contentId}
                        <span className="ml-2 text-muted-foreground">{item.source}</span>
                      </span>
                      <button
                        type="button"
                        className="text-xs tracking-wide text-muted-foreground uppercase"
                        disabled={busy}
                        onClick={() =>
                          run(() => revokeContentAccess(detail.member.uid, item.id), t("admin.accessRevoked"))
                        }
                      >
                        {t("admin.revoke")}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <h3 className="font-medium">{t("account.orders")}</h3>
              {detail.orders.length === 0 ? (
                <p className="mt-1 text-muted-foreground">{t("state.empty")}</p>
              ) : (
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  {detail.orders.map((order) => (
                    <li key={order.id}>
                      {order.status} · {order.source || "—"} · {(order.productIds ?? []).join(", ")}
                      {order.reference ? ` · ${order.reference}` : ""}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
