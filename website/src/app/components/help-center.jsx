/* eslint-disable */

import React, { useState } from "react";

const HelpCenter = () => {
  const [showHelpCenter, setShowHelpCenter] = useState(false);

  const toggleHelpCenter = () => {
    setShowHelpCenter(!showHelpCenter);
  };

  return (
    <>
      <div className="bg-home-page-back bg-cover bg-no-repeat h-screen flex items-center justify-center">
        <div className="relative">
          <div className="font-Pattaya my-4 text-3xl text-[#094C3B] text-center">
            How can we help you?
          </div>
          {showHelpCenter && (
            <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-md">
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 border-solid border-2 border-[#094C3B] h-7 rounded-[5px] text-[#094C3B] placeholder-[NAME]"
              />
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 border-solid border-2 border-[#094C3B] h-7 rounded-[5px] text-[#094C3B] placeholder-[xyz@gmail.com]"
              />
              <input
                type="text"
                id="gender"
                name="gender"
                className="mt-2 border-solid border-2 border-[#094C3B] h-7 rounded-[5px] text-[#094C3B] placeholder-[Gender]"
              />
              <textarea
                id="userReview"
                className="mt-2 bg-home-page-back border-solid border-2 border-[#094C3B] rounded-[5px] text-[#094C3B] placeholder-[Write to us...]"
                name="userReview"
                rows="4"
                cols="20"
              ></textarea>
              <button className="mt-2 border-solid border-2 w-40 border-white bg-[#094C3B] text-white rounded-[32px] px-10 py-2 cursor-pointer hover:bg-[#286f5d]" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
        <label
          htmlFor="tw-model"
          className="cursor-pointer rounded-md md:text-[13px] max-sm:text-[8px] bg-[#094C3B] text-white px-6 py-2.5 hover:bg-[#286f5d] absolute bottom-4"
          onClick={toggleHelpCenter}
        >
          Help Center
        </label>
      </div>
    </>
  );
};

export default HelpCenter;
