import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "default"
  | "brand"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "discount"
  | "new"
  | "out-of-stock";

export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-surface-sand text-text-primary border border-surface-sand/80",
  brand:
    "bg-brand-maroon text-text-inverse border border-brand-maroon-dark",
  secondary:
    "bg-brand-mustard text-brand-maroon-dark font-bold border border-brand-mustard/60",
  success:
    "bg-state-success/15 text-state-success border border-state-success/30 font-semibold",
  warning:
    "bg-state-warning/15 text-state-warning border border-state-warning/30 font-semibold",
  error:
    "bg-state-error/15 text-state-error border border-state-error/30 font-semibold",
  discount:
    "bg-brand-terracotta text-text-inverse font-bold border border-brand-terracotta-dark shadow-xs",
  new:
    "bg-brand-forest text-text-inverse font-bold border border-brand-forest-dark",
  "out-of-stock":
    "bg-text-muted/15 text-text-muted border border-text-muted/30 font-medium",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-[10px] gap-1 rounded-sm tracking-wide",
  md: "px-2.5 py-1 text-xs gap-1.5 rounded-md tracking-wider uppercase font-semibold",
};

export function Badge({
  variant = "default",
  size = "md",
  icon,
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-sans whitespace-nowrap select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
