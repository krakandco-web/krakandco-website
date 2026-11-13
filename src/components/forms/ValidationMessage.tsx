import React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, AlertTriangle, Info } from "lucide-react";

export type ValidationType = "error" | "success" | "warning" | "info";

export interface ValidationMessageProps {
  type: ValidationType;
  message: string;
  className?: string;
}

const configMap = {
  error: {
    icon: AlertCircle,
    colorClass: "text-state-error",
  },
  success: {
    icon: CheckCircle2,
    colorClass: "text-state-success",
  },
  warning: {
    icon: AlertTriangle,
    colorClass: "text-state-warning",
  },
  info: {
    icon: Info,
    colorClass: "text-brand-forest",
  },
};

export function ValidationMessage({
  type,
  message,
  className,
}: ValidationMessageProps) {
  const config = configMap[type];
  const Icon = config.icon;

  return (
    <div
      role={type === "error" ? "alert" : "status"}
      className={cn(
        "flex items-center gap-1.5 font-sans text-xs font-medium leading-tight",
        config.colorClass,
        className
      )}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}

