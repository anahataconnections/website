/* eslint-disable */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
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
  console.log(testimonialData);

  return (
    <div className="w-[100%]  bg-[#F0FDF9] flex flex-col   gap-[50px] items-center max-mobile:py-[30px] py-[30px] pb-[50px]">
      <h1 className="font-Pattaya  text-center text-[25px] mobile:text-[40px] text-[#094C3B] box-border max-mobile:px-[50px] ">
        {testimonialData.title}
      </h1>
      <div className="relative  w-[100%] flex max-mobile:flex-col max-mobile:gap-[20px] justify-center items-center">
        <Image
          src="/assets/testimonial.png"
          width={500}
          height={600}
          className="w-[250px] mobile:w-[300px]  h-auto small-tab:ml-[50px]"
          alt="Screenshots of the dashboard project showing desktop and mobile versions"
        />

        <div className=" w-[250px] mobile:w-[650px] h-auto py-[10px] mobile:py-[20px] px-[20px] flex flex-col justify-end items-center bg-[#F9EBCD] mobile:translate-x-[-50px] rounded-lg box-border">
          {testimonialData.content.map((paragraph, index) => {
            const wordArr = paragraph.children[0].text.split(" ");
            const chunkedUpArr = splitAndJoin(wordArr, 8);

            return (
              <div className="w-[100%] flex flex-col gap-[4px]" key={index}>
                <>
                  {chunkedUpArr.map((line, index) => {
                    return (
                      <React.Fragment key={index}>
                        {" "}
                        {index < linesToShow && (
                          <div className="relative flex flex-col gap-[1px]">
                            <p className="text-[10px] mobile:text-[15px] tab:text-[18px] text-[#094C3B] font-Satisfy font-[500] box-border mobile:px-[50px]">
                              {line}
                            </p>
                            <div className="absolute bottom-0 translate-y-[-50%] w-[100%] h-[1px] bg-[black]"></div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                  <div className="flex flex-col gap-[3px]">
                    {linesToShow <= 5 ? (
                      <p
                        onClick={() => setLinesToShow(8)}
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
          {/* buttons */}
        </div>
        <div className="flex items-center gap-[10px] mobile:absolute top-0 right-0 mobile:translate-x-[-50px]">
          <button className="w-[40px] h-[40px] mobile:w-[30px] mobile:h-[30px] tab:w-[40px] tab:h-[40px] flex justify-center items-center bg-[#094C3B] hover:bg-[#094c3bc5] rounded-full">
            <MdKeyboardArrowLeft className="text-[25px] text-white" />
          </button>
          <button className="w-[40px] h-[40px] mobile:w-[30px] mobile:h-[30px] tab:w-[40px] tab:h-[40px] flex justify-center items-center bg-[#094C3B] hover:bg-[#094c3bc5]  rounded-full">
            <MdKeyboardArrowRight className="text-[25px] text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
