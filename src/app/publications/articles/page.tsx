"use client";

import Link from "next/link";
import { PageIntro } from "@/components/content/page-intro";
import { listArticles } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";

export default function ArticlesPage() {
  const { t } = useI18n();
  return (
    <div>
      <PageIntro title={t("publications.articles")} />
      <ul className="space-y-3">
        {listArticles().map((article) => (
          <li key={article.id}>
            <Link href={`/publications/articles/${article.id}`} className="block rounded-xl px-4 py-3 ring-1 ring-foreground/10 hover:bg-card">
              <p className="font-medium">{article.title}</p>
              <p className="text-sm text-muted-foreground">{article.abstract}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
