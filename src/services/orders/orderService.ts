/**
 * KRAK & CO. — Order & Shipment Tracking Service Abstraction
 */
import { Order } from "@/types";

export interface IOrderService {
  getOrderById(orderId: string): Promise<Order | null>;
  trackOrder(orderId: string, phoneOrEmail?: string): Promise<Order | null>;
}

class OrderService implements IOrderService {
  async getOrderById(orderId: string): Promise<Order | null> {
    if (!orderId) return null;
    return {
      id: orderId,
      orderNumber: orderId.toUpperCase(),
      createdAt: "2026-10-29T10:24:00Z",
      customerEmail: "dhyanesh@example.com",
      customerPhone: "+919876543210",
      shippingAddress: {
        id: "addr_1",
        fullName: "Dhyanesh Kumar",
        phone: "+919876543210",
        addressLine1: "123, Shivanandha Colony",
        city: "Coimbatore",
        state: "Tamil Nadu",
        postalCode: "641004",
        country: "India",
        addressType: "Home",
        isDefault: true,
      },
      items: [],
      subtotal: 427,
      discount: 0,
      shippingFee: 49,
      shippingOption: {
        id: "standard",
        name: "Standard Pan-India Delivery",
        description: "3–5 Days",
        amount: 49,
        estimatedDays: "3–5 Days",
        isFreeThresholdEligible: true,
      },
      tax: 0,
      total: 476,
      paymentMethod: "UPI",
      paymentStatus: "Paid",
      fulfillmentStatus: "Shipped",
      courierName: "BlueDart Express",
      trackingNumber: "BD98234821IN",
      estimatedDeliveryDate: "Nov 02, 2026",
      milestones: [
        { stage: "Placed", label: "Order Placed", description: "Payment confirmed via UPI", timestamp: "Oct 29, 10:24 AM", isCompleted: true, isCurrent: false },
        { stage: "Packed", label: "Packed & Freshness Sealed", description: "Packed in triple-layer nitrogen pouch", timestamp: "Oct 29, 04:15 PM", isCompleted: true, isCurrent: false },
        { stage: "Shipped", label: "Shipped with BlueDart", description: "Tracking # BD98234821IN", timestamp: "Oct 30, 11:10 AM", isCompleted: true, isCurrent: true },
        { stage: "OutForDelivery", label: "Out for Delivery", description: "Delivery partner assigned", timestamp: "Pending", isCompleted: false, isCurrent: false },
        { stage: "Delivered", label: "Delivered to Doorstep", description: "Enjoy the crunch!", timestamp: "Pending", isCompleted: false, isCurrent: false },
      ],
    };
  }

  async trackOrder(orderId: string, phoneOrEmail?: string): Promise<Order | null> {
    return this.getOrderById(orderId);
  }
}

export const orderService = new OrderService();
