import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Gift, Sparkles, HeartHandshake, ShieldCheck, ArrowRight, Package } from "lucide-react";
import { productService } from "@/services";
import { ProductCard } from "@/components/product/ProductCard";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Festive Gift Boxes & Snack Hampers — KRAK & CO.",
  description:
    "Curated luxury Indian snack gift boxes in vintage retro tin packaging. Perfect for Diwali, weddings, family celebrations, and corporate gifting.",
};

export default async function GiftBoxesPage() {
  const allProducts = await productService.getAllProducts();
  const giftAndComboProducts = allProducts.filter(
    (p) => p.primaryCategory === "gift-boxes" || p.primaryCategory === "combos"
  );

  return (
    <div className="w-full bg-surface-canvas min-h-screen py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Gift Boxes & Hampers" }]} />

        {/* Festive Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#6B1D2F] via-[#5A1624] to-[#3E0C17] text-text-inverse p-8 sm:p-12 lg:p-16 border border-brand-maroon-dark shadow-lg">
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `url('/assets/illustrations/decorative/motif-sunburst-maroon.svg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-mustard/40 bg-brand-mustard/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-mustard backdrop-blur-xs">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Festive & Corporate Gifting</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-surface-cream leading-tight">
                GIFT THE JOY OF AUTHENTIC CRUNCH
              </h1>

              <p className="font-sans text-sm sm:text-base text-surface-parchment/90 max-w-2xl leading-relaxed">
                Housed in nostalgic, rigid tin gift boxes inspired by 1960s Indian commercial pop art. Each box is packed fresh with traditional savouries, royal mithai, and premium dry fruits.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#gift-collection"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-mustard px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-maroon-dark shadow-sm hover:bg-brand-mustard-light transition-all"
                >
                  <span>Explore Gift Boxes</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-surface-cream/60 bg-black/20 px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-surface-cream hover:bg-white/10 transition-all"
                >
                  <HeartHandshake className="h-4 w-4" />
                  <span>Corporate Bulk Orders</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative h-48 w-48 sm:h-64 sm:w-64 drop-shadow-2xl">
                <Image
                  src="/assets/placeholders/placeholder-gift-hamper.svg"
                  alt="Festive Indian Snack Gift Hamper"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gift Boxes Showcase */}
        <section id="gift-collection" className="space-y-6 scroll-mt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-surface-sand pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-maroon">
                ✦ Hand-Curated Selections
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-text-primary mt-1">
                Festive Snack Boxes & Value Combos
              </h2>
            </div>
            <p className="text-xs text-text-muted">
              Pre-packed in airtight commemorative tins with gift cards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {giftAndComboProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Corporate Gifting Section */}
        <section className="rounded-3xl border border-surface-sand bg-surface-card p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-xs">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-maroon/10 text-brand-maroon">
            <Package className="h-7 w-7" />
          </div>
          <h2 className="font-display text-2xl font-bold text-text-primary">
            Looking for Custom Corporate Hampers?
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed max-w-xl mx-auto font-normal">
            We partner with leading Indian enterprises to provide custom branded snack boxes, employee festive hampers, and client Diwali gifts. Custom sleeves, greeting cards, and pan-India doorstep dispatches available.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-maroon px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-text-inverse hover:bg-brand-maroon-dark transition-colors"
            >
              <span>Enquire for Corporate Gifting</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
