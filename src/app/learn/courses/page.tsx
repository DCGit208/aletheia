"use client";

import { ContentCard } from "@/components/content/content-card";
import { EmptyState } from "@/components/content/query-state";
import { PageIntro } from "@/components/content/page-intro";
import { SectionHeader } from "@/components/content/section-header";
import { getSchool, listCourses } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";

export default function CoursesPage() {
  const { t } = useI18n();
  const { items } = listCourses();
  const school = getSchool("school-foundation");
  const foundationIds = school?.courseIds ?? [];
  const foundation = foundationIds
    .map((id) => items.find((course) => course.id === id))
    .filter(Boolean);
  const other = items.filter((course) => !foundationIds.includes(course.id));

  return (
    <div>
      <PageIntro title={t("learn.courses")} lead={t("learn.lead")} />
      {items.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          {foundation.length > 0 ? (
            <section className="mb-10">
              <SectionHeader title="Foundation School · six courses" />
              <div className="grid grid-cols-2 gap-4">
                {foundation.map((course, index) =>
                  course ? (
                    <ContentCard
                      key={course.id}
                      layout="tile"
                      href={`/learn/courses/${course.id}`}
                      title={course.title}
                      subtitle={course.subtitle}
                      tone={course.coverTone}
                      image={course.coverImage}
                      badge={`Course ${index + 1} of 6`}
                    />
                  ) : null,
                )}
              </div>
            </section>
          ) : null}
          {other.length > 0 ? (
            <section>
              <SectionHeader title="Aletheia Path" />
              <div className="grid grid-cols-2 gap-4">
                {other.map((course) => (
                  <ContentCard
                    key={course.id}
                    layout="tile"
                    href={`/learn/courses/${course.id}`}
                    title={course.title}
                    subtitle={course.subtitle}
                    tone={course.coverTone}
                    image={course.coverImage}
                    meta={`${course.durationMinutes} min · ${course.difficulty}`}
                    badge={course.accessLevel}
                  />
                ))}
              </div>
            </section>
          ) : null}
        </>
      )}
    </div>
  );
}
