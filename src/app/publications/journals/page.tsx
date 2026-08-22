"use client";

import Link from "next/link";
import { PageIntro } from "@/components/content/page-intro";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listJournals } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";

export default function JournalsPage() {
  const { t } = useI18n();
  return (
    <div>
      <PageIntro title={t("publications.journals")} />
      {listJournals().map((journal) => (
        <Card key={journal.id}>
          <CardHeader>
            <CardTitle>
              <Link href={`/publications/journals/${journal.id}`}>{journal.title}</Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">{journal.description}</CardContent>
        </Card>
      ))}
    </div>
  );
}
