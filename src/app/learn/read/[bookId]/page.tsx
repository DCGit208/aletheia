"use client";

import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { DeniedState, EmptyState } from "@/components/content/query-state";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { canAccessContent } from "@/lib/access/entitlements";
import { useAuth } from "@/lib/auth/provider";
import { getBook, listChapters } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";
import { ReaderMarkdown } from "@/components/books/reader-markdown";

const fieldClass =
  "h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

export default function ReaderPage() {
  const { bookId } = useParams<{ bookId: string }>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useI18n();
  const { user, loading: authLoading } = useAuth();
  const { entitlements, progress, setReadingProgress } = useUserLibrary();
  const book = getBook(bookId);
  const chapters = listChapters(bookId);
  const saved = progress.find((item) => item.bookId === bookId);
  const requestedChapterId = searchParams.get("chapter");
  const chapterId = chapters.find((item) => item.id === requestedChapterId)?.id ?? saved?.chapterId ?? chapters[0]?.id ?? "";
  const [query, setQuery] = useState("");
  const [fontSize, setFontSize] = useState(1.15);
  const [tocOpen, setTocOpen] = useState(false);
  const savedKey = useRef("");

  const chapter = chapters.find((item) => item.id === chapterId) ?? chapters[0];
  const index = chapters.findIndex((item) => item.id === chapter?.id);
  const allowed = book
    ? canAccessContent({
        accessLevel: book.accessLevel,
        preview: Boolean(chapter && book.previewChapterIds.includes(chapter.id)),
        entitlements,
        contentKind: "book",
        contentId: book.id,
        user,
      })
    : false;

  useEffect(() => {
    if (authLoading || !book || !chapter || !allowed) return;
    const key = `${book.id}:${chapter.id}`;
    if (savedKey.current === key) return;
    savedKey.current = key;
    setReadingProgress(book.id, chapter.id, Math.round(((index + 1) / chapters.length) * 100));
  }, [allowed, authLoading, book, chapter, chapters.length, index, setReadingProgress]);

  const highlighted = useMemo(() => {
    if (!chapter) return "";
    if (!query.trim()) return chapter.body;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return chapter.body.replace(new RegExp(escaped, "ig"), (match) => `[[${match}]]`);
  }, [chapter, query]);

  if (!book || !chapter) return <EmptyState title="Book not found." />;
  if (!allowed) {
    return (
      <DeniedState
        productId={book.productId}
        yearProductId="product-foundation-year"
        showYear={book.id === "book-principles-doctrine-christ" || Boolean(book.productId?.includes("doctrine") || book.productId?.includes("repentance"))}
      />
    );
  }

  return (
    <div className="min-h-dvh bg-[#f3eee4] text-[#1a1712]">
      <header className="sticky top-0 z-30 border-b border-[#1a1712]/10 bg-[#f3eee4]/95 backdrop-blur" style={{ paddingTop: "env(safe-area-inset-top)" }}>
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
          <button
            type="button"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            aria-expanded={tocOpen}
            onClick={() => setTocOpen(true)}
          >
            {t("reader.contents")}
          </button>
          <button
            type="button"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            onClick={() => setFontSize((size) => Math.min(1.5, size + 0.1))}
            aria-label="Increase type"
          >
            A+
          </button>
          <button
            type="button"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            onClick={() => setFontSize((size) => Math.max(0.95, size - 0.1))}
            aria-label="Decrease type"
          >
            A-
          </button>
        </div>
      </header>

      <Sheet open={tocOpen} onOpenChange={setTocOpen}>
        <SheetContent side="left" className="p-0">
          <SheetHeader>
            <SheetTitle>{t("reader.contents")}</SheetTitle>
          </SheetHeader>
          <nav aria-label="Table of contents" className="px-4 pb-6">
            <ol className="space-y-2">
              {chapters.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={cn(
                      "w-full rounded-md px-2 py-2 text-left hover:bg-muted",
                      item.id === chapter.id && "bg-secondary font-medium",
                    )}
                    onClick={() => {
                      router.replace(`/learn/read/${book.id}?chapter=${encodeURIComponent(item.id)}`, { scroll: false });
                      setTocOpen(false);
                    }}
                  >
                    {item.number}. {item.title}
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="mx-auto max-w-3xl px-4 py-4">
        <label className="sr-only" htmlFor="book-search">
          {t("reader.search")}
        </label>
        <input
          id="book-search"
          className={fieldClass}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t("reader.search")}
        />
      </div>

      <article className="mx-auto px-4 py-6">
        <h1 className="mx-auto mb-4 max-w-[38rem] font-heading text-3xl tracking-wide">{chapter.title}</h1>
          {chapter.verses?.length ? (
            <>
              <p className="mx-auto mb-8 max-w-[38rem] text-sm tracking-[0.16em] text-[#6a542c] uppercase">
                King James Version
              </p>
              <ol className="reader-prose mx-auto max-w-[38rem] list-none p-0" style={{ ["--reader-size" as string]: `${fontSize}rem` }}>
                {chapter.verses
                  .filter(
                    (verse) =>
                      !query.trim() ||
                      `${verse.n} ${verse.text} ${verse.commentary ?? ""}`.toLowerCase().includes(query.trim().toLowerCase()),
                  )
                  .map((verse) => (
                    <li key={verse.n} id={`v${verse.n}`} className="mb-6 scroll-mt-24">
                      <p>
                        <sup className="mr-2 font-heading text-sm text-[#6a542c]">{verse.n}</sup>
                        {verse.text}
                      </p>
                      {verse.commentary ? (
                        <p className="mt-2 border-l-2 border-[#6a542c]/50 pl-3 text-[0.92em] leading-relaxed text-[#4a4033]">
                          <span className="mr-2 text-[0.62rem] tracking-[0.16em] uppercase">Commentary</span>
                          {verse.commentary}
                        </p>
                      ) : null}
                    </li>
                  ))}
              </ol>
              <p className="mx-auto mt-12 max-w-[38rem] text-sm leading-relaxed text-[#4a4033]">
                Genesis 1 is the open sample of MAKER BIBLE — Lordship Edition. The biblical text is Scripture. Notes
                marked Commentary are editorial, not the text.
              </p>
            </>
          ) : (
            <ReaderMarkdown
              content={highlighted}
              className="reader-prose mx-auto max-w-[38rem]"
              fontSize={fontSize}
            />
          )}
      </article>

      <footer className="mx-auto flex max-w-3xl justify-between gap-3 px-4 pt-4 pb-10">
        {chapters[index - 1] ? (
          <button
            type="button"
            className={cn(buttonVariants({ variant: "outline" }))}
            onClick={() => router.replace(`/learn/read/${book.id}?chapter=${encodeURIComponent(chapters[index - 1].id)}`, { scroll: false })}
          >
            {t("reader.previous")}
          </button>
        ) : (
          <span />
        )}
        {chapters[index + 1] ? (
          <button type="button" className={cn(buttonVariants())} onClick={() => router.replace(`/learn/read/${book.id}?chapter=${encodeURIComponent(chapters[index + 1].id)}`, { scroll: false })}>
            {t("reader.next")}
          </button>
        ) : (
          <Link href={`/learn/books/${book.id}`} className={buttonVariants({ variant: "outline" })}>
            {book.title}
          </Link>
        )}
      </footer>
    </div>
  );
}
