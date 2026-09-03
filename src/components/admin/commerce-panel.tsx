"use client";

import { MomoQueue } from "@/components/admin/momo-queue";
import { useI18n } from "@/lib/i18n/provider";

export function CommercePanel() {
  const { t } = useI18n();
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">{t("admin.commerceLead")}</p>
      <MomoQueue />
    </div>
  );
}
