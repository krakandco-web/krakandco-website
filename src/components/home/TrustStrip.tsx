import React from "react";
import { Sparkles, Award, ShieldCheck, Truck, CreditCard } from "lucide-react";

export function TrustStrip() {
  const TRUST_ITEMS = [
    {
      icon: Sparkles,
      title: "Authentic Recipes",
      subtitle: "Regional, time-tested",
      iconColor: "text-brand-maroon",
      bgColor: "bg-brand-maroon/10",
    },
    {
      icon: Award,
      title: "Premium Ingredients",
      subtitle: "No compromise on quality",
      iconColor: "text-brand-forest",
      bgColor: "bg-brand-forest/10",
    },
    {
      icon: ShieldCheck,
      title: "Freshly Packed",
      subtitle: "Crunch that lasts",
      iconColor: "text-brand-mustard-dark",
      bgColor: "bg-brand-mustard/20",
    },
    {
      icon: Truck,
      title: "Pan India Delivery",
      subtitle: "To your doorstep",
      iconColor: "text-brand-terracotta",
      bgColor: "bg-brand-terracotta/10",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      subtitle: "UPI, Cards, Netbanking",
      iconColor: "text-brand-maroon",
      bgColor: "bg-brand-maroon/10",
    },
  ];

  return (
    <section
      aria-label="Brand Guarantees"
      className="border-b border-surface-sand bg-surface-card py-5 sm:py-6 shadow-2xs"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {TRUST_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-1 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.bgColor} ${item.iconColor}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-text-primary leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-sans text-text-secondary mt-0.5 leading-tight">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
