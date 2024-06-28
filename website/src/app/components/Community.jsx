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
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b98072059023c1cb512919babbfd7091b1e6f4c30e17685f334605454329f07?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      message: ` ${communityData.text1}`,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b6276de1c719c39f7ef529931d0f9363baf8c463fed31657c275cc214691980?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      message: ` ${communityData.text2}`,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/00bd5a9f903d195224eb1daadeb0557f1d7ac99bc58a161a20213f7e4037c86b?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      message: ` ${communityData.text3}`,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b6276de1c719c39f7ef529931d0f9363baf8c463fed31657c275cc214691980?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      message: ` ${communityData.text4}`,
    },
  ];

  return (
    <div className="w-[100%] flex flex-col justify-center items-center mt-[50px] mb-[50px] mobile:mt-[100px] gap-[50px]   mobile:mb-[100px]">
      <header className="font-Pattaya flex items-center justify-center text-[#094C3B] text-[25px] mobile:text-[45px]">
        {communityData.title}
      </header>

      <div className="w-[100%] flex max-mobile:flex-col justify-center items-center gap-[30px] tab:gap-[110px]  font-sarabun mobile:translate-x-[-40px] tab:translate-x-[-10%]">
        <div className="text-gray-700 bg-[#FFFAF0] mobile:w-[350px] tab:w-[400px] py-[20px] flex justify-center items-center text-[16px] mobile:text-[18px] tab:text-[22px] text-center rounded-lg border-[1px] border-black">
          {communityData.content.map((paragraph, index) => (
            <p className="px-6" key={index}>
              {paragraph.children[0].text}
            </p>
          ))}
        </div>

        <div className="relative flex flex-col w-fit gap-[10px]">
          {images.map(({ message, src }, index) => {
            return (
              <div
                key={index}
                className={`w-[100%] h-min-fit flex  justify-center ${
                  (index === 1 || index === 3) &&
                  "mobile:translate-x-[30%] tab:translate-x-[60%]"
                }`}
              >
                <img
                  src={src}
                  width={100}
                  height={60}
                  className="w-[100%] h-min-fit"
                  alt="image"
                />
                <p className="absolute flex justify-center items-center text-white text-[16px] box-border p-[6px] mobile:p-[10px]">
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
