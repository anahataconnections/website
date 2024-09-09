import React from "react";
import Image from "next/image";

interface WhatWeDoProps {
  collaboration: {
    [x: string]: any;
    content: {
      children: { text: string }[];
    }[];
  };
  advertisement: {
    [x: string]: any;
    content: {
      children: { text: string }[];
    }[];
  };
  yoga: {
    [x: string]: any;
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

  console.log(collaboration);
  console.log(advertisement)
  console.log(yoga)

  return (
    <div className=" pt-16 flex flex-col space-y-3">
      <h1 className="font-Pattaya text-emerald-900 text-center text-5xl my-10">
        What we do?
      </h1>

      {/* First Item */}
      <div className="text-black py-10 px-5 md:px-0 flex flex-col md:flex-row items-center justify-center md:items-start gap-2 gap-x-10">
        <div className="">
          <Image
            src={collaboration.image.data.attributes.url}
            alt="Collaboration Image"
            width={400}
            height={200}
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="font-bold font-sarabun text-[30px] mb-4">
            {collaboration.content[0].children[0].text}
          </h1>
          <p className=" font-sarabun text-xl text-justify ">
            {collaboration.content[1].children[0].text}
          </p>
        </div>
      </div>

      {/* Second Item */}
      <div className="text-black py-10 px-5 md:px-0 flex flex-col md:flex-row items-center justify-center md:items-center gap-2 gap-x-10">
        <div className="md:w-1/2 ">
          <h1 className="font-bold font-sarabun text-[30px] mb-4">
            {advertisement.content[0].children[0].text}
          </h1>
          <p className=" font-sarabun text-xl text-justify ">
            {advertisement.content[1].children[0].text}
          </p>
        </div>
        <div className="custom2:pl-6">
          <Image
            src={advertisement.image.data.attributes.url}
            alt="Advertisement Image"
            width={400}
            height={200}
          />
        </div>
      </div>

      {/* Third Item */}
      <div className="text-black py-10 px-5 md:px-0 flex flex-col md:flex-row items-center justify-center md:items-start gap-2 gap-x-10">
        <div className="">
          <Image
            src={yoga.image.data.attributes.url}
            alt="Yoga Image"
            width={400}
            height={200}
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="font-bold font-sarabun text-[30px] mb-4">
            {yoga.content[0].children[0].text}
          </h1>
          <p className=" font-sarabun text-xl text-justify ">
            {yoga.content[1].children[0].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
