import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MOCK_COLLECTIONS } from "@/data/mock";

export interface RelatedCategoriesSectionProps {
  currentSlug: string;
  relatedSlugs?: string[];
}

export function RelatedCategoriesSection({
  currentSlug,
  relatedSlugs = [],
}: RelatedCategoriesSectionProps) {
  // Resolve related collections
  let related = MOCK_COLLECTIONS.filter(
    (c) => relatedSlugs.includes(c.slug) || (c.aliases && c.aliases.some((a) => relatedSlugs.includes(a)))
  );

  // Fallback to other categories if not found
  if (related.length === 0) {
    related = MOCK_COLLECTIONS.filter(
      (c) => c.slug !== currentSlug && c.category && c.slug !== "gift-boxes"
    ).slice(0, 3);
  }

  return (
    <section
      aria-label="Related Snack Categories"
      className="w-full py-12 sm:py-16 bg-surface-canvas/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-surface-sand pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-maroon">
              <span>✦</span>
              <span>More Delicious Crunch</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-text-primary mt-1">
              Explore Related Categories
            </h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-maroon hover:text-brand-maroon-dark transition-colors"
          >
            <span>View All Categories</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.slice(0, 3).map((col) => {
            const isRegional = Boolean(col.region);
            return (
              <Link
                key={col.id}
                href={`/collections/${col.slug}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-sand bg-surface-card p-6 shadow-xs hover:border-brand-maroon/40 hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-brand-maroon/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-maroon">
                      {isRegional ? "Regional Collection" : "Snack Category"}
                    </span>
                    <span className="text-xs font-bold text-text-muted group-hover:text-brand-maroon transition-colors">
                      ✦
                    </span>
                  </div>

                  <div className="relative h-28 w-28 mx-auto group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={col.bannerImageUrl}
                      alt={col.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="text-center space-y-1.5">
                    <h3 className="font-display text-lg font-bold text-text-primary group-hover:text-brand-maroon transition-colors">
                      {col.name}
                    </h3>
                    <p className="font-sans text-xs text-text-secondary line-clamp-2">
                      {col.shortTagline || col.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-1.5 pt-4 border-t border-surface-sand/80 text-xs font-bold uppercase tracking-wider text-brand-maroon group-hover:text-brand-maroon-dark">
                  <span>Explore {col.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
