/* eslint-disable */
"use client"

import React from "react";
import Image from "next/image";
// import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Our_story() {
  return (
    <main className="bg-white  overflow-x-hidden">
      <Navbar />
      <div className="bg-home-page-back">
        <Image
          src="/assets/bg2.png"
          width={500}
          height={70} // Adjust the height as needed
          className="w-full h-[85vh] object-cover object-center"
          alt="Screenshots of the dashboard project showing desktop and mobile versions"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-20 py-10 lg:py-20">
          <div className="font-Satisfy lg:my-20 text-4xl lg:text-6xl text-center lg:text-left text-[#094C3B]">
            Let's Build Something <span className="text-[#FF5733]">Beautiful </span>Together
          </div>
          <div className="font-sarabun text-base lg:text-xl text-gray-800 lg:ml-5 lg:mr-2 text-justify mt-8">
            Aenean tempor mi molestie egestas cras. Quis nec eget arcu ultricies. Ultricies nisl risus in ridiculus. Tristique facilisis tristique cursus elementum porta erat est. Nulla condimentum elit neque diam cras adipiscing. Lacus dictumst volutpat mattis interdum hendrerit elementum. Posuere rhoncus in lorem bibendum sit. Ipsum sagittis sed suspendisse viverra tellus sed. At platea velit justo urna luctus nulla adipiscing pharetra massa. In rutrum neque amet vulputate aenean integer cum. Dictum auctor potenti in quis et nec hendrerit tincidunt.
          </div>
        </div>
    </div>

         
          
<div className='bg-flower_back bg-no-repeat bg-cover'>

      <Footer />
      </div>
    </main>
  );
}
