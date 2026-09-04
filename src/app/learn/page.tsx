"use client";

import Link from "next/link";
import { ContentCard } from "@/components/content/content-card";
import { Cover } from "@/components/content/cover";
import { ListRow } from "@/components/content/list-row";
import { PageIntro } from "@/components/content/page-intro";
import { Rail } from "@/components/content/rail";
import { SectionHeader } from "@/components/content/section-header";
import { buttonVariants } from "@/components/ui/button";
import { holdsEntitlement } from "@/lib/access/entitlements";
import {
  getCourse,
  getProduct,
  getProgram,
  getSchool,
  listBooks,
  listCourses,
  listJournals,
  listPaths,
  listSchoolCourses,
} from "@/lib/data/repository";
import {
  courseProgressPercent,
  foundationCourseIndex,
  nextLessonForCourse,
  resumeCourseHref,
} from "@/lib/learn/continue";
import { currentUnitIndex, weekInYear } from "@/lib/learn/pacing";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";

const rooms = [
  { href: "/learn/schools", key: "learn.schools" as const, meta: "Houses" },
  { href: "/learn/courses", key: "learn.courses" as const, meta: "Curriculum" },
  { href: "/learn/paths", key: "learn.paths" as const, meta: "Sequence" },
  { href: "/learn/library", key: "learn.library" as const, meta: "Reading" },
  { href: "/learn/journals", key: "learn.journals" as const, meta: "Study" },
  { href: "/account/learning", key: "learn.myLearning" as const, meta: "You" },
];

