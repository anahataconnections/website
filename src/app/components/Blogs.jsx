import React from "react";
import Blogcard from "./Blogcard";
import Image from "next/image";
// import blog1 from "../assets/blog1.png";
// import blog2 from "../assets/blog2.png";
// import blog3 from "../assets/blog3.png";
// import arrow from "../assets/arrow.png";
const blog1="/assets/blog1.png";
const blog2="/assets/blog2.png";
const blog3="/assets/blog3.png";

const Blogs = () => {
  return (
    <div className="h-auto py-20">
      <header className="font-Pattaya flex items-center justify-center text-[#094C3B] text-[52px]">
        Our Blogs{" "}
      </header>

      <div className="py-16 flex justify-center items-center gap-x-10">
        <Blogcard
          imageUrl={blog1}
          heading="Yoga and  Relationships"
          details="April 24, 2024 - 5 min read"
          data="Yoga extends beyond individual practice; it’s about connection. Explore how yogic principles, such as non-violence (ahimsa)."
        />
        <Blogcard
          imageUrl={blog2}
          heading="Yoga and  Anahata"
          details="April 24, 2024 - 5 min read"
          data="Yoga extends beyond individual practice; it’s about connection. Explore how yogic principles, such as non-violence (ahimsa)"
        />
        <Blogcard
          imageUrl={blog3}
          heading="Yoga and  Relationships"
          details="April 24, 2024 - 5 min read"
          data="Yoga extends beyond individual practice; it’s about connection. Explore how yogic principles, such as non-violence (ahimsa)."
        />
      </div>

      <div className="flex justify-center items-center gap-x-2 text-2xl font-semibold text-[#979797] text-center pb-10">
        <span className="hover:underline underline-offset-4 cursor-pointer">
          Read More
        </span>
        {/* <img src={arrow} alt="" className="pt-1" /> */}
        <Image
            src="/assets/arrow.png"
            width={38}
            height={60}
            className="pt-1"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
      </div>
    </div>
  );
};

export default Blogs;
