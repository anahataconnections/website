/* eslint-disable */
"use-client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Motionframe from "./Motionframe";
import { AnimationFrame } from "./AnimationFrame";
import "../Style/animation.css";

async function fetchEvents() {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/home?populate=*`
    );
    const response = await res.json();

    return response.data;
  } catch (err) {
    console.error(err);
  }
}

const Hero = () => {
  const [data, setData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchEvents();
      setData(res.attributes.why_anahata_connections);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsExpanded(false);
      } else setIsExpanded(true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-screen flex flex-col items-center bg-no-repeat bg-cover bg-center gap-[20px] ">
      <div className=" w-screen h-fit  items-center flex flex-col gap-[10px]">
        <div className="bg-home-page-back bg-cover bg-no-repeat bg-center">
          <div className="relative w-screen min-h-screen mobile:h-[80vh] bg-radial-gradient  flex justify-center overflow-hidden frame ">
            <AnimationFrame />
            <Motionframe />
          </div>
        </div>

        <div className="w-[90vw] small-tab:w-[60vw] flex flex-col gap-[20px] small-tab:gap-[30px] items-center mt-[50px]">
          <header className="font-Pattaya text-[25px] mobile:text-[40px] text-[#094C3B] ">
            {data?.title}
          </header>
          <header className=" text-black text-[17px] mobile:text-[21px]  tab:text-[28px] text-center font-Satisfy  ">
            {data?.content &&
              data.content.map((paragraph, index) => (
                <React.Fragment key={index}>
                  {isExpanded || index === 0
                    ? paragraph.children.map((child, childIndex) => (
                        <p key={childIndex}>{child.text}</p>
                      ))
                    : null}
                </React.Fragment>
              ))}{" "}
          </header>

          {!isExpanded && data?.content?.length > 1 ? (
            <button
              className="-mt-3 flex lg:hidden font-mono text-center justify-center items-center"
              onClick={toggleContent}
            >
              See More...
            </button>
          ) : (
            <button
              className="flex font-mono lg:hidden text-center justify-center items-center"
              onClick={toggleContent}
            >
              See Less...
            </button>
          )}

          <div className="flex justify-center">
            <Link
              href="../../Whyanahata"
              className="bg-[#094C3B] text-white rounded-full text-[20px] font-sarabun px-[50px] py-[10px] cursor-pointer hover:bg-[#286f5d] font-[550] hover:font-bold "
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
/*
// man
 <div className="man-image absolute w-auto h-fit mobile:h-[85%] left-0 1250:left-[16%] pc:left-[24%]  bottom-0 bg-cover bg-no-repeat bg-opacity-0">
 <div className="relative w-auto h-fit mobile:h-[100%]">
   <Image
     src={"/assets/man.svg"}
     alt="man image"
     width={550}
     height={750}
     className=" w-[100%] h-[200px] mobile:h-[100%] z-10 "
   />
   <div className="absolute top-0 w-[100%] h-[100%]"></div>
 </div>
</div>
// woman
<div className="woman-image absolute w-auto h-fit mobile:h-[85%] right-0 1250:right-[10%] pc:right-[18%] translate-y-[5px] mobile:translate-y-[10px]   bottom-0">
 <Image
   src={"/assets/woman.svg"}
   alt="woman image"
   width={550}
   height={750}
   className="w-[100%] h-[200px] mobile:h-[100%]"
 />
 <div className="relative"></div>
</div>
 
 */
