"use client";

import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
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

type ReaderTheme = "light" | "sepia" | "gray" | "dark" | "deep-dark";

const READER_THEMES: Record<ReaderTheme, {
  label: string;
  background: string;
  foreground: string;
  muted: string;
  accent: string;
  border: string;
  track: string;
}> = {
  light: { label: "Light", background: "#faf9f6", foreground: "#1c1b19", muted: "#68645d", accent: "#66502a", border: "rgba(28,27,25,0.12)", track: "rgba(28,27,25,0.10)" },
  sepia: { label: "Sepia", background: "#f3eee4", foreground: "#1a1712", muted: "#6d6457", accent: "#6a542c", border: "rgba(26,23,18,0.12)", track: "rgba(26,23,18,0.10)" },
  gray: { label: "Soft Gray", background: "#eef0f2", foreground: "#20242a", muted: "#66707a", accent: "#465f73", border: "rgba(32,36,42,0.12)", track: "rgba(32,36,42,0.10)" },
  dark: { label: "Dark", background: "#171614", foreground: "#eee9e1", muted: "#aaa39a", accent: "#c9a96e", border: "rgba(238,233,225,0.14)", track: "rgba(238,233,225,0.12)" },
  "deep-dark": { label: "Deep Dark", background: "#080808", foreground: "#e8e8e8", muted: "#969696", accent: "#d2b278", border: "rgba(232,232,232,0.14)", track: "rgba(232,232,232,0.12)" },
};

function ReaderContent() {
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
  const articleRef = useRef<HTMLElement | null>(null);
  const savedKey = useRef("");
  const [chapterPercent, setChapterPercent] = useState(0);\n  const [readerTheme, setReaderTheme] = useState<ReaderTheme>("sepia");

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
    setChapterPercent(0);
  }, [allowed, authLoading, book, chapter, chapters.length, index, setReadingProgress]);

  useEffect(() => {
    if (!allowed || !chapter || index < 0) return;
    const article = articleRef.current;
    if (!article) return;
    const clamp = (value: number) => Math.min(1, Math.max(0, value));

    const update = () => {
      const rect = article.getBoundingClientRect();
      const articleTop = rect.top + window.scrollY;
      const articleBottom = articleTop + article.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Count progress across the visible reading span of the actual chapter,
      // rather than using the article's internal scrollHeight.
      const readableStart = Math.max(0, articleTop - viewportHeight * 0.15);
      const readableEnd = Math.max(
        readableStart + 1,
        articleBottom - viewportHeight * 0.85,
      );
      const position = clamp(
        (window.scrollY - readableStart) / (readableEnd - readableStart),
      );
      setChapterPercent(Math.round(position * 1000) / 10);
    };
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => { frame = 0; update(); });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [allowed, chapter, chapters.length, index]);

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
            <p className="text-xs" style={{ color: theme.muted }}>
              {t("reader.progress")}: {chapterPercent.toFixed(1)}% · Chapter {index + 1} of {chapters.length}
            </p>
            <div className="mt-1 h-1 w-full overflow-hidden rounded-full" style={{ backgroundColor: theme.track }} role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={chapterPercent}>
              <div className="h-full rounded-full" style={{ width: `${chapterPercent}%`, backgroundColor: theme.accent }} />
            </div>
          </div>
          <button
            type="button"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            aria-expanded={tocOpen}
            onClick={() => setTocOpen(true)}
          >
            {t("reader.contents")}
          </button>
          <details className="relative shrink-0">
            <summary
              className="flex h-8 cursor-pointer list-none items-center gap-1.5 rounded-lg border px-2 text-sm [&::-webkit-details-marker]:hidden"
              style={{ borderColor: theme.border }}
              aria-label="Reading theme"
              title="Reading theme"
            >
              <span className="h-3.5 w-3.5 rounded-full border" style={{ backgroundColor: theme.background, borderColor: theme.border }} />
              <span className="hidden sm:inline">{theme.label}</span>
            </summary>
            <div className="absolute right-0 top-10 z-50 w-44 rounded-xl border p-1.5 shadow-xl" style={{ backgroundColor: theme.background, borderColor: theme.border }}>
              {(Object.entries(READER_THEMES) as [ReaderTheme, (typeof READER_THEMES)[ReaderTheme]][]).map(([key, option]) => (
                <button
                  key={key}
                  type="button"
                  className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm"
                  style={{ backgroundColor: key === readerTheme ? theme.track : "transparent", color: theme.foreground }}
                  onClick={(event) => {
                    setReaderTheme(key);
                    event.currentTarget.closest("details")?.removeAttribute("open");
                  }}
                >
                  <span className="h-4 w-4 rounded-full border" style={{ backgroundColor: option.background, borderColor: option.border }} />
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </details>
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

      <article ref={articleRef} className="mx-auto px-4 py-6" style={{ color: theme.foreground }}>
        <h1 className="mx-auto mb-4 max-w-[38rem] font-heading text-3xl tracking-wide">{chapter.title}</h1>
          {chapter.verses?.length ? (
            <>
              <p className="mx-auto mb-8 max-w-[38rem] text-sm tracking-[0.16em] text-[var(--reader-accent)] uppercase">
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
                        <sup className="mr-2 font-heading text-sm text-[var(--reader-accent)]">{verse.n}</sup>
                        {verse.text}
                      </p>
                      {verse.commentary ? (
                        <p className="mt-2 border-l-2 border-[var(--reader-accent)]/50 pl-3 text-[0.92em] leading-relaxed text-[var(--reader-muted)]">
                          <span className="mr-2 text-[0.62rem] tracking-[0.16em] uppercase">Commentary</span>
                          {verse.commentary}
                        </p>
                      ) : null}
                    </li>
                  ))}
              </ol>
              <p className="mx-auto mt-12 max-w-[38rem] text-sm leading-relaxed text-[var(--reader-muted)]">
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


export default function ReaderPage() {
  return (
    <Suspense fallback={<div className="min-h-dvh" style={{ backgroundColor: READER_THEMES.sepia.background }} aria-busy="true" />}>
      <ReaderContent />
    </Suspense>
  );
}
