"use client";

import { ListRow } from "@/components/content/list-row";
import { PageIntro } from "@/components/content/page-intro";
import { SectionHeader } from "@/components/content/section-header";
import { listBoards, listCommunities } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";

export default function CommunityPage() {
  const { t } = useI18n();
  const communities = listCommunities();

  return (
    <div>
      <PageIntro kicker="Live" title={t("community.title")} lead={t("community.lead")} />
      {communities.map((community) => (
        <section key={community.id} className="mb-8">
          <SectionHeader title={community.title} href={`/community/${community.id}`} actionLabel={t("action.open")} />
          <p className="mb-3 text-sm text-muted-foreground">{community.description}</p>
          <div className="overflow-hidden rounded-2xl bg-card">
            {listBoards(community.id).map((board) => (
              <ListRow
                key={board.id}
                href={`/community/${community.id}/${board.id}`}
                title={board.title}
                subtitle={board.description}
                meta={t("community.threads")}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
