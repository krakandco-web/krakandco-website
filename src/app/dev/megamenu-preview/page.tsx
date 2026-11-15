"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";

export default function MegaMenuPreviewPage() {
  return (
    <div className="min-h-screen bg-surface-canvas overflow-x-hidden">
      <Header defaultMegaMenuOpen={true} />
      <HeroSection />
    </div>
  );
}
