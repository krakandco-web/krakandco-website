"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface ShortcutItem {
  id: string;
  label: string;
  href: string;
  paramKey?: string;
  paramValue?: string;
  icon?: string;
}

const SHORTCUTS: ShortcutItem[] = [
  { id: "all", label: "All Snacks", href: "/shop" },
  { id: "south", label: "South Indian", href: "/shop?region=south-indian", paramKey: "region", paramValue: "south-indian" },
  { id: "north", label: "North Indian", href: "/shop?region=north-indian", paramKey: "region", paramValue: "north-indian" },
  { id: "chips", label: "Chips & Crisps", href: "/shop?category=chips-crisps", paramKey: "category", paramValue: "chips-crisps" },
  { id: "savouries", label: "Murukku & Savouries", href: "/shop?category=savouries", paramKey: "category", paramValue: "savouries" },
  { id: "mixtures", label: "Mixtures & Namkeen", href: "/shop?category=mixtures", paramKey: "category", paramValue: "mixtures" },
  { id: "sweets", label: "Sweets & Mithai", href: "/shop?category=sweets-mithai", paramKey: "category", paramValue: "sweets-mithai" },
  { id: "pickles", label: "Pickles & Sides", href: "/shop?category=pickles-sides", paramKey: "category", paramValue: "pickles-sides" },
  { id: "gift-boxes", label: "Gift Boxes", href: "/shop?category=gift-boxes", paramKey: "category", paramValue: "gift-boxes" },
  { id: "combos", label: "Combos", href: "/shop?category=combos", paramKey: "category", paramValue: "combos" },
];

export function CategoryShortcuts() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const currentRegion = searchParams.get("region");

  const isAllActive = !currentCategory && !currentRegion;

  return (
    <div className="w-full bg-surface-canvas border-b border-surface-sand/60 py-3.5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none no-scrollbar">
          {SHORTCUTS.map((item) => {
            let isActive = false;
            if (item.id === "all") {
              isActive = isAllActive;
            } else if (item.paramKey === "category") {
              isActive = currentCategory === item.paramValue;
            } else if (item.paramKey === "region") {
              isActive = currentRegion === item.paramValue;
            }

            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 font-sans text-xs font-bold transition-all duration-150 select-none",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon focus-visible:ring-offset-1",
                  isActive
                    ? "bg-brand-maroon text-text-inverse shadow-xs border border-brand-maroon"
                    : "border border-surface-sand bg-surface-card text-text-secondary hover:border-brand-maroon/40 hover:text-brand-maroon"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

