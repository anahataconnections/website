"use client";

import React, { useState } from "react";

const FAQItem = ({ question, answer, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  const toggleAccordion = () => {
    setOpenIndex(isOpen ? null : index);
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div
      className={`relative z-10  w-[80vw] mobile:w-[60vw] border border-gray-500 mb-4 rounded-xl ease-linear transition-all duration-200 ${
        isOpen ? "bg-[#094C3B] text-white " : "bg-transparent text-black "
      }`}
    >
      <div
        className="bg-inherit h-[58px] rounded-xl px-4 py-5 cursor-pointer flex items-center justify-between font-sarabun"
        onClick={toggleAccordion}
      >
        <h3 className="text-[15px] mobile:text-[20px] font-semibold">
          {capitalizeFirstLetter(question)}
        </h3>
        <h1 className="mobile:text-[20px]  font-semibold">
          {isOpen ? "-" : "+"}
        </h1>
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
