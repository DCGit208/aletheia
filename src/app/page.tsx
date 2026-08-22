"use client";

import Link from "next/link";
import { ContentCard } from "@/components/content/content-card";
import { PageIntro } from "@/components/content/page-intro";
import { SectionHeader } from "@/components/content/section-header";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <PageIntro
        kicker={t("brand.positioning")}
        title={user ? `${user.displayName}` : t("home.guestTitle")}
        lead={user ? t("home.guestLead") : t("home.guestLead")}
      />

      {!user ? (
        <div className="mb-10 flex flex-wrap gap-2">
          <Link href="/learn" className={buttonVariants()}>
            {t("action.learn")}
          </Link>
          <Link href="/publications" className={buttonVariants({ variant: "outline" })}>
            {t("action.read")}
          </Link>
          <Link href="/sign-in" className={buttonVariants({ variant: "secondary" })}>
            {t("action.join")}
          </Link>
          <Link href="/shop" className={cn(buttonVariants({ variant: "ghost" }))}>
            {t("action.purchase")}
          </Link>
        </div>
      ) : (
        <div className="mb-10 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{t("home.continueLearning")}</CardTitle>
            </CardHeader>
            <CardContent>
              {continueCourse ? (
                <Link href={`/learn/courses/${continueCourse.id}`} className="hover:underline">
                  {continueCourse.title}
                </Link>
              ) : (
                <Link href="/learn/courses" className="text-muted-foreground hover:underline">
                  {t("learn.courses")}
                </Link>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t("home.continueReading")}</CardTitle>
            </CardHeader>
            <CardContent>
              {continueBook ? (
                <Link href={`/learn/read/${continueBook.id}`} className="hover:underline">
                  {continueBook.title}
                </Link>
              ) : (
                <Link href="/learn/library" className="text-muted-foreground hover:underline">
                  {t("learn.library")}
                </Link>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      <section className="mb-10">
        <SectionHeader title={t("home.announcements")} />
        <div className="grid gap-3">
          {announcements.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{item.body}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionHeader title={t("home.featuredLearning")} href="/learn/courses" actionLabel={t("action.viewAll")} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
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
                meta={course.instructor.displayName}
              />
            );
          })}
        </div>
      </section>

      <section className="mb-10">
        <SectionHeader title={t("home.newBooks")} href="/publications/books" actionLabel={t("action.viewAll")} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {home.featuredBookIds.map((id) => {
            const book = getBook(id);
            if (!book) return null;
            return (
              <ContentCard
                key={book.id}
                href={`/publications/books/${book.id}`}
                title={book.title}
                subtitle={book.subtitle}
                tone={book.coverTone}
                meta={book.authors.map((author) => author.displayName).join(", ")}
              />
            );
          })}
        </div>
      </section>

      <section className="mb-10 grid gap-8 md:grid-cols-2">
        <div>
          <SectionHeader title={t("home.journals")} href="/publications/journals" actionLabel={t("action.viewAll")} />
          {home.featuredJournalIds.map((id) => {
            const journal = getJournal(id);
            if (!journal) return null;
            return (
              <Card key={journal.id}>
                <CardHeader>
                  <CardTitle>
                    <Link href={`/publications/journals/${journal.id}`} className="hover:underline">
                      {journal.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{journal.description}</CardContent>
              </Card>
            );
          })}
        </div>
        <div>
          <SectionHeader title={t("home.community")} href="/community" actionLabel={t("action.viewAll")} />
          <div className="space-y-3">
            {home.featuredTopicIds.map((id) => {
              const topic = getTopic(id);
              if (!topic) return null;
              return (
                <Link key={topic.id} href={`/community/topic/${topic.id}`} className="block rounded-xl ring-1 ring-foreground/10 hover:bg-card">
                  <div className="px-4 py-3">
                    <p className="font-medium">{topic.title}</p>
                    <p className="text-sm text-muted-foreground">{topic.excerpt}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <SectionHeader title={t("home.shop")} href="/shop" actionLabel={t("action.viewAll")} />
        <div className="grid grid-cols-2 gap-4">
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
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
