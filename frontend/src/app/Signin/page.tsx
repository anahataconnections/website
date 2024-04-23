import React from "react";
import Image from "next/image";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Signin() {
    return (
        <main className="bg-white">
      <div className="bg-home-page-back ">
        <div className="bg-home-grad pb-20 w-full flex justify-between ">        
        <Image
            src="/assets/sign.png"
            width={400}
            height={200}
            className="rounded-br-lg h-30"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <div className="mr-40  flex flex-col items-center justify-center">
          <Image
            src="/assets/logo1.png"
            width={80}
            height={80}
            className=""
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <div className="font-Satisfy mt-2  text-5xl text-white">Anahata Connections</div>
          <div className="font-Satisfy mt-10   text-4xl text-white">Signup</div>
          <form className="flex flex-col justify-center items-center mt-5">
          <input
          className="text-white bg-[#094C3B] border-solid border-2 border-white  rounded-[5px] h-10 my-2 w-[400px]"
            type="text"
            id="name"
            name="name"
            placeholder="John"
          />
           <input
           className=" w-[400px] text-white bg-[#094C3B] border-solid border-2 border-white  rounded-[5px] h-10 my-2"
            type="tel"
            id="phone"
            name="phone"
            placeholder="91+"
          />
          <label className="text-3xl text-white" htmlFor="email">OR</label>
          <input
          className="text-white w-[400px] bg-[#094C3B] border-solid border-2 border-white  rounded-[5px] h-10 my-2"
            type="email"
            id="email"
            name="email"
            placeholder="xyz@gmail.com"
          />
          <input
          className="text-white w-[400px] bg-[#094C3B] border-solid border-2 border-white  rounded-[5px] h-10 my-2"
            type="password"
            id="password"
            name="password"
            placeholder="******"
          />
           <button className="bg-white text-[#094C3B] font-nota w-[200px] text-xl  border-solid border-2 border-[#094C3B] rounded-[30px] px-10 py-2 cursor-pointer hover:bg-[#094C3B] hover:text-white mt-5" type="submit">Sign Up</button>
          </form>
          </div>
        </div>
        </div>
        <div className='bg-flower_back bg-no-repeat bg-cover mt-20'>
        <Footer />
        </div>
      </main>
    );
  }
  