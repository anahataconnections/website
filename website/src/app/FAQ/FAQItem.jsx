"use client"

import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };


  return (
    <div
      className={`rounded-[32px] w-full border border-gray-500 mb-4 px-8  ease-linear transition-all duration-300 ${isOpen ? "bg-[#094C3B] text-white " : "bg-white text-black"
        }`}
    >
      <div
      
        className="bg-inherit h-[58px]px-4 py-5 cursor-pointer flex items-center justify-between font-sarabun"

        onClick={toggleAccordion}
      >
        <h3 className="text-xl font-semibold ">{capitalizeFirstLetter(question)}</h3>
        <h1 className="text-xl font-semibold">+</h1>
      </div>
      {isOpen && (
        <div className="px-4 py-3 flex items-center justify-between">
          <p className="text-lg font-sarabun">{answer}</p>

        </div>
      )}
    </div>
  );
};

export default FAQItem;