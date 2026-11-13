import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-2xl rounded-2xl border-2 border-surface-sand bg-surface-card p-8 shadow-retro sm:p-12">
        {/* Brand Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/assets/brand/logos/brand-logo-primary.svg"
            alt="KRAK & CO."
            width={260}
            height={74}
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-brand-maroon sm:text-4xl">
          Frontend Environment Ready
        </h1>

        {/* Subhead */}
        <p className="mt-3 text-base text-text-secondary sm:text-lg">
          Authentic Indian Snacks: South to North. Next.js App Router, TypeScript, and Tailwind CSS design tokens successfully initialized.
        </p>

        {/* Status Indicators */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-lg border border-surface-sand bg-surface-canvas p-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
              Framework
            </span>
            <span className="mt-1 font-semibold text-text-primary">Next.js 14</span>
          </div>
          <div className="rounded-lg border border-surface-sand bg-surface-canvas p-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
              TypeScript
            </span>
            <span className="mt-1 font-semibold text-brand-forest">Strict Mode</span>
          </div>
          <div className="rounded-lg border border-surface-sand bg-surface-canvas p-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
              Styling
            </span>
            <span className="mt-1 font-semibold text-brand-maroon">Tailwind CSS</span>
          </div>
          <div className="rounded-lg border border-surface-sand bg-surface-canvas p-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
              Design Tokens
            </span>
            <span className="mt-1 font-semibold text-brand-mustard-dark">Phase 04 Active</span>
          </div>
        </div>

        {/* Technical Readiness Note */}
        <div className="mt-8 rounded-lg bg-surface-parchment p-4 text-left text-xs text-text-secondary">
          <p className="font-semibold text-text-primary">Phase 06 Verification Notice:</p>
          <p className="mt-1">
            Build tools, compiler configurations, accessibility baselines, and design token mappings are verified and operating without errors. Ready for Phase 07 UI component scaffolding.
          </p>
        </div>
      </div>
    </main>
  );
}
