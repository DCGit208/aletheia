export type AnalyticsEvent =
  | { name: "course_enroll"; courseId: string }
  | { name: "program_enroll"; programId: string }
  | { name: "lesson_complete"; lessonId: string; courseId: string }
  | { name: "book_open"; bookId: string }
  | { name: "reading_progress"; bookId: string; percent: number }
  | { name: "publication_view"; publicationId: string; kind: string }
  | { name: "shop_add"; productId: string }
  | { name: "order_placed"; orderId: string }
  | { name: "search"; query: string };

export function track(event: AnalyticsEvent) {
  if (process.env.NODE_ENV !== "production") {
    console.info("[aletheia:analytics]", event);
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("aletheia:analytics", { detail: event }));
  }
}
