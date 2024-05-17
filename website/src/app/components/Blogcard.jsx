/* eslint-disable */
import React from "react";
import Image from "next/image";

const formatDate = (publishedDate) => {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(publishedDate);
  return date.toLocaleDateString("en-US", options);
};

const Blogcard = ({ imageUrl, heading, data, published }) => {
  return (
    <div className="w-[20.33rem] custom1:w-[17rem] custom2:w-[19rem] flex flex-col -space-y-2 customMax:w-[25rem]">
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

      <div className="w-[20.33rem] custom1:w-[17rem]
      custom2:w-[19rem] customMax:w-[25rem]  bg-[#094C3B] text-center text-white py-5 rounded-b-2xl">
        <div className=" text-lg font-bold">
          {heading}
        </div>
        <p className="text-[#9CA3AF]">
        {formatDate(published)}
        </p>
        <div className="pt-4 mx-auto  w-[300px] h-[100px] text-center">{data}</div>
      </div>
    </div>
  );
};

export default Blogcard;
