import React from "react";
import { Sparkles, ShieldCheck, Heart, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CategoryEditorialProps {
  title?: string;
  text?: string;
  themeColor?: "maroon" | "forest" | "mustard" | "sand";
}

export function CategoryEditorial({
  title = "EVERY REGION HAS ITS OWN CRUNCH.",
  text = "We source direct from local spice estates and master confectioners across India. Never mass-produced, never compromised with cheap fillers or artificial colours.",
  themeColor = "maroon",
}: CategoryEditorialProps) {
  const accentBorder = {
    forest: "border-brand-forest/20 bg-brand-forest/5",
    maroon: "border-brand-maroon/20 bg-brand-maroon/5",
    mustard: "border-brand-mustard/30 bg-brand-mustard/5",
    sand: "border-surface-sand bg-surface-canvas/50",
  }[themeColor];

  const pillars = [
    {
      icon: Leaf,
      title: "Zero Palm Oil",
      description: "Kettle-fried solely in cold-pressed coconut oil, groundnut oil, or pure cow desi ghee.",
    },
    {
      icon: ShieldCheck,
      title: "Farm Fresh Ingredients",
      description: "Nendran raw bananas, stone-ground flours, and estate curry leaves harvested weekly.",
    },
    {
      icon: Sparkles,
      title: "Handcrafted Small Batches",
      description: "Traditional brass achu presses and wood-fired kadais for unmatched artisanal texture.",
    },
    {
      icon: Heart,
      title: "100% Vegetarian & Pure",
      description: "Pure rock salt and whole spices. Absolutely zero artificial food colouring or MSG.",
    },
  ];

  return (
    <section aria-label="Category Culinary Heritage" className="w-full py-12 sm:py-16 bg-surface-canvas border-t border-b border-surface-sand/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Storytelling Box */}
        <div className={cn("rounded-3xl border p-6 sm:p-10 text-center max-w-4xl mx-auto space-y-4 shadow-xs", accentBorder)}>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-maroon">
            <span>✦</span>
            <span>The KRAK & CO. Standard</span>
            <span>✦</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-text-primary">
            {title}
          </h2>

          <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto font-normal">
            {text}
          </p>
        </div>

        {/* 4 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-surface-sand bg-surface-card p-5 space-y-2.5 text-center shadow-xs hover:border-brand-maroon/30 transition-colors"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-brand-maroon/10 text-brand-maroon">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-sm font-bold text-text-primary">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs text-text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

