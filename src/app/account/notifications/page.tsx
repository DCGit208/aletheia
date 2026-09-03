"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { PageIntro } from "@/components/content/page-intro";
import { EmptyState, LoadingState } from "@/components/content/query-state";
import { InstallCard } from "@/components/pwa/install-card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth/provider";
import { disablePushAlerts, enablePushAlerts } from "@/lib/push/subscribe";
import { useInbox } from "@/lib/notify/inbox";
import { formatRelativeTime } from "@/lib/time";
import { useI18n } from "@/lib/i18n/provider";
import type { MessageKey } from "@/lib/i18n/messages";

function kindLabel(kind: string): MessageKey | null {
  if (kind === "purchase" || kind === "momo_pending" || kind === "momo_rejected") return "notify.kindPurchase";
  if (kind === "board_post") return "notify.kindBoard";
  if (kind.startsWith("update_")) return "notify.kindUpdate";
  return null;
}

export default function NotificationsPage() {
  const { t, locale } = useI18n();
  const { user } = useAuth();
  const { items, unread, markRead, markAllRead } = useInbox();
  const [pushOn, setPushOn] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) return;
    void navigator.serviceWorker.ready.then((registration) =>
      registration.pushManager.getSubscription().then((sub) => setPushOn(Boolean(sub))),
    );
  }, []);

  if (!user) return <EmptyState title={t("state.signedOut")} />;

  return (
    <div>
      <PageIntro title={t("account.notifications")} lead={t("account.notificationsLead")} />
      <div className="mb-6">
        <InstallCard />
      </div>
      <div className="mb-8 rounded-2xl bg-card px-4 py-4">
        <p className="text-sm text-muted-foreground">{t("account.alertsHint")}</p>
        <Button
          type="button"
          className="mt-3"
          disabled={busy}
          variant={pushOn ? "outline" : "default"}
          onClick={() => {
            setBusy(true);
            const next = !pushOn;
            void (next ? enablePushAlerts(user.uid) : disablePushAlerts(user.uid))
              .then(() => {
                setPushOn(next);
                toast.success(next ? t("account.alertsOn") : t("account.alertsOff"));
              })
              .catch((error) => toast.error(error instanceof Error ? error.message : t("account.alertsDenied")))
              .finally(() => setBusy(false));
          }}
        >
          {pushOn ? t("account.disableAlerts") : t("account.enableAlerts")}
        </Button>
      </div>

      {unread > 0 ? (
        <div className="mb-4 flex justify-end">
          <Button type="button" variant="ghost" size="sm" onClick={() => void markAllRead()}>
            {t("account.markAllRead")}
          </Button>
        </div>
      ) : null}

      {items === null ? (
        <LoadingState />
      ) : items.length === 0 ? (
        <EmptyState title={t("account.notificationsEmpty")} body={t("account.notificationsEmptyLead")} />
      ) : (
        <ul className="space-y-3">
          {items.map((item) => {
            const kind = kindLabel(item.kind);
            return (
              <li key={item.id} className="rounded-xl px-4 py-3 ring-1 ring-foreground/10">
                <Link
                  href={item.href}
                  className="block"
                  onClick={() => {
                    if (!item.read) void markRead(item.id);
                  }}
                >
                  <p className="font-medium">
                    {item.read ? null : (
                      <span className="mr-2 inline-block size-2 rounded-full bg-primary" aria-hidden />
                    )}
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                  <p className="mt-2 text-[0.7rem] tracking-wide text-muted-foreground uppercase">
                    {kind ? `${t(kind)} · ` : ""}
                    {formatRelativeTime(item.createdAt, locale)}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
