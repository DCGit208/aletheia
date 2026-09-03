"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { formatMomoXaf } from "@/lib/commerce/offerings";
import { getProduct } from "@/lib/data/repository";
import { listAllOrders, type AdminOrder } from "@/lib/admin/client";
import { useI18n } from "@/lib/i18n/provider";
import { MomoQueue } from "@/components/admin/momo-queue";

export function CommercePanel() {
  const { t } = useI18n();
  const [orders, setOrders] = useState<AdminOrder[] | null>(null);

  useEffect(() => {
    void listAllOrders()
      .then(setOrders)
      .catch(() => setOrders([]));
  }, []);

  return (
    <div className="space-y-10">
      <MomoQueue />
      <section>
        <h2 className="font-heading text-xl">{t("admin.ordersTitle")}</h2>
        {orders === null ? (
          <p className="mt-3 text-sm text-muted-foreground">{t("state.loading")}</p>
        ) : orders.length === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">{t("admin.ordersEmpty")}</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {orders.map((order) => (
              <li key={`${order.uid}-${order.id}`} className="rounded-xl px-4 py-3 ring-1 ring-foreground/10">
                <p className="font-medium">
                  {order.status} · {order.email}
                </p>
                <p className="text-sm text-muted-foreground">
                  {(order.productIds ?? []).map((id) => getProduct(id)?.title ?? id).join(", ")}
                  {order.currency === "XAF" ? ` · ${formatMomoXaf(order.amountXaf ?? undefined)}` : ""}
                  {order.reference ? ` · ${order.reference}` : ""}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
