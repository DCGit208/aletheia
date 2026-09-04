"use client";

import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getProduct } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

export function LoadingState({ label }: { label?: string }) {
  const { t } = useI18n();
  return (
    <div className="space-y-3" role="status" aria-live="polite">
      <p className="sr-only">{label ?? t("state.loading")}</p>
      <Skeleton className="h-7 w-48" />
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-24 w-full" />
    </div>
  );
}

export function EmptyState({
  title,
  body,
  actionHref,
  actionLabel,
}: {
  title?: string;
  body?: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  const { t } = useI18n();
  return (
    <div className="rounded-xl border border-dashed border-border bg-card/60 px-5 py-10 text-center">
      <p className="font-heading text-lg">{title ?? t("state.empty")}</p>
      {body ? <p className="mt-2 text-sm text-muted-foreground">{body}</p> : null}
      {actionHref && actionLabel ? (
        <Link
          href={actionHref}
          className={cn(buttonVariants(), "mt-5 inline-flex h-11 rounded-full px-5")}
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}

export function ErrorState({ onRetry, message }: { onRetry?: () => void; message?: string }) {
  const { t } = useI18n();
  return (
    <Alert variant="destructive">
      <AlertTitle>{t("state.error")}</AlertTitle>
      <AlertDescription className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span>{message ?? t("state.error")}</span>
        {onRetry ? (
          <Button variant="outline" onClick={onRetry}>
            {t("action.retry")}
          </Button>
        ) : null}
      </AlertDescription>
    </Alert>
  );
}

export function DeniedState({
  productId,
  yearProductId = "product-foundation-year",
  showYear = true,
}: {
  productId?: string;
  yearProductId?: string;
  showYear?: boolean;
}) {
  const { t } = useI18n();
  const { user } = useAuth();
  const product = productId ? getProduct(productId) : null;
  const year = showYear ? getProduct(yearProductId) : null;

  return (
    <div className="space-y-4">
      <Alert>
        <AlertTitle>{t("state.denied")}</AlertTitle>
        <AlertDescription>{user ? t("state.deniedSignedIn") : t("state.signedOut")}</AlertDescription>
      </Alert>
      <div className="flex flex-wrap gap-2">
        {!user ? (
          <Link href="/sign-in" className={cn(buttonVariants(), "h-11 rounded-full px-5")}>
            {t("nav.signIn")}
          </Link>
        ) : null}
        {product ? (
          <Link
            href={`/shop/${product.id}`}
            className={cn(buttonVariants(user ? undefined : { variant: "outline" }), "h-11 rounded-full px-5")}
          >
            {t("state.buyAccess")} — ${(product.priceCents / 100).toFixed(0)}
          </Link>
        ) : null}
        {year && year.id !== product?.id ? (
          <Link
            href={`/shop/${year.id}`}
            className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-5")}
          >
            {t("state.buyYear")} — ${(year.priceCents / 100).toFixed(0)}
          </Link>
        ) : null}
        <Link href="/shop" className={cn(buttonVariants({ variant: "ghost" }), "h-11 rounded-full px-5")}>
          {t("nav.shop")}
        </Link>
      </div>
    </div>
  );
}
