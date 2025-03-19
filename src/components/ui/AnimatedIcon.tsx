
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  color?: string;
  animation?: "pulse" | "bounce" | "spin" | "float" | "none";
  className?: string;
}

export function AnimatedIcon({
  icon: Icon,
  size = 24,
  color = "currentColor",
  animation = "none",
  className,
}: AnimatedIconProps) {
  const animationClass = {
    pulse: "animate-pulse-subtle",
    bounce: "animate-bounce",
    spin: "animate-spin",
    float: "animate-float",
    none: "",
  };

  return (
    <div className={cn("inline-flex", animationClass[animation], className)}>
      <Icon size={size} color={color} />
    </div>
  );
}
