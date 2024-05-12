/* eslint-disable */
"use client"
import React from "react";

import Image from "next/image";
// import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Our_story() {
  return (
    <main className="bg-white scroll-smooth">
      <Navbar />
      <Image
            src="/assets/bg2.png"
            width={500}
            height={100}
            className="w-[100%] h-[85vh] object-cover object-center"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <div className="flex flex-row justify-between my-10 mx-10 space-y-4">
            <div >
            <div className="font-Pattaya my-4  text-3xl text-[#094C3B]">Rashmi Bansal</div>
          <p className="font-sarabun text-gray-500 text-[35px] font-semibold">Journey Begins on 4th april 2022</p>
            </div>
            <div className="bg-[#094C3B] p-2 rounded-xl">
            <Image
            src="/assets/profile.png"
            width={500}
            height={100}
            className="w-[100%]"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
            </div>
          </div>
      <div className="mt-12 mx-8 ">
        <h1 className="font-Pattaya my-6 flex items-center justify-center text-3xl text-[#094C3B]">Founder&apos;s Words</h1>
        <p className="font-sarabun text-[25px] m-2 text-black text-justify">Pen auto polygon group edit object polygon. Prototype vector union slice prototype. Blur move subtract flatten editor prototype share device. Component subtract vertical figjam layout auto blur. Team move shadow rectangle component. Italic export connection style background inspect link distribute. Ipsum pixel select layer variant group object. Move rotate vector vertical outline list underline layout ellipse. </p>
        <p className="font-sarabun text-[25px] m-2 text-black text-justify">Frame layer image figma union variant flows plugin share component. Auto group draft italic auto arrow component prototype. Subtract stroke scale invite reesizing underline share rotate bold project. Draft subtract vertical subtract team text shadow. Select bullet style auto boolean move. Image horizontal line boolean underline library italic polygon figma strikethrough. </p>
          </div>
          
<div className='bg-flower_back bg-no-repeat bg-cover'>
        <div className="mt-12 mx-5">
            <h1 className="font-Pattaya my-6 flex items-center justify-center text-3xl text-[#094C3B]">Why Choose Us ?</h1>
          <p className="font-sarabun text-[25px] m-2 text-black text-justify">Share shadow italic rotate vertical align pencil style. Layout strikethrough component asset overflow pixel strikethrough stroke auto polygon. Arrow distribute scale library pencil distribute arrange prototype union. Layout mask undo figma figjam reesizing image plugin invite arrange. Rectangle horizontal ipsum variant layer. Flatten project undo style mask fill auto text rotate. Polygon library frame reesizing scale distribute ipsum slice follower polygon. </p>
          <p className="font-sarabun text-[25px] m-2 text-black text-justify">Share shadow italic rotate vertical align pencil style. Layout strikethrough component asset overflow pixel strikethrough stroke auto polygon. Arrow distribute scale library pencil distribute arrange prototype union. Layout mask undo figma figjam reesizing image plugin invite arrange. Rectangle horizontal ipsum variant layer. Flatten project undo style mask fill auto text rotate. Polygon library frame reesizing scale distribute ipsum slice follower polygon. </p>
           
          </div>
<div className=" py-10 flex items-center justify-center rounded-m mx-6">
            <Image
            src="/assets/img1.png"
            width={600}
            height={400}
            className=""
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
            </div>
      
      </div>
      <Footer />
    </main>
  );
}
