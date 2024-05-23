/* eslint-disable */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ShowMoreButton from "./ShowMoreButton";
import Btn from "./Button";
import { splitAndJoin } from "@/helpers/home";

async function fetchTestimonialData() {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/home?populate=*`
    );
    const response = await res.json();
    return response.data.attributes.testimonial.find((item) => item.id === 1); //Extracting testimonial data with id: 1
  } catch (err) {
    console.error(err);
  }
}

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState(null);
  const [linesToShow, setLinesToShow] = useState(5);
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
    <div className="w-[100%]  bg-[#F0FDF9] flex flex-col   gap-[50px] items-center max-mobile:py-[30px] py-[60px]">
      <h1 className="font-Pattaya  text-center text-[25px] mobile:text-[40px] text-[#094C3B]">
        {testimonialData.title}
      </h1>
      <div className=" w-[100%] flex max-mobile:flex-col max-mobile:gap-[20px] justify-center items-center">
        <Image
          src="/assets/testimonial.png"
          width={500}
          height={600}
          className="w-[250px] small-tab:w-[300px] tab:w-[350px] h-auto small-tab:ml-[50px]"
          alt="Screenshots of the dashboard project showing desktop and mobile versions"
        />

        <div className=" w-[250px] mobile:w-[700px] py-[10px] mobile:py-[20px] px-[20px] flex flex-col justify-end items-center bg-[#F9EBCD] mobile:translate-x-[-70px] rounded-lg box-border">
          {testimonialData.content.map((paragraph, index) => {
            const wordArr = paragraph.children[0].text.split(" ");
            const chunkedUpArr = splitAndJoin(wordArr, 10);

            return (
              <div className="w-[100%] flex flex-col gap-[4px]" key={index}>
                <>
                  {chunkedUpArr.map((line, index) => {
                    return (
                      <>
                        {index < linesToShow && (
                          <div className="relative flex flex-col gap-[1px]">
                            <p className="text-[8px] tab:text-[18px] text-[#094C3B] font-Satisfy font-[500] box-border mobile:px-[50px]">
                              {line}
                            </p>
                            <div className="absolute bottom-0 translate-y-[-50%] w-[100%] h-[1px] bg-[black]"></div>
                          </div>
                        )}
                      </>
                    );
                  })}
                  <div className="flex flex-col gap-[3px]">
                    {linesToShow <= 5 ? (
                      <p
                        onClick={() => setLinesToShow(chunkedUpArr.length)}
                        className="max-mobile:text-[12px] text-[#094C3B] font-Satisfy  font-[500] text-end py-[3px] cursor-pointer"
                      >
                        reade more...
                      </p>
                    ) : (
                      <p
                        onClick={() => setLinesToShow(5)}
                        className="max-mobile:text-[12px] text-[#094C3B] font-Satisfy  font-[500] text-end py-[3px] cursor-pointer"
                      >
                        less...
                      </p>
                    )}
                    <div className="w-[100%] h-[1px] bg-[black]"></div>
                  </div>
                  <div className="w-[100%] h-[60px] text-[15px] mobile:text-[20px] flex justify-end items-center text-[#094C3B] font-Satisfy ">
                    - Mr & Mrs Singh
                  </div>
                </>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/*
 <div className="flex items-center justify-center pt-3 px-[0px] custom3:px-[0px]">
      <div className="h-[650px] bg-[#F0FDF9] xl:w-[80%] custom3:w-[12%] w-[98%]">
        <header className="font-Pattaya flex items-center justify-center custom3:pt-8 text-[2.8rem]  text-[#094C3B]">
          {testimonialData.title}
        </header>

        <div className="flex items-center justify-start max-md:px-6 sm:py-5 custom3:pt-24 lg:py-20 xl:pl-28 md:py-18 md:px-16 lg:px-7 xl:ml-18">
          <div className="flex">
            <Image
              src="/assets/testimonial.png"
              width={380}
              height={600}
              className="md:w-65 h-[480px] max-md:w-[200px] custom3:w-[350px] customMax:w-[350px]"
              alt="Screenshots of the dashboard project showing desktop and mobile versions"
            />
            <div className="pl-[37rem]">
              <Btn />
            </div>
          </div>

          <div className="absolute ">
            <div className="flex flex-col text-justify justify-between max-md:py-4 max-md:pl-2 max-md:mt-200 max-md:text-[100px] max-md:ml-32 max-md:mr-10 lg:ml-[250px] md:ml-[280px] lg:mt-[100px] md:w-[90%]   md:mt-[100px] lg:w-[70%] rounded-[12px] lg:px-10 lg:pt-10 lg:pb-[50px] custom2:pr-4 bg-[#F9EBCC]  xl:text-[14px] lg:text-[23px] md:text-[16px] md:px-6 md:py-8 customMax:text-[1.2rem]">
              {testimonialData.content.map((paragraph, index) => (
                <p className="underline underline-offset-8 px-8" key={index}>
                  {paragraph.children[0].text}
                </p>
              ))}
              <div>
                <ShowMoreButton />
              </div>
              <div className="md:text-[20px] max-md:text-[10px] max-md:bottom-0 max-md:right-12 absolute right-32 satisfy-regular text-xl lg:text-[18px]  bottom-9  ">
                - Mr & Mrs Singh
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */

export default Testimonials;
