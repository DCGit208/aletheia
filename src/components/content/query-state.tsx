"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useI18n } from "@/lib/i18n/provider";

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

export function EmptyState({ title, body }: { title?: string; body?: string }) {
  const { t } = useI18n();
  return (
    <div className="rounded-xl border border-dashed border-border bg-card/60 px-5 py-10 text-center">
      <p className="font-heading text-lg">{title ?? t("state.empty")}</p>
      {body ? <p className="mt-2 text-sm text-muted-foreground">{body}</p> : null}
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

export function DeniedState() {
  const { t } = useI18n();
  return (
    <Alert>
      <AlertTitle>{t("state.denied")}</AlertTitle>
      <AlertDescription>{t("state.signedOut")}</AlertDescription>
    </Alert>
  );
}
