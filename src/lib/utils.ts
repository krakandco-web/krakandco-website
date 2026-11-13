/**
 * KRAK & CO. — Utility Functions
 * Lightweight class name merger supporting nested arrays, conditional classes, and clean concatenation.
 */
export type ClassValue =
  | ClassValue[]
  | string
  | number
  | boolean
  | null
  | undefined;

export function cn(...classes: ClassValue[]): string {
  const result: string[] = [];

  const flatten = (arr: ClassValue[]) => {
    for (const item of arr) {
      if (!item || typeof item === "boolean") continue;
      if (Array.isArray(item)) {
        flatten(item);
      } else if (typeof item === "string" || typeof item === "number") {
        result.push(String(item));
      }
    }
  };

  flatten(classes);
  return result.join(" ");
}

/**
 * Format currency with Indian Rupee symbol
 */
export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}
