import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ShieldCheck, RotateCcw, AlertCircle, HeartHandshake, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "100% Freshness Guarantee & Returns Policy | KRAK & CO.",
  description:
    "Discover KRAK & CO.'s 100% Crisp & Fresh Guarantee and hassle-free replacement policy.",
};

export default function ReturnsPolicyPage() {
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
            <li className="font-semibold text-[#7A1C1C]">Returns & Freshness Guarantee</li>
          </ol>
        </nav>

        {/* Hero Card */}
        <div className="rounded-3xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-8 sm:p-12 shadow-md mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#285F49]/15 px-3.5 py-1 text-xs font-bold text-[#285F49] mb-4">
            <ShieldCheck className="h-4 w-4" />
            100% CRISP & FRESH GUARANTEE
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1917]">
            Returns & Freshness Policy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1C1917]/75 leading-relaxed">
            We hold ourselves to an uncompromising standard. Every snack leaving our kitchen is made with zero palm oil, authentic cold-pressed oils, and freshly roasted spices. If your snack experience isn&apos;t 100% delightful, we&apos;ll make it right.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 shadow-sm">
            <HeartHandshake className="h-6 w-6 text-[#7A1C1C] mb-2" />
            <h3 className="font-serif text-sm font-bold text-[#1C1917]">Zero Friction</h3>
            <p className="text-xs text-[#1C1917]/70 mt-1">No complicated paperwork or return shipping of food items required.</p>
          </div>
          <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 shadow-sm">
            <CheckCircle2 className="h-6 w-6 text-[#285F49] mb-2" />
            <h3 className="font-serif text-sm font-bold text-[#1C1917]">48-Hour Window</h3>
            <p className="text-xs text-[#1C1917]/70 mt-1">Report any quality or packaging issue within 48 hours of delivery.</p>
          </div>
          <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 shadow-sm">
            <RotateCcw className="h-6 w-6 text-[#E6AC2A] mb-2" />
            <h3 className="font-serif text-sm font-bold text-[#1C1917]">Instant Redo</h3>
            <p className="text-xs text-[#1C1917]/70 mt-1">Free express replacement batch or 100% refund to original source.</p>
          </div>
        </div>

        {/* Policy Body */}
        <div className="rounded-3xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-8 sm:p-10 shadow-md space-y-8 text-sm text-[#1C1917]/85 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              1. Food Safety & Return Nature
            </h2>
            <p>
              As per Food Safety and Standards Authority of India (FSSAI) food hygiene regulations, edible food and snack products once delivered cannot be physically returned or resold. Therefore, <strong>we do not ask you to ship the snacks back to us</strong>. Instead, we offer immediate replacement or a complete refund.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              2. Eligible Situations for Replacement / Refund
            </h2>
            <p>We provide a 100% free replacement or refund under the following circumstances:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs sm:text-sm">
              <li><strong>Transit Damage</strong>: Pouch seal broken, deflated nitrogen vacuum, or crushed contents.</li>
              <li><strong>Quality Concern</strong>: Unpleasant aroma, unexpected staleness, or taste defects.</li>
              <li><strong>Incorrect Shipment</strong>: Received a different snack variant, size, or missing item from your invoice.</li>
              <li><strong>Expired Batch</strong>: Snack packet received with less than 30 days remaining before the Best Before date.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              3. How to Submit a Claim (3 Simple Steps)
            </h2>
            <ol className="list-decimal pl-5 mt-2 space-y-2 text-xs sm:text-sm">
              <li>
                Take a quick photo of the defective packet (showing the batch number and packaging issue).
              </li>
              <li>
                Send the photo along with your Order ID (e.g. <code>KRAK-78291</code>) to our WhatsApp support at{" "}
                <a href="https://wa.me/919840012345" className="font-bold text-[#285F49] underline">
                  +91 98400 12345
                </a>{" "}
                or email{" "}
                <a href="mailto:care@krakandco.com" className="font-bold text-[#7A1C1C] underline">
                  care@krakandco.com
                </a>
                .
              </li>
              <li>
                Our kitchen supervisor will review within 4 working hours and dispatch a replacement batch with priority express courier.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              4. Refund Processing Timelines
            </h2>
            <p>
              If you prefer a refund rather than a fresh replacement batch, the amount is automatically returned to your original payment method:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm">
              <li><strong>UPI (Google Pay, PhonePe, Paytm)</strong>: 2 to 4 business hours.</li>
              <li><strong>Credit / Debit Cards</strong>: 3 to 5 business days (depending on your bank).</li>
              <li><strong>Netbanking</strong>: 2 to 4 business days.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
