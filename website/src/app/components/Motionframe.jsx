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
        className="absolute top-40 md:top-[25%] logo-animation w-80 md:w-72 lg:w-auto"
        alt="Anahata Connections Logo"
      />
      {tagline?.data?.attributes?.brand_tagline && <div className="lg:absolute bottom-[100px] mobile:bottom-[200px] flex flex-col items-center justify-center mt-[35rem] md:mt-[35rem]">
        <div className={`font-EvaMayasari text-4xl lg:text-5xl animate-fade-down animate-once animate-ease-in text-[#094C3B]`}>
          Anahata&nbsp;Connections
        </div>
        <div className="font-cantarell text-[14px] small-tab:text-[28px] animate-fade-up animate-once animate-ease-in lg:text-base font-bold text-[#094C3B]">
          {tagline?.data?.attributes?.brand_tagline}
        </div>
      </div>}
      {
        tagline?.data?.attributes?.brand_tagline && <button className="lg:absolute animate-fade-up animate-once animate-ease-in lg:bottom-[90px] w-[200px] small-tab:w-[250px] text-[12px] small-tab:text-[16px] font-bold text-center py-[7px] lg:my-0 small-tab:py-[12px] font-sarabun  bg-[#095340] text-white rounded-full">
          <Link href={"/register"}>
            Meet Your Match Now
          </Link>
        </button>
      }
    </div>
  );
};

export default Motionframe;
