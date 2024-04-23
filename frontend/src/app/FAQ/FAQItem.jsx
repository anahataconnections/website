"use client"
import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`rounded-[32px] w-full border border-gray-500 mb-4 px-10  ${
        isOpen ? "bg-[#094C3B] text-white" : "bg-white text-black"
      }`}
    >
      <div
        className="bg-inherit px-4 py-5 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
      </div>
      {isOpen && (
        <div className="px-4 py-3">
          <p className="text-lg">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
