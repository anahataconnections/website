"use-client";

import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  text: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className = "", text }) => {
  // Calculate the width of the image based on the length of the text
  const textLength = text.length;
  const minWidth = 200; // Minimum width of the image
  const width = Math.max(minWidth, textLength * 10); // Adjust width based on text length

  return (
    <div className="relative">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className={`${className} w-full object-contain`}
        style={{ maxWidth: "100%", height: "auto" }} // Ensure the image scales properly
      />
      <div
        className={`absolute inset-0 flex justify-center items-center text-white text-[15px]  ${
          className.includes("translate-x-32") && "translate-x-32" 
        }`}
        style={{ padding: "0 5px", margin: "5px", textAlign: "center" }} // Add padding and margin to the text
      >
        {text}
      </div>
    </div>
  );
};

const images: ImageProps[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c5cb3314e4dec866eb4e69af801b4bc01903a7f655293c7abdca7bb6083b7dc?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
    alt: "Image 1",
    className: "max-w-full aspect-[3.2] text-justify",
    text: "Ultricies vitae commodo interdum fermentum lacus integer sagittis.",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6728f1e3b72f8911007d935de40a1bf559620668c2a750d090da224406fc2ee?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
    alt: "Image 2",
    className: "self-end mt-1 aspect-[4] text-right translate-x-32",
    text: "Ultricies vitae commodo interdum fermentum lacus integer sagittis.",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/67727ed6f5a88b60de2df7fe91ee219f487ddbe82649ce9244b6ce1c72e75221?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
    alt: "Image 3",
    className: "mt-1 max-w-full aspect-[6] text-center",
    text: "Ultricies vitae commodo interdum",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6728f1e3b72f8911007d935de40a1bf559620668c2a750d090da224406fc2ee?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
    alt: "Image 4",
    className: "self-end mt-1 aspect-[3.9] text-left translate-x-32",
    text: "Ultricies vitae commodo interdum fermentum lacus integer ",
  },
];

const ChatBox: React.FC = () => {
  return (
    <section className="flex flex-col max-w-[495px] customMax:max-w-[530px] custom2:max-w-[500px] ml-6 text-left h-[300px]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          className={image.className}
          text={image.text}
        />
      ))}
    </section>
  );
};

export default ChatBox;
