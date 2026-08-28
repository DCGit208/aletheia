"use client";

import { ContentCard } from "@/components/content/content-card";
import { EmptyState } from "@/components/content/query-state";
import { PageIntro } from "@/components/content/page-intro";
import { canAccessContent } from "@/lib/access/entitlements";
import { listBooks } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";

export default function LibraryPage() {
  const { t } = useI18n();
  const { entitlements } = useUserLibrary();
  const accessible = listBooks().items.filter((book) =>
    canAccessContent({
      accessLevel: book.accessLevel,
      preview: book.previewChapterIds.length > 0,
      entitlements,
      contentKind: "book",
      contentId: book.id,
    }),
  );

  return (
    <div>
      <PageIntro title={t("learn.library")} lead="Books you can open, preview, or resume. One book record — many rooms." />
      {accessible.length === 0 ? (
        <EmptyState body="Purchase or receive an entitlement to add titles here." />
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {accessible.map((book) => (
            <ContentCard
              key={book.id}
              layout="tile"
              href={`/learn/books/${book.id}`}
              title={book.title}
              subtitle={book.subtitle}
              tone={book.coverTone}
              image={book.coverImage}
              meta={book.authors.map((author) => author.displayName).join(", ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
