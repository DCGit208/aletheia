"use client";

import Link from "next/link";
import { useState } from "react";
import { ReaderMarkdown } from "@/components/books/reader-markdown";
import { Cover } from "@/components/content/cover";
import { CoverArtworkPicker } from "@/components/content/cover-artwork-picker";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { canAccessContent } from "@/lib/access/entitlements";
import { getOffer } from "@/lib/commerce/offerings";
import { getAuthor, getProduct, getProductForContent, listChapters } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { track } from "@/lib/analytics/events";
import type { Book } from "@/lib/data/types";
import { cn } from "@/lib/utils";

export function BookDetail({ book, context }: { book: Book; context: "learn" | "publications" }) {
  const [introductionExpanded, setIntroductionExpanded] = useState(false);
  const { t } = useI18n();
  const { user } = useAuth();
  const { entitlements, bookmarks, toggleBookmark, progress } = useUserLibrary();
  const chapters = listChapters(book.id);
  const product = getProductForContent(book.id);
  const offer = product ? getOffer(product.id) : null;
  const yearProduct = book.id === "book-principles-doctrine-christ" ? getProduct("product-foundation-year") : null;
  const reading = progress.find((item) => item.bookId === book.id);
  const bookmarked = bookmarks.some((item) => item.targetId === book.id && item.kind === "book");
  const fullAccess = canAccessContent({
    accessLevel: book.accessLevel,
    preview: false,
    entitlements,
    contentKind: "book",
    contentId: book.id,
    user,
  });

  return (
    <article className="grid gap-8 md:grid-cols-[220px_1fr]">
      {book.coverArtworks && book.coverArtworks.length > 1 ? (
        <CoverArtworkPicker artworks={book.coverArtworks} defaultImage={book.coverImage} title={book.title} />
      ) : (
        <Cover title={book.title} subtitle={book.subtitle} tone={book.coverTone} image={book.coverImage} />
      )}
      <div>
        <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
          {offer?.kicker ?? book.publisher}
        </p>
        <h1 className="mt-2 font-heading text-3xl tracking-wide">{book.title}</h1>
        <p className="mt-2 text-muted-foreground">{book.subtitle}</p>
        {book.id === "book-one-source-of-truth" ? (
          <>
            <ReaderMarkdown
              content={
                introductionExpanded
                  ? book.description
                  : book.description.split(/\n\s*\n/).slice(0, 4).join("\n\n")
              }
              className="mt-4"
              fontSize={1}
            />
            <button
              type="button"
              className="mt-1 text-sm font-medium text-primary underline underline-offset-4"
              aria-expanded={introductionExpanded}
              onClick={() => setIntroductionExpanded((expanded) => !expanded)}
            >
              {introductionExpanded ? "Read less" : "Read more"}
            </button>
          </>
        ) : (
          <p className="mt-4 leading-relaxed">{book.description}</p>
        )}
        {book.chapterCount === 1 &&
        chapters.every((chapter) => !chapter.verses?.length && chapter.body.trim().length < 2500) ? (
          <p className="mt-3 text-sm text-muted-foreground">
            The published cover is shown here. Full chapter text is being prepared for the reader; the thesis is
            open as a preview.
          </p>
        ) : null}
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
            className={cn(buttonVariants(), "h-11 rounded-full px-5")}
            onClick={() => {
              track({ name: "book_open", bookId: book.id });
            }}
          >
            {reading ? t("action.resume") : t("action.read")}
          </Link>
          {product && !fullAccess ? (
            <Link
              href={`/shop/${product.id}`}
              className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-5")}
            >
              {offer?.shopGroup === "textbook"
                ? `Buy the textbook — $${(product.priceCents / 100).toFixed(0)}`
                : t("action.purchase")}
            </Link>
          ) : null}
          {yearProduct && !fullAccess ? (
            <Link
              href={`/shop/${yearProduct.id}`}
              className={cn(buttonVariants({ variant: "ghost" }), "h-11 rounded-full px-5")}
            >
              The Walk — ${(yearProduct.priceCents / 100).toFixed(0)}
            </Link>
          ) : null}
          {user ? (
            <Button variant="ghost" className="h-11 rounded-full px-5" onClick={() => toggleBookmark("book", book.id, book.title)}>
              {bookmarked ? t("action.bookmarked") : t("action.bookmark")}
            </Button>
          ) : null}
          <Link
            href={`/community/talk?product=${encodeURIComponent(product?.id ?? book.productId ?? book.id)}`}
            className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-5")}
          >
            {t("community.discuss")}
          </Link>
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
            const open = fullAccess || preview;
            return (
              <li key={chapter.id}>
                {open ? (
                  <Link
                    href={`/learn/read/${book.id}?chapter=${encodeURIComponent(chapter.id)}`}
                    className="flex justify-between rounded-lg px-3 py-2 ring-1 ring-foreground/10 transition-colors hover:bg-card"
                  >
                    <span>
                      {chapter.number}. {chapter.title}
                    </span>
                    <span className="text-xs text-muted-foreground">Open</span>
                  </Link>
                ) : (
                  <div className="flex justify-between rounded-lg px-3 py-2 opacity-70 ring-1 ring-foreground/10">
                    <span>
                      {chapter.number}. {chapter.title}
                    </span>
                    <span className="text-xs text-muted-foreground">Entitlement required</span>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </article>
  );
}
