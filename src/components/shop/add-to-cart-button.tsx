"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button, buttonVariants } from "@/components/ui/button";
import { getProduct } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";

export function AddToCartButton({
  productId,
  className,
}: {
  productId: string;
  className?: string;
}) {
  const { t } = useI18n();
  const router = useRouter();
  const { cart, addToCart } = useUserLibrary();
  const inCart = cart.includes(productId);

  if (inCart) {
    return (
      <Link href="/shop" className={cn(buttonVariants(), className)}>
        {t("shop.inCart")}
      </Link>
    );
  }

  return (
    <Button
      type="button"
      className={className}
      onClick={() => {
        addToCart(productId);
        const product = getProduct(productId);
        toast.success(t("shop.addedToCart"), {
          description: product?.title,
          action: {
            label: t("shop.viewCart"),
            onClick: () => router.push("/shop"),
          },
        });
      }}
    >
      {t("action.addToCart")}
    </Button>
  );
}
