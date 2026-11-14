import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function RegionalSection() {
  return (
    <section aria-label="Regional Snack Collections" className="py-6 sm:py-10 bg-surface-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* SOUTH INDIAN CLASSICS CARD */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-brand-forest-dark/40 bg-brand-forest p-6 sm:p-8 lg:p-10 text-text-inverse shadow-card transition-all duration-300 hover:shadow-xl">
            {/* Background Decorative Gopuram Illustration */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-56 w-56 sm:h-64 sm:w-64 opacity-25 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-35">
              <Image
                src="/assets/illustrations/south-indian/illustration-gopuram.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>

            {/* Content Column */}
            <div className="relative z-10 max-w-sm space-y-2">
              <span className="inline-block rounded bg-brand-mustard/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-mustard">
                Tamil Nadu • Kerala • Karnataka
              </span>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-mustard drop-shadow-xs">
                South Indian Classics
              </h3>

              <p className="font-sans text-xs sm:text-sm text-surface-parchment/90 leading-relaxed pt-1">
                From Tamil Nadu, Kerala, Karnataka &amp; beyond. Kettle-fried in 100% pure cold-pressed coconut oil.
              </p>
            </div>

            {/* Button */}
            <div className="relative z-10 mt-8 pt-2">
              <Link
                href="/collections/south-indian"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-mustard px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-maroon-dark shadow-sm hover:bg-brand-mustard-light active:scale-95 transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard focus-visible:ring-offset-2"
              >
                <span>Explore South Indian</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* NORTH INDIAN FAVOURITES CARD */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-brand-maroon-dark/40 bg-brand-maroon p-6 sm:p-8 lg:p-10 text-text-inverse shadow-card transition-all duration-300 hover:shadow-xl">
            {/* Background Decorative Monument Illustration */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-56 w-56 sm:h-64 sm:w-64 opacity-25 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-35">
              <Image
                src="/assets/illustrations/north-indian/illustration-monument.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>

            {/* Content Column */}
            <div className="relative z-10 max-w-sm space-y-2">
              <span className="inline-block rounded bg-brand-mustard/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-mustard">
                Delhi • Punjab • Rajasthan • Gujarat
              </span>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-mustard drop-shadow-xs">
                North Indian Favourites
              </h3>

              <p className="font-sans text-xs sm:text-sm text-surface-parchment/90 leading-relaxed pt-1">
                Iconic snacks from Delhi, Punjab, Rajasthan &amp; more. Royal spiced sev, tangy bhujia, and rich mithai.
              </p>
            </div>

            {/* Button */}
            <div className="relative z-10 mt-8 pt-2">
              <Link
                href="/collections/north-indian"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-mustard px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-maroon-dark shadow-sm hover:bg-brand-mustard-light active:scale-95 transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard focus-visible:ring-offset-2"
              >
                <span>Explore North Indian</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
