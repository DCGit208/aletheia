"use client";

import { useEffect, useState } from "react";
import { getAdminOverview, type AdminOverview } from "@/lib/admin/client";
import { catalog } from "@/lib/data/catalog";
import { useI18n } from "@/lib/i18n/provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function money(cents: number) {
  return `$${(cents / 100).toFixed(0)}`;
}

export function AnalyticsPanel() {
  const { t } = useI18n();
  const [overview, setOverview] = useState<AdminOverview | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    void getAdminOverview()
      .then(setOverview)
      .catch(() => setError(true));
  }, []);

  if (error) return <p className="text-sm text-muted-foreground">{t("state.error")}</p>;
  if (!overview) return <p className="text-sm text-muted-foreground">{t("state.loading")}</p>;

  const rows = [
    [t("admin.statMembers"), overview.memberCount],
    [t("admin.statPaidOrders"), overview.paidOrderCount],
    [t("admin.statRevenue"), money(overview.revenueUsdCents)],
    [t("admin.statPendingMomo"), overview.pendingMomoCount],
    [t("admin.statBooks"), catalog.books.length],
    [t("admin.statCourses"), catalog.courses.length],
  ];

  return (
    <div>
      <p className="mb-4 text-sm text-muted-foreground">{t("admin.analyticsLead")}</p>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {rows.map(([label, value]) => (
          <Card key={String(label)}>
            <CardHeader>
              <CardTitle className="text-sm">{label}</CardTitle>
            </CardHeader>
            <CardContent className="font-heading text-3xl">{value}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
