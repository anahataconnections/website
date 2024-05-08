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
      {/* in the above motion.div flex flex-col md:flex-row items-center justify-between */}
      {/* <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div variants={onLeft(3)} className="w-full h-full flex justify-center relative right-[7rem] items-center z-0">
          
        </motion.div>
        <motion.div variants={slideInFromTop} className="py-[8px] px-[7px]">
          <Image src="/assets/logo1.png" alt="work icons" height={200} width={200} className="logo " />
        </motion.div>
        <motion.div variants={onspot} className="py-[8px] px-[7px]">
        <div className="onspot ">
            <div className={`font-EvaMayasari font-bold flex justify-center items-center text-[3rem] text-[#094C3B]`}>Anahata&nbsp;Connections</div>
            <div className="font-cantarell flex justify-center mb-10 items-center font-bold text-lg md:text-[11px] text-[#094C3B]">Where Yogic love Blossoms</div>
            <div className="flex justify-center items-center text-center mt-5 "><button className=" bg-[#094C3B] meet-button  text-white rounded-[32px] " >Meet Your Match Now</button></div>
          </div>
        </motion.div>
      </div>

      <motion.div variants={slideInFromLeft(0.8)} className="w-full h-full flex justify-center items-center z-10">
        <Image src="/assets/man.png" alt="work icons" height={isMediumScreenOrLarger ? 500 : 300} width={1000} className=" man ms-3"/>
      </motion.div>

      <motion.div variants={slideInFromRight(0.8)} className="w-full h-full flex justify-center items-center z-10">
        <Image src="/assets/women.png" alt="work icons" height={isMediumScreenOrLarger ? 500 : 300} width={1000} className="women me-3 "/>
      </motion.div>
      
      <motion.div variants={onRight(2)} className="w-full h-full flex justify-center items-center z-0">
        <Image src="/assets/right_flower.png" alt="work icons" height={60} width={60} className="flower-2"/>
      </motion.div> */}
      {/* <div className="grid grid-cols-12 gap-1 place-items-center ">
        <div className="col-span-2">
          <div>
            <Image src="/assets/left_flower.png" alt="" width={700} height={2000} className="mt-6 ms-52"/>
          </div>
        </div>
        <div className="col-span-3">
        <motion.div variants={slideInFromLeft(0.8)} className="flex justify-center items-center z-10">
        <Image src="/assets/man.png" alt="work icons" height={isLargeScreen?2000:1500} width={isLargeScreen?1000:800} className=" man lg:ms-24 ms-10"/>
      </motion.div>

        </div>
        <div className="col-span-2 relative">
        <motion.div variants={onspot} className="py-[8px] px-[7px]">
          
        <div className="absolute right-[74px] -top-10  ">
          <div className="">
            <motion.div variants={slideInFromTop} className="py-[8px] px-[7px]">
              <Image src="/assets/logo1.png" alt="work icons" height={200} width={200} className="logo " />
            </motion.div>
          </div>
        
            <div className={`font-EvaMayasari font-bold flex justify-center items-center lg:text-[3rem] text-[20px] text-[#094C3B]`}>Anahata&nbsp;Connections</div>
            <div className="font-cantarell flex justify-center mb-10 items-center font-bold lg:text-lg md:text-[11px] text-[12px] text-[#094C3B]">Where Yogic love Blossoms</div>
            <div className="flex justify-center items-center text-center mt-5 "><button className=" bg-[#094C3B] meet-button  text-white rounded-[32px] " >Meet Your Match Now</button></div>
          </div>
        </motion.div>
        </div>
        <div className="col-span-3">
        <motion.div variants={slideInFromRight(0.8)} className="flex justify-center items-center z-10">
        <Image src="/assets/women.png" alt="work icons" height={isLargeScreen?2000:1500} width={isLargeScreen?1000:800} className="women lg:me-8 -me-[69px] z-10 md:me-0"/>
      </motion.div>
        </div>
        <div className="">
          <div className="relative right-40  ">
            <Image src="/assets/left_flower.png" alt="" width={isLargeScreen?700:400} height={isLargeScreen?2000:800} className="mt-6 mr-56  tranform scale-x-[-1]"/>
          </div>
        </div>

      </div> */}
      <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 grid-cols-12 place-items-center ">
        <div className=" p-2 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-1">
          <Image src="/assets/left_flower.png" alt="" width={700} height={2000} className="left-flower mt-6 mr-56"
          data-aos="fade-right"
          data-aos-delay="20"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-offset="5"
          data-aos-anchor-placement="top-left"
          />
        </div>
        <div className=" p-2 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-4">
          <Image src="/assets/man.png" alt="work icons" height={isLargeScreen?2000:1500} width={1000} className=" man  mt-6" data-aos="fade-right"
                data-aos-delay="20"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-offset="5"
                data-aos-anchor-placement="top-left"/>
        </div>
        <div className=" p-2 w-[300px] lg:col-span-2 md:lg:col-span-2 sm:col-span-2 col-span-2">
          
        <Image
            src="/assets/logo1.png"
            width={isMobile?70:200}
            height={isMobile?70:200}
            className="hero-logo mx-auto"
            alt="Anahata Connections Logo"
            data-aos="zoom-in-right"
            data-aos-delay="40"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-left"
            data-offset="200"
          />
            <div className={` anahata font-EvaMayasari font-bold flex justify-center items-center lg:text-[3rem] text-[20px] text-[#094C3B]`}  data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true">
           
              Anahata&nbsp;Connections
              
              </div>
            <div className="logic-blossoms font-cantarell flex justify-center mb-10 items-center font-bold md:text-lg  text-[12px] text-[#094C3B]"  data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true">Where Yogic love Blossoms</div>
            <div className="flex justify-center items-center text-center mt-5 "><button className=" bg-[#094C3B] meet-button  text-white rounded-[32px]"  
               >Meet Your Match Now</button></div>
        </div>
        <div className=" p-2 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-4" >
          <Image src="/assets/women.png" alt="work icons" height={2000} width={1000} className="women mt-8 md:me-0 z-[10]" 
                data-aos="fade-left"
                data-aos-delay="20"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-offset="5"
                data-aos-anchor-placement="top-left"/>
        </div>
        <div className="p-2 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-1">
          <Image src="/assets/right_flower.png" alt="" width={700} height={2000} className="right-flower mt-6 mr-56  z-[1]"
              data-aos="fade-left"
              data-aos-delay="20"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-offset="5"
              data-aos-anchor-placement="top-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Motionframe;
