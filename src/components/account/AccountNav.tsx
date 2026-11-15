"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  User, 
  Package, 
  MapPin, 
  Heart, 
  LogOut, 
  LayoutDashboard,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { useToast } from "@/components/feedback/Toast";

const navItems = [
  {
    href: "/account",
    label: "Dashboard",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    href: "/account/orders",
    label: "My Orders",
    icon: Package,
    badge: "2 Active",
  },
  {
    href: "/account/addresses",
    label: "Saved Addresses",
    icon: MapPin,
  },
  {
    href: "/account/profile",
    label: "Profile & Preferences",
    icon: User,
  },
  {
    href: "/wishlist",
    label: "My Wishlist",
    icon: Heart,
  },
];

export function AccountNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { showToast } = useToast();

  const handleLogout = () => {
    showToast({
      type: "info",
      title: "Signed Out Successfully",
      description: "You have been safely signed out. Visit soon!",
    });
    setTimeout(() => {
      router.push("/account/login");
    }, 600);
  };

  return (
    <aside className="w-full lg:w-72 shrink-0">
      {/* User Quick Info Card */}
      <div className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-5 shadow-sm mb-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#7A1C1C] text-[#FFF8EE] font-serif text-xl font-bold border-2 border-[#E6AC2A]">
            AR
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-serif text-base font-bold text-[#1C1917] truncate">
              Aditi Rao
            </h3>
            <p className="text-xs text-[#1C1917]/65 truncate">aditi.rao@example.com</p>
            <div className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-[#E6AC2A]/15 px-2.5 py-0.5 text-[11px] font-semibold text-[#7A1C1C]">
              <ShieldCheck className="h-3 w-3 text-[#E6AC2A]" />
              KRAK Club Gold Member
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav aria-label="Account Navigation" className="rounded-2xl border-2 border-[#7A1C1C]/15 bg-[#FFFDF8] p-2.5 shadow-sm space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.exact 
            ? pathname === item.href 
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#7A1C1C] text-[#FFF8EE] font-semibold shadow-sm"
                  : "text-[#1C1917]/80 hover:bg-[#FFF8EE] hover:text-[#7A1C1C]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`h-4 w-4 ${isActive ? "text-[#E6AC2A]" : "text-[#7A1C1C]"}`} />
                <span>{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isActive ? "bg-[#FFF8EE] text-[#7A1C1C]" : "bg-[#285F49]/15 text-[#285F49]"
                  }`}>
                    {item.badge}
                  </span>
                )}
                <ChevronRight className={`h-4 w-4 ${isActive ? "text-[#FFF8EE]" : "text-[#1C1917]/30"}`} />
              </div>
            </Link>
          );
        })}

        <div className="pt-2 mt-2 border-t border-[#7A1C1C]/10">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <LogOut className="h-4 w-4 text-red-600" />
              <span>Sign Out</span>
            </div>
          </button>
        </div>
      </nav>
    </aside>
  );
}
