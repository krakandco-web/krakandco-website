import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { XCircle, Clock, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cancellation Policy | KRAK & CO.",
  description:
    "Review KRAK & CO.'s cancellation policies, pre-dispatch modification windows, and refund rules.",
};

export default function CancellationPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FFF8EE] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#1C1917]/60">
            <li>
              <Link href="/" className="hover:text-[#7A1C1C]">Home</Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#7A1C1C]">Cancellation Policy</li>
          </ol>
        </nav>

        {/* Hero Card */}
        <div className="rounded-3xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-8 sm:p-12 shadow-md mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#7A1C1C]/10 px-3.5 py-1 text-xs font-bold text-[#7A1C1C] mb-4">
            <XCircle className="h-4 w-4" />
            ORDER MANAGEMENT
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1917]">
            Cancellation Policy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1C1917]/75 leading-relaxed">
            Because our kitchens roast and kettle-fry snacks in small fresh batches, orders move quickly from our prep stations to express dispatch. Here is how order cancellations work.
          </p>
        </div>

        {/* Policy Body */}
        <div className="rounded-3xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-8 sm:p-10 shadow-md space-y-8 text-sm text-[#1C1917]/85 leading-relaxed">
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-5 w-5 text-[#7A1C1C]" />
              <h2 className="font-serif text-xl font-bold text-[#1C1917]">
                1. 2-Hour Pre-Dispatch Cancellation Window
              </h2>
            </div>
            <p>
              You may cancel any confirmed order within <strong>2 hours of placing it</strong> for a 100% instant refund. During this time, your batch has not yet entered our roasting and packing line.
            </p>
            <p className="mt-2">
              To cancel, simply visit your{" "}
              <Link href="/account/orders" className="font-bold text-[#7A1C1C] underline">
                Order Dashboard
              </Link>{" "}
              or message our WhatsApp care desk at <strong>+91 98400 12345</strong> with your Order ID.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="h-5 w-5 text-[#E6AC2A]" />
              <h2 className="font-serif text-xl font-bold text-[#1C1917]">
                2. Cancellations After 2 Hours & In-Transit Orders
              </h2>
            </div>
            <p>
              Once your snacks have been vacuum nitrogen packed and handed over to our courier partner (Delhivery / BlueDart), <strong>cancellations cannot be processed mid-transit</strong>.
            </p>
            <p className="mt-2">
              If you no longer need the package, you may decline acceptance at the time of doorstep delivery. Once the courier marks the shipment as Return to Origin (RTO), we will process your refund less any nominal return transit logistics charges.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              3. Modifying Shipping Address or Contact Details
            </h2>
            <p>
              Need to correct a typo in your street address or update your phone number? You can request address modifications up until the package leaves our Coimbatore hub (usually within 12 hours of order confirmation). Please ping us immediately on WhatsApp or email{" "}
              <a href="mailto:care@krakandco.com" className="font-bold text-[#7A1C1C] underline">
                care@krakandco.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              4. Automatic Cancellations by KRAK & CO.
            </h2>
            <p>
              In rare instances, KRAK & CO. reserves the right to cancel an order under the following conditions:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs sm:text-sm">
              <li>Incomplete or unserviceable delivery PIN code outside our logistics network.</li>
              <li>Sudden ingredient quality rejection during raw material inspection (e.g. unripened Nendran bananas or suboptimal spices).</li>
              <li>Suspected fraudulent transaction or duplicate order trigger.</li>
            </ul>
            <p className="mt-2">
              If we initiate a cancellation, you will receive an immediate full refund and a notification explaining the cause.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
