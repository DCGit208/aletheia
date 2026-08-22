"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { EmptyState } from "@/components/content/query-state";
import { getArticle, getIssue, getJournal } from "@/lib/data/repository";

export default function IssuePage() {
  const { journalId, issueId } = useParams<{ journalId: string; issueId: string }>();
  const journal = getJournal(journalId);
  const issue = getIssue(issueId);
  if (!journal || !issue || issue.journalId !== journal.id) return <EmptyState title="Issue not found." />;

  return (
    <article>
      <p className="text-sm text-muted-foreground">
        <Link href={`/publications/journals/${journal.id}`} className="hover:underline">
          {journal.title}
        </Link>
      </p>
      <h1 className="mt-2 font-heading text-3xl tracking-wide">{issue.title}</h1>
      <ol className="mt-8 space-y-4">
        {issue.articleIds.map((id) => {
          const article = getArticle(id);
          if (!article) return null;
          return (
            <li key={id}>
              <Link href={`/publications/articles/${article.id}`} className="block rounded-xl px-4 py-3 ring-1 ring-foreground/10 hover:bg-card">
                <p className="font-medium">{article.title}</p>
                <p className="text-sm text-muted-foreground">{article.abstract}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </article>
  );
}
