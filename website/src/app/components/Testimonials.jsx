/* eslint-disable */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ShowMoreButton from './ShowMoreButton';

async function fetchTestimonialData() {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/home?populate=*`
    );
    const response = await res.json();
    return response.data.attributes.testimonial.find(item => item.id === 1); //Extracting testimonial data with id: 1
  } catch (err) {
    console.error(err);
  }
}

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTestimonialData();
      setTestimonialData(data);
    };
    fetchData();
  }, []);

  if (!testimonialData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center pt-3 px-20">
      <div className="h-[630px] bg-[#F0FDF9] xl:w-[82%] custom3:w-[82%] w-[82%]">
        <header className="font-Pattaya flex items-center justify-center  md:text-[40px] max-md:text-[24px] text-[#094C3B] lg:text-[52px]">
          {testimonialData.title}
        </header>

        <div className="flex items-center justify-start max-md:px-6 sm:py-5 max-md:py-10 lg:py-20 xl:pl-28 md:py-18 md:px-16 lg:px-7 xl:ml-18 -translate-y-12">
          <div>
            <Image
              src="/assets/testimonial.png"
              width={380}
              height={600}
              className="md:w-65 h-[480px] max-md:w-[200px] customMax:w-[350px]"
              alt="Screenshots of the dashboard project showing desktop and mobile versions"
            />
          </div>

          <div className="absolute -translate-y-8 translate-x-6 custom3:translate-y-8 custom3:-translate-x-3 customMax:translate-y-4 customMax:-translate-x-6">
            <div className="flex flex-col text-justify justify-between max-md:py-4 max-md:pl-2 max-md:mt-20 max-md:text-[10px] max-md:ml-32 max-md:mr-10 lg:ml-[300px] md:ml-[280px] lg:mt-[100px] md:w-[50%]  md:mt-[100px] lg:w-[60%] rounded-[12px] lg:px-10 lg:pt-10 lg:pb-[50px] custom2:pr-4 bg-[#F9EBCC] text-[#094C3B] font-Satisfy xl:text-[14px] lg:text-[23px] md:text-[16px] md:px-6 md:py-8 customMax:text-[1.2rem]">
              {testimonialData.content.map((paragraph, index) => (
                <p className="underline underline-offset-8 " key={index}>{paragraph.children[0].text}</p>
              ))}
              <ShowMoreButton />
              <div className="md:text-[20px] max-md:text-[10px] max-md:bottom-0 max-md:right-12 absolute right-32 satisfy-regular text-xl lg:text-[18px] -translate-x-24 bottom-9  custom2:-translate-x-8 customMax:-translate-x-40">
                - Mr & Mrs Singh
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
