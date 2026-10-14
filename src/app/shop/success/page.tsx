"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import { Cover } from "@/components/content/cover";
import { PageIntro } from "@/components/content/page-intro";
import { buttonVariants } from "@/components/ui/button";
import { grantTargetsForProduct } from "@/lib/access/entitlements";
import { getBook, getCourse, getProduct, getProgram } from "@/lib/data/repository";
import {
  ONE_SOURCE_BOOK_ID,
  foundationGateCourseId,
  foundationHandbookBookId,
  foundationPrincipleCourseIds,
} from "@/lib/data/foundation-school-metadata";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";

export default function ShopSuccessPage() {
  const { t } = useI18n();
  const { clearCart, orders } = useUserLibrary();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- clear the cart on arrival only
  }, []);

  const latest = orders[0];
  const purchasedFoundationProgram = latest?.productIds.some(
    (productId) => productId === "product-foundation-year" || productId === "product-foundation-intensive",
  );
  const opened = useMemo(() => {
    if (!latest) return [];
    if (purchasedFoundationProgram) {
      const programId = latest.productIds.includes("product-foundation-intensive")
        ? "program-foundation-intensive"
        : "program-foundation-year";
      const program = getProgram(programId);
      const gateBook = getBook(ONE_SOURCE_BOOK_ID);
      const gateCourse = getCourse(foundationGateCourseId);
      const handbook = getBook(foundationHandbookBookId);
      return [
        {
          key: "foundation-program",
          href: `/learn/programs/${programId}`,
          title: program ? `Foundation School · ${program.title}` : "Foundation School",
          image: "/covers/principles-doctrine-christ.jpg",
          tone: "gold",
          meta: "Program",
        },
        {
          key: ONE_SOURCE_BOOK_ID,
          href: `/learn/read/${ONE_SOURCE_BOOK_ID}`,
          title: gateBook?.title ?? "One Source of Truth",
          image: gateBook?.coverImage,
          tone: gateBook?.coverTone,
          meta: "Gate book",
        },
        {
          key: foundationGateCourseId,
          href: `/learn/courses/${foundationGateCourseId}`,
          title: gateCourse?.title ?? "Doctrine of the Graphē",
          image: gateCourse?.coverImage,
          tone: gateCourse?.coverTone,
          meta: "First step",
        },
        {
          key: foundationHandbookBookId,
          href: `/learn/read/${foundationHandbookBookId}`,
          title: handbook?.title ?? "The Principles of the Doctrine of Christ",
          image: handbook?.coverImage,
          tone: handbook?.coverTone,
          meta: "School handbook",
        },
        ...foundationPrincipleCourseIds.map((courseId, index) => {
          const course = getCourse(courseId);
          return {
            key: courseId,
            href: `/learn/courses/${courseId}`,
            title: course?.title ?? courseId,
            image: course?.coverImage,
            tone: course?.coverTone,
            meta: `Course ${index + 1} of 6`,
          };
        }),
      ];
    }
    return latest.productIds.flatMap((productId) => {
      const product = getProduct(productId);
      if (!product) return [];
      return grantTargetsForProduct(product).map((target) => {
        if (target.contentKind === "book") {
          const book = getBook(target.contentId);
          return {
            key: `${productId}-${target.contentId}`,
            href: `/learn/read/${target.contentId}`,
            title: book?.title ?? target.contentId,
            image: book?.coverImage,
            tone: book?.coverTone,
            meta: "Book",
          };
        }
        if (target.contentKind === "course") {
          const course = getCourse(target.contentId);
          return {
            key: `${productId}-${target.contentId}`,
            href: `/learn/courses/${target.contentId}`,
            title: course?.title ?? target.contentId,
            image: course?.coverImage,
            tone: course?.coverTone,
            meta: "Course",
          };
        }
        const program = getProgram(target.contentId);
        return {
          key: `${productId}-${target.contentId}`,
          href: `/learn/programs/${target.contentId}`,
          title: program ? `Foundation School · ${program.title}` : target.contentId,
          image: "/covers/principles-doctrine-christ.jpg",
          tone: "gold",
          meta: "Year",
        };
      });
    });
  }, [latest, purchasedFoundationProgram]);

  return (
    <div className="mx-auto max-w-lg">
      <PageIntro title={t("shop.successTitle")} lead={t("shop.successLead")} />
      {purchasedFoundationProgram ? (
        <div className="mb-6 rounded-2xl border border-primary/20 bg-primary/5 p-4">
          <p className="font-heading text-lg">Start with the Graphē gate.</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Your Foundation School program is open: gate book, gate course, handbook, and all six first-principle
            courses. Begin with the Doctrine of the Graphē, then walk Course 1 through Course 6.
          </p>
          <Link
            href={`/learn/courses/${foundationGateCourseId}`}
            className={cn(buttonVariants(), "mt-4 h-11 rounded-full px-5")}
          >
            Open the first step
          </Link>
        </div>
      ) : null}
      {opened.length > 0 ? (
        <ul className="mb-6 space-y-3">
          {opened.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className="flex items-center gap-3 rounded-xl bg-card/70 px-3 py-3 ring-1 ring-primary/25 transition-colors hover:bg-card"
              >
                <Cover
                  title={item.title}
                  image={item.image}
                  tone={item.tone}
                  badge={item.meta}
                  compact
                  className="h-14 w-11 shrink-0 !aspect-auto rounded-lg"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-heading text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.meta}</p>
                </div>
                <span className="text-sm text-primary">{t("account.openItem")}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="flex flex-wrap gap-2">
        <Link href="/account/library" className={cn(buttonVariants(), "h-11 rounded-full px-5")}>
          {t("shop.successOpen")}
        </Link>
        <Link href="/shop" className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-5")}>
          {t("nav.shop")}
        </Link>
      </div>
    </div>
  );
}
