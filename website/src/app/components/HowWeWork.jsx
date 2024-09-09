/* eslint-disable */

import React from "react";
import Image from "next/image";
import { BsPersonAdd } from "react-icons/bs";
import { TiGroupOutline } from "react-icons/ti";
import { FaMagnifyingGlass } from "react-icons/fa6";

const HowWeWork = () => {
  return (
    <div className="w-full p-8 shadow-xl rounded-xl flex flex-col justify-end gap-4 bg-[rgb(240,253,249)]">
      <header className="font-Pattaya flex items-center justify-center text-[#0C6242] text-4xl">
        How We Work
      </header>

      <div className=" flex max-mobile:flex-col items-center max-mobile:gap-[20px] font-medium font-sarabun">
        <div className=" mobile:w-[33%] flex flex-col gap-2 items-center justify-center">
          <Image
            src={"/assets/addAccound-hww.svg"}
            width={100}
            height={100}
            alt="addaccount logo"
            className="w-[65px] h-[65px]"
          />
          <div className=" text-14 text-center text-black font-medium ">
            Create Account
          </div>
        </div>

        <div className="mobile:w-[33%] flex flex-col items-center gap-2 justify-center max-mobile:border-y-[1px] mobile:border-x-2 border-black max-mobile:py-[20px]">
          {/* <img src={two} alt="" /> */}
          <FaMagnifyingGlass className="text-[#0C6242] text-[65px]" />

          <div className="text-14 text-center text-black font-medium">
            Discover Compatible Profiles
          </div>
        </div>

        <div className="mobile:w-[33%] flex flex-col  items-center gap-2 justify-center ">
          <Image
            src={"/assets/connectioin-hww.svg"}
            width={50}
            height={50}
            alt="addaccount logo"
            className="w-[65px] h-[65px]"
          />
          <div className=" text-14 text-center text-black ">
            Build Meaningful Connections
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
