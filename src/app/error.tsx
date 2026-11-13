"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console
    console.error("KRAK & CO. Application Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-md rounded-xl border border-surface-sand bg-surface-card p-8 shadow-md">
        <span className="text-4xl">⚠️</span>
        <h2 className="mt-4 font-display text-2xl font-bold text-brand-maroon">
          Something went crunchy!
        </h2>
        <p className="mt-2 text-sm text-text-secondary">
          We encountered an unexpected error while loading this page. Please try refreshing.
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-brand-maroon px-5 py-2.5 text-sm font-semibold text-text-inverse hover:bg-brand-maroon-dark focus:outline-none focus:ring-2 focus:ring-brand-maroon focus:ring-offset-2"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
