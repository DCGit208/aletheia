"use client";

import { ListRow } from "@/components/content/list-row";
import { PageIntro } from "@/components/content/page-intro";
import { listSchools } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";

export default function SchoolsPage() {
  const { t } = useI18n();
  return (
    <div>
      <PageIntro title={t("learn.schools")} lead="Houses of study inside Learn. You enrol in a program, not in the school as a membership." />
      <div className="overflow-hidden rounded-2xl bg-card">
        {listSchools().map((school) => (
          <ListRow
            key={school.id}
            href={`/learn/schools/${school.id}`}
            title={school.title}
            subtitle={school.subtitle}
            meta={`${school.programIds.length} programs`}
          />
        ))}
      </div>
    </div>
  );
}
