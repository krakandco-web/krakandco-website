import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface SuccessStateProps {
  title: string;
  message: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  className?: string;
}

export function SuccessState({
  title,
  message,
  primaryAction,
  secondaryAction,
  className,
}: SuccessStateProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border-2 border-state-success/30 bg-surface-card shadow-xs",
        className
      )}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-state-success/15 text-state-success">
        <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
      </div>

      <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-maroon">
        {title}
      </h3>
      <p className="mt-2 max-w-md text-xs sm:text-sm font-sans text-text-secondary leading-relaxed">
        {message}
      </p>

      {(primaryAction || secondaryAction) && (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {primaryAction && (
            <Link href={primaryAction.href}>
              <Button variant="primary" size="md">
                {primaryAction.label}
              </Button>
            </Link>
          )}
          {secondaryAction && (
            <Link href={secondaryAction.href}>
              <Button variant="outline" size="md">
                {secondaryAction.label}
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
