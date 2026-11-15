"use client";

import React, { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import StorefrontHomePage from "@/app/(storefront)/page";

export default function CartDrawerPreview() {
  const { openCart } = useCart();

  useEffect(() => {
    openCart();
  }, [openCart]);

  return (
    <div className="relative min-h-screen">
      <div className="p-8 max-w-xl mx-auto text-center space-y-4 pt-20">
        <h1 className="text-xl font-bold">Cart Drawer Preview Page</h1>
        <p className="text-sm text-text-muted">The cart drawer should automatically open on the right.</p>
        <button
          onClick={openCart}
          className="rounded-xl bg-brand-maroon px-5 py-2.5 text-xs font-bold text-white uppercase tracking-wider"
        >
          Open Cart Drawer
        </button>
      </div>
    </div>
  );
}
