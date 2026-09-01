"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { DeniedState, EmptyState } from "@/components/content/query-state";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { canAccessContent, holdsEntitlement } from "@/lib/access/entitlements";
import { getExam } from "@/lib/content/exams";
import { getCourse } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { loadExamAnswers, saveExamAnswers } from "@/lib/storage/local-state";
import { useUserLibrary } from "@/lib/state/user-library";

export default function ExamPage() {
  const { examId } = useParams<{ examId: string }>();
  const { user } = useAuth();
  const { entitlements } = useUserLibrary();
  const exam = getExam(examId);
  const userId = user?.uid ?? "guest";

  const initial = useMemo(() => (exam ? loadExamAnswers(userId, exam.id) : {}), [exam, userId]);
  const [answers, setAnswers] = useState<Record<string, string>>(initial);
  const [saved, setSaved] = useState(false);

  if (!exam) return <EmptyState title="Examination not found." />;

  const course = exam.courseId ? getCourse(exam.courseId) : null;
  const allowed = exam.courseId
    ? canAccessContent({
        accessLevel: course?.accessLevel ?? "entitled",
        preview: false,
        entitlements,
        contentKind: "course",
        contentId: exam.courseId,
      })
    : holdsEntitlement(entitlements, "program", "program-foundation-year") ||
      holdsEntitlement(entitlements, "program", "program-foundation-intensive");

  if (!allowed) return <DeniedState />;

  return (
    <article className="mx-auto max-w-2xl">
      <p className="text-sm text-muted-foreground">
        <Link href="/learn/schools/school-foundation" className="hover:underline">
          Foundation School
        </Link>
        {exam.courseId ? (
          <>
            {" · "}
            <Link href={`/learn/courses/${exam.courseId}`} className="hover:underline">
              {exam.subtitle}
            </Link>
          </>
        ) : null}
      </p>
      <h1 className="mt-3 font-heading text-3xl tracking-wide">{exam.title}</h1>
      <p className="mt-2 text-muted-foreground">{exam.subtitle}</p>
      <p className="reader-prose mt-6 whitespace-pre-line">{exam.instructions}</p>

      <form
        className="mt-10 space-y-10"
        onSubmit={(event) => {
          event.preventDefault();
          saveExamAnswers(userId, exam.id, answers);
          setSaved(true);
        }}
      >
        {exam.questions.map((question, index) => (
          <fieldset key={question.id} className="space-y-3">
            <legend className="font-heading text-lg">
              {index + 1}. {question.prompt}
            </legend>
            <Textarea
              required
              rows={8}
              value={answers[question.id] ?? ""}
              onChange={(event) => {
                setSaved(false);
                setAnswers((current) => ({ ...current, [question.id]: event.target.value }));
              }}
              placeholder="Write from the cluster."
            />
          </fieldset>
        ))}
        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit">Save written answers</Button>
          {saved ? <p className="text-sm text-primary">Saved on this device.</p> : null}
        </div>
      </form>
    </article>
  );
}
