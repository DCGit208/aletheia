import { articleParams } from "@/lib/data/static-params";

export function generateStaticParams() {
  return articleParams();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
