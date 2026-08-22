"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { DeniedState, EmptyState } from "@/components/content/query-state";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { canAccessContent } from "@/lib/access/entitlements";
import { getBook, listChapters } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";

export default function ReaderPage() {
  const { bookId } = useParams<{ bookId: string }>();
  const { t } = useI18n();
  const { entitlements, progress, setReadingProgress } = useUserLibrary();
  const book = getBook(bookId);
  const chapters = listChapters(bookId);
  const saved = progress.find((item) => item.bookId === bookId);
  const [chapterId, setChapterId] = useState(saved?.chapterId ?? chapters[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const [fontSize, setFontSize] = useState(1.15);
  const [tocOpen, setTocOpen] = useState(false);

  const chapter = chapters.find((item) => item.id === chapterId) ?? chapters[0];
  const index = chapters.findIndex((item) => item.id === chapter?.id);
  const allowed = book
    ? canAccessContent({
        accessLevel: book.accessLevel,
        preview: Boolean(chapter && book.previewChapterIds.includes(chapter.id)),
        entitlements,
        contentKind: "book",
        contentId: book.id,
      })
    : false;

  useEffect(() => {
    if (book && chapter && allowed) {
      const percent = Math.round(((index + 1) / chapters.length) * 100);
      setReadingProgress(book.id, chapter.id, percent);
    }
  }, [allowed, book, chapter, chapters.length, index, setReadingProgress]);

  const highlighted = useMemo(() => {
    if (!chapter) return "";
    if (!query.trim()) return chapter.body;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return chapter.body.replace(new RegExp(escaped, "ig"), (match) => `[[${match}]]`);
  }, [chapter, query]);

  if (!book || !chapter) return <EmptyState title="Book not found." />;
  if (!allowed) return <DeniedState />;

  return (
    <div className="min-h-dvh bg-[oklch(0.97_0.01_88)] text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-[oklch(0.97_0.01_88)]/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-2 px-4 py-2">
          <Link href={`/learn/books/${book.id}`} className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
            Close
          </Link>
          <div className="min-w-0 flex-1">
            <p className="truncate font-heading text-sm">{book.title}</p>
            <p className="text-xs text-muted-foreground">
              {t("reader.progress")}: {Math.round(((index + 1) / chapters.length) * 100)}%
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={() => setTocOpen((open) => !open)}>
            {t("reader.contents")}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setFontSize((size) => Math.min(1.5, size + 0.1))} aria-label="Increase type">
            A+
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setFontSize((size) => Math.max(0.95, size - 0.1))} aria-label="Decrease type">
            A-
          </Button>
        </div>
      </header>

      {tocOpen ? (
        <nav className="mx-auto max-w-3xl px-4 py-4" aria-label="Table of contents">
          <ol className="space-y-2">
            {chapters.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={cn("text-left hover:underline", item.id === chapter.id && "font-medium")}
                  onClick={() => {
                    setChapterId(item.id);
                    setTocOpen(false);
                  }}
                >
                  {item.number}. {item.title}
                </button>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      <div className="mx-auto max-w-3xl px-4 py-4">
        <label className="sr-only" htmlFor="book-search">
          {t("reader.search")}
        </label>
        <Input
          id="book-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t("reader.search")}
        />
      </div>

      <article className="mx-auto px-4 py-6">
        <h1 className="mx-auto mb-8 max-w-[38rem] font-heading text-3xl tracking-wide">{chapter.title}</h1>
        <div className="reader-prose mx-auto whitespace-pre-line" style={{ ["--reader-size" as string]: `${fontSize}rem` }}>
          {highlighted.split("\n").map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>
              {paragraph.split(/(\[\[.*?\]\])/g).map((part, partIndex) =>
                part.startsWith("[[") ? (
                  <mark key={partIndex} className="bg-accent">
                    {part.slice(2, -2)}
                  </mark>
                ) : (
                  <span key={partIndex}>{part}</span>
                ),
              )}
            </p>
          ))}
        </div>
      </article>

      <footer className="mx-auto flex max-w-3xl justify-between gap-3 px-4 pt-4 pb-10">
        {chapters[index - 1] ? (
          <Button variant="outline" onClick={() => setChapterId(chapters[index - 1].id)}>
            {t("reader.previous")}
          </Button>
        ) : (
          <span />
        )}
        {chapters[index + 1] ? (
          <Button onClick={() => setChapterId(chapters[index + 1].id)}>{t("reader.next")}</Button>
        ) : (
          <Link href={`/learn/books/${book.id}`} className={buttonVariants({ variant: "outline" })}>
            {book.title}
          </Link>
        )}
      </footer>
    </div>
  );
}
