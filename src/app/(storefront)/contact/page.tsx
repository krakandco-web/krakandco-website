"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Send, 
  Sparkles,
  CheckCircle2,
  HelpCircle 
} from "lucide-react";
import { useToast } from "@/components/feedback/Toast";

export default function ContactPage() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderId: "",
    topic: "Order Status & Tracking",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast({
        type: "error",
        title: "Required Fields Missing",
        description: "Please enter your name, email, and message.",
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      showToast({
        type: "success",
        title: "Message Delivered to Kitchen Care!",
        description: "Ticket #KC-8841 created. Our team will reply within 4 hours.",
      });
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#FFF8EE] py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#1C1917]/60">
            <li>
              <Link href="/" className="hover:text-[#7A1C1C]">Home</Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#7A1C1C]">Contact & Care</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E6AC2A]/20 px-3.5 py-1 text-xs font-bold text-[#7A1C1C] mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#E6AC2A]" />
            Snack Care Concierge
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1917]">
            We&apos;re Here to Help You Snack Better
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1C1917]/75 leading-relaxed">
            Have questions regarding our 100% Zero Palm Oil process, shipment tracking, or corporate gifting hampers? Talk directly to our team in Coimbatore.
          </p>
        </div>

        {/* Quick Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919840012345"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 shadow-sm hover:border-[#285F49] transition-all"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#285F49]/15 text-[#285F49] group-hover:bg-[#285F49] group-hover:text-white transition-colors mb-3">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-sm font-bold text-[#1C1917]">WhatsApp Chat</h3>
            <p className="text-xs text-[#1C1917]/70 mt-1">Instant updates & quick snack queries</p>
            <p className="text-xs font-bold text-[#285F49] mt-3 group-hover:underline">
              +91 98400 12345 →
            </p>
          </a>

          {/* Phone */}
          <div className="rounded-2xl border border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7A1C1C]/10 text-[#7A1C1C] mb-3">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-sm font-bold text-[#1C1917]">Customer Helpline</h3>
            <p className="text-xs text-[#1C1917]/70 mt-1">Toll-free Pan-India customer care</p>
            <p className="text-xs font-bold text-[#7A1C1C] mt-3">
              1800-200-KRAK (5725)
            </p>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6AC2A]/20 text-[#7A1C1C] mb-3">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-sm font-bold text-[#1C1917]">Email Support</h3>
            <p className="text-xs text-[#1C1917]/70 mt-1">Detailed queries & bulk corporate quotes</p>
            <p className="text-xs font-bold text-[#7A1C1C] mt-3">
              care@krakandco.com
            </p>
          </div>

          {/* Kitchen Hours */}
          <div className="rounded-2xl border border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700 mb-3">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-sm font-bold text-[#1C1917]">Operational Hours</h3>
            <p className="text-xs text-[#1C1917]/70 mt-1">Roasting & dispatch schedule</p>
            <p className="text-xs font-bold text-[#1C1917] mt-3">
              Mon – Sat: 9 AM to 8 PM IST
            </p>
          </div>
        </div>

        {/* Contact Form & Location Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form (3 cols) */}
          <div className="lg:col-span-3 rounded-3xl border border-[#7A1C1C]/15 bg-[#FFFDF8] p-6 sm:p-8 shadow-md">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs text-[#1C1917]/70 mb-6">
              Fill in your details below and our kitchen response team will follow up promptly.
            </p>

            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aditi Rao"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="aditi@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                      Order ID (If applicable)
                    </label>
                    <input
                      type="text"
                      value={formData.orderId}
                      onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                      placeholder="e.g. KRAK-78291"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                    What can we help you with? *
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                  >
                    <option value="Order Status & Tracking">Order Status & Courier Tracking</option>
                    <option value="Snack Quality & Freshness Guarantee">Snack Quality & Freshness Guarantee</option>
                    <option value="Corporate & Festive Gifting Boxes">Corporate & Festive Gifting Boxes</option>
                    <option value="Ingredients & Oil Verification">Ingredients & Frying Oil Inquiries</option>
                    <option value="Retail & Distributor Partnership">Retail & Distributor Partnership</option>
                    <option value="General Feedback">General Feedback & Recipe Suggestions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what's on your mind or how we can assist..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#7A1C1C] text-[#FFF8EE] font-serif text-sm font-bold hover:bg-[#5C1515] transition-all shadow-md active:scale-[0.99] disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? "Dispatching Message..." : "Submit Message"}</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#285F49]/15 text-[#285F49]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                  Message Received!
                </h3>
                <p className="text-xs text-[#1C1917]/70 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold">{formData.name}</span>. A snack care representative has logged Ticket #KC-8841 and will respond to <span className="font-semibold">{formData.email}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSent(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      orderId: "",
                      topic: "Order Status & Tracking",
                      message: "",
                    });
                  }}
                  className="mt-2 text-xs font-bold text-[#7A1C1C] underline"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

          {/* Location & Kitchen Address (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl border border-[#7A1C1C]/15 bg-[#FFFDF8] p-6 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-[#7A1C1C]" />
                <h3 className="font-serif text-base font-bold text-[#1C1917]">
                  Roastery Kitchen & Registered Office
                </h3>
              </div>
              <p className="text-xs text-[#1C1917]/80 leading-relaxed font-sans">
                <strong className="text-[#1C1917]">KRAK & CO. Foodworks Private Limited</strong>
                <br />
                Plot No. 42, Kongu Heritage Food Park,
                <br />
                Near Avinashi Road Highway,
                <br />
                Coimbatore, Tamil Nadu – 641014, India
              </p>
              <div className="mt-4 pt-4 border-t border-[#7A1C1C]/10 text-xs text-[#1C1917]/65">
                <p><strong>FSSAI Central License:</strong> 12423999000142</p>
                <p className="mt-1"><strong>GSTIN:</strong> 33AAACK8901F1Z8</p>
              </div>
            </div>

            {/* Quick Self-Service Links */}
            <div className="rounded-3xl border border-[#7A1C1C]/15 bg-[#FFFDF8] p-6 shadow-md space-y-3">
              <h3 className="font-serif text-sm font-bold text-[#1C1917] flex items-center gap-1.5">
                <HelpCircle className="h-4 w-4 text-[#E6AC2A]" />
                Quick Self-Help Options
              </h3>
              <ul className="divide-y divide-[#7A1C1C]/10 text-xs">
                <li className="py-2.5">
                  <Link href="/track-order" className="font-semibold text-[#7A1C1C] hover:underline flex items-center justify-between">
                    <span>Track an Active Order</span>
                    <span>→</span>
                  </Link>
                </li>
                <li className="py-2.5">
                  <Link href="/faq" className="font-semibold text-[#7A1C1C] hover:underline flex items-center justify-between">
                    <span>Frequently Asked Questions</span>
                    <span>→</span>
                  </Link>
                </li>
                <li className="py-2.5">
                  <Link href="/returns-policy" className="font-semibold text-[#7A1C1C] hover:underline flex items-center justify-between">
                    <span>Freshness & Return Policy</span>
                    <span>→</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
