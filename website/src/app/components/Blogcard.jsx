/* eslint-disable */
import React from "react";
import Image from "next/image";

const Blogcard = ({ imageUrl, heading, data, details }) => {
  return (
    <div className="w-[20.33rem] flex flex-col -space-y-2">
      <div>
        {/* <img src={imageUrl} alt="" className="w-[300px]" /> */}
        <Image
            src={imageUrl}
            width={500}
            height={300}
            className=""
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
      </div>

      <div className="bg-[#094C3B] text-center text-white py-5 rounded-b-2xl">
        <div className=" text-lg font-bold">
          {heading}
        </div>
        <div className="text-[22px] text-[#9CA3AF] py-2 ">{details}</div>
        <div className="pt-4  w-[300px]  lg:mr-4 md:ml-6 h-[100px] ">{data}</div>
      </div>
    </div>
  );
};

export default Blogcard;
