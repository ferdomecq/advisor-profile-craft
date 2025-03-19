
import React from "react";
import { Star } from "lucide-react";
import { AnimatedEntry } from "@/lib/animation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
  readOnly?: boolean;
}

export default function Rating({
  rating,
  maxRating = 5,
  size = "md",
  showValue = false,
  className,
  readOnly = true,
}: RatingProps) {
  const ratingValue = Math.max(0, Math.min(rating, maxRating));
  
  const starSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };
  
  const containerClasses = {
    sm: "gap-1",
    md: "gap-1.5",
    lg: "gap-2",
  };
  
  return (
    <div className={cn("flex items-center", containerClasses[size], className)}>
      <div className="flex">
        {Array.from({ length: maxRating }).map((_, i) => (
          <Star
            key={i}
            size={starSizes[size]}
            className={cn(
              "text-gray-300 transition-colors",
              i < ratingValue && "fill-yellow-400 text-yellow-400"
            )}
          />
        ))}
      </div>
      
      {showValue && (
        <span className="ml-2 text-sm font-medium text-gray-600">
          {ratingValue.toFixed(1)}
        </span>
      )}
    </div>
  );
}

export function AdvisorRatingCard({ 
  rating, 
  reviewCount,
  readOnly = true,
}: { 
  rating: number; 
  reviewCount: number;
  readOnly?: boolean;
}) {
  return (
    <AnimatedEntry animation="fade-in" className="w-full">
      <Card className="overflow-hidden border-gray-100">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Advisor Rating</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="text-3xl font-bold text-gray-800">{rating.toFixed(1)}</span>
              <Rating rating={rating} size="lg" className="mt-1" />
            </div>
            <div>
              <p className="text-gray-600">
                Based on <span className="font-medium">{reviewCount}</span> client reviews
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Ratings reflect clients' satisfaction with the advisor's services
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedEntry>
  );
}
