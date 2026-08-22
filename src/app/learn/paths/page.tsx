"use client";

import Link from "next/link";
import { PageIntro } from "@/components/content/page-intro";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listPaths } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";

export default function PathsPage() {
  const { t } = useI18n();
  return (
    <div>
      <PageIntro title={t("learn.paths")} />
      <div className="space-y-3">
        {listPaths().map((path) => (
          <Card key={path.id}>
            <CardHeader>
              <CardTitle>
                <Link href={`/learn/paths/${path.id}`} className="hover:underline">
                  {path.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{path.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
