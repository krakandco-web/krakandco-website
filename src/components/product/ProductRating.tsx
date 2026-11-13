import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export interface ProductRatingProps {
  rating: number; // e.g. 4.8
  reviewCount?: number; // e.g. 2356
  size?: "sm" | "md";
  showCount?: boolean;
  className?: string;
}

export function ProductRating({
  rating,
  reviewCount,
  size = "sm",
  showCount = true,
  className,
}: ProductRatingProps) {
  if (!rating || rating <= 0) return null;

  const formattedRating = rating.toFixed(1);

  return (
    <div
      className={cn("inline-flex items-center gap-1.5 font-sans select-none", className)}
      aria-label={`Rated ${formattedRating} out of 5${
        reviewCount ? ` based on ${reviewCount.toLocaleString("en-IN")} customer reviews` : ""
      }`}
    >
      <div className="flex items-center gap-0.5 text-brand-mustard">
        <Star
          className={cn(
            "fill-brand-mustard text-brand-mustard",
            size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"
          )}
          aria-hidden="true"
        />
      </div>

      <span
        className={cn(
          "font-semibold text-text-primary",
          size === "sm" ? "text-xs" : "text-sm"
        )}
      >
        {formattedRating}
      </span>

      {showCount && typeof reviewCount === "number" && reviewCount > 0 && (
        <span
          className={cn(
            "text-text-muted",
            size === "sm" ? "text-[11px]" : "text-xs"
          )}
        >
          ({reviewCount.toLocaleString("en-IN")})
        </span>
      )}
    </div>
  );
}

