"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Cover } from "@/components/content/cover";
import { EmptyState } from "@/components/content/query-state";
import { Button, buttonVariants } from "@/components/ui/button";
import { getBook, getCourse, getProduct } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const { t } = useI18n();
  const { user } = useAuth();
  const { addToCart, entitlements } = useUserLibrary();
  const product = getProduct(productId);
  if (!product) return <EmptyState title="Product not found." />;
  const owned = product.contentId
    ? entitlements.some((item) => item.contentId === product.contentId)
    : false;
  const book = product.kind === "book" && product.contentId ? getBook(product.contentId) : null;
  const course = product.kind === "course" && product.contentId ? getCourse(product.contentId) : null;

  return (
    <article className="grid gap-8 md:grid-cols-[220px_1fr]">
      <Cover title={product.title} tone={product.coverTone} />
      <div>
        <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">{product.kind}</p>
        <h1 className="mt-2 font-heading text-3xl tracking-wide">{product.title}</h1>
        <p className="mt-4 leading-relaxed">{product.description}</p>
        <p className="mt-4 font-heading text-2xl">
          {product.priceCents === 0 ? "Free" : `$${(product.priceCents / 100).toFixed(2)}`}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {owned ? (
            <p className="text-sm text-muted-foreground">You already hold an entitlement for this content.</p>
          ) : (
            <Button onClick={() => addToCart(product.id)} disabled={!user}>
              {t("action.addToCart")}
            </Button>
          )}
          {!user ? (
            <Link href="/sign-in" className={buttonVariants({ variant: "outline" })}>
              {t("nav.signIn")}
            </Link>
          ) : null}
          {book ? (
            <Link href={`/publications/books/${book.id}`} className={buttonVariants({ variant: "link" })}>
              {book.title}
            </Link>
          ) : null}
          {course ? (
            <Link href={`/learn/courses/${course.id}`} className={buttonVariants({ variant: "link" })}>
              {course.title}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
