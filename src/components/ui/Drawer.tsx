"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { IconButton } from "./IconButton";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  placement?: "left" | "right";
  size?: "sm" | "md" | "lg";
  footer?: React.ReactNode;
  className?: string;
}

const sizeStyles = {
  sm: "max-w-xs",
  md: "max-w-md",
  lg: "max-w-lg",
};

export function Drawer({
  isOpen,
  onClose,
  title,
  description,
  children,
  placement = "right",
  size = "md",
  footer,
  className,
}: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    drawerRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "drawer-title" : undefined}
      aria-describedby={description ? "drawer-desc" : undefined}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-text-primary/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div
        ref={drawerRef}
        tabIndex={-1}
        className={cn(
          "relative z-10 flex h-full w-full flex-col bg-surface-card shadow-2xl focus:outline-none transition-transform duration-300 ease-out",
          sizeStyles[size],
          placement === "right"
            ? "ml-auto border-l-2 border-surface-sand animate-in slide-in-from-right"
            : "mr-auto border-r-2 border-surface-sand animate-in slide-in-from-left",
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-surface-sand px-6 py-4 bg-surface-parchment/60">
          <div>
            {title && (
              <h2
                id="drawer-title"
                className="font-display text-lg font-bold text-brand-maroon leading-tight"
              >
                {title}
              </h2>
            )}
            {description && (
              <p id="drawer-desc" className="text-xs text-text-secondary mt-0.5">
                {description}
              </p>
            )}
          </div>
          <IconButton
            icon={<X className="h-5 w-5" />}
            aria-label="Close drawer"
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-text-muted hover:text-brand-maroon"
          />
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>

        {/* Optional Sticky Footer */}
        {footer && (
          <div className="border-t border-surface-sand bg-surface-parchment/40 px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
