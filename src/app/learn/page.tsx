"use client";

import Link from "next/link";
import { ContentCard } from "@/components/content/content-card";
import { ListRow } from "@/components/content/list-row";
import { PageIntro } from "@/components/content/page-intro";
import { Rail } from "@/components/content/rail";
import { SectionHeader } from "@/components/content/section-header";
import { listBooks, listCourses, listJournals, listPaths } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";

const rooms = [
  { href: "/learn/courses", key: "learn.courses" as const, meta: "Curriculum" },
  { href: "/learn/paths", key: "learn.paths" as const, meta: "Sequence" },
  { href: "/learn/library", key: "learn.library" as const, meta: "Reading" },
  { href: "/learn/journals", key: "learn.journals" as const, meta: "Study" },
  { href: "/account/learning", key: "learn.myLearning" as const, meta: "You" },
];

export default function LearnPage() {
  const { t } = useI18n();
  const courses = listCourses().items;
  const books = listBooks().items;
  const paths = listPaths();
  const journals = listJournals();

  return (
    <div>
      <PageIntro kicker={t("brand.positioning")} title={t("learn.title")} lead={t("learn.lead")} />
      <div className="mb-8 overflow-hidden rounded-2xl bg-card">
        {rooms.map((room) => (
          <ListRow key={room.href} href={room.href} title={t(room.key)} meta={room.meta} />
        ))}
      </div>
      <Rail title={t("learn.courses")} href="/learn/courses" actionLabel={t("action.viewAll")}>
        {courses.map((course) => (
          <ContentCard
            key={course.id}
            href={`/learn/courses/${course.id}`}
            title={course.title}
            subtitle={course.subtitle}
            tone={course.coverTone}
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
          <ContentCard key={book.id} href={`/learn/books/${book.id}`} title={book.title} subtitle={book.subtitle} tone={book.coverTone} />
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
