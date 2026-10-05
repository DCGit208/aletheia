"use client";

import Link from "next/link";
import { ListRow } from "@/components/content/list-row";
import { PageIntro } from "@/components/content/page-intro";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { InstallCard } from "@/components/pwa/install-card";
import { canReviewManualPayments } from "@/lib/auth/permissions";
import { useAuth } from "@/lib/auth/provider";
import { createClientStore } from "@/lib/storage/client-store";
import { DEFAULT_READER_SETTINGS, loadReaderSettings, saveReaderSettings } from "@/lib/reader/settings";
import { listChapters } from "@/lib/data/repository";
import { useMemo, useSyncExternalStore } from "react";
import { getBook, getCourse } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import type { Locale } from "@/lib/data/types";
import { cn } from "@/lib/utils";

const rooms = [
  { href: "/account/profile", key: "account.profile" as const },
  { href: "/account/learning", key: "account.learning" as const },
  { href: "/account/library", key: "account.library" as const },
  { href: "/account/orders", key: "account.orders" as const },
  { href: "/account/notifications", key: "account.notifications" as const },
];

export default function AccountPage() {
  const { t, locale, setLocale } = useI18n();
  const { user, signOut } = useAuth();
  const { bookmarks, progress, enrollments } = useUserLibrary();
  const settingsStore = useMemo(
    () => createClientStore(() => loadReaderSettings(user?.uid ?? "guest"), (value) => saveReaderSettings(user?.uid ?? "guest", value)),
    [user?.uid],
  );
  const readerSettings = useSyncExternalStore(settingsStore.subscribe, settingsStore.getSnapshot, () => DEFAULT_READER_SETTINGS);

  if (!user) {
    return (
      <div>
        <PageIntro title={t("account.title")} lead={t("state.signedOut")} />
        <Link href="/sign-in" className={cn(buttonVariants({ size: "lg" }), "h-11 w-full justify-center rounded-full")}>
          {t("nav.signIn")}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageIntro kicker={user.role} title={user.displayName} lead={user.email} />
      <div className="mb-8 overflow-hidden rounded-2xl bg-card">
        {rooms.map((room) => (
          <ListRow key={room.href} href={room.href} title={t(room.key)} />
        ))}
        {canReviewManualPayments(user) ? <ListRow href="/admin" title={t("nav.admin")} /> : null}
      </div>

      <section className="mb-8 rounded-2xl bg-card px-4 py-4">
        <h2 className="font-heading text-xl">{t("account.settings")}</h2>
        <div className="mt-3 space-y-3">
          <Label htmlFor="locale">{t("account.language")}</Label>
          <select
            id="locale"
            className="h-10 w-full rounded-xl border border-input bg-transparent px-3 text-sm"
            value={locale}
            onChange={(event) => setLocale(event.target.value as Locale)}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
          <button type="button" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 w-full justify-center rounded-full")} onClick={() => void signOut()}>
            {t("nav.signOut")}
          </button>
        </div>
      </section>

      <div className="mb-8">
        <InstallCard />
      </div>

      <section className="mb-8">
        <h2 className="mb-3 font-heading text-xl">{t("account.bookmarks")}</h2>
        {bookmarks.length === 0 ? (
          <p className="text-sm text-muted-foreground">{t("state.empty")}</p>
        ) : (
          <div className="overflow-hidden rounded-2xl bg-card">
            {bookmarks.map((item) => {
              const [bookId, chapterId] = item.kind === "book" ? item.targetId.split("::") : [item.targetId, ""];
              const href = item.kind === "book"
                ? chapterId
                  ? `/learn/read/${bookId}?chapter=${encodeURIComponent(chapterId)}`
                  : `/learn/books/${bookId}`
                : item.kind === "course"
                  ? `/learn/courses/${item.targetId}`
                  : "/account/library";
              return (
                <Link key={item.id} href={href} className="block border-b border-white/6 px-4 py-3 text-sm transition-colors hover:bg-card last:border-0">
                  {item.label}
                  <span className="ml-2 text-xs text-primary">Open</span>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-heading text-xl">Highlights</h2>
        {readerSettings.highlights.length === 0 ? (
          <p className="text-sm text-muted-foreground">Select a passage in a book and save it with Highlight selection.</p>
        ) : (
          <div className="overflow-hidden rounded-2xl bg-card">
            {readerSettings.highlights.map((item, index) => {
              const book = getBook(item.bookId);
              const chapter = listChapters(item.bookId).find((entry) => entry.id === item.chapterId);
              return (
                <Link
                  key={item.bookId + "-" + item.chapterId + "-" + index}
                  href={"/learn/read/" + item.bookId + "?chapter=" + encodeURIComponent(item.chapterId)}
                  className="block border-b border-white/6 px-4 py-3 transition-colors hover:bg-background last:border-0"
                >
                  <span className="block text-xs text-muted-foreground">
                    {book?.title ?? item.bookId} · {chapter ? chapter.number + ". " + chapter.title : ""}
                  </span>
                  <span className="mt-1 block text-sm">{item.text}</span>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-3 font-heading text-xl">{t("learn.progress")}</h2>
        <div className="overflow-hidden rounded-2xl bg-card">
          {enrollments.map((item) => {
            const course = getCourse(item.courseId);
            return (
              <p key={item.id} className="border-b border-white/6 px-4 py-3 text-sm last:border-0">
                {course?.title}: {item.completedLessonIds.length} lessons
              </p>
            );
          })}
          {progress.map((item) => {
            const book = getBook(item.bookId);
            return (
              <p key={`${item.bookId}-${item.chapterId}`} className="border-b border-white/6 px-4 py-3 text-sm last:border-0">
                {book?.title}: {item.percent}%
              </p>
            );
          })}
        </div>
      </section>
    </div>
  );
}
