"use client";

import left from "../../../public/left.svg";
import right from "../../../public/right.svg";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { images } from "./constants";
import "./event.css";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = useCallback(() => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  }, [activeImage]);
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
  }, [activeImage, clickNext]);

  return (
    <main className="relative w-full mt-12 lg:mt-14 px-4 sm:px-8 md:px-20 py-6 md:py-10">
      <div className="absolute inset-0 bg-gray-200 opacity-75"></div>
      <div
        className="absolute cursor-pointer top-1/2 transform -translate-y-1/2 left-6 sm:left-12 md:left-24 z-50"
        onClick={clickPrev}
      >
        <Image src={left} alt="Previous" width={32} height={32} />
      </div>

      <div className="w-full flex justify-center items-center transition-transform ease-in-out duration-500 relative">
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`relative ${idx === activeImage
              ? "block w-full h-[40vh] sm:h-[50vh] md:h-[65vh] transition-all animate-fade-left animate-duration-500 ease-in-out"
              : "hidden"
              }`}
          >
            <Image
              src={elem.src}
              alt=""
              layout="fill"
              objectFit="cover"
              className="shadow-lg rounded-md"
            />
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-16 md:left-16 right-4 sm:right-8 md:right-16">
              <h1 className="font-Pattaya shadow-lg text-2xl bg-white rounded-sm sm:text-3xl md:text-5xl p-4 w-max text-[rgb(9,76,59)] text-center sm:text-left">
                3 Ways For healthy relationship
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div
        className="absolute cursor-pointer top-1/2 transform -translate-y-1/2 right-6 sm:right-12 md:right-24 z-50"
        onClick={clickNext}
      >
        <Image src={right} alt="Next" width={32} height={32} />
      </div>
    </main>
  );
};

export default Slider;