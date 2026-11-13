import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "text";

export type ButtonSize = "xs" | "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-maroon text-text-inverse hover:bg-brand-maroon-dark active:bg-brand-maroon shadow-sm border border-brand-maroon-dark/20",
  secondary:
    "bg-brand-mustard text-brand-maroon-dark hover:bg-brand-mustard-light active:bg-brand-mustard font-bold shadow-sm border border-brand-mustard/40",
  outline:
    "border-2 border-brand-maroon text-brand-maroon bg-transparent hover:bg-brand-maroon/5 active:bg-brand-maroon/10",
  ghost:
    "text-brand-maroon hover:bg-brand-maroon/5 active:bg-brand-maroon/10 border border-transparent",
  destructive:
    "bg-state-error text-text-inverse hover:bg-red-700 active:bg-red-800 shadow-sm border border-red-800/30",
  text:
    "text-brand-maroon underline-offset-4 hover:underline p-0 h-auto bg-transparent border-none",
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: "px-2.5 py-1 text-xs gap-1.5 rounded-md min-h-[28px]",
  sm: "px-3 py-1.5 text-xs font-semibold gap-1.5 rounded-lg min-h-[34px]",
  md: "px-4 py-2.5 text-sm font-semibold gap-2 rounded-lg min-h-[42px]",
  lg: "px-6 py-3.5 text-base font-bold gap-2.5 rounded-xl min-h-[50px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
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
        disabled={!isInteractive}
        aria-busy={isLoading}
        className={cn(
          "inline-flex items-center justify-center font-sans tracking-wide transition-all duration-150 select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon focus-visible:ring-offset-2",
          variantStyles[variant],
          variant !== "text" && sizeStyles[size],
          fullWidth && "w-full",
          !isInteractive &&
            "opacity-50 cursor-not-allowed pointer-events-none filter grayscale-[20%]",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin shrink-0 text-current" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        {children && <span>{children}</span>}
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

