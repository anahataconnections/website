/* eslint-disable */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "./Slider";
import Eventcard from "./eventcard";
import SliderProgressBar from "../components/SliderProgressBar";
import { useAnimationControls } from "framer-motion";
import { format } from "date-fns";

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

interface Event {
  id: number;
  attributes: {
    name: string;
    date: string;
    description: {
      type: string;
      children: {
        text: string;
        type: string;
      }[];
    }[];
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

const Events = () => {
  const [events, setEvents] = useState<Event[] | null>(null);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://cms.anahataaconnections.com/api/events/?populate=*`
        );
        const data = await res.json();
        setEvents(data.data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchData();
  }, []);

  if (!events) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <main className="bg-white scroll-smooth overflow-y-auto z-[11]">
      <div>
        <Slider />
        <div className="font-Pattaya mt-4 flex justify-center items-center text-3xl md:text-5xl text-[#094C3B] pb-6 md:pb-10">
          Upcoming Event
        </div>
      </div>

      <h1 className="text-xl md:text-2xl font-bold px-2 md:px-4 text-center">
        Select Date Range
      </h1>
      <form className="my-4 md:my-8 relative text-black px-2 md:px-6 flex w-full justify-start">
        <div className="flex flex-wrap w-full justify-center gap-x-5 gap-y-4">
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
            <p className="my-2 text-xs text-gray-600">START DATE</p>
            <input
              type="date"
              className="w-full mt-2 h-10 border border-gray-300 px-4"
              placeholder="Start Date"
              id="startDate"
              name="startDate"
              value={startDate || ""}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
            <p className="my-2 text-xs text-gray-600">END DATE</p>
            <input
              type="date"
              className="w-full mt-2 h-10 border border-gray-300 px-4"
              placeholder="End Date"
              id="endDate"
              name="endDate"
              value={endDate || ""}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </form>

      <div className="flex items-center justify-center">
        <div className="px-2 md:px-6 justify-center items-center flex flex-col flex-wrap">
          <Eventcard
            events={
              startDate && endDate
                ? events.filter((event) => {
                    const eventDate = new Date(event.attributes.date);
                    return (
                      eventDate >= new Date(startDate) &&
                      eventDate <= new Date(endDate)
                    );
                  })
                : events
            }
          />
        </div>
      </div>
    </main>
  );
};

export default Events;
