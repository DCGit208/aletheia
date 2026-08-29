import { programParams } from "@/lib/data/static-params";

export function generateStaticParams() {
  return programParams();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
