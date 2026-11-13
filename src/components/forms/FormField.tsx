import React from "react";
import { cn } from "@/lib/utils";
import { ValidationMessage } from "./ValidationMessage";

export interface FormFieldProps {
  id?: string;
  label?: string;
  required?: boolean;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  id,
  label,
  required = false,
  helperText,
  errorMessage,
  disabled = false,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("flex w-full flex-col gap-1.5", className)}>
      {label && (
        <div className="flex items-center justify-between">
          <label
            htmlFor={id}
            className={cn(
              "font-sans text-xs font-semibold text-text-primary",
              disabled && "text-text-muted cursor-not-allowed"
            )}
          >
            {label}
            {required && <span className="ml-1 text-state-error">*</span>}
          </label>
        </div>
      )}

      <div>{children}</div>

      {errorMessage ? (
        <ValidationMessage type="error" message={errorMessage} />
      ) : helperText ? (
        <p className="text-[11px] text-text-muted leading-tight">{helperText}</p>
      ) : null}
    </div>
  );
}

