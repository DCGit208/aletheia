"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { EmptyState, LoadingState } from "@/components/content/query-state";
import { PageIntro } from "@/components/content/page-intro";
import { Input } from "@/components/ui/input";
import { searchCatalog } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";
import { track } from "@/lib/analytics/events";
import type { ContentKind } from "@/lib/data/types";

const kinds: Array<{ id: ContentKind | "all"; label: string }> = [
  { id: "all", label: "All" },
  { id: "course", label: "Courses" },
  { id: "book", label: "Books" },
  { id: "journal", label: "Journals" },
  { id: "article", label: "Articles" },
  { id: "topic", label: "Discussions" },
  { id: "product", label: "Shop" },
];

function SearchInner() {
  const { t } = useI18n();
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") ?? "";
  const [term, setTerm] = useState(initial);
  const [kind, setKind] = useState<ContentKind | "all">("all");
  const results = useMemo(() => {
    const found = searchCatalog(term, kind === "all" ? undefined : kind);
    if (term.trim().length >= 2) track({ name: "search", query: term });
    return found;
  }, [kind, term]);

  return (
    <div>
      <PageIntro title={t("search.title")} />
      <form
        className="mb-6 space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
          router.replace(term ? `/search?q=${encodeURIComponent(term)}` : "/search");
        }}
      >
        <Input
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          placeholder={t("search.placeholder")}
          aria-label={t("search.title")}
        />
        <div className="flex flex-wrap gap-2">
          {kinds.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setKind(item.id)}
              className={`rounded-full px-3 py-1 text-sm ring-1 ring-foreground/10 ${kind === item.id ? "bg-primary text-primary-foreground" : "bg-card"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </form>
      {term.trim().length < 2 ? (
        <p className="text-sm text-muted-foreground">Enter at least two characters. Production search queries an index — it does not download the catalog.</p>
      ) : results.length === 0 ? (
        <EmptyState title={t("search.empty")} />
      ) : (
        <ul className="space-y-2">
          {results.map((item) => (
            <li key={`${item.kind}-${item.id}`}>
              <Link href={item.href} className="block rounded-xl px-4 py-3 ring-1 ring-foreground/10 hover:bg-card">
                <p className="text-xs tracking-wide text-muted-foreground uppercase">{item.kind}</p>
                <p className="font-medium">{item.title}</p>
                {item.subtitle ? <p className="text-sm text-muted-foreground">{item.subtitle}</p> : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <SearchInner />
    </Suspense>
  );
}
