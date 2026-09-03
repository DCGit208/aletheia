"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { toast } from "sonner";
import { EmptyState } from "@/components/content/query-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createDiscussion, topicHref, watchBoard } from "@/lib/community/client";
import { hasPermission } from "@/lib/auth/permissions";
import { useAuth } from "@/lib/auth/provider";
import { getFirebaseDb } from "@/lib/firebase/client";
import { getBoard, getCommunity, listTopics } from "@/lib/data/repository";
import type { Topic } from "@/lib/data/types";
import { useI18n } from "@/lib/i18n/provider";
import { useRouter } from "next/navigation";

function asIso(value: unknown) {
  if (value && typeof value === "object" && "toDate" in value) {
    const date = (value as { toDate?: () => Date }).toDate?.();
    if (date instanceof Date) return date.toISOString();
  }
  return "";
}

export default function BoardPage() {
  const { communityId, boardId } = useParams<{ communityId: string; boardId: string }>();
  const { t } = useI18n();
  const { user } = useAuth();
  const router = useRouter();
  const community = getCommunity(communityId);
  const board = getBoard(boardId);
  const catalogTopics = community && board ? listTopics(community.id, board.id) : [];
  const [liveTopics, setLiveTopics] = useState<Topic[]>([]);
  const [watching, setWatching] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const db = getFirebaseDb();
    if (!db || !communityId || !boardId) return;
    const q = query(
      collection(db, "topics"),
      where("communityId", "==", communityId),
      where("boardId", "==", boardId),
      where("status", "==", "published"),
      orderBy("updatedAt", "desc"),
    );
    const unsubTopics = onSnapshot(
      q,
      (snap) => {
        setLiveTopics(
          snap.docs.map((item) => {
            const data = item.data();
            return {
              id: item.id,
              communityId: String(data.communityId ?? communityId),
              boardId: String(data.boardId ?? boardId),
              title: String(data.title ?? ""),
              excerpt: String(data.excerpt ?? ""),
              authorName: String(data.authorName ?? ""),
              replyCount: typeof data.replyCount === "number" ? data.replyCount : 0,
              pinned: data.pinned === true,
              locked: data.locked === true,
              status: "published" as const,
              updatedAt: asIso(data.updatedAt),
              productId: typeof data.productId === "string" ? data.productId : undefined,
            };
          }),
        );
      },
      () => setLiveTopics([]),
    );
    if (!user) return unsubTopics;
    const unsubWatch = onSnapshot(doc(db, "boards", boardId, "watchers", user.uid), (snap) => {
      setWatching(snap.exists());
    });
    return () => {
      unsubTopics();
      unsubWatch();
    };
  }, [communityId, boardId, user]);

  if (!community || !board || board.communityId !== community.id) return <EmptyState title={t("community.missingBoard")} />;

  const liveIds = new Set(liveTopics.map((topic) => topic.id));
  const topics = [...catalogTopics.filter((topic) => !liveIds.has(topic.id)), ...liveTopics];
  const canStart = hasPermission(user?.role, "community.post") && boardId !== "board-announce";
  const canWatch = Boolean(user);

  return (
    <article>
      <p className="text-sm text-muted-foreground">
        <Link href={`/community/${community.id}`} className="hover:underline">
          {community.title}
        </Link>
      </p>
      <h1 className="mt-2 font-heading text-3xl tracking-wide">{board.title}</h1>
      <p className="mt-2 text-muted-foreground">{board.description}</p>
      {canWatch ? (
        <Button
          type="button"
          variant={watching ? "outline" : "default"}
          className="mt-4"
          onClick={() => {
            void watchBoard(board.id, !watching)
              .then(() => toast.success(watching ? t("community.unwatched") : t("community.watched")))
              .catch((error) => toast.error(error instanceof Error ? error.message : t("state.error")));
          }}
        >
          {watching ? t("community.watching") : t("community.watch")}
        </Button>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">{t("community.signInToWatch")}</p>
      )}

      {topics.length === 0 ? (
        <div className="mt-8">
          <EmptyState />
        </div>
      ) : (
        <ul className="mt-8 space-y-3">
          {topics.map((topic) => (
            <li key={topic.id}>
              <Link href={topicHref(topic.id)} className="block rounded-xl px-4 py-3 ring-1 ring-foreground/10 hover:bg-card">
                <p className="font-medium">
                  {topic.pinned ? `${t("community.pinned")} · ` : ""}
                  {topic.title}
                </p>
                <p className="text-sm text-muted-foreground">{topic.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {canStart ? (
        <form
          className="mt-10 space-y-3"
          onSubmit={(event) => {
            event.preventDefault();
            setBusy(true);
            void createDiscussion({ boardId: board.id, title, body })
              .then((result) => {
                toast.success(t("community.threadOpened"));
                setTitle("");
                setBody("");
                router.push(result.href);
              })
              .catch((error) => toast.error(error instanceof Error ? error.message : t("state.error")))
              .finally(() => setBusy(false));
          }}
        >
          <h2 className="font-heading text-xl">{t("community.startTopic")}</h2>
          <Input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder={t("community.topicTitle")}
            className="h-11 rounded-xl"
            required
            minLength={3}
          />
          <Textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            rows={4}
            placeholder={t("community.topicBody")}
            required
          />
          <Button type="submit" disabled={busy}>
            {t("community.openThread")}
          </Button>
        </form>
      ) : boardId === "board-announce" ? (
        <p className="mt-8 text-sm text-muted-foreground">{t("community.announceOnly")}</p>
      ) : null}
    </article>
  );
}
