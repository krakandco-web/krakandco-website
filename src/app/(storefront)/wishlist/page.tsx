"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Trash2, ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/feedback/Toast";
import { formatPrice } from "@/lib/utils";
import { MOCK_PRODUCTS } from "@/data/mock/products";

export default function WishlistPage() {
  const { addItem, openCart } = useCart();
  const { showToast } = useToast();

  // Initial demo wishlist items
  const [wishlistItems, setWishlistItems] = useState(
    MOCK_PRODUCTS.slice(0, 4)
  );

  const handleRemove = (id: string, name: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
    showToast({
      type: "info",
      title: "Removed from Wishlist",
      description: name,
    });
  };

  const handleMoveToCart = (product: typeof MOCK_PRODUCTS[0]) => {
    const variant = product.variants.find((v) => v.isDefault) || product.variants[0];
    addItem(product, variant, 1);
    setWishlistItems((prev) => prev.filter((item) => item.id !== product.id));
    openCart();
    showToast({
      type: "success",
      title: "Moved to Cart!",
      description: `${product.name} (${variant.packSize})`,
    });
  };

  const handleAddAllToCart = () => {
    wishlistItems.forEach((product) => {
      const variant = product.variants.find((v) => v.isDefault) || product.variants[0];
      addItem(product, variant, 1);
    });
    setWishlistItems([]);
    openCart();
    showToast({
      type: "success",
      title: "All Items Added to Cart!",
      description: `${wishlistItems.length} items moved to your shopping cart.`,
    });
  };

  return (
    <div className="w-full bg-surface-canvas min-h-screen py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumb items={[{ label: "My Wishlist" }]} />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-sand pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-terracotta mb-1">
              <Heart className="h-3.5 w-3.5 fill-brand-terracotta" />
              <span>Saved for Later</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-text-primary">
              My Wishlist ({wishlistItems.length})
            </h1>
          </div>

          {wishlistItems.length > 0 && (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleAddAllToCart}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-maroon px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-text-inverse hover:bg-brand-maroon-dark transition-all shadow-xs"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Move All to Cart</span>
              </button>
            </div>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          /* Empty State */
          <div className="rounded-3xl border border-surface-sand bg-[#FFFDF8] p-12 text-center max-w-md mx-auto space-y-4 my-12 shadow-xs">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-maroon/10 text-brand-maroon">
              <Heart className="h-8 w-8" />
            </div>
            <h2 className="font-display text-xl font-bold text-text-primary">
              Your Wishlist is Empty
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
              You haven&apos;t saved any favourite snacks yet. Click the heart icon on any snack card to save it for later!
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-maroon px-6 py-3 text-xs font-bold uppercase tracking-wider text-text-inverse hover:bg-brand-maroon-dark transition-all"
              >
                <span>Discover Snacks</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Wishlist Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistItems.map((product) => {
              const defaultVar =
                product.variants.find((v) => v.isDefault) || product.variants[0];

              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-surface-sand bg-[#FFFDF8] p-4 shadow-xs transition-all duration-200 hover:border-brand-maroon/30 hover:shadow-card"
                >
                  <div>
                    {/* Media Container */}
                    <div className="relative aspect-square w-full rounded-2xl bg-surface-canvas p-4 flex items-center justify-center overflow-hidden mb-3">
                      <Image
                        src={product.thumbnailUrl}
                        alt={product.name}
                        fill
                        className="object-contain p-2 drop-shadow-md group-hover:scale-105 transition-transform"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemove(product.id, product.name)}
                        className="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-text-muted shadow-xs hover:text-brand-vermilion transition-colors"
                        aria-label={`Remove ${product.name} from wishlist`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Details */}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-forest">
                      {product.region.replace("-", " ")}
                    </span>
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-sans text-sm sm:text-base font-bold text-text-primary hover:text-brand-maroon transition-colors line-clamp-1 mt-0.5">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-sans text-base font-bold text-text-primary">
                        {formatPrice(defaultVar.price)}
                      </span>
                      <span className="text-xs text-text-muted">{defaultVar.packSize}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 pt-3 border-t border-surface-sand">
                    <button
                      type="button"
                      onClick={() => handleMoveToCart(product)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-maroon py-2.5 text-xs font-bold uppercase tracking-wider text-text-inverse hover:bg-brand-maroon-dark active:scale-98 transition-all"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>Move to Cart</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
