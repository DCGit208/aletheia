"use client";

import { ContentCard } from "@/components/content/content-card";
import { PageIntro } from "@/components/content/page-intro";
import { listBooks } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";

export default function PublicationBooksPage() {
  const { t } = useI18n();
  return (
    <div>
      <PageIntro title={t("publications.books")} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {listBooks().items.map((book) => (
          <ContentCard
            key={book.id}
            href={`/publications/books/${book.id}`}
            title={book.title}
            subtitle={book.subtitle}
            tone={book.coverTone}
            meta={book.authors.map((author) => author.displayName).join(", ")}
          />
        ))}
      </div>
    </div>
  );
}
