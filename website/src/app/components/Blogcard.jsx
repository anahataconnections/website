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
    <div className="w-[320px]">
      <div>
        {/* <img src={imageUrl} alt="" className="w-[300px]" /> */}
        <Image
          src={imageUrl}
          width={500}
          height={300}
          className="w-[100%] h-[60%]"
          alt="Screenshots of the dashboard project showing desktop and mobile versions"
        />
      </div>

      <div className="w-[100%] h-[40%] flex flex-col items-center gap-[20px] bg-[#094C3B] text-center text-white  font-sarabun rounded-b-2xl box-border pt-[20px]">
        <div className="text-lg font-bold">{heading}</div>
        <p className="text-[#9CA3AF]">{formatDate(published)}</p>
        <p className=" w-[80%] text-[16px] mobile:text-[18px]  pb-[30px]">
          {data}
        </p>
      </div>
    </div>
  );
};

export default Blogcard;
