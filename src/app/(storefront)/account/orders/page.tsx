"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Package, 
  Truck, 
  Search, 
  CheckCircle2, 
  Clock, 
  RotateCcw, 
  ChevronRight, 
  FileText 
} from "lucide-react";
import { AccountNav } from "@/components/account/AccountNav";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/feedback/Toast";
import { MOCK_PRODUCTS } from "@/data/mock";

interface MockOrderItem {
  id: string;
  name: string;
  pack: string;
  price: number;
  quantity: number;
  image: string;
  slug: string;
}

interface MockOrder {
  orderId: string;
  date: string;
  total: number;
  status: "In Transit" | "Delivered";
  carrier: string;
  trackingNumber: string;
  items: MockOrderItem[];
}

const mockOrders: MockOrder[] = [
  {
    orderId: "KRAK-78291",
    date: "13 Nov 2026",
    total: 278,
    status: "In Transit",
    carrier: "Delhivery Express",
    trackingNumber: "DEL9821448820",
    items: [
      {
        id: "kerala-banana-chips",
        name: "Kerala Banana Chips (Cold-Pressed Coconut Oil)",
        pack: "250g Pouch",
        price: 149,
        quantity: 1,
        image: "/assets/products/kerala-banana-chips.svg",
        slug: "kerala-banana-chips",
      },
      {
        id: "madurai-mixture",
        name: "Madurai Special Spicy Mixture",
        pack: "250g Pouch",
        price: 129,
        quantity: 1,
        image: "/assets/products/madurai-mixture.svg",
        slug: "madurai-mixture",
      },
    ],
  },
  {
    orderId: "KRAK-65410",
    date: "28 Oct 2026",
    total: 476,
    status: "Delivered",
    carrier: "BlueDart Express",
    trackingNumber: "BD88412093",
    items: [
      {
        id: "bikaneri-aloo-bhujia",
        name: "Bikaneri Aloo Bhujia (Desi Ghee Crunch)",
        pack: "200g Pouch",
        price: 139,
        quantity: 2,
        image: "/assets/products/bikaneri-aloo-bhujia.svg",
        slug: "bikaneri-aloo-bhujia",
      },
      {
        id: "bombay-gourmet-mixture",
        name: "Bombay Gourmet Chivda Mixture",
        pack: "250g Pouch",
        price: 149,
        quantity: 1,
        image: "/assets/products/bombay-gourmet-mixture.svg",
        slug: "bombay-gourmet-mixture",
      },
    ],
  },
  {
    orderId: "KRAK-54120",
    date: "15 Sep 2026",
    total: 899,
    status: "Delivered",
    carrier: "Delhivery Air",
    trackingNumber: "DEL559100234",
    items: [
      {
        id: "diwali-royal-gift-box",
        name: "Royal Heritage Festive Snack Box (Gold Tin)",
        pack: "600g Gift Box",
        price: 899,
        quantity: 1,
        image: "/assets/products/kerala-banana-chips.svg",
        slug: "diwali-royal-gift-box",
      },
    ],
  },
  {
    orderId: "KRAK-41002",
    date: "02 Aug 2026",
    total: 398,
    status: "Delivered",
    carrier: "India Post Speed Post",
    trackingNumber: "SP4990123IN",
    items: [
      {
        id: "crispy-ragi-murukku",
        name: "Crispy Butter Ragi Murukku",
        pack: "200g Pouch",
        price: 139,
        quantity: 1,
        image: "/assets/products/kerala-banana-chips.svg",
        slug: "crispy-ragi-murukku",
      },
      {
        id: "madurai-mixture",
        name: "Madurai Special Spicy Mixture",
        pack: "500g Value Pack",
        price: 259,
        quantity: 1,
        image: "/assets/products/madurai-mixture.svg",
        slug: "madurai-mixture",
      },
    ],
  },
];

