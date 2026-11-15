import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CategoryItem {
  title: string;
  slug: string;
  imageUrl: string;
  gradientClass: string;
  borderColor: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    title: "Chips & Crisps",
    slug: "chips-crisps",
    imageUrl: "/assets/products/kerala-banana-chips.svg",
    gradientClass: "from-[#FDE68A] via-[#FBBF24] to-[#F59E0B]",
    borderColor: "border-[#D97706]/40",
  },
  {
    title: "Mixtures",
    slug: "mixtures",
    imageUrl: "/assets/products/madurai-mixture.svg",
    gradientClass: "from-[#FED7AA] via-[#FB923C] to-[#EA580C]",
    borderColor: "border-[#C2410C]/40",
  },
  {
    title: "Savouries",
    slug: "savouries",
    imageUrl: "/assets/products/aloo-bhujia.svg",
    gradientClass: "from-[#FEF08A] via-[#FACC15] to-[#CA8A04]",
    borderColor: "border-[#B45309]/40",
  },
  {
    title: "Sweets & Mithai",
    slug: "sweets-mithai",
    imageUrl: "/assets/products/sweets-mithai.svg",
    gradientClass: "from-[#FFEDD5] via-[#FB923C] to-[#B45309]",
    borderColor: "border-[#9A3412]/40",
  },
  {
    title: "Pickles & Sides",
    slug: "pickles-sides",
    imageUrl: "/assets/products/pickles-martaban.svg",
    gradientClass: "from-[#FEF3C7] via-[#F59E0B] to-[#92400E]",
    borderColor: "border-[#78350F]/40",
  },
  {
    title: "Gift Boxes",
    slug: "gift-boxes",
    imageUrl: "/assets/products/festive-gift-box.svg",
    gradientClass: "from-[#FECDD3] via-[#E11D48] to-[#881337]",
    borderColor: "border-[#9F1239]/40",
  },
];

export function CategorySection() {
  return (
    <section aria-labelledby="category-heading" className="py-12 sm:py-16 bg-surface-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Matchbox Gold Stars matching manual: ✦ Shop by Category ✦ */}
        <div className="text-center mb-10 sm:mb-12">
          <h2
            id="category-heading"
            className="inline-flex items-center justify-center gap-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-maroon"
          >
            <span className="text-brand-mustard text-xl sm:text-2xl" aria-hidden="true">✦</span>
            <span>Shop by Category</span>
            <span className="text-brand-mustard text-xl sm:text-2xl" aria-hidden="true">✦</span>
          </h2>
        </div>

        {/* 6 Arched Category Cards Grid matching reference manual */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/collections/${category.slug}`}
              className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon rounded-2xl"
            >
              {/* Arched Food Showcase Frame (Rounded top arch, soft bottom corners) */}
              <div
                className={`relative w-full aspect-[4/5] max-w-[170px] rounded-t-full rounded-b-2xl border-2 ${category.borderColor} bg-gradient-to-b ${category.gradientClass} p-3 shadow-md flex items-end justify-center overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:scale-102`}
              >
                {/* Subtle Inner Glow & Depth */}
                <div className="absolute inset-0 bg-radial from-white/30 to-transparent pointer-events-none rounded-t-full" />

                {/* Floating Brass Bowl Snack Artwork */}
                <div className="relative w-full h-[85%] transition-transform duration-300 group-hover:scale-110 drop-shadow-xl flex items-center justify-center">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    fill
                    sizes="(max-width: 640px) 150px, 170px"
                    className="object-contain object-bottom"
                  />
                </div>
              </div>

              {/* Category Title matching reference artboard */}
              <h3 className="font-sans text-xs sm:text-sm font-bold text-text-primary group-hover:text-brand-maroon transition-colors mt-3">
                {category.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
