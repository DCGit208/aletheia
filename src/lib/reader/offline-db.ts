import { openDB } from "idb";
import type { Book, BookChapter, ReadingProgress } from "@/lib/data/types";

const DB_NAME = "aletheia-reader";
const VERSION = 1;

function db() {
  return openDB(DB_NAME, VERSION, {
    upgrade(database) {
      if (!database.objectStoreNames.contains("books")) database.createObjectStore("books", { keyPath: "id" });
      if (!database.objectStoreNames.contains("chapters")) database.createObjectStore("chapters", { keyPath: "id" });
      if (!database.objectStoreNames.contains("progress")) database.createObjectStore("progress");
    },
  });
}

export async function cacheBookForOffline(book: Book, chapters: BookChapter[]) {
  const database = await db();
  const tx = database.transaction(["books", "chapters"], "readwrite");
  await tx.objectStore("books").put(book);
  for (const chapter of chapters) {
    await tx.objectStore("chapters").put(chapter);
  }
  await tx.done;
}

export async function saveOfflineProgress(progress: ReadingProgress) {
  const database = await db();
  await database.put("progress", progress, `${progress.userId}:${progress.bookId}`);
}

export async function readOfflineProgress(userId: string, bookId: string) {
  const database = await db();
  return database.get("progress", `${userId}:${bookId}`);
}
