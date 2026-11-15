import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { FileText, Scale, ShieldCheck, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | KRAK & CO.",
  description:
    "Review the terms, conditions, and legal policies governing the KRAK & CO. storefront.",
};

export default function TermsPage() {
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
            <li className="font-semibold text-[#7A1C1C]">Terms of Service</li>
          </ol>
        </nav>

        {/* Hero Card */}
        <div className="rounded-3xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-8 sm:p-12 shadow-md mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E6AC2A]/20 px-3.5 py-1 text-xs font-bold text-[#7A1C1C] mb-4">
            <FileText className="h-4 w-4 text-[#E6AC2A]" />
            STOREFRONT LEGAL TERMS
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1917]">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1C1917]/75 leading-relaxed">
            Welcome to KRAK & CO. By accessing our website, creating an account, or purchasing our products, you agree to be bound by the following terms and conditions.
          </p>
        </div>

        {/* Policy Body */}
        <div className="rounded-3xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-8 sm:p-10 shadow-md space-y-8 text-sm text-[#1C1917]/85 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              1. General Acceptance
            </h2>
            <p>
              This website is operated by KRAK & CO. Foodworks Private Limited. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo;, and &ldquo;our&rdquo; refer to KRAK & CO. We offer this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              2. Product Descriptions & Artisanal Variation
            </h2>
            <p>
              All our snacks are crafted in traditional small batches using natural raw ingredients (including raw Kerala Nendran bananas, cold-pressed coconut oil, stone-ground urad dal, and pure desi ghee). Because we strictly avoid artificial food dyes and synthetic flavor chemicals, slight variations in natural color, chip thickness, and spice intensity may occur across harvest batches. This variation is a hallmark of authentic, artisanal food preparation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              3. Pricing, GST & Payment Accuracy
            </h2>
            <p>
              All prices displayed on the KRAK & CO. storefront are in Indian Rupees (INR) and are inclusive of Goods and Services Tax (GST) unless explicitly noted otherwise. We reserve the right to alter pricing, introduce seasonal discounts, or discontinue products without prior notice.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              4. Intellectual Property
            </h2>
            <p>
              The names &ldquo;KRAK&rdquo;, &ldquo;KRAK & CO.&rdquo;, our registered logos, custom illustrations, packaging artwork, website photography, copywriting, and visual design system are the exclusive property of KRAK & CO. Foodworks Private Limited and are protected under Indian and international copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts in Coimbatore, Tamil Nadu.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              6. Contact Information
            </h2>
            <p>
              Questions regarding these Terms of Service should be directed to our legal desk at{" "}
              <a href="mailto:legal@krakandco.com" className="font-bold text-[#7A1C1C] underline">
                legal@krakandco.com
              </a>{" "}
              or by writing to our registered office:
            </p>
            <p className="mt-2 text-xs text-[#1C1917]/70 font-sans">
              KRAK & CO. Foodworks Pvt. Ltd.<br />
              Plot 42, Kongu Heritage Food Park, Avinashi Road, Coimbatore – 641014
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
