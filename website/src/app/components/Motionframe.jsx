/* eslint-disable */

"use client";
import React from "react";
import "../Style/motion.css";
import "../Style/hero.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Image from "next/image";

const Motionframe = () => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute bottom-[200px] flex flex-col items-center">
        <div
          className={`font-EvaMayasari text-[35px] small-tab:text-[70px] text-[#094C3B]`}
        >
          Anahata&nbsp;Connections
        </div>
        <div className="logic-blossoms font-cantarell text-[15px] small-tab:text-[28px] font-bold  text-[#094C3B] ">
          Where Yogic love Blossoms
        </div>
      </div>

      <button className="absolute bottom-[30px] w-[200px] small-tab:w-[250px] text-[12px] small-tab:text-[16px] font-bold text-center py-[7px] small-tab:py-[12px] font-sarabun  bg-[#095340]  text-white rounded-full tracking-wide letter-spacing-[2px]">
        Meet Your Match Now
      </button>
    </div>
  );
};

export default Motionframe;
