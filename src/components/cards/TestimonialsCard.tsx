"use client";
import React from "react";

interface TestimonialsCardProps {
  review: string;
  name: string;

}

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  review,
  name
}) => {

  return (
    <div className="flex flex-col justify-start w-full min-h-[100px] bg-linear-45 from-secondary-light to-primary-light shadow-md rounded-2xl px-6 pt-14 pb-4 mt-6 relative">
      <div className="absolute top-0 left-0 text-secondary text-[100px] leading-none font-bold font-playfair px-3 py-1">
      ’’
        </div>
        <div className="flex font-montserrat font-semibold text-base mb-4">
        {review}
        </div>
        <div className="flex justify-end">
          <p className="font-montserrat font-bold tect-2xl text-base">{name}</p>
        </div>
       
    </div>
  );
};

export default TestimonialsCard;
