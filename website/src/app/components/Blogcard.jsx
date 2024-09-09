/* eslint-disable */
import React from "react";
import Image from "next/image";
import { formatDate } from "@/helpers/blog";

const Blogcard = ({ imageUrl, heading, data, published }) => {
  return (
    <div className="w-72 h-max shadow-lg hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl rounded-xl bg-[#094C3B] overflow-hidden">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={imageUrl}
          width={700}
          height={700}
          className="object-contain"
          alt="Screenshots of the dashboard project showing desktop and mobile versions"
        />
      </div>
      <div className="flex p-4 flex-col items-center gap-2 bg-[#094C3B] text-center text-white  font-sarabun pt-[20px]">
        <div className="text-lg font-bold">{heading}</div>
        <p className="text-[#9CA3AF] text-sm">{formatDate(published)}</p>
        <p className=" w-[80%] text-base">
          {data.substring(0, 50) + "..."}
        </p>
      </div>
    </div>
  );
};

export default Blogcard;
