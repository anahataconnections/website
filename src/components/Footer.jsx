import React from "react";
import logo from "../assets/logo1.png";
import yt from "../assets/yt.png";
import li from "../assets/linkedin.png";
import fb from "../assets/fb.png";
import tg from "../assets/telegram.png";
import insta from "../assets/insta.png";
import googleplay from "../assets/googleplay.png";
import appstore from "../assets/appstore.png";
const Footer = () => {
  return (
    <>
    <div className=" ml-20 mb-10">
      <b><h2>Subscribe for our latest updates</h2></b>
    <form id="myForm">
    <input type="text" id="name" name="name" className="mr-5 border-solid border-2 border-[#094C3B] h-11 text-[#094C3B]" placeholder="xyz@gmail.com"/>
    <button className="mt-2 bg-[#094C3B] text-white rounded-[3px] px-14 py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold" type="submit">Subscribe</button>
</form>

    </div>
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-4 gap-x-32">
          <div className="flex flex-col items-center justify-center">
            <img src={logo} alt="" className="object-cover h-32 w-32" />
            <div className="satisfy-regular pt-4 text-xl text-[#094C3B]">
              Anahata Connections
            </div>
            <div className=" text-sm text-[#094C3B] font-bold py-1">
              Follow us on
            </div>
            <div className="flex py-2 gap-x-2">
              <img src={yt} alt="" className="cursor-pointer" />
              <img src={li} alt="" className="cursor-pointer" />
              <img src={fb} alt="" className="cursor-pointer" />
              <img src={tg} alt="" className="cursor-pointer" />
              <img src={insta} alt="" className="cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-xl pb-5 underline underline-offset-8 ">
              Overview
            </div>

            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
              Our Story
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
              Blog
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
              FAQ
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
              Contact Us
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-xl pb-5 underline underline-offset-8 ">
              Privacy & legal terms
            </div>

            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
              Terms of use
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
              Privacy policy
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
              Refund Policy
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-xl pb-5 underline underline-offset-8 ">
              More
            </div>

            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
              Events
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
              Partner With Us
            </div>
            <div className="font-medium py-1 hover:underline underline-offset-4 cursor-pointer">
              Help Center
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-10 gap-x-10">
        <div className="pattaya-regular text-[#094C3B] text-3xl">
          DOWNLOAD THE APP
        </div>
        <img src={googleplay} alt="" />
        <img src={appstore} alt="" />
      </div>
    </>
  );
};

export default Footer;
