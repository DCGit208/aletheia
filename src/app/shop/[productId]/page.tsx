"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Cover } from "@/components/content/cover";
import { EmptyState } from "@/components/content/query-state";
import { Button, buttonVariants } from "@/components/ui/button";
import { grantTargetsForProduct } from "@/lib/access/entitlements";
import { getBook, getCourse, getProduct, getProgram } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";

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
          ? { id, href: `/publications/books/${book.id}`, title: book.title, meta: "Textbook" }
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
  const { addToCart, entitlements } = useUserLibrary();
  const product = getProduct(productId);
  if (!product) return <EmptyState title="Product not found." />;
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

  return (
    <article className="grid gap-8 md:grid-cols-[220px_1fr]">
      <Cover
        title={product.title}
        tone={product.coverTone}
        image={product.coverImage}
        fit={product.kind === "bundle" ? "cover" : "contain"}
      />
      <div>
        <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
          {product.kind === "program" ? "The year" : product.kind}
        </p>
        <h1 className="mt-2 font-heading text-3xl tracking-wide">{product.title}</h1>
        <p className="mt-4 leading-relaxed">{product.description}</p>
        <p className="mt-4 font-heading text-2xl">
          {product.compareAtCents ? (
            <span className="mr-2 text-base font-sans text-muted-foreground line-through">
              ${(product.compareAtCents / 100).toFixed(0)}
            </span>
          ) : null}
          {product.priceCents === 0 ? "Free" : `$${(product.priceCents / 100).toFixed(2)}`}
        </p>
        {included.length > 0 ? (
          <ul className="mt-4 space-y-2 text-sm">
            {included.map((item) =>
              item ? (
                <li key={item.id}>
                  <span className="mr-2 text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                    {item.meta}
                  </span>
                  <Link href={item.href} className="text-primary">
                    {item.title}
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        ) : null}
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
          {program ? (
            <Link href={`/learn/programs/${program.id}`} className={buttonVariants({ variant: "link" })}>
              {program.title}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
