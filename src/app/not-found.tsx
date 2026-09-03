"use client";

import Link from "next/link";
import { PageIntro } from "@/components/content/page-intro";
import { buttonVariants } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

export default function NotFound() {
  const { t } = useI18n();
  return (
    <div>
      <PageIntro title={t("notFound.title")} lead={t("notFound.lead")} />
      <div className="flex flex-col gap-2">
        <Link href="/" className={cn(buttonVariants({ size: "lg" }), "h-11 justify-center rounded-full")}>
          {t("nav.home")}
        </Link>
        <Link href="/search" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 justify-center rounded-full")}>
          {t("nav.search")}
        </Link>
      </div>
    </div>
  );
}
