/* eslint-disable */
"use client";
import React from "react";
import Image from "next/image";
import "./event.css";
import { formatDate } from "@/helpers/blog";

export type EventsProps = {
  events: any[];
};

const Eventcard = (props: EventsProps) => {
  const { events } = props;
  return (
    <div className="flex font-sarabun item-center justify-between overflow-x-hidden relative z-[11]">
      {events.map((item: any) => {
        return (
          <div key={item.id} className="w-[400px]">
            <div className="mx-6">
              <Image
                src={item.attributes.image.data.attributes.url}
                width={400}
                height={300}
                className="border-solid h-52 w-full  rounded-t-xl border-2 border-[0,0,0,0.45] object-cover"
                alt="Screenshots of  the dashboard project showing desktop and mobile versions"
              />

              <div className="bg-white px-5  text-black py-5 rounded-b-2xl border-solid border-2 border-[0,0,0,0.45]">
                <div className=" text-lg font-bold w-auto truncate">
                  {item.attributes.name}...
                </div>

                <div className="py-1 text-gray-500">
                  {formatDate(item.attributes.date)}
                </div>

                <div className="weight font-sarabun text-gray-500  py-5">
                  {item.attributes.description[0].children[0].text.substring(
                    0,
                    90
                  )}
                  ...
                </div>

                <button
                  className="mt-2 bg-[#094C3B] text-white rounded-[3px] px-14 py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold"
                  type="submit"
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
