"use client";

import Link from "next/link";
import { ContentCard } from "@/components/content/content-card";
import { PageIntro } from "@/components/content/page-intro";
import { SectionHeader } from "@/components/content/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listBooks, listCourses, listJournals, listPaths } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";
import { BRAND } from "@/lib/brand";

const rooms = [
  { href: "/learn/courses", key: "learn.courses" as const },
  { href: "/learn/paths", key: "learn.paths" as const },
  { href: "/learn/library", key: "learn.library" as const },
  { href: "/learn/journals", key: "learn.journals" as const },
  { href: "/account/learning", key: "learn.myLearning" as const },
  { href: "/account", key: "learn.bookmarks" as const },
];

export default function LearnPage() {
  const { t } = useI18n();
  const courses = listCourses().items.slice(0, 3);
  const books = listBooks().items.slice(0, 3);
  const paths = listPaths();
  const journals = listJournals();

  return (
    <div>
      <PageIntro kicker={BRAND.platform} title={t("learn.title")} lead={t("learn.lead")} />
      <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-3">
        {rooms.map((room) => (
          <Link key={room.href} href={room.href} className="rounded-xl bg-card px-4 py-5 ring-1 ring-foreground/10 hover:bg-secondary">
            <p className="font-heading tracking-wide">{t(room.key)}</p>
          </Link>
        ))}
      </div>
      <section className="mb-10">
        <SectionHeader title={t("learn.courses")} href="/learn/courses" actionLabel={t("action.viewAll")} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
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
        </div>
      </section>
      <section className="mb-10">
        <SectionHeader title={t("learn.paths")} />
        {paths.map((path) => (
          <Card key={path.id} className="mb-3">
            <CardHeader>
              <CardTitle>
                <Link href={`/learn/paths/${path.id}`} className="hover:underline">
                  {path.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{path.description}</CardContent>
          </Card>
        ))}
      </section>
      <section className="mb-10">
        <SectionHeader title={t("learn.library")} href="/learn/library" actionLabel={t("action.viewAll")} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {books.map((book) => (
            <ContentCard
              key={book.id}
              href={`/learn/books/${book.id}`}
              title={book.title}
              subtitle={book.subtitle}
              tone={book.coverTone}
            />
          ))}
        </div>
      </section>
      <section>
        <SectionHeader title={t("learn.journals")} href="/learn/journals" actionLabel={t("action.viewAll")} />
        {journals.map((journal) => (
          <Card key={journal.id}>
            <CardHeader>
              <CardTitle>
                <Link href={`/publications/journals/${journal.id}`} className="hover:underline">
                  {journal.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{journal.description}</CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
