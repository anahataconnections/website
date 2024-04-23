import React from "react";
// import text from "../assets/text.png";
import Image from "next/image";




const Help_center = () => {
  return ( 
    <>
    <div className="bg-home-page-back bg-cover bg-no-repeat">
    <div className="font-Pattaya my-4  text-3xl text-[#094C3B]">How we can help you ?</div>
    <form className="flex flex-col ">
  {/* <label for="userReview">Review:</label> */}
  <input type="text" id="name" name="name" className=" mt-2 border-solid border-2 border-[#094C3B] h-7 rounded-[5px] text-[#094C3B]" placeholder="NAME"/>
  <input type="email" id="email" name="email" className="mt-2 border-solid border-2 border-[#094C3B] h-7 rounded-[5px] text-[#094C3B]" placeholder="xyz@gmail.com"/>
  <input type="text" id="gender" name="gender" className="mt-2 border-solid border-2 border-[#094C3B] h-7 rounded-[5px] text-[#094C3B]" placeholder="Gender"/>

  <textarea id="userReview" className="mt-2 bg-home-page-back border-solid border-2 border-[#094C3B] rounded-[5px] text-[#094C3B]" name="userReview" rows="4" cols="20">
    Write to us...
  </textarea>
  <button className="mt-2 border-solid border-2 w-40 border-white bg-[#094C3B] text-white rounded-[32px] px-10 py-2 cursor-pointer hover:bg-[#286f5d]" type="submit">Submit</button>
  {/* <div className="border-solid border-2 border-white bg-[#094C3B] text-white rounded-[32px] px-10 py-2 cursor-pointer hover:bg-[#286f5d]"><Link href="/Signin">Sign In</Link></div> */}

</form>

    </div>
    </>
  );
};

export default Help_center;