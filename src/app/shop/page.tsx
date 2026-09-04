"use client";

import Link from "next/link";
import { ContentCard } from "@/components/content/content-card";
import { Cover } from "@/components/content/cover";
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

const FEATURED_ID = "product-foundation-year";

export default function ShopPage() {
  const { t } = useI18n();
  const { user } = useAuth();
  const { cart, removeFromCart } = useUserLibrary();
  const products = listAllProducts();
  const featured = getProduct(FEATURED_ID);
  const featuredOffer = featured ? getOffer(featured.id) : null;
  const cartTotal = cart.reduce((sum, id) => sum + (getProduct(id)?.priceCents ?? 0), 0);

  return (
    <div>
      <PageIntro kicker={t("shop.kicker")} title={t("shop.title")} lead={t("shop.lead")} />

      {featured ? (
        <section className="shop-hero mb-8 overflow-hidden rounded-2xl">
          <div className="relative grid gap-5 p-4 sm:grid-cols-[140px_1fr] sm:items-center sm:p-5">
            <Cover
              title={featured.title}
              tone={featured.coverTone}
              image={featured.coverImage ?? "/covers/principles-doctrine-christ.jpg"}
              badge={featuredOffer?.badge}
              className="mx-auto w-[42%] max-w-[148px] shadow-[0_18px_40px_oklch(0_0_0_/_0.45)] sm:mx-0 sm:w-full sm:max-w-none"
            />
            <div className="relative min-w-0">
              <p className="text-[0.62rem] tracking-[0.22em] text-primary uppercase">
                {featuredOffer?.kicker ?? t("shop.featured")}
              </p>
              <h2 className="mt-2 font-heading text-[1.55rem] leading-[1.08] tracking-wide">{featured.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {featured.description}
              </p>
              <p className="mt-3 font-heading text-2xl text-primary">
                ${(featured.priceCents / 100).toFixed(0)}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={`/shop/${featured.id}`}
                  className={cn(buttonVariants(), "h-11 rounded-full px-5")}
                >
                  {t("shop.viewOffer")}
                </Link>
                <Link
                  href={`/learn/programs/program-foundation-year`}
                  className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-5")}
                >
                  {t("shop.learnMore")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mb-8 overflow-hidden rounded-2xl border border-primary/15 bg-[linear-gradient(165deg,oklch(0.22_0.02_70_/_0.55),oklch(0.17_0.012_62)_55%)] px-4 py-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[0.62rem] tracking-[0.2em] text-primary uppercase">{t("shop.cart")}</p>
            <h2 className="mt-1 font-heading text-xl">
              {cart.length === 0
                ? t("shop.emptyCart")
                : `${cart.length} ${cart.length === 1 ? t("shop.item") : t("shop.items")}`}
            </h2>
          </div>
          {cart.length > 0 ? (
            <p className="font-heading text-xl text-primary">${(cartTotal / 100).toFixed(0)}</p>
          ) : null}
        </div>

        {cart.length > 0 ? (
          <ul className="mt-4 space-y-3">
            {cart.map((id) => {
              const product = getProduct(id);
              const offer = getOffer(id);
              if (!product) return null;
              return (
                <li
                  key={id}
                  className="flex items-center gap-3 rounded-xl bg-black/20 px-2.5 py-2 ring-1 ring-white/6"
                >
                  <Cover
                    title={product.title}
                    tone={product.coverTone}
                    image={product.coverImage}
                    fit={product.kind === "bundle" ? "cover" : "contain"}
                    compact
                    className="h-14 w-11 shrink-0 !aspect-auto rounded-lg"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.58rem] tracking-[0.14em] text-muted-foreground uppercase">
                      {offer?.badge ?? product.kind}
                    </p>
                    <p className="truncate font-heading text-sm leading-snug">{product.title}</p>
                    <p className="text-xs text-primary">
                      {product.priceCents === 0 ? "Free" : `$${(product.priceCents / 100).toFixed(0)}`}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="grid h-10 min-w-10 place-items-center rounded-full text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:bg-white/5 hover:text-foreground"
                    onClick={() => removeFromCart(id)}
                  >
                    {t("shop.remove")}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">{t("shop.emptyCartHint")}</p>
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
            {t("shop.signInHint")}
          </p>
        ) : null}
      </section>

      {SHOP_GROUP_ORDER.map((group) => {
        const items = products.filter((product) => {
          if (getOffer(product.id)?.shopGroup !== group) return false;
          if (group === "year" && product.id === FEATURED_ID) return false;
          return true;
        });
        if (items.length === 0) return null;
        return (
          <section key={group} className="mb-10">
            <SectionHeader title={t(GROUP_COPY[group])} />
            <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-4">
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
                    emphasizePrice
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
