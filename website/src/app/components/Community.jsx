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
    <div className="h-full -translate-y-40 mb-4 custom3:pt-14 custom3:px-[60px]">
      <header className="font-Pattaya flex items-center justify-center text-[#094C3B] customPhone:text-[1.5rem] text-[2.2rem]">
        {communityData.title}
      </header>

      <div className="flex items-center justify-center py-8 mx-5 font-sarabun -translate-x-10 custom3:gap-7 customPhone:pl-4">
        <div className="text-gray-700  bg-[#FFFAF0] w-[460px] customPhone:max-w-[210px] customPhone:max-h-[180px] custom2:w-[500px] custom3:max-w-[500px] customMax:w-[570px] h-[300px] text-[18px] custom3:max-h-[450px]  max-sm:text-[11px] text-center flex items-center  justify-center rounded-lg  px-8 max-sm:px-2 max-sm:py-1 border border-black customMax:-translate-x-16">
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
