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
      <header className="font-Pattaya flex items-center justify-center text-[#094C3B] text-[52px] sm:max-md:text-[42px] max-sm:text-[32px] ">
        {communityData.title} {/* Dynamic title */}
      </header>

      <div className="flex items-center justify-center py-8 mx-5 font-sarabun -translate-x-10">
        <div className="text-gray-700 font-semibold bg-[#FFFAF0] w-[460px] customMax:w-[570px] h-[330px] text-[22px] sm:max-md:text-[15px] sm:max-md:w-[300px] max-sm:h-[200px] max-sm:text-[11px] text-center flex items-center  justify-center rounded-lg md:p-4 px-5 max-sm:px-2 max-sm:py-2 border border-black customMax:-translate-x-16">
          {communityData.content.map((paragraph, index) => (
            <p key={index}>{paragraph.children[0].text}</p>
          ))}
        </div>
        <div className="-translate-x-6 customMax:translate-x-2">
          <ChatBox/>
        </div>
      </div>
    </div>
  );
};

export default Community;
