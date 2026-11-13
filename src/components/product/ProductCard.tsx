"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";
import { Product, ProductVariant } from "@/types";
import { ProductImage } from "./ProductImage";
import { ProductRating } from "./ProductRating";
import { ProductBadge } from "./ProductBadge";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { Heart } from "lucide-react";

export interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, variant: ProductVariant, quantity: number) => void;
  onToggleWishlist?: (product: Product) => void;
  isWishlisted?: boolean;
  className?: string;
}

export function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
  className,
}: ProductCardProps) {
  // Default to first variant or default marked variant
  const defaultVariant =
    product.variants.find((v) => v.isDefault) || product.variants[0];
  const [selectedVariant] = useState<ProductVariant>(defaultVariant);
  const [isAdding, setIsAdding] = useState(false);

  const isOutOfStock = product.isOutOfStock || selectedVariant?.inventoryCount <= 0;

  const handleQuickAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOutOfStock) return;

    setIsAdding(true);
    try {
      await onAddToCart?.(product, selectedVariant, 1);
    } finally {
      setIsAdding(false);
    }
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleWishlist?.(product);
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border border-surface-sand bg-surface-card p-3 sm:p-4 shadow-xs transition-all duration-200",
        "hover:border-brand-maroon/30 hover:shadow-card",
        className
      )}
    >
      {/* Top Media Area */}
      <div className="relative mb-3">
        <Link
          href={`/products/${product.slug}`}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon rounded-xl"
        >
          <ProductImage
            src={product.thumbnailUrl}
            alt={product.name}
            aspectRatio="square"
          />
        </Link>

        {/* Top Badges */}
        <div className="pointer-events-none absolute left-2.5 top-2.5 flex flex-col gap-1 z-10">
          {product.isBestseller && <ProductBadge type="bestseller" />}
          {product.isNew && !product.isBestseller && <ProductBadge type="new" />}
          {isOutOfStock && <ProductBadge type="out-of-stock" />}
        </div>

        {/* Wishlist Button */}
        <div className="absolute right-2.5 top-2.5 z-10">
          <IconButton
            icon={
              <Heart
                className={cn(
                  "h-4 w-4 transition-colors",
                  isWishlisted
                    ? "fill-brand-terracotta text-brand-terracotta"
                    : "text-text-muted hover:text-brand-terracotta"
                )}
              />
            }
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            variant="ghost"
            size="sm"
            onClick={handleWishlistClick}
            className="rounded-full bg-surface-card/90 backdrop-blur-xs shadow-xs hover:bg-surface-card"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          {/* Title */}
          <Link
            href={`/products/${product.slug}`}
            className="group/title focus-visible:outline-none"
          >
            <h3 className="font-display text-base font-bold text-brand-maroon line-clamp-1 group-hover/title:text-brand-maroon-dark">
              {product.name}
            </h3>
          </Link>

          {/* Pricing & Pack Size */}
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-sans text-base font-bold text-text-primary">
              {formatPrice(selectedVariant?.price ?? product.variants[0]?.price ?? 0)}
            </span>
            {selectedVariant?.packSize && (
              <span className="text-xs text-text-muted">
                {selectedVariant.packSize}
              </span>
            )}
            {selectedVariant?.compareAtPrice &&
              selectedVariant.compareAtPrice > selectedVariant.price && (
                <span className="text-xs text-text-muted line-through">
                  {formatPrice(selectedVariant.compareAtPrice)}
                </span>
              )}
          </div>

          {/* Rating */}
          <div className="mt-1.5 min-h-[20px]">
            {product.averageRating > 0 && (
              <ProductRating
                rating={product.averageRating}
                reviewCount={product.reviewCount}
                size="sm"
              />
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-4 pt-2">
          <Button
            variant="primary"
            size="sm"
            fullWidth
            isLoading={isAdding}
            disabled={isOutOfStock}
            onClick={handleQuickAdd}
            className="rounded-lg py-2 text-xs font-bold uppercase tracking-wider"
          >
            {isOutOfStock ? "Out of Stock" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
}
