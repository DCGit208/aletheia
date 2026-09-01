"use client";

import Link from "next/link";
import { useEffect } from "react";
import { PageIntro } from "@/components/content/page-intro";
import { buttonVariants } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";

export default function ShopSuccessPage() {
  const { t } = useI18n();
  const { clearCart } = useUserLibrary();

  useEffect(() => {
    clearCart();
    // Run once when Stripe returns the member to the app.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- clear the cart on arrival only
  }, []);

  return (
    <div className="mx-auto max-w-lg">
      <PageIntro title={t("shop.successTitle")} lead={t("shop.successLead")} />
      <div className="flex flex-wrap gap-2">
        <Link href="/account/library" className={cn(buttonVariants())}>
          {t("account.library")}
        </Link>
        <Link href="/shop" className={buttonVariants({ variant: "outline" })}>
          {t("nav.shop")}
        </Link>
      </div>
    </div>
  );
}
