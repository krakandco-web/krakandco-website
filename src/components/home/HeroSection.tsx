import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section
      aria-label="Hero Promotion"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#6B1D2F] via-[#5A1624] to-[#4A101C] text-text-inverse"
    >
      {/* Background Radiance & Sunburst Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url('/assets/illustrations/decorative/motif-sunburst-maroon.svg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Decorative Gold Stars */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <Sparkles className="absolute left-[10%] top-[15%] h-5 w-5 text-brand-mustard opacity-40 animate-pulse" />
        <Sparkles className="absolute right-[12%] top-[20%] h-6 w-6 text-brand-mustard opacity-50 animate-pulse" />
        <Sparkles className="absolute left-[25%] bottom-[20%] h-4 w-4 text-brand-mustard opacity-30" />
        <Sparkles className="absolute right-[22%] bottom-[25%] h-5 w-5 text-brand-mustard opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">
          {/* LEFT: Retro Indian Snacking Woman Illustration (Desktop: 3 cols, Mobile: centered small) */}
          <div className="order-2 lg:order-1 lg:col-span-3 flex justify-center">
            <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-96 lg:w-96 drop-shadow-2xl">
              <Image
                src="/assets/illustrations/hero/retro-woman-snacking.svg"
                alt="Vintage Indian Pop Art Woman Enjoying Authentic Snacks"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* CENTER: Hero Copy, Display Typography & Call-To-Actions (Desktop: 6 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-mustard/40 bg-brand-mustard/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-mustard shadow-xs backdrop-blur-xs">
              <span>✦</span>
              <span>Authentic Recipes • Zero Palm Oil</span>
              <span>✦</span>
            </div>

            <h1 className="font-display text-3xl font-extrabold uppercase tracking-tight text-surface-cream sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.08] drop-shadow-sm">
              AUTHENTIC
              <br />
              <span className="text-brand-mustard">INDIAN SNACKS</span>
              <br />
              SOUTH TO NORTH
            </h1>

            <p className="mx-auto max-w-lg font-sans text-sm sm:text-base font-normal text-surface-parchment/90 leading-relaxed">
              Traditional recipes, premium ingredients, and irresistible crunch in every single bite.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-mustard px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-brand-maroon-dark shadow-md hover:bg-brand-mustard-light hover:shadow-lg active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard focus-visible:ring-offset-2 focus-visible:ring-offset-[#5A1624]"
              >
                <span>Shop Now</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>

              <Link
                href="/collections/south-indian"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-surface-cream/80 bg-black/10 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-surface-cream hover:bg-white/10 hover:border-surface-cream active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface-cream focus-visible:ring-offset-2 focus-visible:ring-offset-[#5A1624]"
              >
                <span>Explore Collections</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: Golden Brass Urli & Snacks Platter (Desktop: 3 cols) */}
          <div className="order-3 lg:col-span-3 flex justify-center">
            <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-96 lg:w-96 drop-shadow-2xl">
              <Image
                src="/assets/illustrations/hero/hero-snack-platter.svg"
                alt="Golden Platter of Fresh Banana Chips, Murukku, and Regional Savouries"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Serrated Matchbox-Style Bottom Border Divider */}
      <div
        className="h-2 w-full bg-repeat-x opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, #E6AC2A 2px, transparent 2px)`,
          backgroundSize: "12px 8px",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
