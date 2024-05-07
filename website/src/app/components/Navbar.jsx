import React from "react";
import Image from "next/image";
import Link from "next/link";
// import our from "../Our_story/Our_story"
const Navbar = () => {
  return (
    <header className="bg-[#094C3B] shadow-md h-[60px] flex items-center px-14">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-xl">
        
        <div className="flex items-center justify-center md:justify-start">
          <Image
            src="/assets/logo1.png"
            width={80}
            height={80}
            className="hidden md:block"
            alt="Anahata Connections Logo"
          />
          <div className="mt-2 md:mt-0 font-EvaMayasari font-semibold text-xl md:text-3xl text-white">Anahata Connections</div>
        </div>

        <div className="flex items-center gap-x-8 font-semibold text-sm md:text-base">
          <div className="cursor-pointer hover:text-[#808080] hover:transition duration-300 ease-in-out text-white"><Link href="/Home">Home</Link></div>
          <div className="cursor-pointer hover:text-[#808080] hover:transition duration-300 ease-in-out text-white"><Link href="/Our_story">Our Story</Link></div>
          <div className="cursor-pointer hover:text-[#808080] hover:transition duration-300 ease-in-out text-white"><Link href="/Blog">Blog</Link></div>
          <div className="cursor-pointer hover:text-[#808080] hover:transition duration-300 ease-in-out text-white"><Link href="/Home/#faq">FAQs</Link></div>
          <div className="border-solid border-2 border-white bg-[#094C3B] text-white rounded-[32px] px-4 py-1 cursor-pointer hover:bg-[#286f5d]"><Link href="/Signin">Sign In</Link></div>
        </div>
      
      </div>
    </header>
  );
};

export default Navbar;