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
          variants={onLeft}
          className="py-[8px] px-[7px] "
        >
        
         <Image
          src="/assets/left_flower.png"
          alt="work icons"
          height={40}
          width={40}
        />
       
        </motion.div>
      
      <motion.div
          variants={slideInFromTop}
          className="py-[8px] px-[7px] "
        >
        
         <Image
          src="/assets/logo1.png"
          alt="work icons"
          height={400}
          width={400}
        />
       
        </motion.div>
        <motion.div
          variants={onspot}
          className="py-[8px] px-[7px] "
        >
         <div className="mt-[40px]">
   
        <div className="font-eva flex justify-center items-center text-[40px] text-[#094C3B]">Anahata Connections </div>
    <div className="font-cantarell font-bold text-xl text-[#094C3B]">Where Yogic love Blossoms</div>
    <div className="mt-28 bg-[#094C3B] text-white rounded-[32px] px-14 py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold">Meet Your Match Now</div>
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
          className="w-full h-full flex justify-center items-center"
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
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/assets/women.png"
          alt="work icons"
          height={800}
          width={1000}
        />
      </motion.div>
    </motion.div>
  );
};

export default Motionframe;