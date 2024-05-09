// "use-client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Contact from "./contact"
import Help_center from "./help-center"
const Footer = () => {
  return (
    <>
    
      <div className="flex justify-center items-center overflow-hidden border-t-2 border-gray-700  ">
        <div className="flex flex-row items-start justify-between mx-10 md:ml-2 md:mr-3 max-sm:mx-[0px] max-sm:w-[40%]">
          <div className="flex flex-col items-center justify-center">
            {/* <img src={logo} alt="" className="object-cover h-32 w-32" /> */}
            <Image
            src="/assets/logo1.png"
            width={130}
            height={130}
            className=" w-10 md:block ml-10 lg:mr-3 md:mr-0 md:w-24  max-sm:mr-10 "
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
            <div className="font-EvaMayasari font-bold lg:pt-4 pt-0  text-4xl md:text-[30px] max-sm:text-[15px] text-[#094C3B]">
              Anahata Connections
            </div>
            <div className=" max-sm:text-[10px] max-sm:py-0 text-sm text-[#094C3B] font-bold py-1">
              Follow us on :
            </div>
            <div className="flex py-2 gap-x-2">
             
              <Image src="/assets/yt.png" width={20} height={20} className="cursor-pointer max-sm:w-3 max-sm:h-3" alt="error" />
              <Image src="/assets/linkedin.png" width={20} height={20} className="cursor-pointer max-sm:w-3 max-sm:h-3" alt="error" />
              <Image src="/assets/fb.png" width={20} height={50} className="cursor-pointer max-sm:w-3 max-sm:h-3" alt="error" />
              <Image src="/assets/telegram.png" width={20} height={20} className="cursor-pointer max-sm:w-3 max-sm:h-3" alt="error" />
              <Image src="/assets/insta.png" width={20} height={20} className="cursor-pointer max-sm:w-3 max-sm:h-3" alt="error" />
              
            </div>
            <div className="flex flex-col justify-center items-center py-10 max-sm:py-5 gap-x-10">
        <div className="font-Pattaya text-[#094C3B] text-3xl md:text-[20px] max-sm:text-[10px]">
          DOWNLOAD THE APP
        </div>
       
        <div className="flex flex-row items-center justify-center">
        <Image src="/assets/googleplay.png" width={150} height={150} className="cursor-pointer max-sm:w-10 max-sm:ml-0 " alt="error" />
        <Image src="/assets/appstore.png" width={150} height={150} className="cursor-pointer max-sm:w-10" alt="error" />
        </div>
      </div>
          </div>
          
          
    </div>
    <div className="flex flex-col items-end justify-end lg:ml-10 md:mr-3 text-black" >
    <div className="md:mt-2 md:text-[10px] max-sm:text-[7px] max-sm:mr-7 mb-10 max-sm:mb-3 mr-10 flex flex-col justify-start items-start">
      <b><h2>Subscribe for our latest updates</h2></b>
    <form id="myForm">
    <input type="text" id="name" name="name" className="mr-5 max-sm:mr-1 md:mr-3 rounded-[7px] border-solid border-2 max-sm:border-[0.5px] border-[#094C3B] h-11 md:h-[30px] max-sm:h-[19px] text-[#094C3B]" placeholder="&nbsp;&nbsp;xyz@gmail.com"/>
    <button className="mt-2 bg-[#094C3B]  text-white rounded-[7px] px-14 py-2.5 md:px-5 md:py-2 max-sm:px-2 max-sm:py-1  cursor-pointer hover:bg-[#286f5d] font-semibold" type="submit">Subscribe</button>
</form>

    </div>
    <div className="grid grid-cols-3 gap-x-32 max-sm:gap-x-12">
    <div className="flex flex-col max-sm:pl-10 pl-[60px] lg:pl-[50px]">
            <div className="font-semibold text-xl md:text-[18px] max-sm:text-[10px] pb-5 max-sm:pb-1 underline underline-offset-8 ">
              Overview
            </div>

            <div className="md:text-[13px] max-sm:text-[8px]  font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
            <Link href="/Our_story">Our&nbsp;Story</Link>
            </div>
            <div className="font-medium md:text-[13px] max-sm:text-[8px] py-1 hover:underline underline-offset-4 cursor-pointer">
            <Link href="/Blog">Blog</Link>
            </div>
            <div className="font-medium md:text-[13px] py-1 max-sm:text-[8px] hover:underline underline-offset-4 cursor-pointer">
            <Link href="/Home/#faq">FAQ</Link>
            </div>
            <div className="font-medium md:text-[13px] max-sm:text-[8px] py-1 hover:underline underline-offset-4 cursor-pointer">
              <label for="tw-model2" className="cursor-pointer rounder ">Contact&nbsp;Us</label>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="font-semibold  max-sm:pb-1 md:text-[18px] max-sm:text-[10px] text-xl pb-5 underline underline-offset-8 ">
            Privacy&nbsp;&&nbsp;legal&nbsp;terms
              
            </div>
            <div className="font-medium md:text-[13px] max-sm:text-[8px] py-1 hover:underline underline-offset-4 cursor-pointer">
              <Link href="/Privacy">Privacy&nbsp;policy</Link>
            </div>
            <div className="font-medium md:text-[13px] max-sm:text-[8px] py-1 hover:underline underline-offset-4 cursor-pointer">
            <Link href="/Terms">Terms&nbsp;of&nbsp;use</Link>
            </div>
            <div className="font-medium md:text-[13px] py-1 max-sm:text-[8px] hover:underline underline-offset-4 cursor-pointer">
            <Link href="/Refund">Refund&nbsp;Policy</Link>
            </div>
          </div>
          <div className="flex flex-col max-sm:pl-3">
            <div className="font-semibold  max-sm:pb-0 md:text-[18px] max-sm:text-[10px] text-xl pb-5 underline underline-offset-8 ">
              More
            </div>

            <div className="font-medium md:text-[13px] max-sm:text-[8px] py-1 hover:underline underline-offset-4 cursor-pointer">
            <Link href="/Events">Events</Link>
            </div>
            <div className="font-medium md:text-[13px] max-sm:text-[8px] py-1 hover:underline underline-offset-4 cursor-pointer">
            <Link href="/Partner">Partner&nbsp;With Us</Link>
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
            <label for="tw-model" className="cursor-pointer rounder md:text-[13px] max-sm:text-[8px]">Help&nbsp;Center</label>
            <input type="checkbox" id="tw-model" className="peer fixed appearance-none opacity-0"/>
      <label for="tw-model" className="pointer-events-none invisible fixed inset-0 flex overflow-hidden overflow-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100">
        <label className="max-h-[calc(100vh - 5em)] h-fit max-w-lg scale-90 overflow-auto overscroll-y-contain rounded-md bg-white p-6 text-black transition absolute right-80 top-20" for="">
      
          <Help_center/> 
        </label>
      </label> 
            </div>
          </div>
    </div>

    </div>
      </div>
      
      
      <input type="checkbox" id="tw-model2" className="peer fixed appearance-none opacity-0"/>
      <label for="tw-model2" className="pointer-events-none invisible fixed inset-0 flex overflow-hidden overflow-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100">
        <label className="max-h-[calc(100vh - 5em)] h-fit max-w-lg scale-90 overflow-auto overscroll-y-contain rounded-md bg-white p-6 text-black transition absolute right-80 top-20" for="">
     
        <Contact/>
        </label>
      </label>
    </>
  );
};

export default Footer;
