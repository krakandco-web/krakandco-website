import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Leaf, Heart, ShieldCheck, ArrowRight, Award, Flame, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Story & Craft — KRAK & CO.",
  description:
    "Discover the story of KRAK & CO. Celebrating India's snacking traditions from Wayanad to Old Delhi. 100% Zero Palm Oil, pure cold-pressed oils, and traditional recipes.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-surface-canvas min-h-screen py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: "About Us" }]} />

        {/* 1. Branded Hero Banner matching Storefront Aesthetics */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#6B1D2F] via-[#5A1624] to-[#4A101C] text-text-inverse p-8 sm:p-14 lg:p-16 border border-brand-maroon-dark shadow-xl text-center">
          {/* Subtle Sunburst Radiance */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('/assets/illustrations/decorative/motif-sunburst-maroon.svg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-mustard/40 bg-brand-mustard/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-mustard backdrop-blur-xs">
              <span>✦</span>
              <span>Our Roots &amp; Philosophy</span>
              <span>✦</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-surface-cream leading-[1.1] drop-shadow-sm">
              A SNACK BRAND THAT
              <br />
              <span className="text-brand-mustard">BRINGS INDIA TOGETHER</span>
            </h1>

            <p className="font-sans text-sm sm:text-base text-surface-parchment/90 leading-relaxed font-normal max-w-2xl mx-auto">
              From the coconut-oil-kissed banana chips of Kerala to the feisty spiced bhujia of Rajasthan, KRAK &amp; CO. is an unapologetic tribute to the timeless crunch, deep aromas, and authentic regional recipes of Indian homes.
            </p>
          </div>
        </div>

        {/* 2. Narrative Pillar 1: The Zero Palm Oil Promise */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-surface-sand bg-[#FFFDF8] p-6 sm:p-12 shadow-xs">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-forest/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-forest">
              <Leaf className="h-3.5 w-3.5" />
              <span>Our Non-Negotiable Standard</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-maroon">
              100% Zero Palm Oil. Always.
            </h2>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
              Most mass-manufactured snacks on grocery shelves use cheap, highly refined palm oil that leaves a waxy coating on the palate and masks true flavour. At KRAK &amp; CO., palm oil is strictly barred from our kitchens.
            </p>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
              We exclusively kettle-fry in <strong>100% Pure Cold-Pressed Coconut Oil</strong> from Kerala, <strong>Wood-Pressed Groundnut Oil</strong> from Gujarat, and <strong>Pure A2 Desi Cow Ghee</strong> from Punjab. You taste only the pure, fragrant sweetness of ripe Nendran bananas, fresh garden curry leaves, and stone-ground gram flour — light, crisp, and clean.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                <CheckCircle2 className="h-4 w-4 text-brand-forest shrink-0" />
                <span>Cold-Pressed Oils</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                <CheckCircle2 className="h-4 w-4 text-brand-forest shrink-0" />
                <span>Pure Desi Ghee</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                <CheckCircle2 className="h-4 w-4 text-brand-forest shrink-0" />
                <span>Zero Waxy Aftertaste</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 drop-shadow-2xl">
              <Image
                src="/assets/products/kerala-banana-chips.svg"
                alt="Golden Kerala Banana Chips in Brass Urli"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* 3. Narrative Pillar 2: Brass Kadai Artisanal Cooking */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-surface-sand bg-[#FFFDF8] p-6 sm:p-12 shadow-xs">
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 drop-shadow-2xl">
              <Image
                src="/assets/products/madurai-mixture.svg"
                alt="Spicy Madurai Mixture in Brass Bowl"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-mustard/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-maroon-dark">
              <Flame className="h-3.5 w-3.5 text-brand-mustard-dark" />
              <span>Small-Batch Artisanal Mastery</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-maroon">
              Brass Kadai Cooking &amp; Stone-Ground Spices
            </h2>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
              Industrial snacking relies on continuous automated conveyer fryers that scorch oil and sacrifice crunch. We honour the traditional <em>halwai</em> and <em>savouries master</em> technique: continuous stirring in heavy brass urulis and kadais that retain steady, even heat.
            </p>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
              Our spice blends aren&apos;t synthetic chemical flavourings. They are roasted whole cumin, sun-dried Guntur chillies, organic yellow mustard, Tellicherry black pepper, and fragrant asafoetida (hing) hand-pounded for layered aromatic depth.
            </p>
          </div>
        </div>

        {/* 4. Values Strip (4 pillars) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-3xl border border-surface-sand bg-[#FFFDF8] p-6 space-y-3 shadow-xs hover:-translate-y-1 transition-transform">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-forest/10 text-brand-forest">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="font-sans text-base font-bold text-text-primary">Zero Palm Oil</h3>
            <p className="text-xs text-text-secondary leading-relaxed font-normal">
              Cooked solely in heritage cold-pressed oils and pure desi cow ghee. No shortcuts, ever.
            </p>
          </div>

          <div className="rounded-3xl border border-surface-sand bg-[#FFFDF8] p-6 space-y-3 shadow-xs hover:-translate-y-1 transition-transform">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-maroon/10 text-brand-maroon">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-sans text-base font-bold text-text-primary">Whole Spices</h3>
            <p className="text-xs text-text-secondary leading-relaxed font-normal">
              Guntur chillies, yellow mustard, and asafoetida stone-ground for rich, authentic flavour.
            </p>
          </div>

          <div className="rounded-3xl border border-surface-sand bg-[#FFFDF8] p-6 space-y-3 shadow-xs hover:-translate-y-1 transition-transform">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mustard/20 text-brand-mustard-dark">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="font-sans text-base font-bold text-text-primary">Artisanal Batches</h3>
            <p className="text-xs text-text-secondary leading-relaxed font-normal">
              Extruded through traditional brass achu molds and fried in small, carefully monitored batches.
            </p>
          </div>

          <div className="rounded-3xl border border-surface-sand bg-[#FFFDF8] p-6 space-y-3 shadow-xs hover:-translate-y-1 transition-transform">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-vermilion/10 text-brand-vermilion">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-sans text-base font-bold text-text-primary">100% Vegetarian</h3>
            <p className="text-xs text-text-secondary leading-relaxed font-normal">
              Pure rock salt, whole natural ingredients, and airtight nitro-flushed packing for lasting crunch.
            </p>
          </div>
        </div>

        {/* 5. Founders Note / Brand Promise */}
        <div className="rounded-3xl border border-surface-sand bg-[#FFFDF8] p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xs">
          <div className="inline-flex items-center gap-2">
            <span className="text-brand-mustard text-xs">✦</span>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-maroon">
              OUR PROMISE TO YOU
            </span>
            <span className="text-brand-mustard text-xs">✦</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-text-primary">
            Nostalgia You Can Taste in Every Crunch
          </h2>

          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            Whether you crave the nostalgic aroma of hot filter coffee paired with crispy tapioca chips in Coimbatore, or an evening adrak chai with feisty Bikaneri bhujia in Jaipur — KRAK &amp; CO. delivers authentic regional pride straight to your home across India.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-maroon px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-text-inverse shadow-md hover:bg-brand-maroon-dark active:scale-95 transition-all"
            >
              <span>Explore All Snacks</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/gift-boxes"
              className="inline-flex items-center gap-2 rounded-xl border border-brand-maroon bg-white px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-maroon hover:bg-brand-maroon/5 active:scale-95 transition-all"
            >
              <span>Explore Festive Gift Hampers</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
