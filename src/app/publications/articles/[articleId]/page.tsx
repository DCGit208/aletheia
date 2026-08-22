"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { EmptyState } from "@/components/content/query-state";
import { getArticle, getIssue, getJournal } from "@/lib/data/repository";

export default function ArticlePage() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = getArticle(articleId);
  if (!article) return <EmptyState title="Article not found." />;
  const journal = getJournal(article.journalId);
  const issue = getIssue(article.issueId);

  return (
    <article className="mx-auto max-w-2xl">
      <p className="text-sm text-muted-foreground">
        {journal ? (
          <Link href={`/publications/journals/${journal.id}`} className="hover:underline">
            {journal.title}
          </Link>
        ) : null}
        {issue ? ` · ${issue.title}` : null}
      </p>
      <h1 className="mt-3 font-heading text-3xl tracking-wide">{article.title}</h1>
      <p className="mt-3 text-muted-foreground">{article.authors.map((author) => author.displayName).join(", ")}</p>
      <p className="mt-6 text-lg italic">{article.abstract}</p>
      <p className="reader-prose mt-8">{article.body}</p>
    </article>
  );
}
