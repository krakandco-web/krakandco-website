import React from "react";
import { cn } from "@/lib/utils";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  variant?: "solid" | "dashed" | "vintage";
}

export function Separator({
  orientation = "horizontal",
  decorative = true,
  variant = "solid",
  className,
  ...props
}: SeparatorProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation}
      className={cn(
        "shrink-0",
        isHorizontal ? "w-full" : "h-full",
        variant === "solid" && [
          isHorizontal
            ? "h-[1px] bg-surface-sand"
            : "w-[1px] bg-surface-sand",
        ],
        variant === "dashed" && [
          isHorizontal
            ? "h-[1px] border-b border-dashed border-surface-sand bg-transparent"
            : "w-[1px] border-r border-dashed border-surface-sand bg-transparent",
        ],
        variant === "vintage" && [
          isHorizontal
            ? "h-[2px] bg-gradient-to-r from-transparent via-brand-maroon/20 to-transparent"
            : "w-[2px] bg-gradient-to-b from-transparent via-brand-maroon/20 to-transparent",
        ],
        className
      )}
      {...props}
    />
  );
}
