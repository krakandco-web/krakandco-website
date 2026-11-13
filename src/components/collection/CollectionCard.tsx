import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export type CollectionTheme = "forest" | "maroon" | "mustard" | "terracotta";

export interface CollectionCardProps {
  title: string;
  subtitle: string;
  slug: string;
  theme?: CollectionTheme;
  illustrationUrl?: string;
  ctaText?: string;
  className?: string;
}

const themeStyles: Record<
  CollectionTheme,
  {
    bgClass: string;
    borderClass: string;
    titleClass: string;
    subClass: string;
    btnClass: string;
  }
> = {
  forest: {
    bgClass: "bg-brand-forest",
    borderClass: "border-brand-forest-dark/40",
    titleClass: "text-brand-mustard font-display",
    subClass: "text-surface-parchment/90",
    btnClass: "bg-brand-mustard text-brand-maroon-dark hover:bg-brand-mustard-light",
  },
  maroon: {
    bgClass: "bg-brand-maroon",
    borderClass: "border-brand-maroon-dark/40",
    titleClass: "text-brand-mustard font-display",
    subClass: "text-surface-parchment/90",
    btnClass: "bg-brand-mustard text-brand-maroon-dark hover:bg-brand-mustard-light",
  },
  mustard: {
    bgClass: "bg-brand-mustard",
    borderClass: "border-brand-mustard-dark/40",
    titleClass: "text-brand-maroon-dark font-display",
    subClass: "text-brand-maroon-dark/80",
    btnClass: "bg-brand-maroon text-text-inverse hover:bg-brand-maroon-dark",
  },
  terracotta: {
    bgClass: "bg-brand-terracotta",
    borderClass: "border-brand-terracotta-dark/40",
    titleClass: "text-surface-cream font-display",
    subClass: "text-surface-parchment/90",
    btnClass: "bg-surface-cream text-brand-maroon hover:bg-white",
  },
};

export function CollectionCard({
  title,
  subtitle,
  slug,
  theme = "forest",
  illustrationUrl,
  ctaText = "Explore Collection",
  className,
}: CollectionCardProps) {
  const currentTheme = themeStyles[theme];

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 p-6 sm:p-8 shadow-card transition-all duration-300",
        currentTheme.bgClass,
        currentTheme.borderClass,
        className
      )}
    >
      {/* Background Decorative Illustration */}
      {illustrationUrl && (
        <div className="pointer-events-none absolute -bottom-6 -right-6 h-48 w-48 opacity-20 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-30 sm:h-56 sm:w-56">
          <Image
            src={illustrationUrl}
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Card Content */}
      <div className="relative z-10 max-w-sm">
        <h3 className={cn("text-2xl sm:text-3xl font-bold tracking-tight", currentTheme.titleClass)}>
          {title}
        </h3>
        <p className={cn("mt-2 text-xs sm:text-sm font-sans leading-relaxed", currentTheme.subClass)}>
          {subtitle}
        </p>
      </div>

      {/* Action Button */}
      <div className="relative z-10 mt-6 pt-2">
        <Link
          href={`/collections/${slug}`}
          className={cn(
            "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-150 select-none",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            currentTheme.btnClass
          )}
        >
          <span>{ctaText}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
