import React from "react";
import Image from "next/image";
// import one from "../assets/create.png";
// import two from "../assets/discover.png";
// import three from "../assets/connection.png";
const HowWeWork = () => {
  return (
    <div className="w-[85%] h-[250px] items-center content-center justify-center mx-14 lg:mx-20 bg-[#DDF7F0]">
      <header className="font-Pattaya  flex items-center content-center text-center justify-center text-[#0C6242] text-[52px]">
        How We Work
      </header>

      <div className="grid grid-cols-3 pt-10 font-medium">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <div>
            {/* <img src={one} alt="" /> */}
            <Image
            src="/assets/create.png"
            width={50}
            height={50}
            className="hidden md:block mr-8 "
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          </div>
          <div>Create Account</div>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-5 border-x-2 border-black">
          <div>
            {/* <img src={two} alt="" /> */}
            <Image
            src="/assets/discover.png"
            width={50}
            height={50}
            className="hidden md:block mr-8 "
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          </div>
          <div>Discover Compatible Profiles</div>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-2">
          <div>
            {/* <img src={three} alt="" /> */}
            <Image
            src="/assets/connection.png"
            width={50}
            height={50}
            className="hidden md:block mr-8 "
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          </div>
          <div>Build Meaningful Connections</div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
