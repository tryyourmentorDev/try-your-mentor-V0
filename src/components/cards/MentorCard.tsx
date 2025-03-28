"use client"
import React from "react";
import Image from 'next/image'
import SubmitButton from "../buttons/SubmitButton";


const VideoCard: React.FC = () => {
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

      {/* Badge */}
      <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-md">
        FREE
      </span>

      {/* Title & Duration */}
      <div className="mt-3">
        <h2 className="text-lg font-semibold">Contracts to Protect Your Film</h2>
        <p className="text-gray-500 text-sm">30 minutes</p>
      </div>
      <div className="flex justify-between items-center mt-4">
       <SubmitButton onClick={()=>console.log("clicked calcel")} text="Select Mentor"/>
      </div>
    </div>
  );
};

export default VideoCard;
