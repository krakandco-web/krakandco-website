import React from "react";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col">
      {/* Storefront Layout Container (Header/Footer to be mounted in subsequent phases) */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
