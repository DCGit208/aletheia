"use client";

import Link from "next/link";
import { PageIntro } from "@/components/content/page-intro";
import { buttonVariants } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

export default function ShopCancelPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-lg">
      <PageIntro title={t("shop.cancelTitle")} lead={t("shop.cancelLead")} />
      <Link href="/shop" className={cn(buttonVariants())}>
        {t("nav.shop")}
      </Link>
    </div>
  );
}
