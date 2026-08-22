import Link from "next/link";
import { Cover } from "@/components/content/cover";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function ContentCard({
  href,
  title,
  subtitle,
  meta,
  tone,
  badge,
}: {
  href: string;
  title: string;
  subtitle?: string;
  meta?: string;
  tone?: string;
  badge?: string;
}) {
  return (
    <Link href={href} className="group block focus-visible:outline-none">
      <Card className="overflow-hidden py-0 transition-colors group-hover:bg-card/80 group-focus-visible:ring-3 group-focus-visible:ring-ring/50">
        <Cover title={title} subtitle={subtitle} tone={tone} className="rounded-none" />
        <CardContent className="space-y-2 px-4 py-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading text-base leading-snug tracking-wide">{title}</h3>
            {badge ? <Badge variant="secondary">{badge}</Badge> : null}
          </div>
          {subtitle ? <p className="text-sm text-muted-foreground">{subtitle}</p> : null}
          {meta ? <p className="text-xs tracking-wide text-muted-foreground uppercase">{meta}</p> : null}
        </CardContent>
      </Card>
    </Link>
  );
}
