"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Truck, 
  Search, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  Package, 
  Sparkles, 
  AlertCircle,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/components/feedback/Toast";

interface TrackingCheckpoint {
  time: string;
  status: string;
  location: string;
  completed: boolean;
}

export default function TrackOrderPage() {
  const { showToast } = useToast();
  const [orderId, setOrderId] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkpoints: TrackingCheckpoint[] = [
    {
      time: "15 Nov 2026, 08:30 AM",
      status: "Out for Delivery",
      location: "Bengaluru South Hub • Rider: Rajesh K.",
      completed: true,
    },
    {
      time: "15 Nov 2026, 04:15 AM",
      status: "Arrived at Destination Hub",
      location: "Bengaluru Logistics Terminal",
      completed: true,
    },
    {
      time: "14 Nov 2026, 06:00 PM",
      status: "Dispatched via Express Air",
      location: "Coimbatore Airport Transit Hub",
      completed: true,
    },
    {
      time: "14 Nov 2026, 09:30 AM",
      status: "Kettle-Fried & Nitrogen Packed",
      location: "KRAK & CO. Roastery Kitchens, Coimbatore",
      completed: true,
    },
    {
      time: "13 Nov 2026, 02:45 PM",
      status: "Order Confirmed & Payment Verified",
      location: "Online Storefront",
      completed: true,
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) {
      showToast({
        type: "error",
        title: "Order ID Required",
        description: "Please enter your KRAK order number (e.g. KRAK-78291).",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSearched(true);
      showToast({
        type: "success",
        title: "Live Tracking Located",
        description: `Tracking info retrieved for order #${orderId.toUpperCase()}`,
      });
    }, 600);
  };

  const handleDemoFill = () => {
    setOrderId("KRAK-78291");
    setPhoneOrEmail("9876543210");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSearched(true);
      showToast({
        type: "info",
        title: "Demo Tracking Loaded",
        description: "Viewing active delivery status for #KRAK-78291.",
      });
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#FFF8EE] py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#1C1917]/60">
            <li>
              <Link href="/" className="hover:text-[#7A1C1C]">Home</Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#7A1C1C]">Track Order</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E6AC2A]/20 px-3.5 py-1 text-xs font-bold text-[#7A1C1C] mb-3">
            <Truck className="h-3.5 w-3.5 text-[#E6AC2A]" />
            Live Kitchen-to-Doorstep Tracking
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1917]">
            Track Your Snack Shipment
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1C1917]/75 max-w-2xl mx-auto">
            Follow your freshly kettle-fried snacks every kilometre from our kitchen kadai in Coimbatore directly to your doorstep.
          </p>
        </div>

        {/* Demo Pill */}
        <div className="mb-6 text-center">
          <button
            type="button"
            onClick={handleDemoFill}
            className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-[#E6AC2A] bg-[#E6AC2A]/10 px-4 py-2 text-xs font-bold text-[#7A1C1C] hover:bg-[#E6AC2A]/20 transition-colors"
          >
            <Sparkles className="h-4 w-4 text-[#E6AC2A]" />
            <span>Load Demo Order: <strong>#KRAK-78291</strong> (Out for Delivery)</span>
          </button>
        </div>

        {/* Search Card */}
        <div className="rounded-3xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-6 sm:p-8 shadow-md mb-8">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                Order ID *
              </label>
              <div className="relative">
                <Package className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1917]/40" />
                <input
                  type="text"
                  required
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="e.g. KRAK-78291"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs font-mono text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                Mobile Number or Email
              </label>
              <input
                type="text"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                placeholder="e.g. 9876543210 or email"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
              />
            </div>

            <div className="sm:col-span-1 flex items-end">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 px-4 rounded-xl bg-[#7A1C1C] text-[#FFF8EE] font-serif text-xs font-bold hover:bg-[#5C1515] transition-all shadow-sm active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-1.5"
              >
                <Search className="h-3.5 w-3.5" />
                <span>{isLoading ? "Searching..." : "Track"}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Live Tracking Result View */}
        {isSearched && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Status Banner */}
            <div className="rounded-2xl border-2 border-[#285F49]/30 bg-[#285F49]/10 p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#285F49] px-3 py-1 text-xs font-bold text-white">
                      <Truck className="h-3.5 w-3.5 animate-bounce" />
                      Out for Delivery
                    </span>
                    <span className="text-xs font-bold text-[#1C1917]">
                      Expected Delivery: Today, by 7:00 PM
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1917] mt-2">
                    Package #{orderId.toUpperCase()}
                  </h3>
                  <p className="text-xs text-[#1C1917]/70">
                    Carrier: Delhivery Express • AWB Tracking Number:{" "}
                    <span className="font-mono font-bold text-[#7A1C1C]">DEL9821448820</span>
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-2 text-right">
                  <span className="text-xs text-[#1C1917]/60">Delivery Partner</span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1C1917]">
                    <Phone className="h-3.5 w-3.5 text-[#285F49]" />
                    <span>Rajesh K. (+91 98401 22334)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline checkpoints */}
            <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-6 sm:p-8 shadow-sm">
              <h4 className="font-serif text-base font-bold text-[#1C1917] mb-6">
                Shipment Transit History
              </h4>

              <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#285F49]/30">
                {checkpoints.map((cp, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle icon */}
                    <div className="absolute -left-[19px] sm:-left-[27px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#285F49] text-white ring-4 ring-[#FFFDF8]">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="font-serif text-sm font-bold text-[#1C1917]">
                          {cp.status}
                        </span>
                        <span className="text-[11px] text-[#1C1917]/60 font-mono">
                          {cp.time}
                        </span>
                      </div>
                      <p className="text-xs text-[#1C1917]/70 mt-0.5 flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-[#7A1C1C] shrink-0" />
                        <span>{cp.location}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support reassurance */}
            <div className="rounded-2xl border border-[#7A1C1C]/15 bg-[#FFF8EE] p-5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <p className="text-xs font-bold text-[#1C1917]">Having issues with this shipment?</p>
                <p className="text-[11px] text-[#1C1917]/70">
                  Our Coimbatore support desk can contact Delhivery dispatch directly on your behalf.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#7A1C1C] px-4 py-2 text-xs font-bold text-[#FFF8EE] hover:bg-[#5C1515] transition-colors shrink-0"
              >
                <span>Contact Support</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
