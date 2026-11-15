"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Package, 
  MapPin, 
  Heart, 
  Truck, 
  ArrowRight, 
  RotateCcw, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { AccountNav } from "@/components/account/AccountNav";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/feedback/Toast";
import { MOCK_PRODUCTS } from "@/data/mock";

export default function AccountDashboardPage() {
  const { addItem, openCart } = useCart();
  const { showToast } = useToast();

  const handleQuickReorder = () => {
    const p1 = MOCK_PRODUCTS.find((p) => p.slug === "kerala-banana-chips") || MOCK_PRODUCTS[0];
    const p2 = MOCK_PRODUCTS.find((p) => p.slug === "madurai-mixture") || MOCK_PRODUCTS[1];

    if (p1 && p1.variants[0]) addItem(p1, p1.variants[0], 1);
    if (p2 && p2.variants[0]) addItem(p2, p2.variants[0], 1);

    showToast({
      type: "success",
      title: "Order Items Added!",
      description: "2 snacks from order #KRAK-78291 added to your cart.",
    });
    openCart();
  };

  return (
    <div className="min-h-screen bg-[#FFF8EE] py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#1C1917]/60">
            <li>
              <Link href="/" className="hover:text-[#7A1C1C]">Home</Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#7A1C1C]">My Account</li>
          </ol>
        </nav>

        {/* Dashboard Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <AccountNav />

          {/* Main Content Area */}
          <div className="flex-1 space-y-6">
            {/* Welcome Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#7A1C1C] to-[#5C1515] p-6 sm:p-8 text-[#FFF8EE] shadow-md border-2 border-[#E6AC2A]/30">
              <div className="relative z-10 max-w-xl">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E6AC2A]/20 px-3 py-1 text-xs font-bold text-[#E6AC2A] mb-3">
                  <Sparkles className="h-3.5 w-3.5" />
                  KRAK Snacking Club • Gold Tier
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl font-black">
                  Namaste, Aditi!
                </h1>
                <p className="mt-2 text-sm text-[#FFF8EE]/85 leading-relaxed">
                  Welcome to your snack headquarters. You have{" "}
                  <span className="font-bold text-[#E6AC2A]">1 package in transit</span>{" "}
                  fresh from our kitchen roasters and scheduled for delivery today.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/account/orders/KRAK-78291"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#E6AC2A] px-4 py-2.5 text-xs font-bold text-[#7A1C1C] hover:bg-[#d69d20] transition-colors shadow-sm"
                  >
                    <Truck className="h-4 w-4" />
                    <span>Track Shipment</span>
                  </Link>
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#FFF8EE]/15 px-4 py-2.5 text-xs font-bold text-[#FFF8EE] hover:bg-[#FFF8EE]/25 transition-colors border border-[#FFF8EE]/20"
                  >
                    <span>Browse All Snacks</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Decorative Background Glow */}
              <div className="absolute -right-8 -bottom-8 h-48 w-48 rounded-full bg-[#E6AC2A]/15 blur-2xl pointer-events-none" />
            </div>

            {/* Stat Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Link
                href="/account/orders"
                className="group rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-4 shadow-sm hover:border-[#7A1C1C] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#1C1917]/70">Orders</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7A1C1C]/10 text-[#7A1C1C] group-hover:bg-[#7A1C1C] group-hover:text-[#FFF8EE] transition-colors">
                    <Package className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-3 font-serif text-2xl font-black text-[#1C1917]">4</p>
                <p className="text-[11px] text-[#285F49] font-medium mt-0.5">1 Active Delivery</p>
              </Link>

              <Link
                href="/account/orders/KRAK-78291"
                className="group rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-4 shadow-sm hover:border-[#7A1C1C] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#1C1917]/70">Tracking</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#285F49]/10 text-[#285F49] group-hover:bg-[#285F49] group-hover:text-[#FFF8EE] transition-colors">
                    <Truck className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-3 font-serif text-2xl font-black text-[#285F49]">Out for Delivery</p>
                <p className="text-[11px] text-[#1C1917]/60 font-medium mt-0.5">Arriving by 7 PM</p>
              </Link>

              <Link
                href="/account/addresses"
                className="group rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-4 shadow-sm hover:border-[#7A1C1C] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#1C1917]/70">Addresses</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E6AC2A]/15 text-[#7A1C1C] group-hover:bg-[#E6AC2A] transition-colors">
                    <MapPin className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-3 font-serif text-2xl font-black text-[#1C1917]">2</p>
                <p className="text-[11px] text-[#1C1917]/60 font-medium mt-0.5">Home & Office</p>
              </Link>

              <Link
                href="/wishlist"
                className="group rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-4 shadow-sm hover:border-[#7A1C1C] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#1C1917]/70">Wishlist</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Heart className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-3 font-serif text-2xl font-black text-[#1C1917]">3</p>
                <p className="text-[11px] text-[#1C1917]/60 font-medium mt-0.5">Saved Snacks</p>
              </Link>
            </div>

            {/* Active Order Spotlight */}
            <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#7A1C1C]/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#1C1917]/60">ACTIVE SHIPMENT</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#285F49]/15 px-2.5 py-0.5 text-xs font-bold text-[#285F49]">
                      <CheckCircle2 className="h-3 w-3" />
                      Out for Delivery
                    </span>
                  </div>
                  <h3 className="mt-1 font-serif text-lg font-bold text-[#1C1917]">
                    Order #KRAK-78291
                  </h3>
                  <p className="text-xs text-[#1C1917]/60">Placed on Nov 13, 2026 • 2 Items • ₹278</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleQuickReorder}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#7A1C1C] px-3.5 py-2 text-xs font-bold text-[#7A1C1C] hover:bg-[#7A1C1C] hover:text-[#FFF8EE] transition-colors"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Quick Reorder</span>
                  </button>
                  <Link
                    href="/account/orders/KRAK-78291"
                    className="inline-flex items-center gap-1 rounded-xl bg-[#7A1C1C] px-3.5 py-2 text-xs font-bold text-[#FFF8EE] hover:bg-[#5C1515] transition-colors"
                  >
                    <span>View Order</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Items in active order */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF8EE] border border-[#7A1C1C]/10">
                  <div className="relative h-14 w-14 shrink-0 rounded-lg overflow-hidden bg-white p-1 border border-[#7A1C1C]/15">
                    <Image
                      src="/assets/products/kerala-banana-chips.svg"
                      alt="Kerala Banana Chips"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-serif text-xs font-bold text-[#1C1917] truncate">
                      Kerala Banana Chips (Coconut Oil)
                    </h4>
                    <p className="text-[11px] text-[#1C1917]/60">250g Pouch • Qty: 1</p>
                    <p className="text-xs font-bold text-[#7A1C1C]">₹149</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF8EE] border border-[#7A1C1C]/10">
                  <div className="relative h-14 w-14 shrink-0 rounded-lg overflow-hidden bg-white p-1 border border-[#7A1C1C]/15">
                    <Image
                      src="/assets/products/madurai-mixture.svg"
                      alt="Madurai Special Spicy Mixture"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-serif text-xs font-bold text-[#1C1917] truncate">
                      Madurai Special Spicy Mixture
                    </h4>
                    <p className="text-[11px] text-[#1C1917]/60">250g Pouch • Qty: 1</p>
                    <p className="text-xs font-bold text-[#7A1C1C]">₹129</p>
                  </div>
                </div>
              </div>

              {/* Delivery Progress Bar */}
              <div className="mt-5 pt-4 border-t border-[#7A1C1C]/10">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-[#1C1917]">Carrier: Delhivery Express</span>
                  <span className="font-mono text-[#7A1C1C] font-semibold">AWB: DEL9821448820</span>
                </div>
                <div className="w-full bg-[#FFF8EE] rounded-full h-2.5 overflow-hidden border border-[#7A1C1C]/20">
                  <div className="bg-[#285F49] h-full rounded-full w-3/4 transition-all duration-500" />
                </div>
                <p className="text-[11px] text-[#1C1917]/70 mt-1.5 flex items-center gap-1">
                  <Truck className="h-3 w-3 text-[#285F49]" />
                  Package with local courier in Bengaluru. Delivering today by 7:00 PM.
                </p>
              </div>
            </div>

            {/* Quick Settings & Help Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="h-5 w-5 text-[#285F49]" />
                  <h3 className="font-serif text-sm font-bold text-[#1C1917]">
                    KRAK Freshness Promise
                  </h3>
                </div>
                <p className="text-xs text-[#1C1917]/70 leading-relaxed">
                  Every snack batch is kettle-fried within 7 days of shipment. If anything arrives less than 100% crispy, we replace it instantly.
                </p>
                <Link
                  href="/returns-policy"
                  className="mt-3 inline-block text-xs font-bold text-[#7A1C1C] hover:underline"
                >
                  Read Freshness Guarantee →
                </Link>
              </div>

              <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-[#E6AC2A]" />
                  <h3 className="font-serif text-sm font-bold text-[#1C1917]">
                    Default Delivery Address
                  </h3>
                </div>
                <p className="text-xs text-[#1C1917]/70 leading-relaxed truncate">
                  123, Shivanandha Colony, Coimbatore, Tamil Nadu – 641004
                </p>
                <Link
                  href="/account/addresses"
                  className="mt-3 inline-block text-xs font-bold text-[#7A1C1C] hover:underline"
                >
                  Manage Saved Addresses →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
