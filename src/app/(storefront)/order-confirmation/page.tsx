import Link from "next/link";
import { CheckCircle2, PackageCheck, Truck, ArrowRight, ShieldCheck, MapPin, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmed — KRAK & CO.",
  description: "Thank you for your order! Your authentic Indian snacks are being freshly packed.",
};

export default function OrderConfirmationPage() {
  const orderId = "KRAK-78291";

  return (
    <div className="w-full bg-surface-canvas min-h-screen py-10 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Success Card */}
        <div className="rounded-3xl border border-surface-sand bg-surface-card p-6 sm:p-10 text-center space-y-5 shadow-xs">
          <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-brand-forest/15 text-brand-forest">
            <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 stroke-[2.2]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-forest">
              Order Confirmed & Payment Received
            </span>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-text-primary">
              Thank You for Your Order!
            </h1>
            <p className="font-sans text-xs sm:text-sm text-text-secondary max-w-lg mx-auto leading-relaxed">
              We&apos;re preparing your freshly kettle-fried snacks. A confirmation SMS and email have been sent with tracking details.
            </p>
          </div>

          {/* Order Details Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-surface-canvas border border-surface-sand/80 px-6 py-3.5 text-xs font-medium">
            <div>
              <span className="text-text-muted block">Order Reference:</span>
              <span className="font-bold text-brand-maroon font-mono text-sm">{orderId}</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-surface-sand" />
            <div>
              <span className="text-text-muted block">Estimated Delivery:</span>
              <span className="font-bold text-text-primary">3–5 Business Days</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-surface-sand" />
            <div>
              <span className="text-text-muted block">Payment Status:</span>
              <span className="font-bold text-brand-forest">Paid via UPI</span>
            </div>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="rounded-3xl border border-surface-sand bg-surface-card p-6 sm:p-8 space-y-6 shadow-xs">
          <h2 className="font-display text-base font-bold text-text-primary border-b border-surface-sand pb-3 flex items-center gap-2">
            <Truck className="h-4 w-4 text-brand-maroon" />
            <span>Fulfillment Progress</span>
          </h2>

          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            <div className="space-y-2">
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-brand-forest text-text-inverse">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span className="font-bold text-brand-forest block">Confirmed</span>
              <span className="text-[10px] text-text-muted hidden sm:block">Just now</span>
            </div>

            <div className="space-y-2">
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-brand-maroon text-text-inverse animate-pulse">
                <PackageCheck className="h-4 w-4" />
              </div>
              <span className="font-bold text-brand-maroon block">Packing</span>
              <span className="text-[10px] text-text-muted hidden sm:block">Fresh batch</span>
            </div>

            <div className="space-y-2 opacity-60">
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-surface-sand text-text-secondary">
                <Truck className="h-4 w-4" />
              </div>
              <span className="font-bold text-text-secondary block">In Transit</span>
              <span className="text-[10px] text-text-muted hidden sm:block">Air courier</span>
            </div>

            <div className="space-y-2 opacity-60">
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-surface-sand text-text-secondary">
                <MapPin className="h-4 w-4" />
              </div>
              <span className="font-bold text-text-secondary block">Delivered</span>
              <span className="text-[10px] text-text-muted hidden sm:block">Coimbatore</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/track-order"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-maroon px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-text-inverse shadow-sm hover:bg-brand-maroon-dark transition-all"
          >
            <span>Track Live Shipment</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-surface-sand bg-surface-card px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-text-primary hover:border-brand-maroon transition-all"
          >
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
