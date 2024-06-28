/* eslint-disable */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { splitAndJoin } from "@/helpers/home";

async function fetchTestimonialData() {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/home?populate=*,testimonial.image`
    );
    const response = await res.json();
    return response.data.attributes.testimonial;
  } catch (err) {
    console.error(err);
  }
}

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState(null);
  const [linesToShow, setLinesToShow] = useState(5);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex - 1 >= 0 ? currentIndex - 1 : testimonialData.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonialData.length);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTestimonialData();
      setTestimonialData(data);
    };
    fetchData();
  }, []);

  console.log(testimonialData);

  if (!testimonialData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[100%]  bg-[#F0FDF9] flex flex-col   gap-[50px] items-center max-mobile:py-[30px] py-[30px] pb-[50px]">
      <h1 className="font-Pattaya  text-center text-[25px] mobile:text-[40px] text-[#094C3B] box-border max-mobile:px-[50px] ">
        {testimonialData[currentIndex]?.title}
      </h1>
      <div className="relative  w-[100%] flex max-mobile:flex-col max-mobile:gap-[20px] justify-center items-center">
        <Image
          src={testimonialData[currentIndex]?.image.data.attributes.url}
          width={500}
          height={600}
          className="w-[200px] h-[400px] object-cover mobile:w-[300px] rounded-xl small-tab:ml-[50px] backdrop-blur-md"
          alt="Screenshots of the dashboard project showing desktop and mobile versions"
        />

        <div className=" w-[250px] mobile:w-[650px] h-auto py-[10px] mobile:py-[20px] px-[20px] flex flex-col justify-end items-center bg-[#F9EBCD] mobile:translate-x-[-50px] rounded-lg box-border">
          {testimonialData[currentIndex].content.map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph.children.map((child, childIndex) => (
                <div className="relative flex flex-col gap-[1px]">
                  <p
                    key={childIndex}
                    className="text-[10px] mobile:text-[15px] tab:text-[18px] text-[#094C3B] font-Satisfy font-[500] box-border mobile:px-[50px] underline underline-offset-8 leading-8"
                  >
                    {child.text}
                  </p>
                </div>
              ))}
            </React.Fragment>
          ))}
          <p className="mt-5 text-[10px] mobile:text-[15px] tab:text-[18px] text-[#094C3B] font-Satisfy font-[500] box-border mobile:px-[50px] underline underline-offset-8 leading-8">
            - {testimonialData[currentIndex].name}
          </p>
        </div>

        {/* buttons */}
        <div className="flex items-center gap-[10px] mobile:absolute top-0 right-0 mobile:translate-x-[-50px]">
          <button
            onClick={handlePrev}
            className="w-[40px] h-[40px] mobile:w-[30px] mobile:h-[30px] tab:w-[40px] tab:h-[40px] flex justify-center items-center bg-[#094C3B] hover:bg-[#094c3bc5] rounded-full"
          >
            <MdKeyboardArrowLeft className="text-[25px] text-white" />
          </button>
          <button
            onClick={handleNext}
            className="w-[40px] h-[40px] mobile:w-[30px] mobile:h-[30px] tab:w-[40px] tab:h-[40px] flex justify-center items-center bg-[#094C3B] hover:bg-[#094c3bc5]  rounded-full"
          >
            <MdKeyboardArrowRight className="text-[25px] text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
