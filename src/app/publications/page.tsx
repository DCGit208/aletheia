"use client";

import Link from "next/link";
import { ContentCard } from "@/components/content/content-card";
import { PageIntro } from "@/components/content/page-intro";
import { SectionHeader } from "@/components/content/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <div className="mb-8 flex flex-wrap gap-3">
        <Link href="/publications/books" className="rounded-xl bg-card px-4 py-3 ring-1 ring-foreground/10">
          {t("publications.books")}
        </Link>
        <Link href="/publications/journals" className="rounded-xl bg-card px-4 py-3 ring-1 ring-foreground/10">
          {t("publications.journals")}
        </Link>
        <Link href="/publications/articles" className="rounded-xl bg-card px-4 py-3 ring-1 ring-foreground/10">
          {t("publications.articles")}
        </Link>
      </div>
      <section className="mb-10">
        <SectionHeader title={t("publications.books")} href="/publications/books" actionLabel={t("action.viewAll")} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {books.map((book) => (
            <ContentCard
              key={book.id}
              href={`/publications/books/${book.id}`}
              title={book.title}
              subtitle={book.authors.map((author) => author.displayName).join(", ")}
              tone={book.coverTone}
            />
          ))}
        </div>
      </section>
      <section className="mb-10">
        <SectionHeader title={t("publications.journals")} />
        {journals.map((journal) => (
          <Card key={journal.id}>
            <CardHeader>
              <CardTitle>
                <Link href={`/publications/journals/${journal.id}`}>{journal.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{journal.description}</CardContent>
          </Card>
        ))}
      </section>
      <section>
        <SectionHeader title={t("publications.articles")} href="/publications/articles" actionLabel={t("action.viewAll")} />
        <ul className="space-y-3">
          {articles.map((article) => (
            <li key={article.id}>
              <Link href={`/publications/articles/${article.id}`} className="block rounded-xl px-4 py-3 ring-1 ring-foreground/10 hover:bg-card">
                <p className="font-medium">{article.title}</p>
                <p className="text-sm text-muted-foreground">{article.abstract}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
