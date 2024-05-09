import React from "react";
// import text from "../assets/text.png";
import Image from "next/image";
const Community = () => {
  return (
    <div className="h-full my-20">
      <header className="font-Pattaya flex items-center justify-center text-[#094C3B] text-[52px] sm:max-md:text-[42px] max-sm:text-[32px]">
        Our Community
      </header>

      <div className="flex items-center justify-center pt-10 pb-10 mx-5">
        <div className=" text-gray-700  font-semibold bg-[#FFFAF0] w-[460px] h-[300px] text-[22px] sm:max-md:text-[15px] sm:max-md:w-[300px] max-sm:h-[200px] max-sm:text-[11px] text-center flex items-center justify-center rounded-lg md:p-4 px-5 max-sm:px-2 max-sm:py-2 border border-black">
          At Anahata Connection, we believe that love transcends physical
          boundaries. Our sacred platform brings together yogic souls seeking
          authentic connections rooted in mindfulness, compassion, and shared
          spiritual practices.
        </div>
        <div>
          {/* <img src={text} alt="" className="h-[340px]" /> */}
          <Image
            src="/assets/conversation.png"
            width={400}
            height={400}
            className="sm:max-md:w-[300px] md:block mr-8"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
