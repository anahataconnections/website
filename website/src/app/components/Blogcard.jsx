/* eslint-disable */
import React from "react";
import Image from "next/image";
import { formatDate } from "@/helpers/blog";

const Blogcard = ({ imageUrl, heading, data, published }) => {
  return ( 
    <div className=" mobile:w-[250px] tab:w-[300px]">
      <div>
        <Image
          src={imageUrl}
          width={500}
          height={300}
          className="w-[100%] h-[60%]"
          alt="Screenshots of the dashboard project showing desktop and mobile versions"
        />
      </div>

      <div className="w-[100%] h-[40%] flex flex-col items-center gap-[20px] bg-[#094C3B] text-center text-white  font-sarabun rounded-b-2xl box-border pt-[20px]">
        <div className="text-[16px] tab:text-[18px] font-bold">{heading}</div>
        <p className="text-[#9CA3AF]">{formatDate(published)}</p>
        <p className=" w-[80%] text-[15px] tab:text-[18px]  pb-[30px]">
          {data}
        </p>
      </div>
    </div>
  );
};

export default Blogcard;
