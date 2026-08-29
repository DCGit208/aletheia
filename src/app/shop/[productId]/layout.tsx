import { productParams } from "@/lib/data/static-params";

export function generateStaticParams() {
  return productParams();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
