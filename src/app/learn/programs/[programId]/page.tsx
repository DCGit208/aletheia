"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ListRow } from "@/components/content/list-row";
import { EmptyState } from "@/components/content/query-state";
import { Button, buttonVariants } from "@/components/ui/button";
import { holdsEntitlement } from "@/lib/access/entitlements";
import { currentUnitIndex, weekInYear } from "@/lib/learn/pacing";
import { getCourse, getProduct, getProgram, getSchool } from "@/lib/data/repository";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";

export default function ProgramPage() {
  const { programId } = useParams<{ programId: string }>();
  const { t } = useI18n();
  const { user } = useAuth();
  const { enrollInProgram, entitlements, programEnrollments } = useUserLibrary();
  const program = getProgram(programId);
  const school = program ? getSchool(program.schoolId) : null;
  if (!program || !school) return <EmptyState title="Program not found." />;

  const product = program.productId ? getProduct(program.productId) : null;
  const enrolment = programEnrollments.find((item) => item.programId === program.id);
  const schoolEnrolment = programEnrollments.find((item) => item.schoolId === school.id);
  const entitled =
    program.accessLevel !== "entitled" || holdsEntitlement(entitlements, "program", program.id);
  const currentIndex = enrolment ? currentUnitIndex(enrolment.startedAt, program.unitWeeks) : 0;
  const week = enrolment ? weekInYear(enrolment.startedAt, program.durationWeeks) : null;
  const price = product ? `$${(product.priceCents / 100).toFixed(0)}` : null;

  return (
    <article>
      <p className="text-[0.7rem] tracking-[0.2em] text-primary uppercase">{school.title}</p>
      <h1 className="mt-2 font-heading text-3xl tracking-wide">{program.title}</h1>
      <p className="mt-2 text-muted-foreground">{program.subtitle}</p>
      <p className="mt-4 leading-relaxed">{program.description}</p>
      <p className="mt-4 text-sm text-muted-foreground">
        {program.durationWeeks} weeks · {program.hoursPerWeek} hours each week · {school.courseIds.length}{" "}
        principles
        {price ? ` · ${price}` : null}
      </p>
      {week ? (
        <p className="mt-2 text-sm text-primary">
          Week {week} of {program.durationWeeks}. This season: {getCourse(school.courseIds[currentIndex])?.title}.
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {user && entitled && !schoolEnrolment ? (
          <Button onClick={() => enrollInProgram(program.id)}>{t("action.enrollProgram")}</Button>
        ) : null}
        {user && !entitled && product ? (
          <Link href={`/shop/${product.id}`} className={cn(buttonVariants())}>
            Enter {program.title} — {price}
          </Link>
        ) : null}
        {enrolment ? <p className="self-center text-sm text-muted-foreground">You are enrolled.</p> : null}
        {schoolEnrolment && !enrolment ? (
          <p className="self-center text-sm text-muted-foreground">
            You already walk this school in another program.
          </p>
        ) : null}
        {!user ? (
          <>
            <Link href="/sign-in" className={cn(buttonVariants())}>
              {t("nav.signIn")}
            </Link>
            {product ? (
              <Link href={`/shop/${product.id}`} className={buttonVariants({ variant: "outline" })}>
                {program.title} — {price}
              </Link>
            ) : null}
          </>
        ) : null}
        <Link href={`/learn/schools/${school.id}`} className={buttonVariants({ variant: "ghost" })}>
          {school.title}
        </Link>
      </div>

      <ol className="mt-10 overflow-hidden rounded-2xl bg-card">
        {school.courseIds.map((id, index) => {
          const course = getCourse(id);
          if (!course) return null;
          const weeks = program.unitWeeks[index] ?? 8;
          const current = Boolean(enrolment && index === currentIndex);
          return (
            <li key={id}>
              <ListRow
                href={`/learn/courses/${course.id}`}
                title={`${index + 1}. ${course.title}`}
                subtitle={`${weeks} weeks in this program`}
                meta={current ? "Now" : undefined}
              />
            </li>
          );
        })}
      </ol>
    </article>
  );
}
