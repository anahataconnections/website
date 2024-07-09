"use client";
import React, { useEffect, useState } from "react";
import "../Style/whyAnahat.css";
import { Banner } from "../components/pages/career";
import { getJobs } from "@/api/career";
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

const career = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJobs();
      setJobs(data);
    };
    fetchData();
  }, []);

  console.log(jobs);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center pb-[200px] z-[2]">
      {/* banner */}
      <Banner />

      <div className="w-[80vw] mobile:w-[60vw] flex flex-col   mt-[50px]">
        {/* search bar */}
        <input
          type="text"
          placeholder="Job title or category"
          className="w-[80vw] mobile:w-[60vw] h-[80px]  outline-none bg-[#F6F6F6]  mobile:text-[25px] text-[#6C6C6C] mobile:placeholder:text-[25px]  placeholder:text-[#6C6C6C] rounded-lg box-border px-[30px]"
        />
        <div className="w-[100%] flex flex-wrap justify-normal gap-x-14">
          {jobs &&
            jobs.map((job, key) => {
              return (
                <JobCard
                  key={key} 
                  image_url={job.attributes.role_picture.data.attributes.url}
                  role_description={job.attributes.role_description}
                  role_title={job.attributes.role_title}
                />
              );
            })}
        </div>
        <div className="text-[11px] mobile:text-[20px] font-sarabun flex justify-center items-center mt-[100px]  ">
          For more details about Open Positions email us at {`career@anahataconnections.com`}
        </div>
      </div>
    </div>
  );
};

export default career;