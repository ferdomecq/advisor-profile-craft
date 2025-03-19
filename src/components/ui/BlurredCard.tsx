
import React from "react";
import { cn } from "@/lib/utils";

interface BlurredCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "glass" | "solid" | "outline";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

export function BlurredCard({
  children,
  className,
  variant = "default",
  padding = "md",
  hover = false,
  ...props
}: BlurredCardProps) {
  const paddings = {
    none: "p-0",
    sm: "p-3",
    md: "p-5",
    lg: "p-8",
  };

  const variants = {
    default: "bg-white/90 border border-gray-100 shadow-card",
    glass: "glass-card",
    solid: "bg-white border border-gray-200 shadow-card",
    outline: "bg-transparent border border-gray-200",
  };

  return (
    <div
      className={cn(
        "rounded-xl backdrop-blur-sm transition-all duration-300",
        variants[variant],
        paddings[padding],
        hover && "hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
