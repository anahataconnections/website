import React from "react";
import Image from "next/image";

interface WhatWeDoProps {
  collaboration: {
    content: {
      children: { text: string }[];
    }[];
  };
  advertisement: {
    content: {
      children: { text: string }[];
    }[];
  };
  yoga: {
    content: {
      children: { text: string }[];
    }[];
  };
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({
  collaboration,
  advertisement,
  yoga,
}) => {
  return (
    <div className="pt-16 flex flex-col  ">
      <h1 className="font-pattaya text-green-800 text-center text-3xl font-bold mb-8">
        What we do ?
      </h1>

      {/* First Item */}
      <div className="text-black flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2">
          <Image
            src="/assets/image1.svg"
            alt="Collaboration Image"
            width={500}
            height={300}
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="font-bold text-xl mb-4">
            {collaboration.content[0].children[0].text}
          </h1>
          <p>{collaboration.content[1].children[0].text}</p>
        </div>
      </div>

      {/* Second Item */}
      <div className="text-black flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2">
          <Image
            src="/assets/image2.svg"
            alt="Advertisement Image"
            width={500}
            height={300}
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p>{advertisement.content[1].children[0].text}</p>
          <h1 className="font-bold text-xl mt-4">
            {advertisement.content[0].children[0].text}
          </h1>
        </div>
      </div>

      {/* Third Item */}
      <div className="text-black flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2">
          <Image
            src="/assets/image3.svg"
            alt="Yoga Image"
            width={500}
            height={300}
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="font-bold text-xl">
            {yoga.content[0].children[0].text}
          </h1>
          <p>{yoga.content[1].children[0].text}</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
