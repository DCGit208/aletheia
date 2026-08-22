"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { EmptyState } from "@/components/content/query-state";
import { getBoard, getCommunity, listTopics } from "@/lib/data/repository";

export default function BoardPage() {
  const { communityId, boardId } = useParams<{ communityId: string; boardId: string }>();
  const community = getCommunity(communityId);
  const board = getBoard(boardId);
  if (!community || !board || board.communityId !== community.id) return <EmptyState title="Board not found." />;
  const topics = listTopics(community.id, board.id);

  return (
    <article>
      <p className="text-sm text-muted-foreground">
        <Link href={`/community/${community.id}`} className="hover:underline">
          {community.title}
        </Link>
      </p>
      <h1 className="mt-2 font-heading text-3xl tracking-wide">{board.title}</h1>
      <p className="mt-2 text-muted-foreground">{board.description}</p>
      {topics.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="mt-8 space-y-3">
          {topics.map((topic) => (
            <li key={topic.id}>
              <Link href={`/community/topic/${topic.id}`} className="block rounded-xl px-4 py-3 ring-1 ring-foreground/10 hover:bg-card">
                <p className="font-medium">
                  {topic.pinned ? "Pinned · " : ""}
                  {topic.title}
                </p>
                <p className="text-sm text-muted-foreground">{topic.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
