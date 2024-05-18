import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "./Footer";

const JobCard = ({ role_title, role_description, role_picture }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden relative w-full sm:w-80 md:w-96 lg:w-80  custom2:w-[20rem] customMax:w-[30rem] customMax:h-[32rem]">
            <div className="relative h-52">
                <Image
                    src="assets/jobcard.svg"
                    alt={role_title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-6">
                <h2 className="text-gray-800 font-semibold text-lg mb-2">{role_title}</h2>
                <p className="text-gray-600 mb-4">{role_description}</p>
                <button className="absolute bottom-4 right-4 bg-[#094C3B] rounded-md font-sarabun text-white px-4 py-2 mt-4">
                    Apply Now
                </button>
            </div>
        </div>
    );
};


const CareersPage = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    "https://cms.anahataaconnections.com/api/careers?populate=*"
                );
                const data = await res.json();
                setJobs(data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container custom3:px-4 py-12">
            <h1 className="text-3xl font-semibold text-center mb-8">Current Job Openings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 customMax:px-12">
                {jobs.map((job) => (
                    <JobCard
                        key={job.id}
                        role_title={job.attributes.role_title}
                        role_description={job.attributes.role_description}
                        role_picture={job.attributes.role_picture.data}
                    />
                ))}
                
            </div>
            
           
        </div>
    );
};

export default CareersPage;
