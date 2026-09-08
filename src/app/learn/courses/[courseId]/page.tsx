"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Cover } from "@/components/content/cover";
import { EmptyState } from "@/components/content/query-state";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { canAccessContent } from "@/lib/access/entitlements";
import { getExamForCourse } from "@/lib/content/exams";
import { foundationGateCourseId } from "@/lib/data/foundation-school";
import { getCourse, getProduct, getSchool, listLessons, listModules } from "@/lib/data/repository";
import { courseProgressPercent, nextLessonForCourse, resumeCourseHref } from "@/lib/learn/continue";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";

export default function CourseDetailPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const { t } = useI18n();
  const { user } = useAuth();
  const { entitlements, enrollments, enroll } = useUserLibrary();
  const course = getCourse(courseId);
  if (!course) return <EmptyState title="Course not found." />;

  const modules = listModules(course.id);
  const lessons = listLessons(course.id);
  const enrollment = enrollments.find((item) => item.courseId === course.id);
  const product = course.productId ? getProduct(course.productId) : null;
  const exam = getExamForCourse(course.id);
  const foundationIndex = getSchool("school-foundation")?.courseIds.indexOf(course.id) ?? -1;
  const foundationGate = course.id === foundationGateCourseId;
  const yearProduct = getProduct("product-foundation-year");
  const foundationCovers: Record<string, string> = {
    "course-fs-repentance": "/covers/repentance-from-dead-works-chains.png",
    "course-fs-faith": "/covers/doctrine-of-faith-seal.png",
    "course-fs-baptisms": "/covers/doctrine-of-baptism-triquetra.png",
    "course-fs-hands": "/covers/doctrine-of-laying-on-of-hands.png",
    "course-fs-resurrection": "/covers/doctrine-of-resurrection-stone.png",
    "course-fs-judgment": "/covers/doctrine-of-eternal-judgment-seal.png",
  };
  const allowed = canAccessContent({
    accessLevel: course.accessLevel,
    preview: false,
    entitlements,
    contentKind: "course",
    contentId: course.id,
    user,
  });
  const next = nextLessonForCourse(course.id, enrollment);
  const percent = courseProgressPercent(course.id, enrollment);

  return (
    <article className="relative grid gap-8 md:grid-cols-[220px_1fr]">
      <Cover
        title={course.title}
        subtitle={course.subtitle}
        tone={course.coverTone}
        image={foundationCovers[course.id] ?? course.coverImage}
        badge={foundationGate ? "Gate" : foundationIndex >= 0 ? `${foundationIndex + 1}/6` : undefined}
      />
      <div className="pb-24 md:pb-0">
        <p className="text-[0.7rem] tracking-[0.2em] text-primary uppercase">
          {foundationGate
            ? "Foundation School · Entrance gate"
            : foundationIndex >= 0
              ? `Foundation School · Course ${foundationIndex + 1} of 6`
              : course.category}
        </p>
        <h1 className="mt-2 font-heading text-3xl tracking-wide">{course.title}</h1>
        <p className="mt-2 text-muted-foreground">{course.subtitle}</p>
        <p className="mt-4 leading-relaxed">{course.description}</p>
        {enrollment ? (
          <p className="mt-3 text-sm text-primary">
            {t("learn.progress")} · {percent}%
          </p>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="secondary">{course.difficulty}</Badge>
          <Badge variant="outline">{course.instructor.displayName}</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {user && allowed ? (
            enrollment && next ? (
              <Link
                href={resumeCourseHref(course.id, enrollment)}
                className={cn(buttonVariants(), "h-11 rounded-full px-5")}
              >
                {t("action.continue")}
              </Link>
            ) : (
              <Button
                className="h-11 rounded-full px-5"
                onClick={() => {
                  enroll(course.id);
                }}
              >
                {t("action.enroll")}
              </Button>
            )
          ) : null}
          {!user ? (
            <Link href="/sign-in" className={cn(buttonVariants(), "h-11 rounded-full px-5")}>
              {t("nav.signIn")}
            </Link>
          ) : null}
          {!allowed && product ? (
            <Link
              href={`/shop/${product.id}`}
              className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-5")}
            >
              {t("state.buyAccess")} — ${(product.priceCents / 100).toFixed(0)}
            </Link>
          ) : null}
          {!allowed && (foundationIndex >= 0 || foundationGate) && yearProduct ? (
            <Link
              href={`/shop/${yearProduct.id}`}
              className={cn(buttonVariants({ variant: "ghost" }), "h-11 rounded-full px-5")}
            >
              {t("state.buyYear")} — ${(yearProduct.priceCents / 100).toFixed(0)}
            </Link>
          ) : null}
        </div>

        <ol className="mt-10 space-y-6">
          {modules.map((module) => (
            <li key={module.id}>
              <h2 className="font-heading text-xl">
                {module.number}. {module.title}
              </h2>
              <p className="text-sm text-muted-foreground">{module.description}</p>
              <ul className="mt-3 space-y-2">
                {lessons
                  .filter((lesson) => lesson.moduleId === module.id)
                  .map((lesson) => {
                    const done = enrollment?.completedLessonIds.includes(lesson.id);
                    const locked = !allowed;
                    return (
                      <li key={lesson.id}>
                        {locked ? (
                          <div className="flex items-center justify-between rounded-lg px-3 py-2 opacity-60 ring-1 ring-foreground/10">
                            <span>
                              {lesson.number}. {lesson.title}
                            </span>
                            <span className="text-xs text-muted-foreground">{t("state.denied")}</span>
                          </div>
                        ) : (
                          <Link
                            href={`/learn/courses/${course.id}/lessons/${lesson.id}`}
                            className="flex items-center justify-between rounded-lg px-3 py-2 ring-1 ring-foreground/10 transition-colors hover:bg-card"
                          >
                            <span>
                              {lesson.number}. {lesson.title}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {done ? "Done" : `${lesson.durationMinutes}m`}
                            </span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </li>
          ))}
        </ol>
        {exam && allowed ? (
          <p className="mt-10">
            <Link href={`/learn/exams/${exam.id}`} className="text-sm text-primary hover:underline">
              Course examination — written charges
            </Link>
          </p>
        ) : null}
        {!allowed && product ? (
          <div className="mt-8 rounded-2xl border border-primary/20 bg-card/70 px-4 py-4">
            <p className="font-heading text-lg">{t("state.denied")}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t("state.deniedSignedIn")}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href={`/shop/${product.id}`} className={cn(buttonVariants(), "h-11 rounded-full px-5")}>
                {t("state.buyAccess")} — ${(product.priceCents / 100).toFixed(0)}
              </Link>
              {(foundationIndex >= 0 || foundationGate) && yearProduct ? (
                <Link
                  href={`/shop/${yearProduct.id}`}
                  className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-5")}
                >
                  {t("state.buyYear")} — ${(yearProduct.priceCents / 100).toFixed(0)}
                </Link>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      {user && allowed && next ? (
        <div className="shop-sticky-buy md:hidden">
          <div className="flex items-center gap-3">
            <div className="min-w-0">
              <p className="truncate text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase">
                {t("learn.nextLesson")}
              </p>
              <p className="truncate font-heading text-sm">{next.title}</p>
            </div>
            <Link
              href={resumeCourseHref(course.id, enrollment)}
              className={cn(buttonVariants(), "ml-auto h-11 shrink-0 rounded-full px-5")}
            >
              {t("action.continue")}
            </Link>
          </div>
        </div>
      ) : null}
    </article>
  );
}
