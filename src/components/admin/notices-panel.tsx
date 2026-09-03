"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  archiveAnnouncement,
  createCommunity,
  listAdminAnnouncements,
  publishAnnouncement,
} from "@/lib/admin/client";
import { useI18n } from "@/lib/i18n/provider";

export function NoticesPanel() {
  const { t } = useI18n();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [important, setImportant] = useState(false);
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
          <Label htmlFor="ann-title">{t("admin.noticeHeading")}</Label>
          <Input id="ann-title" value={title} onChange={(event) => setTitle(event.target.value)} className="h-11 rounded-xl" />
          <Label htmlFor="ann-body">{t("admin.noticeBody")}</Label>
          <Textarea id="ann-body" value={body} onChange={(event) => setBody(event.target.value)} rows={5} />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={important} onChange={(event) => setImportant(event.target.checked)} />
            {t("admin.noticeImportant")}
          </label>
          <Button
            type="button"
            disabled={busy}
            onClick={() => {
              setBusy(true);
              void publishAnnouncement(title, body, important)
                .then(() => {
                  toast.success(t("admin.noticePublished"));
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
