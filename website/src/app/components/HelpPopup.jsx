import React from "react";

const HelpPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute bottom-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-[50]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[897px] h-[1017]">
        <div className="flex justify-between">
          <h2 className="text-[40px] text-[#094C3B] font-bold font-Pattaya">
            How can we help you?
          </h2>
          <div
            onClick={onClose}
            className="w-8 h-8 bg-[#094C3B] rounded-full flex justify-center items-center text-white text-center text-xl cursor-pointer"
          >
            {`×`}{" "}
          </div>
        </div>
        <div className="flex flex-col gap-y-5 px-5 pt-5">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="p-2 border border-black rounded-lg focus:outline-none"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-Mail"
            className="p-2 border border-black rounded-lg focus:outline-none"
          />
          <input
            type="text"
            name="gender"
            id="gender"
            placeholder="Gender"
            className="p-2 border border-black rounded-lg focus:outline-none"
          />
          <textarea
            placeholder="Write to us ..."
            name="message"
            id="message"
            rows="10"
            className="p-2 border border-black rounded-lg focus:outline-none"
          ></textarea>

          <div className="w-40 py-3 font-semibold bg-[#094C3B] text-white text-center rounded-[32px]">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPopup;
