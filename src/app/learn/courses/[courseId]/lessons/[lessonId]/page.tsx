"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { DeniedState, EmptyState } from "@/components/content/query-state";
import { Button, buttonVariants } from "@/components/ui/button";
import { canAccessContent } from "@/lib/access/entitlements";
import { getCourse, getLesson, listLessons } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";

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
  if (!allowed) return <DeniedState />;

  const lessons = listLessons(course.id);
  const index = lessons.findIndex((item) => item.id === lesson.id);
  const next = lessons[index + 1];
  const enrollment = enrollments.find((item) => item.courseId === course.id);

  return (
    <article className="mx-auto max-w-2xl">
      <p className="text-sm text-muted-foreground">
        <Link href={`/learn/courses/${course.id}`} className="hover:underline">
          {course.title}
        </Link>
      </p>
      <h1 className="mt-3 font-heading text-3xl tracking-wide">{lesson.title}</h1>
      <p className="reader-prose mt-8 whitespace-pre-line">{lesson.body}</p>
      <div className="mt-10 flex flex-wrap gap-2">
        <Button
          onClick={() => {
            if (!enrollment) enroll(course.id);
            completeLesson(course.id, lesson.id);
          }}
        >
          {t("action.markComplete")}
        </Button>
        {next ? (
          <Link href={`/learn/courses/${course.id}/lessons/${next.id}`} className={buttonVariants({ variant: "outline" })}>
            {t("action.continue")}
          </Link>
        ) : (
          <Link href={`/learn/courses/${course.id}`} className={buttonVariants({ variant: "outline" })}>
            {course.title}
          </Link>
        )}
      </div>
    </article>
  );
}
