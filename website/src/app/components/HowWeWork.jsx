/* eslint-disable */

import React from "react";
import Image from "next/image";
import { BsPersonAdd } from "react-icons/bs";
import { TiGroupOutline } from "react-icons/ti";
import { FaMagnifyingGlass } from "react-icons/fa6";

const HowWeWork = () => {
  return (
    <div className="w-[100%]  flex flex-col justify-end gap-[20px] mobile:gap-[50px] bg-[rgb(240,253,249)] box-border pt-[40px] pb-[40px]">
      <header className="font-Pattaya flex items-center justify-center text-[#0C6242] text-[25px] mobile:text-[45px] max-mobile:pt-[20px]  ">
        How We Work
      </header>

      <div className=" flex max-mobile:flex-col items-center max-mobile:gap-[20px] font-medium font-sarabun">
        <div className=" mobile:w-[33%] flex flex-col gap-[10px] items-center justify-center">
          <BsPersonAdd className="text-[#0C6242] text-[50px]" />
          <div className=" text-[18px] text-black font-medium ">
            Create Account
          </div>
        </div>

        <div className="mobile:w-[33%] flex flex-col items-center  gap-[10px] justify-center max-mobile:border-y-[1px] mobile:border-x-2 border-black max-mobile:py-[20px]">
          {/* <img src={two} alt="" /> */}
          <FaMagnifyingGlass className="text-[#0C6242] text-[40px]" />

          <div className="text-[18px] text-black font-medium ">
            Discover Compatible Profiles
          </div>
        </div>

        <div className="mobile:w-[33%] flex flex-col  items-center gap-[10px] justify-center ">
          <TiGroupOutline className="text-[#0C6242] text-[50px]" />
          <div className=" mt-2 text-[18px] text-black ">
            Build Meaningful Connections
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
