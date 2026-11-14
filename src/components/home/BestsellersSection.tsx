"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product, ProductVariant } from "@/types";
import { ProductCard } from "@/components/product/ProductCard";
import { useToast } from "@/components/feedback/Toast";
import { ArrowRight } from "lucide-react";

export interface BestsellersSectionProps {
  products: Product[];
}

export function BestsellersSection({ products }: BestsellersSectionProps) {
  const { showToast } = useToast();
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  // Take top 5 products matching reference artboard
  const featuredProducts = products.slice(0, 5);

  const handleAddToCart = (product: Product, variant: ProductVariant, quantity: number) => {
    showToast({
      type: "success",
      title: "Added to Cart!",
      description: `${quantity}x ${product.name} (${variant.packSize})`,
    });
  };

  const handleToggleWishlist = (product: Product) => {
    const isAlreadyWishlisted = wishlistIds.includes(product.id);
    setWishlistIds((prev) =>
      isAlreadyWishlisted ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );

    showToast({
      type: "info",
      title: isAlreadyWishlisted ? "Removed from Wishlist" : "Saved to Wishlist",
      description: product.name,
    });
  };

  return (
    <section aria-labelledby="bestsellers-heading" className="py-12 sm:py-16 bg-surface-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with Title and "View All →" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-brand-mustard text-xs">✦</span>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-maroon">
                TOP RATED &amp; BELOVED
              </span>
              <span className="text-brand-mustard text-xs">✦</span>
            </div>
            <h2
              id="bestsellers-heading"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-maroon"
            >
              Bestsellers
            </h2>
          </div>

          <Link
            href="/shop?filter=bestsellers"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-maroon hover:text-brand-maroon-dark transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 5-Column Responsive Product Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

