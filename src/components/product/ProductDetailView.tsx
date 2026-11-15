"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Heart,
  Plus,
  Minus,
  ShoppingBag,
  ShieldCheck,
  Leaf,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Flame,
} from "lucide-react";
import { Product, ProductVariant } from "@/types";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { useToast } from "@/components/feedback/Toast";
import { ProductCard } from "./ProductCard";

export interface ProductDetailViewProps {
  product: Product;
  relatedProducts?: Product[];
}

export function ProductDetailView({ product, relatedProducts = [] }: ProductDetailViewProps) {
  const { addItem, openCart } = useCart();
  const { showToast } = useToast();

  // Find default variant or first variant
  const defaultVar = product.variants.find((v) => v.isDefault) || product.variants[0];
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(defaultVar);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Accordion states
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    ingredients: true,
    nutrition: false,
    storage: false,
    heritage: false,
  });

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Multiple gallery views (product image + regional variations)
  const galleryImages = [
    product.thumbnailUrl,
    "/assets/illustrations/hero/hero-snack-platter.svg",
    product.thumbnailUrl,
    "/assets/illustrations/decorative/motif-sunburst-maroon.svg",
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    openCart();
    showToast({
      type: "success",
      title: "Added to Cart!",
      description: `${quantity}x ${product.name} (${selectedVariant.packSize}) — ${formatPrice(
        selectedVariant.price * quantity
      )}`,
    });
  };

  const handleToggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
    showToast({
      type: "info",
      title: !isWishlisted ? "Added to Wishlist" : "Removed from Wishlist",
      description: product.name,
    });
  };

  const regionLabel =
    product.region === "south-indian"
      ? "South Indian Classics"
      : product.region === "north-indian"
      ? "North Indian Favourites"
      : "Festive Collection";

  const regionLink =
    product.region === "south-indian"
      ? "/collections/south-indian"
      : product.region === "north-indian"
      ? "/collections/north-indian"
      : "/collections/gift-boxes";

  return (
    <div className="w-full bg-surface-canvas min-h-screen py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* 1. Breadcrumbs */}
        <Breadcrumb
          items={[
            { label: regionLabel, href: regionLink },
            { label: product.name },
          ]}
        />

        {/* 2. Main Product Showcase Grid (Gallery + Details) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Image Gallery Column (lg: 6 cols) */}
          <div className="lg:col-span-6 flex flex-col-reverse sm:flex-row gap-4 items-center sm:items-start">
            {/* Vertical Thumbnails Strip (4 thumbnails on left matching manual) */}
            <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-visible shrink-0 pb-2 sm:pb-0">
              {galleryImages.map((imgSrc, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative h-16 w-16 sm:h-20 sm:w-20 rounded-2xl border-2 p-1.5 transition-all overflow-hidden bg-surface-card ${
                    selectedImageIndex === idx
                      ? "border-brand-maroon shadow-md scale-102"
                      : "border-surface-sand hover:border-brand-maroon/40"
                  }`}
                  aria-label={`Select product image view ${idx + 1}`}
                >
                  <Image
                    src={imgSrc}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </button>
              ))}
            </div>

            {/* Main Big Circular / Curved Food Card */}
            <div className="relative w-full aspect-square max-w-[480px] rounded-3xl border border-surface-sand bg-surface-card p-6 flex items-center justify-center shadow-xs overflow-hidden">
              {/* Wishlist Button */}
              <button
                type="button"
                onClick={handleToggleWishlist}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-surface-card/90 shadow-md border border-surface-sand text-text-primary hover:text-brand-vermilion transition-transform active:scale-90"
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart
                  className={`h-5 w-5 ${
                    isWishlisted ? "fill-brand-vermilion text-brand-vermilion" : "text-text-primary"
                  }`}
                />
              </button>

              {/* Decorative Subtle Sunburst Background in Card */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url('/assets/illustrations/decorative/motif-sunburst-maroon.svg')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />

              {/* Active Main Product Artwork */}
              <div className="relative w-full h-full">
                <Image
                  src={galleryImages[selectedImageIndex]}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Product Buy Box & Details (lg: 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Badges & Category */}
            <div className="flex flex-wrap items-center gap-2">
              {product.isBestseller && (
                <span className="rounded-full bg-brand-maroon px-3 py-1 text-xs font-bold uppercase tracking-wider text-text-inverse">
                  Bestseller
                </span>
              )}
              {product.isNew && (
                <span className="rounded-full bg-brand-forest px-3 py-1 text-xs font-bold uppercase tracking-wider text-text-inverse">
                  New Arrival
                </span>
              )}
              <span className="rounded-full bg-surface-sand/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-text-secondary">
                {product.primaryCategory.replace("-", " & ")}
              </span>
            </div>

            {/* Product Title */}
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-text-primary leading-tight">
              {product.name}
            </h1>

            {/* Star Rating & Review Count */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-md bg-brand-mustard/20 px-2 py-1 text-xs font-bold text-brand-maroon-dark">
                <Star className="h-3.5 w-3.5 fill-brand-mustard text-brand-mustard" />
                <span>{product.averageRating.toFixed(1)}</span>
              </div>
              <span className="text-xs font-medium text-text-muted">
                ({product.reviewCount.toLocaleString()} verified customer reviews)
              </span>
            </div>

            {/* Short Description */}
            <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
              {product.shortDescription}
            </p>

            {/* Live Price Calculation */}
            <div className="flex items-baseline gap-3 pt-2">
              <span className="font-display text-3xl font-extrabold text-brand-maroon">
                {formatPrice(selectedVariant.price)}
              </span>
              {selectedVariant.compareAtPrice && (
                <span className="text-base text-text-muted line-through font-mono">
                  {formatPrice(selectedVariant.compareAtPrice)}
                </span>
              )}
              <span className="text-xs text-brand-forest font-bold bg-brand-forest/10 px-2 py-0.5 rounded">
                Taxes Included
              </span>
            </div>

            {/* Pack Size Selector Cards (matching Column 3 of manual) */}
            <div className="space-y-2.5 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                Select Pack Size:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {product.variants.map((v) => {
                  const isSelected = selectedVariant.id === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all cursor-pointer ${
                        isSelected
                          ? "border-brand-maroon bg-brand-maroon text-text-inverse shadow-md"
                          : "border-surface-sand bg-surface-card text-text-primary hover:border-brand-maroon/40"
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-bold">{v.packSize}</span>
                      <span
                        className={`text-xs font-semibold mt-0.5 ${
                          isSelected ? "text-brand-mustard" : "text-brand-maroon font-bold"
                        }`}
                      >
                        {formatPrice(v.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Stepper & Add to Cart Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <div className="flex items-center justify-between rounded-xl border-2 border-surface-sand bg-surface-card px-3 py-2 min-w-[130px]">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-1.5 text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="font-bold text-sm text-text-primary">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-1.5 text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-brand-maroon px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-text-inverse shadow-md hover:bg-brand-maroon-dark active:scale-98 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Add to Cart • {formatPrice(selectedVariant.price * quantity)}</span>
              </button>
            </div>

            {/* 3 Trust Badges Strip (matching bottom of Column 3 in manual) */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-surface-sand">
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-surface-card border border-surface-sand">
                <Leaf className="h-5 w-5 text-brand-forest mb-1" />
                <span className="text-[11px] font-bold text-text-primary leading-tight">No Preservatives</span>
                <span className="text-[10px] text-text-muted">100% Natural</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-surface-card border border-surface-sand">
                <ShieldCheck className="h-5 w-5 text-brand-maroon mb-1" />
                <span className="text-[11px] font-bold text-text-primary leading-tight">Authentic Recipe</span>
                <span className="text-[10px] text-text-muted">Direct Heritage</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-surface-card border border-surface-sand">
                <Sparkles className="h-5 w-5 text-brand-mustard-dark mb-1" />
                <span className="text-[11px] font-bold text-text-primary leading-tight">Crispy & Fresh</span>
                <span className="text-[10px] text-text-muted">Airtight Pouch</span>
              </div>
            </div>

            {/* Product Accordions (Ingredients, Nutrition, Storage, Roots) */}
            <div className="divide-y divide-surface-sand border-t border-b border-surface-sand pt-2">
              {/* Ingredients */}
              <div className="py-3">
                <button
                  type="button"
                  onClick={() => toggleAccordion("ingredients")}
                  className="flex w-full items-center justify-between text-left font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-text-primary"
                >
                  <span>Ingredients & Cooking Medium</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openAccordions.ingredients ? "rotate-180 text-brand-maroon" : "text-text-muted"
                    }`}
                  />
                </button>
                {openAccordions.ingredients && (
                  <div className="mt-2.5 text-xs text-text-secondary leading-relaxed space-y-1.5 font-normal">
                    <p>
                      <strong>Ingredients:</strong> {product.ingredients.join(", ")}.
                    </p>
                    <p>
                      <strong>Cooking Medium:</strong> {product.cookingMedium} (Zero Palm Oil).
                    </p>
                    <p>
                      <strong>Allergens:</strong> {product.allergens.join(", ") || "None"}.
                    </p>
                  </div>
                )}
              </div>

              {/* Storage & Shelf Life */}
              <div className="py-3">
                <button
                  type="button"
                  onClick={() => toggleAccordion("storage")}
                  className="flex w-full items-center justify-between text-left font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-text-primary"
                >
                  <span>Shelf Life & Storage Instructions</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openAccordions.storage ? "rotate-180 text-brand-maroon" : "text-text-muted"
                    }`}
                  />
                </button>
                {openAccordions.storage && (
                  <div className="mt-2.5 text-xs text-text-secondary leading-relaxed space-y-1 font-normal">
                    <p>
                      <strong>Shelf Life:</strong> {product.shelfLife}.
                    </p>
                    <p>
                      <strong>Storage:</strong> {product.storageInstructions}.
                    </p>
                  </div>
                )}
              </div>

              {/* Regional Heritage */}
              <div className="py-3">
                <button
                  type="button"
                  onClick={() => toggleAccordion("heritage")}
                  className="flex w-full items-center justify-between text-left font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-text-primary"
                >
                  <span>Regional Culinary Heritage</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openAccordions.heritage ? "rotate-180 text-brand-maroon" : "text-text-muted"
                    }`}
                  />
                </button>
                {openAccordions.heritage && (
                  <div className="mt-2.5 text-xs text-text-secondary leading-relaxed font-normal">
                    <p>{product.fullDescription}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="pt-8 border-t border-surface-sand space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-maroon">
                  ✦ Frequently Bought Together
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-text-primary mt-1">
                  Complete Your Snack Box
                </h2>
              </div>
              <Link
                href="/shop"
                className="text-xs font-bold uppercase tracking-wider text-brand-maroon hover:text-brand-maroon-dark transition-colors flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.slice(0, 4).map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

