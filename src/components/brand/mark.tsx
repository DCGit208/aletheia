import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function BrandMark({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className="grid size-8 place-items-center rounded-sm border border-primary/30 bg-primary text-[0.95rem] font-heading font-medium tracking-[0.12em] text-primary-foreground"
      >
        Α
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-heading text-[1.05rem] font-medium tracking-[0.14em] text-foreground">
          {BRAND.platform}
        </span>
        {!compact ? (
          <span className="mt-1 text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
            {BRAND.positioning}
          </span>
        ) : null}
      </span>
    </span>
  );
}
