"use client";

import Link from "next/link";
import { ContentCard } from "@/components/content/content-card";
import { PageIntro } from "@/components/content/page-intro";
import { Button } from "@/components/ui/button";
import { getProduct, listProducts } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { toast } from "sonner";

export default function ShopPage() {
  const { t } = useI18n();
  const { user } = useAuth();
  const { cart, checkout, removeFromCart } = useUserLibrary();
  const products = listProducts().items;

  return (
    <div>
      <PageIntro title={t("shop.title")} lead={t("shop.lead")} />
      <section className="mb-10 rounded-xl bg-card px-4 py-4 ring-1 ring-foreground/10">
        <h2 className="font-heading text-xl">{t("shop.cart")}</h2>
        {cart.length === 0 ? (
          <p className="mt-2 text-sm text-muted-foreground">{t("shop.emptyCart")}</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {cart.map((id) => {
              const product = getProduct(id);
              if (!product) return null;
              return (
                <li key={id} className="flex items-center justify-between gap-3">
                  <span>{product.title}</span>
                  <Button variant="ghost" size="sm" onClick={() => removeFromCart(id)}>
                    Remove
                  </Button>
                </li>
              );
            })}
          </ul>
        )}
        {cart.length > 0 ? (
          <Button
            className="mt-4"
            onClick={() => {
              if (!user) return;
              const order = checkout();
              if (order) toast.success(t("shop.orderPlaced"));
            }}
            disabled={!user}
          >
            {user ? t("action.checkout") : t("nav.signIn")}
          </Button>
        ) : null}
        {!user ? (
          <p className="mt-3 text-sm">
            <Link href="/sign-in" className="underline">
              {t("nav.signIn")}
            </Link>{" "}
            to place an order. Local checkout records an entitlement; live payments require server verification.
          </p>
        ) : null}
      </section>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {products.map((product) => (
          <ContentCard
            key={product.id}
            href={`/shop/${product.id}`}
            title={product.title}
            subtitle={product.priceCents === 0 ? "Free" : `$${(product.priceCents / 100).toFixed(2)}`}
            tone={product.coverTone}
            badge={product.kind}
          />
        ))}
      </div>
    </div>
  );
}
