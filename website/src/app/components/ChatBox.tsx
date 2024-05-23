"use client";

import Image from "next/image";
import * as React from "react";

type ImageProps = {
  src: string;
  alt: string;
  className: string;
};

const MyComponent: React.FC = () => {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b98072059023c1cb512919babbfd7091b1e6f4c30e17685f334605454329f07?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b6276de1c719c39f7ef529931d0f9363baf8c463fed31657c275cc214691980?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/00bd5a9f903d195224eb1daadeb0557f1d7ac99bc58a161a20213f7e4037c86b?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      message: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b6276de1c719c39f7ef529931d0f9363baf8c463fed31657c275cc214691980?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ];

  return (
    <div className="relative flex flex-col w-fit gap-[10px]">
      {images.map(({ message, src }, index) => {
        return (
          <div
            key={index}
            className={`w-[100%] h-min-fit flex  justify-center ${
              (index === 1 || index === 3) && "mobile:translate-x-[60%]"
            }`}
          >
            <img
              src={src}
              width={100}
              height={60}
              className="w-[100%] h-min-fit"
              alt="image"
            />
            <p className="absolute flex justify-center items-center text-white text-[16px] box-border p-[6px] mobile:p-[10px]">
              {message}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MyComponent;
