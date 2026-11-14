import React from "react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Sparkles } from "lucide-react";

export function ShopHeader() {
  return (
    <div className="w-full bg-surface-canvas border-b border-surface-sand/80 pt-4 pb-6 sm:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: "Shop All" }]} />

        {/* Header Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-1">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-maroon/20 bg-brand-maroon/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-maroon">
              <Sparkles className="h-3.5 w-3.5 text-brand-mustard" />
              <span>Authentic Regional Flavours • South to North</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-brand-maroon leading-tight">
              Explore the Good Stuff.
            </h1>

            <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed max-w-2xl">
              Authentic Indian regional snacks crafted with traditional recipes, cold-pressed oils, zero palm oil, and undeniable crunch in every bite. Discover regional savouries, spicy mixtures, and handcrafted sweets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
