// FAQ/page.tsx
"use client"

import React, { useEffect, useState } from "react";
import FAQItem from "./FAQItem";

async function fetchFaq() {
  try {
    const res = await fetch(`https://cms.anahataaconnections.com/api/faqs`);
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

const FAQ = () => {
  const [faqData, setFaqData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFaq();
      setFaqData(data);
    };
    fetchData();
  }, []);

  if (!faqData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-auto">
      <header className="font-Pattaya flex items-center text-center justify-center text-[#094C3B] text-[52px]">
        Frequently Asked Questions
      </header>

      <div className="flex flex-col justify-center items-center p-10">
        {faqData.data.map((faq, index) => (
          <FAQItem key={index} question={faq.attributes.question} answer={faq.attributes.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
