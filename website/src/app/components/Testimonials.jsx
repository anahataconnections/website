import React from "react";
// import test from "../assets/testimonial.png";
// import rect from "../assets/rect.png";
import Image from "next/image";
import ShowMoreButton from './ShowMoreButton';

const Testimonials = () => {
  return (
    <div className="flex items-center justify-center">
    <div className="h-full  bg-[#DDF7F0] w-[90%] ">
      <header className="font-Pattaya flex items-center justify-center  md:text-[40px] max-sm:text-[24px] text-[#094C3B] lg:text-[52px]">
        Hear what our users say about us
      </header>

      <div className="flex items-center justify-start max-sm:px-6 sm:py-5 max-sm:py-10  lg:py-20 xl:pl-28 md:py-18 md:px-16 lg:px-7 xl:ml-28">
        <div>
          <Image
            src="/assets/testimonial.png"
            width={380}
            height={600}
            className="md:w-65 max-sm:w-[200px] "
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
        </div>

        <div className="absolute ">
         {/* //max-sm:mt-24  max-sm:ml-52 max-sm:mr-14  */}
          <div className="flex flex-col justify-between max-sm:py-4 max-sm:pl-2 max-sm:mt-20 max-sm:text-[10px] max-sm:ml-32  max-sm:mr-10  lg:ml-[300px] md:ml-[280px] lg:mt-[100px] md:w-[50%] md:mt-[100px]  lg:w-[60%] rounded-[12px] lg:px-10  lg:pt-10 lg:pb-[70px] bg-[#F9EBCC]  text-[#094C3B] font-Satisfy xl:text-3xl lg:text-[23px] md:text-[20px] md:px-6 md:py-8 underline underline-offset-8">
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor , quis nostrud exercitation ”</p>
            <ShowMoreButton />

            <div className="md:text-[20px] max-sm:text-[10px] max-sm:bottom-0 max-sm:right-12 absolute bottom-3 right-32 px-5 satisfy-regular text-3xl lg:text-[23px]">
            - Mr & Mrs Singh
          </div>
          </div>

         
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
