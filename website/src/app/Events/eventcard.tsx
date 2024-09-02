"use client";
import React from "react";
import Image from "next/image";
import "./event.css";
import { format } from "date-fns";

export type EventsProps = {
  events: any[];
};

const truncateDescription = (description: string, maxLength: number) => {
  if (description.length <= maxLength) {
    return description;
  }
  return `${description.substring(0, maxLength)}...`;
};

const Eventcard = (props: EventsProps) => {
  if (props.events.length === 0) return <div>No Events</div>;

  const { events } = props;
  return (
    <div className="flex flex-wrap font-sarabun items-center justify-center md:justify-between relative z-[50]">
      {events.map((item: any) => {
        return (
          <div key={item.id} className="w-full sm:w-80 md:w-96 p-2 mb-6">
            <div className="mx-2 sm:mx-4 md:mx-6">
              <Image
                src={item.attributes.image.data.attributes.url}
                width={400}
                height={300}
                className="border-solid h-48 sm:h-52 w-full rounded-t-xl border-2 border-[0,0,0,0.45] object-cover"
                alt="Event image"
              />

              <div className="bg-white px-3 sm:px-5 text-black py-4 sm:py-5 rounded-b-2xl border-solid border-2 border-[0,0,0,0.45] shadow-lg">
                <div className="text-base sm:text-lg font-bold truncate">
                  {item.attributes.name}
                </div>

                <div className="py-1 text-sm sm:text-base text-gray-500">
                  {format(new Date(item.attributes.date), "MMM d, yyyy")}
                </div>

                <div className="weight font-sarabun text-sm sm:text-base text-gray-500 py-3 sm:py-5">
                  {truncateDescription(
                    item.attributes.description[0].children[0].text,
                    90
                  )}
                </div>

                <button
                  onClick={() =>
                    alert(
                      "You will be notified on your registered email and phone number!"
                    )
                  }
                  className="mt-2 bg-[#094C3B] text-white rounded-[3px] px-10 sm:px-14 py-2 sm:py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold text-sm sm:text-base w-full sm:w-auto"
                >
                  Notify
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Eventcard;
