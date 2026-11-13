import Image from "next/image";
import Link from "next/link";

export default function StorefrontHomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-2xl rounded-2xl border-2 border-surface-sand bg-surface-card p-8 shadow-retro sm:p-12">
        <div className="mb-6 flex justify-center">
          <Image
            src="/assets/brand/logos/brand-logo-primary.svg"
            alt="KRAK & CO."
            width={260}
            height={74}
            priority
          />
        </div>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-brand-maroon sm:text-4xl">
          Authentic Indian Snacks: South to North
        </h1>
        <p className="mt-3 text-base text-text-secondary sm:text-lg">
          Traditional recipes, premium ingredients, and irresistible crunch in every bite. Complete Next.js App Router routing architecture established.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link
            href="/shop"
            className="rounded-lg bg-brand-maroon px-4 py-2 text-xs font-semibold text-text-inverse hover:bg-brand-maroon-dark"
          >
            Shop All Catalog →
          </Link>
          <Link
            href="/collections/south-indian"
            className="rounded-lg bg-brand-forest px-4 py-2 text-xs font-semibold text-text-inverse hover:bg-brand-forest-dark"
          >
            South Indian Classics →
          </Link>
          <Link
            href="/collections/north-indian"
            className="rounded-lg bg-brand-vermilion px-4 py-2 text-xs font-semibold text-text-inverse hover:bg-brand-maroon-dark"
          >
            North Indian Favourites →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-lg border border-surface-sand bg-surface-canvas p-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
              App Router
            </span>
            <span className="mt-1 font-semibold text-brand-forest">Next.js 14</span>
          </div>
          <div className="rounded-lg border border-surface-sand bg-surface-canvas p-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
              Routing
            </span>
            <span className="mt-1 font-semibold text-brand-maroon">33 Routes</span>
          </div>
          <div className="rounded-lg border border-surface-sand bg-surface-canvas p-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
              Data Layer
            </span>
            <span className="mt-1 font-semibold text-brand-mustard-dark">Typed Services</span>
          </div>
          <div className="rounded-lg border border-surface-sand bg-surface-canvas p-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
              Architecture
            </span>
            <span className="mt-1 font-semibold text-text-primary">Phase 07 Active</span>
          </div>
        </div>
      </div>
    </main>
  );
}
