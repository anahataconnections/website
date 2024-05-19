// FAQ/page.tsx
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
  const [openIndex, setOpenIndex] = useState(null); // Initialize openIndex state

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

  // Define setOpenIndex function to handle opening and closing FAQ items
  const handleOpenIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close state
  };

  return (
    <div className="h-auto ">
      <header className="font-Pattaya flex items-center text-center justify-center text-[#094C3B] text-[2.2rem]">
        Frequently Asked Questions
      </header>

      <div className="flex flex-col justify-center items-center mx-[95px] custom2:px-12 customMax:px-36 my-8">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index} // Pass index as a prop
            openIndex={openIndex} // Pass openIndex state as a prop
            setOpenIndex={handleOpenIndex} // Pass setOpenIndex function as a prop
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
