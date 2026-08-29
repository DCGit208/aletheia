import { schoolParams } from "@/lib/data/static-params";

export function generateStaticParams() {
  return schoolParams();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
