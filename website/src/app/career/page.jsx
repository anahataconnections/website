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
          For more details about Open Positions, email us at career@anahataconnections.com
        </div>
      </div>
    </div>
  );
};
/*
 <section className=' custom3:w-[100%] overflow-x-hidden'>  
          <div className="w-[100%] h-[70vh] custom2:h-[66vh] custom3:h-[68vh] customMax:h-[70vh] relative">
              <div className="relative h-full">
                  <Image
                      src="assets/careers.svg"
                      alt="Additional Image"
                      layout="fill"
                      objectFit="cover"
                      className="z-10 bg-cover object-fit"
                  />
                  <div className="absolute inset-0 flex flex-col  justify-center  z-50 w-[370px] customMax:w-[600px] custom3:w-[480px] custom3:px-16 mx-20 shadow-left">
                      <h2 className="font-Satisfy text-white customMax:text-[4rem] text-[3rem] mb-4 font-bold ">
                          Careers
                      </h2>
                      <h2 className='font-sarabun text-[26px] customMax:text-[28px] font-bold'>We are looking for</h2>

                      <p className="text-white text-[24px] customMax:text-[28px] mb-6   font-sarabun pt-4 text-justify">
                          individuals who share our passion yo be the best and achieve their full potential
                      </p>

                  </div>
                  
                  <div className="absolute inset-0 bg-black opacity-50 z-30"></div>{" "}

              </div>
          </div>
          
          <div className="flex justify-center items-center mt-20 customMax:pt-[4.7rem]">
              <div>
                  <input
                      type='text'
                      placeholder='Job title or category'
                      className='w-[83vw] h-[70px] rounded-[10px] border-[2px]  border-gray-700 placeholder-styled'
                      
                  />
              </div>
          </div>
          
          <div className=' custom2:px-24 custom3:px-24 '>
          </div>
          
          <h1 className='text-[24px] mt-16 customMax:pb-8 pb-8 text-center font-bold text-black '>
          For open positions email us career@anahataconnections.com
          </h1>
          
          
          
          
          
          <CareersPage />;
          
          </section>
          */

export default career;
