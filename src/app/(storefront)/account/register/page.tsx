"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShieldCheck, Mail, Lock, Phone, User, ArrowRight, Check } from "lucide-react";
import { useToast } from "@/components/feedback/Toast";

export default function RegisterPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    dietary: ["Vegetarian"],
    agreeTerms: true,
    subscribeNewsletter: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const toggleDietary = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      dietary: prev.dietary.includes(item)
        ? prev.dietary.filter((d) => d !== item)
        : [...prev.dietary, item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.password) {
      showToast({
        type: "error",
        title: "Required Fields Missing",
        description: "Please fill in all details to create your account.",
      });
      return;
    }

    if (!formData.agreeTerms) {
      showToast({
        type: "warning",
        title: "Terms of Service",
        description: "Please agree to the Terms of Service & Privacy Policy.",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      showToast({
        type: "success",
        title: "Account Created!",
        description: `Welcome to KRAK & CO., ${formData.fullName.split(" ")[0]}!`,
      });
      router.push("/account");
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#FFF8EE] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-lg">
        {/* Header Branding */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div className="relative h-14 w-44 mx-auto">
              <Image
                src="/assets/brand/logos/brand-logo-primary.svg"
                alt="KRAK & CO."
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <h1 className="mt-3 font-serif text-2xl font-bold text-[#1C1917]">
            Join the KRAK Snacking Club
          </h1>
          <p className="mt-1 text-sm text-[#1C1917]/70">
            Enjoy 100% Zero Palm Oil snacks, early batch access, and free shipping perks.
          </p>
        </div>

        {/* Register Card */}
        <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-6 sm:p-8 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1917]/40" />
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Aditi Rao"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/30 focus:border-[#7A1C1C]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1917]/40" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="aditi@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/30 focus:border-[#7A1C1C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1917]/40" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                    placeholder="98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/30 focus:border-[#7A1C1C]"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                Create Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1917]/40" />
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="At least 6 characters"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/30 focus:border-[#7A1C1C]"
                />
              </div>
            </div>

            {/* Snacking Preference Chips */}
            <div>
              <label className="block text-xs font-semibold text-[#1C1917] mb-2">
                Snacking Preferences (Optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {["100% Vegetarian", "Vegan Friendly", "Gluten Free", "Jain Friendly", "Spicy Snacks Lovers"].map((diet) => {
                  const isSelected = formData.dietary.includes(diet);
                  return (
                    <button
                      key={diet}
                      type="button"
                      onClick={() => toggleDietary(diet)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        isSelected
                          ? "bg-[#7A1C1C] text-[#FFF8EE] border border-[#7A1C1C]"
                          : "bg-[#FFF8EE] text-[#1C1917]/80 border border-[#7A1C1C]/20 hover:border-[#7A1C1C]"
                      }`}
                    >
                      {isSelected && <Check className="h-3 w-3 text-[#E6AC2A]" />}
                      {diet}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-2 pt-2">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.subscribeNewsletter}
                  onChange={(e) => setFormData({ ...formData, subscribeNewsletter: e.target.checked })}
                  className="h-4 w-4 rounded border-[#7A1C1C]/30 text-[#7A1C1C] focus:ring-[#7A1C1C] mt-0.5"
                />
                <span className="ml-2.5 text-xs text-[#1C1917]/80">
                  Notify me about limited festive snack drops & member-only coupons.
                </span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="h-4 w-4 rounded border-[#7A1C1C]/30 text-[#7A1C1C] focus:ring-[#7A1C1C] mt-0.5"
                />
                <span className="ml-2.5 text-xs text-[#1C1917]/80">
                  I agree to the{" "}
                  <Link href="/terms" className="font-semibold text-[#7A1C1C] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="font-semibold text-[#7A1C1C] hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#7A1C1C] text-[#FFF8EE] font-serif text-sm font-bold hover:bg-[#5C1515] transition-all shadow-md active:scale-[0.99] disabled:opacity-60"
            >
              <span>{isLoading ? "Creating Account..." : "Create Free Account"}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Footer switch to Login */}
          <div className="mt-6 pt-6 border-t border-[#7A1C1C]/10 text-center">
            <p className="text-xs text-[#1C1917]/70">
              Already have an account?{" "}
              <Link
                href="/account/login"
                className="font-bold text-[#7A1C1C] hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Security Reassurance */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#1C1917]/60">
          <ShieldCheck className="h-4 w-4 text-[#285F49]" />
          <span>FSSAI Certified Facilities • Secure Data Storage</span>
        </div>
      </div>
    </div>
  );
}
