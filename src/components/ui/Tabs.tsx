"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  onChange?: (tabId: string) => void;
  variant?: "underline" | "pills";
  className?: string;
}

export function Tabs({
  tabs,
  defaultTabId,
  onChange,
  variant = "underline",
  className,
}: TabsProps) {
  const [activeTabId, setActiveTabId] = useState<string>(
    defaultTabId || tabs[0]?.id || ""
  );
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleSelectTab = (id: string) => {
    setActiveTabId(id);
    onChange?.(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextTab = tabs[nextIndex];
    if (nextTab && !nextTab.disabled) {
      handleSelectTab(nextTab.id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <div className={cn("w-full", className)}>
      {/* Tab List */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        className={cn(
          "flex items-center gap-1 overflow-x-auto no-scrollbar",
          variant === "underline" && "border-b-2 border-surface-sand",
          variant === "pills" && "p-1 rounded-xl bg-surface-sand/40 border border-surface-sand"
        )}
      >
        {tabs.map((tab, idx) => {
          const isActive = tab.id === activeTabId;
          const tabId = `tab-button-${tab.id}`;
          const panelId = `tab-panel-${tab.id}`;

          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              type="button"
              id={tabId}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              disabled={tab.disabled}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleSelectTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={cn(
                "inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-150 select-none outline-none",
                "focus-visible:ring-2 focus-visible:ring-brand-maroon focus-visible:ring-offset-1",
                variant === "underline" && [
                  "-mb-[2px] border-b-2",
                  isActive
                    ? "border-brand-maroon text-brand-maroon font-bold"
                    : "border-transparent text-text-secondary hover:text-brand-maroon hover:border-surface-sand",
                ],
                variant === "pills" && [
                  "rounded-lg",
                  isActive
                    ? "bg-surface-card text-brand-maroon shadow-xs font-bold"
                    : "text-text-secondary hover:text-brand-maroon",
                ],
                tab.disabled && "opacity-40 cursor-not-allowed pointer-events-none"
              )}
            >
              {tab.icon && <span className="shrink-0">{tab.icon}</span>}
              <span>{tab.label}</span>
              {typeof tab.count === "number" && (
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-bold",
                    isActive
                      ? "bg-brand-maroon text-text-inverse"
                      : "bg-surface-sand text-text-secondary"
                  )}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      {activeTab && (
        <div
          id={`tab-panel-${activeTab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-button-${activeTab.id}`}
          tabIndex={0}
          className="pt-4 focus:outline-none"
        >
          {activeTab.content}
        </div>
      )}
    </div>
  );
}
