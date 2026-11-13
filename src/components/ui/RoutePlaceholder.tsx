import Link from "next/link";

interface RoutePlaceholderProps {
  title: string;
  route: string;
  category: "Storefront" | "Account" | "Content" | "Commerce";
  description: string;
}

export function RoutePlaceholder({
  title,
  route,
  category,
  description,
}: RoutePlaceholderProps) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-lg rounded-2xl border-2 border-surface-sand bg-surface-card p-8 shadow-sm">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-surface-parchment px-3 py-1 text-xs font-semibold text-brand-maroon">
          <span>{category} Route</span>
          <span>•</span>
          <code className="text-text-primary">{route}</code>
        </div>
        <h1 className="font-display text-2xl font-bold text-brand-maroon sm:text-3xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-text-secondary">{description}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-lg bg-brand-maroon px-4 py-2 text-xs font-semibold text-text-inverse hover:bg-brand-maroon-dark"
          >
            ← Return to Home
          </Link>
          <Link
            href="/shop"
            className="rounded-lg border border-brand-maroon px-4 py-2 text-xs font-semibold text-brand-maroon hover:bg-surface-canvas"
          >
            Browse Shop All →
          </Link>
        </div>
      </div>
    </div>
  );
}
