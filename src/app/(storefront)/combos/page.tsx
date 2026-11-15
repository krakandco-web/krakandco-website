import React from "react";
import { productService } from "@/services";
import { ProductCard } from "@/components/product/ProductCard";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Sparkles, Layers } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snack Combos & Value Bundles — KRAK & CO.",
  description:
    "Save on bundled Indian snack favorites. Handcrafted South and North Indian snack combos for family tea-time.",
};

export default async function CombosPage() {
  const allProducts = await productService.getAllProducts();
  const comboProducts = allProducts.filter(
    (p) => p.primaryCategory === "combos" || p.tags.includes("combo")
  );

  return (
    <div className="w-full bg-surface-canvas min-h-screen py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <Breadcrumb items={[{ label: "Snack Combos" }]} />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-mustard/40 bg-brand-mustard/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-maroon-dark">
            <Sparkles className="h-3.5 w-3.5 text-brand-mustard-dark" />
            <span>Value Bundles & Samplers</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-text-primary">
            Curated Snack Combos
          </h1>
          <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
            Enjoy hand-picked combinations of our crunchiest savouries and richest sweets. Save up to ₹100 compared to individual packs!
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-surface-sand">
          {comboProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
