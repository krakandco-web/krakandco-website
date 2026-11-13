import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ProductImageProps {
  src: string;
  alt: string;
  aspectRatio?: "square" | "portrait" | "video";
  priority?: boolean;
  className?: string;
  sizes?: string;
}

const aspectStyles = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  video: "aspect-[16/9]",
};

export function ProductImage({
  src,
  alt,
  aspectRatio = "square",
  priority = false,
  className,
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
}: ProductImageProps) {
  // If src is an SVG or local asset
  const imageSource = src || "/assets/products/placeholder-banana-chips.svg";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-surface-canvas/60 border border-surface-sand/60",
        aspectStyles[aspectRatio],
        className
      )}
    >
      <Image
        src={imageSource}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
      />
    </div>
  );
}

