"use client";

import { ContentCard } from "@/components/content/content-card";
import { ListRow } from "@/components/content/list-row";
import { PageIntro } from "@/components/content/page-intro";
import { Rail } from "@/components/content/rail";
import { SectionHeader } from "@/components/content/section-header";
import { BRAND } from "@/lib/brand";
import { listArticles, listBooks, listJournals } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";

export default function PublicationsPage() {
  const { t } = useI18n();
  const books = listBooks().items;
  const journals = listJournals();
  const articles = listArticles();

  return (
    <div>
      <PageIntro kicker={BRAND.publications} title={t("publications.title")} lead={t("publications.lead")} />
      <div className="mb-8 overflow-hidden rounded-2xl bg-card">
        <ListRow href="/publications/books" title={t("publications.books")} />
        <ListRow href="/publications/journals" title={t("publications.journals")} />
        <ListRow href="/publications/articles" title={t("publications.articles")} />
      </div>
      <Rail title={t("publications.books")} href="/publications/books" actionLabel={t("action.viewAll")}>
        {books.map((book) => (
          <ContentCard
            key={book.id}
            href={`/publications/books/${book.id}`}
            title={book.title}
            subtitle={book.authors.map((author) => author.displayName).join(", ")}
            tone={book.coverTone}
            image={book.coverImage}
          />
        ))}
      </Rail>
      <section className="mb-8">
        <SectionHeader title={t("publications.journals")} />
        <div className="overflow-hidden rounded-2xl bg-card">
          {journals.map((journal) => (
            <ListRow key={journal.id} href={`/publications/journals/${journal.id}`} title={journal.title} subtitle={journal.description} />
          ))}
        </div>
      </section>
      <section>
        <SectionHeader title={t("publications.articles")} href="/publications/articles" actionLabel={t("action.viewAll")} />
        <div className="overflow-hidden rounded-2xl bg-card">
          {articles.map((article) => (
            <ListRow key={article.id} href={`/publications/articles/${article.id}`} title={article.title} subtitle={article.abstract} />
          ))}
        </div>
      </section>
    </div>
  );
}
