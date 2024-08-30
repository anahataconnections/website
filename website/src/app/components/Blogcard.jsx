/* eslint-disable */
import React from "react";
import Image from "next/image";
import { formatDate } from "@/helpers/blog";

const Blogcard = ({ imageUrl, heading, data, published }) => {
  return ( 
    <div className=" mobile:w-[250px] tab:w-[300px] shadow-xl rounded-xl bg-[#094C3B]">
      <div>
        <Image
          src={imageUrl}
          width={500}
          height={300}
          className="w-full h-60 rounded-t-xl object-cover"
          alt="Screenshots of the dashboard project showing desktop and mobile versions"
        />
      </div>

      <div className="w-[100%] h-[40%] flex flex-col items-center gap-[20px] bg-[#094C3B] text-center text-white  font-sarabun rounded-b-2xl box-border pt-[20px]">
        <div className="text-[16px] tab:text-[18px] font-bold">{heading}</div>
        <p className="text-[#9CA3AF] text-sm">{formatDate(published)}</p>
        <p className=" w-[80%] text-base pb-[30px]">
          {data}
        </p>
      </div>
    </div>
  );
};

export default Blogcard;
