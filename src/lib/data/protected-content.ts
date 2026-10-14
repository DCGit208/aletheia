import { httpsCallable } from "firebase/functions";
import { getFirebaseFunctions } from "@/lib/firebase/client";
import type { BookChapter, Lesson } from "@/lib/data/types";

interface ProtectedContentRequest {
  kind: "book" | "course";
  contentId: string;
  itemId?: string;
}

interface ProtectedContentResponse {
  chapters?: BookChapter[];
  lessons?: Lesson[];
}

function functionsOrThrow() {
  const functions = getFirebaseFunctions();
  if (!functions) throw new Error("Protected content requires a configured Aletheia account.");
  return functions;
}

async function loadProtectedContent(request: ProtectedContentRequest): Promise<ProtectedContentResponse> {
  const callable = httpsCallable<ProtectedContentRequest, ProtectedContentResponse>(
    functionsOrThrow(),
    "getProtectedContent",
  );
  return (await callable(request)).data;
}

export async function loadProtectedBookChapters(bookId: string): Promise<BookChapter[]> {
  const response = await loadProtectedContent({ kind: "book", contentId: bookId });
  if (!Array.isArray(response.chapters) || response.chapters.some((chapter) => !chapter.body)) {
    throw new Error("The protected book response did not contain chapter text.");
  }
  return response.chapters;
}

export async function loadProtectedLesson(courseId: string, lessonId: string): Promise<Lesson> {
  const response = await loadProtectedContent({ kind: "course", contentId: courseId, itemId: lessonId });
  const lesson = response.lessons?.find((item) => item.id === lessonId);
  if (!lesson?.body) throw new Error("The protected course response did not contain lesson text.");
  return lesson;
}
