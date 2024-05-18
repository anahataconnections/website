// FAQ/page.tsx
"use client"

import React, { useEffect, useState } from "react";
import FAQItem from "./FAQItem";

async function fetchFaq() {
  try {
    const res = await fetch(`https://cms.anahataaconnections.com/api/home?populate=*`);
    const response = await res.json();
    return response.data.attributes.faqs;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch FAQ data");
  }
}

const FAQ = () => {
  const [faqData, setFaqData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const faqs = await fetchFaq(); // Fetch 'faqs' directly
        setFaqData(faqs); // Set 'faqs' directly
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  if (!faqData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-auto ">
      <header className="font-Pattaya flex items-center text-center justify-center text-[#094C3B] text-[52px]">
        Frequently Asked Questions
      </header>

      <div className="flex flex-col justify-center items-center mx-[95px] custom2:px-12 customMax:px-36 my-8">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} /> // Access 'question' and 'answer' directly
        ))}
      </div>
    </div>
  );
};

export default FAQ;
