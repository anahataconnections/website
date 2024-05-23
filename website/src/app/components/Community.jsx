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

  return (
    <div className="w-[100%] flex flex-col justify-center items-center mt-[50px] mb-[50px] mobile:mt-[100px] gap-[50px]   mobile:mb-[100px]  ">
      <header className="font-Pattaya flex items-center justify-center text-[#094C3B] text-[25px] mobile:text-[45px]">
        {communityData.title}
      </header>

      <div className="w-[100%] flex max-mobile:flex-col justify-center items-center gap-[50px] mobile:gap-[150px]  font-sarabun mobile:translate-x-[-100px]">
        <div className="text-gray-700 bg-[#FFFAF0] small-tab:w-[450px] tab:w-[400px] py-[30px] flex justify-center items-center small-tab:text-[20px] tab:text-[22px] text-center rounded-lg border-[1px] border-black">
          {communityData.content.map((paragraph, index) => (
            <p className="px-6" key={index}>
              {paragraph.children[0].text}
            </p>
          ))}
        </div>

        <ChatBox />
      </div>
    </div>
  );
};

export default Community;
