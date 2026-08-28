import Link from "next/link";

export function SectionHeader({
  kicker,
  title,
  href,
  actionLabel,
}: {
  kicker?: string;
  title: string;
  href?: string;
  actionLabel?: string;
}) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div>
        {kicker ? (
          <p className="mb-1 text-[0.62rem] tracking-[0.22em] text-primary uppercase">{kicker}</p>
        ) : null}
        <h2 className="font-heading text-[1.35rem] leading-none">{title}</h2>
      </div>
      {href ? (
        <Link href={href} className="text-xs tracking-wide text-muted-foreground uppercase">
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
