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
        const res = await fetch(`https://cms.anahataaconnections.com/api/events/?populate=*`);
        const data = await res.json();
        setEvents(data.data); // Update state with fetched data
      } catch (error) {
        console.error('Failed to fetch events:', error);
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <div className="order-2 lg:order-1 px-6 justify-center items-center flex flex-row w-full lg:w-[80vw] lg:-translate-x-20 xl:px-28">
          <Eventcard events={events} />
        </div>
        <div className="lg:translate-x-72 custom3:translate-x-76 mt-8 translate-y-4  order-1 lg:order-2 w-full lg:w-[20vw] border-b border-gray-300 lg:border-0">
          <h1 className="text-3xl font-bold border-b border-gray-300 pb-2 px-6 lg:px-0 text-black">
            Filter
          </h1>
          <form className="my-8 relative text-black px-6   ">
            <h1 className="text-2xl my-4 font-bold">Select Date Range</h1>

            <input
              type="date"
              className="w-full lg:max-w-md mt-2 h-10 border border-gray-300 px-4"
              placeholder="MM/DD/YYYY"
              id="date"
              name="bday"
            />
            <p className="my-2 text-xs text-gray-600">MM/DD/YYYY</p>
            {/* <div className="flex flex-col mt-4">
              <h1 className="text-2xl my-2 font-bold">Event Agenda</h1>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="relationship"
                  className="w-4 h-4 mr-2"
                  name="agenda"
                  value="relationship"
                />
                <label htmlFor="relationship">Relationship</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="life_partner"
                  className="w-4 h-4 mr-2"
                  name="agenda"
                  value="life_partner"
                />
                <label htmlFor="life_partner">Life Partner</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="marriage"
                  className="w-4 h-4 mr-2"
                  name="agenda"
                  value="marriage"
                />
                <label htmlFor="marriage">Marriage</label>
              </div>
            </div> */}
            {/* <div className="flex flex-col mt-4">
              <h1 className="text-2xl my-2 font-bold">Sort By:</h1>
              <button className="border border-green-500 hover:bg-[#094C3B] hover:text-white font-bold py-2 px-4 rounded-3xl my-2 w-[180px]">
                Duration
              </button>
              <button className="border border-green-500 hover:bg-[#094C3B] hover:text-white font-bold py-2 px-4 rounded-3xl my-2 w-[180px]">
                Feature Event
              </button>
              <button className="border border-green-500 hover:bg-[#094C3B] hover:text-white font-bold py-2 px-4 rounded-3xl my-2 w-[180px]">
                Relevance
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </main>
  );
};
export default Events;
