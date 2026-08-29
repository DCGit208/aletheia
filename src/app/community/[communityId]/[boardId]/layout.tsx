import { boardParams } from "@/lib/data/static-params";

export function generateStaticParams() {
  return boardParams();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
