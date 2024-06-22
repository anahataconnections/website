/* eslint-disable */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Contact from "./contact";
import { footerElem, socialObj } from "@/constants";

const Footer = () => {
  return (
    <div className="relative z-[10]">
      {/* flower */}
      <div className="w-[350px] h-[600px] small-tab:w-[1080px] small-tab:h-[1200px] absolute bottom-0 right-0 mobile:translate-x-[18%] bg-flower_back bg-cover bg-no-repeat -z-[50]"></div>

      <div className="bg-transparent flex max-mobile:flex-col justify-center items-center gap-[20px] mobile:gap-[300px] border-t-[2px] border-gray-200 pt-[20px] pb-[40px] z-[10] mx-10">
        <div className="flex flex-col justify-center items-center gap-[10px] z-[2]">
          <div className="flex flex-col items-center justify-center gap-[10px] mobile:gap-[15px]">
            <Image
              src="/assets/logo1.png"
              width={130}
              height={130}
              className=" w-[100px]"
              alt="brand log "
            />
            <div className="font-EvaMayasari font-bold text-[#094C3B] text-[45px]">
              Anahata Connections
            </div>
          </div>
          {/* social's */}
          <div className="hidden mobile:flex flex-col items-center gap-[15px] mobile:gap-[20px]">
            <div className="flex flex-col justify-center items-center gap-[5px] z-[2] ">
              <div className="text-base text-[#094C3B] font-bold mb-4">
                Follow us on
              </div>
              <div className="flex justify-center items-center gap-[5px]">
                {socialObj.map(({ icon, title, link }) => {
                  return (
                    <Link
                      href={link}
                      key={title}
                      className="text-[14px] text-white bg-[#094C3B] hover:bg-[#094C3Ba8] p-[5px] rounded-full cursor-pointer "
                    >
                      {icon}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-[25px] font-Pattaya text-[#094C3B]">
                DOWNLOAD THE APP
              </div>

              <div className="flex flex-row items-center justify-center">
                <Image
                  src="/assets/googleplay.png"
                  width={150}
                  height={150}
                  className="cursor-pointer  "
                  alt="error"
                />
                <Image
                  src="/assets/appstore.png"
                  width={150}
                  height={150}
                  className="cursor-pointer "
                  alt="error"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-auto mobile:w-[40vw] flex flex-col items-center lg:items-end justify-center lg:justify-end text-black gap-[50px] ">
          <div className="flex flex-col items-center lg:items-start z-[2]">
            <h3 className="text-sm lg:text-[20px] font-[500] capitalize">
              Subscribe for our latest updates
            </h3>
            <form
              id="myForm"
              className="flex max-mobile:flex-col items-center gap-[25px] mt-[10px]"
            >
              <input
                type="text"
                id="name"
                name="name"
                className="w-[300px] h-[40px]  rounded-md border-solid border-[1px] border-[#094C3B] text-[#094C3B] placeholder:text-black"
                placeholder="&nbsp;&nbsp; xyz@gmail.com"
              />
              <button
                className="bg-[#094C3B] h-[40px]  py-[5px] px-[10px] text-white rounded-[7px] cursor-pointer hover:bg-[#286f5d] font-semibold "
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-[100%] flex max-mobile:gap-[20px]  flex-wrap  justify-between z-[2]">
            {Object.keys(footerElem).map((key) => {
              return (
                <div
                  key={key}
                  className="max-mobile:mt-[20px] flex flex-col gap-[20px]"
                >
                  {/* heading */}
                  <h1 className="text-[22px] font-[600] capitalize underline">
                    {key}
                  </h1>
                  {/* elements */}
                  <ul className="flex flex-col gap-[10px]">
                    {footerElem[key].map(({ title, link }) => {
                      return link === "none" ? (
                        <li key={link}>{title}</li>
                      ) : (
                        <Link
                          key={link}
                          href={link}
                          className="cursor-pointer hover:underline"
                        >
                          <li key={link}>{title}</li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
            <div className="mobile:hidden flex flex-col justify-center items-center gap-y-[10px] z-[2]">
              <div className="text-base text-center text-[#094C3B] font-bold mt-[20px]">
                Follow us on
              </div>
              <div className="flex gap-x-[10px]">
                {socialObj.map(({ icon, title }) => {
                  return (
                    <div
                      key={title}
                      className="text-[14px] text-white bg-[#094C3B] hover:bg-[#094C3Ba8] p-[8px] rounded-full cursor-pointer "
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* social's */}
        <div className=" mobile:hidden flex flex-col items-center gap-[20px] mt-[30px]">
          <div className="flex flex-col justify-center items-center z-[2]">
            <div className="text-[25px] font-Pattaya text-[#094C3B]">
              DOWNLOAD THE APP
            </div>

            <div className="flex flex-row items-center justify-center">
              <Image
                src="/assets/googleplay.png"
                width={150}
                height={150}
                className="cursor-pointer  "
                alt="error"
              />
              <Image
                src="/assets/appstore.png"
                width={150}
                height={150}
                className="cursor-pointer "
                alt="error"
              />
            </div>
          </div>
        </div>
      </div>

      <input
        type="checkbox"
        id="tw-model2"
        className="peer fixed appearance-none opacity-0"
      />
      <label
        htmlFor="tw-model2"
        className="pointer-events-none invisible fixed inset-0 flex overflow-hidden overflow-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100"
      >
        <label
          className="max-h-[calc(100vh - 5em)] h-fit max-w-lg scale-90 overflow-auto overscroll-y-contain rounded-md bg-white p-6 text-black transition absolute right-80 top-20"
          htmlFor=""
        >
          <Contact />
        </label>
      </label>
    </div>
  );
};

export default Footer;
