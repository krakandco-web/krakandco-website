import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Leaf, Heart, ShieldCheck, ArrowRight, Award } from "lucide-react";
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <Breadcrumb items={[{ label: "About Us" }]} />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-mustard/40 bg-brand-mustard/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-maroon-dark">
            <Sparkles className="h-3.5 w-3.5 text-brand-mustard-dark" />
            <span>Our Roots & Philosophy</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-primary leading-tight">
            A SNACK BRAND THAT BRINGS INDIA TOGETHER
          </h1>

          <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            From the coconut-oil-kissed banana chips of Kerala to the feisty spiced bhujia of Rajasthan, KRAK & CO. is a tribute to the authentic textures and timeless recipes of Indian snacking.
          </p>
        </div>

        {/* Narrative Split 1: The Zero Palm Oil Promise */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-surface-sand bg-surface-card p-6 sm:p-12 shadow-xs">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-forest flex items-center gap-1.5">
              <Leaf className="h-4 w-4" />
              <span>Our Non-Negotiable Standard</span>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-text-primary">
              100% Zero Palm Oil. Always.
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
              Most mass-manufactured snacks on grocery shelves use cheap, highly refined palm oil that compromises flavour and mouthfeel. At KRAK & CO., we strictly kettle-fry in <strong>100% Pure Cold-Pressed Coconut Oil</strong>, <strong>Wood-Pressed Groundnut Oil</strong>, or <strong>A2 Desi Cow Ghee</strong>.
            </p>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
              You taste the pure, fragrant crunch of raw Nendran bananas, fresh curry leaves, and roasted urad dal — clean, light, and without any oily heaviness.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative h-56 w-56 sm:h-72 sm:w-72 drop-shadow-xl">
              <Image
                src="/assets/illustrations/hero/hero-snack-platter.svg"
                alt="Golden snack platter"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Values Strip (4 pillars) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-surface-sand bg-surface-card p-6 space-y-3 shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-forest/10 text-brand-forest">
              <Leaf className="h-5 w-5" />
            </div>
            <h3 className="font-sans text-sm font-bold text-text-primary">Zero Palm Oil</h3>
            <p className="text-xs text-text-muted leading-relaxed font-normal">
              Cooked solely in heritage cold-pressed oils and pure desi cow ghee.
            </p>
          </div>

          <div className="rounded-2xl border border-surface-sand bg-surface-card p-6 space-y-3 shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-maroon/10 text-brand-maroon">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-sans text-sm font-bold text-text-primary">Stone-Ground Spices</h3>
            <p className="text-xs text-text-muted leading-relaxed font-normal">
              Guntur chillies, yellow mustard, and asafoetida hand-pounded for depth.
            </p>
          </div>

          <div className="rounded-2xl border border-surface-sand bg-surface-card p-6 space-y-3 shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-mustard/20 text-brand-mustard-dark">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="font-sans text-sm font-bold text-text-primary">Artisanal Small Batches</h3>
            <p className="text-xs text-text-muted leading-relaxed font-normal">
              Crafted with traditional brass achu extruders in dedicated craft batches.
            </p>
          </div>

          <div className="rounded-2xl border border-surface-sand bg-surface-card p-6 space-y-3 shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-maroon/10 text-brand-maroon">
              <Heart className="h-5 w-5" />
            </div>
            <h3 className="font-sans text-sm font-bold text-text-primary">100% Vegetarian</h3>
            <p className="text-xs text-text-muted leading-relaxed font-normal">
              Pure rock salt, whole natural ingredients, zero artificial colours or MSG.
            </p>
          </div>
        </div>

        {/* Narrative Split 2: South to North Heritage */}
        <div className="rounded-3xl border border-surface-sand bg-surface-card p-6 sm:p-12 space-y-6 text-center max-w-4xl mx-auto shadow-xs">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-maroon">
            ✦ Unity in Crunch ✦
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-text-primary">
            Connecting Regional Traditions
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            Whether you crave the nostalgic aroma of hot filter coffee paired with crispy tapioca chips in Chennai, or an evening adrak chai with feisty Bikaneri bhujia in Jaipur — KRAK & CO. delivers authentic regional nostalgia to your doorstep across India.
          </p>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-maroon px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-text-inverse shadow-sm hover:bg-brand-maroon-dark transition-all"
            >
              <span>Explore The Snack Map</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
