import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showHomeLink?: boolean;
  className?: string;
}

export function ErrorState({
  title = "Something went wrong",
  message = "We encountered an unexpected error while loading this content. Please try again or return to our shop.",
  onRetry,
  showHomeLink = true,
  className,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border-2 border-state-error/30 bg-surface-card shadow-xs",
        className
      )}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-state-error/15 text-state-error">
        <AlertCircle className="h-7 w-7" aria-hidden="true" />
      </div>

      <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-maroon">
        {title}
      </h3>
      <p className="mt-2 max-w-md text-xs sm:text-sm font-sans text-text-secondary leading-relaxed">
        {message}
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {onRetry && (
          <Button
            variant="primary"
            size="md"
            onClick={onRetry}
            leftIcon={<RefreshCw className="h-4 w-4" />}
          >
            Try Again
          </Button>
        )}
        {showHomeLink && (
          <Link href="/shop">
            <Button variant="outline" size="md">
              Browse All Snacks
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
