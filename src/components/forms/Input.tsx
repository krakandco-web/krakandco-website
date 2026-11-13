import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClear?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      isError = false,
      leftIcon,
      rightIcon,
      onClear,
      disabled,
      value,
      ...props
    },
    ref
  ) => {
    const showClear = Boolean(onClear && value && !disabled);

    return (
      <div className="relative flex w-full items-center">
        {leftIcon && (
          <div className="pointer-events-none absolute left-3 flex items-center text-text-muted">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          type={type}
          disabled={disabled}
          value={value}
          className={cn(
            "w-full rounded-lg border bg-surface-card px-3.5 py-2.5 font-sans text-sm text-text-primary transition-all duration-150",
            "placeholder:text-text-muted/70",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
            Boolean(leftIcon) && "pl-10",
            Boolean(rightIcon || showClear) && "pr-10",
            isError
              ? "border-state-error focus-visible:ring-state-error text-state-error"
              : "border-surface-sand hover:border-brand-maroon/40 focus-visible:border-brand-maroon focus-visible:ring-brand-maroon",
            disabled &&
              "cursor-not-allowed bg-surface-parchment/60 opacity-60 text-text-muted",
            className
          )}
          {...props}
        />

        {showClear && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 flex items-center text-text-muted hover:text-brand-maroon focus:outline-none"
            aria-label="Clear input text"
          >
            <span className="text-xs font-bold leading-none">✕</span>
          </button>
        )}

        {!showClear && rightIcon && (
          <div className="pointer-events-none absolute right-3 flex items-center text-text-muted">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
