import { courseParams } from "@/lib/data/static-params";

export function generateStaticParams() {
  return courseParams();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
