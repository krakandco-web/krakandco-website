import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOption[];
  isError?: boolean;
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      options,
      isError = false,
      placeholder,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative flex w-full items-center">
        <select
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full appearance-none rounded-lg border bg-surface-card px-3.5 py-2.5 pr-10 font-sans text-sm text-text-primary transition-all duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
            isError
              ? "border-state-error focus-visible:ring-state-error"
              : "border-surface-sand hover:border-brand-maroon/40 focus-visible:border-brand-maroon focus-visible:ring-brand-maroon",
            disabled &&
              "cursor-not-allowed bg-surface-parchment/60 opacity-60 text-text-muted",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options
            ? options.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                  {opt.label}
                </option>
              ))
            : children}
        </select>
        <div className="pointer-events-none absolute right-3 flex items-center text-text-muted">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";

