"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Bell,
  BookOpen,
  Home,
  Library,
  Search,
  ShoppingBag,
  UserRound,
  Users,
} from "lucide-react";
import { BrandMark } from "@/components/brand/mark";
import { useAuth } from "@/lib/auth/provider";
import { canReviewManualPayments } from "@/lib/auth/permissions";
import { isFirebaseConfigured } from "@/lib/firebase/config";
import { useI18n } from "@/lib/i18n/provider";
import { PRIMARY_NAV, resolvePrimaryNav } from "@/lib/navigation";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";
import type { MessageKey } from "@/lib/i18n/messages";

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
  const { cart } = useUserLibrary();
  const active = resolvePrimaryNav(pathname);
  const immersive = pathname.startsWith("/learn/read/");
  const localMode = !isFirebaseConfigured();

  if (immersive) {
    return <div className="app-theater">{children}</div>;
  }

  return (
    <div className="app-theater">
      <div className="app-stage flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>

        <header
          className="sticky top-0 z-40 border-b border-white/5 bg-[oklch(0.145_0.012_62_/_0.86)] backdrop-blur-xl"
          style={{ paddingTop: "env(safe-area-inset-top)" }}
        >
          <div className="flex h-12 items-center gap-3 px-4">
            <Link href="/" aria-label={t("brand.platform")} className="min-w-0">
              <BrandMark compact />
            </Link>
            <div className="ml-auto flex items-center gap-1">
              {localMode ? (
                <span className="mr-1 hidden text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase sm:inline">
                  Local
                </span>
              ) : null}
              <button
                type="button"
                className="grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-white/5 hover:text-foreground"
                aria-label={t("nav.search")}
                onClick={() => router.push("/search")}
              >
                <Search className="size-5" />
              </button>
              {user ? (
                <Link
                  href="/account/notifications"
                  className="grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  aria-label={t("account.notifications")}
                >
                  <Bell className="size-5" />
                </Link>
              ) : null}
              <Link
                href={user ? "/account" : "/sign-in"}
                className="grid size-9 place-items-center rounded-full bg-white/6 text-sm font-medium"
                aria-label={user ? user.displayName : t("nav.signIn")}
              >
                {user ? user.displayName.slice(0, 1).toUpperCase() : <UserRound className="size-4" />}
              </Link>
            </div>
          </div>
        </header>

        <main
          id="main"
          className="flex-1 px-5 pt-5"
          style={{ paddingBottom: "calc(5.75rem + env(safe-area-inset-bottom))" }}
        >
          {children}
        </main>

        {canReviewManualPayments(user) ? (
          <Link
            href="/admin"
            className="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:right-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2"
          >
            {t("nav.admin")}
          </Link>
        ) : null}

        <nav
          className="fixed z-50"
          style={{
            left: "50%",
            bottom: "max(0.7rem, env(safe-area-inset-bottom))",
            transform: "translateX(-50%)",
            width: "min(calc(100% - 1.5rem), 536px)",
          }}
          aria-label="Primary"
        >
          <ul className="grid grid-cols-6 rounded-2xl border border-white/10 bg-[oklch(0.12_0.01_62_/_0.88)] p-1 shadow-[0_12px_40px_oklch(0_0_0_/_0.45)] backdrop-blur-xl">
            {PRIMARY_NAV.map((item) => {
              const Icon = icons[item.id];
              const current = active === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "flex flex-col items-center gap-0.5 rounded-xl px-0.5 py-2 text-[0.62rem] tracking-[0.04em] transition-colors",
                      current ? "bg-white/8 text-primary" : "text-muted-foreground",
                    )}
                  >
                    <span className="relative">
                      <Icon className="size-[1.15rem]" strokeWidth={current ? 2.2 : 1.8} aria-hidden />
                      {item.id === "shop" && cart.length > 0 ? (
                        <span className="absolute -top-1.5 -right-2 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[0.55rem] font-medium text-primary-foreground">
                          {cart.length > 9 ? "9+" : cart.length}
                        </span>
                      ) : null}
                    </span>
                    {t(item.messageKey as MessageKey)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
