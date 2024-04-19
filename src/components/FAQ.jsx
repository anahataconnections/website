import React from "react";
import FAQItem from "./FAQItem";

const FAQ = () => {
  return (
    <div className="h-auto">
      <header className="pattaya-regular flex items-center justify-center text-[#094C3B] text-[52px]">
        Frequently Asked Questions
      </header>

      <div className="flex flex-col justify-center items-center px-32 py-20">
        <FAQItem
          question="What is Anahata, how do i get into it ?"
          answer="
          Anahata is a community platform build for the people who tend to and want to follow the concepts of anahata. We want to build a tribe for people who are genuinely into the yogic science.
"
        />
        <FAQItem
          question="I want to know more about the plans and pricing"
          answer="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi quibusdam, iste aliquid suscipit consequuntur est illo modi, ducimus aliquam earum ullam unde id totam vero commodi velit voluptate reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi quibusdam, iste aliquid suscipit consequuntur est illo modi, ducimus aliquam earum ullam unde id totam vero commodi velit voluptate reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi quibusdam, iste aliquid suscipit consequuntur est illo modi, ducimus aliquam earum ullam unde id totam vero commodi velit voluptate reiciendis."
        />

        <FAQItem
          question="Can i participate in the events ?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi quibusdam, iste aliquid suscipit consequuntur est illo modi, ducimus aliquam earum ullam unde id totam vero commodi velit voluptate reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi quibusdam, iste aliquid suscipit consequuntur est illo modi, ducimus aliquam earum ullam unde id totam vero commodi velit voluptate reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi quibusdam, iste aliquid suscipit consequuntur est illo modi, ducimus aliquam earum ullam unde id totam vero commodi velit voluptate reiciendis."
        />
        <FAQItem
          question="I want to get into any Yogic school?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi quibusdam, iste aliquid suscipit consequuntur est illo modi, ducimus aliquam earum ullam unde id totam vero commodi velit voluptate reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi quibusdam, iste aliquid suscipit consequuntur est illo modi, ducimus aliquam earum ullam unde id totam vero commodi velit voluptate reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi quibusdam, iste aliquid suscipit consequuntur est illo modi, ducimus aliquam earum ullam unde id totam vero commodi velit voluptate reiciendis."
        />
        <FAQItem
          question="What is Anahata, how do i get into it  ?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi quibusdam, iste aliquid suscipit consequuntur est illo modi, ducimus aliquam earum ullam unde id totam vero commodi velit voluptate reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi quibusdam, iste aliquid suscipit consequuntur est illo modi, ducimus aliquam earum ullam unde id totam vero commodi velit voluptate reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi quibusdam, iste aliquid suscipit consequuntur est illo modi, ducimus aliquam earum ullam unde id totam vero commodi velit voluptate reiciendis."
        />
      </div>
    </div>
  );
};

export default FAQ;
