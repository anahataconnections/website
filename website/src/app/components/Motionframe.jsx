/* eslint-disable */

"use client";
import React from "react";
import { motion } from "framer-motion";
import "../Style/motion.css"
import "../Style/hero.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  onspot,
  onbutton,
  onLeft,
  onRight,
} from "@/app/utils/motion";
import Image from "next/image"; 

const Motionframe = () => {
  // Check if the screen width is medium or larger
  const isMediumScreenOrLarger = typeof window !== "undefined" && window.innerWidth >= 768;
  const isSmalllaptop = typeof window !== "undefined" && window.innerWidth >= 1024;
  const isLargeScreen = typeof window !== "undefined" && window.innerWidth >= 1440;
  const smDevices = typeof window !== "undefined" && window.innerWidth >= 640;
  // const isMobile = typeof window !== "undefined" && window.innerWidth <= 640;
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 450;

  useEffect(() => {
    Aos.init();
  });

  return (
    <div
    >
      

     
      <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 grid-cols-12 place-items-center">
        <div className=" p-2 :col-span-1 md:col-span-1 sm:col-span-1 col-splgan-1">
          <Image src="/assets/left_flower.png" alt="img" width={790} height={2000} className="left-flower  mr-36"
          // data-aos="fade-right"
          // data-aos-delay="20"
          // data-aos-duration="800"
          // data-aos-easing="ease-in-out"
          // data-aos-mirror="true"
          // data-aos-offset="5"
          // data-aos-anchor-placement="top-left"
          />
        </div>
        <div className=" p-2 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-4">
          <Image src="/assets/man.png" alt="work icons" height={isLargeScreen?2000:1500} width={1000} className=" man mb-[120px] " data-aos="fade-right"
                data-aos-delay="20"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-offset="5"
                data-aos-anchor-placement="top-left"
                />
        </div>
        <div className=" p-2 w-[300px] lg:col-span-2 md:lg:col-span-2 sm:col-span-2 mb-[73px] col-span-2 mr-6 pr-6">
          
        <Image
            src="/assets/logo1.png"
             width={isMobile?70:180}
            height={isMobile?70:180}
            className="hero-logo ml-14 "
            alt="Anahata Connections Logo"
            data-aos="zoom-in-right"
            data-aos-delay="40"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-left"
            data-offset="200"
          />
            <div className={` anahata font-EvaMayasari font-bold flex justify-center items-center lg:text-[3rem] text-[20px] text-[#094C3B]`}       
            // data-aos="fade-up"
            //     data-aos-delay="100"
            //     data-aos-duration="1000"
            //     data-aos-easing="ease-in-out"
            //     data-aos-mirror="true"
                
                >
           
              Anahata&nbsp;Connections
              
              </div>
          <div className="logic-blossoms font-cantarell  flex justify-center  items-center font-bold md:text-lg  text-[12px] text-[#094C3B]"  
          
                // data-aos="fade-up"
                // data-aos-delay="100"
                // data-aos-duration="1000"
                // data-aos-easing="ease-in-out"
                // data-aos-mirror="true"
                
                >Where Yogic love Blossoms</div>
          <div className="font-sarabun flex justify-center items-center text-center mt-6"><button className=" bg-[#095340] meet-button  text-white rounded-[32px]"  
               >Meet Your Match Now</button></div>
        </div>
        <div className=" p-2 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-4" >
          <Image src="/assets/women.png" alt="work icons" height={2000} width={1000} className="women mb-[117px] md:me-0 z-[10]" 
                data-aos="fade-left"
                data-aos-delay="20"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-offset="5"
                data-aos-anchor-placement="top-left"/>
        </div>
        <div className="p-2 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-1">
          <Image src="/assets/right_flower.png" alt="" width={700} height={2000} className="right-flower  mr-36 z-[1]"
              // data-aos="fade-left"
              // data-aos-delay="20"
              // data-aos-duration="800"
              // data-aos-easing="ease-in-out"
              // data-aos-mirror="true"
              // data-aos-offset="5"
              // data-aos-anchor-placement="top-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Motionframe;
