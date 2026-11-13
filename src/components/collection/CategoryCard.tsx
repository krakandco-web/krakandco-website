import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface CategoryCardProps {
  title: string;
  slug: string;
  imageUrl: string;
  itemCount?: number;
  className?: string;
}

export function CategoryCard({
  title,
  slug,
  imageUrl,
  itemCount,
  className,
}: CategoryCardProps) {
  return (
    <Link
      href={`/collections/${slug}`}
      className={cn(
        "group flex flex-col items-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon rounded-2xl p-2 transition-transform duration-200 hover:-translate-y-1",
        className
      )}
    >
      {/* Circular/Pill Image Container with Matchbox-inspired Border */}
      <div className="relative mb-2.5 h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border-2 border-brand-maroon/20 bg-surface-canvas p-1 shadow-sm transition-all duration-200 group-hover:border-brand-maroon group-hover:shadow-md">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-surface-sand/40">
          <Image
            src={imageUrl || "/assets/products/placeholder-banana-chips.svg"}
            alt={title}
            fill
            sizes="96px"
            className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Category Label */}
      <span className="font-sans text-xs sm:text-sm font-bold text-text-primary group-hover:text-brand-maroon transition-colors line-clamp-1">
        {title}
      </span>

      {typeof itemCount === "number" && (
        <span className="text-[11px] text-text-muted mt-0.5">
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </span>
      )}
    </Link>
  );
}

