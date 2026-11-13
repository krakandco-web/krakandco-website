/**
 * KRAK & CO. — Cart Calculation & Service Abstraction
 */
import { Cart, CartItem, ShippingRate } from "@/types";

export const DEFAULT_SHIPPING_RATES: ShippingRate[] = [
  {
    id: "standard",
    name: "Standard Pan-India Delivery",
    description: "3–5 Business Days",
    amount: 49,
    estimatedDays: "3–5 Days",
    isFreeThresholdEligible: true,
  },
  {
    id: "express",
    name: "Express Air Delivery",
    description: "1–2 Business Days (Metro Cities)",
    amount: 99,
    estimatedDays: "1–2 Days",
    isFreeThresholdEligible: false,
  },
];

export const FREE_SHIPPING_THRESHOLD = 499;

export function calculateCart(items: CartItem[], shippingRateId: "standard" | "express" = "standard"): Cart {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const isFreeShippingUnlocked = subtotal >= FREE_SHIPPING_THRESHOLD;
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const selectedShippingRate =
    DEFAULT_SHIPPING_RATES.find((rate) => rate.id === shippingRateId) || DEFAULT_SHIPPING_RATES[0];

  const shippingTotal = isFreeShippingUnlocked && selectedShippingRate.isFreeThresholdEligible ? 0 : selectedShippingRate.amount;
  const taxTotal = 0; // Prices are inclusive of GST
  const grandTotal = subtotal + shippingTotal;

  return {
    id: "cart_active",
    items,
    itemCount,
    subtotal,
    discountTotal: 0,
    selectedShippingRate,
    shippingTotal,
    taxTotal,
    grandTotal,
    currency: "INR",
    freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
    freeShippingRemaining,
    isFreeShippingUnlocked,
  };
}

