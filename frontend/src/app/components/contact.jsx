import React from "react";
// import text from "../assets/text.png";
import Image from "next/image";




const Contact = () => {
  return ( 
    <>
    <div className="bg-home-page-back bg-cover bg-no-repeat">
    <div className="font-Pattaya my-4  text-3xl text-[#094C3B]">Connect with us via mail</div>
    <form className="flex flex-col ">
  <label for="userReview">Send your mail we will reach out to you shortly</label>
  <input type="email" id="email" name="email" className="mt-2 border-solid border-2 border-[#094C3B] h-7 rounded-[5px] text-[#094C3B]" placeholder="xyz@gmail.com"/>
  <button className="mt-2 border-solid border-2 w-40 border-white bg-[#094C3B] text-white rounded-[32px] px-10 py-2 cursor-pointer hover:bg-[#286f5d]" type="submit">Send</button>
  {/* <div className="border-solid border-2 border-white bg-[#094C3B] text-white rounded-[32px] px-10 py-2 cursor-pointer hover:bg-[#286f5d]"><Link href="/Signin">Sign In</Link></div> */}

</form>

    </div>
    </>
  );
};

export default Contact;