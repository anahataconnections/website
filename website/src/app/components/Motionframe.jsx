/* eslint-disable */

"use client";
import React, { useState, useEffect } from "react";
import "../Style/motion.css";
import "../Style/hero.css";
import Aos from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import Link from "next/link";

const Motionframe = () => {
  const [tagline, setTagline] = useState("");

  useEffect(() => {
    Aos.init();

    const fetchTagline = async () => {
      try {
        const response = await fetch(
          "https://cms.anahataaconnections.com/api/tagline"
        );
        const data = await response.json();
        setTagline(data);
      } catch (error) {
        console.error("Failed to fetch tagline:", error);
      }
    };

    fetchTagline();
  }, []);

  return (
    <div className="w-[100%] h-[100%] relative flex flex-col items-center justify-center">
      <Image
        src="/assets/logo1.png"
        width={300}
        height={300}
        className="absolute top-40 md:top-[25%] logo-animation w-40 md:w-auto"
        alt="Anahata Connections Logo"
      />
      <div className="lg:absolute bottom-[100px] mobile:bottom-[200px] flex flex-col items-center justify-center mt-[450px]">
        <div
          className={`font-EvaMayasari text-[35px] small-tab:text-[70px] text-[#094C3B]`}
        >
          Anahata&nbsp;Connections
        </div>
        <div className="logic-blossoms font-cantarell text-[15px] small-tab:text-[28px] font-bold  text-[#094C3B] ">
          {tagline?.data?.attributes?.brand_tagline}
        </div>
      </div>
      <button className="lg:absolute bottom-[30px] w-[200px] small-tab:w-[250px] text-[12px] small-tab:text-[16px] font-bold text-center py-[7px] my-2 lg:my-0 small-tab:py-[12px] font-sarabun  bg-[#095340] text-white rounded-full">
        <Link href={"/register"} className="p-5 px-10">
          Meet Your Match Now
        </Link>
      </button>
    </div>
  );
};

export default Motionframe;
