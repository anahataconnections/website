import React, { useEffect, useState } from "react";
import Image from "next/image";

export const JobCard = ({
  role_description,
  role_title,
  image_url,
}: {
  role_title: string;
  role_description: string;
  image_url: string;
}) => {
  return (
    <div className="w-[100%] mobile:w-[28%] mt-[50px] bg-[#F6F6F6] flex flex-col">
      <div
        className="w-[100%] h-[200px] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('${image_url}')`,
        }}
      ></div>
      <div className="w-[100%] h-[60%] flex flex-col justify-center items-center">
        <h2 className="text-gray-800 font-semibold text-lg mb-2">
          {role_title}
        </h2>
        <p className="text-gray-600 mb-4 text-center">{role_description}</p>
        <button className=" bg-[#094C3B] rounded-md font-sarabun text-white px-4 py-2 mt-4">
          Apply Now
        </button>
      </div>
    </div>
  );
};
