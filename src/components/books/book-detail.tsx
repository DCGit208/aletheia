"use client";

import Link from "next/link";
import { Cover } from "@/components/content/cover";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { canAccessContent } from "@/lib/access/entitlements";
import { getAuthor, getProductForContent, listChapters } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { track } from "@/lib/analytics/events";
import { cacheBookForOffline } from "@/lib/reader/offline-db";
import type { Book } from "@/lib/data/types";

export function BookDetail({ book, context }: { book: Book; context: "learn" | "publications" }) {
  const { t } = useI18n();
  const { user } = useAuth();
  const { entitlements, bookmarks, toggleBookmark, progress } = useUserLibrary();
  const chapters = listChapters(book.id);
  const product = getProductForContent(book.id);
  const reading = progress.find((item) => item.bookId === book.id);
  const bookmarked = bookmarks.some((item) => item.targetId === book.id && item.kind === "book");
  const fullAccess = canAccessContent({
    accessLevel: book.accessLevel,
    preview: false,
    entitlements,
    contentKind: "book",
    contentId: book.id,
  });

  return (
    <article className="grid gap-8 md:grid-cols-[220px_1fr]">
      <Cover title={book.title} subtitle={book.subtitle} tone={book.coverTone} image={book.coverImage} />
      <div>
        <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">{book.publisher}</p>
        <h1 className="mt-2 font-heading text-3xl tracking-wide">{book.title}</h1>
        <p className="mt-2 text-muted-foreground">{book.subtitle}</p>
        <p className="mt-4 leading-relaxed">{book.description}</p>
        <p className="mt-3 text-sm text-muted-foreground">
          The published cover is shown here. Full chapter text is being prepared for the reader; the thesis is open as a preview.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {book.authors.map((author) => (
            <Badge key={author.id} variant="secondary">
              {getAuthor(author.id)?.displayName ?? author.displayName}
            </Badge>
          ))}
          {book.isbn ? <Badge variant="outline">ISBN {book.isbn}</Badge> : null}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            href={`/learn/read/${book.id}`}
            className={buttonVariants()}
            onClick={() => {
              track({ name: "book_open", bookId: book.id });
              if (fullAccess) void cacheBookForOffline(book, chapters);
            }}
          >
            {reading ? t("action.resume") : t("action.read")}
          </Link>
          {product && !fullAccess ? (
            <Link href={`/shop/${product.id}`} className={buttonVariants({ variant: "outline" })}>
              {t("action.purchase")}
            </Link>
          ) : null}
          {user ? (
            <Button variant="ghost" onClick={() => toggleBookmark("book", book.id, book.title)}>
              {bookmarked ? t("action.bookmarked") : t("action.bookmark")}
            </Button>
          ) : null}
          {context === "learn" ? (
            <Link href={`/publications/books/${book.id}`} className={buttonVariants({ variant: "link" })}>
              {t("nav.publications")}
            </Link>
          ) : (
            <Link href={`/learn/books/${book.id}`} className={buttonVariants({ variant: "link" })}>
              {t("nav.learn")}
            </Link>
          )}
        </div>
        <ol className="mt-10 space-y-2">
          {chapters.map((chapter) => {
            const preview = book.previewChapterIds.includes(chapter.id);
            return (
              <li key={chapter.id} className="flex justify-between rounded-lg px-3 py-2 ring-1 ring-foreground/10">
                <span>
                  {chapter.number}. {chapter.title}
                </span>
                <span className="text-xs text-muted-foreground">{fullAccess || preview ? "Open" : "Entitlement required"}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </article>
  );
}
