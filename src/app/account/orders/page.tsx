"use client";

import Link from "next/link";
import { Cover } from "@/components/content/cover";
import { EmptyState } from "@/components/content/query-state";
import { PageIntro } from "@/components/content/page-intro";
import { formatMomoXaf } from "@/lib/commerce/offerings";
import { getProduct } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import type { Order } from "@/lib/data/types";
import type { MessageKey } from "@/lib/i18n/messages";

function statusLabelKey(order: Order): MessageKey {
  if (order.status === "pending") return "account.orderPending";
  if (order.status === "paid") return "account.orderPaid";
  if (order.status === "failed") return "account.orderFailed";
  return "account.orderRefunded";
}

export default function OrdersPage() {
  const { t } = useI18n();
  const { user } = useAuth();
  const { orders } = useUserLibrary();
  if (!user) {
    return (
      <EmptyState title={t("state.signedOut")} actionHref="/sign-in" actionLabel={t("nav.signIn")} />
    );
  }

  return (
    <div>
      <PageIntro title={t("account.orders")} />
      {orders.length === 0 ? (
        <EmptyState
          body={t("account.ordersEmpty")}
          actionHref="/shop"
          actionLabel={t("account.libraryShop")}
        />
      ) : (
        <ul className="space-y-3">
          {orders.map((order) => {
            const products = order.productIds.map((id) => getProduct(id)).filter(Boolean);
            const lead = products[0];
            const pendingMomo = order.status === "pending" && order.source === "momo";
            return (
              <li
                key={order.id}
                className="flex items-start gap-3 rounded-xl bg-card/70 px-3 py-3 ring-1 ring-white/8"
              >
                <Cover
                  title={lead?.title ?? order.id}
                  image={
                    lead?.coverImage ??
                    (lead?.id?.includes("foundation") ? "/covers/principles-doctrine-christ.jpg" : undefined)
                  }
                  tone={lead?.coverTone}
                  badge={t(statusLabelKey(order))}
                  compact
                  className="h-14 w-11 shrink-0 !aspect-auto rounded-lg"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-heading text-sm">
                    {order.currency === "XAF"
                      ? formatMomoXaf(order.amountXaf)
                      : `$${(order.totalCents / 100).toFixed(2)}`}
                    <span className="ml-2 text-xs tracking-[0.12em] text-muted-foreground uppercase">
                      {t(statusLabelKey(order))}
                    </span>
                  </p>
                  <p className="truncate text-sm text-muted-foreground">
                    {products.map((product) => product?.title).filter(Boolean).join(", ") ||
                      order.productIds.join(", ")}
                    {order.source === "momo" ? " · Mobile Money" : null}
                    {order.network ? ` · ${order.network.toUpperCase()}` : null}
                  </p>
                  {order.reference ? (
                    <p className="text-xs text-muted-foreground">{order.reference}</p>
                  ) : null}
                  {pendingMomo ? (
                    <p className="mt-1.5 text-xs leading-relaxed text-amber-200/90">
                      {t("account.orderPendingMomo")}
                    </p>
                  ) : null}
                </div>
                {order.status === "paid" ? (
                  <Link href="/account/library" className="shrink-0 pt-1 text-sm text-primary">
                    {t("account.openItem")}
                  </Link>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
