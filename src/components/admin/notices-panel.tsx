"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  archiveAnnouncement,
  broadcastUpdate,
  createCommunity,
  listAdminAnnouncements,
} from "@/lib/admin/client";
import { useI18n } from "@/lib/i18n/provider";
import type { MessageKey } from "@/lib/i18n/messages";

const KINDS = [
  { id: "notice", label: "admin.updateKindNotice" },
  { id: "book", label: "admin.updateKindBook" },
  { id: "course", label: "admin.updateKindCourse" },
  { id: "program", label: "admin.updateKindProgram" },
  { id: "project", label: "admin.updateKindProject" },
] as const;

export function NoticesPanel() {
  const { t } = useI18n();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [important, setImportant] = useState(false);
  const [notify, setNotify] = useState(true);
  const [kind, setKind] = useState<(typeof KINDS)[number]["id"]>("notice");
  const [communityTitle, setCommunityTitle] = useState("");
  const [communityLead, setCommunityLead] = useState("");
  const [busy, setBusy] = useState(false);
  const [announcements, setAnnouncements] = useState<
    { id: string; title: string; body: string; status: string; important: boolean }[]
  >([]);

  const refresh = () => {
    void listAdminAnnouncements()
      .then(setAnnouncements)
      .catch(() => setAnnouncements([]));
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="space-y-10">
      <section>
        <h2 className="font-heading text-xl">{t("admin.noticeTitle")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("admin.noticeLead")}</p>
        <div className="mt-4 space-y-3">
          <Label htmlFor="ann-kind">{t("admin.updateKind")}</Label>
          <select
            id="ann-kind"
            className="h-11 w-full rounded-xl border border-input bg-transparent px-3 text-sm"
            value={kind}
            onChange={(event) => setKind(event.target.value as (typeof KINDS)[number]["id"])}
          >
            {KINDS.map((item) => (
              <option key={item.id} value={item.id}>
                {t(item.label as MessageKey)}
              </option>
            ))}
          </select>
          <Label htmlFor="ann-title">{t("admin.noticeHeading")}</Label>
          <Input id="ann-title" value={title} onChange={(event) => setTitle(event.target.value)} className="h-11 rounded-xl" />
          <Label htmlFor="ann-body">{t("admin.noticeBody")}</Label>
          <Textarea id="ann-body" value={body} onChange={(event) => setBody(event.target.value)} rows={5} />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={important} onChange={(event) => setImportant(event.target.checked)} />
            {t("admin.noticeImportant")}
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={notify} onChange={(event) => setNotify(event.target.checked)} />
            {t("admin.notifyMembers")}
          </label>
          <Button
            type="button"
            disabled={busy}
            onClick={() => {
              setBusy(true);
              void broadcastUpdate({ title, body, important, kind, notify })
                .then(() => {
                  toast.success(notify ? t("admin.updateSent") : t("admin.noticePublished"));
                  setTitle("");
                  setBody("");
                  setImportant(false);
                  refresh();
                })
                .catch((error) => toast.error(error instanceof Error ? error.message : t("state.error")))
                .finally(() => setBusy(false));
            }}
          >
            {t("admin.publish")}
          </Button>
        </div>
        <ul className="mt-6 space-y-3">
          {announcements.map((item) => (
            <li key={item.id} className="rounded-xl px-4 py-3 ring-1 ring-foreground/10">
              <p className="font-medium">
                {item.title}
                <span className="ml-2 text-xs tracking-wide text-muted-foreground uppercase">{item.status}</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
              {item.status === "published" ? (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => {
                    void archiveAnnouncement(item.id)
                      .then(() => {
                        toast.success(t("admin.noticeArchived"));
                        refresh();
                      })
                      .catch((error) => toast.error(error instanceof Error ? error.message : t("state.error")));
                  }}
                >
                  {t("admin.archive")}
                </Button>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-xl">{t("admin.communityTitle")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("admin.communityLead")}</p>
        <div className="mt-4 space-y-3">
          <Input
            value={communityTitle}
            onChange={(event) => setCommunityTitle(event.target.value)}
            placeholder={t("admin.communityName")}
            className="h-11 rounded-xl"
          />
          <Textarea value={communityLead} onChange={(event) => setCommunityLead(event.target.value)} rows={3} />
          <Button
            type="button"
            disabled={busy}
            onClick={() => {
              setBusy(true);
              void createCommunity(communityTitle, communityLead)
                .then(() => {
                  toast.success(t("admin.communityCreated"));
                  setCommunityTitle("");
                  setCommunityLead("");
                })
                .catch((error) => toast.error(error instanceof Error ? error.message : t("state.error")))
                .finally(() => setBusy(false));
            }}
          >
            {t("admin.createCommunity")}
          </Button>
        </div>
      </section>
    </div>
  );
}
