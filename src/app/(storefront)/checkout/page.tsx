"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Truck,
  CreditCard,
  Lock,
  ArrowRight,
  Edit2,
  Plus,
  ShoppingBag,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { useToast } from "@/components/feedback/Toast";

interface Address {
  id: string;
  type: string;
  recipientName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

const DEFAULT_ADDRESSES: Address[] = [
  {
    id: "addr_1",
    type: "Home",
    recipientName: "Aditi Rao",
    phone: "+91 98765 43210",
    street: "123, Shivanandha Colony",
    city: "Coimbatore",
    state: "Tamil Nadu",
    postalCode: "641004",
  },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart, setShippingRate } = useCart();
  const { showToast } = useToast();

  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [selectedAddressId, setSelectedAddressId] = useState<string>("addr_1");
  const [deliveryOption, setDeliveryOption] = useState<"standard" | "express">("standard");
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking" | "wallet">("upi");
  const [upiId, setUpiId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Address edit / add modal state
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [addresses, setAddresses] = useState<Address[]>(DEFAULT_ADDRESSES);
  const [newStreet, setNewStreet] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newState, setNewState] = useState("");
  const [newPin, setNewPin] = useState("");

  const selectedAddress = addresses.find((a) => a.id === selectedAddressId) || addresses[0];

  const handleDeliveryOptionChange = (option: "standard" | "express") => {
    setDeliveryOption(option);
    setShippingRate(option);
  };

