"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/forms/Input";
import { ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubscribed(true);
  };

  return (
    <footer className="border-t-2 border-surface-sand bg-surface-cream text-text-primary">
      {/* Top Value / Trust Signals Banner */}
      <div className="border-b border-surface-sand/80 bg-surface-parchment/60 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-maroon/10 text-brand-maroon">
                <Sparkles className="h-5 w-5 text-brand-maroon" />
              </div>
              <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-maroon">
                  Authentic Recipes
                </h4>
                <p className="text-[11px] text-text-secondary mt-0.5">Heritage recipes, zero shortcuts</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-forest/10 text-brand-forest">
                <span className="text-base font-bold">🥥</span>
              </div>
              <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-forest">
                  Cold-Pressed Oils
                </h4>
                <p className="text-[11px] text-text-secondary mt-0.5">100% Pure Coconut &amp; Ghee</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-mustard/20 text-brand-maroon">
                <ShieldCheck className="h-5 w-5 text-brand-mustard-dark" />
              </div>
              <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-maroon">
                  Nitro Fresh Packed
                </h4>
                <p className="text-[11px] text-text-secondary mt-0.5">90-day crunch lock guarantee</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-terracotta/10 text-brand-terracotta">
                <span className="text-base font-bold">🇮🇳</span>
              </div>
              <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-terracotta">
                  Pan-India Delivery
                </h4>
                <p className="text-[11px] text-text-secondary mt-0.5">Free delivery above ₹499</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Columns */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Brand Identity & Story (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-14 w-44">
                <Image
                  src="/assets/brand/logos/brand-logo-primary.svg"
                  alt="KRAK & CO."
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm font-sans text-text-secondary leading-relaxed max-w-sm">
              From the crispy flavours of the South to the beloved savouries of the North, KRAK &amp; CO. celebrates India’s rich culinary heritage with artisanal recipes, premium oils, and uncompromising crunch.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-semibold text-brand-maroon">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-sand/60 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-brand-forest" />
                <span>100% Vegetarian Kitchen</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-sand/60 px-3 py-1">
                <span>FSSAI Certified</span>
              </span>
            </div>
          </div>

          {/* Column 2: Shop Catalog (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold text-brand-maroon uppercase tracking-wider">
              Shop Snacks
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link href="/shop" className="text-text-secondary hover:text-brand-maroon transition-colors">
                  Shop All Snacks
                </Link>
              </li>
              <li>
                <Link href="/collections/south-indian" className="text-text-secondary hover:text-brand-maroon transition-colors">
                  South Indian Classics
                </Link>
              </li>
              <li>
                <Link href="/collections/north-indian" className="text-text-secondary hover:text-brand-maroon transition-colors">
                  North Indian Favourites
                </Link>
              </li>
              <li>
                <Link href="/shop?filter=bestsellers" className="text-text-secondary hover:text-brand-maroon transition-colors">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link href="/gift-boxes" className="text-text-secondary hover:text-brand-maroon transition-colors">
                  Festive Gift Hampers
                </Link>
              </li>
              <li>
                <Link href="/combos" className="text-text-secondary hover:text-brand-maroon transition-colors">
                  Value Snack Combos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-brand-maroon uppercase tracking-wider">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link href="/track-order" className="text-text-secondary hover:text-brand-maroon transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-text-secondary hover:text-brand-maroon transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-brand-maroon transition-colors">
                  Contact Support &amp; Bulk Gifting
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-text-secondary hover:text-brand-maroon transition-colors">
                  Shipping &amp; Delivery SLA
                </Link>
              </li>
              <li>
                <Link href="/returns-policy" className="text-text-secondary hover:text-brand-maroon transition-colors">
                  Taste &amp; Freshness Guarantee
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="text-text-secondary hover:text-brand-maroon transition-colors">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Exclusive Drops (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-brand-maroon uppercase tracking-wider">
              The Crunch Club
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Get <strong>10% off</strong> your first order. Subscribe for private festive drops, recipe stories, and member perks.
            </p>

            {isSubscribed ? (
              <div className="flex items-center gap-2 rounded-xl bg-state-success/15 p-3 text-xs font-semibold text-state-success border border-state-success/30">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Welcome to the Crunch Club! Check your inbox for your 10% coupon code.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-xs py-2 h-9"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    className="shrink-0 h-9 px-3"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <span className="block text-[10px] text-text-muted">
                  Zero spam. Unsubscribe with 1-click anytime.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal & Payment Row */}
        <div className="mt-12 pt-8 border-t border-surface-sand flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link href="/about" className="hover:text-brand-maroon transition-colors">
              About Krak &amp; Co.
            </Link>
            <span>•</span>
            <Link href="/reviews" className="hover:text-brand-maroon transition-colors">
              Reviews (4.8 / 5)
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-brand-maroon transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-brand-maroon transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-semibold text-text-secondary">
            <span>Secure Payments:</span>
            <span className="rounded bg-surface-sand/60 px-2 py-0.5">UPI</span>
            <span className="rounded bg-surface-sand/60 px-2 py-0.5">RuPay</span>
            <span className="rounded bg-surface-sand/60 px-2 py-0.5">Cards</span>
            <span className="rounded bg-surface-sand/60 px-2 py-0.5">Netbanking</span>
          </div>
        </div>

        {/* Dynamic Copyright */}
        <div className="mt-4 text-center text-[11px] text-text-muted">
          © {currentYear} KRAK &amp; CO. All rights reserved. Handcrafted authentic Indian snacks from South to North.
        </div>
      </div>
    </footer>
  );
}

