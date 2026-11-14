"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Drawer } from "@/components/ui/Drawer";
import { ChevronDown, Heart, User, Search, PackageCheck, Headphones, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="left"
      size="md"
      title=""
      footer={
        <div className="flex flex-col gap-2 text-xs">
          <div className="flex items-center gap-2 rounded-lg bg-brand-mustard/15 px-3 py-2 text-brand-maroon font-semibold">
            <Sparkles className="h-4 w-4 text-brand-mustard shrink-0" />
            <span>Free Shipping on Orders Above ₹499!</span>
          </div>
          <p className="text-[11px] text-text-muted text-center mt-1">
            © 2026 KRAK &amp; CO. Snacks South to North.
          </p>
        </div>
      }
    >
      <div className="flex flex-col space-y-6 -mt-2">
        {/* Brand Logo in Drawer */}
        <div className="pb-3 border-b border-surface-sand">
          <Link href="/" onClick={onClose} className="inline-block">
            <div className="relative h-10 w-36">
              <Image
                src="/assets/brand/logos/brand-logo-primary.svg"
                alt="KRAK & CO."
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Quick Search Shortcut */}
        <div>
          <Link
            href="/search"
            onClick={onClose}
            className="flex items-center gap-2.5 w-full rounded-xl border border-surface-sand bg-surface-canvas px-3.5 py-2.5 text-xs text-text-muted hover:border-brand-maroon"
          >
            <Search className="h-4 w-4 text-text-muted" />
            <span>Search snacks, chips, mixtures...</span>
          </Link>
        </div>

        {/* Primary Navigation Links */}
        <nav aria-label="Mobile Main Navigation" className="space-y-1">
          <Link
            href="/shop"
            onClick={onClose}
            className="flex items-center justify-between py-2.5 text-sm font-bold text-text-primary hover:text-brand-maroon transition-colors"
          >
            <span>Shop All Snacks</span>
            <span className="text-xs text-text-muted font-normal">All 12 items →</span>
          </Link>

          <Link
            href="/collections/south-indian"
            onClick={onClose}
            className="flex items-center justify-between py-2.5 text-sm font-semibold text-brand-forest hover:text-brand-forest-dark transition-colors"
          >
            <span>South Indian Classics</span>
            <span className="text-[11px] rounded bg-brand-forest/15 px-2 py-0.5 font-bold">Coconut Oil</span>
          </Link>

          <Link
            href="/collections/north-indian"
            onClick={onClose}
            className="flex items-center justify-between py-2.5 text-sm font-semibold text-brand-maroon hover:text-brand-maroon-dark transition-colors"
          >
            <span>North Indian Favourites</span>
            <span className="text-[11px] rounded bg-brand-maroon/15 px-2 py-0.5 font-bold">Rich Spices</span>
          </Link>

          <Link
            href="/gift-boxes"
            onClick={onClose}
            className="flex items-center justify-between py-2.5 text-sm font-semibold text-text-primary hover:text-brand-maroon transition-colors"
          >
            <span>Festive Gift Boxes</span>
            <span className="text-xs text-brand-terracotta font-bold">Gift Hampers</span>
          </Link>

          <Link
            href="/combos"
            onClick={onClose}
            className="flex items-center justify-between py-2.5 text-sm font-semibold text-text-primary hover:text-brand-maroon transition-colors"
          >
            <span>Snack Combos &amp; Trial Boxes</span>
            <span className="text-xs text-brand-mustard-dark font-bold">Save 15%</span>
          </Link>

          {/* Categories Accordion */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-text-primary hover:text-brand-maroon"
            >
              <span>Browse by Category</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200 text-text-muted",
                  categoriesOpen && "rotate-180 text-brand-maroon"
                )}
              />
            </button>

            {categoriesOpen && (
              <div className="pl-4 space-y-2 py-1 text-xs border-l-2 border-brand-maroon/30 ml-1">
                <Link
                  href="/collections/chips-crisps"
                  onClick={onClose}
                  className="block py-1 text-text-secondary hover:text-brand-maroon"
                >
                  Chips &amp; Crisps
                </Link>
                <Link
                  href="/collections/mixtures"
                  onClick={onClose}
                  className="block py-1 text-text-secondary hover:text-brand-maroon"
                >
                  Mixtures &amp; Namkeen
                </Link>
                <Link
                  href="/collections/savouries"
                  onClick={onClose}
                  className="block py-1 text-text-secondary hover:text-brand-maroon"
                >
                  Murukku &amp; Savouries
                </Link>
                <Link
                  href="/collections/sweets-mithai"
                  onClick={onClose}
                  className="block py-1 text-text-secondary hover:text-brand-maroon"
                >
                  Sweets &amp; Mithai
                </Link>
                <Link
                  href="/collections/pickles-sides"
                  onClick={onClose}
                  className="block py-1 text-text-secondary hover:text-brand-maroon"
                >
                  Pickles &amp; Sides
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/about"
            onClick={onClose}
            className="flex items-center justify-between py-2.5 text-sm font-medium text-text-secondary hover:text-brand-maroon transition-colors"
          >
            <span>About Krak &amp; Co.</span>
          </Link>

          <Link
            href="/reviews"
            onClick={onClose}
            className="flex items-center justify-between py-2.5 text-sm font-medium text-text-secondary hover:text-brand-maroon transition-colors"
          >
            <span>Customer Reviews</span>
            <span className="text-[11px] text-brand-mustard-dark font-bold">★ 4.8 / 5</span>
          </Link>
        </nav>

        {/* Account & Self Service Area */}
        <div className="pt-4 border-t border-surface-sand space-y-2 text-xs">
          <Link
            href="/account"
            onClick={onClose}
            className="flex items-center gap-3 py-2 text-text-primary hover:text-brand-maroon font-medium"
          >
            <User className="h-4 w-4 text-brand-maroon" />
            <span>My Account &amp; Orders</span>
          </Link>

          <Link
            href="/wishlist"
            onClick={onClose}
            className="flex items-center gap-3 py-2 text-text-primary hover:text-brand-maroon font-medium"
          >
            <Heart className="h-4 w-4 text-brand-terracotta" />
            <span>My Wishlist</span>
          </Link>

          <Link
            href="/track-order"
            onClick={onClose}
            className="flex items-center gap-3 py-2 text-text-primary hover:text-brand-maroon font-medium"
          >
            <PackageCheck className="h-4 w-4 text-brand-forest" />
            <span>Track Your Order</span>
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center gap-3 py-2 text-text-primary hover:text-brand-maroon font-medium"
          >
            <Headphones className="h-4 w-4 text-brand-mustard-dark" />
            <span>WhatsApp &amp; Support</span>
          </Link>
        </div>
      </div>
    </Drawer>
  );
}

