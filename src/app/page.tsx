"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import GetStartedButton from "@/components/buttons/GetStartedButton";

export default function Home() {
  return (
    <div>
      <div className="h-[calc(80vh-70px)] bg-linear-180 from-light to-secondary-light m-2 rounded-2xl flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] w-full px-4">
          {/* Left Section */}
          <div className="flex flex-col justify-center h-full w-full px-4">
            <h1 className="text-7xl 2xl:text-8xl font-playfair font-semibold mb-2">
              <span className="text-primary">Connect </span>with Industry Experts. <span className="text-primary">Unlock </span> Your Future.
            </h1>
            <p className="text-medium font-montserrat font-semibold text-base mb-4">
            Join our platform to learn directly from experienced professionals, grow your network, and achieve your career goals.
            </p>
            <div className="flex flex-row gap-4">
            <GetStartedButton text="Find a Mentor" onClick={()=>console.log("clicked calcel")} />
            <GetStartedButton text="Become a Mentor" onClick={()=>console.log("clicked calcel")} />

            </div>
            
          </div>

          {/* Right Section */}
          <div className="flex justify-center h-full w-full">
            

            {/* Image at the Bottom */}
            <div className="">
              <Image
                src="/bg-1.png" // Replace with your image path
                alt="Mentor Illustration"
                width={1000}
                height={1000}
                className="rounded-lg object-cover w-[calc(80vh-70px)] h-[calc(80vh-70px)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
