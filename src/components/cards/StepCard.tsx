"use client";
import React from "react";
import Image from "next/image";
import SubmitButton from "../buttons/SubmitButton";
import StarDisplay from "../progress/StarDisplay";

interface StepCardProps {
  title: string;
  description: string;
  step: number;
}

const StepCard: React.FC<StepCardProps> = ({
  title,
  description,
  step
}) => {

  return (
    <div className="grid grid-cols-[1fr_3fr] gap-x-4 rounded-2xl shadow-md p-4">
      <div className="flex justify-center items-start space-x-1 rounded-full h-full w-40 bg-[url('/step-11.jpg')] bg-cover bg-center">
        {/* <p className="text-sm font-playfair font-semibold mx-2 text-secondary">
          {"Step"}
        </p>
        <h1 className="text-9xl font-playfair font-semibold text-secondary">{step}</h1> */}
      </div>
      <div>
        <h1 className="text-4xl font-kanit font-semibold mb-2 text-secondary">
          {title}
        </h1>
        <p className="text-lg font-montserrat font-medium text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
