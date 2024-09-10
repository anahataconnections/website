import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

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

  if (!testimonialData) {
    return <div>Loading...</div>;
  }

  console.log(testimonialData);

  return (
    <div className="w-full bg-[#F0FDF9] flex flex-col items-center py-12 px-4">
      <h1 className="font-Pattaya text-center text-3xl md:text-4xl text-[#094C3B] mb-8">
        {testimonialData[currentIndex]?.title}
      </h1>

      <div className="flex flex-col items-center max-w-2xl w-full">
        <div className="relative mb-[-2rem]">
          <div className="h-64 w-64 rounded-full ring-4 ring-yellow-400 ring-offset-8 ring-offset-[#F0FDF9] shadow-lg">
            {
              testimonialData[currentIndex]?.image && (
                <Image
                  src={testimonialData[currentIndex]?.image.data.attributes.url}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="rounded-full shadow-lg"
                  alt="Testimonial"
                />
              )
            }
          </div>
        </div>

        <div className="bg-[#F9EBCC] rounded-lg p-8 text-left w-full mb-4 h-max relative shadow-lg z-10">
          <div className="max-h-full overflow-y-auto">
            {testimonialData[currentIndex].content.map((paragraph, index) => (
              <div key={index}>
                {paragraph.children.map((child, childIndex) => (
                  <div key={childIndex}>
                    <p className="text-base md:text-lg text-[#094C3B] font-Satisfy">
                      {expanded ? child.text : `${child.text.substring(0, 125)}...`}
                    </p>
                    {child.text.length > 125 && (
                      <button
                        onClick={toggleExpand}
                        className="text-sm text-[#094C3B] font-Satisfy underline mt-2"
                      >
                        {expanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="text-base md:text-lg text-[#094C3B] font-Satisfy font-semibold text-right mt-4">
            - {testimonialData[currentIndex].name}
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex justify-center items-center bg-[#094C3B] hover:bg-[#094c3bc5] rounded-full text-white"
          >
            <MdKeyboardArrowLeft className="text-2xl" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 flex justify-center items-center bg-[#094C3B] hover:bg-[#094c3bc5] rounded-full text-white"
          >
            <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;