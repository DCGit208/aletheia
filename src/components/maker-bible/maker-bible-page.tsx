"use client";

import Link from "next/link";
import { Cover } from "@/components/content/cover";
import { AddToCartButton } from "@/components/shop/add-to-cart-button";
import { buttonVariants } from "@/components/ui/button";
import { grantTargetsForProduct, holdsEntitlement } from "@/lib/access/entitlements";
import {
  MAKER_BIBLE_CENTRAL_PROPOSITION,
  MAKER_BIBLE_COMMENTARY_THEMES,
  MAKER_BIBLE_FOUNDATION,
  MAKER_BIBLE_ID,
  MAKER_BIBLE_POSITIONING,
  MAKER_BIBLE_PRODUCT_ID,
  MAKER_BIBLE_WHY,
} from "@/lib/content/maker-bible";
import { getBook, getProduct } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";

const related = [
  { id: "book-doctrine-of-man", title: "The Doctrine of Man" },
  { id: "book-real-man-ai", title: "The Real Man in the Age of AI" },
  { id: "book-beyond-ai-man", title: "Beyond AI — Man" },
] as const;

export function MakerBiblePage() {
  const { t } = useI18n();
  const { user } = useAuth();
  const { entitlements } = useUserLibrary();
  const book = getBook(MAKER_BIBLE_ID);
  const product = getProduct(MAKER_BIBLE_PRODUCT_ID);
  if (!book || !product) return null;

  const targets = grantTargetsForProduct(product);
  const owned =
    targets.length > 0 &&
    targets.every((target) => holdsEntitlement(entitlements, target.contentKind, target.contentId));

  return (
    <article>
      <header className="grid gap-8 md:grid-cols-[220px_1fr]">
        <Cover title={book.title} subtitle={book.subtitle} tone={book.coverTone} image={book.coverImage} fit="contain" />
        <div>
          <p className="text-[0.7rem] tracking-[0.2em] text-primary uppercase">{book.publisher}</p>
          <h1 className="mt-2 font-heading text-4xl tracking-wide">{book.title}</h1>
          <p className="mt-2 font-heading text-xl text-muted-foreground">{book.subtitle}</p>
          <p className="mt-1 text-sm text-muted-foreground">Dr. Coach Achu Gustave</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">{MAKER_BIBLE_POSITIONING}</p>
          <p className="mt-6 font-heading text-2xl">${(product.priceCents / 100).toFixed(0)}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link href={`/learn/read/${book.id}`} className={cn(buttonVariants())}>
              Read Genesis 1
            </Link>
            {owned ? (
              <p className="self-center text-sm text-muted-foreground">You already hold this book.</p>
            ) : (
              <AddToCartButton productId={product.id} />
            )}
            {!user ? (
              <Link href="/sign-in" className={buttonVariants({ variant: "outline" })}>
                {t("nav.signIn")}
              </Link>
            ) : null}
            <Link
              href={`/community/talk?product=${encodeURIComponent(product.id)}`}
              className={buttonVariants({ variant: "outline" })}
            >
              {t("community.discuss")}
            </Link>
          </div>
        </div>
      </header>

      <section className="mt-12 max-w-3xl">
        <p className="text-[0.62rem] tracking-[0.22em] text-primary uppercase">Central proposition</p>
        <div className="mt-4 whitespace-pre-line font-heading text-xl leading-snug tracking-wide">
          {MAKER_BIBLE_CENTRAL_PROPOSITION}
        </div>
      </section>

      <section className="mt-12 max-w-3xl leading-relaxed">
        <h2 className="font-heading text-2xl tracking-wide">What this Bible is</h2>
        <p className="mt-4">
          MAKER BIBLE — Lordship Edition is a Bible first. It is not merely a philosophy book, a business book, a
          book about creativity, or a book about productivity.
        </p>
        <p className="mt-4">
          It is a Scripture-centered Bible edition. A study resource. A commentary and study-note project. A
          systematic exploration of the Maker’s design: man’s image, likeness, purpose, stewardship, and dominion.
        </p>
        <p className="mt-4">
          The biblical text remains the foundation. The editorial layer helps the reader recognize the Maker’s design
          throughout Scripture. God is the Maker. Man is made in the image and likeness of the Maker. Man is designed
          to steward creation as a maker.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">KJV. Commentary is marked as commentary, never as Scripture.</p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl tracking-wide">Why Maker Bible?</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {MAKER_BIBLE_WHY.map((item) => (
            <li key={item.title} className="rounded-2xl bg-card px-4 py-4">
              <p className="text-[0.62rem] tracking-[0.2em] text-primary uppercase">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="font-heading text-2xl tracking-wide">Scriptural foundation</h2>
        <p className="mt-2 text-sm text-muted-foreground">King James Version. Teasers only. The sample in the reader is Genesis 1.</p>
        <ul className="mt-6 space-y-6">
          {MAKER_BIBLE_FOUNDATION.map((item) => (
            <li key={item.ref} className="border-l-2 border-primary/40 pl-4">
              <p className="text-[0.62rem] tracking-[0.18em] text-primary uppercase">{item.ref}</p>
              <blockquote className="mt-2 font-heading text-lg leading-snug">“{item.text}”</blockquote>
              <p className="mt-2 text-sm text-muted-foreground">{item.teaser}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl tracking-wide">Inside the commentary</h2>
        <p className="mt-3 max-w-3xl leading-relaxed">
          Study notes will explore these heads as the Bible is opened. This page does not write that commentary. It
          names the work.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {MAKER_BIBLE_COMMENTARY_THEMES.map((theme) => (
            <li
              key={theme}
              className="rounded-full px-3 py-1 text-[0.68rem] tracking-[0.16em] text-muted-foreground ring-1 ring-foreground/15"
            >
              {theme}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="font-heading text-2xl tracking-wide">Related works</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Maker Bible establishes the Maker, creation, man’s design, stewardship, and dominion. These volumes develop
          that doctrine. They are not this Bible.
        </p>
        <ul className="mt-4 space-y-2">
          {related.map((item) => (
            <li key={item.id}>
              <Link href={`/publications/books/${item.id}`} className="text-primary hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
