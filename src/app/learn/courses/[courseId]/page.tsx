"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Cover } from "@/components/content/cover";
import { EmptyState } from "@/components/content/query-state";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { canAccessContent } from "@/lib/access/entitlements";
import { getExamForCourse } from "@/lib/content/exams";
import { getCourse, getProduct, getSchool, listLessons, listModules } from "@/lib/data/repository";
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
  const yearProduct = getProduct("product-foundation-year");
  const allowed = canAccessContent({
    accessLevel: course.accessLevel,
    preview: false,
    entitlements,
    contentKind: "course",
    contentId: course.id,
  });

  return (
    <article className="grid gap-8 md:grid-cols-[220px_1fr]">
      <Cover title={course.title} subtitle={course.subtitle} tone={course.coverTone} image={course.coverImage} />
      <div>
        <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
          {foundationIndex >= 0 ? `Foundation School · Course ${foundationIndex + 1} of 6` : course.category}
        </p>
        <h1 className="mt-2 font-heading text-3xl tracking-wide">{course.title}</h1>
        <p className="mt-2 text-muted-foreground">{course.subtitle}</p>
        <p className="mt-4 leading-relaxed">{course.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="secondary">{course.difficulty}</Badge>
          <Badge variant="outline">{course.accessLevel}</Badge>
          <Badge variant="outline">{course.instructor.displayName}</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {user && allowed ? (
            <Button onClick={() => enroll(course.id)}>{enrollment ? t("action.continue") : t("action.enroll")}</Button>
          ) : null}
          {!user ? (
            <Link href="/sign-in" className={buttonVariants()}>
              {t("nav.signIn")}
            </Link>
          ) : null}
          {!allowed && product ? (
            <Link href={`/shop/${product.id}`} className={buttonVariants({ variant: "outline" })}>
              Buy this course — ${(product.priceCents / 100).toFixed(0)}
            </Link>
          ) : null}
          {!allowed && foundationIndex >= 0 && yearProduct ? (
            <Link href={`/shop/${yearProduct.id}`} className={buttonVariants({ variant: "ghost" })}>
              Or the year — ${(yearProduct.priceCents / 100).toFixed(0)}
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
                    return (
                      <li key={lesson.id}>
                        <Link
                          href={`/learn/courses/${course.id}/lessons/${lesson.id}`}
                          className={cn(
                            "flex items-center justify-between rounded-lg px-3 py-2 ring-1 ring-foreground/10 hover:bg-card",
                            !allowed && "pointer-events-none opacity-60",
                          )}
                        >
                          <span>
                            {lesson.number}. {lesson.title}
                          </span>
                          <span className="text-xs text-muted-foreground">{done ? "Done" : `${lesson.durationMinutes}m`}</span>
                        </Link>
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
      </div>
    </article>
  );
}
