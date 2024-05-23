/* eslint-disable */
"use client";
import { hideOnScroll } from "@/helpers/navbar";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navElemObj } from "@/constants";

export const MobileNavbar = () => {
  const navbar = useRef(null);
  const [open, setOpen] = useState(false);

  // hiding scroll bar on scroll
  useEffect(() => {
    if (navbar && navbar.current) {
      hideOnScroll(navbar.current);
    }
  }, []);

  return (
    <header
      ref={navbar}
      className="flex mobile:hidden fixed top-0 w-screen bg-[#094C3B] h-[60px]   z-[50] transition-all delay-300 duration-300 overflow-hidden"
    >
      <div className="relative w-[100%] h-[100%] flex  items-center  ">
        {/* logo */}
        <Link className="absolute left-[5px]" href={"/Home"}>
          <Image
            src="/assets/logo1.png"
            width={80}
            height={80}
            alt="Anahata Connections Logo"
          />
        </Link>

        {/* burger */}
        <div
          onClick={() => setOpen((crnt) => !crnt)}
          className="absolute right-[20px] flex flex-col items center justify-center gap-[5px]"
        >
          <span className=" w-[30px] h-[2px] bg-white"></span>
          <span className=" w-[30px] h-[2px] bg-white"></span>
          <span className=" w-[30px] h-[2px] bg-white"></span>
        </div>
      </div>
      <div
        className={`${
          open ? "" : "scale-x-0"
        } fixed top-0 right-0  origin-right  overflow-hidden`}
      >
        {/* over layear */}
        <div
          onClick={() => setOpen((crnt) => !crnt)}
          className="w-screen h-screen bg-[rgba(0,0,0,0.4)]"
        ></div>
        {/*navbar*/}
        <div
          className={`fixed top-0 right-0 flex flex-col gap-[20px]  bg-[#094C3B] w-[50vw] h-screen flex   z-[50] ${
            open ? "" : "scale-x-0"
          } origin-right trasition-all duration-[300ms]  `}
        >
          {/* navbar closer */}
          <div
            onClick={() => setOpen(false)}
            className="absolute right-[10px] top-[2px] text-[30px] text-white "
          >
            x
          </div>
          <ul className="flex flex-col gap-[20px] ml-[17px] mt-[50px]">
            {navElemObj.map(({ title, link }) => {
              return (
                <Link href={link} key={link}>
                  <li
                    onClick={() => setOpen(false)}
                    className=" cursor-pointer hover:text-[#808080] hover:transition duration-300 ease-in-out text-white font-bold"
                  >
                    {title}
                  </li>
                </Link>
              );
            })}
          </ul>
          {/* logo */}
          <Link href={"/Home"}>
            <Image
              onClick={() => setOpen(false)}
              src="/assets/logo1.png"
              width={70}
              height={80}
              className="w-[70px] h-fit"
              alt="Anahata Connections Logo"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