export default function LearnPage() {
  const { t } = useI18n();
  const { user } = useAuth();
  const { entitlements, enrollments, programEnrollments } = useUserLibrary();
  const school = getSchool("school-foundation");
  const foundationCourses = listSchoolCourses("school-foundation");
  const yearProduct = getProduct("product-foundation-year");
  const yearEnrollment = programEnrollments.find(
    (item) =>
      item.programId === "program-foundation-year" || item.programId === "program-foundation-intensive",
  );
  const yearProgram = yearEnrollment ? getProgram(yearEnrollment.programId) : null;
  const ownsYear =
    holdsEntitlement(entitlements, "program", "program-foundation-year") ||
    holdsEntitlement(entitlements, "program", "program-foundation-intensive");

  const activeEnrollment =
    enrollments.find((item) => foundationCourseIndex(item.courseId) >= 0) ?? enrollments[0];
  const activeCourse = activeEnrollment ? getCourse(activeEnrollment.courseId) : null;
  const nextLesson = activeCourse ? nextLessonForCourse(activeCourse.id, activeEnrollment) : null;

  const otherCourses = listCourses().items.filter((course) => course.category !== "Foundation");
  const books = listBooks().items.slice(0, 10);
  const paths = listPaths();
  const journals = listJournals();

  return (
    <div>
      <PageIntro kicker={t("brand.positioning")} title={t("learn.title")} lead={t("learn.lead")} />

      <section className="shop-hero mb-8 overflow-hidden rounded-2xl">
        <div className="relative p-4 sm:p-5">
          <p className="text-[0.62rem] tracking-[0.22em] text-primary uppercase">
            {t("learn.cockpitKicker")}
          </p>
          <h2 className="mt-2 font-heading text-[1.65rem] leading-[1.08]">
            {school?.title ?? t("learn.cockpitTitle")}
          </h2>
          <p className="mt-2 max-w-[28rem] text-sm leading-relaxed text-muted-foreground">
            {ownsYear ? t("learn.cockpitOwned") : t("learn.cockpitGuest")}
          </p>

          {ownsYear && yearEnrollment && yearProgram ? (
            <p className="mt-3 text-sm text-primary">
              {t("learn.weekOf")} {weekInYear(yearEnrollment.startedAt, yearProgram.durationWeeks)} ·{" "}
              {t("learn.unitOf")} {currentUnitIndex(yearEnrollment.startedAt, yearProgram.unitWeeks) + 1} ·{" "}
              {yearProgram.title}
            </p>
          ) : null}

          {activeCourse && nextLesson ? (
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-black/20 px-3 py-3 ring-1 ring-white/8">
              <Cover
                title={activeCourse.title}
                tone={activeCourse.coverTone}
                image={activeCourse.coverImage}
                compact
                className="h-14 w-11 shrink-0 !aspect-auto rounded-lg"
              />
              <div className="min-w-0 flex-1">
                <p className="text-[0.58rem] tracking-[0.14em] text-muted-foreground uppercase">
                  {t("learn.nextLesson")}
                </p>
                <p className="truncate font-heading text-sm">{nextLesson.title}</p>
                <p className="text-xs text-primary">
                  {activeCourse.title} · {courseProgressPercent(activeCourse.id, activeEnrollment)}%
                </p>
              </div>
              <Link
                href={resumeCourseHref(activeCourse.id, activeEnrollment)}
                className={cn(buttonVariants(), "h-10 shrink-0 rounded-full px-4")}
              >
                {t("action.continue")}
              </Link>
            </div>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={
                ownsYear
                  ? "/learn/schools/school-foundation"
                  : `/shop/${yearProduct?.id ?? "product-foundation-year"}`
              }
              className={cn(buttonVariants(), "h-11 rounded-full px-5")}
            >
              {ownsYear ? t("home.openSchool") : t("shop.viewOffer")}
            </Link>
            {!user ? (
              <Link href="/sign-in" className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-5")}>
                {t("nav.signIn")}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <SectionHeader title={t("learn.cockpitTitle")} href="/learn/schools/school-foundation" actionLabel={t("action.viewAll")} />
        <div className="grid grid-cols-2 gap-x-3 gap-y-5">
          {foundationCourses.map((course) => {
            const enrollment = enrollments.find((item) => item.courseId === course.id);
            const index = foundationCourseIndex(course.id);
            const open = holdsEntitlement(entitlements, "course", course.id) || ownsYear;
            return (
              <ContentCard
                key={course.id}
                layout="tile"
                href={`/learn/courses/${course.id}`}
                title={course.title}
                subtitle={
                  enrollment
                    ? `${courseProgressPercent(course.id, enrollment)}%`
                    : open
                      ? t("learn.openCourse")
                      : course.subtitle
                }
                tone={course.coverTone}
                image={course.coverImage}
                badge={index >= 0 ? `${index + 1}/6` : undefined}
                emphasizePrice={Boolean(enrollment)}
              />
            );
          })}
        </div>
      </section>

      <section className="mb-8">
        <SectionHeader title={t("learn.moreRooms")} />
        <div className="overflow-hidden rounded-2xl bg-card">
          {rooms.map((room) => (
            <ListRow key={room.href} href={room.href} title={t(room.key)} meta={room.meta} />
          ))}
        </div>
      </section>

      <Rail title={t("learn.courses")} href="/learn/courses" actionLabel={t("action.viewAll")}>
        {otherCourses.map((course) => (
          <ContentCard
            key={course.id}
            href={`/learn/courses/${course.id}`}
            title={course.title}
            subtitle={course.subtitle}
            tone={course.coverTone}
            image={course.coverImage}
            badge={course.difficulty}
          />
        ))}
      </Rail>

      <section className="mb-8">
        <SectionHeader title={t("learn.paths")} />
        <div className="overflow-hidden rounded-2xl bg-card">
          {paths.map((path) => (
            <ListRow key={path.id} href={`/learn/paths/${path.id}`} title={path.title} subtitle={path.description} />
          ))}
        </div>
      </section>

      <Rail title={t("learn.library")} href="/learn/library" actionLabel={t("action.viewAll")}>
        {books.map((book) => (
          <ContentCard
            key={book.id}
            href={`/learn/books/${book.id}`}
            title={book.title}
            subtitle={book.subtitle}
            tone={book.coverTone}
            image={book.coverImage}
          />
        ))}
      </Rail>

      {journals.map((journal) => (
        <Link key={journal.id} href={`/publications/journals/${journal.id}`} className="mb-2 block rounded-2xl bg-card px-4 py-4">
          <p className="text-[0.62rem] tracking-[0.2em] text-primary uppercase">{t("learn.journals")}</p>
          <p className="mt-1 font-heading text-xl">{journal.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">{journal.description}</p>
        </Link>
      ))}
    </div>
  );
}
