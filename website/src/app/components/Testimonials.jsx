import React from "react";
// import test from "../assets/testimonial.png";
// import rect from "../assets/rect.png";
import Image from "next/image";
import ShowMoreButton from './ShowMoreButton';

const Testimonials = () => {
  return (
    <div className="h-full mx-auto bg-[#DDF7F0] w-[90%] ">
      <header className="font-Pattaya flex items-center justify-center text-[#094C3B] text-[52px]">
        Hear what our users say about us
      </header>

      <div className="flex items-center justify-start py-20 pl-28">
        <div>
          <Image
            src="/assets/testimonial.png"
            width={380}
            height={600}
            className=""
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
        </div>

        <div className="absolute ">
         
          <div className="flex flex-col justify-between ml-[300px] mt-[100px]  w-[60%] rounded-[12px] px-10 pt-10 pb-[70px] bg-[#F9EBCC]  text-[#094C3B] font-Satisfy text-3xl underline underline-offset-8">
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor , quis nostrud exercitation ”</p>
            <ShowMoreButton />

            <div className="absolute bottom-3 right-32 px-5 satisfy-regular text-3xl">
            - Mr & Mrs Singh
          </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
