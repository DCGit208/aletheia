import { communityParams } from "@/lib/data/static-params";

export function generateStaticParams() {
  return communityParams();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
