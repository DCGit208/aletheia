"use client";

import Link from "next/link";
import { EmptyState } from "@/components/content/query-state";
import { PageIntro } from "@/components/content/page-intro";
import { getBook, getCourse, getProgram } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";

export default function MyLibraryPage() {
  const { t } = useI18n();
  const { user } = useAuth();
  const { entitlements, progress } = useUserLibrary();
  if (!user) return <EmptyState title={t("state.signedOut")} />;

  const programs = entitlements.filter((item) => item.contentKind === "program");
  const courses = entitlements.filter((item) => item.contentKind === "course");
  const books = entitlements.filter((item) => item.contentKind === "book");
  const empty = programs.length === 0 && courses.length === 0 && books.length === 0;

  return (
    <div>
      <PageIntro
        title={t("account.library")}
        lead="What this account holds. A year program is not a course. The textbook is not the year."
      />
      {empty ? (
        <EmptyState body="Public and free titles remain in Learn. Purchased titles appear here." />
      ) : (
        <div className="space-y-8">
          {programs.length > 0 ? (
            <section>
              <h2 className="mb-3 font-heading text-xl">Year programs</h2>
              <ul className="space-y-3">
                {programs.map((item) => {
                  const program = getProgram(item.contentId);
                  return (
                    <li key={item.id} className="rounded-xl px-4 py-3 ring-1 ring-foreground/10">
                      <Link href={`/learn/programs/${item.contentId}`} className="font-medium hover:underline">
                        {program ? `Foundation School · ${program.title}` : item.contentId}
                      </Link>
                      <p className="text-sm text-muted-foreground">Year entitlement · {item.source}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          ) : null}
          {books.length > 0 ? (
            <section>
              <h2 className="mb-3 font-heading text-xl">Books</h2>
              <ul className="space-y-3">
                {books.map((item) => {
                  const book = getBook(item.contentId);
                  const reading = progress.find((entry) => entry.bookId === item.contentId);
                  const kind =
                    item.contentId === "book-principles-doctrine-christ" ? "Textbook" : "Book";
                  return (
                    <li key={item.id} className="rounded-xl px-4 py-3 ring-1 ring-foreground/10">
                      <Link href={`/learn/read/${item.contentId}`} className="font-medium hover:underline">
                        {book?.title ?? item.contentId}
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        {kind} · {item.source}
                        {reading ? ` · ${reading.percent}%` : ""}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </section>
          ) : null}
          {courses.length > 0 ? (
            <section>
              <h2 className="mb-3 font-heading text-xl">Courses</h2>
              <ul className="space-y-3">
                {courses.map((item) => {
                  const course = getCourse(item.contentId);
                  return (
                    <li key={item.id} className="rounded-xl px-4 py-3 ring-1 ring-foreground/10">
                      <Link href={`/learn/courses/${item.contentId}`} className="font-medium hover:underline">
                        {course?.title ?? item.contentId}
                      </Link>
                      <p className="text-sm text-muted-foreground">Course · {item.source}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          ) : null}
        </div>
      )}
    </div>
  );
}