  const handleAddNewAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStreet || !newCity || !newPin) {
      showToast({
        type: "error",
        title: "Required Fields",
        description: "Please fill in street, city and pin code.",
      });
      return;
    }

    const newAddr: Address = {
      id: `addr_${Date.now()}`,
      type: "Home",
      recipientName: "Aditi Rao",
      phone: "+91 98765 43210",
      street: newStreet,
      city: newCity,
      state: newState || "Tamil Nadu",
      postalCode: newPin,
    };

    setAddresses((prev) => [...prev, newAddr]);
    setSelectedAddressId(newAddr.id);
    setIsAddingAddress(false);
    setNewStreet("");
    setNewCity("");
    setNewPin("");
    showToast({
      type: "success",
      title: "Address Saved",
      description: `${newAddr.street}, ${newAddr.city}`,
    });
  };

  const handleCompleteOrder = () => {
    setIsProcessing(true);
    showToast({
      type: "info",
      title: "Processing Payment...",
      description: "Securely connecting to banking gateway.",
    });

    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      router.push("/order-confirmation");
    }, 1500);
  };

  if (cart.items.length === 0 && !isProcessing) {
    return (
      <div className="w-full bg-surface-canvas min-h-[70vh] flex items-center justify-center p-4">
        <div className="rounded-3xl border border-surface-sand bg-surface-card p-10 text-center max-w-md mx-auto space-y-4 shadow-xs">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-surface-sand/60 text-text-muted">
            <ShoppingBag className="h-7 w-7" />
          </div>
          <h1 className="font-display text-xl font-bold text-text-primary">
            No snacks to checkout!
          </h1>
          <p className="text-xs text-text-muted">
            Your cart is currently empty. Add your favorite South and North Indian snacks first.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-maroon px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-text-inverse"
          >
            <span>Explore Snacks</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-surface-canvas min-h-screen py-6 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header & Stepper */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-surface-sand pb-4">
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-text-primary">
              Checkout
            </h1>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-forest">
              <Lock className="h-3.5 w-3.5" />
              <span>256-Bit SSL Encrypted</span>
            </div>
          </div>

          {/* Stepper matching reference manual: 1 Address -> 2 Payment -> 3 Confirm */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 pt-2 text-xs font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2 text-brand-maroon">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-maroon text-text-inverse text-[11px]">
                1
              </span>
              <span>Address</span>
            </div>
            <div className="h-0.5 w-8 sm:w-16 bg-brand-maroon" />
            <div className="flex items-center gap-2 text-text-muted">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-sand text-text-secondary text-[11px]">
                2
              </span>
              <span>Payment</span>
            </div>
            <div className="h-0.5 w-8 sm:w-16 bg-surface-sand" />
            <div className="flex items-center gap-2 text-text-muted">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-sand text-text-secondary text-[11px]">
                3
              </span>
              <span>Confirm</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Forms (7 cols) + Order Summary (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Checkout Forms */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. DELIVERY ADDRESS SECTION */}
            <div className="rounded-3xl border border-surface-sand bg-surface-card p-5 sm:p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-surface-sand pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-maroon" />
                  <h2 className="font-display text-base font-bold text-text-primary">
                    Delivery Address
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAddingAddress(!isAddingAddress)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-maroon hover:text-brand-maroon-dark transition-colors"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add New Address</span>
                </button>
              </div>

              {/* Saved Address Card (matching Column 5 in manual) */}
              <div className="space-y-3">
                {addresses.map((addr) => (
                  <label
                    key={addr.id}
                    className={`flex items-start justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedAddressId === addr.id
                        ? "border-brand-maroon bg-brand-maroon/5 shadow-xs"
                        : "border-surface-sand bg-surface-canvas/40"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="address"
                        checked={selectedAddressId === addr.id}
                        onChange={() => setSelectedAddressId(addr.id)}
                        className="mt-1 accent-brand-maroon"
                      />
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs sm:text-sm text-text-primary">
                            {addr.type}
                          </span>
                          <span className="text-[11px] text-text-muted">
                            ({addr.recipientName})
                          </span>
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {addr.street}, {addr.city} – {addr.postalCode}
                        </p>
                        <p className="text-xs text-text-muted">Phone: {addr.phone}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsAddingAddress(true)}
                      className="text-xs font-semibold text-brand-maroon hover:underline flex items-center gap-1 pt-1"
                    >
                      <Edit2 className="h-3 w-3" />
                      <span>Edit</span>
                    </button>
                  </label>
                ))}
              </div>

              {/* Add Address Form Accordion */}
              {isAddingAddress && (
                <form
                  onSubmit={handleAddNewAddress}
                  className="rounded-2xl border border-surface-sand bg-surface-canvas p-4 space-y-3 mt-3 text-xs"
                >
                  <h3 className="font-bold text-text-primary">Enter New Delivery Address</h3>
                  <div>
                    <label className="text-text-muted font-medium">Flat / House No. / Street</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 123, Shivanandha Colony"
                      value={newStreet}
                      onChange={(e) => setNewStreet(e.target.value)}
                      className="w-full mt-1 rounded-xl border border-surface-sand bg-surface-card px-3 py-2 text-xs focus:border-brand-maroon focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-text-muted font-medium">City</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Coimbatore"
                        value={newCity}
                        onChange={(e) => setNewCity(e.target.value)}
                        className="w-full mt-1 rounded-xl border border-surface-sand bg-surface-card px-3 py-2 text-xs focus:border-brand-maroon focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-text-muted font-medium">PIN Code</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 641004"
                        value={newPin}
                        onChange={(e) => setNewPin(e.target.value)}
                        className="w-full mt-1 rounded-xl border border-surface-sand bg-surface-card px-3 py-2 text-xs focus:border-brand-maroon focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 pt-1">
                    <button
                      type="submit"
                      className="rounded-xl bg-brand-maroon px-4 py-2 text-xs font-bold uppercase tracking-wider text-text-inverse"
                    >
                      Save & Use
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAddingAddress(false)}
                      className="rounded-xl border border-surface-sand px-3 py-2 text-xs font-semibold text-text-muted"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* 2. DELIVERY OPTIONS SECTION (matching Column 5 in manual) */}
            <div className="rounded-3xl border border-surface-sand bg-surface-card p-5 sm:p-6 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 border-b border-surface-sand pb-3">
                <Truck className="h-4 w-4 text-brand-maroon" />
                <h2 className="font-display text-base font-bold text-text-primary">
                  Delivery Options
                </h2>
              </div>

              <div className="space-y-3">
                {/* Standard Delivery */}
                <label
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    deliveryOption === "standard"
                      ? "border-brand-maroon bg-brand-maroon/5 shadow-xs"
                      : "border-surface-sand bg-surface-canvas/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="delivery"
                      checked={deliveryOption === "standard"}
                      onChange={() => handleDeliveryOptionChange("standard")}
                      className="accent-brand-maroon"
                    />
                    <div>
                      <span className="font-bold text-xs sm:text-sm text-text-primary block">
                        Standard Delivery (3–5 days)
                      </span>
                      <span className="text-[11px] text-text-muted">
                        Pan-India surface courier network
                      </span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-brand-maroon font-mono">
                    {cart.isFreeShippingUnlocked ? "FREE" : "₹49"}
                  </span>
                </label>

                {/* Express Delivery */}
                <label
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    deliveryOption === "express"
                      ? "border-brand-maroon bg-brand-maroon/5 shadow-xs"
                      : "border-surface-sand bg-surface-canvas/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="delivery"
                      checked={deliveryOption === "express"}
                      onChange={() => handleDeliveryOptionChange("express")}
                      className="accent-brand-maroon"
                    />
                    <div>
                      <span className="font-bold text-xs sm:text-sm text-text-primary block">
                        Express Delivery (1–2 days)
                      </span>
                      <span className="text-[11px] text-text-muted">
                        Priority air dispatch for metro cities
                      </span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-brand-maroon font-mono">
                    ₹99
                  </span>
                </label>
              </div>
            </div>

            {/* 3. PAYMENT METHOD SECTION (matching Column 5 in manual) */}
            <div className="rounded-3xl border border-surface-sand bg-surface-card p-5 sm:p-6 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 border-b border-surface-sand pb-3">
                <CreditCard className="h-4 w-4 text-brand-maroon" />
                <h2 className="font-display text-base font-bold text-text-primary">
                  Payment Method
                </h2>
              </div>

              <div className="space-y-3">
                {/* UPI (Recommended) */}
                <label
                  className={`flex flex-col p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "upi"
                      ? "border-brand-maroon bg-brand-maroon/5 shadow-xs"
                      : "border-surface-sand bg-surface-canvas/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "upi"}
                        onChange={() => setPaymentMethod("upi")}
                        className="accent-brand-maroon"
                      />
                      <div>
                        <span className="font-bold text-xs sm:text-sm text-text-primary block">
                          UPI (Recommended)
                        </span>
                        <span className="text-[11px] text-text-muted">
                          Google Pay, PhonePe, Paytm, BHIM
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-brand-forest bg-brand-forest/10 px-2 py-0.5 rounded">
                      Fastest
                    </span>
                  </div>

                  {paymentMethod === "upi" && (
                    <div className="mt-3 pt-3 border-t border-surface-sand/80 space-y-2">
                      <input
                        type="text"
                        placeholder="Enter your UPI ID (e.g. mobile@upi)"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className="w-full rounded-xl border border-surface-sand bg-surface-card px-3.5 py-2 text-xs focus:border-brand-maroon focus:outline-none"
                      />
                    </div>
                  )}
                </label>

                {/* Credit / Debit Card */}
                <label
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "card"
                      ? "border-brand-maroon bg-brand-maroon/5 shadow-xs"
                      : "border-surface-sand bg-surface-canvas/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="accent-brand-maroon"
                    />
                    <div>
                      <span className="font-bold text-xs sm:text-sm text-text-primary block">
                        Credit / Debit Card
                      </span>
                      <span className="text-[11px] text-text-muted">
                        Visa, Mastercard, RuPay, Amex
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-text-muted">Cards</span>
                </label>

                {/* Netbanking */}
                <label
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "netbanking"
                      ? "border-brand-maroon bg-brand-maroon/5 shadow-xs"
                      : "border-surface-sand bg-surface-canvas/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "netbanking"}
                      onChange={() => setPaymentMethod("netbanking")}
                      className="accent-brand-maroon"
                    />
                    <span className="font-bold text-xs sm:text-sm text-text-primary">
                      Netbanking
                    </span>
                  </div>
                  <span className="text-[11px] text-text-muted">All Indian Banks</span>
                </label>

                {/* Wallets */}
                <label
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "wallet"
                      ? "border-brand-maroon bg-brand-maroon/5 shadow-xs"
                      : "border-surface-sand bg-surface-canvas/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "wallet"}
                      onChange={() => setPaymentMethod("wallet")}
                      className="accent-brand-maroon"
                    />
                    <span className="font-bold text-xs sm:text-sm text-text-primary">
                      Wallets (Paytm, PhonePe, Mobikwik)
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Order Review & Pay Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-surface-sand bg-surface-card p-6 space-y-6 shadow-xs sticky top-24">
              <h2 className="font-display text-lg font-bold text-text-primary border-b border-surface-sand pb-3">
                Order Review ({cart.itemCount} items)
              </h2>

              {/* Items List Mini View */}
              <div className="space-y-3 max-h-60 overflow-y-auto divide-y divide-surface-sand/60 pr-1">
                {cart.items.map((item) => (
                  <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative h-12 w-12 shrink-0 rounded-xl border border-surface-sand bg-surface-canvas p-1">
                        <Image
                          src={item.product.thumbnailUrl}
                          alt={item.product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-text-primary truncate">
                          {item.product.name}
                        </p>
                        <p className="text-[11px] text-text-muted">
                          {item.quantity}x {item.variant.packSize}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-brand-maroon font-mono shrink-0">
                      {formatPrice(item.lineTotal)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Delivery To Address Summary */}
              <div className="p-3 rounded-2xl bg-surface-canvas border border-surface-sand/80 text-xs space-y-1">
                <span className="font-bold text-text-primary">Delivering to:</span>
                <p className="text-text-muted">
                  {selectedAddress.street}, {selectedAddress.city} – {selectedAddress.postalCode}
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 text-xs border-t border-surface-sand pt-4">
                <div className="flex justify-between text-text-secondary">
                  <span>Subtotal</span>
                  <span className="font-semibold text-text-primary">{formatPrice(cart.subtotal)}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-text-primary">
                    {cart.shippingTotal === 0 ? (
                      <span className="text-brand-forest font-bold">FREE</span>
                    ) : (
                      formatPrice(cart.shippingTotal)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-text-primary border-t border-surface-sand pt-3">
                  <span>Total Amount</span>
                  <span className="text-lg text-brand-maroon font-display">
                    {formatPrice(cart.grandTotal)}
                  </span>
                </div>
              </div>

              {/* Pay Button (matching exact button in manual: "Pay ₹476 ->") */}
              <button
                type="button"
                disabled={isProcessing}
                onClick={handleCompleteOrder}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-maroon py-3.5 text-sm font-bold uppercase tracking-wider text-text-inverse shadow-md hover:bg-brand-maroon-dark active:scale-98 transition-all disabled:opacity-75 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon"
              >
                {isProcessing ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Pay {formatPrice(cart.grandTotal)}</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <div className="space-y-2 text-[11px] text-text-muted text-center pt-2">
                <div className="flex items-center justify-center gap-1.5 text-brand-forest font-semibold">
                  <ShieldCheck className="h-4 w-4" />
                  <span>100% Secure Checkout Guarantee</span>
                </div>
                <p>By placing order you agree to our Terms & Privacy Policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
