import { journalParams } from "@/lib/data/static-params";

export function generateStaticParams() {
  return journalParams();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
