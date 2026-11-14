import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";

export function BrandStorySection() {
  return (
    <section aria-labelledby="story-heading" className="py-12 sm:py-16 bg-surface-canvas">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 rounded-3xl border-2 border-surface-sand bg-surface-card p-6 sm:p-10 shadow-card">
          {/* Left Column: Retro Illustration */}
          <div className="relative h-56 w-56 sm:h-64 sm:w-64 shrink-0 rounded-2xl bg-surface-parchment/60 p-4 border border-surface-sand/80 overflow-hidden flex items-center justify-center">
            <Image
              src="/assets/illustrations/hero/retro-woman-snacking.svg"
              alt="KRAK & CO. Heritage Snacking"
              fill
              className="object-contain p-2"
            />
          </div>

          {/* Right Column: Story Copy */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-maroon">
              <Heart className="h-3.5 w-3.5 fill-brand-terracotta text-brand-terracotta" />
              <span>About KRAK &amp; CO.</span>
            </div>

            <h2
              id="story-heading"
              className="font-display text-2xl sm:text-3xl font-extrabold text-brand-maroon leading-tight"
            >
              A Snack Brand That Brings India Together.
            </h2>

            <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
              From the crispy flavours of the South to the beloved snacks of the North, KRAK &amp; CO. celebrates India’s rich snacking culture with authentic recipes, quality cold-pressed oils, and a whole lot of crunch.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-maroon px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-text-inverse hover:bg-brand-maroon-dark transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon focus-visible:ring-offset-2"
              >
                <span>Our Story</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
