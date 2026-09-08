"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ListRow } from "@/components/content/list-row";
import { EmptyState } from "@/components/content/query-state";
import { SectionHeader } from "@/components/content/section-header";
import { foundationSchoolIntroduction } from "@/lib/data/foundation-school";
import { getBook, getProduct, getSchool, listPrograms, listSchoolCourses } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";

function FoundationSchoolIntroduction() {
  return (
    <section className="mt-8 space-y-6">
      <div className="rounded-3xl border border-primary/20 bg-card/80 p-5 shadow-sm md:p-6">
        <p className="text-[0.62rem] tracking-[0.2em] text-primary uppercase">School introduction</p>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed">{foundationSchoolIntroduction.lead}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {foundationSchoolIntroduction.sections.map((section) => (
          <section key={section.title} className="rounded-2xl bg-card p-5">
            <h2 className="font-heading text-xl">{section.title}</h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="rounded-3xl bg-card p-5 md:p-6">
        <SectionHeader title="Greek terms opened" />
        <div className="mt-4 grid gap-3 md:grid-cols-5">
          {foundationSchoolIntroduction.terms.map((item) => (
            <div key={item.term} className="rounded-2xl border border-foreground/10 p-4">
              <p className="font-heading text-2xl">{item.term}</p>
              <p className="mt-1 text-xs tracking-[0.16em] text-primary uppercase">{item.transliteration}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-card p-5 md:p-6">
        <SectionHeader title="What the year must produce" />
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {foundationSchoolIntroduction.outcomes.map((outcome) => (
            <li key={outcome} className="rounded-2xl border border-foreground/10 px-4 py-3 text-sm leading-relaxed">
              {outcome}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

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
      {school.id === "school-foundation" ? <FoundationSchoolIntroduction /> : null}
      {active ? (
        <p className="mt-4 text-sm text-primary">
          You are enrolled in {programs.find((item) => item.id === active.programId)?.title ?? "a program"}.
        </p>
      ) : null}

      <section className="mt-8">
        <SectionHeader title="Programs" />
        <div className="overflow-hidden rounded-2xl bg-card">
          {programs.map((program) => {
            const product = program.productId ? getProduct(program.productId) : null;
            const price = product ? `$${(product.priceCents / 100).toFixed(0)}` : null;
            return (
              <ListRow
                key={program.id}
                href={`/learn/programs/${program.id}`}
                title={program.title}
                subtitle={program.subtitle}
                meta={`${program.durationWeeks} wk · ${program.hoursPerWeek}h/wk${price ? ` · ${price}` : ""}`}
              />
            );
          })}
        </div>
      </section>

      {school.id === "school-foundation" ? (
        <p className="mt-6">
          <Link href="/learn/exams/exam-fs-final" className="text-sm text-primary hover:underline">
            Week 52 final — the six stones
          </Link>
        </p>
      ) : null}

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
              <p className="text-[0.62rem] tracking-[0.2em] text-primary uppercase">Textbook</p>
              <p className="mt-1 font-heading text-xl">{book.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{book.subtitle}</p>
              <p className="mt-3 text-xs tracking-wide text-primary uppercase">Open in the reader</p>
            </Link>
          </div>
        );
      })}
    </article>
  );
}
