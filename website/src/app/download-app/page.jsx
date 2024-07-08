import React from "react";
import Image from "next/image";
import img from "@/helpers/images/third.png";
import logo from "@/helpers/images/logo.png";
import Link from "next/link";

const page = () => {
  return (
    <main className="pt-14 bg-emerald-900 shadow-sm w-full z-[11]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-1/2 ">
          <Image
            src={img}
            alt="Decorative image"
            width={500}
            height={943}
            className=""
          />
        </section>
        <section className="flex flex-col items-center z-[11] pt-14">
          <form className="flex flex-col text-2xl leading-8 text-neutral-200 max-md:mt-10 max-md:max-w-full">
            <div className=" flex flex-col justify-center items-center mb-10">
              <Image
                src={logo}
                alt="Logo"
                width={279}
                height={372}
                className="w-60 h-60 object-cover"
              />

              <div className="font-EvaMayasari text-[60px] text-center ">
                Anahata Connections
              </div>
              <div className="font-Pattaya uppercase self-center pt-20 font-medium">
                Download the app
              </div>
            </div>

            <div className="flex flex-col gap-y-6 text-base">
              <img src="/assets/googleplay.png" alt="" />
              <img src="/assets/appstore.png" className="scale-[85%]" alt="" />
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default page;
