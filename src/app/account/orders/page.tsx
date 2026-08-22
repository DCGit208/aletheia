"use client";

import { EmptyState } from "@/components/content/query-state";
import { PageIntro } from "@/components/content/page-intro";
import { getProduct } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";

export default function OrdersPage() {
  const { t } = useI18n();
  const { user } = useAuth();
  const { orders } = useUserLibrary();
  if (!user) return <EmptyState title={t("state.signedOut")} />;

  return (
    <div>
      <PageIntro title={t("account.orders")} />
      {orders.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="space-y-3">
          {orders.map((order) => (
            <li key={order.id} className="rounded-xl px-4 py-3 ring-1 ring-foreground/10">
              <p className="font-medium">
                {order.status} · ${(order.totalCents / 100).toFixed(2)}
              </p>
              <p className="text-sm text-muted-foreground">
                {order.productIds.map((id) => getProduct(id)?.title ?? id).join(", ")}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
