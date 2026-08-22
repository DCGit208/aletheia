"use client";

import { ContentCard } from "@/components/content/content-card";
import { EmptyState } from "@/components/content/query-state";
import { PageIntro } from "@/components/content/page-intro";
import { listCourses } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";

export default function CoursesPage() {
  const { t } = useI18n();
  const { items } = listCourses();

  return (
    <div>
      <PageIntro title={t("learn.courses")} lead={t("learn.lead")} />
      {items.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {items.map((course) => (
            <ContentCard
              key={course.id}
              href={`/learn/courses/${course.id}`}
              title={course.title}
              subtitle={course.subtitle}
              tone={course.coverTone}
              meta={`${course.durationMinutes} min · ${course.difficulty}`}
              badge={course.accessLevel}
            />
          ))}
        </div>
      )}
    </div>
  );
}
