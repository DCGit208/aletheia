"use client";

import Link from "next/link";
import { PageIntro } from "@/components/content/page-intro";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listBoards, listCommunities } from "@/lib/data/repository";
import { useI18n } from "@/lib/i18n/provider";

export default function CommunityPage() {
  const { t } = useI18n();
  const communities = listCommunities();

  return (
    <div>
      <PageIntro title={t("community.title")} lead={t("community.lead")} />
      <div className="space-y-6">
        {communities.map((community) => (
          <section key={community.id}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link href={`/community/${community.id}`}>{community.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{community.description}</CardContent>
            </Card>
            <ul className="mt-3 space-y-2">
              {listBoards(community.id).map((board) => (
                <li key={board.id}>
                  <Link
                    href={`/community/${community.id}/${board.id}`}
                    className="block rounded-xl px-4 py-3 ring-1 ring-foreground/10 hover:bg-card"
                  >
                    <p className="font-medium">{board.title}</p>
                    <p className="text-sm text-muted-foreground">{board.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
