"use client";

import Link from "next/link";
import { ContentCard } from "@/components/content/content-card";
import { PageIntro } from "@/components/content/page-intro";
import { SectionHeader } from "@/components/content/section-header";
import { CheckoutPay } from "@/components/shop/checkout-pay";
import { buttonVariants } from "@/components/ui/button";
import { SHOP_GROUP_ORDER, getOffer, type ShopGroupId } from "@/lib/commerce/offerings";
import { getProduct, listAllProducts } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import type { MessageKey } from "@/lib/i18n/messages";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";

const GROUP_COPY: Record<ShopGroupId, MessageKey> = {
  year: "shop.groupYear",
  textbook: "shop.groupTextbook",
  courses: "shop.groupCourses",
  publications: "shop.groupPublications",
  other: "shop.groupOther",
};

export default function ShopPage() {
  const { t } = useI18n();
  const { user } = useAuth();
  const { cart, removeFromCart } = useUserLibrary();
  const products = listAllProducts();

  return (
    <div>
      <PageIntro title={t("shop.title")} lead={t("shop.lead")} />
      <section className="mb-8 rounded-2xl bg-card px-4 py-4">
        <h2 className="font-heading text-xl">{t("shop.cart")}</h2>
        {cart.length === 0 ? (
          <p className="mt-2 text-sm text-muted-foreground">{t("shop.emptyCart")}</p>
        ) : (
          <ul className="mt-3 space-y-3">
            {cart.map((id) => {
              const product = getProduct(id);
              const offer = getOffer(id);
              if (!product) return null;
              return (
                <li key={id} className="flex items-center justify-between gap-3">
                  <span>
                    <span className="mr-2 text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase">
                      {offer?.badge ?? product.kind}
                    </span>
                    {product.title}
                  </span>
                  <button type="button" className="text-xs tracking-wide text-muted-foreground uppercase" onClick={() => removeFromCart(id)}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        {cart.length > 0 ? (
          user ? (
            <CheckoutPay />
          ) : (
            <Link
              href="/sign-in"
              className={cn(buttonVariants({ size: "lg" }), "mt-4 h-11 w-full justify-center rounded-full")}
            >
              {t("shop.signInToPay")}
            </Link>
          )
        ) : null}
        {!user ? (
          <p className="mt-3 text-sm text-muted-foreground">
            <Link href="/sign-in" className="text-primary">
              {t("nav.signIn")}
            </Link>{" "}
            to place an order. An account is required before payment. Sign-up does not unlock paid books.
          </p>
        ) : null}
      </section>
      {SHOP_GROUP_ORDER.map((group) => {
        const items = products.filter((product) => getOffer(product.id)?.shopGroup === group);
        if (items.length === 0) return null;
        return (
          <section key={group} className="mb-10">
            <SectionHeader title={t(GROUP_COPY[group])} />
            <div className="grid grid-cols-2 gap-4">
              {items.map((product) => {
                const offer = getOffer(product.id);
                return (
                  <ContentCard
                    key={product.id}
                    layout="tile"
                    href={`/shop/${product.id}`}
                    title={product.title}
                    subtitle={product.priceCents === 0 ? "Free" : `$${(product.priceCents / 100).toFixed(0)}`}
                    tone={product.coverTone}
                    image={product.coverImage}
                    imageFit={product.kind === "bundle" ? "cover" : "contain"}
                    badge={offer?.badge ?? product.kind}
                  />
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
