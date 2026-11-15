import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Lock, ShieldCheck, EyeOff, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | KRAK & CO.",
  description:
    "Learn how KRAK & CO. collects, safeguards, and respects your personal and payment information.",
};

export default function PrivacyPolicyPage() {
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
            <li className="font-semibold text-[#7A1C1C]">Privacy Policy</li>
          </ol>
        </nav>

        {/* Hero Card */}
        <div className="rounded-3xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-8 sm:p-12 shadow-md mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#285F49]/15 px-3.5 py-1 text-xs font-bold text-[#285F49] mb-4">
            <Lock className="h-4 w-4" />
            256-BIT SSL ENCRYPTION
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1917]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1C1917]/75 leading-relaxed">
            At KRAK & CO. Foodworks Private Limited, your privacy is as sacred to us as our 100% Zero Palm Oil standard. We never sell, monetize, or lease your personal data to third parties.
          </p>
        </div>

        {/* Policy Body */}
        <div className="rounded-3xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-8 sm:p-10 shadow-md space-y-8 text-sm text-[#1C1917]/85 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you browse our storefront, register for an account, or order snack batches, we collect minimal necessary details:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs sm:text-sm">
              <li><strong>Contact Information</strong>: Name, delivery address, phone number, and email address for order fulfillment.</li>
              <li><strong>Transaction Data</strong>: Order items, payment reference IDs, and billing preferences (we do not store raw card numbers or CVVs).</li>
              <li><strong>Device & Browsing Info</strong>: IP address, device type, and cookies used to remember your cart items across browsing sessions.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              2. How Your Information is Utilized
            </h2>
            <p>We use collected data solely to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm">
              <li>Process and roast your orders and arrange doorstep express delivery.</li>
              <li>Send critical dispatch notifications and live tracking links via SMS/WhatsApp.</li>
              <li>Offer customer support through our Coimbatore kitchen desk.</li>
              <li>Send occasional festive discounts and new recipe drops (only if you opted in).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              3. Payment Security & PCI-DSS Compliance
            </h2>
            <p>
              All payments on KRAK & CO. are processed through RBI-authorized, PCI-DSS Level 1 compliant payment gateways (Razorpay / Cashfree). Your sensitive credit/debit card numbers and banking credentials never touch our servers.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              4. Cookies & Local Storage
            </h2>
            <p>
              We use functional session cookies to maintain your active shopping cart items, keep you signed in to your account dashboard, and remember your regional snack preferences. You can clear cookies in your browser settings at any time without restricting your ability to browse our store.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              5. Grievance Officer & Contact
            </h2>
            <p>
              In accordance with the Information Technology Act 2000 and rules made thereunder, the contact details of our Grievance Officer are:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-[#FFF8EE] border border-[#7A1C1C]/15 text-xs">
              <p><strong>Grievance Officer:</strong> R. Soundararajan</p>
              <p><strong>Company:</strong> KRAK & CO. Foodworks Private Limited</p>
              <p><strong>Address:</strong> Plot 42, Kongu Heritage Food Park, Avinashi Road, Coimbatore – 641014</p>
              <p><strong>Email:</strong> privacy@krakandco.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
