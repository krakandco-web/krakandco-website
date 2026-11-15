"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag, Gift } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { cart, isCartOpen, closeCart, updateQuantity, removeItem } = useCart();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const freeShippingProgress = Math.min(
    100,
    Math.round((cart.subtotal / cart.freeShippingThreshold) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
        onClick={closeCart}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Shopping Cart Drawer"
          className="w-screen max-w-md bg-surface-canvas shadow-2xl flex flex-col justify-between border-l border-surface-sand"
        >
          {/* 1. Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-surface-sand bg-surface-card">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-brand-maroon" />
              <h2 className="font-display text-lg font-bold text-text-primary">
                Your Cart ({cart.itemCount})
              </h2>
            </div>
            <button
              type="button"
              onClick={closeCart}
              className="rounded-full p-2 text-text-muted hover:text-text-primary hover:bg-surface-sand/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon"
              aria-label="Close cart drawer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* 2. Free Shipping Threshold Progress Bar */}
          <div className="px-5 py-3 bg-brand-mustard/15 border-b border-brand-mustard/20">
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-maroon-dark">
              <Gift className="h-4 w-4 shrink-0 text-brand-mustard-dark" />
              {cart.isFreeShippingUnlocked ? (
                <span>🎉 Congratulations! You have unlocked <strong>FREE Shipping</strong>!</span>
              ) : (
                <span>
                  Add <strong>{formatPrice(cart.freeShippingRemaining)}</strong> more for <strong>Free Shipping</strong>
                </span>
              )}
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-surface-sand/80 overflow-hidden">
              <div
                className="h-full rounded-full bg-brand-mustard transition-all duration-300 ease-out"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* 3. Cart Items List */}
          <div className="flex-1 overflow-y-auto px-5 py-4 divide-y divide-surface-sand/70 space-y-4">
            {cart.items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-surface-sand/50 text-text-muted">
                  <ShoppingBag className="h-7 w-7" />
                </div>
                <h3 className="font-display text-base font-bold text-text-primary">
                  Your cart is empty
                </h3>
                <p className="text-xs text-text-muted max-w-xs mx-auto">
                  Looks like you haven&apos;t added any authentic snacks yet.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-3 inline-flex items-center gap-2 rounded-xl bg-brand-maroon px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-text-inverse hover:bg-brand-maroon-dark transition-colors"
                >
                  <span>Start Snacking</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              cart.items.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex items-center gap-3.5">
                  {/* Thumbnail */}
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-surface-sand bg-surface-card p-1">
                    <Image
                      src={item.product.thumbnailUrl}
                      alt={item.product.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Title, Variant & Price */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-sans text-xs sm:text-sm font-bold text-text-primary truncate">
                      {item.product.name}
                    </h4>
                    <p className="font-sans text-xs text-text-muted">
                      {item.variant.packSize}
                    </p>
                    <p className="font-sans text-xs sm:text-sm font-bold text-brand-maroon mt-0.5">
                      {formatPrice(item.lineTotal)}
                    </p>
                  </div>

                  {/* Quantity Stepper & Delete */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center rounded-lg border border-surface-sand bg-surface-card">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-text-primary min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 text-text-muted hover:text-brand-vermilion transition-colors focus-visible:outline-none"
                      aria-label={`Remove ${item.product.name} from cart`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* 4. Footer / Checkout Actions */}
          {cart.items.length > 0 && (
            <div className="border-t border-surface-sand bg-surface-card p-5 space-y-3.5 shadow-lg">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-text-secondary">
                  <span>Subtotal</span>
                  <span className="font-semibold text-text-primary">{formatPrice(cart.subtotal)}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Shipping</span>
                  <span className="font-semibold text-text-primary">
                    {cart.shippingTotal === 0 ? (
                      <span className="text-brand-forest font-bold">FREE</span>
                    ) : (
                      formatPrice(cart.shippingTotal)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-text-primary pt-2 border-t border-surface-sand">
                  <span>Total</span>
                  <span className="text-base text-brand-maroon">{formatPrice(cart.grandTotal)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                onClick={closeCart}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-maroon py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-text-inverse shadow-sm hover:bg-brand-maroon-dark active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="text-center">
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="text-xs font-semibold text-text-muted hover:text-brand-maroon transition-colors"
                >
                  View Full Cart & Details
                </Link>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
