"use client";

import { collection, doc, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/lib/auth/provider";
import { getFirebaseDb } from "@/lib/firebase/client";

export interface InboxItem {
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

export function useInbox() {
  const { user } = useAuth();
  const [items, setItems] = useState<InboxItem[] | null>(null);

  useEffect(() => {
    if (!user) {
      return;
    }
    const db = getFirebaseDb();
    if (!db) {
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

  const unread = useMemo(() => (items ?? []).filter((item) => !item.read).length, [items]);

  async function markRead(id: string) {
    if (!user) return;
    const db = getFirebaseDb();
    if (!db) return;
    await updateDoc(doc(db, "usersPrivate", user.uid, "notifications", id), { read: true });
  }

  async function markAllRead() {
    if (!user || !items) return;
    const db = getFirebaseDb();
    if (!db) return;
    await Promise.all(
      items.filter((item) => !item.read).map((item) =>
        updateDoc(doc(db, "usersPrivate", user.uid, "notifications", item.id), { read: true }),
      ),
    );
  }

  return { items, unread, markRead, markAllRead };
}
