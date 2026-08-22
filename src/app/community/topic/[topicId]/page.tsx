"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { EmptyState } from "@/components/content/query-state";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { hasPermission } from "@/lib/auth/permissions";
import { useAuth } from "@/lib/auth/provider";
import { getBoard, getCommunity, getTopic, listPosts } from "@/lib/data/repository";
import type { Post } from "@/lib/data/types";

export default function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const { user } = useAuth();
  const topic = getTopic(topicId);
  const [replies, setReplies] = useState<Post[]>([]);
  const [draft, setDraft] = useState("");
  if (!topic) return <EmptyState title="Discussion not found." />;
  const community = getCommunity(topic.communityId);
  const board = getBoard(topic.boardId);
  const posts = [...listPosts(topic.id), ...replies];
  const canPost = hasPermission(user?.role, "community.post") && !topic.locked;

  return (
    <article className="mx-auto max-w-2xl">
      <p className="text-sm text-muted-foreground">
        <Link href={`/community/${topic.communityId}/${topic.boardId}`} className="hover:underline">
          {community?.title} · {board?.title}
        </Link>
      </p>
      <h1 className="mt-2 font-heading text-3xl tracking-wide">{topic.title}</h1>
      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <section key={post.id} className="rounded-xl bg-card px-4 py-4 ring-1 ring-foreground/10">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">{post.authorName}</p>
            <p className="mt-2 leading-relaxed">{post.body}</p>
          </section>
        ))}
      </div>
      {canPost ? (
        <form
          className="mt-8 space-y-3"
          onSubmit={(event) => {
            event.preventDefault();
            if (!draft.trim() || !user) return;
            setReplies((current) => [
              ...current,
              {
                id: crypto.randomUUID(),
                topicId: topic.id,
                authorName: user.displayName,
                body: draft.trim(),
                createdAt: new Date().toISOString(),
              },
            ]);
            setDraft("");
          }}
        >
          <label htmlFor="reply" className="text-sm font-medium">
            Reply
          </label>
          <Textarea id="reply" value={draft} onChange={(event) => setDraft(event.target.value)} rows={4} />
          <Button type="submit">Post reply</Button>
        </form>
      ) : (
        <p className="mt-8 text-sm text-muted-foreground">
          {user ? "This discussion is locked or your role cannot post." : "Sign in as a member to reply."}
        </p>
      )}
    </article>
  );
}
