"use client";

import { useEffect, useState } from "react";
import { listAuditLogs } from "@/lib/admin/client";
import { useI18n } from "@/lib/i18n/provider";

export function AuditPanel() {
  const { t } = useI18n();
  const [logs, setLogs] = useState<
    { id: string; actorEmail: string; action: string; target: string; detail: string; createdAt: string | null }[] | null
  >(null);

  useEffect(() => {
    void listAuditLogs()
      .then(setLogs)
      .catch(() => setLogs([]));
  }, []);

  if (logs === null) return <p className="text-sm text-muted-foreground">{t("state.loading")}</p>;
  if (logs.length === 0) return <p className="text-sm text-muted-foreground">{t("admin.auditEmpty")}</p>;

  return (
    <ul className="space-y-3">
      {logs.map((log) => (
        <li key={log.id} className="rounded-xl px-4 py-3 ring-1 ring-foreground/10 text-sm">
          <p className="font-medium">{log.action}</p>
          <p className="text-muted-foreground">
            {log.actorEmail} → {log.target}
            {log.detail ? ` · ${log.detail}` : ""}
          </p>
          {log.createdAt ? (
            <p className="mt-1 text-xs text-muted-foreground">{new Date(log.createdAt).toLocaleString()}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
