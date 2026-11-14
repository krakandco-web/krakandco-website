"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/feedback/Toast";
import { ArrowRight, Sparkles, Gift } from "lucide-react";

interface ComboItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice: number;
  tag: string;
  imageUrl: string;
}

const COMBOS: ComboItem[] = [
  {
    id: "combo-1",
    name: "Classic South Combo",
    slug: "gift-boxes",
    price: 699,
    compareAtPrice: 799,
    tag: "Bestseller",
    imageUrl: "/assets/placeholders/placeholder-gift-hamper.svg",
  },
  {
    id: "combo-2",
    name: "North Indian Treat Box",
    slug: "gift-boxes",
    price: 749,
    compareAtPrice: 849,
    tag: "Festive Pick",
    imageUrl: "/assets/placeholders/placeholder-gift-hamper.svg",
  },
  {
    id: "combo-3",
    name: "Festive Gift Hamper",
    slug: "festive-gift-hamper",
    price: 1199,
    compareAtPrice: 1499,
    tag: "Luxury Tin",
    imageUrl: "/assets/placeholders/placeholder-gift-hamper.svg",
  },
  {
    id: "combo-4",
    name: "Family Crunch Combo",
    slug: "combos",
    price: 899,
    compareAtPrice: 1049,
    tag: "Save 15%",
    imageUrl: "/assets/placeholders/placeholder-gift-hamper.svg",
  },
];

export function GiftBoxesCombosSection() {
  const { showToast } = useToast();

  const handleAddBundle = (combo: ComboItem) => {
    showToast({
      type: "success",
      title: "Bundle Added to Cart!",
      description: `${combo.name} — ${formatPrice(combo.price)}`,
    });
  };

  return (
    <section aria-labelledby="gifting-heading" className="py-12 sm:py-16 bg-surface-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* BANNER: Curated Snack Hampers Banner matching Reference Artboard */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-brand-maroon/30 bg-gradient-to-r from-[#6B1D2F] via-[#5C1625] to-[#450E1A] p-6 sm:p-10 text-text-inverse shadow-card">
          {/* Subtle Halftone Starburst background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-15"
            style={{
              backgroundImage: "radial-gradient(circle, #E6AC2A 1.5px, transparent 1.5px)",
              backgroundSize: "20px 20px",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left: Open Keepsake Red Gift Tin */}
            <div className="hidden lg:flex lg:col-span-3 justify-center">
              <div
                className="relative h-56 w-56 drop-shadow-xl"
                style={{ position: "relative", width: "224px", height: "224px" }}
              >
                <Image
                  src="/assets/illustrations/hero/retro-gift-tin.svg"
                  alt="KRAK & CO. Keepsake Snack Tin"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Center: Copy & CTAs */}
            <div className="lg:col-span-6 text-center space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-mustard/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-mustard">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Curated Hampers &amp; Treat Boxes</span>
              </div>

              <h2
                id="gifting-heading"
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-surface-cream drop-shadow-xs"
              >
                Gift Boxes &amp; Combos
              </h2>

              <p className="mx-auto max-w-md font-sans text-xs sm:text-sm text-surface-parchment/90 leading-relaxed">
                Curated snack hampers for festivals, family gatherings, and corporate celebrations. Packed in gold-embossed keepsake tins.
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap justify-center gap-2 pt-1 text-xs">
                <span className="rounded-full border border-surface-cream/30 bg-white/10 px-3 py-1 text-[11px] font-semibold text-surface-cream">
                  Festive Gifts
                </span>
                <span className="rounded-full border border-surface-cream/30 bg-white/10 px-3 py-1 text-[11px] font-semibold text-surface-cream">
                  Corporate Gifting
                </span>
                <span className="rounded-full border border-surface-cream/30 bg-white/10 px-3 py-1 text-[11px] font-semibold text-surface-cream">
                  Family Combos
                </span>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Link
                  href="/gift-boxes"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-mustard px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-maroon-dark shadow-sm hover:bg-brand-mustard-light active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard focus-visible:ring-offset-2"
                >
                  <span>Explore Gift Boxes</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right: Retro Man Snacking Illustration */}
            <div className="lg:col-span-3 flex justify-center">
              <div
                className="relative h-48 w-48 sm:h-56 sm:w-56 drop-shadow-xl"
                style={{ position: "relative", width: "224px", height: "224px" }}
              >
                <Image
                  src="/assets/illustrations/hero/retro-man-snacking.svg"
                  alt="Retro Indian Man Enjoying Krak & Co Snacks"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 BUNDLE CARDS ROW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {COMBOS.map((combo) => (
            <div
              key={combo.id}
              className="group flex flex-col justify-between rounded-2xl border border-surface-sand bg-surface-card p-3.5 sm:p-4 shadow-xs transition-all duration-200 hover:border-brand-maroon/40 hover:shadow-card"
            >
              {/* Image & Badge */}
              <div className="relative aspect-square w-full rounded-xl bg-surface-canvas p-2 overflow-hidden mb-3 border border-surface-sand/60">
                <Image
                  src={combo.imageUrl}
                  alt={combo.name}
                  fill
                  sizes="240px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-2 top-2 rounded bg-brand-terracotta px-2 py-0.5 text-[10px] font-bold text-text-inverse uppercase tracking-wide">
                  {combo.tag}
                </div>
              </div>

              {/* Title & Pricing */}
              <div>
                <h3 className="font-display text-sm font-bold text-brand-maroon line-clamp-1 group-hover:text-brand-maroon-dark">
                  {combo.name}
                </h3>

                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-sans text-sm font-bold text-text-primary">
                    {formatPrice(combo.price)}
                  </span>
                  <span className="text-xs text-text-muted line-through font-sans">
                    {formatPrice(combo.compareAtPrice)}
                  </span>
                  <span className="text-[10px] font-bold text-brand-forest">
                    Save {Math.round(((combo.compareAtPrice - combo.price) / combo.compareAtPrice) * 100)}%
                  </span>
                </div>
              </div>

              {/* Button */}
              <div className="mt-3 pt-2">
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={() => handleAddBundle(combo)}
                  className="rounded-lg py-1.5 text-xs font-bold"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

