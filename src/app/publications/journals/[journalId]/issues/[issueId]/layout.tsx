import { issueParams } from "@/lib/data/static-params";

export function generateStaticParams() {
  return issueParams();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
