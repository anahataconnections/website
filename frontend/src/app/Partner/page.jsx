import React from "react";
import Image from "next/image";
// import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Our_story() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="bg-home-page-back">
      <Image
            src="/assets/bg2.png"
            width={500}
            height={100}
            className="w-[100%]"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <div className="grid grid-cols-2 px-20 py-20">
            <div className="font-Satisfy my-20  text-6xl text-[#094C3B]">Let's Build Something <span className="text-[#FF5733]">Beautiful </span>Together</div>
            <div className="font-nota text-xl">Aenean tempor mi molestie egestas cras. Quis nec eget arcu ultricies. Ultricies nisl risus in ridiculus. Tristique facilisis tristique cursus elementum porta erat est. Nulla condimentum elit neque diam cras adipiscing. Lacus dictumst volutpat mattis interdum hendrerit elementum. Posuere rhoncus in lorem bibendum sit. Ipsum sagittis sed suspendisse viverra tellus sed. At platea velit justo urna luctus nulla adipiscing pharetra massa. In rutrum neque amet vulputate aenean integer cum. Dictum auctor potenti in quis et nec hendrerit tincidunt.</div>
          </div>
    </div>

         
          
<div className='bg-flower_back bg-no-repeat bg-cover mt-10'>

      <Footer />
      </div>
    </main>
  );
}
