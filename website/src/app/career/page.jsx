"use client";
import React, { useEffect, useState } from "react";
import "../Style/whyAnahat.css";
import { Banner } from "../components/pages/career";
import { JobCard } from "../components/pages/career/JobCard";

async function fetchJobs() {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/careers?populate=*`
    );
    const response = await res.json();
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

const Career = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJobs();
      setJobs(data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center pb-16 sm:pb-24 md:pb-32 z-[2]">
      {/* banner */}
      <Banner />

      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] flex flex-col mt-8 sm:mt-12 md:mt-16">
        {/* search bar */}
        <input
          type="text"
          placeholder="Job title or category"
          className="w-full h-12 sm:h-16 md:h-20 outline-none bg-[#F6F6F6] text-base sm:text-lg md:text-xl text-[#6C6C6C] placeholder:text-[#6C6C6C] rounded-lg box-border px-4 sm:px-6 md:px-8"
        />

        <div className="w-full flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 mt-8">
          {jobs &&
            jobs.map((job, key) => {
              return (
                <JobCard
                  key={key}
                  image_url={job.attributes.role_picture.data?.attributes?.url}
                  role_description={job.attributes.role_description}
                  role_title={job.attributes.role_title}
                />
              );
            })}
        </div>

        <div className="text-xs sm:text-sm md:text-base lg:text-lg font-sarabun flex justify-center items-center flex-col md:flex-row text-center mt-12 sm:mt-16 md:mt-24">
          For more details about open positions email us at{' '}
          <a href="mailto:career@anahataconnections.com" className="ml-1 text-blue-600 hover:underline">
            career@anahataconnections.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Career;