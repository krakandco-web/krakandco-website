"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShieldCheck, Mail, Lock, Phone, ArrowRight, Sparkles } from "lucide-react";
import { useToast } from "@/components/feedback/Toast";

export default function LoginPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [authMode, setAuthMode] = useState<"password" | "otp">("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      showToast({
        type: "error",
        title: "Missing Information",
        description: "Please enter your email and password.",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      showToast({
        type: "success",
        title: "Welcome Back, Snacker!",
        description: "You have signed in to your KRAK & CO. account.",
      });
      router.push("/account");
    }, 700);
  };

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) {
      showToast({
        type: "error",
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit Indian mobile number.",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      setOtp("7829");
      showToast({
        type: "info",
        title: "OTP Dispatched",
        description: "We've sent a 4-digit verification code (Demo: 7829).",
      });
    }, 600);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp !== "7829") {
      showToast({
        type: "error",
        title: "Invalid OTP",
        description: "Please enter the 4-digit code (use 7829 for demo).",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      showToast({
        type: "success",
        title: "Phone Verified!",
        description: "Welcome back to KRAK & CO.",
      });
      router.push("/account");
    }, 600);
  };

  const handleDemoLogin = () => {
    setEmail("aditi.rao@example.com");
    setPassword("••••••••••••");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      showToast({
        type: "success",
        title: "Demo Account Active",
        description: "Signed in as Aditi Rao (KRAK Club Gold Member).",
      });
      router.push("/account");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#FFF8EE] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-md">
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
            Sign in to Your Account
          </h1>
          <p className="mt-1 text-sm text-[#1C1917]/70">
            Track fresh shipments, unlock member discounts & reorder snacks.
          </p>
        </div>

        {/* Demo Login Quick Pill */}
        <div className="mb-6 rounded-xl border-2 border-dashed border-[#E6AC2A] bg-[#E6AC2A]/10 p-4 text-center">
          <p className="text-xs font-semibold text-[#7A1C1C] flex items-center justify-center gap-1.5 mb-2">
            <Sparkles className="h-4 w-4 text-[#E6AC2A]" />
            Quick Evaluator Login
          </p>
          <button
            type="button"
            onClick={handleDemoLogin}
            disabled={isLoading}
            className="w-full py-2 px-3 rounded-lg bg-[#7A1C1C] text-[#FFF8EE] font-sans text-xs font-bold hover:bg-[#5C1515] transition-colors shadow-sm"
          >
            One-Click Sign In (Aditi Rao)
          </button>
        </div>

        {/* Auth Card */}
        <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-6 sm:p-8 shadow-md">
          {/* Method Tabs */}
          <div className="flex rounded-xl bg-[#FFF8EE] p-1 mb-6 border border-[#7A1C1C]/10">
            <button
              type="button"
              onClick={() => { setAuthMode("password"); setOtpSent(false); }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                authMode === "password"
                  ? "bg-[#7A1C1C] text-[#FFF8EE] shadow-sm"
                  : "text-[#1C1917]/70 hover:text-[#7A1C1C]"
              }`}
            >
              Email & Password
            </button>
            <button
              type="button"
              onClick={() => { setAuthMode("otp"); }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                authMode === "otp"
                  ? "bg-[#7A1C1C] text-[#FFF8EE] shadow-sm"
                  : "text-[#1C1917]/70 hover:text-[#7A1C1C]"
              }`}
            >
              Mobile OTP
            </button>
          </div>

          {authMode === "password" ? (
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1917]/40" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/30 focus:border-[#7A1C1C]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-[#1C1917]">
                    Password
                  </label>
                  <Link
                    href="/account/forgot-password"
                    className="text-xs font-semibold text-[#7A1C1C] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1917]/40" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/30 focus:border-[#7A1C1C]"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-[#7A1C1C]/30 text-[#7A1C1C] focus:ring-[#7A1C1C]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-xs text-[#1C1917]/80">
                  Keep me signed in on this device
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#7A1C1C] text-[#FFF8EE] font-serif text-sm font-bold hover:bg-[#5C1515] transition-all shadow-md active:scale-[0.99] disabled:opacity-60"
              >
                <span>{isLoading ? "Signing In..." : "Sign In to KRAK"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <div>
              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                      10-Digit Mobile Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#1C1917]/60">
                        +91
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                        placeholder="98765 43210"
                        className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/30 focus:border-[#7A1C1C]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#7A1C1C] text-[#FFF8EE] font-serif text-sm font-bold hover:bg-[#5C1515] transition-all shadow-md active:scale-[0.99]"
                  >
                    <span>{isLoading ? "Sending OTP..." : "Get Verification Code"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="text-center mb-3">
                    <p className="text-xs text-[#1C1917]/70">
                      Code sent to <span className="font-semibold text-[#1C1917]">+91 {phone}</span>
                    </p>
                    <button
                      type="button"
                      onClick={() => setOtpSent(false)}
                      className="text-xs font-semibold text-[#7A1C1C] underline mt-0.5"
                    >
                      Change Number
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-center text-[#1C1917] mb-1.5">
                      Enter 4-Digit Code
                    </label>
                    <input
                      type="text"
                      maxLength={4}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="7829"
                      className="w-full text-center text-2xl font-bold tracking-widest py-2.5 rounded-xl border border-[#7A1C1C]/30 bg-[#FFF8EE] text-[#7A1C1C] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#7A1C1C] text-[#FFF8EE] font-serif text-sm font-bold hover:bg-[#5C1515] transition-all shadow-md active:scale-[0.99]"
                  >
                    <span>{isLoading ? "Verifying..." : "Verify & Sign In"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Footer separator & Register link */}
          <div className="mt-6 pt-6 border-t border-[#7A1C1C]/10 text-center">
            <p className="text-xs text-[#1C1917]/70">
              New to KRAK & CO.?{" "}
              <Link
                href="/account/register"
                className="font-bold text-[#7A1C1C] hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>

        {/* Security / Trust reassurance */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#1C1917]/60">
          <ShieldCheck className="h-4 w-4 text-[#285F49]" />
          <span>256-bit Encrypted Session • 100% Zero Spam Policy</span>
        </div>
      </div>
    </div>
  );
}
