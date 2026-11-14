import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CategoryItem {
  title: string;
  slug: string;
  imageUrl: string;
  itemCount: number;
}

const CATEGORIES: CategoryItem[] = [
  {
    title: "Chips & Crisps",
    slug: "chips-crisps",
    imageUrl: "/assets/placeholders/placeholder-kerala-banana-chips.svg",
    itemCount: 4,
  },
  {
    title: "Mixtures",
    slug: "mixtures",
    imageUrl: "/assets/placeholders/placeholder-madurai-mixture.svg",
    itemCount: 5,
  },
  {
    title: "Savouries",
    slug: "savouries",
    imageUrl: "/assets/placeholders/placeholder-aloo-bhujia.svg",
    itemCount: 6,
  },
  {
    title: "Sweets & Mithai",
    slug: "sweets-mithai",
    imageUrl: "/assets/placeholders/placeholder-kaju-katli.svg",
    itemCount: 3,
  },
  {
    title: "Pickles & Sides",
    slug: "pickles-sides",
    imageUrl: "/assets/placeholders/placeholder-ragi-murukku.svg",
    itemCount: 2,
  },
  {
    title: "Gift Boxes",
    slug: "gift-boxes",
    imageUrl: "/assets/placeholders/placeholder-gift-hamper.svg",
    itemCount: 4,
  },
];

export function CategorySection() {
  return (
    <section aria-labelledby="category-heading" className="py-12 sm:py-16 bg-surface-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Matchbox Stars */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="text-brand-mustard text-xs">✦</span>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-maroon">
              DISCOVER OUR CRUNCH
            </span>
            <span className="text-brand-mustard text-xs">✦</span>
          </div>
          <h2
            id="category-heading"
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-maroon"
          >
            Shop by Category
          </h2>
        </div>

        {/* Circular / Matchbox Avatar Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/collections/${category.slug}`}
              className="group flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-200 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon"
            >
              {/* Circular Avatar with Matchbox Rim */}
              <div className="relative mb-3 h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-2 border-brand-maroon/20 bg-surface-card p-1 shadow-sm transition-all duration-300 group-hover:border-brand-maroon group-hover:shadow-card group-hover:scale-105">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-surface-parchment/70">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    fill
                    sizes="112px"
                    className="object-cover object-center p-1 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-sans text-xs sm:text-sm font-bold text-text-primary group-hover:text-brand-maroon transition-colors line-clamp-1">
                {category.title}
              </h3>

              <span className="text-[11px] text-text-muted mt-0.5">
                {category.itemCount} items
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
