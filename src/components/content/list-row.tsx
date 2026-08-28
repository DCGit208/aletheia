import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ListRow({
  href,
  title,
  subtitle,
  meta,
}: {
  href: string;
  title: string;
  subtitle?: string;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 border-b border-white/6 px-1 py-3.5 last:border-b-0 active:bg-white/4"
    >
      <span className="min-w-0 flex-1">
        <span className="block font-medium leading-snug">{title}</span>
        {subtitle ? <span className="mt-0.5 block text-sm text-muted-foreground">{subtitle}</span> : null}
      </span>
      {meta ? <span className="text-[0.7rem] tracking-wide text-muted-foreground uppercase">{meta}</span> : null}
      <ChevronRight className="size-4 shrink-0 text-muted-foreground" aria-hidden />
    </Link>
  );
}
