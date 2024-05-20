/* eslint-disable */

"use client";
// components/ShowMoreButton.tsx

import React, { useState } from "react";

const ShowMoreButton: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="">
      {showContent && (
        <div className="  xl:text-[14px] customMax:text-[1.2rem] px-8  text-justify">
          {/* Your hidden content goes here */}
          <span className="underline underline-offset-4">
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          </span>
          <br />
          <span className="underline underline-offset-4">
            irure dolor Lorem ipsum dolor sit amet, consectetur adipiscing,
          </span>
          <br />
          <span className="underline underline-offset-4">
            sed do eiusmod tempor incididunt
          </span>
        </div>
      )}

      <button onClick={handleButtonClick} className="text-black text-m pl-8">
        {showContent ? "Less" : "more..."}
      </button>
    </div>
  );
};

export default ShowMoreButton;
