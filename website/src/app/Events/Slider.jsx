"use client";

import left from "../../../public/left.svg"
import right from "../../../public/right.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "./constants";
// import Description from "./Description";



const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <main className="place-items-center flex w-full mx-2 px-20 py-10 relative mt-4 ">
      <div className="absolute inset-0 bg-gray-700 opacity-75 rounded-2xl"></div>
      <div
        className=" absolute left-10 cursor-pointer"
        onClick={clickPrev}
      >
        <Image src={left} alt="" className="" />
      </div>
      <div
        className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}
      >
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${idx === activeImage
              ? "block w-full h-[80vh] object-cover object-center transition-all duration-500 ease-in-out z-10"
              : "hidden"
              }`}
          >
            <Image
              src={elem.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover md:rounded-3xl"
            />
          </div>
        ))}
      </div>
      <div

        className="absolute right-10 cursor-pointer"
        onClick={clickNext}
      >
        <Image src={right} alt="" />
      </div>
      {/* <Description absolute right-2
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      /> */}
    </main>
  );
};

export default Slider;