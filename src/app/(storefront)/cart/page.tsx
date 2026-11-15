"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  ArrowRight,
  Trash2,
  Plus,
  Minus,
  Gift,
  ShieldCheck,
  Tag,
  ArrowLeft,
  Truck,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { useToast } from "@/components/feedback/Toast";

export default function CartPage() {
  const { cart, updateQuantity, removeItem, setShippingRate } = useCart();
  const { showToast } = useToast();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState(0);

  const freeShippingProgress = Math.min(
    100,
    Math.round((cart.subtotal / cart.freeShippingThreshold) * 100)
  );

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "CRUNCH10" || couponCode.trim().toUpperCase() === "KRAK10") {
      const discount = Math.round(cart.subtotal * 0.1);
      setAppliedCoupon(couponCode.trim().toUpperCase());
      setCouponDiscount(discount);
      showToast({
        type: "success",
        title: "Coupon Applied!",
        description: `10% discount applied: -${formatPrice(discount)}`,
      });
    } else {
      showToast({
        type: "error",
        title: "Invalid Coupon Code",
        description: "Try using 'CRUNCH10' for 10% off on your order.",
      });
    }
  };

  const finalGrandTotal = Math.max(0, cart.grandTotal - couponDiscount);

  return (
    <div className="w-full bg-surface-canvas min-h-screen py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: "Your Cart" }]} />

        {/* Page Title */}
        <div className="flex items-center justify-between border-b border-surface-sand pb-4">
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-text-primary flex items-center gap-3">
            <ShoppingBag className="h-7 w-7 text-brand-maroon" />
            <span>Shopping Cart ({cart.itemCount})</span>
          </h1>
          <Link
            href="/shop"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-maroon hover:text-brand-maroon-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {cart.items.length === 0 ? (
          /* Empty Cart State */
          <div className="rounded-3xl border border-surface-sand bg-surface-card p-12 text-center max-w-lg mx-auto space-y-4 my-12 shadow-xs">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-surface-sand/60 text-text-muted">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h2 className="font-display text-xl font-bold text-text-primary">
              Your snack basket is empty
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed font-normal">
              You haven&apos;t added any traditional Indian snacks yet. Explore our authentic regional collections!
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-maroon px-6 py-3 text-xs font-bold uppercase tracking-wider text-text-inverse hover:bg-brand-maroon-dark transition-colors"
            >
              <span>Explore All Snacks</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          /* Main Cart Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Items Column (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Free Shipping Progress Notification */}
              <div className="rounded-2xl border border-brand-mustard/30 bg-brand-mustard/10 p-4 sm:p-5 space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-brand-maroon-dark">
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-brand-mustard-dark shrink-0" />
                    {cart.isFreeShippingUnlocked ? (
                      <span>🎉 You have unlocked <strong>FREE Pan-India Shipping</strong>!</span>
                    ) : (
                      <span>
                        Add <strong>{formatPrice(cart.freeShippingRemaining)}</strong> more to get <strong>FREE Shipping</strong>!
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono">{freeShippingProgress}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-surface-sand/70 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-brand-mustard transition-all duration-300"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Items Card */}
              <div className="rounded-3xl border border-surface-sand bg-surface-card divide-y divide-surface-sand/70 overflow-hidden shadow-xs">
                {cart.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="relative h-20 w-20 shrink-0 rounded-2xl border border-surface-sand bg-surface-canvas p-2 overflow-hidden">
                        <Image
                          src={item.product.thumbnailUrl}
                          alt={item.product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="space-y-1">
                        <Link
                          href={`/products/${item.product.slug}`}
                          className="font-display text-sm sm:text-base font-bold text-text-primary hover:text-brand-maroon transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-text-muted">
                          Pack Size: <span className="font-semibold text-text-secondary">{item.variant.packSize}</span>
                        </p>
                        <p className="text-xs font-bold text-brand-maroon sm:hidden">
                          {formatPrice(item.lineTotal)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-6">
                      {/* Quantity Stepper */}
                      <div className="flex items-center rounded-xl border border-surface-sand bg-surface-canvas">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-text-primary min-w-[28px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      {/* Line Total */}
                      <span className="hidden sm:block text-sm font-bold text-brand-maroon min-w-[70px] text-right font-mono">
                        {formatPrice(item.lineTotal)}
                      </span>

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="rounded-lg p-2 text-text-muted hover:text-brand-vermilion hover:bg-brand-vermilion/5 transition-colors focus-visible:outline-none"
                        aria-label={`Remove ${item.product.name} from cart`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Back to Shop Link */}
              <div className="sm:hidden">
                <Link
                  href="/shop"
                  className="flex items-center justify-center gap-2 rounded-xl border border-surface-sand bg-surface-card py-3 text-xs font-bold uppercase tracking-wider text-text-primary"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>

            {/* Right Summary Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-3xl border border-surface-sand bg-surface-card p-6 space-y-6 shadow-xs sticky top-24">
                <h2 className="font-display text-lg font-bold text-text-primary border-b border-surface-sand pb-3">
                  Order Summary
                </h2>

                {/* Delivery Options Selector */}
                <div className="space-y-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                    <Truck className="h-3.5 w-3.5 text-brand-maroon" />
                    <span>Shipping Method</span>
                  </label>
                  <div className="space-y-2 text-xs">
                    <label
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${
                        cart.selectedShippingRate?.id === "standard"
                          ? "border-brand-maroon bg-brand-maroon/5 font-semibold text-brand-maroon"
                          : "border-surface-sand bg-surface-canvas/50 text-text-secondary"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="shipping"
                          checked={cart.selectedShippingRate?.id === "standard"}
                          onChange={() => setShippingRate("standard")}
                          className="accent-brand-maroon"
                        />
                        <span>Standard (3–5 Days)</span>
                      </div>
                      <span>
                        {cart.isFreeShippingUnlocked ? "FREE" : "₹49"}
                      </span>
                    </label>

                    <label
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${
                        cart.selectedShippingRate?.id === "express"
                          ? "border-brand-maroon bg-brand-maroon/5 font-semibold text-brand-maroon"
                          : "border-surface-sand bg-surface-canvas/50 text-text-secondary"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="shipping"
                          checked={cart.selectedShippingRate?.id === "express"}
                          onChange={() => setShippingRate("express")}
                          className="accent-brand-maroon"
                        />
                        <span>Express Air (1–2 Days)</span>
                      </div>
                      <span>₹99</span>
                    </label>
                  </div>
                </div>

                {/* Coupon Code Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5 text-brand-maroon" />
                    <span>Have a Promo Code?</span>
                  </label>
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. CRUNCH10"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 rounded-xl border border-surface-sand bg-surface-canvas px-3.5 py-2 text-xs uppercase placeholder:normal-case font-mono focus:border-brand-maroon focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="rounded-xl bg-brand-maroon px-4 py-2 text-xs font-bold uppercase tracking-wider text-text-inverse hover:bg-brand-maroon-dark transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                  {appliedCoupon && (
                    <p className="text-[11px] font-semibold text-brand-forest">
                      Coupon <strong>{appliedCoupon}</strong> active (10% off)
                    </p>
                  )}
                </div>

                {/* Totals Breakdown */}
                <div className="space-y-2 text-xs border-t border-surface-sand pt-4">
                  <div className="flex justify-between text-text-secondary">
                    <span>Subtotal</span>
                    <span className="font-semibold text-text-primary">{formatPrice(cart.subtotal)}</span>
                  </div>
                  {couponDiscount > 0 && (
                    <div className="flex justify-between text-brand-forest font-semibold">
                      <span>Discount (10%)</span>
                      <span>-{formatPrice(couponDiscount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-text-secondary">
                    <span>Estimated Shipping</span>
                    <span className="font-semibold text-text-primary">
                      {cart.shippingTotal === 0 ? (
                        <span className="text-brand-forest font-bold">FREE</span>
                      ) : (
                        formatPrice(cart.shippingTotal)
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-text-primary border-t border-surface-sand pt-3">
                    <span>Grand Total</span>
                    <span className="text-lg text-brand-maroon font-display">{formatPrice(finalGrandTotal)}</span>
                  </div>
                  <p className="text-[11px] text-text-muted text-right">
                    Inclusive of all applicable taxes
                  </p>
                </div>

                {/* Primary Proceed CTA */}
                <Link
                  href="/checkout"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-maroon py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-text-inverse shadow-md hover:bg-brand-maroon-dark active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {/* Trust Badges */}
                <div className="pt-2 border-t border-surface-sand/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <ShieldCheck className="h-4 w-4 text-brand-forest shrink-0" />
                    <span>Safe & Encrypted 256-Bit SSL Checkout</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <ShieldCheck className="h-4 w-4 text-brand-forest shrink-0" />
                    <span>100% Zero Palm Oil Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
