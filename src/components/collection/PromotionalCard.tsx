import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface PromotionalCardProps {
  eyebrow?: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageUrl?: string;
  badgeText?: string;
  className?: string;
}

export function PromotionalCard({
  eyebrow,
  title,
  description,
  ctaText,
  ctaHref,
  imageUrl,
  badgeText,
  className,
}: PromotionalCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-3xl border-2 border-brand-maroon/20 bg-brand-maroon p-6 sm:p-8 text-text-inverse shadow-card",
        className
      )}
    >
      {/* Decorative Kolam Background Texture */}
      <div
        className="pointer-events-none absolute -left-12 -top-12 h-64 w-64 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #F5E6CA 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />

      {/* Copy Column */}
      <div className="relative z-10 max-w-xl text-center md:text-left">
        {eyebrow && (
          <span className="mb-2 inline-block font-sans text-xs font-bold uppercase tracking-widest text-brand-mustard">
            {eyebrow}
          </span>
        )}
        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-surface-cream">
          {title}
        </h3>
        <p className="mt-3 text-xs sm:text-sm font-sans text-surface-parchment/90 leading-relaxed max-w-md">
          {description}
        </p>
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-mustard px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-maroon-dark shadow-sm hover:bg-brand-mustard-light transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard focus-visible:ring-offset-2"
          >
            <span>{ctaText}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Image / Graphic Column */}
      {imageUrl && (
        <div className="relative z-10 mt-6 md:mt-0 h-44 w-44 sm:h-52 sm:w-52 shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain drop-shadow-lg"
          />
          {badgeText && (
            <div className="absolute -top-2 -right-2 rounded-full bg-brand-terracotta px-3 py-1 text-[11px] font-bold text-text-inverse shadow-sm uppercase tracking-wide">
              {badgeText}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
