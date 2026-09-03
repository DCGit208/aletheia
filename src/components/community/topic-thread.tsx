"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { collection, doc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { toast } from "sonner";
import { EmptyState } from "@/components/content/query-state";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { postToTopic } from "@/lib/community/client";
import { hasPermission } from "@/lib/auth/permissions";
import { useAuth } from "@/lib/auth/provider";
import { getFirebaseDb } from "@/lib/firebase/client";
import { getBoard, getCommunity, getTopic, listPosts } from "@/lib/data/repository";
import type { Post, Topic } from "@/lib/data/types";
import { useI18n } from "@/lib/i18n/provider";

function asIso(value: unknown) {
  if (value && typeof value === "object" && "toDate" in value) {
    const date = (value as { toDate?: () => Date }).toDate?.();
    if (date instanceof Date) return date.toISOString();
  }
  if (typeof value === "string") return value;
  return "";
}

function topicFromData(id: string, data: Record<string, unknown>): Topic {
  return {
    id,
    communityId: String(data.communityId ?? ""),
    boardId: String(data.boardId ?? ""),
    title: String(data.title ?? ""),
    excerpt: String(data.excerpt ?? ""),
    authorName: String(data.authorName ?? ""),
    replyCount: typeof data.replyCount === "number" ? data.replyCount : 0,
    pinned: data.pinned === true,
    locked: data.locked === true,
    status: data.status === "archived" ? "archived" : "published",
    updatedAt: asIso(data.updatedAt),
    productId: typeof data.productId === "string" ? data.productId : undefined,
  };
}

export function TopicThread({ topicId }: { topicId: string }) {
  const { t } = useI18n();
  const { user } = useAuth();
  const catalogTopic = getTopic(topicId);
  const catalogPosts = useMemo(() => listPosts(topicId), [topicId]);
  const [liveTopic, setLiveTopic] = useState<Topic | null>(null);
  const [livePosts, setLivePosts] = useState<Post[] | null>(null);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const db = getFirebaseDb();
    if (!db || !topicId) {
      setLivePosts([]);
      return;
    }
    const unsubTopic = onSnapshot(doc(db, "topics", topicId), (snap) => {
      setLiveTopic(snap.exists() ? topicFromData(snap.id, snap.data() as Record<string, unknown>) : null);
    });
    const q = query(collection(db, "posts"), where("topicId", "==", topicId), orderBy("createdAt", "asc"));
    const unsubPosts = onSnapshot(
      q,
      (snap) => {
        setLivePosts(
          snap.docs.map((item) => {
            const data = item.data();
            return {
              id: item.id,
              topicId: String(data.topicId ?? topicId),
              authorName: String(data.authorName ?? "Member"),
              authorUid: typeof data.authorUid === "string" ? data.authorUid : undefined,
              body: String(data.body ?? ""),
              createdAt: asIso(data.createdAt),
            };
          }),
        );
      },
      () => setLivePosts([]),
    );
    return () => {
      unsubTopic();
      unsubPosts();
    };
  }, [topicId]);

  const topic = liveTopic ?? catalogTopic;
  if (!topic) return <EmptyState title={t("community.missingTopic")} />;

  const community = getCommunity(topic.communityId);
  const board = getBoard(topic.boardId);
  const liveIds = new Set((livePosts ?? []).map((post) => post.id));
  const posts = [...catalogPosts.filter((post) => !liveIds.has(post.id)), ...(livePosts ?? [])];
  const canPost = hasPermission(user?.role, "community.post") && !topic.locked;

  return (
    <article className="mx-auto max-w-2xl">
      <p className="text-sm text-muted-foreground">
        <Link href={`/community/${topic.communityId}/${topic.boardId}`} className="hover:underline">
          {community?.title ?? topic.communityId} · {board?.title ?? topic.boardId}
        </Link>
      </p>
      <h1 className="mt-2 font-heading text-3xl tracking-wide">{topic.title}</h1>
      {topic.excerpt ? <p className="mt-2 text-muted-foreground">{topic.excerpt}</p> : null}
      <div className="mt-8 space-y-4">
        {posts.length === 0 ? <p className="text-sm text-muted-foreground">{t("community.noPosts")}</p> : null}
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
            setBusy(true);
            void postToTopic(topic.id, draft.trim())
              .then(() => {
                setDraft("");
                toast.success(t("community.posted"));
              })
              .catch((error) => toast.error(error instanceof Error ? error.message : t("state.error")))
              .finally(() => setBusy(false));
          }}
        >
          <label htmlFor="reply" className="text-sm font-medium">
            {t("community.reply")}
          </label>
          <Textarea id="reply" value={draft} onChange={(event) => setDraft(event.target.value)} rows={4} />
          <Button type="submit" disabled={busy}>
            {t("community.postReply")}
          </Button>
        </form>
      ) : (
        <p className="mt-8 text-sm text-muted-foreground">
          {user ? t("community.cannotPost") : t("community.signInToPost")}
        </p>
      )}
    </article>
  );
}
