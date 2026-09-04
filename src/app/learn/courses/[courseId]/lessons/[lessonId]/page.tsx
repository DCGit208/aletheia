"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { DeniedState, EmptyState } from "@/components/content/query-state";
import { Button, buttonVariants } from "@/components/ui/button";
import { canAccessContent } from "@/lib/access/entitlements";
import { getBook, getCourse, getLesson, listLessons } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";

export default function LessonPage() {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const { t } = useI18n();
  const { entitlements, enrollments, completeLesson, enroll } = useUserLibrary();
  const course = getCourse(courseId);
  const lesson = getLesson(lessonId);
  if (!course || !lesson || lesson.courseId !== course.id) return <EmptyState title="Lesson not found." />;

  const allowed = canAccessContent({
    accessLevel: course.accessLevel,
    preview: false,
    entitlements,
    contentKind: "course",
    contentId: course.id,
  });
  if (!allowed) {
    return (
      <DeniedState
        productId={course.productId}
        yearProductId="product-foundation-year"
        showYear={Boolean(course.productId?.startsWith("product-course-") || course.id.startsWith("course-fs-"))}
      />
    );
  }

  const lessons = listLessons(course.id);
  const index = lessons.findIndex((item) => item.id === lesson.id);
  const prev = lessons[index - 1];
  const next = lessons[index + 1];
  const enrollment = enrollments.find((item) => item.courseId === course.id);
  const done = enrollment?.completedLessonIds.includes(lesson.id);

  return (
    <article className="relative mx-auto max-w-2xl pb-28">
      <p className="text-sm text-muted-foreground">
        <Link href={`/learn/courses/${course.id}`} className="hover:underline">
          {course.title}
        </Link>
        <span className="mx-2 text-muted-foreground/60">·</span>
        <span>
          {index + 1} / {lessons.length}
        </span>
      </p>
      <h1 className="mt-3 font-heading text-3xl tracking-wide">{lesson.title}</h1>
      <p className="reader-prose mt-8 whitespace-pre-line">{lesson.body}</p>
      {lesson.resourceIds.length ? (
        <div className="mt-8 space-y-2">
          <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Reading</p>
          {lesson.resourceIds.map((id) => {
            const book = getBook(id);
            if (!book) return null;
            return (
              <Link key={id} href={`/learn/read/${book.id}`} className="block text-sm text-primary hover:underline">
                Open {book.title}
              </Link>
            );
          })}
        </div>
      ) : null}

      <div className="shop-sticky-buy">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={`/learn/courses/${course.id}`}
            className={cn(buttonVariants({ variant: "ghost" }), "h-11 rounded-full px-4")}
          >
            {t("learn.backToCourse")}
          </Link>
          <Button
            className="h-11 rounded-full px-5"
            onClick={() => {
              if (!enrollment) enroll(course.id);
              completeLesson(course.id, lesson.id);
            }}
          >
            {done ? t("learn.markDone") : t("action.markComplete")}
          </Button>
          {prev ? (
            <Link
              href={`/learn/courses/${course.id}/lessons/${prev.id}`}
              className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-4")}
            >
              {t("reader.previous")}
            </Link>
          ) : null}
          {next ? (
            <Link
              href={`/learn/courses/${course.id}/lessons/${next.id}`}
              className={cn(buttonVariants({ variant: "outline" }), "ml-auto h-11 rounded-full px-5")}
            >
              {t("action.continue")}
            </Link>
          ) : (
            <Link
              href={`/learn/courses/${course.id}`}
              className={cn(buttonVariants({ variant: "outline" }), "ml-auto h-11 rounded-full px-5")}
            >
              {course.title}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
