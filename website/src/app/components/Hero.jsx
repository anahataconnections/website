/* eslint-disable */
"use-client"

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import Motionframe from "./Motionframe";
import "@/app/Style/hero.css";

const Hero = () => {

  const handleClick = () => {
    router.push('/Whyanahata');
  };

  return (
    <div className="bg-home-page-back bg-no-repeat bg-custom bg-custom-position ">
      <div className="bg-radial-gradient flex justify-center overflow-hidden  frame">
        <Motionframe />
      </div>
      <div className="h-[620px] customPhone:h-[450px] bg-white-gradient custom3:mx-[60px] custom2:mx-[60px] custom1:mx-[60px] custom:mx-[60px] flex flex-col items-center  justify-center customPhone:px-4 custom3:pt-14">
        <header className="font-Pattaya text-[#0C6242] text-[2.2rem] max-sm:text-[29px] customPhone:text-[1.5rem] custom:translate-y-[-50px] custom2:translate-y-[-55px] ">
          Why Anahata Connections?
        </header>
        <header className="text-black font-Satisfy text-[27px]  max-sm:text-[20px] sm:max-md:text-[25px] w-[90%]  sm:w-[80%]  md:w-[70%] custom2:w-[70%] custom3:w-[75%]  customPhone:text-[1rem] max-customPhone:pt-[0.6rem] 
     custom3:text-[1.2rem] text-center ">
          Welcome to Anahata Connections, where love intertwines with
          spirituality. Explore meaningful connections grounded in yogic
          science and the wisdom of the heart chakra. Our platform unites
          kindred spirits aligned with mindfulness and compassion. Join us on
          the journey to deeper connections and conscious relationships
        </header>
        {/* Use Link component to navigate to WhyAnahita page */}
        <div className="flex justify-center customPhone:pt-[1rem]">
          <Link
            href="../../Whyanahata" // Corrected the typo here
            className="mt-2 bg-[#094C3B] text-white rounded-[32px] text-[14px] font-sarabun px-5 py-3 cursor-pointer hover:bg-[#286f5d] font-semibold customPhone:py-[0.6rem] custom:my-8 custom2:my-8"
          >
            KNOW MORE
          </Link>
        </div>

      </div>
    </div>
  );

};

export default Hero;
