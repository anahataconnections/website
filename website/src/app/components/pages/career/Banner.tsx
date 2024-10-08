"use client";

import { useEffect, useState } from "react";

export const Banner = () => {
  const [banner_image, setBanner_image] = useState("");
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://cms.anahataaconnections.com/api/career-banner?populate=*"
        );

        const response = await res.json();
        console.log(response);
        setBanner_image(
          response.data.attributes.banner_image.data.attributes.url
        );
        setHeading(response.data.attributes.heading);
        setSubheading(response.data.attributes.subheading);
        setDescription(response.data.attributes.description);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(description);

  return (
    <div
      className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] bg-cover bg-no-repeat bg-center text-white"
      style={{
        backgroundImage: `url('${banner_image}')`,
      }}
    >
      <div
        className="w-full h-full flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 box-border p-4 sm:p-6 md:p-8 lg:p-10 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/careerBannerOverlay.svg')",
        }}
      >
        <h1 className="font-Pattaya text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {heading}
          {/* Careers */}
        </h1>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col gap-2 sm:gap-3 md:gap-4 font-sarabun">
          <h2 className="font-bold text-[#FDF9DA] text-lg sm:text-xl md:text-2xl lg:text-3xl">
            {subheading}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
