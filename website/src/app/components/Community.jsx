/* eslint-disable */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ChatBox from './ChatBox';

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
    <div className="h-full -translate-y-8  mb-4">
      <header className="font-Pattaya flex items-center justify-center text-[#094C3B] text-[2.2rem] ">
        {communityData.title}
      </header>

      <div className="flex items-center justify-center py-8 mx-5 font-sarabun -translate-x-10 custom3:gap-7">
        <div className="text-gray-700  bg-[#FFFAF0] w-[460px] custom2:w-[500px] custom3:w-[500px] customMax:w-[570px] h-[300px] text-[18px] sm:max-md:text-[15px] max-sm:text-[11px] text-center flex items-center  justify-center rounded-lg md:p-4 px-8 max-sm:px-2 max-sm:py-2 border border-black customMax:-translate-x-16">
          {communityData.content.map((paragraph, index) => (
            <p className="px-6" key={index}>{paragraph.children[0].text}</p>
          ))}
        </div>
        <div className="-translate-x-6 custom3:-translate-x-[1.6rem] customMax:translate-x-2">
          <ChatBox/>
        </div>
      </div>
    </div>
  );
};

export default Community;
