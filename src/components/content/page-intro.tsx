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
    <header className="mb-8 max-w-2xl">
      {kicker ? (
        <p className="mb-2 text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">{kicker}</p>
      ) : null}
      <h1 className="font-heading text-3xl tracking-wide md:text-4xl">{title}</h1>
      {lead ? <p className="mt-3 text-base leading-relaxed text-muted-foreground">{lead}</p> : null}
    </header>
  );
}
