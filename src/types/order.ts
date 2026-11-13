/**
 * KRAK & CO. — Order & Shipment Tracking TypeScript Contracts
 */
import { CartItem, ShippingRate } from "./cart";
import { Address } from "./customer";

export type OrderPaymentStatus = "Pending" | "Paid" | "Failed" | "Refunded";
export type OrderFulfillmentStatus = "Placed" | "Packed" | "Shipped" | "OutForDelivery" | "Delivered" | "Cancelled";
export type PaymentMethod = "UPI" | "CreditCard" | "DebitCard" | "Netbanking" | "COD";

export interface ShipmentMilestone {
  stage: OrderFulfillmentStatus;
  label: string;
  description: string;
  timestamp: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

export interface Order {
  id: string; // e.g. "KRAK-8492"
  orderNumber: string;
  createdAt: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: Address;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  shippingOption: ShippingRate;
  tax: number;
  total: number;
  paymentMethod: PaymentMethod;
  paymentStatus: OrderPaymentStatus;
  fulfillmentStatus: OrderFulfillmentStatus;
  courierName?: string;
  trackingNumber?: string;
  estimatedDeliveryDate?: string;
  milestones: ShipmentMilestone[];
}
