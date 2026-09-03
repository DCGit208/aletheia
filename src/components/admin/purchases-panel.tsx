"use client";

import { useEffect, useState } from "react";
import { formatMomoXaf } from "@/lib/commerce/offerings";
import { getProduct } from "@/lib/data/repository";
import { listAllOrders, type AdminOrder } from "@/lib/admin/client";
import { useI18n } from "@/lib/i18n/provider";

export function PurchasesPanel() {
  const { t } = useI18n();
  const [orders, setOrders] = useState<AdminOrder[] | null>(null);

  useEffect(() => {
    void listAllOrders()
      .then((rows) => setOrders(rows.filter((order) => order.status === "paid")))
      .catch(() => setOrders([]));
  }, []);

  return (
    <section>
      <h2 className="font-heading text-xl">{t("admin.sectionPurchases")}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{t("admin.purchasesLead")}</p>
      {orders === null ? (
        <p className="mt-3 text-sm text-muted-foreground">{t("state.loading")}</p>
      ) : orders.length === 0 ? (
        <p className="mt-3 text-sm text-muted-foreground">{t("admin.purchasesEmpty")}</p>
      ) : (
        <ul className="mt-4 space-y-3">
          {orders.map((order) => (
            <li key={`${order.uid}-${order.id}`} className="rounded-xl px-4 py-3 ring-1 ring-foreground/10">
              <p className="font-medium">
                {order.email}
                {" · "}
                {order.currency === "XAF"
                  ? formatMomoXaf(order.amountXaf ?? undefined)
                  : `$${(order.totalCents / 100).toFixed(2)}`}
              </p>
              <p className="text-sm text-muted-foreground">
                {(order.productIds ?? []).map((id) => getProduct(id)?.title ?? id).join(", ")}
                {order.source ? ` · ${order.source}` : ""}
                {order.reference ? ` · ${order.reference}` : ""}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
