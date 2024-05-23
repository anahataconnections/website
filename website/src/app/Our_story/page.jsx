/* eslint-disable */
"use client";
import React from "react";
import "../Style/Home.css";

import Image from "next/image";

export default function Ourstory() {
  return (
    <div className="w-screen flex flex-col items-center  ">
      <Image
        src="/assets/bg2.png"
        width={500}
        height={100}
        className="story-img  w-[100%] h-[50vh] mobile:h-[65vh] object-cover object-center"
        alt="our story banner"
      />
      <div className="w-[90vw] flex flex-col items-center pt-[30px] pb-[50px]  mobile:pt-[50px] gap-[50px] ">
        {/* image and info */}
        <div className="w-[100%] flex max-mobile:flex-col max-mobile:flex-col-reverse max-mobile:items-center mobile:justify-between">
          <div className="flex flex-col gap-[5px] mobile:gap-[20px] max-mobile:items-center ">
            <div className="font-Pattaya text-[30px] mobile:text-[35px] text-[#094C3B]">
              Rashmi Bansal
            </div>
            <p className="font-sarabun text-[20px] mobile:text-[30px] ">
              Journey Begins on 4th april 2022
            </p>
          </div>
          <Image
            src="/assets/profile.png"
            width={550}
            height={100}
            className="w-[150px] h-[150px] mobile:w-[300px] mobile:h-[300px] rounded-full border-[10px] border-[#EAFFFA]"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
        </div>
        <div className="flex flex-col gap-[50px] mobile:gap-[100px]">
          {/* founder's word */}
          <div className="w-[100%] flex flex-col gap-[10px]">
            <h1 className="font-Pattaya  flex items-center justify-center text-[30px] mobile:text-[35px]  text-[#094C3B]">
              Founder&apos;s Words
            </h1>
            <div className="flex flex-col gap-[20px]">
              <p className=" font-sarabun text-[18px] mobile:text-[22px] leading-[40px] mobile:leading-[50px]">
                Pen auto polygon group edit object polygon. Prototype vector
                union slice prototype. Blur move subtract flatten editor
                prototype share device. Component subtract vertical figjam
                layout auto blur. Team move shadow rectangle component. Italic
                export connection style background inspect link distribute.
                Ipsum pixel select layer variant group object. Move rotate
                vector vertical outline list underline layout ellipse.
              </p>
              <p className=" font-sarabun text-[18px] mobile:text-[22px] leading-[40px] mobile:leading-[50px]">
                Frame layer image figma union variant flows plugin share
                component. Auto group draft italic auto arrow component
                prototype. Subtract stroke scale invite reesizing underline
                share rotate bold project. Draft subtract vertical subtract team
                text shadow. Select bullet style auto boolean move. Image
                horizontal line boolean underline library italic polygon figma
                strikethrough.
              </p>
            </div>
          </div>
          {/* why choose us */}
          <div className="w-[100%] flex flex-col gap-[10px]">
            <h1 className="font-Pattaya  flex items-center justify-center text-[35px] text-[#094C3B]">
              Why Choose Us ?
            </h1>
            <div className="flex flex-col gap-[100px]">
              <p className=" font-sarabun text-[18px] mobile:text-[22px] leading-[40px] mobile:leading-[50px]">
                Share shadow italic rotate vertical align pencil style. Layout
                strikethrough component asset overflow pixel strikethrough
                stroke auto polygon. Arrow distribute scale library pencil
                distribute arrange prototype union. Layout mask undo figma
                figjam reesizing image plugin invite arrange. Rectangle
                horizontal ipsum variant layer. Flatten project undo style mask
                fill auto text rotate. Polygon library frame reesizing scale
                distribute ipsum slice follower polygon.
              </p>
              <p className=" font-sarabun text-[18px] mobile:text-[22px] leading-[40px] mobile:leading-[50px]">
                Share shadow italic rotate vertical align pencil style. Layout
                strikethrough component asset overflow pixel strikethrough
                stroke auto polygon. Arrow distribute scale library pencil
                distribute arrange prototype union. Layout mask undo figma
                figjam reesizing image plugin invite arrange. Rectangle
                horizontal ipsum variant layer. Flatten project undo style mask
                fill auto text rotate. Polygon library frame reesizing scale
                distribute ipsum slice follower polygon.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="  flex items-center justify-center rounded-m  mt-[50px] mb-[100px]">
        <Image
          src="/assets/img1.png"
          width={600}
          height={400}
          className="max-mobile:w-[90vw]"
          alt="image"
        />
      </div>
    </div>
  );
}
/*
<>
      <main className="bg-white scroll-smooth  overflow-x-hidden">
       
        
  

        <div className="bg-flower_back bg-no-repeat bg-cover">
          <div className="mt-12 mx-5 customMax:px-20">
            <h1 className="font-Pattaya my-6 flex items-center justify-center text-3xl text-[#094C3B]">
              Why Choose Us ?
            </h1>
            <p className=" font-sarabun text-[18px] mobile:text-[22px] my-2 mx-[62px]  text-black text-justify custom3:px-[3.15rem]">
              Share shadow italic rotate vertical align pencil style. Layout
              strikethrough component asset overflow pixel strikethrough stroke
              auto polygon. Arrow distribute scale library pencil distribute
              arrange prototype union. Layout mask undo figma figjam reesizing
              image plugin invite arrange. Rectangle horizontal ipsum variant
              layer. Flatten project undo style mask fill auto text rotate.
              Polygon library frame reesizing scale distribute ipsum slice
              follower polygon.{" "}
            </p>
            <p className=" font-sarabun text-[22px] my-2 mx-[62px]  text-black text-justify custom3:px-[3.15rem]">
              Share shadow italic rotate vertical align pencil style. Layout
              strikethrough component asset overflow pixel strikethrough stroke
              auto polygon. Arrow distribute scale library pencil distribute
              arrange prototype union. Layout mask undo figma figjam reesizing
              image plugin invite arrange. Rectangle horizontal ipsum variant
              layer. Flatten project undo style mask fill auto text rotate.
              Polygon library frame reesizing scale distribute ipsum slice
              follower polygon.{" "}
            </p>
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
      </main>
    </>
*/
