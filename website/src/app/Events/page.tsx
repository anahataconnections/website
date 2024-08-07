/* eslint-disable */

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "./Slider";
import Eventcard from "./eventcard";
import SliderProgressBar from "../components/SliderProgressBar";
import { useAnimationControls } from "framer-motion";

const wrapperVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.1,
    },
  },
  exit: {
    x: "-100vh",
    transition: {
      ease: "easeInOut",
    },
  },
};

const Events = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://cms.anahataaconnections.com/api/events/?populate=*`
        );
        const data = await res.json();
        setEvents(data.data); // Update state with fetched data
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array means this effect runs once on mount

  if (!events) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return (
    <main className="bg-white w-[100%] scroll-smooth overflow-y-hidden z-[11]">
      <div className="">
        <Slider />
        <div className="font-Pattaya my-4 flex justify-center items-center text-5xl text-[#094C3B] pb-10 custom3:pt-10">
          Upcoming Event
        </div>
      </div>

      <h1 className="text-2xl mx-32 my-4 font-bold px-6">Select Date Range</h1>
      <form className="mx-32 my-8 relative text-black px-6 flex w-full justify-start">
        <div className="flex flex-wrap w-full justify-start gap-x-5">
          <div className="flex flex-col w-full md:w-1/5">
            <p className="my-2 text-xs text-gray-600">START DATE</p>
            <input
              type="date"
              className="w-full mt-2 h-10 border border-gray-300 px-4"
              placeholder="Start Date"
              id="startDate"
              name="startDate"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/5">
            <p className="my-2 text-xs text-gray-600">END DATE</p>
            <input
              type="date"
              className="w-full mt-2 h-10 border border-gray-300 px-4"
              placeholder="End Date"
              id="endDate"
              name="endDate"
            />
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 overflow-x-hidden">
        <div className="order-2 lg:order-1 px-6 justify-center items-center flex flex-row w-full lg:w-[80vw] ">
          <Eventcard events={events} />
        </div>
      </div>
    </main>
  );
};
export default Events;
