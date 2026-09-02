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
      <div className="grid grid-cols-2 gap-4">
        {listBooks().items.map((book) => (
          <ContentCard
            key={book.id}
            layout="tile"
            href={`/publications/books/${book.id}`}
            title={book.title}
            subtitle={book.subtitle}
            tone={book.coverTone}
            image={book.coverImage}
            meta={book.authors.map((author) => author.displayName).join(", ")}
            badge={
              book.id === "book-aletheia-libraries-1"
                ? "Leaflet"
                : book.id === "book-principles-doctrine-christ"
                  ? "Textbook"
                  : book.edition
            }
          />
        ))}
      </div>
    </div>
  );
}
