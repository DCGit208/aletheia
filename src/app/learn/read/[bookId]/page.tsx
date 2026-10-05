"use client";

import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { DeniedState, EmptyState } from "@/components/content/query-state";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { canAccessContent } from "@/lib/access/entitlements";
import { useAuth } from "@/lib/auth/provider";
import { getBook, listChapters } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";
import { ReaderMarkdown, ReaderText } from "@/components/books/reader-markdown";
import { Bookmark, Highlighter } from "lucide-react";
import { createClientStore } from "@/lib/storage/client-store";
import { DEFAULT_READER_SETTINGS, loadReaderSettings, READER_THEMES, saveReaderSettings, type ReaderThemeKey } from "@/lib/reader/settings";

const fieldClass =
  "h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

function ReaderContent() {
  const { bookId } = useParams<{ bookId: string }>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useI18n();
  const { user, loading: authLoading } = useAuth();
  const { entitlements, progress, bookmarks, setReadingProgress, toggleBookmark } = useUserLibrary();
  const book = getBook(bookId);
  const chapters = listChapters(bookId);
  const saved = progress.find((item) => item.bookId === bookId);
  const requestedChapterId = searchParams.get("chapter");
  const chapterId = chapters.find((item) => item.id === requestedChapterId)?.id ?? saved?.chapterId ?? chapters[0]?.id ?? "";
  const [query, setQuery] = useState("");
  const [fontSize, setFontSize] = useState(1.15);
  const [tocOpen, setTocOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState({ chapterId, percent: 0 });
  const [selectedText, setSelectedText] = useState("");
  const savedKey = useRef("");
  const restoredScrollKey = useRef("");
  const userId = user?.uid ?? "guest";
  const settingsStore = useMemo(
    () => createClientStore(() => loadReaderSettings(userId), (value) => saveReaderSettings(userId, value)),
    [userId],
  );
  const settings = useSyncExternalStore(settingsStore.subscribe, settingsStore.getSnapshot, () => DEFAULT_READER_SETTINGS);
  const theme = READER_THEMES[settings.theme];

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
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const next = total > 0 ? Math.min(100, Math.max(0, (window.scrollY / total) * 100)) : 0;
        if (chapter) {
          setScrollPosition((current) => current.chapterId === chapter.id ? { chapterId: chapter.id, percent: next } : current);
        }
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [chapter?.id]);

  const currentScroll = scrollPosition.chapterId === chapter?.id ? scrollPosition.percent : 0;
  const bookProgress = chapters.length
    ? Math.min(100, Math.max(0, ((index + currentScroll / 100) / chapters.length) * 100))
    : 0;
  const persistedScroll = Math.floor(currentScroll / 5) * 5;

  useEffect(() => {
    if (authLoading || !book || !chapter || !allowed) return;
    const key = `${book.id}:${chapter.id}:${Math.floor(persistedScroll / 5)}`;
    if (savedKey.current === key) return;
    savedKey.current = key;
    setReadingProgress(book.id, chapter.id, Number(bookProgress.toFixed(1)), persistedScroll);
  }, [allowed, authLoading, book, bookProgress, chapter, persistedScroll, setReadingProgress]);

  useEffect(() => {
    if (authLoading || !book || !chapter || !allowed) return;
    const key = `${book.id}:${chapter.id}`;
    if (restoredScrollKey.current === key) return;
    restoredScrollKey.current = key;
    if (saved?.chapterId !== chapter.id || !saved.scrollPercent) return;
    const frame = window.requestAnimationFrame(() => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top: Math.max(0, total * (saved.scrollPercent! / 100)), behavior: "auto" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [allowed, authLoading, book, chapter, saved?.chapterId, saved?.scrollPercent]);

  function selectChapter(nextChapterId: string) {
    setScrollPosition({ chapterId: nextChapterId, percent: 0 });
    window.scrollTo({ top: 0, behavior: "auto" });
    router.replace(`/learn/read/${book.id}?chapter=${encodeURIComponent(nextChapterId)}`, { scroll: false });
  }

  const chapterBookmarks = bookmarks.filter((item) => item.kind === "book" && item.targetId === `${book.id}::${chapter.id}`);
  const bookHighlights = settings.highlights.filter((item) => item.bookId === book.id && item.chapterId === chapter.id);
  const selectedHighlightExists = bookHighlights.some((item) => item.text === selectedText);

  function saveHighlight() {
    const text = selectedText.trim().replace(/\s+/g, " ");
    if (!user || text.length < 3 || text.length > 240) return;
    const nextHighlights = selectedHighlightExists
      ? settings.highlights.filter((item) => !(item.bookId === book.id && item.chapterId === chapter.id && item.text === text))
      : [...settings.highlights, { bookId: book.id, chapterId: chapter.id, text }];
    settingsStore.set({ ...settings, highlights: nextHighlights });
    setSelectedText("");
    window.getSelection()?.removeAllRanges();
  }

  function captureSelection() {
    const rawSelection = window.getSelection()?.toString().trim() ?? "";
    setSelectedText(rawSelection.includes("\n") ? "" : rawSelection.replace(/\s+/g, " ").slice(0, 241));
  }

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
    <div className="min-h-dvh" style={{ backgroundColor: theme.background, color: theme.ink, ["--reader-size" as string]: `${fontSize}rem`, ["--reader-ink" as string]: theme.ink, ["--reader-heading" as string]: theme.heading, ["--reader-muted" as string]: theme.muted, ["--reader-accent" as string]: theme.accent, ["--reader-border" as string]: theme.border, ["--reader-highlight" as string]: theme.highlight }}>
      <div
        className="sticky top-0 z-30 border-b backdrop-blur"
        style={{ paddingTop: "env(safe-area-inset-top)", backgroundColor: theme.background, borderColor: theme.border }}
      >
        <header className="mx-auto max-w-3xl px-4 py-2">
          <div className="flex items-center gap-2">
            <Link href={`/learn/books/${book.id}`} className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
              Back to book
            </Link>
            <div className="min-w-0 flex-1">
              <p className="truncate font-heading text-sm">{book.title}</p>
              <p className="text-xs" style={{ color: theme.muted }}>{chapter.number}. {chapter.title}</p>
            </div>
            <button
              type="button"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              aria-expanded={tocOpen}
              onClick={() => setTocOpen(true)}
            >
              {t("reader.contents")}
            </button>
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className={cn(buttonVariants({ variant: chapterBookmarks.length ? "secondary" : "outline", size: "sm" }))}
                aria-pressed={chapterBookmarks.length > 0}
                disabled={!user}
                title={!user ? "Sign in to save bookmarks" : "Save this chapter to Account"}
                onClick={() => toggleBookmark("book", `${book.id}::${chapter.id}`, `${book.title} · ${chapter.number}. ${chapter.title}`)}
              >
                <Bookmark aria-hidden="true" />
                {chapterBookmarks.length ? "Bookmarked" : user ? "Bookmark chapter" : "Sign in to bookmark"}
              </button>
              <button
                type="button"
                className={cn(buttonVariants({ variant: selectedHighlightExists ? "secondary" : "outline", size: "sm" }))}
                disabled={!user || selectedText.length < 3 || selectedText.length > 240}
                title={!user ? "Sign in to save highlights" : selectedText.length < 3 ? "Select a passage first" : selectedText.length > 240 ? "Select a shorter passage" : "Save or remove the selected highlight"}
                onClick={saveHighlight}
              >
                <Highlighter aria-hidden="true" />
                {selectedHighlightExists ? "Remove highlight" : "Highlight selection"}
              </button>
              <label className="sr-only" htmlFor="reader-theme">Reading color</label>
              <select
                id="reader-theme"
                className="h-9 rounded-lg border bg-transparent px-2 text-sm"
                style={{ borderColor: theme.border, color: theme.ink }}
                value={settings.theme}
                onChange={(event) => settingsStore.set({ ...settings, theme: event.target.value as ReaderThemeKey })}
              >
                {Object.entries(READER_THEMES).map(([key, option]) => (
                  <option key={key} value={key}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1">
              <button type="button" className={cn(buttonVariants({ variant: "ghost", size: "sm" }))} onClick={() => setFontSize((size) => Math.min(1.5, size + 0.1))} aria-label="Increase type">A+</button>
              <button type="button" className={cn(buttonVariants({ variant: "ghost", size: "sm" }))} onClick={() => setFontSize((size) => Math.max(0.95, size - 0.1))} aria-label="Decrease type">A-</button>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="whitespace-nowrap text-xs" style={{ color: theme.muted }}>Book progress</span>
            <div
              className="h-1.5 flex-1 overflow-hidden rounded-full"
              role="progressbar"
              aria-label="Book reading progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Number(bookProgress.toFixed(1))}
              style={{ backgroundColor: theme.border }}
            >
              <div className="h-full rounded-full transition-[width] duration-150" style={{ width: `${bookProgress}%`, backgroundColor: theme.accent }} />
            </div>
            <span className="min-w-10 text-right text-xs tabular-nums" style={{ color: theme.muted }}>{bookProgress.toFixed(1)}%</span>
          </div>
          {selectedText.length > 0 && selectedText.length <= 240 ? (
            <p className="mt-1 text-xs" style={{ color: theme.muted }}>Selected passage ready to highlight.</p>
          ) : null}
        </header>
      </div>

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
                      selectChapter(item.id);
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

      <article className="mx-auto px-4 py-6" onMouseUp={captureSelection} onKeyUp={captureSelection}>
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
                        <ReaderText text={verse.text} highlightTerms={[...bookHighlights.map((item) => item.text), ...(query.trim() ? [query.trim()] : [])]} />
                      </p>
                      {verse.commentary ? (
                        <p className="mt-2 border-l-2 border-[var(--reader-border)] pl-3 text-[0.92em] leading-relaxed text-[var(--reader-muted)]">
                          <span className="mr-2 text-[0.62rem] tracking-[0.16em] uppercase">Commentary</span>
                          <ReaderText text={verse.commentary} highlightTerms={bookHighlights.map((item) => item.text)} />
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
              highlightTerms={bookHighlights.map((item) => item.text)}
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
            onClick={() => selectChapter(chapters[index - 1].id)}
          >
            {t("reader.previous")}
          </button>
        ) : (
          <span />
        )}
        {chapters[index + 1] ? (
          <button type="button" className={cn(buttonVariants())} onClick={() => selectChapter(chapters[index + 1].id)}>
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
    <Suspense fallback={<div className="min-h-dvh bg-[#f3eee4]" aria-busy="true" />}>
      <ReaderContent />
    </Suspense>
  );
}
