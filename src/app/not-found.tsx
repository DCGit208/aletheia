import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg py-10">
      <h1 className="font-heading text-3xl tracking-wide">This page is not in Aletheia.</h1>
      <p className="mt-3 text-muted-foreground">Return to Home, or search the catalog.</p>
      <p className="mt-6">
        <Link href="/" className="underline">
          Home
        </Link>
      </p>
    </div>
  );
}
