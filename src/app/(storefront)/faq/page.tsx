"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  MessageSquare,
  ShieldCheck,
  Package,
  CreditCard,
  Gift
} from "lucide-react";

interface FAQItem {
  id: string;
  category: "ingredients" | "shipping" | "orders" | "gifting";
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  // Ingredients & Palm Oil
  {
    id: "oil-1",
    category: "ingredients",
    question: "Why does KRAK & CO. strictly avoid palm oil and palm olein?",
    answer:
      "Most commercial snack brands use cheap, highly refined palm olein to maximize industrial shelf life at the cost of authentic flavor and health. At KRAK & CO., we strictly kettle-fry in 100% Pure Cold-Pressed Coconut Oil (for our Kerala series), A2 Desi Cow Ghee (for our sweets & bhujia), and Wood-Pressed Groundnut Oil (for our savouries). This imparts an unmistakable clean aroma, zero oily heaviness, and preserves regional culinary traditions.",
  },
  {
    id: "oil-2",
    category: "ingredients",
    question: "Are your snacks 100% Vegetarian?",
    answer:
      "Yes, 100% of our products are certified vegetarian and carry the Green Vegetarian mark. We do not use any animal fats, gelatin, or non-veg additives. Our dairy components (like Desi Ghee in sweets and bhujia) are sourced from local farms in Tamil Nadu and Rajasthan.",
  },
  {
    id: "oil-3",
    category: "ingredients",
    question: "Do you add chemical preservatives, artificial colors or MSG?",
    answer:
      "Never. We never add artificial food colorings, tertiary butylhydroquinone (TBHQ), or monosodium glutamate (MSG). All colors in our snacks come from natural sun-dried Kashmiri chillies, Alleppey turmeric, and rock salt.",
  },

  // Shipping & Freshness
  {
    id: "ship-1",
    category: "shipping",
    question: "How long does Pan-India delivery take?",
    answer:
      "We dispatch all orders within 24 hours of batch roasting from our kitchens in Coimbatore. Deliveries to Metro cities (Bengaluru, Chennai, Mumbai, Delhi, Hyderabad) typically arrive within 2 to 3 business days. Non-metro and regional addresses take 3 to 5 business days.",
  },
  {
    id: "ship-2",
    category: "shipping",
    question: "How do you keep snacks crispy without preservatives during transit?",
    answer:
      "Every batch is packed in food-grade, multi-barrier pouches that undergo gentle 99.8% Nitrogen flushing. This completely removes oxygen inside the pouch, locking in crunch and aroma for up to 90 days without requiring any chemical preservatives.",
  },
  {
    id: "ship-3",
    category: "shipping",
    question: "What is your Free Shipping policy?",
    answer:
      "We offer 100% FREE Standard Pan-India Shipping on all orders above ₹499. For orders below ₹499, a flat nominal delivery fee of ₹49 is applied at checkout.",
  },

  // Orders & Refunds
  {
    id: "ord-1",
    category: "orders",
    question: "What is the KRAK 100% Freshness Guarantee?",
    answer:
      "If any packet arrives crushed, damaged, or less than 100% crispy, simply message us on WhatsApp (+91 98400 12345) or email care@krakandco.com with a photo within 48 hours of delivery. We will immediately dispatch a fresh replacement or issue an instant 100% refund.",
  },
  {
    id: "ord-2",
    category: "orders",
    question: "Can I cancel or modify my order after placing it?",
    answer:
      "You can cancel your order for a full instant refund within 2 hours of placing it, before our kitchen begins packing your batch. Once dispatched with our courier partner, orders cannot be cancelled mid-transit, but you may refuse delivery or request a replacement.",
  },
  {
    id: "ord-3",
    category: "orders",
    question: "Which payment methods are accepted?",
    answer:
      "We accept all major UPI apps (Google Pay, PhonePe, Paytm, CRED), Credit/Debit Cards (Visa, Mastercard, RuPay, Amex), Netbanking across 50+ Indian banks, and select digital wallets.",
  },

