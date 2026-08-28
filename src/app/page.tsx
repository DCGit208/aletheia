"use client";

import Link from "next/link";
import { ContentCard } from "@/components/content/content-card";
import { ListRow } from "@/components/content/list-row";
import { Rail } from "@/components/content/rail";
import { SectionHeader } from "@/components/content/section-header";
import { buttonVariants } from "@/components/ui/button";
import { useAuth } from "@/lib/auth/provider";
import {
  getBook,
  getCourse,
  getJournal,
  getProduct,
  getTopic,
  listAnnouncements,
} from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { catalog } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const { t } = useI18n();
  const { user } = useAuth();
  const { enrollments, progress } = useUserLibrary();
  const home = catalog.home;
  const announcements = listAnnouncements();
  const continueCourse = enrollments[0] ? getCourse(enrollments[0].courseId) : null;
  const continueBook = progress[0] ? getBook(progress[0].bookId) : null;

  return (
    <div>
      <section className="-mx-5 mb-8 overflow-hidden px-5 pt-2 pb-8">
        <p className="text-[0.68rem] tracking-[0.28em] text-primary uppercase">{t("home.continueKicker")}</p>
        <h1 className="mt-4 font-heading text-[2.35rem] leading-[0.95]">
          {user ? (
            <>
              Welcome back,
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
        <p className="mt-4 max-w-[20rem] text-sm leading-relaxed text-muted-foreground">
          {user ? t("home.guestLead") : t("home.heroLine2")}
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Link href={user ? "/learn" : "/learn"} className={cn(buttonVariants({ size: "lg" }), "h-11 justify-center rounded-full")}>
            {user ? t("action.continue") : t("home.enter")}
          </Link>
          {!user ? (
            <Link href="/sign-in" className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "h-11 justify-center rounded-full")}>
              {t("action.join")}
            </Link>
          ) : null}
        </div>
      </section>

      {user && (continueCourse || continueBook) ? (
        <section className="mb-8">
          <SectionHeader kicker={t("home.continueKicker")} title={t("learn.myLearning")} />
          <div className="overflow-hidden rounded-2xl bg-card">
            {continueCourse ? (
              <ListRow
                href={`/learn/courses/${continueCourse.id}`}
                title={t("home.continueLearning")}
                subtitle={continueCourse.title}
              />
            ) : null}
            {continueBook ? (
              <ListRow
                href={`/learn/read/${continueBook.id}`}
                title={t("home.continueReading")}
                subtitle={continueBook.title}
              />
            ) : null}
          </div>
        </section>
      ) : null}

      <Rail title={t("home.featuredLearning")} href="/learn/courses" actionLabel={t("action.viewAll")}>
        {home.featuredCourseIds.map((id) => {
          const course = getCourse(id);
          if (!course) return null;
          return (
            <ContentCard
              key={course.id}
              href={`/learn/courses/${course.id}`}
              title={course.title}
              subtitle={course.subtitle}
              tone={course.coverTone}
              image={course.coverImage}
              meta={course.instructor.displayName}
            />
          );
        })}
      </Rail>

      <Rail title={t("home.newBooks")} href="/publications/books" actionLabel={t("action.viewAll")}>
        {home.featuredBookIds.map((id) => {
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
        <SectionHeader kicker="Live" title={t("home.community")} href="/community" actionLabel={t("action.viewAll")} />
        <div className="overflow-hidden rounded-2xl bg-card">
          {home.featuredTopicIds.map((id) => {
            const topic = getTopic(id);
            if (!topic) return null;
            return <ListRow key={topic.id} href={`/community/topic/${topic.id}`} title={topic.title} subtitle={topic.excerpt} />;
          })}
        </div>
      </section>

      <section className="mb-8">
        <SectionHeader title={t("home.announcements")} />
        <div className="space-y-2">
          {announcements.map((item) => (
            <article key={item.id} className="rounded-2xl bg-card px-4 py-4">
              <p className="font-heading text-lg leading-snug">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {home.featuredJournalIds.map((id) => {
        const journal = getJournal(id);
        if (!journal) return null;
        return (
          <Link key={journal.id} href={`/publications/journals/${journal.id}`} className="mb-8 block rounded-2xl bg-linear-to-br from-[#1c1812] to-[#3d3220] px-5 py-6">
            <p className="text-[0.62rem] tracking-[0.22em] text-primary uppercase">{t("home.journals")}</p>
            <h2 className="mt-2 font-heading text-2xl">{journal.title}</h2>
            <p className="mt-2 text-sm text-white/70">{journal.description}</p>
          </Link>
        );
      })}

      <Rail title={t("home.shop")} href="/shop" actionLabel={t("action.viewAll")}>
        {home.featuredProductIds.map((id) => {
          const product = getProduct(id);
          if (!product) return null;
          return (
            <ContentCard
              key={product.id}
              href={`/shop/${product.id}`}
              title={product.title}
              subtitle={product.priceCents === 0 ? "Free" : `$${(product.priceCents / 100).toFixed(2)}`}
              tone={product.coverTone}
              image={product.coverImage}
              imageFit={product.kind === "bundle" ? "cover" : "contain"}
            />
          );
        })}
      </Rail>
    </div>
  );
}
