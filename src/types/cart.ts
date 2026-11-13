/**
 * KRAK & CO. — Shopping Cart & Line Item TypeScript Contracts
 */
import { Product, ProductVariant } from "./product";

export interface CartItem {
  id: string; // Unique compound id: `${productId}_${variantId}`
  productId: string;
  variantId: string;
  product: Pick<Product, "id" | "slug" | "name" | "thumbnailUrl" | "primaryCategory" | "region">;
  variant: ProductVariant;
  quantity: number;
  itemPrice: number; // Unit price
  lineTotal: number; // itemPrice * quantity
}

export interface ShippingRate {
  id: "standard" | "express";
  name: string;
  description: string;
  amount: number;
  estimatedDays: string;
  isFreeThresholdEligible: boolean;
}

export interface Cart {
  id: string;
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  discountTotal: number;
  couponCode?: string;
  selectedShippingRate?: ShippingRate;
  shippingTotal: number;
  taxTotal: number;
  grandTotal: number;
  currency: string;
  freeShippingThreshold: number;
  freeShippingRemaining: number;
  isFreeShippingUnlocked: boolean;
}

