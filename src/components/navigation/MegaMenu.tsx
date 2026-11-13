"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";

export interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
}

export function MegaMenu({ isOpen, onClose, triggerRef }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      role="region"
      aria-label="Shop Mega Menu"
      className={cn(
        "absolute left-0 right-0 top-full z-40 border-b-2 border-surface-sand bg-surface-card/98 shadow-xl backdrop-blur-md transition-all duration-200",
        "animate-in fade-in slide-in-from-top-2 duration-150"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Column 1: Shop All Categories */}
          <div className="col-span-3 space-y-4 border-r border-surface-sand/80 pr-6">
            <div className="flex items-center gap-2">
              <span className="text-brand-mustard text-xs">✦</span>
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-maroon">
                Shop All
              </h3>
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/shop"
                  onClick={onClose}
                  className="font-semibold text-text-primary hover:text-brand-maroon transition-colors block py-0.5"
                >
                  All Authentic Snacks
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?filter=bestsellers"
                  onClick={onClose}
                  className="text-text-secondary hover:text-brand-maroon transition-colors flex items-center justify-between py-0.5"
                >
                  <span>Bestsellers</span>
                  <span className="rounded-full bg-brand-mustard/20 px-2 py-0.5 text-[10px] font-bold text-brand-maroon">
                    Hot
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?filter=new"
                  onClick={onClose}
                  className="text-text-secondary hover:text-brand-maroon transition-colors block py-0.5"
                >
                  New Harvest Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-boxes"
                  onClick={onClose}
                  className="text-text-secondary hover:text-brand-maroon transition-colors flex items-center justify-between py-0.5"
                >
                  <span>Festive Gift Boxes</span>
                  <Sparkles className="h-3 w-3 text-brand-mustard" />
                </Link>
              </li>
              <li>
                <Link
                  href="/combos"
                  onClick={onClose}
                  className="text-text-secondary hover:text-brand-maroon transition-colors block py-0.5"
                >
                  Snack Combos &amp; Discovery Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: South Indian Classics */}
          <div className="col-span-3 space-y-4 border-r border-surface-sand/80 pr-6">
            <div className="flex items-center gap-2">
              <span className="text-brand-forest text-xs">✦</span>
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-forest">
                South Indian Classics
              </h3>
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/collections/south-indian"
                  onClick={onClose}
                  className="font-semibold text-text-primary hover:text-brand-forest transition-colors block py-0.5"
                >
                  Explore South Indian Collection →
                </Link>
              </li>
              <li>
                <Link
                  href="/products/kerala-banana-chips"
                  onClick={onClose}
                  className="text-text-secondary hover:text-brand-forest transition-colors block py-0.5"
                >
                  Kerala Banana Chips (Coconut Oil)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/madurai-mixture"
                  onClick={onClose}
                  className="text-text-secondary hover:text-brand-forest transition-colors block py-0.5"
                >
                  Madurai Special Mixture
                </Link>
              </li>
              <li>
                <Link
                  href="/products/ragi-murukku"
                  onClick={onClose}
                  className="text-text-secondary hover:text-brand-forest transition-colors block py-0.5"
                >
                  Crispy Ragi Murukku
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/chips-crisps"
                  onClick={onClose}
                  className="text-text-secondary hover:text-brand-forest transition-colors block py-0.5"
                >
                  Chips &amp; Crisps
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: North Indian Favourites */}
          <div className="col-span-3 space-y-4 border-r border-surface-sand/80 pr-6">
            <div className="flex items-center gap-2">
              <span className="text-brand-maroon text-xs">✦</span>
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-maroon">
                North Indian Favourites
              </h3>
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/collections/north-indian"
                  onClick={onClose}
                  className="font-semibold text-text-primary hover:text-brand-maroon transition-colors block py-0.5"
                >
                  Explore North Indian Collection →
                </Link>
              </li>
              <li>
                <Link
                  href="/products/aloo-bhujia"
                  onClick={onClose}
                  className="text-text-secondary hover:text-brand-maroon transition-colors block py-0.5"
                >
                  Bikaneri Aloo Bhujia
                </Link>
              </li>
              <li>
                <Link
                  href="/products/kaju-katli"
                  onClick={onClose}
                  className="text-text-secondary hover:text-brand-maroon transition-colors block py-0.5"
                >
                  Royal Kaju Katli (Desi Ghee)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/bombay-mixture"
                  onClick={onClose}
                  className="text-text-secondary hover:text-brand-maroon transition-colors block py-0.5"
                >
                  Bombay Gourmet Mixture
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/sweets-mithai"
                  onClick={onClose}
                  className="text-text-secondary hover:text-brand-maroon transition-colors block py-0.5"
                >
                  Sweets &amp; Mithai
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Editorial Featured Card */}
          <div className="col-span-3">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-brand-maroon/20 bg-surface-canvas p-5 transition-all hover:border-brand-maroon/50 hover:shadow-card">
              <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface-parchment">
                <Image
                  src="/assets/placeholders/placeholder-gift-hamper.svg"
                  alt="Festive Gifting Hamper"
                  fill
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-2 top-2 rounded bg-brand-terracotta px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-text-inverse">
                  Festive Special
                </div>
              </div>

              <div>
                <h4 className="font-display text-sm font-bold text-brand-maroon">
                  Festive Keepsake Hampers
                </h4>
                <p className="mt-1 text-xs text-text-secondary leading-normal">
                  Curated sweets &amp; mixtures in luxury gold-foil tins.
                </p>
                <div className="mt-3">
                  <Link
                    href="/gift-boxes"
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-maroon hover:text-brand-maroon-dark"
                  >
                    <span>View Hampers</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
