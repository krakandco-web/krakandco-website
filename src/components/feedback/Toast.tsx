"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from "lucide-react";

export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
}

interface ToastContextValue {
  toasts: ToastItem[];
  showToast: (toast: Omit<ToastItem, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const typeConfig = {
  success: {
    icon: CheckCircle2,
    borderClass: "border-state-success/40 bg-state-success/10 text-state-success",
  },
  error: {
    icon: AlertCircle,
    borderClass: "border-state-error/40 bg-state-error/10 text-state-error",
  },
  warning: {
    icon: AlertTriangle,
    borderClass: "border-state-warning/40 bg-state-warning/10 text-state-warning",
  },
  info: {
    icon: Info,
    borderClass: "border-brand-forest/40 bg-brand-forest/10 text-brand-forest",
  },
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    ({ type, title, description, duration = 4000 }: Omit<ToastItem, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastItem = { id, type, title, description, duration };

      setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}

      {/* Fixed Toast Container */}
      <div
        className="fixed bottom-4 right-4 z-50 flex max-w-sm flex-col gap-2.5 pointer-events-none"
        aria-live="polite"
        aria-atomic="true"
      >
        {toasts.map((toast) => {
          const config = typeConfig[toast.type];
          const Icon = config.icon;

          return (
            <div
              key={toast.id}
              role={toast.type === "error" ? "alert" : "status"}
              className={cn(
                "pointer-events-auto flex items-start gap-3 rounded-xl border-2 bg-surface-card p-4 shadow-lg transition-all duration-200",
                "animate-in slide-in-from-bottom-5 fade-in duration-200",
                config.borderClass
              )}
            >
              <Icon className="h-5 w-5 shrink-0 mt-0.5 text-current" />
              <div className="flex-1 text-sm">
                <h4 className="font-sans font-bold text-text-primary leading-tight">
                  {toast.title}
                </h4>
                {toast.description && (
                  <p className="mt-1 text-xs text-text-secondary leading-normal">
                    {toast.description}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                aria-label="Dismiss toast"
                className="text-text-muted hover:text-text-primary -mr-1 -mt-1 p-1 focus:outline-none"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

