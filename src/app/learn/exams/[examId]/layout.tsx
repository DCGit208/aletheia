import { examParams } from "@/lib/data/static-params";

export function generateStaticParams() {
  return examParams();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
