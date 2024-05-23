/* eslint-disable */
"use client";
import { hideOnScroll } from "@/helpers/navbar";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { navElemObj } from "@/constants";

const Navbar = () => {
  const navbar = useRef(null);

  // hiding scroll bar
  useEffect(() => {
    if (navbar && navbar.current) {
      hideOnScroll(navbar.current);
    }
  }, []);

  return (
    <header
      ref={navbar}
      className="hidden mobile:flex fixed top-0 w-screen bg-[#094C3B] h-[90px] customPhone:h-[75px] custom:h-[90px] flex px-4 z-[50] transition-all delay-300 duration-300"
    >
      <div className="flex flex-col md:flex-row  justify-between items-center w-full box-border mobile:pr-[50px]  pc:pr-[150px] ">
        <div className="flex items-center justify-center md:justify-start">
          <Image
            src="/assets/logo1.png"
            width={80}
            height={80}
            className="hidden md:block"
            alt="Anahata Connections Logo"
          />
          <div className="mt-2 md:mt-2 ml-[-14px] font-EvaMayasari font-semibold text-xl md:text-3xl sm:text-2xl text-white">
            Anahata Connections
          </div>
        </div>

        <ul className="flex items-center gap-[55px] font-semibold lg:text-[16px]   text-[9px] font-sarabun ">
          {navElemObj.map(({ link, title }) => {
            return (
              <Link href={link} key={link}>
                {link !== "/Signin" ? (
                  <li className="cursor-pointer hover:text-[#808080] hover:transition duration-300 ease-in-out text-white">
                    {title}
                  </li>
                ) : (
                  <button className="border-[1px] border-white rounded-full px-[25px] py-[7px] hover:bg-[#286f5d] text-[16px] text-white font-[500] ">
                    Sign In
                  </button>
                )}
              </Link>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
