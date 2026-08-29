import { lessonParams } from "@/lib/data/static-params";

export function generateStaticParams() {
  return lessonParams();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
