"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { 
  CheckCircle2, 
  Clock, 
  Truck, 
  Package, 
  MapPin, 
  FileText, 
  ArrowLeft, 
  RotateCcw, 
  HelpCircle,
  ShieldCheck 
} from "lucide-react";
import { AccountNav } from "@/components/account/AccountNav";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/feedback/Toast";
import { MOCK_PRODUCTS } from "@/data/mock";

export default function OrderDetailPage() {
  const params = useParams();
  const orderId = (params?.orderId as string) || "KRAK-78291";
  const { addItem, openCart } = useCart();
  const { showToast } = useToast();

  const isDelivered = orderId === "KRAK-65410" || orderId === "KRAK-54120" || orderId === "KRAK-41002";

  const handleReorder = () => {
    const p1 = MOCK_PRODUCTS.find((p) => p.slug === "kerala-banana-chips") || MOCK_PRODUCTS[0];
    const p2 = MOCK_PRODUCTS.find((p) => p.slug === "madurai-mixture") || MOCK_PRODUCTS[1];

    if (p1 && p1.variants[0]) addItem(p1, p1.variants[0], 1);
    if (p2 && p2.variants[0]) addItem(p2, p2.variants[0], 1);

    showToast({
      type: "success",
      title: "Snacks Added to Cart",
      description: `Reordered items from #${orderId} into your cart!`,
    });
    openCart();
  };

  const handleDownloadInvoice = () => {
    showToast({
      type: "info",
      title: "Tax Invoice (GST)",
      description: `Preparing official GST tax invoice for #${orderId}...`,
    });
    setTimeout(() => {
      window.print();
    }, 500);
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
            <li>
              <Link href="/account" className="hover:text-[#7A1C1C]">My Account</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/account/orders" className="hover:text-[#7A1C1C]">Orders</Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#7A1C1C]">{orderId}</li>
          </ol>
        </nav>

        {/* Dashboard Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          <AccountNav />

          {/* Main Area */}
          <div className="flex-1 space-y-6">
            {/* Header with back button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <Link
                  href="/account/orders"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A1C1C] hover:underline mb-2"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to All Orders</span>
                </Link>
                <div className="flex items-center gap-3">
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                    Order #{orderId}
                  </h1>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${
                      isDelivered
                        ? "bg-[#7A1C1C]/10 text-[#7A1C1C]"
                        : "bg-[#285F49]/15 text-[#285F49]"
                    }`}
                  >
                    {isDelivered ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Truck className="h-3.5 w-3.5" />}
                    {isDelivered ? "Delivered" : "Out for Delivery"}
                  </span>
                </div>
                <p className="text-xs text-[#1C1917]/60 mt-1">
                  Placed on 13 November 2026, 02:45 PM • Paid via UPI
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownloadInvoice}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFFDF8] px-3.5 py-2 text-xs font-semibold text-[#1C1917] hover:bg-[#FFF8EE]"
                >
                  <FileText className="h-4 w-4 text-[#7A1C1C]" />
                  <span>Print Tax Invoice</span>
                </button>
                <button
                  type="button"
                  onClick={handleReorder}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#7A1C1C] px-3.5 py-2 text-xs font-bold text-[#FFF8EE] hover:bg-[#5C1515] transition-colors"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Reorder All</span>
                </button>
              </div>
            </div>

            {/* Tracking Progress Stepper Card */}
            <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-6 shadow-sm">
              <h3 className="font-serif text-base font-bold text-[#1C1917] mb-6 flex items-center justify-between">
                <span>Shipment Status</span>
                <span className="text-xs font-mono text-[#7A1C1C] font-normal">
                  Courier: Delhivery Express (AWB: DEL9821448820)
                </span>
              </h3>

              {/* 4-Step Stepper */}
              <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative">
                  {/* Step 1 */}
                  <div className="flex sm:flex-col items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#285F49] text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1C1917]">Order Placed</p>
                      <p className="text-[11px] text-[#1C1917]/60">13 Nov, 02:45 PM</p>
                      <p className="text-[11px] text-[#285F49] font-medium mt-0.5">Verified & Confirmed</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex sm:flex-col items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#285F49] text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1C1917]">Kettle Fried & Packed</p>
                      <p className="text-[11px] text-[#1C1917]/60">14 Nov, 09:30 AM</p>
                      <p className="text-[11px] text-[#285F49] font-medium mt-0.5">Coimbatore Kitchen</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex sm:flex-col items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#285F49] text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1C1917]">In Transit</p>
                      <p className="text-[11px] text-[#1C1917]/60">15 Nov, 04:15 AM</p>
                      <p className="text-[11px] text-[#285F49] font-medium mt-0.5">Arrived at Hub</p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex sm:flex-col items-start gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      isDelivered ? "bg-[#285F49] text-white" : "bg-[#E6AC2A] text-[#7A1C1C] animate-pulse"
                    }`}>
                      <Truck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1C1917]">
                        {isDelivered ? "Delivered" : "Out for Delivery"}
                      </p>
                      <p className="text-[11px] text-[#1C1917]/60">Expected Today, by 7 PM</p>
                      <p className="text-[11px] text-[#7A1C1C] font-semibold mt-0.5">With Delivery Partner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items & Summary Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Items List (2 cols) */}
              <div className="lg:col-span-2 rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-6 shadow-sm">
                <h3 className="font-serif text-base font-bold text-[#1C1917] mb-4">
                  Snacks in this Package (2 Items)
                </h3>
                <div className="divide-y divide-[#7A1C1C]/10">
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-16 w-16 shrink-0 rounded-xl overflow-hidden bg-white p-1 border border-[#7A1C1C]/15">
                        <Image
                          src="/assets/products/kerala-banana-chips.svg"
                          alt="Kerala Banana Chips"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <Link href="/products/kerala-banana-chips" className="font-serif text-sm font-bold text-[#1C1917] hover:text-[#7A1C1C]">
                          Kerala Banana Chips (Cold-Pressed Coconut Oil)
                        </Link>
                        <p className="text-xs text-[#1C1917]/60 mt-0.5">250g Pouch • Qty: 1</p>
                        <p className="text-[11px] text-[#285F49] font-medium mt-1">Zero Palm Oil • Vacuum Packed</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#7A1C1C]">₹149</span>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-16 w-16 shrink-0 rounded-xl overflow-hidden bg-white p-1 border border-[#7A1C1C]/15">
                        <Image
                          src="/assets/products/madurai-mixture.svg"
                          alt="Madurai Special Spicy Mixture"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <Link href="/products/madurai-mixture" className="font-serif text-sm font-bold text-[#1C1917] hover:text-[#7A1C1C]">
                          Madurai Special Spicy Mixture
                        </Link>
                        <p className="text-xs text-[#1C1917]/60 mt-0.5">250g Pouch • Qty: 1</p>
                        <p className="text-[11px] text-[#285F49] font-medium mt-1">Brass Kadai Roasted • Cashew Rich</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#7A1C1C]">₹129</span>
                  </div>
                </div>
              </div>

              {/* Sidebar (Order Breakdown & Delivery Address) */}
              <div className="space-y-6">
                {/* Price Breakdown */}
                <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 shadow-sm">
                  <h4 className="font-serif text-sm font-bold text-[#1C1917] mb-3">
                    Payment Breakdown
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-[#1C1917]/70">
                      <span>Item Subtotal (2 items)</span>
                      <span>₹278</span>
                    </div>
                    <div className="flex justify-between text-[#1C1917]/70">
                      <span>Standard Pan-India Shipping</span>
                      <span className="text-[#285F49] font-semibold">FREE (Promo)</span>
                    </div>
                    <div className="flex justify-between text-[#1C1917]/70">
                      <span>GST (Included)</span>
                      <span>₹13.24</span>
                    </div>
                    <div className="pt-2 border-t border-[#7A1C1C]/10 flex justify-between font-serif text-base font-bold text-[#7A1C1C]">
                      <span>Grand Total</span>
                      <span>₹278</span>
                    </div>
                  </div>
                  <div className="mt-3 text-[11px] text-[#1C1917]/60 text-center">
                    Paid via UPI ID • <span className="font-mono">aditi@oksbi</span>
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-[#7A1C1C]" />
                    <h4 className="font-serif text-sm font-bold text-[#1C1917]">
                      Delivering To
                    </h4>
                  </div>
                  <p className="text-xs font-semibold text-[#1C1917]">Aditi Rao</p>
                  <p className="text-xs text-[#1C1917]/70 mt-1 leading-relaxed">
                    123, Shivanandha Colony, Near Nilgiris Supermarket, Tatabad, Coimbatore, Tamil Nadu – 641004
                  </p>
                  <p className="text-xs text-[#1C1917]/70 mt-1">Phone: +91 98765 43210</p>
                </div>

                {/* Help Box */}
                <div className="rounded-2xl border border-[#7A1C1C]/15 bg-[#FFF8EE] p-4 text-center">
                  <HelpCircle className="h-5 w-5 mx-auto text-[#7A1C1C] mb-1.5" />
                  <p className="text-xs font-bold text-[#1C1917]">Need assistance with this order?</p>
                  <p className="text-[11px] text-[#1C1917]/70 mt-0.5">
                    Our team is available 9 AM - 8 PM daily.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-2 inline-block text-xs font-bold text-[#7A1C1C] hover:underline"
                  >
                    Contact Snack Care Support →
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
