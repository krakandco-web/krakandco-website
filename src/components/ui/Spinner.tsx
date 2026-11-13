import React from "react";
import { cn } from "@/lib/utils";

export type SpinnerSize = "xs" | "sm" | "md" | "lg";
export type SpinnerColor = "brand" | "mustard" | "white" | "current";

export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement> {
  size?: SpinnerSize;
  color?: SpinnerColor;
  label?: string;
}

const sizeMap: Record<SpinnerSize, string> = {
  xs: "w-3.5 h-3.5",
  sm: "w-5 h-5",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

const colorMap: Record<SpinnerColor, string> = {
  brand: "text-brand-maroon",
  mustard: "text-brand-mustard",
  white: "text-text-inverse",
  current: "text-current",
};

export function Spinner({
  size = "md",
  color = "brand",
  label = "Loading...",
  className,
  ...props
}: SpinnerProps) {
  return (
    <svg
      role="status"
      aria-label={label}
      viewBox="0 0 24 24"
      fill="none"
      className={cn(
        "animate-spin motion-reduce:animate-none",
        sizeMap[size],
        colorMap[color],
        className
      )}
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
