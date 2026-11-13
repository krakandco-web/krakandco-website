import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export interface EmptyStateProps {
  title: string;
  description: string;
  illustrationUrl?: string;
  icon?: React.ReactNode;
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

export function EmptyState({
  title,
  description,
  illustrationUrl,
  icon,
  primaryAction,
  secondaryAction,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border-2 border-dashed border-surface-sand bg-surface-canvas/50",
        className
      )}
    >
      {illustrationUrl ? (
        <div className="relative mb-5 h-28 w-28 sm:h-36 sm:w-36">
          <Image
            src={illustrationUrl}
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      ) : icon ? (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface-sand/60 text-brand-maroon">
          {icon}
        </div>
      ) : null}

      <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-maroon">
        {title}
      </h3>
      <p className="mt-2 max-w-md text-xs sm:text-sm font-sans text-text-secondary leading-relaxed">
        {description}
      </p>

      {(primaryAction || secondaryAction) && (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {primaryAction &&
            (primaryAction.href ? (
              <Link href={primaryAction.href}>
                <Button variant="primary" size="md">
                  {primaryAction.label}
                </Button>
              </Link>
            ) : (
              <Button
                variant="primary"
                size="md"
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </Button>
            ))}

          {secondaryAction &&
            (secondaryAction.href ? (
              <Link href={secondaryAction.href}>
                <Button variant="outline" size="md">
                  {secondaryAction.label}
                </Button>
              </Link>
            ) : (
              <Button
                variant="outline"
                size="md"
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </Button>
            ))}
        </div>
      )}
    </div>
  );
}

