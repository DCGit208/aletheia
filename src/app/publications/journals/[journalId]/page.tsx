"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { EmptyState } from "@/components/content/query-state";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getJournal, listIssues } from "@/lib/data/repository";

export default function JournalPage() {
  const { journalId } = useParams<{ journalId: string }>();
  const journal = getJournal(journalId);
  if (!journal) return <EmptyState title="Journal not found." />;
  const issues = listIssues(journal.id);

  return (
    <article>
      <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">{journal.frequency}</p>
      <h1 className="mt-2 font-heading text-3xl tracking-wide">{journal.title}</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">{journal.description}</p>
      <p className="mt-2 text-sm">Editor: {journal.editor.displayName}</p>
      <ol className="mt-8 space-y-3">
        {issues.map((issue) => (
          <li key={issue.id}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link href={`/publications/journals/${journal.id}/issues/${issue.id}`}>{issue.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{issue.publishedAt}</CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </article>
  );
}
