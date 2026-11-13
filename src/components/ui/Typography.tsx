import React from "react";
import { cn } from "@/lib/utils";

// Display Heading (Hero / Major Brand Headers)
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function DisplayHeading({
  as: Component = "h1",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-maroon leading-[1.1]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function PageHeading({
  as: Component = "h1",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-maroon leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function SectionHeadingText({
  as: Component = "h2",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-display text-xl sm:text-2xl font-bold text-brand-maroon",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

// Body Text
export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
  size?: "sm" | "base" | "lg";
  tone?: "primary" | "secondary" | "muted" | "inverse" | "brand";
}

export function Text({
  as: Component = "p",
  size = "base",
  tone = "primary",
  className,
  children,
  ...props
}: TextProps) {
  const sizeStyles = {
    sm: "text-xs sm:text-sm leading-relaxed",
    base: "text-sm sm:text-base leading-relaxed",
    lg: "text-base sm:text-lg leading-relaxed",
  };

  const toneStyles = {
    primary: "text-text-primary",
    secondary: "text-text-secondary",
    muted: "text-text-muted",
    inverse: "text-text-inverse",
    brand: "text-brand-maroon",
  };

  return (
    <Component
      className={cn("font-sans", sizeStyles[size], toneStyles[tone], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Caption({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("font-sans text-xs text-text-muted tracking-normal", className)}
      {...props}
    >
      {children}
    </span>
  );
}

