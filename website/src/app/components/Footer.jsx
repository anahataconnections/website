"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Contact from "./contact";
import { footerElem, socialObj } from "@/constants";
import HelpPopup from "./HelpPopup";
import toast from "react-hot-toast";

const Footer = () => {
  const [isHelpPopupOpen, setIsHelpPopupOpen] = useState(false);
  const openHelpPopup = () => setIsHelpPopupOpen(true);
  const closeHelpPopup = () => setIsHelpPopupOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const requestBody = JSON.stringify({
      data: {
        email,
      },
    });

    console.log(requestBody);

    try {
      const response = await fetch(
        "https://cms.anahataaconnections.com/api/subscribers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: requestBody,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send email");
      }
      toast.success("You have successfully subscribed! Thank You.", {
        icon: "👏",
    });
      // alert("You have successfully subscribed! Thank You.");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an error sending your email.");
    }
  };

  return (
    <div className="relative">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] absolute bottom-0 right-0 bg-flower_back bg-cover bg-no-repeat -z-[50]"></div>

      <div className="bg-transparent flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24 border-t-2 border-gray-200 pt-8 pb-12 z-[10] mx-4 sm:mx-8 md:mx-12 lg:mx-16">
        <div className="flex flex-col justify-center items-center gap-4 z-[2]">
          <Link href={"/"} className="flex flex-col items-center justify-center gap-2 sm:gap-4">
            <Image
              src="/assets/logo1.png"
              width={100}
              height={100}
              className="w-20 sm:w-24 md:w-28 lg:w-32"
              alt="brand logo"
            />
            <div className="font-EvaMayasari font-bold text-[#094C3B] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
              Anahata Connections
            </div>
          </Link>

          <div className="flex flex-col items-center gap-4 mt-4">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="text-sm sm:text-base text-[#094C3B] font-bold mb-2">
                Follow us on
              </div>
              <div className="flex justify-center items-center gap-2">
                {socialObj.map(({ icon, title, link }) => (
                  <Link
                    href={link}
                    target="_blank"
                    key={title}
                    className="text-xs sm:text-sm text-white bg-[#094C3B] hover:bg-[#094C3Ba8] p-2 rounded-full cursor-pointer"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <div className="text-lg sm:text-xl md:text-2xl font-Pattaya text-[#094C3B] text-center">
                DOWNLOAD THE APP
              </div>
              <div className="flex flex-row items-center justify-center gap-4">
                <Image
                onClick={()=>window.open("https://play.google.com/store/apps/details?id=com.connections.anahata&hl=en", "_blank")}
                  src="/assets/google.svg"
                  width={120}
                  height={120}
                  className="cursor-pointer w-36"
                  alt="Google Play"
                />
                <Image
                  src="/assets/app.svg"
                  width={120}
                  height={120}
                  className="cursor-pointer w-36"
                  alt="App Store"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col items-center md:items-end justify-center text-black gap-8">
          <div className="flex flex-col items-center md:items-start z-[2] w-full">
            <h3 className="text-sm sm:text-base md:text-lg font-medium capitalize text-center md:text-left">
              Subscribe for our latest updates
            </h3>
            <form
              id="myForm"
              className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                id="email"
                name="email"
                className="w-full sm:w-64 md:w-72 h-10 px-3 rounded-md border border-[#094C3B] text-[#094C3B] placeholder:text-gray-300"
                placeholder="example@example.com"
              />
              <button
                className="bg-[#094C3B] h-10 py-2 px-4 text-white rounded-md cursor-pointer hover:bg-[#286f5d] font-semibold w-full sm:w-auto"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 z-[50]">
            {Object.keys(footerElem).map((key) => (
              <div key={key} className="flex flex-col gap-4">
                <h1 className="text-lg sm:text-xl font-semibold capitalize underline">
                  {key}
                </h1>
                <ul className="flex flex-col gap-2">
                  {footerElem[key].map(({ title, link }) => (
                    <li key={link}>
                      {link === "none" ? (
                        <span
                          className="cursor-pointer hover:underline"
                          onClick={() => {
                            if (title === "Help Center") {
                              openHelpPopup();
                            }
                          }}
                        >
                          {title}
                        </span>
                      ) : (
                        <Link href={link} className="cursor-pointer hover:underline">
                          {title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
          className="max-h-[calc(100vh - 5em)] h-fit max-w-lg scale-90 overflow-auto overscroll-y-contain rounded-md bg-white p-6 text-black transition absolute right-8 sm:right-16 md:right-20 lg:right-80 top-20"
          htmlFor=""
        >
          <Contact />
        </label>
      </label>

      <HelpPopup isOpen={isHelpPopupOpen} onClose={closeHelpPopup} />
    </div>
  );
};

export default Footer;