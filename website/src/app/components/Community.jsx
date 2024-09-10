/* eslint-disable */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ChatBox from "./ChatBox";

async function fetchCommunityData() {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/home?populate=*`
    );
    const response = await res.json();
    return response.data.attributes.our_community; // Extracting our_community data
  } catch (err) {
    console.error(err);
  }
}

const Community = () => {
  const [communityData, setCommunityData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCommunityData();
      setCommunityData(data);
    };
    fetchData();
  }, []);

  if (!communityData) {
    return <div>Loading...</div>;
  }

  const images = [
    {
      src: "/assets/chat/green.svg",
      message: ` ${communityData.text1}`,
    },
    {
      src: "/assets/chat/red.svg",
      message: ` ${communityData.text2}`,
    },
    {
      src: "/assets/chat/green.svg",
      message: ` ${communityData.text3}`,
    },
    {
      src: "/assets/chat/red.svg",
      message: ` ${communityData.text4}`,
    },
  ];

  return (
    <div className="w-[100%] flex flex-col justify-center items-center gap-4">
      <div className="font-Pattaya flex items-center justify-center text-[#094C3B] text-3xl lg:text-5xl">
        {communityData.title}
      </div>

      <div className="w-[100%] flex flex-col md:flex-row justify-center items-center gap-[30px] font-sarabun">
        <div className="text-gray-700 bg-[#FFFAF0] shadow-lg border mobile:w-[350px] tab:w-[400px] py-4 flex justify-center items-center text-lg rounded-lg ">
          {/* <div className=" w-80 rounded-lg shadow-lg bg-[#FFFAF0] text-lg p-4"> */}

          {communityData.content.map((paragraph, index) => (
            <p className="px-2 whitespace-pre-wrap" key={index}>
              {paragraph.children[0].text}
            </p>
          ))}
        </div>

        <div className="relative flex flex-col w-fit gap-[10px]">
          {images.map(({ message, src }, index) => {
            return (
              <div
                key={index}
                className={`w-[100%] h-min-fit flex  justify-center ${(index === 1 || index === 3) &&
                  // "mobile:translate-x-[30%] tab:translate-x-[60%]"
                  ""
                  }`}
              >
                <img
                  src={src}
                  width={100}
                  height={60}
                  className="w-full h-max"
                  alt="image"
                />
                <p className="absolute flex justify-center items-center text-white text-base box-border p-2 mobile:p-[10px]">
                  {message}
                </p>
              </div>
            );
          })}
        </div>
        {/* <ChatBox  /> */}
      </div>
    </div>
  );
};

export default Community;
