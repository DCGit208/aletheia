import { cn } from "@/lib/utils";

const tones: Record<string, string> = {
  ink: "from-[#1c1914] via-[#2a241c] to-[#3d3426]",
  gold: "from-[#5c4a24] via-[#8a6d32] to-[#c4a35a]",
  earth: "from-[#2c2118] via-[#4a3728] to-[#7a5a3a]",
};

export function Cover({
  title,
  subtitle,
  tone = "ink",
  className,
}: {
  title: string;
  subtitle?: string;
  tone?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-md bg-linear-to-br p-4 text-white shadow-sm",
        tones[tone] ?? tones.ink,
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-0 opacity-30 [background:repeating-linear-gradient(135deg,transparent_0_12px,rgba(255,255,255,0.05)_12px_13px)]" />
      <p className="relative font-heading text-lg leading-tight tracking-wide">{title}</p>
      {subtitle ? <p className="relative mt-2 text-[0.7rem] tracking-[0.16em] text-white/70 uppercase">{subtitle}</p> : null}
    </div>
  );
}
