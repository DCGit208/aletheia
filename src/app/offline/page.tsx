"use client";

import { PageIntro } from "@/components/content/page-intro";
import { useI18n } from "@/lib/i18n/provider";

export default function OfflinePage() {
  const { t } = useI18n();
  return <PageIntro title={t("offline.title")} lead={t("offline.lead")} />;
}
