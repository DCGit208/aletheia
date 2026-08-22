"use client";

import { DeniedState } from "@/components/content/query-state";
import { PageIntro } from "@/components/content/page-intro";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { hasPermission } from "@/lib/auth/permissions";
import { useAuth } from "@/lib/auth/provider";
import { catalog } from "@/lib/data/catalog";
import { useI18n } from "@/lib/i18n/provider";

export default function AdminPage() {
  const { t } = useI18n();
  const { user, loading } = useAuth();

  if (loading) return <p>{t("state.loading")}</p>;
  if (!hasPermission(user?.role, "admin.access")) return <DeniedState />;

  const rows = [
    ["Books", catalog.books.length],
    ["Courses", catalog.courses.length],
    ["Journals", catalog.journals.length],
    ["Articles", catalog.articles.length],
    ["Communities", catalog.communities.length],
    ["Products", catalog.products.length],
    ["Announcements", catalog.announcements.length],
  ];

  return (
    <div>
      <PageIntro title={t("admin.title")} lead={t("admin.lead")} />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {rows.map(([label, count]) => (
          <Card key={String(label)}>
            <CardHeader>
              <CardTitle>{label}</CardTitle>
            </CardHeader>
            <CardContent className="font-heading text-3xl">{count}</CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
        Role assignment in production is a Cloud Function writing the <code>aletheiaRole</code> custom
        claim. This screen never trusts a client-supplied role field. Content creation, order repair,
        and moderation queues arrive in later phases on these same protected routes.
      </p>
    </div>
  );
}
