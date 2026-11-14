"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CategoryHeroProps {
  title: string;
  badge?: string;
  tagline: string;
  description: string;
  bannerImageUrl: string;
  themeColor: "maroon" | "forest" | "mustard" | "sand";
  breadcrumbs: { label: string; href?: string }[];
}

export function CategoryHero({
  title,
  badge = "AUTHENTIC RECIPES",
  tagline,
  description,
  bannerImageUrl,
  themeColor,
  breadcrumbs,
}: CategoryHeroProps) {
  // Theme gradients & accent styles
  const themeStyles = {
    forest: {
      bg: "bg-gradient-to-b from-[#14361E] via-[#1D4A2B] to-[#14361E]",
      border: "border-brand-forest-dark/40",
      badgeText: "text-brand-mustard",
      badgeBorder: "border-brand-mustard/40 bg-brand-mustard/15",
      btnBg: "bg-brand-mustard text-brand-maroon-dark hover:bg-brand-mustard-light",
    },
    maroon: {
      bg: "bg-gradient-to-b from-[#6B1D2F] via-[#5A1624] to-[#4A101C]",
      border: "border-brand-maroon-dark/40",
      badgeText: "text-brand-mustard",
      badgeBorder: "border-brand-mustard/40 bg-brand-mustard/15",
      btnBg: "bg-brand-mustard text-brand-maroon-dark hover:bg-brand-mustard-light",
    },
    mustard: {
      bg: "bg-gradient-to-b from-[#7A1C1C] via-[#651717] to-[#4C0E0E]",
      border: "border-brand-mustard/30",
      badgeText: "text-brand-mustard",
      badgeBorder: "border-brand-mustard/40 bg-brand-mustard/15",
      btnBg: "bg-brand-mustard text-brand-maroon-dark hover:bg-brand-mustard-light",
    },
    sand: {
      bg: "bg-gradient-to-b from-[#5A1624] via-[#4A101C] to-[#360B14]",
      border: "border-surface-sand/30",
      badgeText: "text-brand-mustard",
      badgeBorder: "border-brand-mustard/40 bg-brand-mustard/15",
      btnBg: "bg-brand-mustard text-brand-maroon-dark hover:bg-brand-mustard-light",
    },
  }[themeColor];

  return (
    <section
      aria-label={`${title} Introduction`}
      className={cn("relative w-full overflow-hidden text-text-inverse border-b", themeStyles.bg, themeStyles.border)}
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-10 sm:pb-12 lg:pb-14 space-y-4">
        {/* Breadcrumb Navigation */}
        <div className="opacity-90">
          <Breadcrumb items={breadcrumbs} className="text-surface-parchment" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-1">
          {/* Left / Center Copy */}
          <div className="lg:col-span-8 space-y-3.5 text-center lg:text-left">
            <div
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur-xs",
                themeStyles.badgeBorder,
                themeStyles.badgeText
              )}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>{badge}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-surface-cream leading-[1.1] drop-shadow-sm">
              {title}
            </h1>

            <p className="font-sans text-sm sm:text-base text-surface-parchment/95 font-semibold leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {tagline}
            </p>

            <p className="font-sans text-xs sm:text-sm text-surface-parchment/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#category-products"
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2",
                  themeStyles.btnBg
                )}
              >
                <span>Browse Products</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-xl border border-surface-cream/60 bg-black/15 px-4.5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-surface-cream hover:bg-white/10 hover:border-surface-cream active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface-cream"
              >
                <span>Shop All Snacks</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Visual Artwork (Compact, appetizing category illustration) */}
          <div className="lg:col-span-4 flex justify-center">
            <div
              className="relative h-44 w-44 sm:h-52 sm:w-52 lg:h-64 lg:w-64 drop-shadow-2xl"
              style={{ position: "relative", width: "100%", maxWidth: "256px", height: "256px" }}
            >
              <Image
                src={bannerImageUrl}
                alt={`${title} artwork`}
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
