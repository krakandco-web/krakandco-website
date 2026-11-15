"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  ChevronDown,
} from "lucide-react";
import { MegaMenu } from "@/components/navigation/MegaMenu";
import { MobileNavDrawer } from "@/components/navigation/MobileNavDrawer";
import { AnnouncementBar } from "./AnnouncementBar";
import { useCart } from "@/context/CartContext";

export interface HeaderProps {
  cartItemCount?: number;
  wishlistItemCount?: number;
}

export function Header({
  cartItemCount,
  wishlistItemCount = 0,
}: HeaderProps) {
  const { cart, openCart } = useCart();
  const displayCartCount = typeof cartItemCount === "number" ? cartItemCount : cart.itemCount;
  const pathname = usePathname();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const shopTriggerRef = useRef<HTMLButtonElement>(null);

  const isShopActive =
    pathname.startsWith("/shop") ||
    pathname.startsWith("/collections") ||
    pathname.startsWith("/products");

  return (
    <header className="relative w-full">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Sticky Navigation Header */}
      <div className="sticky top-0 z-40 w-full border-b border-surface-sand bg-surface-card/95 backdrop-blur-md transition-shadow">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LEFT: Mobile Menu Button (Mobile) / Brand Logo (Desktop) */}
          <div className="flex items-center gap-4">
            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setIsMobileDrawerOpen(true)}
              aria-label="Open mobile menu"
              className="flex items-center justify-center p-2 text-text-primary hover:text-brand-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon rounded-lg lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Desktop Brand Logo */}
            <Link
              href="/"
              className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon rounded-lg"
              aria-label="KRAK & CO. Home"
            >
              <div
                className="relative h-12 w-44 sm:h-14 sm:w-48"
                style={{ position: "relative", width: "176px", height: "48px", maxWidth: "100%" }}
              >
                <Image
                  src="/assets/brand/logos/brand-logo-primary.svg"
                  alt="KRAK & CO. — Authentic Indian Snacks"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* CENTRE: Primary Navigation (Desktop) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold"
          >
            {/* Shop with Mega Menu Trigger */}
            <div className="relative">
              <button
                ref={shopTriggerRef}
                type="button"
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                aria-expanded={isMegaMenuOpen}
                aria-haspopup="true"
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon",
                  isMegaMenuOpen || isShopActive
                    ? "text-brand-maroon font-bold bg-brand-maroon/5"
                    : "text-text-primary hover:text-brand-maroon hover:bg-surface-canvas/60"
                )}
              >
                <span>Shop</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    isMegaMenuOpen && "rotate-180 text-brand-maroon"
                  )}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* South Indian Classics Link */}
            <Link
              href="/collections/south-indian"
              className={cn(
                "rounded-lg px-3.5 py-2 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon",
                pathname === "/collections/south-indian"
                  ? "text-brand-forest font-bold bg-brand-forest/5"
                  : "text-text-primary hover:text-brand-forest hover:bg-surface-canvas/60"
              )}
            >
              South Indian
            </Link>

            {/* North Indian Favourites Link */}
            <Link
              href="/collections/north-indian"
              className={cn(
                "rounded-lg px-3.5 py-2 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon",
                pathname === "/collections/north-indian"
                  ? "text-brand-maroon font-bold bg-brand-maroon/5"
                  : "text-text-primary hover:text-brand-maroon hover:bg-surface-canvas/60"
              )}
            >
              North Indian
            </Link>

            {/* Gift Boxes Link */}
            <Link
              href="/gift-boxes"
              className={cn(
                "rounded-lg px-3.5 py-2 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon",
                pathname === "/gift-boxes"
                  ? "text-brand-maroon font-bold bg-brand-maroon/5"
                  : "text-text-primary hover:text-brand-maroon hover:bg-surface-canvas/60"
              )}
            >
              Gift Boxes
            </Link>

            {/* Combos Link */}
            <Link
              href="/combos"
              className={cn(
                "rounded-lg px-3.5 py-2 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon",
                pathname === "/combos"
                  ? "text-brand-maroon font-bold bg-brand-maroon/5"
                  : "text-text-primary hover:text-brand-maroon hover:bg-surface-canvas/60"
              )}
            >
              Combos
            </Link>

            {/* About Us Link */}
            <Link
              href="/about"
              className={cn(
                "rounded-lg px-3.5 py-2 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon",
                pathname === "/about"
                  ? "text-brand-maroon font-bold bg-brand-maroon/5"
                  : "text-text-primary hover:text-brand-maroon hover:bg-surface-canvas/60"
              )}
            >
              About
            </Link>
          </nav>

          {/* RIGHT: Utility Icons (Search, Account, Wishlist, Cart) */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Search Access */}
            <Link
              href="/search"
              aria-label="Search snacks"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary transition-colors hover:text-brand-maroon hover:bg-surface-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon"
            >
              <Search className="h-5 w-5" />
            </Link>

            {/* Account Link (Desktop only) */}
            <Link
              href="/account"
              aria-label="My Customer Account"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-lg text-text-primary transition-colors hover:text-brand-maroon hover:bg-surface-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon"
            >
              <User className="h-5 w-5" />
            </Link>

            {/* Wishlist Link (Desktop only) */}
            <Link
              href="/wishlist"
              aria-label="My Wishlist"
              className="hidden sm:flex relative h-10 w-10 items-center justify-center rounded-lg text-text-primary transition-colors hover:text-brand-terracotta hover:bg-surface-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon"
            >
              <Heart className="h-5 w-5" />
              {wishlistItemCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-terracotta text-[10px] font-bold text-text-inverse">
                  {wishlistItemCount}
                </span>
              )}
            </Link>

            {/* Shopping Cart Button with Live Count and Drawer Trigger */}
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open shopping cart with ${displayCartCount} items`}
              className="relative flex h-10 w-10 items-center justify-center rounded-lg text-text-primary transition-colors hover:text-brand-maroon hover:bg-surface-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon cursor-pointer"
            >
              <ShoppingBag className="h-5 w-5" />
              {displayCartCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-maroon text-[10px] font-bold text-text-inverse shadow-xs">
                  {displayCartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* 3. Mega Menu Dropdown */}
        <MegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
          triggerRef={shopTriggerRef}
        />
      </div>

      {/* 4. Mobile Drawer Shell */}
      <MobileNavDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      />
    </header>
  );
}

