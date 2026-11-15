"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle2, 
  Home, 
  Building2, 
  X,
  Phone,
  User
} from "lucide-react";
import { AccountNav } from "@/components/account/AccountNav";
import { useToast } from "@/components/feedback/Toast";

interface SavedAddress {
  id: string;
  name: string;
  phone: string;
  street: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
  type: "HOME" | "OFFICE";
  isDefault: boolean;
}

const initialAddresses: SavedAddress[] = [
  {
    id: "addr-1",
    name: "Aditi Rao",
    phone: "+91 98765 43210",
    street: "123, Shivanandha Colony, Tatabad",
    landmark: "Near Nilgiris Supermarket",
    city: "Coimbatore",
    state: "Tamil Nadu",
    pincode: "641004",
    type: "HOME",
    isDefault: true,
  },
  {
    id: "addr-2",
    name: "Aditi Rao (Work)",
    phone: "+91 98765 43210",
    street: "Tower B, 4th Floor, Global Tech Village, Brookefields",
    landmark: "Opposite Town Hall",
    city: "Coimbatore",
    state: "Tamil Nadu",
    pincode: "641001",
    type: "OFFICE",
    isDefault: false,
  },
];

export default function AccountAddressesPage() {
  const [addresses, setAddresses] = useState<SavedAddress[]>(initialAddresses);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    street: "",
    landmark: "",
    city: "",
    state: "Tamil Nadu",
    pincode: "",
    type: "HOME" as "HOME" | "OFFICE",
    isDefault: false,
  });

  const handleSetDefault = (id: string) => {
    setAddresses((prev) =>
      prev.map((a) => ({
        ...a,
        isDefault: a.id === id,
      }))
    );
    showToast({
      type: "success",
      title: "Default Address Updated",
      description: "Future snack shipments will default to this address.",
    });
  };

  const handleDelete = (id: string) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
    showToast({
      type: "info",
      title: "Address Removed",
      description: "Address has been removed from your saved address book.",
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.street || !formData.city || !formData.pincode) {
      showToast({
        type: "error",
        title: "Missing Information",
        description: "Please fill in all mandatory address fields.",
      });
      return;
    }

    const newAddress: SavedAddress = {
      id: `addr-${Date.now()}`,
      name: formData.name,
      phone: formData.phone.startsWith("+91") ? formData.phone : `+91 ${formData.phone}`,
      street: formData.street,
      landmark: formData.landmark,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode,
      type: formData.type,
      isDefault: formData.isDefault || addresses.length === 0,
    };

    if (newAddress.isDefault) {
      setAddresses((prev) => [
        newAddress,
        ...prev.map((a) => ({ ...a, isDefault: false })),
      ]);
    } else {
      setAddresses((prev) => [...prev, newAddress]);
    }

    setIsAddingNew(false);
    setFormData({
      name: "",
      phone: "",
      street: "",
      landmark: "",
      city: "",
      state: "Tamil Nadu",
      pincode: "",
      type: "HOME",
      isDefault: false,
    });

    showToast({
      type: "success",
      title: "New Address Saved",
      description: `${newAddress.type} delivery address added successfully.`,
    });
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
            <li className="font-semibold text-[#7A1C1C]">Saved Addresses</li>
          </ol>
        </nav>

        {/* Dashboard Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          <AccountNav />

          {/* Main Area */}
          <div className="flex-1 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                  Saved Addresses
                </h1>
                <p className="mt-1 text-sm text-[#1C1917]/70">
                  Manage your delivery destinations for quick one-click snack checkout.
                </p>
              </div>

              {!isAddingNew && (
                <button
                  type="button"
                  onClick={() => setIsAddingNew(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#7A1C1C] px-4 py-2.5 text-xs font-bold text-[#FFF8EE] hover:bg-[#5C1515] transition-colors shadow-sm"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add New Address</span>
                </button>
              )}
            </div>

            {/* Add Address Form Accordion / Card */}
            {isAddingNew && (
              <div className="rounded-2xl border-2 border-[#7A1C1C] bg-[#FFFDF8] p-6 shadow-md animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="flex items-center justify-between pb-4 border-b border-[#7A1C1C]/15 mb-4">
                  <h3 className="font-serif text-base font-bold text-[#1C1917]">
                    Add New Delivery Address
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsAddingNew(false)}
                    className="p-1 text-[#1C1917]/40 hover:text-[#7A1C1C]"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Aditi Rao"
                        className="w-full px-3.5 py-2 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                        placeholder="98765 43210"
                        className="w-full px-3.5 py-2 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                      Street Address & Flat / House No. *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.street}
                      onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                      placeholder="e.g. 123, Shivanandha Colony, Tatabad"
                      className="w-full px-3.5 py-2 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                        Landmark (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.landmark}
                        onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                        placeholder="Near Supermarket"
                        className="w-full px-3.5 py-2 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Coimbatore"
                        className="w-full px-3.5 py-2 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        maxLength={6}
                        required
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, "") })}
                        placeholder="641004"
                        className="w-full px-3.5 py-2 rounded-xl border border-[#7A1C1C]/20 bg-[#FFF8EE] text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]"
                      />
                    </div>
                  </div>

                  {/* Type buttons */}
                  <div className="flex items-center gap-6 pt-2">
                    <span className="text-xs font-semibold text-[#1C1917]">Address Type:</span>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="addrType"
                        checked={formData.type === "HOME"}
                        onChange={() => setFormData({ ...formData, type: "HOME" })}
                        className="text-[#7A1C1C] focus:ring-[#7A1C1C]"
                      />
                      <span className="text-xs font-medium text-[#1C1917]">Home</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="addrType"
                        checked={formData.type === "OFFICE"}
                        onChange={() => setFormData({ ...formData, type: "OFFICE" })}
                        className="text-[#7A1C1C] focus:ring-[#7A1C1C]"
                      />
                      <span className="text-xs font-medium text-[#1C1917]">Office / Commercial</span>
                    </label>
                  </div>

                  {/* Make default checkbox */}
                  <div className="pt-1">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.isDefault}
                        onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                        className="h-4 w-4 rounded border-[#7A1C1C]/30 text-[#7A1C1C] focus:ring-[#7A1C1C]"
                      />
                      <span className="ml-2 text-xs text-[#1C1917]/80">
                        Set as default address for future orders
                      </span>
                    </label>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setIsAddingNew(false)}
                      className="px-4 py-2 rounded-xl border border-[#7A1C1C]/20 text-xs font-semibold text-[#1C1917] hover:bg-[#FFF8EE]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-[#7A1C1C] text-xs font-bold text-[#FFF8EE] hover:bg-[#5C1515] transition-colors shadow-sm"
                    >
                      Save Address
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Address Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className={`rounded-2xl border-2 p-5 bg-[#FFFDF8] shadow-sm flex flex-col justify-between transition-all ${
                    address.isDefault
                      ? "border-[#7A1C1C] ring-1 ring-[#7A1C1C]/20"
                      : "border-[#7A1C1C]/15 hover:border-[#7A1C1C]/30"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-lg bg-[#FFF8EE] px-2.5 py-1 text-xs font-bold text-[#7A1C1C] border border-[#7A1C1C]/15">
                          {address.type === "HOME" ? (
                            <Home className="h-3 w-3" />
                          ) : (
                            <Building2 className="h-3 w-3" />
                          )}
                          {address.type}
                        </span>
                        {address.isDefault && (
                          <span className="inline-flex items-center gap-1 rounded-lg bg-[#285F49]/15 px-2.5 py-1 text-xs font-bold text-[#285F49]">
                            <CheckCircle2 className="h-3 w-3" />
                            Default
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDelete(address.id)}
                        className="text-[#1C1917]/30 hover:text-red-600 p-1"
                        title="Delete Address"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <h4 className="font-serif text-sm font-bold text-[#1C1917]">
                      {address.name}
                    </h4>
                    <p className="text-xs text-[#1C1917]/70 mt-1 leading-relaxed">
                      {address.street}
                      {address.landmark && `, ${address.landmark}`}
                      <br />
                      {address.city}, {address.state} – {address.pincode}
                    </p>
                    <p className="text-xs text-[#1C1917]/70 mt-2 font-mono">
                      Phone: {address.phone}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#7A1C1C]/10 flex items-center justify-between">
                    {!address.isDefault ? (
                      <button
                        type="button"
                        onClick={() => handleSetDefault(address.id)}
                        className="text-xs font-bold text-[#7A1C1C] hover:underline"
                      >
                        Set as Default
                      </button>
                    ) : (
                      <span className="text-[11px] text-[#285F49] font-semibold">
                        Primary Shipping Address
                      </span>
                    )}

                    <span className="text-xs font-semibold text-[#1C1917]/50">
                      Standard Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
