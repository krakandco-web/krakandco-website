import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Truck, ShieldCheck, Clock, MapPin, PackageCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | KRAK & CO.",
  description:
    "Learn about KRAK & CO. Pan-India shipping timelines, free delivery threshold, and freshness packaging.",
};

export default function ShippingPolicyPage() {
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
            <li className="font-semibold text-[#7A1C1C]">Shipping & Delivery Policy</li>
          </ol>
        </nav>

        {/* Hero Card */}
        <div className="rounded-3xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-8 sm:p-12 shadow-md mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E6AC2A]/20 px-3.5 py-1 text-xs font-bold text-[#7A1C1C] mb-4">
            <Truck className="h-4 w-4 text-[#E6AC2A]" />
            PAN-INDIA KITCHEN DISPATCH
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1917]">
            Shipping & Delivery Policy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1C1917]/75 leading-relaxed">
            Every order at KRAK & CO. is roasted, kettle-fried, and packed in fresh small batches at our central facility in Coimbatore, Tamil Nadu, before being dispatched to snack lovers across India.
          </p>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 shadow-sm">
            <Clock className="h-6 w-6 text-[#7A1C1C] mb-2" />
            <h3 className="font-serif text-sm font-bold text-[#1C1917]">24-Hour Dispatch</h3>
            <p className="text-xs text-[#1C1917]/70 mt-1">Orders leave our kitchen within 24 hours of roasting.</p>
          </div>
          <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 shadow-sm">
            <PackageCheck className="h-6 w-6 text-[#285F49] mb-2" />
            <h3 className="font-serif text-sm font-bold text-[#1C1917]">Free Above ₹499</h3>
            <p className="text-xs text-[#1C1917]/70 mt-1">Complimentary standard delivery on all qualifying orders.</p>
          </div>
          <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 shadow-sm">
            <ShieldCheck className="h-6 w-6 text-[#E6AC2A] mb-2" />
            <h3 className="font-serif text-sm font-bold text-[#1C1917]">Nitrogen Sealed</h3>
            <p className="text-xs text-[#1C1917]/70 mt-1">Flushed with food-grade N2 to preserve crispness in transit.</p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="rounded-3xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-8 sm:p-10 shadow-md space-y-8 text-sm text-[#1C1917]/85 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              1. Delivery Timelines & Regions
            </h2>
            <p>
              We partner with India&apos;s leading express logistics providers—including Delhivery, BlueDart, and India Post Speed Post—to ensure your snacks arrive fresh and undamaged.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs sm:text-sm">
              <li><strong>South India Metro Cities</strong> (Bengaluru, Chennai, Hyderabad, Kochi, Coimbatore): <strong>1 to 2 business days</strong>.</li>
              <li><strong>Other Major Metros</strong> (Mumbai, Delhi NCR, Pune, Kolkata, Ahmedabad): <strong>2 to 3 business days</strong>.</li>
              <li><strong>Tier-2 & Tier-3 Cities & Pan-India Rest of Regions</strong>: <strong>3 to 5 business days</strong>.</li>
              <li><strong>Remote / Northeast / Island Territories</strong>: <strong>5 to 7 business days</strong>.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              2. Shipping Charges & Free Delivery Threshold
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#7A1C1C]/20 bg-[#FFF8EE] text-left">
                    <th className="py-2.5 px-3 font-serif font-bold text-[#1C1917]">Order Value</th>
                    <th className="py-2.5 px-3 font-serif font-bold text-[#1C1917]">Shipping Rate</th>
                    <th className="py-2.5 px-3 font-serif font-bold text-[#1C1917]">Carrier Service</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#7A1C1C]/10">
                  <tr>
                    <td className="py-2.5 px-3">Orders of ₹499 and above</td>
                    <td className="py-2.5 px-3 font-bold text-[#285F49]">FREE Shipping</td>
                    <td className="py-2.5 px-3">Standard Express Surface / Air</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3">Orders below ₹499</td>
                    <td className="py-2.5 px-3 font-bold text-[#7A1C1C]">₹49 Flat Fee</td>
                    <td className="py-2.5 px-3">Standard Express Surface</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3">Priority Next-Day Air (Metros only)</td>
                    <td className="py-2.5 px-3 font-bold text-[#7A1C1C]">₹99 Flat Fee</td>
                    <td className="py-2.5 px-3">BlueDart Express Air</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              3. Order Tracking & Real-Time Alerts
            </h2>
            <p>
              Once your package leaves our Coimbatore facility, an SMS and Email notification containing your Delhivery/BlueDart Airway Bill (AWB) number and live tracking link will be sent to your registered contact. You can also monitor your live shipment at any time through our dedicated{" "}
              <Link href="/track-order" className="font-bold text-[#7A1C1C] underline">
                Order Tracking Portal
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              4. Damaged or Crushed Packages
            </h2>
            <p>
              Snacks are delicate. Although we package them in corrugated cartons with bubble cushioning, rough courier transit can occasionally cause issues. If you receive an outer package that is visibly crushed or opened, please take a quick picture and reach out to{" "}
              <Link href="/contact" className="font-bold text-[#7A1C1C] underline">
                care@krakandco.com
              </Link>{" "}
              or message us on WhatsApp at <strong>+91 98400 12345</strong> within 48 hours. We will replace your snacks free of charge under our{" "}
              <Link href="/returns-policy" className="font-bold text-[#7A1C1C] underline">
                100% Freshness Guarantee
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
