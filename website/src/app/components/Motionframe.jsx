"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Motionframe.module.css";
import "@/app/Style/hero.css";

const Motionframe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageWidth, setImageWidth] = useState(900);
  const [imageHeight, setImageHeight] = useState(400);
  const [floweHeight, setFlowerHeight] = useState(200);
  const [flowerWidth, setFlowerWidth] = useState(200);
  const [logoWidth, setLogoWidth] = useState(300);

  useEffect(() => {
    setIsVisible(true);
    updateImageDimensions();
    // Listen for window resize events
    window.addEventListener("resize", updateImageDimensions);
    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", updateImageDimensions);
  }, []);

  const updateImageDimensions = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1440) {
      setImageWidth(900);
      setImageHeight(400);
      setFlowerHeight(200);
      setFlowerWidth(200);
      setLogoWidth(300);

    } else if (screenWidth >= 1024) {
      setImageWidth(700);
      setImageHeight(500);
      setFlowerHeight(170);
      setFlowerWidth(170);
      setLogoWidth(180);


    } else if (screenWidth >= 768) {
      setImageWidth(700);
      setImageHeight(300);
      setFlowerHeight(200);
      setFlowerWidth(200);
      setLogoWidth(300);
    } else {
      setImageWidth(600);
      setImageHeight(250);
      setFlowerHeight(200);
      setFlowerWidth(200);
      setLogoWidth(300);

    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-1 place-items-center justify-between px-5 md:px-20 h-full w-full z-[20]">
      <div className="col-span-1 md:col-span-2">
        <div>
          <Image src="/assets/left_flower.png" alt="" width={flowerWidth} height={floweHeight} className="mt-6 relative md:mt-0 md:ml-52 md:top-20 xl:top-14 xl:left-[2rem] sm:ml-8" style={{ maxWidth: "none" }} />
        </div>
      </div>
      <div className="col-span-1 md:col-span-3">
        <div className="flex justify-center items-center z-10">
          <Image src="/assets/man.png" alt="work icons" height={imageHeight} width={imageWidth} className={`relative xl:top-[5rem] xl:left-[16em]  md:left-[13em] md:top-[4rem] ${isVisible ? styles.animateSlideInLeft : ""}`} style={{ maxWidth: "none" }} />
        </div>
      </div>
      <div className="col-span-1 md:col-span-3 relative justify-center items-center">
        <div className="absolute xl:right-[-103px] xl:top-[-116px] md:top-[-50px] md:right-[-120px]">
          <div className="">
            <div className="xl:py-[8px] xl:px-[7px] md:pl-[64px]">
              <Image src="/assets/logo1.png" alt="work icons" height={logoWidth} width={logoWidth} className="logo" />
            </div>
          </div>
          <div className={`font-EvaMayasari font-bold flex justify-center items-center lg:text-[3rem] text-[20px] text-[#094C3B] ${isVisible ? styles.animateSlideInTop : ""}`}>Anahata&nbsp;Connections</div>
          <div className="font-cantarell flex justify-center mb-10 ijustify-center items-center text-center font-bold lg:text-lg md:text-[11px] text-[12px] text-[#094C3B]">Where Yogic love Blossoms</div>
          <div className="flex justify-center items-center text-center xl:mt-[6.5rem] md:mt-9 "><button className=" bg-[#094C3B] relative xl:top-22 md:top-[13px]  md:left-6 w-48 h-12 text-white rounded-[32px] " >Meet Your Match Now</button></div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3 z-10">
        <div className="flex justify-center items-center z-10">
          <Image src="/assets/women.png" alt="work icons" height={imageHeight} width={imageWidth} className={`relative xl:top-[5rem] z-100 xl:right-[22em] md:top-[4rem] md:right-[13em] ${isVisible ? styles.animateSlideInRight : ""}`} style={{ maxWidth: "none" }} />
        </div>
      </div>
      <div className="col-span-1">
        <div className="relative xl:right-[11rem] xl:top-10 md:right-[3rem] md:top-[4rem] ">
          <Image src="/assets/left_flower.png" alt="" width={flowerWidth} height={floweHeight} className="mt-6 mr-56 transform scale-x-[-1]" />
        </div>
      </div>
    </div>
  );
};

export default Motionframe;
