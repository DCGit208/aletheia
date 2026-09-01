"use client";

import { useParams } from "next/navigation";
import { MakerBiblePage } from "@/components/maker-bible/maker-bible-page";
import { MAKER_BIBLE_ID } from "@/lib/content/maker-bible";
import { BookDetail } from "@/components/books/book-detail";
import { EmptyState } from "@/components/content/query-state";
import { getBook } from "@/lib/data/repository";

export default function LearnBookPage() {
  const { bookId } = useParams<{ bookId: string }>();
  const book = getBook(bookId);
  if (!book) return <EmptyState title="Book not found." />;
  if (book.id === MAKER_BIBLE_ID) return <MakerBiblePage />;
  return <BookDetail book={book} context="learn" />;
}
