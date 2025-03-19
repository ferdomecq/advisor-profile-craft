
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import TabAnimation from "@/components/ui/TabAnimation";
import { AnimatedEntry } from "@/lib/animation";

interface Tab {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
}

interface ProfileTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export default function ProfileTabs({ 
  tabs, 
  defaultTab = "", 
  className 
}: ProfileTabsProps) {
  const initialTab = defaultTab || tabs[0].id;
  const [activeTab, setActiveTab] = useState(initialTab);
  const tabRefs = useRef<(HTMLElement | null)[]>([]);
  
  // Find active tab index
  const activeIndex = tabs.findIndex(tab => tab.id === activeTab);

  return (
    <div className={cn("w-full", className)}>
      <div className="relative border-b border-gray-200 mb-6">
        <div className="flex overflow-x-auto hide-scrollbar">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              ref={el => tabRefs.current[i] = el}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-5 py-3 text-sm font-medium transition-colors whitespace-nowrap",
                tab.id === activeTab
                  ? "text-citec-blue"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Animated underline */}
        <TabAnimation 
          activeIndex={activeIndex} 
          tabRefs={tabRefs} 
        />
      </div>
      
      <div className="min-h-[300px]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              "transition-opacity duration-300",
              tab.id === activeTab ? "block" : "hidden"
            )}
          >
            <AnimatedEntry animation="fade-in" className="w-full">
              {tab.content}
            </AnimatedEntry>
          </div>
        ))}
      </div>
    </div>
  );
}
