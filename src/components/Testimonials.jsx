import React from "react";
import test from "../assets/testimonial.png";
import rect from "../assets/rect.png";

const Testimonials = () => {
  return (
    <div className="h-full">
      <header className="pattaya-regular flex items-center justify-center text-[#094C3B] text-[52px]">
        Hear what our users say about us
      </header>

      <div className="flex items-center justify-start py-20 pl-48">
        <div>
          <img src={test} alt="" />
        </div>

        <div className="absolute ml-[370px] mt-32">
          <img src={rect} alt="" />
          <div className="w-auto absolute px-12 pt-20 top-0 left-0 text-black satisfy-regular text-3xl underline underline-offset-8">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor”
          </div>

          <div className="absolute bottom-8 right-32 satisfy-regular text-3xl">
            - Mr & Mrs Singh
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
