"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { doc, onSnapshot } from "firebase/firestore";
import { toast } from "sonner";
import { TopicThread } from "@/components/community/topic-thread";
import { EmptyState } from "@/components/content/query-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createDiscussion, productTopicId } from "@/lib/community/client";
import { getProduct } from "@/lib/data/repository";
import { getFirebaseDb } from "@/lib/firebase/client";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";

function ProductTalk({ productId }: { productId: string }) {
  const { t } = useI18n();
  const { user } = useAuth();
  const router = useRouter();
  const topicId = productTopicId(productId);
  const product = getProduct(productId);
  const [exists, setExists] = useState(false);
  const [title, setTitle] = useState(product ? `${t("community.discuss")}: ${product.title}` : "");
  const [body, setBody] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const db = getFirebaseDb();
    if (!db) return;
    return onSnapshot(
      doc(db, "topics", topicId),
      (snap) => setExists(snap.exists()),
      () => setExists(false),
    );
  }, [topicId]);

  if (exists) return <TopicThread topicId={topicId} />;

  return (
    <article className="mx-auto max-w-2xl">
      <h1 className="font-heading text-3xl tracking-wide">{t("community.startProductThread")}</h1>
      <p className="mt-2 text-muted-foreground">
        {t("community.productThreadLead")}
        {product ? ` ${product.title}` : ""}
      </p>
      {user ? (
        <form
          className="mt-8 space-y-3"
          onSubmit={(event) => {
            event.preventDefault();
            setBusy(true);
            void createDiscussion({
              boardId: "board-studies",
              title: title.trim() || product?.title || "Discussion",
              body: body.trim() || `${t("community.discuss")} ${product?.title ?? ""}`.trim(),
              productId,
            })
              .then((result) => {
                toast.success(t("community.threadOpened"));
                router.replace(result.href);
              })
              .catch((error) => toast.error(error instanceof Error ? error.message : t("state.error")))
              .finally(() => setBusy(false));
          }}
        >
          <Input value={title} onChange={(event) => setTitle(event.target.value)} className="h-11 rounded-xl" required minLength={3} />
          <Textarea value={body} onChange={(event) => setBody(event.target.value)} rows={4} required />
          <Button type="submit" disabled={busy}>
            {t("community.openThread")}
          </Button>
        </form>
      ) : (
        <p className="mt-8 text-sm text-muted-foreground">{t("community.signInToPost")}</p>
      )}
    </article>
  );
}

function TalkContent() {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const query = {
    id: (searchParams.get("id") ?? "").trim(),
    product: (searchParams.get("product") ?? "").trim(),
    returnTo: (searchParams.get("returnTo") ?? "").trim(),
    returnTitle: (searchParams.get("returnTitle") ?? "").trim(),
  };
  const safeReturnTo = query.returnTo.startsWith("/") && !query.returnTo.startsWith("//") ? query.returnTo : "";
  const returnLink = safeReturnTo ? (
    <Link href={safeReturnTo} className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mb-5")}>
      Back to {query.returnTitle || "the book"}
    </Link>
  ) : null;

  if (query.product && !query.id) return <div>{returnLink}<ProductTalk productId={query.product} /></div>;
  const topicId = query.id || (query.product ? productTopicId(query.product) : "");
  if (!topicId) return <EmptyState title={t("community.missingTopic")} />;
  return <div>{returnLink}<TopicThread topicId={topicId} /></div>;
}

export default function TalkPage() {
  return (
    <Suspense fallback={null}>
      <TalkContent />
    </Suspense>
  );
}
