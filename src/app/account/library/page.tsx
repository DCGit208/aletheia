"use client";

import Link from "next/link";
import { Cover } from "@/components/content/cover";
import { EmptyState } from "@/components/content/query-state";
import { PageIntro } from "@/components/content/page-intro";
import { buttonVariants } from "@/components/ui/button";
import { getBook, getCourse, getProgram } from "@/lib/data/repository";
import { courseProgressPercent, resumeCourseHref } from "@/lib/learn/continue";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";

export default function MyLibraryPage() {
  const { t } = useI18n();
  const { user } = useAuth();
  const { entitlements, progress, enrollments } = useUserLibrary();
  if (!user) {
    return (
      <EmptyState
        title={t("state.signedOut")}
        actionHref="/sign-in"
        actionLabel={t("nav.signIn")}
      />
    );
  }

  const programs = entitlements.filter((item) => item.contentKind === "program");
  const courses = entitlements.filter((item) => item.contentKind === "course");
  const books = entitlements.filter((item) => item.contentKind === "book");
  const empty = programs.length === 0 && courses.length === 0 && books.length === 0;

  return (
    <div>
      <PageIntro title={t("account.library")} lead={t("account.libraryLead")} />
      {empty ? (
        <EmptyState
          body={t("account.libraryEmpty")}
          actionHref="/shop"
          actionLabel={t("account.libraryShop")}
        />
      ) : (
        <div className="space-y-8">
          {programs.length > 0 ? (
            <section>
              <h2 className="mb-3 font-heading text-xl">Year programs</h2>
              <ul className="space-y-3">
                {programs.map((item) => {
                  const program = getProgram(item.contentId);
                  return (
                    <li key={item.id}>
                      <Link
                        href={`/learn/programs/${item.contentId}`}
                        className="flex items-center gap-3 rounded-xl bg-card/70 px-3 py-3 ring-1 ring-primary/25 transition-colors hover:bg-card"
                      >
                        <Cover
                          title={program?.title ?? item.contentId}
                          image="/covers/principles-doctrine-christ.jpg"
                          badge="Year"
                          compact
                          className="h-16 w-12 shrink-0 !aspect-auto rounded-lg"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="font-heading text-base">
                            {program ? `Foundation School · ${program.title}` : item.contentId}
                          </p>
                          <p className="text-sm text-muted-foreground">Year · {item.source}</p>
                        </div>
                        <span className="text-sm text-primary">{t("account.openItem")}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ) : null}
          {books.length > 0 ? (
            <section>
              <h2 className="mb-3 font-heading text-xl">Books</h2>
              <ul className="space-y-3">
                {books.map((item) => {
                  const book = getBook(item.contentId);
                  const reading = progress.find((entry) => entry.bookId === item.contentId);
                  const kind =
                    item.contentId === "book-principles-doctrine-christ" ? "Textbook" : "Book";
                  return (
                    <li key={item.id}>
                      <Link
                        href={`/learn/read/${item.contentId}`}
                        className="flex items-center gap-3 rounded-xl bg-card/70 px-3 py-3 ring-1 ring-white/8 transition-colors hover:bg-card"
                      >
                        <Cover
                          title={book?.title ?? item.contentId}
                          tone={book?.coverTone}
                          image={book?.coverImage}
                          badge={kind}
                          compact
                          className="h-16 w-12 shrink-0 !aspect-auto rounded-lg"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-heading text-base">{book?.title ?? item.contentId}</p>
                          <p className="text-sm text-muted-foreground">
                            {kind}
                            {reading ? ` · ${reading.percent}%` : ""}
                          </p>
                        </div>
                        <span className="text-sm text-primary">{t("account.openItem")}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ) : null}
          {courses.length > 0 ? (
            <section>
              <h2 className="mb-3 font-heading text-xl">Courses</h2>
              <ul className="space-y-3">
                {courses.map((item) => {
                  const course = getCourse(item.contentId);
                  const enrollment = enrollments.find((entry) => entry.courseId === item.contentId);
                  return (
                    <li key={item.id}>
                      <Link
                        href={
                          enrollment
                            ? resumeCourseHref(item.contentId, enrollment)
                            : `/learn/courses/${item.contentId}`
                        }
                        className="flex items-center gap-3 rounded-xl bg-card/70 px-3 py-3 ring-1 ring-white/8 transition-colors hover:bg-card"
                      >
                        <Cover
                          title={course?.title ?? item.contentId}
                          tone={course?.coverTone}
                          image={course?.coverImage}
                          badge="Course"
                          compact
                          className="h-16 w-12 shrink-0 !aspect-auto rounded-lg"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-heading text-base">{course?.title ?? item.contentId}</p>
                          <p className="text-sm text-muted-foreground">
                            Course
                            {enrollment ? ` · ${courseProgressPercent(item.contentId, enrollment)}%` : ""}
                          </p>
                        </div>
                        <span className="text-sm text-primary">{t("account.openItem")}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ) : null}
          <Link href="/shop" className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-5")}>
            {t("account.libraryShop")}
          </Link>
        </div>
      )}
    </div>
  );
}
