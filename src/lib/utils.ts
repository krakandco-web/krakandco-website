/**
 * KRAK & CO. — Utility Functions
 * Lightweight class name merger without unnecessary external dependencies.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format currency with Indian Rupee symbol
 */
export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

