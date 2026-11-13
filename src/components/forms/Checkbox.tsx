import React, { forwardRef, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Check, Minus } from "lucide-react";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  description?: string;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      description,
      checked,
      indeterminate = false,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLInputElement | null>(null);
    const generatedId = React.useId();
    const inputId = id || generatedId;

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const setRefs = (el: HTMLInputElement | null) => {
      internalRef.current = el;
      if (typeof ref === "function") {
        ref(el);
      } else if (ref) {
        ref.current = el;
      }
    };

    return (
      <div className={cn("inline-flex items-start gap-3", className)}>
        <div className="relative flex items-center pt-0.5">
          <input
            ref={setRefs}
            id={inputId}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              "flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors select-none",
              "border-surface-sand bg-surface-card peer-focus-visible:ring-2 peer-focus-visible:ring-brand-maroon peer-focus-visible:ring-offset-1",
              "peer-checked:bg-brand-maroon peer-checked:border-brand-maroon text-text-inverse",
              indeterminate && "bg-brand-maroon border-brand-maroon text-text-inverse",
              disabled && "opacity-50 cursor-not-allowed bg-surface-sand"
            )}
            aria-hidden="true"
          >
            {indeterminate ? (
              <Minus className="h-3 w-3 stroke-[3]" />
            ) : checked ? (
              <Check className="h-3 w-3 stroke-[3]" />
            ) : null}
          </div>
        </div>

        {label && (
          <div className="text-sm">
            <label
              htmlFor={inputId}
              className={cn(
                "font-sans font-medium text-text-primary select-none",
                disabled ? "cursor-not-allowed text-text-muted" : "cursor-pointer"
              )}
            >
              {label}
            </label>
            {description && (
              <p className="text-xs text-text-secondary mt-0.5">{description}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

