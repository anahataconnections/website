/* eslint-disable */
"use-client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import Motionframe from "./Motionframe";
import HowWeWork from "../components/HowWeWork";
import "@/app/Style/hero.css";

const Hero = () => {
  const handleClick = () => {
    router.push("/Whyanahata");
  };

  return (
    <div className="w-screen flex flex-col items-center bg-home-page-back bg-no-repeat bg-cover bg-center gap-[20px] ">
      <div className="relative w-screen h-fit  items-center flex flex-col gap-[10px] pb-[100px]">
        <div className="absolute top-0 bg-radial-gradient w-screen h-[calc(70vh+100px)] "></div>
        <div className="w-screen h-[70vh]  flex justify-center overflow-hidden frame mt-[100px]">
          <Motionframe />
        </div>
        <div className="w-[90vw] flex flex-col gap-[20px] small-tab:gap-[30px] items-center mt-[50px]">
          <header className="font-Pattaya text-[25px] mobile:text-[40px] text-[#094C3B] ">
            Why Anahata Connections ?
          </header>
          <header className="w-[90vw] small-tab:w-[60vw] text-black text-[17px] mobile:text-[21px]  tab:text-[28px] text-center font-Satisfy  ">
            Welcome to Anahata Connections, where love intertwines with
            spirituality. Explore meaningful connections grounded in yogic
            science and the wisdom of the heart chakra. Our platform unites
            kindred spirits aligned with mindfulness and compassion. Join us on
            the journey to deeper connections and conscious relationships
          </header>
          {/* Use Link component to navigate to WhyAnahita page */}
          <div className="flex justify-center">
            <Link
              href="../../Whyanahata" // Corrected the typo here
              className="bg-[#094C3B] text-white rounded-full text-[20px] tracking-wider font-sarabun px-[50px] py-[10px] cursor-pointer hover:bg-[#286f5d] font-[550] hover:font-bold "
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-[80vw] mobile:w-[60vw] flex flex-col items-center ">
        <HowWeWork />
      </div>
    </div>
  );
};

export default Hero;
