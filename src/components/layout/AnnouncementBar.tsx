"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ANNOUNCEMENTS = [
  {
    id: "festive-shipping",
    text: "✨ Festive Snack Boxes Now Live! | Free Shipping on Orders Above ₹499",
  },
  {
    id: "coconut-oil",
    text: "🥥 Handcrafted in 100% Cold-Pressed Coconut Oil & Pure Desi Ghee",
  },
  {
    id: "metro-delivery",
    text: "⚡ 2–3 Days Metro Express Delivery Across India",
  },
];

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  const currentMessage = ANNOUNCEMENTS[currentIndex];

  return (
    <div
      role="region"
      aria-label="Store Announcements"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative z-50 flex h-9 items-center justify-between border-b border-brand-maroon-dark/40 bg-brand-maroon px-3 text-surface-cream text-xs select-none sm:px-6"
    >
      {/* Previous Button (Desktop) */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous announcement"
        className="hidden md:flex items-center justify-center p-1 text-surface-parchment/70 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-mustard rounded"
      >
        <ChevronLeft className="h-3.5 w-3.5" />
      </button>

      {/* Center Rotating Text */}
      <div
        className="flex-1 text-center font-sans font-medium tracking-wide truncate px-2"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="inline-block transition-opacity duration-300">
          {currentMessage.text}
        </span>
      </div>

      {/* Next Button (Desktop) */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next announcement"
        className="hidden md:flex items-center justify-center p-1 text-surface-parchment/70 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-mustard rounded"
      >
        <ChevronRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

