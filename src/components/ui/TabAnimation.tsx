
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TabAnimationProps {
  activeIndex: number;
  tabRefs: React.RefObject<(HTMLElement | null)[]>;
  className?: string;
}

const TabAnimation: React.FC<TabAnimationProps> = ({
  activeIndex,
  tabRefs,
  className,
}) => {
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: "0px",
    width: "0px",
  });
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      if (tabRefs.current && tabRefs.current[activeIndex]) {
        const activeTab = tabRefs.current[activeIndex];
        if (activeTab) {
          const { offsetLeft, offsetWidth } = activeTab;
          setIndicatorStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
          });
        }
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex, tabRefs]);

  return (
    <div
      ref={animationRef}
      className={cn(
        "absolute bottom-0 h-0.5 bg-citec-blue transition-all duration-300 ease-apple",
        className
      )}
      style={{
        left: indicatorStyle.left,
        width: indicatorStyle.width,
      }}
    />
  );
};

export default TabAnimation;
