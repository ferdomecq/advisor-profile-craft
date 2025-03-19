
import React from "react";
import { cn } from "@/lib/utils";

interface ProfilePictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: "sm" | "md" | "lg" | "xl";
  border?: boolean;
  statusIndicator?: "online" | "offline" | "away" | "busy" | null;
}

export function ProfilePicture({
  src,
  alt = "Profile picture",
  size = "md",
  border = false,
  statusIndicator = null,
  className,
  ...props
}: ProfilePictureProps) {
  const sizeMap = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };

  const statusColors = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    away: "bg-yellow-500",
    busy: "bg-red-500",
  };

  return (
    <div className="relative inline-block">
      <img
        src={src}
        alt={alt}
        className={cn(
          "object-cover rounded-full transition-transform duration-300",
          sizeMap[size],
          border && "border-2 border-white ring-2 ring-gray-100",
          className
        )}
        loading="lazy"
        {...props}
      />
      
      {statusIndicator && (
        <span
          className={cn(
            "absolute bottom-0 right-0 block rounded-full border-2 border-white",
            size === "sm" ? "w-2.5 h-2.5" : "w-3.5 h-3.5",
            statusColors[statusIndicator]
          )}
        />
      )}
    </div>
  );
}
