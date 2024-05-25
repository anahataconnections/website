/* eslint-disable */
"use-client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import Motionframe from "./Motionframe";
import HowWeWork from "../components/HowWeWork";
import "../Style/animation.css";

const Hero = () => {
  const handleClick = () => {
    router.push("/Whyanahata");
  };

  return (
    <div className="w-screen flex flex-col items-center mobile:bg-home-page-back bg-no-repeat bg-cover bg-center gap-[20px] ">
      <div className="relative w-screen h-fit  items-center flex flex-col gap-[10px]">
        <div className="absolute top-0 mobile:bg-radial-gradient w-screen h-[calc(70vh+100px)] ">
          <div className="relative flex items-end w-[100%] h-[100%]">
            <div className="mobile:hidden absolute top-0 left-0  w-[100%] h-[100%] bg-home-page-back bg-blend-multiply bg-cover bg-no-repeat bg-center"></div>
            <div className="mobile:hidden absolute top-0 left-0 w-[100%] h-[100%] bg-radial-gradient "></div>
            {/* man */}
            {/* <div className=" man-image absolute w-auto h-fit mobile:h-[85%] left-[24%]  bottom-0 ">
              <Image
                src={"/assets/man.svg"}
                alt="man image"
                width={550}
                height={750}
                className="w-[100%] h-[100%]"
              />
              <div className="relative"></div>
            </div> */}
            {/* woman */}
            {/* <div className="woman-image absolute w-auto h-fit mobile:h-[85%] right-[18%]   bottom-0">
              <Image
                src={"/assets/woman.svg"}
                alt="woman image"
                width={550}
                height={750}
                className="w-[100%] h-[100%]"
              />
              <div className="relative"></div>
            </div> */}
          </div>
        </div>
        <div className="w-screen h-[70vh]  flex justify-center overflow-hidden frame mt-[100px]">
          <Motionframe />
        </div>
        <div className="w-screen flex justify-center bg-white bg-opacity-[0.5] pt-[50px] ">
          <div className="w-[90vw] small-tab:w-[60vw] flex flex-col gap-[20px] small-tab:gap-[30px] items-center">
            <header className="font-Pattaya text-[25px] mobile:text-[40px] text-[#094C3B] ">
              Why Anahata Connections ?
            </header>
            <header className=" text-black text-[17px] mobile:text-[21px]  tab:text-[28px] text-center font-Satisfy  ">
              Welcome to Anahata Connections, where love intertwines with
              spirituality. Explore meaningful connections grounded in yogic
              science and the wisdom of the heart chakra. Our platform unites
              kindred spirits aligned with mindfulness and compassion. Join us
              on the journey to deeper connections and conscious relationships
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
      </div>
      <div className="w-screen flex justify-center bg-white bg-opacity-[0.5] pt-[50px] mobile:pt-[100px]">
        <div className=" w-[80vw] mobile:w-[60vw] flex flex-col items-center ">
          <HowWeWork />
        </div>
      </div>
    </div>
  );
};

export default Hero;
