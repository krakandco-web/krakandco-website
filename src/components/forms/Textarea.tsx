import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
  maxLength?: number;
  currentLength?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      isError = false,
      maxLength,
      currentLength,
      disabled,
      rows = 4,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative w-full">
        <textarea
          ref={ref}
          rows={rows}
          maxLength={maxLength}
          disabled={disabled}
          className={cn(
            "w-full rounded-lg border bg-surface-card px-3.5 py-2.5 font-sans text-sm text-text-primary transition-all duration-150 resize-y",
            "placeholder:text-text-muted/70",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
            isError
              ? "border-state-error focus-visible:ring-state-error text-state-error"
              : "border-surface-sand hover:border-brand-maroon/40 focus-visible:border-brand-maroon focus-visible:ring-brand-maroon",
            disabled &&
              "cursor-not-allowed bg-surface-parchment/60 opacity-60 text-text-muted",
            className
          )}
          {...props}
        />
        {maxLength && typeof currentLength === "number" && (
          <div className="mt-1 text-right text-[11px] text-text-muted">
            {currentLength} / {maxLength}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
