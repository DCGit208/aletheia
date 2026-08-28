import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function BrandMark({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className="grid size-8 place-items-center rounded-full border border-primary/40 bg-primary/10 text-[0.95rem] font-heading tracking-[0.08em] text-primary"
      >
        Α
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-heading text-[1.05rem] tracking-[0.18em] text-foreground">
          {BRAND.platform}
        </span>
        {compact ? null : (
          <span className="mt-1 text-[0.58rem] tracking-[0.22em] text-muted-foreground uppercase">
            {BRAND.positioning}
          </span>
        )}
      </span>
    </span>
  );
}
