"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { EmptyState } from "@/components/content/query-state";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCourse, getPath } from "@/lib/data/repository";

export default function PathPage() {
  const { pathId } = useParams<{ pathId: string }>();
  const path = getPath(pathId);
  if (!path) return <EmptyState title="Learning path not found." />;

  return (
    <article>
      <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">Learning path</p>
      <h1 className="mt-2 font-heading text-3xl tracking-wide">{path.title}</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">{path.description}</p>
      <ol className="mt-8 space-y-3">
        {path.courseIds.map((id, index) => {
          const course = getCourse(id);
          if (!course) return null;
          return (
            <li key={id}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    {index + 1}.{" "}
                    <Link href={`/learn/courses/${course.id}`} className="hover:underline">
                      {course.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{course.description}</CardContent>
              </Card>
            </li>
          );
        })}
      </ol>
    </article>
  );
}
