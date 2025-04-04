"use client"
import React from "react";
import Image from 'next/image'
import SubmitButton from "../buttons/SubmitButton";
import StarDisplay from "../progress/StarDisplay";

interface MentorCardProps {
  name: string;
  designation: string;
  rating?: number;
  isFree?: boolean;
  discount?: number;
  onSelect: (name: string) => void;
}


const VideoCard: React.FC<MentorCardProps> = ({
  name,
  designation, 
  rating=0,
  isFree=false,
  discount=0, 
  onSelect
}) => {

  const handleSelect = (name: string) => {
    onSelect(name);
  }
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full relative">
      {/* Video Thumbnail */}
      <div className="relative">
        <img
          src="/male.jpg"
          alt="Video Thumbnail"
          className="w-full h-48 object-cover rounded-2xl"
        />
      </div>

      {isFree ? (
        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-md">
          FREE
        </span>
      ) : (
        discount > 0 && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-md">
            {discount}% OFF
          </span>
        )
      )}
      {/* Video Duration */}

      {/* Title & Duration */}
      <div className="mt-3 min-h-20">
        <h2 className="text-xl font-kanit text-base font-semibold">{name}</h2>
        <div className="flex justify-between gap-3">
          <p className="text-base font-kanit text-sm">{designation}</p>
          <StarDisplay rating={rating} />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <SubmitButton
          onClick={() => handleSelect(name)}
          text="Select Mentor"
          fullWidth={true}
        />
      </div>
    </div>
  );
};

export default VideoCard;
