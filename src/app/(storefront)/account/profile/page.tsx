"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Mail, Phone, Calendar, Lock, Shield, Check, Flame } from "lucide-react";
import { AccountNav } from "@/components/account/AccountNav";
import { useToast } from "@/components/feedback/Toast";

export default function AccountProfilePage() {
  const { showToast } = useToast();
  const [profileData, setProfileData] = useState({
    fullName: "Aditi Rao",
    email: "aditi.rao@example.com",
    phone: "9876543210",
    dob: "1994-08-15",
    preferredOil: "Cold-Pressed Coconut Oil",
    spiceTolerance: "Fiery Spicy",
    newsletter: true,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      showToast({
        type: "success",
        title: "Profile Preferences Updated",
        description: "Your snacking profile and personal details have been saved.",
      });
    }, 600);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwords.current || !passwords.newPassword) {
      showToast({
        type: "error",
        title: "Missing Fields",
        description: "Please enter your current and new password.",
      });
      return;
    }
    if (passwords.newPassword !== passwords.confirm) {
      showToast({
        type: "error",
        title: "Passwords Don't Match",
        description: "Your new password and confirmation do not match.",
      });
      return;
    }

    showToast({
      type: "success",
      title: "Password Changed",
      description: "Your account password has been updated securely.",
    });
    setPasswords({ current: "", newPassword: "", confirm: "" });
  };

  return (
    <div className="min-h-screen bg-[#FFF8EE] py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#1C1917]/60">
            <li>
              <Link href="/" className="hover:text-[#7A1C1C]">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/account" className="hover:text-[#7A1C1C]">My Account</Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#7A1C1C]">Profile & Preferences</li>
          </ol>
        </nav>

        {/* Dashboard Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          <AccountNav />

          {/* Main Area */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                Profile & Snacking Preferences
              </h1>
              <p className="mt-1 text-sm text-[#1C1917]/70">
                Customise your taste profile, manage credentials, and personalize snack recommendations.
              </p>
            </div>

            {/* Personal Details Form */}
            <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-6 shadow-sm">
              <h3 className="font-serif text-base font-bold text-[#1C1917] mb-4">
                Personal Information
              </h3>

              <form onSubmit={handleProfileSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1917]/40" />
                      <input
                        type="text"
                        value={profileData.fullName}
                        onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                      Email Address (Login ID)
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1917]/40" />
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
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
                        value={profileData.phone}
                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                      Date of Birth (For Birthday Treats)
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1C1917]/40" />
                      <input
                        type="date"
                        value={profileData.dob}
                        onChange={(e) => setProfileData({ ...profileData, dob: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                      />
                    </div>
                  </div>
                </div>

                {/* Taste Preferences */}
                <div className="pt-4 border-t border-[#7A1C1C]/10 space-y-4">
                  <h4 className="font-serif text-sm font-bold text-[#1C1917]">
                    Snack Taste Preferences
                  </h4>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-2">
                      Preferred Authentic Frying Medium (Strictly Zero Palm Oil)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        "Cold-Pressed Coconut Oil",
                        "Pure Desi Cow Ghee",
                        "Wood-Pressed Groundnut Oil",
                      ].map((oil) => (
                        <button
                          key={oil}
                          type="button"
                          onClick={() => setProfileData({ ...profileData, preferredOil: oil })}
                          className={`p-3 rounded-xl border text-xs text-left font-semibold transition-all ${
                            profileData.preferredOil === oil
                              ? "bg-[#7A1C1C] text-[#FFF8EE] border-[#7A1C1C] shadow-sm"
                              : "bg-[#FFF8EE] text-[#1C1917]/80 border-[#7A1C1C]/20 hover:border-[#7A1C1C]"
                          }`}
                        >
                          {oil}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-2 flex items-center gap-1.5">
                      <Flame className="h-4 w-4 text-red-600" />
                      <span>Spice Tolerance Level</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Mild & Subtle", "Balanced Medium", "Fiery Spicy"].map((spice) => (
                        <button
                          key={spice}
                          type="button"
                          onClick={() => setProfileData({ ...profileData, spiceTolerance: spice })}
                          className={`p-3 rounded-xl border text-xs text-center font-semibold transition-all ${
                            profileData.spiceTolerance === spice
                              ? "bg-[#7A1C1C] text-[#FFF8EE] border-[#7A1C1C] shadow-sm"
                              : "bg-[#FFF8EE] text-[#1C1917]/80 border-[#7A1C1C]/20 hover:border-[#7A1C1C]"
                          }`}
                        >
                          {spice}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="px-6 py-2.5 rounded-xl bg-[#7A1C1C] text-xs font-bold text-[#FFF8EE] hover:bg-[#5C1515] transition-colors shadow-sm disabled:opacity-60"
                  >
                    {isSaving ? "Saving..." : "Save Preferences"}
                  </button>
                </div>
              </form>
            </div>

            {/* Change Password Card */}
            <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="h-4 w-4 text-[#7A1C1C]" />
                <h3 className="font-serif text-base font-bold text-[#1C1917]">
                  Change Password
                </h3>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-4 max-w-md">
                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={passwords.current}
                    onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={passwords.newPassword}
                    onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
                    placeholder="At least 6 characters"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={passwords.confirm}
                    onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#7A1C1C] text-xs font-bold text-[#FFF8EE] hover:bg-[#5C1515] transition-colors shadow-sm"
                >
                  Update Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
