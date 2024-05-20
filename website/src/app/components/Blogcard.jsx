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
    <div className="w-[20.33rem] custom1:w-[17rem] custom2:w-[19rem] custom3:w-[20rem] flex flex-col -space-y-2 customMax:w-[25rem]">
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
      custom2:w-[19rem] custom3:w-[20rem] customMax:w-[25rem]  bg-[#094C3B] text-center text-white py-5 rounded-b-2xl font-sarabun">
        <div className="text-lg font-bold">
          {heading}
        </div>
        <p className="text-[#9CA3AF]">
        {formatDate(published)}
        </p>
        <p className=" lg:py-2 lg:px-2 text-[1.2rem] lg:text-[0.7rem] custom3:text-[1rem]">{data}</p>
      </div>
    </div>
  );
};

export default Blogcard;
