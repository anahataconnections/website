import React from "react";
import lf from "../assets/left_flower.png";
import rf from "../assets/right_flower.png";
import logo from "../assets/logo1.png";

const Hero = () => {
  return (
    <div className="bg-home-page-back bg-cover bg-no-repeat ">
    <div className="bg-home-grad flex item-center pl-[160px]">
 
      {/* <div className="bg-lf"> */}
      <div className="absolute bottom-[-30px] left-[80px] w-60">
          <img src={lf} alt="" />
        </div>
      <div className="flex items-center justify-between bg-hero   bg-contain bg-no-repeat w-full h-screen">
        {/* <div className="mt-0 mb-0 ml-0 mr-0">
      <img src={lf} alt="" /></div> */}
        <div className=" pb-[20px] pl-[240px] flex flex-col items-center">
        <img src={logo} alt="" className="w-20" />
          <div className="satisfy-regular text-[46px] text-[#F9EBCC]">Anahata Connections</div>
          <div className="satisfy-regular text-3xl text-[#F9EBCC]">Where Yogic love Blossoms</div>
          <div className="mt-2 bg-[#094C3B] text-white rounded-[32px] px-14 py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold">Meet Your Match Now</div>

        </div >
        <div className="absolute bottom-[-30px] right-[135px] w-60">
          <img src={rf} alt="" />
        </div>
      </div>
      {/* </div> */}
    </div>
    <div className="h-[750px]">
      <header className="pattaya-regular flex items-center justify-center text-[#0C6242] text-[52px] pt-40">
        Why Anahata Connections?
      </header>

      <header className="satisfy-regular flex items-center justify-center text-3xl pt-20 w-[1050px] text-center mx-auto" >
        Welcome to Anahata Connections, where love intertwines with
        spirituality. Explore meaningful connections grounded in yogic science
        and the wisdom of the heart chakra. Our platform unites kindred spirits
        aligned with mindfulness and compassion. Join us on the journey to
        deeper connections and conscious relationships
      </header >
      <div className="flex justify-center"><div className="mt-2 bg-[#094C3B] text-white rounded-[32px] px-14 py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold">KNOW MORE</div>
</div>
      </div>
    </div>
  );
};

export default Hero;
