// Page.tsx

"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Blogs from "../components/Blogs";

interface BannerImage {
  id: string;
  formats: {
    thumbnail: {
      url: string;
    };
  };
}

interface Data {
  attributes: {
    banner_Image: { id: string; bannerImage: BannerImage };
    what_is_anahata_chakra: {
      Heading_title: string;
      date: string;
      content: { type: string; children: { text: string }[] }[];
    };
  };
}

async function fetchWhy(): Promise<Data | null> {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/about-anahata?populate=banner_Image.bannerImage,what_is_anahata_chakra,what_is_anahata_chakra.image`
    );
    const response = await res.json();
    return response.data || null;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default function WhyAnahata() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchWhy();
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  const { banner_Image, what_is_anahata_chakra } = data.attributes;

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 30) {
      const months = Math.floor(diffDays / 30);
      return `${months} months ago`;
    } else {
      return `${diffDays} days ago`;
    }
  };
  const bannerImageUrl =
    banner_Image?.bannerImage?.formats?.thumbnail?.url || "";

    console.log(bannerImageUrl);
  return (
    <div className="bg-white w-[100vw] h-full top-0">
      <Navbar />

      <Image
        src="assets/banner.svg"
        alt="Hero Image"
        width={1920} // Set width to cover the full width of the screen
        height={400} // Adjust height as needed
        className="w-full object-cover h-[60vh] custom1:h-[70vh] custom:h-[68vh]" // Use w-full to occupy full width
      />

      <div className="flex justify-center items-center "></div>
      <div className="text-center mt-16 custom1:mt-24 customMax:mt-28">
        <h1 className="text-5xl my-4 text-[#166534] font-Pattaya">
          {what_is_anahata_chakra.Heading_title}
        </h1>
        <p className="text-gray-500">
          {formatDate(what_is_anahata_chakra.date)} • 5 min read
        </p>
      </div>
      <div className="flex justify-center my-4">
        <div>
          <Image
            src="assets/banner1.svg"
            alt="Additional Image"
            width={500}
            height={100}
            className="object-fit bg-cover custom:mt-12 custom1:mx-20 custom1:mt-12 custom1:w-[835px] customMax:w-[1700px] customMax:max-h-[570px]"
          />
        </div>
      </div>
      <div className="mx-20  custom1:mx-20 customMax:mx-[14.7rem] mt-8 text-justify">
        {what_is_anahata_chakra.content.map((item, index) => (
          <p key={index} className="my-2 text-black text-[1.3rem] ">
            {item.children.map((child, idx) => (
              <span key={idx}>
                {child.text}
                {"\n"}
              </span>
            ))}
          </p>
        ))}
      </div>

      <div className="mt-16">
        <h1 className="text-[#166534] font-Pattaya text-center text-[2.5rem] xl:text-[3rem] ">
          More from us
        </h1>
        <Blogs />
      </div>
      <Footer />
    </div>
  );
}
