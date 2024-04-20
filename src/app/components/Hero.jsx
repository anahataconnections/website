import React from "react";
import Image from "next/image";
// import lf from "../assets/left_flower.png";
// import rf from "../assets/right_flower.png";
// import logo from "../assets/logo1.png";

const Hero = () => {
  return (
    <div className="bg-home-page-back bg-cover bg-no-repeat ">
    {/* <div className="bg-gradient-radial from-yellow-300 to-teal-700 bg-opacity-70 flex item-center pl-[160px]"> */}
    <div className="bg-radial-gradient flex item-center pl-[160px]">
 
      {/* <div className="bg-lf"> */}
      <div className="absolute bottom-[-30px] left-[80px] w-60">
      <Image
            src="/assets/left_flower.png"
            width={300}
            height={300}
            className="hidden md:block mr-8"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
        </div>
      <div className="flex items-center justify-between bg-hero   bg-contain bg-no-repeat w-full h-screen">
        
        <div className=" pt-[100px] pl-[270px] flex flex-col items-center">
        <Image
            src="/assets/logo1.png"
            width={150}
            height={150}
            className="hidden md:block mr-8 "
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <div className="font-eva  text-[46px] text-[#094C3B]">Anahata Connections </div>
          <div className="font-cantarell font-bold text-xl text-[#094C3B]">Where Yogic love Blossoms</div>
          <div className="mt-28 bg-[#094C3B] text-white rounded-[32px] px-14 py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold">Meet Your Match Now</div>

        </div >
        <div className="absolute bottom-[-30px] right-[135px] w-60">
        <Image
            src="/assets/right_flower.png"
            width={300}
            height={300}
            className="hidden md:block mr-8"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
        </div>
      </div>
      {/* </div> */}
    </div>
    <div className="h-[750px]">
      <header className="font-Pattaya flex items-center justify-center text-[#0C6242] text-[52px] pt-40">
        Why Anahata Connections?
      </header>

      <header className="font-Satisfy flex items-center justify-center text-4xl pt-10 w-[1050px] text-center mx-auto" >
        Welcome to Anahata Connections, where love intertwines with
        spirituality. Explore meaningful connections grounded in yogic science
        and the wisdom of the heart chakra. Our platform unites kindred spirits
        aligned with mindfulness and compassion. Join us on the journey to
        deeper connections and conscious relationships
      </header >
      <div className="flex justify-center mt-20"><div className="mt-2 bg-[#094C3B] text-white rounded-[32px] px-14 py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold">KNOW MORE</div>
</div>
      </div>
    </div>
  );
};

export default Hero;
