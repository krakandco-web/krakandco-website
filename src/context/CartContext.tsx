"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Cart, CartItem, Product, ProductVariant, ShippingRate } from "@/types";
import { calculateCart, DEFAULT_SHIPPING_RATES, FREE_SHIPPING_THRESHOLD } from "@/services/cart/cartService";
import { MOCK_PRODUCTS } from "@/data/mock/products";

interface CartContextType {
  cart: Cart;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  setShippingRate: (rateId: "standard" | "express") => void;
}

// Initial cart items matching the reference artboard manual:
// 1. Kerala Banana Chips (250g) - ₹149
// 2. Crispy Aloo Bhujia (250g) - ₹149
// 3. Madurai Special Mixture (250g) - ₹129
// Total Items: 3, Subtotal: ₹427, Shipping: ₹49, Grand Total: ₹476
const getInitialCartItems = (): CartItem[] => {
  const bananaChips = MOCK_PRODUCTS.find((p) => p.slug === "kerala-banana-chips");
  const alooBhujia = MOCK_PRODUCTS.find((p) => p.slug === "aloo-bhujia");
  const maduraiMixture = MOCK_PRODUCTS.find((p) => p.slug === "madurai-mixture");

  const items: CartItem[] = [];

  if (bananaChips) {
    const variant = bananaChips.variants.find((v) => v.packSize === "250g") || bananaChips.variants[0];
    items.push({
      id: `${bananaChips.id}_${variant.id}`,
      productId: bananaChips.id,
      variantId: variant.id,
      product: {
        id: bananaChips.id,
        slug: bananaChips.slug,
        name: bananaChips.name,
        thumbnailUrl: bananaChips.thumbnailUrl,
        primaryCategory: bananaChips.primaryCategory,
        region: bananaChips.region,
      },
      variant,
      quantity: 1,
      itemPrice: variant.price,
      lineTotal: variant.price,
    });
  }

  if (alooBhujia) {
    const variant = alooBhujia.variants.find((v) => v.packSize === "250g") || alooBhujia.variants[0];
    items.push({
      id: `${alooBhujia.id}_${variant.id}`,
      productId: alooBhujia.id,
      variantId: variant.id,
      product: {
        id: alooBhujia.id,
        slug: alooBhujia.slug,
        name: alooBhujia.name,
        thumbnailUrl: alooBhujia.thumbnailUrl,
        primaryCategory: alooBhujia.primaryCategory,
        region: alooBhujia.region,
      },
      variant,
      quantity: 1,
      itemPrice: variant.price,
      lineTotal: variant.price,
    });
  }

  if (maduraiMixture) {
    const variant = maduraiMixture.variants.find((v) => v.packSize === "250g") || maduraiMixture.variants[0];
    items.push({
      id: `${maduraiMixture.id}_${variant.id}`,
      productId: maduraiMixture.id,
      variantId: variant.id,
      product: {
        id: maduraiMixture.id,
        slug: maduraiMixture.slug,
        name: maduraiMixture.name,
        thumbnailUrl: maduraiMixture.thumbnailUrl,
        primaryCategory: maduraiMixture.primaryCategory,
        region: maduraiMixture.region,
      },
      variant,
      quantity: 1,
      itemPrice: variant.price,
      lineTotal: variant.price,
    });
  }

  return items;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(getInitialCartItems);
  const [shippingRateId, setShippingRateId] = useState<"standard" | "express">("standard");
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Recalculate cart whenever items or shipping rate changes
  const cart = calculateCart(items, shippingRateId);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const addItem = (product: Product, variant: ProductVariant, quantity: number = 1) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.productId === product.id && item.variantId === variant.id
      );

      if (existingIndex > -1) {
        const next = [...prevItems];
        const existing = next[existingIndex];
        const newQty = existing.quantity + quantity;
        next[existingIndex] = {
          ...existing,
          quantity: newQty,
          lineTotal: existing.itemPrice * newQty,
        };
        return next;
      }

      const newItem: CartItem = {
        id: `${product.id}_${variant.id}`,
        productId: product.id,
        variantId: variant.id,
        product: {
          id: product.id,
          slug: product.slug,
          name: product.name,
          thumbnailUrl: product.thumbnailUrl,
          primaryCategory: product.primaryCategory,
          region: product.region,
        },
        variant,
        quantity,
        itemPrice: variant.price,
        lineTotal: variant.price * quantity,
      };

      return [...prevItems, newItem];
    });

    // Auto-open drawer when adding an item
    setIsCartOpen(true);
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity,
              lineTotal: item.itemPrice * quantity,
            }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const setShippingRate = (rateId: "standard" | "express") => {
    setShippingRateId(rateId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        setShippingRate,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
