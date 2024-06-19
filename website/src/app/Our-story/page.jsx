/* eslint-disable */
"use client";
import React, { useEffect, useState } from "react";
import "../Style/Home.css";
import Image from "next/image";

async function fetchData() {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/our-story?populate[0]=Founder_words&populate[1]=why_choose_us&populate[2]=about_founder.founder_image&populate[3]=Images.banner_image`
    );
    const response = await res.json();
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export default function Ourstory() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = async () => {
      const res = await fetchData();
      setData(res);
    };
    result();
  }, []);

  const founderWords = data?.attributes?.Founder_words;
  const whyChooseUs = data?.attributes?.why_choose_us;
  const foundersImage =
    data?.attributes?.about_founder.founder_image.data.attributes;
  const bannerImage = data?.attributes?.Images.banner_image.data.attributes;

  return (
    <div className="w-screen flex flex-col items-center  ">
      <Image
        src={bannerImage?.url}
        width={500}
        height={100}
        className="story-img w-[100%] h-[50vh] mobile:h-[65vh] object-cover object-center"
        alt="our story banner"
      />
      <div className="w-full lg:w-full px-5 lg:px-52 flex flex-col items-center pt-[30px] pb-[50px]  mobile:pt-[50px] gap-[50px] ">
        {/* image and info */}
        <div className="w-full flex max-mobile:flex-col-reverse max-mobile:items-center mobile:justify-between">
          <div className="flex flex-col gap-[5px] mobile:gap-[20px] max-mobile:items-center ">
            <div className="font-Pattaya text-[30px] mobile:text-[35px] text-[#094C3B]">
              {founderWords?.content[0].children[0].text}
            </div>
            <p className="font-sarabun text-[20px] mobile:text-[30px] ">
              {founderWords?.content[1].children[0].text}
            </p>
          </div>
          <Image
            src={foundersImage?.url}
            width={550}
            height={100}
            className="w-[150px] h-[150px] mobile:w-[200px] mobile:h-[200px] rounded-full object-cover border-[10px] border-[#EAFFFA]"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
        </div>
        <div className="flex flex-col gap-[50px] mobile:gap-[100px]">
          {/* founder's word */}
          <div className="w-[100%] flex flex-col gap-[10px] max-mobile:text-left">
            <h1 className="font-Pattaya  flex items-center justify-center text-[30px] mobile:text-[35px]  text-[#094C3B]">
              {founderWords?.content[2].children[0].text}
            </h1>
            <div className="flex flex-col gap-[20px]">
              <p className=" font-sarabun text-[18px] mobile:text-[20px] leading-[25px] mobile:leading-[50px]">
                {founderWords?.content[3].children[0].text}
              </p>
              <p className=" font-sarabun text-[18px] mobile:text-[20px] leading-[25px] mobile:leading-[50px]">
                {founderWords?.content[4].children[0].text}
              </p>
            </div>
          </div>
          {/* why choose us */}
          <div className="w-[100%] flex flex-col gap-[10px] max-mobile:text-left">
            <h1 className="font-Pattaya  flex items-center justify-center text-[35px] text-[#094C3B]">
              {founderWords?.content[6].children[0].text}
            </h1>
            <div className="flex flex-col gap-[7 0px]">
              <p className=" font-sarabun text-[18px] mobile:text-[20px] leading-[25px] mobile:leading-[50px]">
                {whyChooseUs?.content &&
                  whyChooseUs.content.map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph.children.map((child, childIndex) => (
                        <p key={childIndex}>{child.text}</p>
                      ))}
                    </React.Fragment>
                  ))}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" flex flex-col lg:flex-row justify-center rounded-m  mt-[50px] mb-[100px] px-5 lg:px-52 gap-x-10 gap-y-5">
        <Image
          src="/assets/img1.png"
          width={600}
          height={400}
          className="max-mobile:w-[90vw]"
          alt="image"
        />
        <p className=" font-sarabun text-[18px] mobile:text-[20px] leading-[25px] mobile:leading-[50px]">
          Share shadow italic rotate vertical align pencil style. Layout
          strikethrough component asset overflow pixel strikethrough stroke auto
          polygon. Arrow distribute scale library pencil distribute arrange
          prototype union. Layout mask undo figma figjam reesizing image plugin
          invite arrange. Rectangle horizontal ipsum variant layer. Flatten
          project undo style mask fill auto text rotate. Polygon library frame
          reesizing scale distribute ipsum slice follower polygon.{" "}
        </p>
      </div> */}
    </div>
  );
}
