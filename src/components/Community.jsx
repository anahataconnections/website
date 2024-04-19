import React from "react";
import text from "../assets/text.png";
const Community = () => {
  return (
    <div className="h-[670px]">
      <header className="pattaya-regular flex items-center justify-center text-[#094C3B] text-[52px]">
        Our Community
      </header>

      <div className="flex items-center justify-center pt-20 pb-10 gap-x-32">
        <div className="bg-[#FFFAF0] w-[460px] h-[300px] text-[22px] text-center flex items-center justify-center rounded-lg p-4 px-5 border border-black">
          At Anahata Connection, we believe that love transcends physical
          boundaries. Our sacred platform brings together yogic souls seeking
          authentic connections rooted in mindfulness, compassion, and shared
          spiritual practices.
        </div>
        <div>
          <img src={text} alt="" className="h-[340px]" />
        </div>
      </div>
    </div>
  );
};

export default Community;
