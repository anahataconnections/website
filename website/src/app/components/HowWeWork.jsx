/* eslint-disable */

import React from "react";
import Image from "next/image";

const HowWeWork = () => {
  return (
    <div className="flex items-end justify-center -translate-y-32 mt-4  ">
    <div className="w-[78%] custom2:w-[75vw] custom3:w-[72vw] customMax:w-[75vw]  h-[270px]  max-md:h-[200px]
         md:mx-20 custom3:mx-32  customMax:mx-24 bg-[rgb(240,253,249)]">
      <header className="font-Pattaya flex items-center justify-center text-[2.2rem] text-[#0C6242] md:max-lg:text-[42px]">
        How We Work
      </header>

      <div className="grid grid-cols-3 pt-10 font-medium font-sarabun">
        <div className="flex flex-col items-center justify-center ">
          <div>
            {/* <img src={one} alt="" /> */}
            <Image
            src="/assets/create.png"
            width={45}
           height={45}
            className=" md:block  max-md:w-10 max-md:mt-3"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          </div>
            <div className=" mt-2 text-[18px] text-black font-medium  md:max-lg:text-[10px] max-md:text-[8px] ">Create Account</div>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-2 border-x-2 border-black">
          <div>
            {/* <img src={two} alt="" /> */}
            <Image
            src="/assets/discover.png"
                width={45}
                height={45}
            className=" md:block lg:mr-8 max-md:w-10 max-sm:w-6 max-sm:mt-3"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          </div>
            <div className="text-[18px] text-black font-medium md:max-lg:text-[10px] max-md:text-[8px] max-sm:text-[6px]">Discover Compatible Profiles</div>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <div>

            <Image
            src="/assets/connection.png"
                width={45}
                height={45}
            className=" md:block lg:mr-8 max-md:w-10 max-md:mt-3"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          </div>
            <div className=" mt-2 text-[18px] text-black font-medium md:max-lg:text-[10px] max-md:text-[8px] max-sm:text-[6px]">Build Meaningful Connections</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HowWeWork;