export default function AccountOrdersPage() {
  const [filter, setFilter] = useState<"ALL" | "ACTIVE" | "DELIVERED">("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem, openCart } = useCart();
  const { showToast } = useToast();

  const filteredOrders = mockOrders.filter((order) => {
    if (filter === "ACTIVE" && order.status !== "In Transit") return false;
    if (filter === "DELIVERED" && order.status !== "Delivered") return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesId = order.orderId.toLowerCase().includes(q);
      const matchesItem = order.items.some((item) =>
        item.name.toLowerCase().includes(q)
      );
      return matchesId || matchesItem;
    }
    return true;
  });

  const handleReorder = (order: MockOrder) => {
    order.items.forEach((item) => {
      const prod = MOCK_PRODUCTS.find((p) => p.slug === item.slug) || MOCK_PRODUCTS[0];
      if (prod && prod.variants[0]) {
        addItem(prod, prod.variants[0], item.quantity);
      }
    });

    showToast({
      type: "success",
      title: "Order Re-added to Cart",
      description: `${order.items.length} snacks from #${order.orderId} are ready in your cart!`,
    });
    openCart();
  };

  const handleDownloadInvoice = (orderId: string) => {
    showToast({
      type: "info",
      title: "Generating GST Invoice",
      description: `Downloading tax invoice for ${orderId}...`,
    });
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
            <li className="font-semibold text-[#7A1C1C]">My Orders</li>
          </ol>
        </nav>

        {/* Dashboard Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          <AccountNav />

          {/* Main Area */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                Order History
              </h1>
              <p className="mt-1 text-sm text-[#1C1917]/70">
                Track live snack dispatches, download tax invoices, and reorder favourite batches.
              </p>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-4 shadow-sm">
              {/* Filter Tabs */}
              <div className="flex rounded-xl bg-[#FFF8EE] p-1 border border-[#7A1C1C]/10">
                <button
                  type="button"
                  onClick={() => setFilter("ALL")}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    filter === "ALL"
                      ? "bg-[#7A1C1C] text-[#FFF8EE] shadow-sm"
                      : "text-[#1C1917]/70 hover:text-[#7A1C1C]"
                  }`}
                >
                  All ({mockOrders.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilter("ACTIVE")}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    filter === "ACTIVE"
                      ? "bg-[#7A1C1C] text-[#FFF8EE] shadow-sm"
                      : "text-[#1C1917]/70 hover:text-[#7A1C1C]"
                  }`}
                >
                  Active (1)
                </button>
                <button
                  type="button"
                  onClick={() => setFilter("DELIVERED")}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    filter === "DELIVERED"
                      ? "bg-[#7A1C1C] text-[#FFF8EE] shadow-sm"
                      : "text-[#1C1917]/70 hover:text-[#7A1C1C]"
                  }`}
                >
                  Delivered (3)
                </button>
              </div>

              {/* Search input */}
              <div className="relative min-w-[240px]">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1917]/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by order ID or snack..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                />
              </div>
            </div>

            {/* Orders List */}
            {filteredOrders.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-[#7A1C1C]/20 bg-[#FFFDF8] p-12 text-center">
                <Package className="mx-auto h-12 w-12 text-[#1C1917]/30" />
                <h3 className="mt-3 font-serif text-lg font-bold text-[#1C1917]">
                  No matching orders found
                </h3>
                <p className="mt-1 text-xs text-[#1C1917]/60">
                  Try clearing your search query or switching filters.
                </p>
                <button
                  type="button"
                  onClick={() => { setFilter("ALL"); setSearchQuery(""); }}
                  className="mt-4 inline-flex items-center rounded-xl bg-[#7A1C1C] px-4 py-2 text-xs font-bold text-[#FFF8EE]"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredOrders.map((order) => {
                  const isInTransit = order.status === "In Transit";

                  return (
                    <div
                      key={order.orderId}
                      className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 sm:p-6 shadow-sm hover:border-[#7A1C1C]/30 transition-all"
                    >
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#7A1C1C]/10">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-base font-bold text-[#1C1917]">
                              {order.orderId}
                            </span>
                            <span
                              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${
                                isInTransit
                                  ? "bg-[#285F49]/15 text-[#285F49]"
                                  : "bg-[#7A1C1C]/10 text-[#7A1C1C]"
                              }`}
                            >
                              {isInTransit ? (
                                <Truck className="h-3 w-3" />
                              ) : (
                                <CheckCircle2 className="h-3 w-3" />
                              )}
                              {order.status}
                            </span>
                          </div>
                          <p className="text-xs text-[#1C1917]/60 mt-0.5">
                            Ordered on {order.date} • Total: <span className="font-bold text-[#1C1917]">₹{order.total}</span>
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleDownloadInvoice(order.orderId)}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] px-3 py-1.5 text-xs font-semibold text-[#1C1917] hover:bg-[#FFF8EE]/80"
                            title="Download GST Invoice"
                          >
                            <FileText className="h-3.5 w-3.5 text-[#7A1C1C]" />
                            <span className="hidden sm:inline">Invoice</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleReorder(order)}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-[#7A1C1C] px-3 py-1.5 text-xs font-bold text-[#7A1C1C] hover:bg-[#7A1C1C] hover:text-[#FFF8EE] transition-colors"
                          >
                            <RotateCcw className="h-3.5 w-3.5" />
                            <span>Reorder</span>
                          </button>

                          <Link
                            href={`/account/orders/${order.orderId}`}
                            className="inline-flex items-center gap-1 rounded-xl bg-[#7A1C1C] px-3 py-1.5 text-xs font-bold text-[#FFF8EE] hover:bg-[#5C1515] transition-colors"
                          >
                            <span>Details</span>
                            <ChevronRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="mt-4 divide-y divide-[#7A1C1C]/5">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center justify-between py-3">
                            <div className="flex items-center gap-3">
                              <div className="relative h-12 w-12 shrink-0 rounded-lg overflow-hidden bg-white p-1 border border-[#7A1C1C]/15">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <div>
                                <h4 className="font-serif text-xs font-bold text-[#1C1917]">
                                  {item.name}
                                </h4>
                                <p className="text-[11px] text-[#1C1917]/60">
                                  {item.pack} • Qty: {item.quantity}
                                </p>
                              </div>
                            </div>
                            <span className="text-xs font-bold text-[#7A1C1C]">
                              ₹{item.price * item.quantity}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Courier & Tracking Footer */}
                      <div className="mt-4 pt-3 border-t border-[#7A1C1C]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#1C1917]/70 gap-2">
                        <div className="flex items-center gap-1.5">
                          <Truck className="h-3.5 w-3.5 text-[#285F49]" />
                          <span>
                            {order.carrier} • Tracking:{" "}
                            <span className="font-mono font-semibold text-[#1C1917]">
                              {order.trackingNumber}
                            </span>
                          </span>
                        </div>
                        <Link
                          href={`/account/orders/${order.orderId}`}
                          className="font-bold text-[#7A1C1C] hover:underline"
                        >
                          View Tracking Timeline →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
