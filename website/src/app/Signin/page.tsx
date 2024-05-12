import React from "react";
import Image from "next/image";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Signin() {
    return (
      <main className="bg-white">
        <div className="bg-home-page-back ">
          <div className="bg-home-grad pb-20 h-[100vh] flex justify-between ">
            <Image
              src="/assets/hugging.jpg"
              width={400}
              height={200}
              className="h-[100vh] w-[40%]"
              alt="Screenshots of the dashboard project showing desktop and mobile versions"
            />

            <div className="mx-40 pt-12  flex flex-col items-center justify-center w-[60%]">
              <Image
                src="/assets/logo1.png"
                width={100}
                height={100}
                className=""
                alt="Screenshots of the dashboard project showing desktop and mobile versions"
              />
              <div className="font-Satisfy mt-2  text-5xl text-white">
                Anahata Connections
              </div>
              <div className="font-Satisfy mt-10   text-4xl text-white">
                Signup
              </div>
              <form className="flex flex-col justify-center items-center mt-5">
                <input
                  className="text-white bg-transparent border-solid border-2 border-white  rounded-[15px] h-14 my-2 px-4 w-[400px]"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John"
                />
                <input
                  className=" text-white bg-transparent border-solid border-2 border-white  rounded-[15px] h-14 my-2 px-4 w-[400px]"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="91+"
                />
                <label className="text-2xl text-white" htmlFor="email">
                  OR
                </label>
                <input
                  className="text-white bg-transparent border-solid border-2 border-white  rounded-[15px] h-14 my-2 px-4 w-[400px]"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="xyz@gmail.com"
                />
                <input
                  className="text-white bg-transparent border-solid border-2 border-white  rounded-[15px] h-14 my-2 px-4 w-[400px]"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="******"
                />
                <button
                  className="bg-transparent text-[#094C3B] font-nota w-[200px] text-xl  border-solid border-2 border-gray-400 rounded-[30px] px-10 py-2 cursor-pointer hover:bg-[#04382b] hover:text-white mt-5"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-flower_back bg-no-repeat bg-cover mt-20">
          <Footer />
        </div>
      </main>
    );
  }
  