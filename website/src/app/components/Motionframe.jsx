"use client";
import React from "react";
import { motion } from "framer-motion";
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
import "@/app/Style/hero.css"; 

const Motionframe = () => {
  // Check if the screen width is medium or larger
  const isMediumScreenOrLarger = typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-between px-5 md:px-20 h-full w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div variants={onLeft(2)} className="w-full h-full flex justify-center items-center z-0">
          <Image src="/assets/left_flower.png" alt="work icons" height={60} width={60} className="flower-1"/>
        </motion.div>
        <motion.div variants={slideInFromTop} className="py-[8px] px-[7px]">
          <Image src="/assets/logo1.png" alt="work icons" height={200} width={200} className="logo" />
        </motion.div>
        <motion.div variants={onspot} className="py-[8px] px-[7px]">
        <div className="onspot ">
            <div className={`font-EvaMayasari font-bold flex justify-center items-center text-${isMediumScreenOrLarger ? 'xl' : '5vw'} text-[#094C3B]`}>Anahata&nbsp;Connections</div>
            <div className="font-cantarell flex justify-center mb-10 items-center font-bold text-lg md:text-[11px] text-[#094C3B]">Where Yogic love Blossoms</div>
            <div className="flex justify-center items-center text-center mt-5 "><button className=" bg-[#094C3B] meet-button  text-white rounded-[32px] " >Meet Your Match Now</button></div>
          </div>
        </motion.div>
      </div>

      <motion.div variants={slideInFromLeft(0.8)} className="w-full h-full flex justify-center items-center z-10">
        <Image src="/assets/man.png" alt="work icons" height={isMediumScreenOrLarger ? 500 : 300} width={1000} className=" man"/>
      </motion.div>

      <motion.div variants={slideInFromRight(0.8)} className="w-full h-full flex justify-center items-center z-10">
        <Image src="/assets/women.png" alt="work icons" height={isMediumScreenOrLarger ? 500 : 300} width={1000} className="women"/>
      </motion.div>
      
      <motion.div variants={onRight(2)} className="w-full h-full flex justify-center items-center z-0">
        <Image src="/assets/right_flower.png" alt="work icons" height={60} width={60} className="flower-2"/>
      </motion.div>
    </motion.div>
  );
};

export default Motionframe;
