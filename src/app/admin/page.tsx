"use client";

import { useEffect, useState } from "react";
import { AuditPanel } from "@/components/admin/audit-panel";
import { AnalyticsPanel } from "@/components/admin/analytics-panel";
import { CommercePanel } from "@/components/admin/commerce-panel";
import { MomoQueue } from "@/components/admin/momo-queue";
import { NoticesPanel } from "@/components/admin/notices-panel";
import { PeoplePanel } from "@/components/admin/people-panel";
import { PurchasesPanel } from "@/components/admin/purchases-panel";
import { ReportsPanel } from "@/components/admin/reports-panel";
import { DeniedState } from "@/components/content/query-state";
import { PageIntro } from "@/components/content/page-intro";
import { canReviewManualPayments, hasPermission } from "@/lib/auth/permissions";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";
import type { MessageKey } from "@/lib/i18n/messages";

const SECTIONS = [
  { id: "people", label: "admin.sectionPeople" },
  { id: "analytics", label: "admin.sectionAnalytics" },
  { id: "purchases", label: "admin.sectionPurchases" },
  { id: "commerce", label: "admin.sectionCommerce" },
  { id: "notices", label: "admin.sectionNotices" },
  { id: "reports", label: "admin.sectionReports" },
  { id: "audit", label: "admin.sectionAudit" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

export default function AdminPage() {
  const { t } = useI18n();
  const { user, loading, refreshSession } = useAuth();
  const [section, setSection] = useState<SectionId>("people");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    void refreshSession().finally(() => setReady(true));
  }, [refreshSession]);

  if (loading || !ready) return <p>{t("state.loading")}</p>;
  if (!canReviewManualPayments(user)) return <DeniedState />;
  const fullAdmin = hasPermission(user?.role, "admin.access");

  return (
    <div>
      <PageIntro title={t("admin.title")} lead={t("admin.workspaceLead")} />
      <p className="mb-6 text-sm text-muted-foreground">
        {t("admin.signedInAs")} {user?.email} · {user?.role}
      </p>

      {fullAdmin ? (
        <>
          <div className="mb-6 flex flex-wrap gap-2">
            {SECTIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={cn(
                  "h-10 rounded-full px-4 text-sm",
                  section === item.id ? "bg-primary text-primary-foreground" : "bg-muted",
                )}
                onClick={() => setSection(item.id)}
              >
                {t(item.label as MessageKey)}
              </button>
            ))}
          </div>
          {section === "people" ? <PeoplePanel /> : null}
          {section === "analytics" ? <AnalyticsPanel /> : null}
          {section === "purchases" ? <PurchasesPanel /> : null}
          {section === "commerce" ? <CommercePanel /> : null}
          {section === "notices" ? <NoticesPanel /> : null}
          {section === "reports" ? <ReportsPanel /> : null}
          {section === "audit" ? <AuditPanel /> : null}
        </>
      ) : (
        <>
          <p className="mb-6 text-sm text-muted-foreground">{t("admin.momoReviewerLead")}</p>
          <MomoQueue />
        </>
      )}
    </div>
  );
}
