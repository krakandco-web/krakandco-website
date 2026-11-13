import React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "rect" | "circle" | "text" | "product-card";
}

export function Skeleton({
  variant = "rect",
  className,
  ...props
}: SkeletonProps) {
  if (variant === "circle") {
    return (
      <div
        className={cn(
          "rounded-full bg-surface-sand/70 animate-pulse motion-reduce:animate-none",
          className
        )}
        {...props}
      />
    );
  }

  if (variant === "text") {
    return (
      <div
        className={cn(
          "h-4 w-full rounded bg-surface-sand/70 animate-pulse motion-reduce:animate-none",
          className
        )}
        {...props}
      />
    );
  }

  if (variant === "product-card") {
    return (
      <div
        className={cn(
          "flex flex-col rounded-xl border border-surface-sand bg-surface-card p-3 shadow-xs animate-pulse motion-reduce:animate-none",
          className
        )}
        {...props}
      >
        <div className="aspect-square w-full rounded-lg bg-surface-sand/70 mb-3" />
        <div className="h-4 w-3/4 rounded bg-surface-sand/70 mb-2" />
        <div className="h-3 w-1/2 rounded bg-surface-sand/50 mb-3" />
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-surface-sand/40">
          <div className="h-5 w-16 rounded bg-surface-sand/70" />
          <div className="h-8 w-24 rounded-lg bg-surface-sand/70" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-md bg-surface-sand/70 animate-pulse motion-reduce:animate-none",
        className
      )}
      {...props}
    />
  );
}
