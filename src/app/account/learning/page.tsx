"use client";

import Link from "next/link";
import { EmptyState } from "@/components/content/query-state";
import { PageIntro } from "@/components/content/page-intro";
import { getCourse, listLessons } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";

export default function MyLearningPage() {
  const { t } = useI18n();
  const { user } = useAuth();
  const { enrollments } = useUserLibrary();
  if (!user) return <EmptyState title={t("state.signedOut")} />;

  return (
    <div>
      <PageIntro title={t("account.learning")} />
      {enrollments.length === 0 ? (
        <EmptyState body="Begin a course from Learn." />
      ) : (
        <ul className="space-y-3">
          {enrollments.map((item) => {
            const course = getCourse(item.courseId);
            const total = listLessons(item.courseId).length;
            return (
              <li key={item.id} className="rounded-xl px-4 py-3 ring-1 ring-foreground/10">
                <Link href={`/learn/courses/${item.courseId}`} className="font-medium hover:underline">
                  {course?.title ?? item.courseId}
                </Link>
                <p className="text-sm text-muted-foreground">
                  {item.completedLessonIds.length} / {total} lessons
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
