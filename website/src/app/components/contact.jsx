/* eslint-disable */

import React from "react";
// import text from "../assets/text.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-[300px] pl-4">
      <div className="bg-home-page-back bg-cover bg-no-repeat p-8">
        <div className="font-Pattaya  -translate-y-20 -translate-x-8 text-3xl text-[#094C3B]">Connect with us via mail</div>
        <form className="flex flex-col">
          <label className="-translate-y-12 font-sarabun" htmlFor="userReview">Send your mail we will reach out to you shortly</label>
          <input type="email" id="email" name="email" className="mt-3 border-solid border-2 border-gray-500 h-10 rounded-[5px] text-[#094C3B] -translate-y-12 pl-2" placeholder="xyz@gmail.com" />
          <button className=" border-solid border-2 w-36 border-white bg-[#094C3B] text-white rounded-[32px] px-8 py-2 cursor-pointer hover:bg-[#286f5d]" type="submit">Send</button>
          {/* <div className="border-solid border-2 border-white bg-[#094C3B] text-white rounded-[32px] px-10 py-2 cursor-pointer hover:bg-[#286f5d]"><Link href="/Signin">Sign In</Link></div> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
