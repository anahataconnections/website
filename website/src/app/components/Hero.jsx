"use client";
import React from "react";
import Image from "next/image";
import Motionframe from "./Motionframe";
import "@/app/Style/hero.css";


const Hero = () => {
  return (
    <div className="bg-home-page-back bg-cover bg-no-repeat">
       <div className="bg-radial-gradient flex justify-center overflow-hidden lg:h-[fit-content] md:h-[fit-content] ">
        <Motionframe/>
      </div>
      <div className="h-[750px] bg-white-gradient flex flex-col items-center justify-center">
        <header className="font-Pattaya  text-[#0C6242] text-[52px] max-sm:text-[29px] sm:max-md:text-[42px] md:pt-20">
          Why Anahata Connections?
        </header>
        <header className="font-Satisfy  text-4xl pt-10 max-sm:text-[20px]  sm:max-md:text-[25px] p-14 text-center ">
          Welcome to Anahata Connections, where love intertwines with
          spirituality. Explore meaningful connections grounded in yogic science
          and the wisdom of the heart chakra. Our platform unites kindred spirits
          aligned with mindfulness and compassion. Join us on the journey to
          deeper connections and conscious relationships
        </header>
        <div className="flex justify-center">
          <div className="mt-2 bg-[#094C3B] text-white rounded-[32px] px-5 py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold">
            KNOW MORE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;