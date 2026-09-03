"use client";

import { useParams } from "next/navigation";
import { TopicThread } from "@/components/community/topic-thread";

export default function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();
  return <TopicThread topicId={topicId} />;
}
