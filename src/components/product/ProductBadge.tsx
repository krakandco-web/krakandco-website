import React from "react";
import { Badge, BadgeProps } from "@/components/ui/Badge";

export type ProductBadgeType =
  | "bestseller"
  | "new"
  | "festive"
  | "out-of-stock"
  | "discount";

export interface ProductBadgeProps extends Omit<BadgeProps, "variant"> {
  type: ProductBadgeType;
  discountPercent?: number;
}

export function ProductBadge({
  type,
  discountPercent,
  className,
  ...props
}: ProductBadgeProps) {
  switch (type) {
    case "bestseller":
      return (
        <Badge variant="brand" size="sm" className={className} {...props}>
          Bestseller
        </Badge>
      );
    case "new":
      return (
        <Badge variant="new" size="sm" className={className} {...props}>
          New
        </Badge>
      );
    case "festive":
      return (
        <Badge variant="secondary" size="sm" className={className} {...props}>
          Festive Special
        </Badge>
      );
    case "out-of-stock":
      return (
        <Badge variant="out-of-stock" size="sm" className={className} {...props}>
          Out of Stock
        </Badge>
      );
    case "discount":
      return (
        <Badge variant="discount" size="sm" className={className} {...props}>
          {discountPercent ? `${discountPercent}% OFF` : "Sale"}
        </Badge>
      );
    default:
      return null;
  }
}

