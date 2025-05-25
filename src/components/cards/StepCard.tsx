"use client";
import React from "react";

interface StepCardProps {
  title: string;
  description: string;
  step: number;
}

const StepCard: React.FC<StepCardProps> = ({
  title,
  description
}) => {

  return (
    <div className="grid gird-cols-1 md:grid-cols-[1fr_3fr] gap-x-4 rounded-2xl shadow-md p-4">
      <div className="flex justify-center items-start space-x-1 rounded-2xl h-full w-40 bg-[url('/step-11.jpg')] bg-cover bg-center">
        {/* <p className="text-sm font-playfair font-semibold mx-2 text-secondary">
          {"Step"}
        </p>
        <h1 className="text-9xl font-playfair font-semibold text-secondary">{step}</h1> */}
      </div>
      <div>
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary">
          {title}
        </h1>
        <p className="text-lg font-kanit font-medium text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
