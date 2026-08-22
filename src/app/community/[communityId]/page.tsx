"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { EmptyState } from "@/components/content/query-state";
import { getCommunity, listBoards, listTopics } from "@/lib/data/repository";

export default function CommunityDetailPage() {
  const { communityId } = useParams<{ communityId: string }>();
  const community = getCommunity(communityId);
  if (!community) return <EmptyState title="Community not found." />;

  return (
    <article>
      <h1 className="font-heading text-3xl tracking-wide">{community.title}</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">{community.description}</p>
      <ul className="mt-8 space-y-3">
        {listBoards(community.id).map((board) => {
          const topics = listTopics(community.id, board.id);
          return (
            <li key={board.id} className="rounded-xl px-4 py-3 ring-1 ring-foreground/10">
              <Link href={`/community/${community.id}/${board.id}`} className="font-heading text-lg hover:underline">
                {board.title}
              </Link>
              <p className="text-sm text-muted-foreground">{board.description}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">{topics.length} topics</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
