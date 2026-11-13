"use client";

import React from "react";
import { cn, formatPrice } from "@/lib/utils";
import { ProductVariant } from "@/types";

export interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariantId: string;
  onSelectVariant: (variant: ProductVariant) => void;
  showPrice?: boolean;
  className?: string;
}

export function VariantSelector({
  variants,
  selectedVariantId,
  onSelectVariant,
  showPrice = true,
  className,
}: VariantSelectorProps) {
  if (!variants || variants.length <= 1) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {variants.map((v) => {
        const isSelected = v.id === selectedVariantId;
        const isOutOfStock = v.inventoryCount <= 0;

        return (
          <button
            key={v.id}
            type="button"
            disabled={isOutOfStock}
            onClick={() => onSelectVariant(v)}
            aria-pressed={isSelected}
            className={cn(
              "flex flex-col items-center justify-center rounded-lg border px-3 py-1.5 font-sans transition-all duration-150 select-none min-w-[64px]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon focus-visible:ring-offset-1",
              isSelected
                ? "border-brand-maroon bg-brand-maroon text-text-inverse shadow-xs"
                : "border-surface-sand bg-surface-card text-text-primary hover:border-brand-maroon/50",
              isOutOfStock &&
                "opacity-40 cursor-not-allowed bg-surface-parchment/60 line-through text-text-muted"
            )}
          >
            <span
              className={cn(
                "text-xs font-bold leading-tight",
                isSelected ? "text-text-inverse" : "text-text-primary"
              )}
            >
              {v.packSize}
            </span>

            {showPrice && (
              <span
                className={cn(
                  "text-[11px] leading-tight mt-0.5",
                  isSelected ? "text-brand-mustard font-semibold" : "text-text-secondary"
                )}
              >
                {formatPrice(v.price)}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

