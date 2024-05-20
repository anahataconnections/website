"use client"

import * as React from "react";


type ImageProps = {
  src: string;
  alt: string;
  className: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <div className={`relative w-full ${className}`}>
    <img loading="lazy" src={src} alt={alt} className="w-full h-auto block" />
    <div className="absolute bottom-0 left-0 w-full bg-opacity-50 text-white text-center p-2 box-border text-sm">
      {alt}
    </div>
  </div>
);

const MyComponent: React.FC = () => {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b98072059023c1cb512919babbfd7091b1e6f4c30e17685f334605454329f07?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      alt: "Image 1 description",
      className: "aspect-w-16 aspect-h-9",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b6276de1c719c39f7ef529931d0f9363baf8c463fed31657c275cc214691980?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      alt: "Image 2 description",
      className: "aspect-w-16 aspect-h-9 mt-1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/00bd5a9f903d195224eb1daadeb0557f1d7ac99bc58a161a20213f7e4037c86b?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      alt: "Image 3 description",
      className: "aspect-w-16 aspect-h-9 mt-1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b6276de1c719c39f7ef529931d0f9363baf8c463fed31657c275cc214691980?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      alt: "Image 4 description",
      className: "aspect-w-16 aspect-h-9 mt-1",
    },
  ];

  return (
    <section className="flex flex-col max-w-[495px]">
      {images.map((image, idx) => (
        <Image
          key={idx}
          src={image.src}
          alt={image.alt}
          className={image.className}
        />
      ))}
    </section>
  );
};

export default MyComponent;
