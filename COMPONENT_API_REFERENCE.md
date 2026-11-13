# KRAK & CO. — Component API Reference & Props Documentation

**Project:** KRAK & CO. E-Commerce Storefront  
**Phase:** 08 — Complete Reusable UI Component System  
**Framework:** Next.js 14.2 App Router, TypeScript 5.6.3 (Strict Mode)  

---

## 1. Core UI Primitives

### `Button` (`src/components/ui/Button.tsx`)
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "text";
  size?: "xs" | "sm" | "md" | "lg";
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
```
**Example Usage:**
```tsx
<Button
  variant="primary"
  size="md"
  leftIcon={<ShoppingBag className="h-4 w-4" />}
  onClick={handleAddToCart}
>
  Add to Cart
</Button>
```

---

### `IconButton` (`src/components/ui/IconButton.tsx`)
```typescript
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string; // Mandatory for accessibility
  variant?: ButtonVariant;
  size?: "xs" | "sm" | "md" | "lg";
  isLoading?: boolean;
  icon: React.ReactNode;
}
```
**Example Usage:**
```tsx
<IconButton
  icon={<Heart className="h-4 w-4" />}
  aria-label="Save to Wishlist"
  variant="ghost"
  size="sm"
/>
```

---

### `Badge` (`src/components/ui/Badge.tsx`)
```typescript
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "brand" | "secondary" | "success" | "warning" | "error" | "discount" | "new" | "out-of-stock";
  size?: "sm" | "md";
  icon?: React.ReactNode;
}
```

---

### `Modal` (`src/components/ui/Modal.tsx`)
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}
```

---

### `Drawer` (`src/components/ui/Drawer.tsx`)
```typescript
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  placement?: "left" | "right";
  size?: "sm" | "md" | "lg";
  footer?: React.ReactNode;
  className?: string;
}
```

---

### `Accordion` (`src/components/ui/Accordion.tsx`)
```typescript
interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultOpenId?: string | string[];
  className?: string;
}
```

---

### `Tabs` (`src/components/ui/Tabs.tsx`)
```typescript
interface TabItem {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  onChange?: (tabId: string) => void;
  variant?: "underline" | "pills";
  className?: string;
}
```

---

## 2. Form Components

### `Input` (`src/components/forms/Input.tsx`)
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClear?: () => void;
}
```

### `Select` (`src/components/forms/Select.tsx`)
```typescript
interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOption[];
  isError?: boolean;
  placeholder?: string;
}
```

### `RadioGroup` (`src/components/forms/RadioGroup.tsx`)
```typescript
interface RadioOption {
  value: string;
  label: React.ReactNode;
  description?: string;
  badge?: React.ReactNode;
  disabled?: boolean;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  orientation?: "vertical" | "horizontal";
  disabled?: boolean;
  className?: string;
}
```

---

## 3. Product Components

### `ProductCard` (`src/components/product/ProductCard.tsx`)
```typescript
interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, variant: ProductVariant, quantity: number) => void;
  onToggleWishlist?: (product: Product) => void;
  isWishlisted?: boolean;
  className?: string;
}
```

### `VariantSelector` (`src/components/product/VariantSelector.tsx`)
```typescript
interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariantId: string;
  onSelectVariant: (variant: ProductVariant) => void;
  showPrice?: boolean;
  className?: string;
}
```

### `QuantitySelector` (`src/components/product/QuantitySelector.tsx`)
```typescript
interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number; // default: 1
  max?: number; // default: 10
  disabled?: boolean;
  size?: "sm" | "md";
  className?: string;
}
```

---

## 4. Collection Components

### `CategoryCard` (`src/components/collection/CategoryCard.tsx`)
```typescript
interface CategoryCardProps {
  title: string;
  slug: string;
  imageUrl: string;
  itemCount?: number;
  className?: string;
}
```

### `CollectionCard` (`src/components/collection/CollectionCard.tsx`)
```typescript
interface CollectionCardProps {
  title: string;
  subtitle: string;
  slug: string;
  theme?: "forest" | "maroon" | "mustard" | "terracotta";
  illustrationUrl?: string;
  ctaText?: string;
  className?: string;
}
```

---

## 5. Feedback Components

### `useToast` Hook & `ToastProvider` (`src/components/feedback/Toast.tsx`)
```typescript
const { showToast } = useToast();

// Trigger a toast notification:
showToast({
  type: "success", // "success" | "error" | "warning" | "info"
  title: "Added to Cart!",
  description: "Kerala Banana Chips (250g)",
  duration: 4000,
});
```

### `EmptyState` (`src/components/feedback/EmptyState.tsx`)
```typescript
interface EmptyStateProps {
  title: string;
  description: string;
  illustrationUrl?: string;
  icon?: React.ReactNode;
  primaryAction?: { label: string; href?: string; onClick?: () => void };
  secondaryAction?: { label: string; href?: string; onClick?: () => void };
  className?: string;
}
```

