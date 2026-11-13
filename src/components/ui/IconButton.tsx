import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { ButtonVariant } from "./Button";

export type IconButtonSize = "xs" | "sm" | "md" | "lg";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string; // Accessible label is strictly required for icon-only buttons
  variant?: ButtonVariant;
  size?: IconButtonSize;
  isLoading?: boolean;
  icon: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-maroon text-text-inverse hover:bg-brand-maroon-dark active:bg-brand-maroon shadow-sm",
  secondary:
    "bg-brand-mustard text-brand-maroon-dark hover:bg-brand-mustard-light active:bg-brand-mustard shadow-sm",
  outline:
    "border-2 border-brand-maroon text-brand-maroon bg-transparent hover:bg-brand-maroon/5 active:bg-brand-maroon/10",
  ghost:
    "text-text-primary hover:text-brand-maroon hover:bg-brand-maroon/5 active:bg-brand-maroon/10",
  destructive:
    "bg-state-error text-text-inverse hover:bg-red-700 active:bg-red-800 shadow-sm",
  text: "text-text-primary hover:text-brand-maroon p-0 bg-transparent border-none",
};

const sizeStyles: Record<IconButtonSize, string> = {
  xs: "w-7 h-7 p-1 text-xs rounded-md",
  sm: "w-8 h-8 p-1.5 text-sm rounded-lg",
  md: "w-10 h-10 p-2 text-base rounded-lg",
  lg: "w-12 h-12 p-3 text-lg rounded-xl",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      "aria-label": ariaLabel,
      variant = "ghost",
      size = "md",
      isLoading = false,
      icon,
      className,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const isInteractive = !disabled && !isLoading;

    return (
      <button
        ref={ref}
        type={type}
        aria-label={ariaLabel}
        disabled={!isInteractive}
        aria-busy={isLoading}
        className={cn(
          "inline-flex items-center justify-center shrink-0 transition-all duration-150 select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon focus-visible:ring-offset-2",
          variantStyles[variant],
          sizeStyles[size],
          !isInteractive && "opacity-50 cursor-not-allowed pointer-events-none",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-current" />
        ) : (
          icon
        )}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
