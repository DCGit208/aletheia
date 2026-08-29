import { bookParams } from "@/lib/data/static-params";

export function generateStaticParams() {
  return bookParams();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
