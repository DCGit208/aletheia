export function PageIntro({
  kicker,
  title,
  lead,
}: {
  kicker?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="mb-6">
      {kicker ? (
        <p className="mb-2 text-[0.62rem] tracking-[0.24em] text-primary uppercase">{kicker}</p>
      ) : null}
      <h1 className="font-heading text-[1.85rem] leading-[1.05]">{title}</h1>
      {lead ? <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lead}</p> : null}
    </header>
  );
}
