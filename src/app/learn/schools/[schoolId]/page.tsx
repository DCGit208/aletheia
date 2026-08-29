"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ListRow } from "@/components/content/list-row";
import { EmptyState } from "@/components/content/query-state";
import { SectionHeader } from "@/components/content/section-header";
import { getBook, getSchool, listPrograms, listSchoolCourses } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";

export default function SchoolPage() {
  const { schoolId } = useParams<{ schoolId: string }>();
  const { t } = useI18n();
  const { programEnrollments } = useUserLibrary();
  const school = getSchool(schoolId);
  if (!school) return <EmptyState title="School not found." />;
  const programs = listPrograms(school.id);
  const courses = listSchoolCourses(school.id);
  const active = programEnrollments.find((item) => item.schoolId === school.id);

  return (
    <article>
      <p className="text-[0.7rem] tracking-[0.2em] text-primary uppercase">{t("learn.schools")}</p>
      <h1 className="mt-2 font-heading text-3xl tracking-wide">{school.title}</h1>
      <p className="mt-2 text-muted-foreground">{school.subtitle}</p>
      <p className="mt-4 leading-relaxed">{school.description}</p>
      {active ? (
        <p className="mt-4 text-sm text-primary">
          You are enrolled in {programs.find((item) => item.id === active.programId)?.title ?? "a program"}.
        </p>
      ) : null}

      <section className="mt-8">
        <SectionHeader title="Programs" />
        <div className="overflow-hidden rounded-2xl bg-card">
          {programs.map((program) => (
            <ListRow
              key={program.id}
              href={`/learn/programs/${program.id}`}
              title={program.title}
              subtitle={program.subtitle}
              meta={`${program.durationWeeks} wk · ${program.hoursPerWeek}h/wk`}
            />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <SectionHeader title="Curriculum" />
        <ol className="overflow-hidden rounded-2xl bg-card">
          {courses.map((course, index) => (
            <li key={course.id}>
              <ListRow
                href={`/learn/courses/${course.id}`}
                title={`${index + 1}. ${course.title}`}
                subtitle={course.subtitle}
              />
            </li>
          ))}
        </ol>
      </section>

      {school.resourceBookIds.map((id) => {
        const book = getBook(id);
        if (!book) return null;
        return (
          <div key={id} className="mt-8">
            <Link href={`/learn/books/${book.id}`} className="block rounded-2xl bg-card px-4 py-4">
              <p className="text-[0.62rem] tracking-[0.2em] text-primary uppercase">Aletheia Libraries</p>
              <p className="mt-1 font-heading text-xl">{book.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{book.subtitle}</p>
              <p className="mt-3 text-xs tracking-wide text-primary uppercase">Open in the reader</p>
            </Link>
            <a href="/resources/aletheia-libraries-1.pdf" className="mt-2 block px-1 text-sm text-muted-foreground">
              Original leaflet (PDF)
            </a>
          </div>
        );
      })}
    </article>
  );
}
