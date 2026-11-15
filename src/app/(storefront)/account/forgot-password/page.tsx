"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { useToast } from "@/components/feedback/Toast";

export default function ForgotPasswordPage() {
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      showToast({
        type: "error",
        title: "Email Required",
        description: "Please enter your registered email address.",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      showToast({
        type: "success",
        title: "Reset Instructions Sent",
        description: `Check your inbox at ${email} for the password reset link.`,
      });
    }, 700);
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
            Reset Your Password
          </h1>
          <p className="mt-1 text-sm text-[#1C1917]/70">
            Enter your email to receive recovery instructions and regain access.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-[#7A1C1C]/15 bg-[#FFFDF8] p-6 sm:p-8 shadow-sm">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                  Registered Email Address
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

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#7A1C1C] text-[#FFF8EE] font-serif text-sm font-bold hover:bg-[#5C1515] transition-all shadow-md active:scale-[0.99] disabled:opacity-60"
              >
                <span>{isLoading ? "Sending Link..." : "Send Password Reset Link"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#285F49]/15 text-[#285F49]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                  Check Your Inbox
                </h3>
                <p className="mt-1 text-xs text-[#1C1917]/70">
                  We have dispatched a secure password reset link to{" "}
                  <span className="font-semibold text-[#1C1917]">{email}</span>.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-semibold text-[#7A1C1C] hover:underline"
                >
                  Didn&apos;t receive an email? Click here to try again
                </button>
              </div>
            </div>
          )}

          {/* Back to sign in */}
          <div className="mt-6 pt-6 border-t border-[#7A1C1C]/10 text-center">
            <Link
              href="/account/login"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#7A1C1C] hover:underline"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
