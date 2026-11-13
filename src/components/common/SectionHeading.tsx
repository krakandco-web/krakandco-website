import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  action?: {
    label: string;
    href: string;
  };
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  action,
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-8 sm:mb-12",
        isCenter ? "text-center mx-auto max-w-2xl" : "flex flex-col md:flex-row md:items-end md:justify-between gap-4",
        className
      )}
    >
      <div className={cn(isCenter && "mx-auto")}>
        {eyebrow && (
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="text-brand-mustard text-xs">✦</span>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-maroon">
              {eyebrow}
            </span>
            <span className="text-brand-mustard text-xs">✦</span>
          </div>
        )}

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-maroon">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-xs sm:text-sm font-sans text-text-secondary leading-relaxed max-w-xl">
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <div className={cn("mt-4 md:mt-0", isCenter && "flex justify-center")}>
          <Link
            href={action.href}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-maroon hover:text-brand-maroon-dark hover:underline underline-offset-4"
          >
            <span>{action.label}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
}