  // Gifting & Bulk
  {
    id: "gift-1",
    category: "gifting",
    question: "Can I order customized snack boxes for weddings or corporate events?",
    answer:
      "Yes! Our Festive Keepsake Hampers and Royal Gold Tins are popular for corporate gifting, Diwali, and wedding favors. We offer customized greeting cards, bespoke snack selections, and scheduled multi-city dispatches. Reach out to care@krakandco.com or message us on WhatsApp for bulk tier pricing.",
  },
  {
    id: "gift-2",
    category: "gifting",
    question: "Can I include a personalized gift note in my order?",
    answer:
      "Yes, during checkout in the Order Notes section, you can enter your custom message. We hand-write your greeting on a vintage gold-embossed KRAK & CO. card and tuck it safely inside the package at zero extra charge.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "oil-1": true,
    "ship-1": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFAQs = faqData.filter((item) => {
    if (activeCategory !== "all" && item.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FFF8EE] py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#1C1917]/60">
            <li>
              <Link href="/" className="hover:text-[#7A1C1C]">Home</Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#7A1C1C]">Frequently Asked Questions</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E6AC2A]/20 px-3.5 py-1 text-xs font-bold text-[#7A1C1C] mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#E6AC2A]" />
            Everything You Need to Know
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1917]">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1C1917]/75 max-w-2xl mx-auto">
            Got questions about our authentic recipes, 100% Zero Palm Oil kitchen practices, or shipping timelines? Find your answers below.
          </p>

          {/* Search Box */}
          <div className="mt-6 max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1917]/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keywords (e.g. coconut oil, shelf life, refund)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#7A1C1C]/20 bg-[#FFFDF8] text-sm text-[#1C1917] focus:outline-none focus:border-[#7A1C1C] shadow-xs"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: "all", label: "All Questions", icon: HelpCircle },
            { id: "ingredients", label: "Zero Palm Oil & Food", icon: ShieldCheck },
            { id: "shipping", label: "Shipping & Freshness", icon: Package },
            { id: "orders", label: "Orders & Refunds", icon: CreditCard },
            { id: "gifting", label: "Corporate Gifting", icon: Gift },
          ].map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? "bg-[#7A1C1C] text-[#FFF8EE] shadow-sm"
                    : "bg-[#FFFDF8] text-[#1C1917]/80 border border-[#7A1C1C]/15 hover:border-[#7A1C1C]"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? "text-[#E6AC2A]" : "text-[#7A1C1C]"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        {filteredFAQs.length === 0 ? (
          <div className="rounded-2xl border border-[#7A1C1C]/15 bg-[#FFFDF8] p-12 text-center">
            <HelpCircle className="mx-auto h-12 w-12 text-[#1C1917]/30" />
            <h3 className="mt-3 font-serif text-lg font-bold text-[#1C1917]">
              No questions matched your search
            </h3>
            <p className="mt-1 text-xs text-[#1C1917]/60">
              Try searching with different terms or reach out to our team directly.
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="mt-4 inline-flex items-center rounded-xl bg-[#7A1C1C] px-4 py-2 text-xs font-bold text-[#FFF8EE]"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFAQs.map((faq) => {
              const isOpen = !!openItems[faq.id];

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-[#7A1C1C]/15 bg-[#FFFDF8] overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-[#FFF8EE]/60"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-[#1C1917] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#7A1C1C] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#1C1917]/80 leading-relaxed border-t border-[#7A1C1C]/10 bg-[#FFFDF8]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Contact Helpline Callout */}
        <div className="mt-12 rounded-3xl border border-[#7A1C1C]/15 bg-gradient-to-r from-[#7A1C1C] to-[#5C1515] p-6 sm:p-8 text-center text-[#FFF8EE] shadow-sm">
          <h3 className="font-serif text-xl sm:text-2xl font-bold">
            Still Have Questions?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#FFF8EE]/80 max-w-md mx-auto">
            Our snack specialists are happy to help you with product details, allergen information, or order status.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#E6AC2A] px-5 py-2.5 text-xs font-bold text-[#7A1C1C] hover:bg-[#d69d20] transition-colors shadow-sm"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Contact Kitchen Support</span>
            </Link>
            <a
              href="https://wa.me/919840012345"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FFF8EE]/15 px-5 py-2.5 text-xs font-bold text-[#FFF8EE] hover:bg-[#FFF8EE]/25 transition-colors border border-[#FFF8EE]/20"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
