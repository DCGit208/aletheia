"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOpen,
  Home,
  Library,
  Search,
  ShoppingBag,
  UserRound,
  Users,
} from "lucide-react";
import { BrandMark } from "@/components/brand/mark";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth/provider";
import { hasPermission } from "@/lib/auth/permissions";
import { isFirebaseConfigured } from "@/lib/firebase/config";
import { useI18n } from "@/lib/i18n/provider";
import { PRIMARY_NAV, resolvePrimaryNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import type { MessageKey } from "@/lib/i18n/messages";
import { Alert, AlertDescription } from "@/components/ui/alert";

const icons = {
  home: Home,
  learn: BookOpen,
  publications: Library,
  community: Users,
  shop: ShoppingBag,
  account: UserRound,
};

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useI18n();
  const { user } = useAuth();
  const active = resolvePrimaryNav(pathname);
  const immersive = pathname.startsWith("/learn/read/");
  const localMode = !isFirebaseConfigured();

  if (immersive) {
    return <div className="min-h-dvh bg-background">{children}</div>;
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-3 px-4">
          <Link href="/" aria-label={t("brand.platform")} className="shrink-0">
            <BrandMark compact />
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {PRIMARY_NAV.map((item) => {
              const current = active === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "rounded-md px-2.5 py-1.5 text-sm tracking-wide transition-colors",
                    current ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {t(item.messageKey as MessageKey)}
                </Link>
              );
            })}
          </nav>
          <form
            className="ml-auto hidden min-w-0 flex-1 md:block md:max-w-xs"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const q = String(data.get("q") ?? "").trim();
              router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
            }}
          >
            <label className="sr-only" htmlFor="global-search">
              {t("nav.search")}
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="global-search"
                name="q"
                placeholder={t("search.placeholder")}
                className="h-8 pl-8"
              />
            </div>
          </form>
          <Link href="/search" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden")} aria-label={t("nav.search")}>
            <Search />
          </Link>
          {user ? (
            <Link href="/account" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden sm:inline-flex")}>
              {user.displayName}
            </Link>
          ) : (
            <Link href="/sign-in" className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}>
              {t("nav.signIn")}
            </Link>
          )}
        </div>
      </header>

      <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-4 pt-6 pb-24 md:pb-10">
        {localMode ? (
          <Alert className="mb-6">
            <AlertDescription>{t("state.localMode")}</AlertDescription>
          </Alert>
        ) : null}
        {children}
      </main>

      {hasPermission(user?.role, "admin.access") ? (
        <div className="mx-auto hidden w-full max-w-6xl px-4 pb-6 md:block">
          <Link href="/admin" className={cn(buttonVariants({ variant: "link" }), "px-0 text-muted-foreground")}>
            {t("nav.admin")}
          </Link>
        </div>
      ) : null}

      <nav
        className="fixed right-0 bottom-0 left-0 z-40 border-t border-border/80 bg-background/95 backdrop-blur-md md:hidden"
        aria-label="Primary"
      >
        <ul className="mx-auto grid max-w-lg grid-cols-6">
          {PRIMARY_NAV.map((item) => {
            const Icon = icons[item.id];
            const current = active === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "flex flex-col items-center gap-1 px-1 py-2.5 text-[0.65rem] tracking-wide",
                    current ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  <Icon className="size-5" aria-hidden />
                  {t(item.messageKey as MessageKey)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
