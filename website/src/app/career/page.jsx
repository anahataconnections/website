"use client";
import React, { useEffect, useState } from "react";
import "../Style/whyAnahat.css";
import { Banner } from "../components/pages/career";
import { JobCard } from "../components/pages/career/JobCard";
import { useSelectedLayoutSegments } from "next/navigation";

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
  const [searchText, setSearchText] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJobs();
      setJobs(data);
      setFilteredJobs(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (jobs) {
      const filtered = searchJobs(jobs, searchText);
      setFilteredJobs(filtered);
    }
  }, [searchText, jobs]);

  const searchJobs = (jobs, query) => {
    if (!query) return jobs;

    return jobs.filter((job) => {
      const searchFields = [
        job.attributes.role_title,
        job.attributes.role_description,
        // Add more fields here if needed
      ];

      return searchFields.some((field) => {
        if (typeof field === 'string') {
          return field.toLowerCase().includes(query.toLowerCase());
        }
        return false;
      });
    });
  };

  if (!jobs) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-8 z-[2]">
      <Banner />

      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] flex flex-col gap-8">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="Search jobs by title or description"
          className="w-full h-12 sm:h-16 md:h-20 outline-none bg-[#F6F6F6] text-base sm:text-lg md:text-xl text-[#6C6C6C] placeholder:text-[#6C6C6C] rounded-lg box-border px-4 sm:px-6 md:px-8"
        />

        <div className="w-full flex flex-wrap justify-center gap-4">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              image_url={job.attributes.role_picture.data?.attributes?.url}
              role_description={job.attributes.role_description}
              role_title={job.attributes.role_title}
            />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center">
            No jobs found matching your search criteria.
          </div>
        )}

        <div className="text-xs sm:text-sm pb-8 md:text-base lg:text-lg font-sarabun flex justify-center items-center flex-col md:flex-row text-center">
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