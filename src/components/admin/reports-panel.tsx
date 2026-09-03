"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { listOpenReports, resolveReport } from "@/lib/admin/client";
import { useI18n } from "@/lib/i18n/provider";

export function ReportsPanel() {
  const { t } = useI18n();
  const [reports, setReports] = useState<
    { id: string; targetPath: string; reason: string; reporterUid: string; createdAt: string | null }[] | null
  >(null);

  const refresh = () => {
    void listOpenReports()
      .then(setReports)
      .catch(() => setReports([]));
  };

  useEffect(() => {
    refresh();
  }, []);

  if (reports === null) return <p className="text-sm text-muted-foreground">{t("state.loading")}</p>;
  if (reports.length === 0) return <p className="text-sm text-muted-foreground">{t("admin.reportsEmpty")}</p>;

  return (
    <ul className="space-y-3">
      {reports.map((report) => (
        <li key={report.id} className="rounded-xl px-4 py-3 ring-1 ring-foreground/10">
          <p className="font-medium">{report.targetPath}</p>
          <p className="mt-1 text-sm">{report.reason}</p>
          <Button
            type="button"
            className="mt-3"
            onClick={() => {
              void resolveReport(report.id)
                .then(() => {
                  toast.success(t("admin.reportResolved"));
                  refresh();
                })
                .catch((error) => toast.error(error instanceof Error ? error.message : t("state.error")));
            }}
          >
            {t("admin.resolve")}
          </Button>
        </li>
      ))}
    </ul>
  );
}
