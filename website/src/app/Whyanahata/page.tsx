// Page.tsx

"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Blogs from "../components/Blogs";

interface BannerImage {
  id: string;
  bannerImage: {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: null | string;
        caption: null | string;
        width: number;
        height: number;
        formats: null | object;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: null | string;
        provider: string;
        provider_metadata: null | object;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
}

interface Data {
  attributes: {
    banner_Image: BannerImage;
    what_is_anahata_chakra: Array<{
      id: number;
      Heading_title: string;
      date: string;
      subtitle: string;
      content: Array<{
        type: string;
        children: Array<{ text: string; type: string }>;
      }>;
      image: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: null | string;
            caption: null | string;
            width: number;
            height: number;
            formats: null | object;
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: null | string;
            provider: string;
            provider_metadata: null | object;
            createdAt: string;
            updatedAt: string;
          };
        };
      };
    }>;
  };
}

async function fetchWhy(): Promise<Data | null> {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/about-anahata?populate=banner_Image.bannerImage,what_is_anahata_chakra,what_is_anahata_chakra.image`
    );
    const response = await res.json();
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default function WhyAnahata() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchWhy();
        console.log(result);
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!data) return <div>No data found.</div>;

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

  const bannerImageUrl = data.attributes.banner_Image.bannerImage;

  return (
    <div className="bg-transparent w-full h-full top-0 overflow-x-hidden z-20 relative">
      <Image
        src={bannerImageUrl.data.attributes.url}
        alt="Hero Image"
        width={1920}
        height={400}
        className="w-full object-cover h-[60vh] custom1:h-[70vh] custom:h-[68vh]"
      />

      {what_is_anahata_chakra.map((item, index) => (
        <div
          key={index}
          className="text-center mt-16 px-4 custom1:mt-24 customMax:mt-28"
        >
          <h1 className="text-5xl my-4 text-[#166534] font-Pattaya">
            {item.Heading_title}
          </h1>
          <p className="text-gray-500">{formatDate(item.date)} • 5 min read</p>

          {/* Image rendering */}
          <div className="flex justify-center my-4">
            <Image
              src={item.image.data.attributes.url}
              alt="Additional Image"
              width={500}
              height={100}
              className="object-fit bg-cover custom:mt-12 custom1:mx-20 custom1:mt-12 custom1:w-[835px] customMax:w-[1700px] customMax:max-h-[570px] rounded-md"
            />
          </div>

          {/* Content rendering */}
          <div className="mx-20  custom1:mx-20 customMax:mx-[14.7rem] mt-8 text-justify">
            {item.content.map((contentItem, contentIndex) => (
              <p key={contentIndex} className="my-2 text-black text-lg">
                {contentItem.children.map((child, childIdx) => (
                  <span key={childIdx}>
                    {child.text}
                    {"\n"}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      ))}

      <div className="mb-10 z-[11]">
        <h1 className="my-20 text-[#166534] font-Pattaya text-center text-[2.5rem] xl:text-[3rem] ">
          More from us
        </h1>
        <Blogs />
      </div>
    </div>
  );
}
