"use client";

import Link from "next/link";
import { PageIntro } from "@/components/content/page-intro";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { hasPermission } from "@/lib/auth/permissions";
import { useAuth } from "@/lib/auth/provider";
import { getBook, getCourse } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import type { Locale } from "@/lib/data/types";

const rooms = [
  { href: "/account/profile", key: "account.profile" as const },
  { href: "/account/learning", key: "account.learning" as const },
  { href: "/account/library", key: "account.library" as const },
  { href: "/account/orders", key: "account.orders" as const },
];

export default function AccountPage() {
  const { t, locale, setLocale } = useI18n();
  const { user, signOut } = useAuth();
  const { bookmarks, progress, enrollments } = useUserLibrary();

  if (!user) {
    return (
      <div>
        <PageIntro title={t("account.title")} lead={t("state.signedOut")} />
        <Link href="/sign-in" className="underline">
          {t("nav.signIn")}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageIntro title={t("account.title")} lead={`${user.displayName} · ${user.role}`} />
      <div className="mb-8 grid grid-cols-2 gap-3">
        {rooms.map((room) => (
          <Link key={room.href} href={room.href} className="rounded-xl bg-card px-4 py-4 ring-1 ring-foreground/10">
            {t(room.key)}
          </Link>
        ))}
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t("account.settings")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Label htmlFor="locale">{t("account.language")}</Label>
          <select
            id="locale"
            className="h-8 w-40 rounded-lg border border-input bg-transparent px-2 text-sm"
            value={locale}
            onChange={(event) => setLocale(event.target.value as Locale)}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
          <div>
            <Button variant="outline" onClick={() => void signOut()}>
              {t("nav.signOut")}
            </Button>
          </div>
          {hasPermission(user.role, "admin.access") ? (
            <Link href="/admin" className="block text-sm underline">
              {t("nav.admin")}
            </Link>
          ) : null}
        </CardContent>
      </Card>

      <section className="mb-6">
        <h2 className="mb-3 font-heading text-xl">{t("account.bookmarks")}</h2>
        {bookmarks.length === 0 ? (
          <p className="text-sm text-muted-foreground">{t("state.empty")}</p>
        ) : (
          <ul className="space-y-2">
            {bookmarks.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="mb-3 font-heading text-xl">{t("learn.progress")}</h2>
        <ul className="space-y-2 text-sm">
          {enrollments.map((item) => {
            const course = getCourse(item.courseId);
            return (
              <li key={item.id}>
                {course?.title}: {item.completedLessonIds.length} lessons
              </li>
            );
          })}
          {progress.map((item) => {
            const book = getBook(item.bookId);
            return (
              <li key={`${item.bookId}-${item.chapterId}`}>
                {book?.title}: {item.percent}%
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
