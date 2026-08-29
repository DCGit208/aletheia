import { topicParams } from "@/lib/data/static-params";

export function generateStaticParams() {
  return topicParams();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
