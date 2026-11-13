import React from "react";
import { cn, formatPrice } from "@/lib/utils";

export interface PriceDisplayProps {
  amount: number;
  compareAtAmount?: number;
  prefix?: string;
  suffix?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTaxNote?: boolean;
  className?: string;
}

export function PriceDisplay({
  amount,
  compareAtAmount,
  prefix,
  suffix,
  size = "md",
  showTaxNote = false,
  className,
}: PriceDisplayProps) {
  const hasDiscount = Boolean(compareAtAmount && compareAtAmount > amount);

  const sizeClasses = {
    sm: "text-sm font-bold",
    md: "text-base font-bold",
    lg: "text-xl font-bold font-display",
    xl: "text-3xl font-bold font-display",
  };

  return (
    <div className={cn("inline-flex flex-col", className)}>
      <div className="flex items-baseline gap-2">
        {prefix && <span className="text-xs text-text-muted">{prefix}</span>}
        <span className={cn("text-brand-maroon", sizeClasses[size])}>
          {formatPrice(amount)}
        </span>
        {hasDiscount && (
          <span className="text-xs text-text-muted line-through font-sans">
            {formatPrice(compareAtAmount!)}
          </span>
        )}
        {suffix && <span className="text-xs text-text-muted">{suffix}</span>}
      </div>
      {showTaxNote && (
        <span className="text-[10px] text-text-muted mt-0.5">
          Inclusive of all applicable taxes
        </span>
      )}
    </div>
  );
}
