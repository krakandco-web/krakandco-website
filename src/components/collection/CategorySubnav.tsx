"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SubcategoryShortcut } from "@/types";
import { cn } from "@/lib/utils";

export interface CategorySubnavProps {
  subcategories: SubcategoryShortcut[];
  collectionTitle: string;
}

export function CategorySubnav({ subcategories, collectionTitle }: CategorySubnavProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (!subcategories || subcategories.length === 0) return null;

  const handleSelectShortcut = (shortcut: SubcategoryShortcut) => {
    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete("page"); // Reset pagination

    if (shortcut.slug === "all") {
      // Clear relevant filter keys if clicking "All"
      nextParams.delete("region");
      nextParams.delete("spice");
      nextParams.delete("packSize");
    } else {
      const { key, value } = shortcut.queryParam;
      const currentValues = nextParams.getAll(key);

      if (currentValues.includes(value)) {
        // Toggle off
        nextParams.delete(key);
        currentValues
          .filter((v) => v !== value)
          .forEach((v) => nextParams.append(key, v));
      } else {
        // Set filter
        nextParams.set(key, value);
      }
    }

    const query = nextParams.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const isShortcutActive = (shortcut: SubcategoryShortcut) => {
    if (shortcut.slug === "all") {
      // Active if no special regional or spice params are active
      return !searchParams.get("region") && !searchParams.get("spice");
    }
    const { key, value } = shortcut.queryParam;
    const currentValues = searchParams.getAll(key);
    return currentValues.includes(value);
  };

  return (
    <section aria-label={`${collectionTitle} Subcategories`} className="w-full bg-surface-canvas/60 border-b border-surface-sand/80 py-3.5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-text-muted mr-1">
            Explore:
          </span>

          {subcategories.map((sub) => {
            const active = isShortcutActive(sub);
            return (
              <button
                key={sub.slug}
                type="button"
                onClick={() => handleSelectShortcut(sub)}
                className={cn(
                  "shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon",
                  active
                    ? "bg-brand-maroon text-text-inverse shadow-xs ring-1 ring-brand-maroon"
                    : "bg-surface-card border border-surface-sand text-text-secondary hover:border-brand-maroon/30 hover:text-text-primary"
                )}
                aria-pressed={active}
              >
                <span>{sub.name}</span>
                {typeof sub.count === "number" && (
                  <span className={cn("ml-1.5 text-[10px]", active ? "text-text-inverse/80" : "text-text-muted")}>
                    ({sub.count})
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
