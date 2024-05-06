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
// import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Motionframe = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-around px-20  h-full  w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

      <motion.div
          variants={onLeft(1.8)}
          className="w-full h-full flex justify-center items-center z-0 "
        >
        
         <Image
          src="/assets/left_flower.png"
          alt="work icons"
          height={80}
          width={80}
        />
       
        </motion.div>
      
      <motion.div
          variants={slideInFromTop}
          className="py-[8px] px-[7px] "
        >
        
         <Image
          src="/assets/logo1.png"
          alt="work icons"
          height={200}
          width={200}
        />
       
        </motion.div>
        <motion.div
          variants={onspot}
          className="py-[8px] px-[7px] "
        >
         <div className="mt-[40px]">
   
        <div className="font-EvaMayasari font-bold flex justify-center items-center text-[55px] text-[#094C3B]">Anahata&nbsp;Connections </div>
    <div className="font-cantarell  flex justify-center items-center font-bold text-xl text-[#094C3B]">Where Yogic love Blossoms</div>
    {/* <div className="mt-28 w-[100px] bg-[#094C3B]  flex justify-center items-center text-white  rounded-[32px] px-14 py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold">Meet Your Match Now</div> */}
    <div className="flex justify-center items-center mt-28 ml-5 pt-5 pl-5"><button className=" ml-5 mt-5 bg-[#094C3B] text-white rounded-[32px] px-10 py-2.5" >Meet Your Match Now</button></div>
    </div>
        </motion.div>
        {/* <motion.div
          variants={onbutton}
          className="py-[8px] px-[7px] "
        >
          <div className="mt-28 bg-[#094C3B] text-white rounded-[32px] px-14 py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold">Meet Your Match Now</div>
         
        </motion.div> */}
        </div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="w-full h-full flex justify-center items-center z-10"
        >
           <Image
          src="/assets/man.png"
          alt="work icons"
          height={800}
          width={1000}
        />
          
        </motion.div>

       


      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center z-10"
      >
        <Image
          src="/assets/women.png"
          alt="work icons"
          height={800}
          width={1000}
        />
      </motion.div>
      <motion.div
          variants={onRight(1.8)}
          className="w-full h-full flex justify-center items-center z-0 "
        >
        
         <Image
          src="/assets/right_flower.png"
          alt="work icons"
          height={80}
          width={80}
        />
       
        </motion.div>
    </motion.div>
  );
};

export default Motionframe;