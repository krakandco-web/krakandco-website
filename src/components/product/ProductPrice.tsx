import React from "react";
import { cn, formatPrice } from "@/lib/utils";

export interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ProductPrice({
  price,
  compareAtPrice,
  size = "md",
  className,
}: ProductPriceProps) {
  const hasDiscount = Boolean(compareAtPrice && compareAtPrice > price);
  const discountPercent = hasDiscount
    ? Math.round(((compareAtPrice! - price) / compareAtPrice!) * 100)
    : 0;

  const sizeStyles = {
    sm: {
      price: "text-sm font-bold",
      compare: "text-xs",
      discount: "text-[10px] px-1.5 py-0.2",
    },
    md: {
      price: "text-base font-bold",
      compare: "text-xs",
      discount: "text-[11px] px-1.5 py-0.5",
    },
    lg: {
      price: "text-2xl font-bold font-display",
      compare: "text-sm",
      discount: "text-xs px-2 py-0.5",
    },
  };

  const currentStyles = sizeStyles[size];

  return (
    <div
      className={cn("flex flex-wrap items-baseline gap-2", className)}
      aria-label={`Price: ${formatPrice(price)}${
        hasDiscount ? `, original price: ${formatPrice(compareAtPrice!)}` : ""
      }`}
    >
      <span className={cn("text-brand-maroon font-sans tracking-tight", currentStyles.price)}>
        {formatPrice(price)}
      </span>

      {hasDiscount && (
        <>
          <span
            className={cn(
              "text-text-muted line-through font-sans",
              currentStyles.compare
            )}
            aria-hidden="true"
          >
            {formatPrice(compareAtPrice!)}
          </span>
          <span
            className={cn(
              "rounded bg-brand-terracotta/15 text-brand-terracotta font-bold uppercase",
              currentStyles.discount
            )}
            aria-hidden="true"
          >
            {discountPercent}% OFF
          </span>
        </>
      )}
    </div>
  );
}

