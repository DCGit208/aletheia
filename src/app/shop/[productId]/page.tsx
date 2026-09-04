"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Cover } from "@/components/content/cover";
import { MakerBiblePage } from "@/components/maker-bible/maker-bible-page";
import { MAKER_BIBLE_PRODUCT_ID } from "@/lib/content/maker-bible";
import { EmptyState } from "@/components/content/query-state";
import { AddToCartButton } from "@/components/shop/add-to-cart-button";
import { buttonVariants } from "@/components/ui/button";
import { grantTargetsForProduct } from "@/lib/access/entitlements";
import { getOffer, isMomoYearProduct } from "@/lib/commerce/offerings";
import { getBook, getCourse, getProduct, getProgram } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";

function includedRows(productId: string, ids: string[]) {
  return ids
    .filter((id) => id !== productId)
    .map((id) => {
      if (id.startsWith("course-")) {
        const course = getCourse(id);
        return course
          ? { id, href: `/learn/courses/${course.id}`, title: course.title, meta: "Course" }
          : null;
      }
      if (id.startsWith("book-")) {
        const book = getBook(id);
        return book
          ? {
              id,
              href: `/publications/books/${book.id}`,
              title: book.title,
              meta: book.id === "book-principles-doctrine-christ" ? "Textbook" : "Book",
              image: book.coverImage,
              tone: book.coverTone,
            }
          : null;
      }
      if (id.startsWith("program-")) {
        const program = getProgram(id);
        return program
          ? { id, href: `/learn/programs/${program.id}`, title: program.title, meta: "Program" }
          : null;
      }
      return null;
    })
    .filter(Boolean);
}

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const { t } = useI18n();
  const { user } = useAuth();
  const { entitlements } = useUserLibrary();
  const product = getProduct(productId);
  if (!product) return <EmptyState title="Product not found." />;
  if (product.id === MAKER_BIBLE_PRODUCT_ID) return <MakerBiblePage />;
  const offer = getOffer(product.id);
  const targets = grantTargetsForProduct(product);
  const owned =
    targets.length > 0 &&
    targets.every((target) =>
      entitlements.some((item) => item.contentKind === target.contentKind && item.contentId === target.contentId),
    );
  const book = product.kind === "book" && product.contentId ? getBook(product.contentId) : null;
  const course = product.kind === "course" && product.contentId ? getCourse(product.contentId) : null;
  const program = product.kind === "program" && product.contentId ? getProgram(product.contentId) : null;
  const included = includedRows(
    product.contentId ?? product.id,
    product.includedContentIds ?? [],
  );
  const priceLabel = product.priceCents === 0 ? "Free" : `$${(product.priceCents / 100).toFixed(2)}`;

  return (
    <article className="relative">
      <div className="grid gap-6 sm:grid-cols-[200px_1fr] sm:items-start md:grid-cols-[220px_1fr] md:gap-8">
        <Cover
          title={product.title}
          tone={product.coverTone}
          image={product.coverImage}
          fit={product.kind === "bundle" ? "cover" : "contain"}
          badge={offer?.badge}
          className="mx-auto w-[58%] max-w-[220px] shadow-[0_20px_48px_oklch(0_0_0_/_0.45)] sm:mx-0 sm:w-full sm:max-w-none"
        />
        <div className="min-w-0 pb-20 sm:pb-0">
          <p className="text-[0.7rem] tracking-[0.2em] text-primary uppercase">
            {offer?.kicker ?? (product.kind === "program" ? "Foundation School" : product.kind)}
          </p>
          <h1 className="mt-2 font-heading text-[1.85rem] leading-[1.08] tracking-wide sm:text-3xl">
            {product.title}
          </h1>
          <p className="mt-4 leading-relaxed text-foreground/90">{product.description}</p>
          {isMomoYearProduct(product.id) ? (
            <p className="mt-3 text-sm text-muted-foreground">{t("shop.momoProductNote")}</p>
          ) : null}
          <p className="mt-5 font-heading text-3xl text-primary">
            {product.compareAtCents ? (
              <span className="mr-2 text-base font-sans text-muted-foreground line-through">
                ${(product.compareAtCents / 100).toFixed(0)}
              </span>
            ) : null}
            {priceLabel}
          </p>

          {included.length > 0 ? (
            <ul className="mt-5 space-y-2">
              {included.map((item) =>
                item ? (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 rounded-xl bg-white/3 px-2.5 py-2 ring-1 ring-white/6 transition-colors hover:bg-white/6"
                    >
                      {"image" in item && item.image ? (
                        <Cover
                          title={item.title}
                          image={item.image}
                          tone={"tone" in item ? item.tone : undefined}
                          compact
                          className="h-12 w-9 shrink-0 !aspect-auto rounded-md"
                        />
                      ) : (
                        <span className="grid h-12 w-9 shrink-0 place-items-center rounded-md bg-muted text-[0.55rem] tracking-[0.12em] text-muted-foreground uppercase">
                          {item.meta.slice(0, 3)}
                        </span>
                      )}
                      <span className="min-w-0">
                        <span className="block text-[0.58rem] tracking-[0.14em] text-muted-foreground uppercase">
                          {item.meta}
                        </span>
                        <span className="block truncate font-heading text-sm text-primary">{item.title}</span>
                      </span>
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          ) : null}

          <div className="mt-6 hidden flex-wrap gap-2 sm:flex">
            {owned ? (
              <p className="text-sm text-muted-foreground">{t("shop.alreadyOwned")}</p>
            ) : (
              <AddToCartButton productId={product.id} />
            )}
            {!user ? (
              <Link
                href="/sign-in"
                className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-5")}
              >
                {t("nav.signIn")}
              </Link>
            ) : null}
            <Link
              href={`/community/talk?product=${encodeURIComponent(product.id)}`}
              className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-5")}
            >
              {t("community.discuss")}
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {book ? (
              <Link href={`/publications/books/${book.id}`} className="text-primary underline-offset-4 hover:underline">
                {t("shop.openPublication")}
              </Link>
            ) : null}
            {course ? (
              <Link href={`/learn/courses/${course.id}`} className="text-primary underline-offset-4 hover:underline">
                {t("shop.openCourse")}
              </Link>
            ) : null}
            {program ? (
              <Link href={`/learn/programs/${program.id}`} className="text-primary underline-offset-4 hover:underline">
                {t("shop.openProgram")}
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      {!owned ? (
        <div className="shop-sticky-buy sm:hidden">
          <div className="flex items-center gap-3">
            <div className="min-w-0">
              <p className="truncate text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase">
                {offer?.badge ?? product.kind}
              </p>
              <p className="font-heading text-lg text-primary">{priceLabel}</p>
            </div>
            <AddToCartButton productId={product.id} className="ml-auto shrink-0" />
          </div>
        </div>
      ) : null}
    </article>
  );
}
