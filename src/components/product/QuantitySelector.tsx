"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

export interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  size?: "sm" | "md";
  className?: string;
}

export function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 10,
  disabled = false,
  size = "md",
  className,
}: QuantitySelectorProps) {
  const canDecrement = quantity > min && !disabled;
  const canIncrement = quantity < max && !disabled;

  const handleDecrement = () => {
    if (canDecrement) onChange(quantity - 1);
  };

  const handleIncrement = () => {
    if (canIncrement) onChange(quantity + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val)) return;
    if (val >= min && val <= max) {
      onChange(val);
    }
  };

  const sizeStyles = {
    sm: "h-7 text-xs",
    md: "h-9 text-sm",
  };

  const buttonSizeStyles = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg border border-surface-sand bg-surface-card shadow-2xs select-none",
        sizeStyles[size],
        disabled && "opacity-50 pointer-events-none",
        className
      )}
    >
      <button
        type="button"
        onClick={handleDecrement}
        disabled={!canDecrement}
        aria-label="Decrease quantity"
        className={cn(
          "flex items-center justify-center rounded-l-lg text-text-primary hover:bg-surface-sand/40 active:bg-surface-sand/70 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon focus-visible:ring-inset",
          buttonSizeStyles[size],
          !canDecrement && "opacity-30 cursor-not-allowed"
        )}
      >
        <Minus className="h-3.5 w-3.5 stroke-[2.5]" />
      </button>

      <input
        type="number"
        value={quantity}
        min={min}
        max={max}
        onChange={handleInputChange}
        disabled={disabled}
        aria-label="Product quantity"
        className={cn(
          "w-10 text-center font-sans font-bold text-text-primary bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        )}
      />

      <button
        type="button"
        onClick={handleIncrement}
        disabled={!canIncrement}
        aria-label="Increase quantity"
        className={cn(
          "flex items-center justify-center rounded-r-lg text-text-primary hover:bg-surface-sand/40 active:bg-surface-sand/70 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon focus-visible:ring-inset",
          buttonSizeStyles[size],
          !canIncrement && "opacity-30 cursor-not-allowed"
        )}
      >
        <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
      </button>
    </div>
  );
}
