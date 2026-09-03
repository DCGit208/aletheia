import { httpsCallable } from "firebase/functions";
import { getFirebaseFunctions } from "@/lib/firebase/client";

function functionsOrThrow() {
  const functions = getFirebaseFunctions();
  if (!functions) throw new Error("Community requires a signed-in Aletheia account.");
  return functions;
}

function call<Req, Res>(name: string) {
  return httpsCallable<Req, Res>(functionsOrThrow(), name);
}

export function productTopicId(productId: string) {
  return `topic-product-${productId}`;
}

export function topicHref(topicId: string) {
  if (topicId.startsWith("topic-product-") || !topicId.startsWith("topic-")) {
    return `/community/talk?id=${encodeURIComponent(topicId)}`;
  }
  if (
    topicId === "topic-welcome" ||
    topicId === "topic-attention" ||
    topicId === "topic-name" ||
    topicId === "topic-city" ||
    topicId === "topic-projects-open"
  ) {
    return `/community/topic/${topicId}`;
  }
  return `/community/talk?id=${encodeURIComponent(topicId)}`;
}

export async function createDiscussion(input: {
  boardId: string;
  title: string;
  body: string;
  productId?: string;
}) {
  const result = await call<
    { boardId: string; title: string; body: string; productId?: string },
    { success: true; topicId: string; href: string; already: boolean }
  >("createDiscussion")(input);
  return result.data;
}

export async function postToTopic(topicId: string, body: string) {
  await call<{ topicId: string; body: string }, { success: true }>("postToTopic")({ topicId, body });
}

export async function watchBoard(boardId: string, watch: boolean) {
  await call<{ boardId: string; watch: boolean }, { success: true }>("watchBoard")({ boardId, watch });
}
