import React from "react";
import one from "../assets/create.png";
import two from "../assets/discover.png";
import three from "../assets/connection.png";
const HowWeWork = () => {
  return (
    <div className="h-[450px]">
      <header className="pattaya-regular flex items-center justify-center text-[#0C6242] text-[52px]">
        How We Work
      </header>

      <div className="grid grid-cols-3 pt-20 font-medium">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <div>
            <img src={one} alt="" />
          </div>
          <div>Create Account</div>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-5 border-x-2 border-black">
          <div>
            <img src={two} alt="" />
          </div>
          <div>Discover Compatible Profiles</div>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-2">
          <div>
            <img src={three} alt="" />
          </div>
          <div>Build Meaningful Connections</div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
