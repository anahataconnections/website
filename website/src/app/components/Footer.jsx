import React from "react";
import Image from "next/image";
import Link from "next/link";
import Contact from "./contact"
import Help_center from "./help-center"
const Footer = () => {
  return (
    <>
    <div className=" mx-20 mb-10">
      <b><h2>Subscribe for our latest updates</h2></b>
    <form id="myForm">
    <input type="text" id="name" name="name" className="mr-5 border-solid border-2 border-[#094C3B] h-11 text-[#094C3B]" placeholder="xyz@gmail.com"/>
    <button className="mt-2 bg-[#094C3B] text-white rounded-[3px] px-14 py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold" type="submit">Subscribe</button>
</form>

    </div>
      <div className="flex justify-center items-center ml-10 ">
        <div className="grid grid-cols-4 gap-x-32">
          <div className="flex flex-col items-center justify-center">
            {/* <img src={logo} alt="" className="object-cover h-32 w-32" /> */}
            <Image
            src="/assets/logo1.png"
            width={50}
            height={50}
            className="hidden md:block mr-3"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
            <div className="font-Satisfy font-bold pt-4 text-xl text-[#094C3B]">
              Anahata Connections
            </div>
            <div className=" text-sm text-[#094C3B] font-bold py-1">
              Follow us on :
            </div>
            <div className="flex py-2 gap-x-2">
             
              <Image src="/assets/yt.png" width={50} height={50} className="cursor-pointer" alt="error" />
              <Image src="/assets/linkedin.png" width={50} height={50} className="cursor-pointer" alt="error" />
              <Image src="/assets/fb.png" width={50} height={50} className="cursor-pointer" alt="error" />
              <Image src="/assets/telegram.png" width={50} height={50} className="cursor-pointer" alt="error" />
              <Image src="/assets/insta.png" width={50} height={50} className="cursor-pointer" alt="error" />
              
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-xl pb-5 underline underline-offset-8 ">
              Overview
            </div>

            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
            <Link href="/Our_story">Our Story</Link>
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
            <Link href="/Blog">Blog</Link>
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
            <Link href="/Home/#faq">FAQ</Link>
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
              <label for="tw-model2" className="cursor-pointer rounder ">Contact Us</label>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-xl pb-5 underline underline-offset-8 ">
            Privacy & legal terms
              
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
              <Link href="/Privacy">Privacy policy</Link>
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
            <Link href="/Terms">Terms of use</Link>
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
            <Link href="/Refund">Refund Policy</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-xl pb-5 underline underline-offset-8 ">
              More
            </div>

            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
            <Link href="/Events">Events</Link>
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
            <Link href="/Partner">Partner With Us</Link>
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
            <label for="tw-model" className="cursor-pointer rounder ">Help Center</label>
            <input type="checkbox" id="tw-model" className="peer fixed appearance-none opacity-0"/>
      <label for="tw-model" className="pointer-events-none invisible fixed inset-0 flex overflow-hidden overflow-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100">
        <label className="max-h-[calc(100vh - 5em)] h-fit max-w-lg scale-90 overflow-auto overscroll-y-contain rounded-md bg-white p-6 text-black transition absolute right-80 top-20" for="">
          {/* {/* <h3>model opened</h3> */}
          <Help_center/> 
        </label>
      </label> 
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-10 gap-x-10">
        <div className="font-Pattaya text-[#094C3B] text-3xl">
          DOWNLOAD THE APP
        </div>
        {/* <img src={googleplay} alt="" />
        <img src={appstore} alt="" /> */}
        <div>
        <Image src="/assets/googleplay.png" width={200} height={200} className="cursor-pointer" alt="error" />
        <Image src="/assets/appstore.png" width={200} height={200} className="cursor-pointer" alt="error" />
        </div>
      </div>
      
      <input type="checkbox" id="tw-model2" className="peer fixed appearance-none opacity-0"/>
      <label for="tw-model2" className="pointer-events-none invisible fixed inset-0 flex overflow-hidden overflow-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100">
        <label className="max-h-[calc(100vh - 5em)] h-fit max-w-lg scale-90 overflow-auto overscroll-y-contain rounded-md bg-white p-6 text-black transition absolute right-80 top-20" for="">
          {/* <h3>model opened</h3> */}
        <Contact/>
        </label>
      </label>
    </>
  );
};

export default Footer;
