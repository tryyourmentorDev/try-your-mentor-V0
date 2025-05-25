"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import GetStartedButton from "@/components/buttons/GetStartedButton";
import StepCard from "@/components/cards/StepCard";
import TestimonialsCard from "@/components/cards/TestimonialsCard";
import FAQ from "@/components/FAQ";

import howItWorks from "@/config/howItWorks.json";
import testimonials from "@/config/testimonials.json";
import faq from "@/config/faq.json";

interface Testimonial {
  name: string;
  review: string;
}

export default function Home() {

  const router = useRouter();

  const testimonialsFixedArray: Testimonial[] = Array.from({ length: 4 });
  // const remainingTestimonials = testimonials.length % 4;

  const getEnd = (
    testimonials: Array<Testimonial>,
    testimonialsFixedArray: Array<Testimonial>,
    i: number
  ): number => {
    const size = testimonialsFixedArray.length;
    const quotient = Math.trunc(testimonials.length / size);
    const remainder = testimonials.length % size;
    const end = (i + 1) * quotient + (i < remainder ? i + 1 : remainder);
    console.log("end ", testimonials.length, i, end);
    return end;
  };
  const getStart = (
    testimonials: Array<Testimonial>,
    testimonialsFixedArray: Array<Testimonial>,
    i: number
  ): number => {
    const size = testimonialsFixedArray.length;
    const quotient = Math.trunc(testimonials.length / size);
    const remainder = testimonials.length % size;
    const start = i * quotient + (i < remainder ? i : remainder);
    console.log("start ", i, start);
    return start;
  };

  // const testimonialsArray = testimonials.map((item, index) => (
  //   <TestimonialsCard key={index} name={item.name} review={item.review} />
  // ));

  return (
    <div>
      <div className="h-[calc(80vh-70px)] bg-linear-180 from-light to-secondary-light mx-2 mb-4 rounded-2xl flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] w-full px-4">
          {/* Left Section */}
          <motion.div
            className="flex flex-col justify-center h-full w-full px-4"
            initial={{ opacity: 0, x: -50 }} // Start hidden and slightly to the left
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to the original position
            transition={{ duration: 0.4, ease: "easeOut" }} // Animation duration and easing
          >
            <motion.h1
              className="text-5xl md:text-7xl 2xl:text-8xl font-playfair font-semibold mb-2"
              initial={{ opacity: 0, y: -20 }} // Start hidden and slightly above
              animate={{ opacity: 1, y: 0 }} // Fade in and slide to the original position
              transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
            >
              <span className="text-primary">Connect </span>with Industry
              Experts. <span className="text-primary">Unlock </span> Your
              Future.
            </motion.h1>
            <motion.p
              className="text-medium font-montserrat font-semibold text-base mb-4"
              initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
              animate={{ opacity: 1, y: 0 }} // Fade in and slide to the original position
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} // Add a slight delay
            >
              Join our platform to learn directly from experienced
              professionals, grow your network, and achieve your career goals.
            </motion.p>
            <motion.div
              className="flex flex-row gap-4"
              initial={{ opacity: 0, scale: 0.9 }} // Start hidden and slightly scaled down
              animate={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} // Add a slight delay
            >
              <GetStartedButton
                text="Find a Mentor"
                onClick={() => router.push("/mentor-booking/register")}
              />
              <GetStartedButton
                text="Become a Mentor"
                onClick={() => console.log("clicked Become a Mentor")}
              />
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="hidden md:flex justify-center h-full w-full"
            initial={{ opacity: 0, x: 50 }} // Start hidden and slightly to the right
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to the original position
            transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
          >
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
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col justify-center text-center items-center w-full py-6 px-4 shadow-md mb-12 bg-linear-45 from-primary to-secondary">
        <motion.h1
          className="text-4xl font-montserrat font-bold text-light mb-5"
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly to the right
          animate={{ opacity: 1, y: 0 }} // Fade in and slide to the original position
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
        >
          Our Mission is to Bridge the Gap Between Learning and Real-World
          Experience
        </motion.h1>
        <motion.p
          className="text-sm font-montserrat font-semibold text-light"
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly to the right
          animate={{ opacity: 1, y: 0 }} // Fade in and slide to the original position
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
        >
          We believe that the best learning happens through real conversations
          with those who&apos;ve been there. Our platform connects mentees with
          seasoned industry professionals across tech, business, design, and
          more. Whether you&apos;re looking to grow your career, switch industries,
          or gain practical insights, we&apos;re here to help.
        </motion.p>
      </div>

      <div className="md:max-w-[70vw] mx-auto mb-12">
        <div className="flex flex-col justify-center items-center text-center w-full">
          <h1 className="text-5xl font-montserrat font-bold mb-2 text-base">
            How It Works
          </h1>
          <p className="text-sm font-montserrat font-semibold text-base">
            Steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4 mx-4">
          {howItWorks.map((item, index) => (
            <StepCard
              key={index}
              title={item.title}
              description={item.description}
              step={item.step}
            />
          ))}
        </div>
      </div>

      <div className="mb-12 md:max-w-[70vw] mx-auto items-center">
        <div className="flex flex-col justify-center items-center text-center w-full">
          <h1 className="text-5xl font-montserrat font-bold mb-2 text-base">
            What Our Users Say
          </h1>
          <p className="text-sm font-montserrat font-semibold text-base">
            Testimonials from our satisfied users
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 mb-4 mx-4">
          {testimonialsFixedArray.map((_, i) => (
            <div key={i} >
              {testimonials
                .slice(
                  getStart(testimonials, testimonialsFixedArray, i),
                  getEnd(testimonials, testimonialsFixedArray, i)
                )
                .map((item, index) => (
                  <TestimonialsCard
                    key={`${i}-${index}`}
                    name={item.name}
                    review={item.review}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>

<div className="flex items-center bg-linear-90 from-primary-light to-secondary-light py-4 mb-12 mx-2 rounded-2xl">
      <div className=" md:max-w-[50vw] mx-auto items-center">
      <div className="flex flex-col justify-center items-center text-center w-full mb-4">
          <h1 className="text-5xl font-montserrat font-bold mb-2 text-base">
          Have Questions?
          </h1>
          <p className="text-sm font-montserrat font-semibold text-base">
            FAQs
          </p>
        </div>
          <FAQ faqs={faq} />
      </div>
      </div>
    </div>
  );
}
