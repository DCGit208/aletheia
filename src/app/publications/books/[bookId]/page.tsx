"use client";

import { useParams } from "next/navigation";
import { BookDetail } from "@/components/books/book-detail";
import { EmptyState } from "@/components/content/query-state";
import { getBook } from "@/lib/data/repository";
import { track } from "@/lib/analytics/events";
import { useEffect } from "react";

export default function PublicationBookPage() {
  const { bookId } = useParams<{ bookId: string }>();
  const book = getBook(bookId);
  useEffect(() => {
    if (book) track({ name: "publication_view", publicationId: book.id, kind: "book" });
  }, [book]);
  if (!book) return <EmptyState title="Book not found." />;
  return <BookDetail book={book} context="publications" />;
}
