import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface RadioOption {
  value: string;
  label: React.ReactNode;
  description?: string;
  badge?: React.ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  orientation?: "vertical" | "horizontal";
  disabled?: boolean;
  className?: string;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      options,
      value,
      onChange,
      orientation = "vertical",
      disabled = false,
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="radiogroup"
        className={cn(
          "flex gap-3",
          orientation === "vertical" ? "flex-col" : "flex-row flex-wrap",
          className
        )}
      >
        {options.map((opt) => {
          const isSelected = opt.value === value;
          const isDisabled = disabled || opt.disabled;
          const radioId = `${name}-${opt.value}`;

          return (
            <div
              key={opt.value}
              className={cn(
                "relative flex items-start gap-3 rounded-xl border p-3.5 transition-all duration-150 cursor-pointer select-none",
                isSelected
                  ? "border-brand-maroon bg-brand-maroon/[0.03] shadow-xs"
                  : "border-surface-sand bg-surface-card hover:border-brand-maroon/40",
                isDisabled && "opacity-50 cursor-not-allowed bg-surface-sand/30"
              )}
              onClick={() => {
                if (!isDisabled) onChange(opt.value);
              }}
            >
              <div className="flex items-center pt-0.5">
                <input
                  id={radioId}
                  name={name}
                  type="radio"
                  value={opt.value}
                  checked={isSelected}
                  disabled={isDisabled}
                  onChange={() => onChange(opt.value)}
                  className="peer sr-only"
                />
                <div
                  className={cn(
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors",
                    "border-surface-sand peer-focus-visible:ring-2 peer-focus-visible:ring-brand-maroon peer-focus-visible:ring-offset-1",
                    isSelected ? "border-brand-maroon" : "bg-surface-card"
                  )}
                  aria-hidden="true"
                >
                  {isSelected && (
                    <div className="h-2 w-2 rounded-full bg-brand-maroon" />
                  )}
                </div>
              </div>

              <div className="flex-1 text-sm">
                <div className="flex items-center justify-between gap-2">
                  <label
                    htmlFor={radioId}
                    className={cn(
                      "font-sans font-medium text-text-primary",
                      isDisabled ? "cursor-not-allowed" : "cursor-pointer"
                    )}
                  >
                    {opt.label}
                  </label>
                  {opt.badge && <span>{opt.badge}</span>}
                </div>
                {opt.description && (
                  <p className="text-xs text-text-secondary mt-0.5">
                    {opt.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

