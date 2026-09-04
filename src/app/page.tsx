"use client";

import Link from "next/link";
import { ContentCard } from "@/components/content/content-card";
import { Cover } from "@/components/content/cover";
import { ListRow } from "@/components/content/list-row";
import { Rail } from "@/components/content/rail";
import { SectionHeader } from "@/components/content/section-header";
import { HomeAnnouncements } from "@/components/content/home-announcements";
import { buttonVariants } from "@/components/ui/button";
import { holdsEntitlement } from "@/lib/access/entitlements";
import { catalog } from "@/lib/data/catalog";
import { getOffer } from "@/lib/commerce/offerings";
import {
  getBook,
  getCourse,
  getJournal,
  getProduct,
  getProgram,
  getTopic,
} from "@/lib/data/repository";
import { courseProgressPercent, resumeCourseHref } from "@/lib/learn/continue";
import { currentUnitIndex, weekInYear } from "@/lib/learn/pacing";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const { t } = useI18n();
  const { user } = useAuth();
  const { enrollments, progress, programEnrollments, entitlements } = useUserLibrary();
  const home = catalog.home;

  const continueEnrollment = enrollments[0];
  const continueCourse = continueEnrollment ? getCourse(continueEnrollment.courseId) : null;
  const continueBook = progress[0] ? getBook(progress[0].bookId) : null;
  const yearEnrollment = programEnrollments.find(
    (item) =>
      item.programId === "program-foundation-year" || item.programId === "program-foundation-intensive",
  );
  const yearProgram = yearEnrollment ? getProgram(yearEnrollment.programId) : null;
  const ownsYear =
    holdsEntitlement(entitlements, "program", "program-foundation-year") ||
    holdsEntitlement(entitlements, "program", "program-foundation-intensive");
  const yearProduct = getProduct("product-foundation-year");

  const primaryHref = continueCourse
    ? resumeCourseHref(continueCourse.id, continueEnrollment)
    : continueBook
      ? `/learn/read/${continueBook.id}`
      : ownsYear
        ? "/learn/schools/school-foundation"
        : user
          ? "/learn"
          : "/learn";

  const primaryLabel = continueCourse
    ? t("home.continueLearning")
    : continueBook
      ? t("home.continueReading")
      : user
        ? ownsYear
          ? t("home.openSchool")
          : t("action.continue")
        : t("home.enter");

  return (
    <div>
      <section className="-mx-5 mb-8 overflow-hidden px-5 pt-2 pb-8">
        <p className="text-[0.68rem] tracking-[0.28em] text-primary uppercase">
          {user ? t("brand.positioning") : t("home.continueKicker")}
        </p>
        <h1 className="mt-4 font-heading text-[2.35rem] leading-[0.95]">
          {user ? (
            <>
              {t("home.welcomeBack")}
              <br />
              {user.displayName}.
            </>
          ) : (
            <>
              {t("home.guestTitle")}
              <br />
              <span className="text-muted-foreground">{t("home.heroLine3")}</span>
            </>
          )}
        </h1>
        <p className="mt-4 max-w-[22rem] text-sm leading-relaxed text-muted-foreground">
          {user ? t("home.memberLead") : t("home.heroLine2")}
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Link
            href={primaryHref}
            className={cn(buttonVariants({ size: "lg" }), "h-11 justify-center rounded-full")}
          >
            {primaryLabel}
          </Link>
          {!user ? (
            <Link
              href="/sign-in"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "h-11 justify-center rounded-full")}
            >
              {t("action.join")}
            </Link>
          ) : (
            <Link
              href="/account/library"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "h-11 justify-center rounded-full")}
            >
              {t("home.viewLibrary")}
            </Link>
          )}
        </div>
      </section>

      {user && (continueCourse || continueBook) ? (
        <section className="mb-8">
          <SectionHeader kicker={t("home.continueKicker")} title={t("learn.myLearning")} />
          <div className="overflow-hidden rounded-2xl bg-card">
            {continueCourse && continueEnrollment ? (
              <ListRow
                href={resumeCourseHref(continueCourse.id, continueEnrollment)}
                title={t("home.continueLearning")}
                subtitle={`${continueCourse.title} · ${courseProgressPercent(continueCourse.id, continueEnrollment)}%`}
              />
            ) : null}
            {continueBook ? (
              <ListRow
                href={`/learn/read/${continueBook.id}`}
                title={t("home.continueReading")}
                subtitle={`${continueBook.title}${progress[0] ? ` · ${progress[0].percent}%` : ""}`}
              />
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="shop-hero mb-8 overflow-hidden rounded-2xl">
        <div className="relative grid gap-5 p-4 sm:grid-cols-[120px_1fr] sm:items-center sm:p-5">
          <Cover
            title={t("home.foundationTitle")}
            image="/covers/principles-doctrine-christ.jpg"
            badge={ownsYear ? "Open" : "Year"}
            className="mx-auto w-[38%] max-w-[120px] shadow-[0_16px_36px_oklch(0_0_0_/_0.45)] sm:mx-0 sm:w-full sm:max-w-none"
          />
          <div className="min-w-0">
            <p className="text-[0.62rem] tracking-[0.22em] text-primary uppercase">
              {t("home.foundationKicker")}
            </p>
            <h2 className="mt-2 font-heading text-[1.45rem] leading-[1.08]">
              {yearProgram ? `Foundation School · ${yearProgram.title}` : t("home.foundationTitle")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {ownsYear && yearEnrollment && yearProgram
                ? `${t("learn.weekOf")} ${weekInYear(yearEnrollment.startedAt, yearProgram.durationWeeks)} · ${t("learn.unitOf")} ${currentUnitIndex(yearEnrollment.startedAt, yearProgram.unitWeeks) + 1}`
                : t("home.foundationLead")}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={ownsYear ? "/learn/schools/school-foundation" : `/shop/${yearProduct?.id ?? "product-foundation-year"}`}
                className={cn(buttonVariants(), "h-11 rounded-full px-5")}
              >
                {ownsYear ? t("home.openSchool") : t("shop.viewOffer")}
              </Link>
              <Link
                href="/learn"
                className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-5")}
              >
                {t("nav.learn")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Rail title={t("home.newBooks")} href="/publications/books" actionLabel={t("action.viewAll")}>
        {home.featuredBookIds.slice(0, 8).map((id) => {
          const book = getBook(id);
          if (!book) return null;
          return (
            <ContentCard
              key={book.id}
              href={`/publications/books/${book.id}`}
              title={book.title}
              subtitle={book.authors.map((author) => author.displayName).join(", ")}
              tone={book.coverTone}
              image={book.coverImage}
            />
          );
        })}
      </Rail>

      <section className="mb-8">
        <SectionHeader title={t("home.announcements")} />
        <HomeAnnouncements />
      </section>

      <Rail title={t("home.shop")} href="/shop" actionLabel={t("action.viewAll")}>
        {home.featuredProductIds.map((id) => {
          const product = getProduct(id);
          if (!product) return null;
          const offer = getOffer(product.id);
          return (
            <ContentCard
              key={product.id}
              href={`/shop/${product.id}`}
              title={product.title}
              subtitle={product.priceCents === 0 ? "Free" : `$${(product.priceCents / 100).toFixed(0)}`}
              tone={product.coverTone}
              image={product.coverImage ?? (product.id.includes("foundation") ? "/covers/principles-doctrine-christ.jpg" : undefined)}
              imageFit={product.kind === "bundle" ? "cover" : "contain"}
              badge={offer?.badge}
              emphasizePrice
            />
          );
        })}
      </Rail>

      <section className="mb-8">
        <SectionHeader title={t("home.community")} href="/community" actionLabel={t("action.viewAll")} />
        <div className="overflow-hidden rounded-2xl bg-card">
          {home.featuredTopicIds.map((id) => {
            const topic = getTopic(id);
            if (!topic) return null;
            return (
              <ListRow key={topic.id} href={`/community/topic/${topic.id}`} title={topic.title} subtitle={topic.excerpt} />
            );
          })}
        </div>
      </section>

      {home.featuredJournalIds.map((id) => {
        const journal = getJournal(id);
        if (!journal) return null;
        return (
          <Link
            key={journal.id}
            href={`/publications/journals/${journal.id}`}
            className="mb-8 block rounded-2xl bg-linear-to-br from-[#1c1812] to-[#3d3220] px-5 py-6"
          >
            <p className="text-[0.62rem] tracking-[0.22em] text-primary uppercase">{t("home.journals")}</p>
            <h2 className="mt-2 font-heading text-2xl">{journal.title}</h2>
            <p className="mt-2 text-sm text-white/70">{journal.description}</p>
          </Link>
        );
      })}
    </div>
  );
}
