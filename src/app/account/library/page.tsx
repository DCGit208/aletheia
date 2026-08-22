"use client";

import Link from "next/link";
import { EmptyState } from "@/components/content/query-state";
import { PageIntro } from "@/components/content/page-intro";
import { getBook } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";

export default function MyLibraryPage() {
  const { t } = useI18n();
  const { user } = useAuth();
  const { entitlements, progress } = useUserLibrary();
  if (!user) return <EmptyState title={t("state.signedOut")} />;
  const books = entitlements.filter((item) => item.contentKind === "book");

  return (
    <div>
      <PageIntro title={t("account.library")} lead="Titles you hold an entitlement to — the same Book record as Publications and Shop." />
      {books.length === 0 ? (
        <EmptyState body="Public and free titles remain in Learn. Purchased titles appear here." />
      ) : (
        <ul className="space-y-3">
          {books.map((item) => {
            const book = getBook(item.contentId);
            const reading = progress.find((entry) => entry.bookId === item.contentId);
            return (
              <li key={item.id} className="rounded-xl px-4 py-3 ring-1 ring-foreground/10">
                <Link href={`/learn/read/${item.contentId}`} className="font-medium hover:underline">
                  {book?.title ?? item.contentId}
                </Link>
                <p className="text-sm text-muted-foreground">
                  {item.source}
                  {reading ? ` · ${reading.percent}%` : ""}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
