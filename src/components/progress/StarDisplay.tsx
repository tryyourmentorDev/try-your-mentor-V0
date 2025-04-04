
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

interface StarDisplayProps {
  rating: number; // Rating value (e.g., 3.5, 4)
  totalStars?: number;
}

export default function StarDisplay({ rating, totalStars = 5 }: StarDisplayProps) {
  return (
    <div className="flex justify-center items-center space-x-1">
        <p className="text-xs font-kanit text-base f">{rating}</p>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <StarIcon
            key={starValue}
            // className={starValue <= rating ? "text-yellow-400" : "text-gray-300"}
            className={`w-3 h-3 ${starValue <= rating ? "text-yellow-400" : "text-gray-300"}`}
            // fill={starValue <= rating ? "currentColor" : "none"}
          />
        );
      })}
      {/* <p className="text-xs font-kanit text-base f">{`(${rating})`}</p> */}
    </div>
  );
}
