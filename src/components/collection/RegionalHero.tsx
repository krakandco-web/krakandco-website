import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ArrowDown, ArrowRight, Sparkles, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RegionalHeroProps {
  region: "south-indian" | "north-indian" | string;
  title: string;
  tagline: string;
  description: string;
  heroIllustrationUrl?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function RegionalHero({
  region,
  title,
  tagline,
  description,
  heroIllustrationUrl,
  breadcrumbs,
}: RegionalHeroProps) {
  const isSouth = region === "south-indian";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden text-text-inverse border-b",
        isSouth
          ? "bg-gradient-to-b from-[#14361E] via-[#1D4A2B] to-[#14361E] border-brand-forest-dark/40"
          : "bg-gradient-to-b from-[#6B1D2F] via-[#5A1624] to-[#4A101C] border-brand-maroon-dark/40"
      )}
    >
      {/* Background Radiance Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay"
        style={{
          backgroundImage: `url('/assets/illustrations/decorative/motif-sunburst-maroon.svg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:pb-16 lg:pb-20 space-y-6">
        {/* Breadcrumb Navigation */}
        <div className="opacity-90">
          <Breadcrumb items={breadcrumbs} className="text-surface-parchment" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          {/* Hero Copy Column (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-mustard/40 bg-brand-mustard/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-mustard backdrop-blur-xs">
              <MapPin className="h-3.5 w-3.5" />
              <span>{isSouth ? "Tamil Nadu • Kerala • Karnataka • Andhra" : "Delhi • Punjab • Rajasthan • Gujarat"}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-surface-cream leading-[1.08] drop-shadow-sm">
              {title}
            </h1>

            <p className="font-sans text-sm sm:text-base text-surface-parchment/95 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              {tagline}
            </p>

            <p className="font-sans text-xs sm:text-sm text-surface-parchment/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#regional-products"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-mustard px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-maroon-dark shadow-sm hover:bg-brand-mustard-light active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard"
              >
                <span>{isSouth ? "Explore South Indian Snacks" : "Explore North Indian Snacks"}</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-surface-cream/70 bg-black/15 px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-surface-cream hover:bg-white/10 hover:border-surface-cream active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface-cream"
              >
                <span>Shop All Snacks</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Regional Hero Visual Artwork Column (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 drop-shadow-2xl"
              style={{ position: "relative", width: "100%", maxWidth: "384px", height: "384px" }}
            >
              {heroIllustrationUrl ? (
                <Image
                  src={heroIllustrationUrl}
                  alt={title}
                  fill
                  priority
                  className="object-contain"
                />
              ) : (
                <Image
                  src={
                    isSouth
                      ? "/assets/illustrations/south-indian/illustration-gopuram.svg"
                      : "/assets/illustrations/north-indian/illustration-monument.svg"
                  }
                  alt={title}
                  fill
                  priority
                  className="object-contain"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

