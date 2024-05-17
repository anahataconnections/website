"use client"

import React from 'react'
import Image from "next/image";
import '../Style/whyAnahat.css'
import CareersPage from '../components/JobCard'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const career = () => {
  return (
    <section className=''>

        <Navbar/>
       
          <div className="w-full h-[70vh] relative">
              <div className="relative h-full">
                  <Image
                      src="assets/careers.svg"
                      alt="Additional Image"
                      layout="fill"
                      objectFit="cover"
                      className="z-10 bg-cover object-fit"
                  />
                  <div className="absolute inset-0 flex flex-col  justify-center  z-50 w-[300px] mx-20 shadow-left">
                      <h2 className="font-Satisfy text-white text-[3rem] mb-4 font-bold ">
                          Careers
                      </h2>
                      <h2 className='font-sarabun text-[26px] font-bold'>We are looking for</h2>

                      <p className="text-white text-[24px] mb-6   font-sarabun pt-4 text-justify">
                          individuals who share our passion yo be the best and achieve their full potential
                      </p>
                      
                  </div>
                  
                  <div className="absolute inset-0 bg-black opacity-50 z-30"></div>{" "}

              </div>
          </div>
          
          <div className="flex justify-center items-center mt-20">
              <div>
                  <input
                      type='text'
                      placeholder='Job title or category'
                      className='w-[83vw] h-[70px] rounded-[10px] border-[2px]  border-gray-700 placeholder-styled'
                      
                  />
              </div>
          </div>
          
          <div>
              <CareersPage/>
          </div>
          
          <h1 className='text-[24px] mt-16 pb-8 text-center font-bold text-black '>
              For open positions email us career@anahataconnections.com
          </h1>


          <Footer/>

       

    </section>
  )
}

export default career