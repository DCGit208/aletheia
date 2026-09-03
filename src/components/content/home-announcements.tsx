"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { listAnnouncements } from "@/lib/data/repository";
import type { Announcement } from "@/lib/data/types";
import { getFirebaseDb } from "@/lib/firebase/client";

export function HomeAnnouncements() {
  const [items, setItems] = useState<Announcement[]>(() => listAnnouncements());

  useEffect(() => {
    const catalogItems = listAnnouncements();
    const db = getFirebaseDb();
    if (!db) {
      setItems(catalogItems);
      return;
    }
    const q = query(collection(db, "announcements"), where("status", "==", "published"));
    return onSnapshot(q, (snap) => {
      const live = snap.docs.map((doc) => {
        const data = doc.data();
        const publishedAt = data.publishedAt?.toDate?.() as Date | undefined;
        return {
          id: doc.id,
          title: String(data.title ?? ""),
          body: String(data.body ?? ""),
          publishedAt: publishedAt instanceof Date ? publishedAt.toISOString() : new Date().toISOString(),
          status: "published" as const,
          important: data.important === true,
        };
      });
      const seen = new Set(live.map((item) => item.id));
      setItems([...live, ...catalogItems.filter((item) => !seen.has(item.id))]);
    });
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <article key={item.id} className="rounded-2xl bg-card px-4 py-4">
          <p className="font-heading text-lg leading-snug">{item.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
