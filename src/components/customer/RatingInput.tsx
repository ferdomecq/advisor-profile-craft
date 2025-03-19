
import React from "react";
import { Star } from "lucide-react";

interface RatingInputProps {
  currentRating: number;
  onChange: (rating: number) => void;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
}

const RatingInput: React.FC<RatingInputProps> = ({
  currentRating,
  onChange,
  maxRating = 5,
  size = "md",
}) => {
  const starSizes = {
    sm: 16,
    md: 24,
    lg: 32,
  };
  
  const containerClasses = {
    sm: "gap-1",
    md: "gap-1.5",
    lg: "gap-2",
  };
  
  const handleClick = (rating: number) => {
    onChange(rating);
  };
  
  return (
    <div className={`flex items-center ${containerClasses[size]}`}>
      {Array.from({ length: maxRating }).map((_, i) => {
        const starValue = i + 1;
        const isFilled = starValue <= currentRating;
        
        return (
          <button
            key={i}
            type="button"
            onClick={() => handleClick(starValue)}
            className="focus:outline-none transition-transform hover:scale-110"
          >
            <Star
              size={starSizes[size]}
              className={`cursor-pointer transition-colors ${
                isFilled ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          </button>
        );
      })}
      <span className="ml-2 text-sm font-medium text-gray-600">
        {currentRating.toFixed(1)}
      </span>
    </div>
  );
};

export default RatingInput;
