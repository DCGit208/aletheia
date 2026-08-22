"use client";

import { useParams } from "next/navigation";
import { BookDetail } from "@/components/books/book-detail";
import { EmptyState } from "@/components/content/query-state";
import { getBook } from "@/lib/data/repository";

export default function LearnBookPage() {
  const { bookId } = useParams<{ bookId: string }>();
  const book = getBook(bookId);
  if (!book) return <EmptyState title="Book not found." />;
  return <BookDetail book={book} context="learn" />;
}
