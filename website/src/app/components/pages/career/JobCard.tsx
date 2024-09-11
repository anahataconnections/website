import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="relative h-48 w-full">
        <Image
          src={image_url}
          alt={role_title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 h-14">
          {role_title}
        </h2>
        <div className="mt-4">
          <Link href={role_description} target="_blank">
            <button className="w-full bg-[#094C3B] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#0A5C48] transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#094C3B] focus:ring-opacity-50">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};