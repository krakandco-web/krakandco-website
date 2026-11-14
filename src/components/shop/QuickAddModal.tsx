"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { Product, ProductVariant } from "@/types";
import { VariantSelector } from "@/components/product/VariantSelector";
import { QuantitySelector } from "@/components/product/QuantitySelector";
import { formatPrice } from "@/lib/utils";
import { ShoppingBag, Sparkles, CheckCircle2 } from "lucide-react";

export interface QuickAddModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, variant: ProductVariant, quantity: number) => void;
}

export function QuickAddModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
}: QuickAddModalProps) {
  const defaultVariant = product
    ? product.variants.find((v) => v.isDefault) || product.variants[0]
    : null;
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(defaultVariant);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  // Sync default variant when product changes
  React.useEffect(() => {
    if (product) {
      const def = product.variants.find((v) => v.isDefault) || product.variants[0];
      setSelectedVariant(def);
      setQuantity(1);
    }
  }, [product]);

  if (!product || !selectedVariant) return null;

  const totalPrice = selectedVariant ? selectedVariant.price * quantity : 0;
  const isOutOfStock = selectedVariant?.inventoryCount <= 0;

  const handleConfirmAdd = async () => {
    if (isOutOfStock) return;
    setIsAdding(true);
    try {
      await onAddToCart(product, selectedVariant, quantity);
      onClose();
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Select Pack Size"
      description={product.name}
      size="md"
    >
      <div className="space-y-6 pt-2">
        {/* Product summary card */}
        <div className="flex items-center gap-4 rounded-xl border border-surface-sand bg-surface-canvas p-3">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-surface-parchment/60 p-1">
            <Image
              src={product.thumbnailUrl}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-1">
            <h4 className="font-display text-sm font-bold text-brand-maroon leading-tight">
              {product.name}
            </h4>
            <p className="font-sans text-xs text-text-secondary line-clamp-2">
              {product.shortDescription}
            </p>
            <div className="flex items-center gap-2 pt-0.5">
              <span className="text-xs font-bold text-text-primary">
                {formatPrice(selectedVariant.price)}
              </span>
              {selectedVariant.compareAtPrice && (
                <span className="text-[11px] text-text-muted line-through">
                  {formatPrice(selectedVariant.compareAtPrice)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Variant Selector */}
        <div className="space-y-2">
          <label className="block font-sans text-xs font-bold uppercase tracking-wider text-text-primary">
            Choose Size:
          </label>
          <VariantSelector
            variants={product.variants}
            selectedVariantId={selectedVariant.id}
            onSelectVariant={(v) => setSelectedVariant(v)}
          />
        </div>

        {/* Quantity Picker */}
        <div className="flex items-center justify-between pt-2">
          <label className="font-sans text-xs font-bold uppercase tracking-wider text-text-primary">
            Quantity:
          </label>
          <QuantitySelector
            quantity={quantity}
            max={selectedVariant.inventoryCount || 10}
            onChange={(q) => setQuantity(q)}
          />
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-between border-t border-surface-sand pt-4 text-[11px] text-text-muted">
          <span className="flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-brand-mustard" />
            <span>Zero Palm Oil</span>
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-brand-forest" />
            <span>{product.shelfLife}</span>
          </span>
        </div>

        {/* Action Button */}
        <button
          type="button"
          disabled={isOutOfStock || isAdding}
          onClick={handleConfirmAdd}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-maroon py-3 text-xs font-bold uppercase tracking-wider text-text-inverse shadow-sm hover:bg-brand-maroon-dark active:scale-98 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ShoppingBag className="h-4 w-4" />
          <span>
            {isOutOfStock
              ? "Out of Stock"
              : isAdding
              ? "Adding..."
              : `Add to Cart • ${formatPrice(totalPrice)}`}
          </span>
        </button>
      </div>
    </Modal>
  );
}
