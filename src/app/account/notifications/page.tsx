"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, onSnapshot, orderBy, query, updateDoc, doc } from "firebase/firestore";
import { toast } from "sonner";
import { PageIntro } from "@/components/content/page-intro";
import { EmptyState } from "@/components/content/query-state";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth/provider";
import { getFirebaseDb } from "@/lib/firebase/client";
import { disablePushAlerts, enablePushAlerts } from "@/lib/push/subscribe";
import { useI18n } from "@/lib/i18n/provider";

interface InboxItem {
  id: string;
  title: string;
  body: string;
  href: string;
  kind: string;
  read: boolean;
  createdAt: string;
}

function asIso(value: unknown) {
  if (value && typeof value === "object" && "toDate" in value) {
    const date = (value as { toDate?: () => Date }).toDate?.();
    if (date instanceof Date) return date.toISOString();
  }
  return "";
}

export default function NotificationsPage() {
  const { t } = useI18n();
  const { user } = useAuth();
  const [items, setItems] = useState<InboxItem[] | null>(null);
  const [pushOn, setPushOn] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!user) {
      setItems([]);
      return;
    }
    const db = getFirebaseDb();
    if (!db) {
      setItems([]);
      return;
    }
    const q = query(collection(db, "usersPrivate", user.uid, "notifications"), orderBy("createdAt", "desc"));
    return onSnapshot(
      q,
      (snap) => {
        setItems(
          snap.docs.slice(0, 80).map((item) => {
            const data = item.data();
            return {
              id: item.id,
              title: String(data.title ?? ""),
              body: String(data.body ?? ""),
              href: typeof data.href === "string" && data.href.startsWith("/") ? data.href : "/",
              kind: String(data.kind ?? ""),
              read: data.read === true,
              createdAt: asIso(data.createdAt),
            };
          }),
        );
      },
      () => setItems([]),
    );
  }, [user]);

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

      {items === null ? (
        <p className="text-sm text-muted-foreground">{t("state.loading")}</p>
      ) : items.length === 0 ? (
        <EmptyState title={t("account.notificationsEmpty")} />
      ) : (
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id} className="rounded-xl px-4 py-3 ring-1 ring-foreground/10">
              <Link
                href={item.href}
                className="block"
                onClick={() => {
                  const db = getFirebaseDb();
                  if (!db || item.read) return;
                  void updateDoc(doc(db, "usersPrivate", user.uid, "notifications", item.id), { read: true });
                }}
              >
                <p className="font-medium">
                  {item.read ? null : <span className="mr-2 inline-block size-2 rounded-full bg-primary" />}
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
