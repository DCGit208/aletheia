import { pathParams } from "@/lib/data/static-params";

export function generateStaticParams() {
  return pathParams();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
