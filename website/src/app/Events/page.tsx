"use client"
import React from "react";
import Image from "next/image";
// import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from './Slider'
import Eventcard from  './/eventcard'
import { useAnimationControls } from 'framer-motion';

const wrapperVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.1,
    },
  },
  exit: {
    x: '-100vh',
    transition: {
      ease: 'easeInOut',
    },
  },
};

async function fetchEvents() {
  try {
    const res = await fetch(`https://cms.anahataaconnections.com/api/events/?populate=*`);
    const response = await res.json();

    return response.data;
  } catch (err) {
    console.error(err);
  }
}
// export default function Events() {
  const Events = async () =>  {
  const Event = await fetchEvents();
  // const controls = useAnimationControls();
  // console.log(Event.data); 
  return (
    <main className="bg-white">
     <Navbar/>
    <div className="bg-home-page-back bg-cover bg-no-repeat">
        <Slider/>
        <div className="font-Pattaya my-4 flex justify-center items-center  text-5xl text-[#094C3B] pb-10">Upcoming  Event</div></div>
        <div className=" flex flex-row mt-10 ">
        <div className="py-16 px-6 justify-center items-center flex flex-row  w-[1000px]">
       
    <Eventcard events={Event}  />
    {/* absolute top-[1326px] right-[-400px] transform -transform-x-full transition duration-200 ease-in-out */}
    </div>
    <div className=" w-[40%] mx-5  bg-white">
      <h1 className="border-b-2 text-3xl font-nota font-bold border-[#808080]">Filter</h1> 
     
      <form className="my-8 absolute">
      <h1 className="text-2xl my-4 font-nota font-bold">Select Date Range</h1>
        <label className="text-[14px] bg-[#FEF7FF] text-[#6750A4] absolute left-2 top-[-10]">Date</label>
      <input type="date" className=" w-[300px] lg:max-xl:w-[250px]  mt-2 h-10 border-2 px-4  border-[#6750A4]" placeholder="&nbsp;&nbsp;18-1-2004" id="date" name="bday"/>
      <p className="my-2 text-[10px]">MM/DD/YYYY</p>
<div className="flex flex-col">
<h1 className="text-2xl my-2 font-nota font-bold">Event Agenda</h1>
     <div>
    <input type="radio" id="relationship" className="w-[20px] my-1" name="agenda" value="HTML"/>
    <label>Relationship</label>
    </div>
    <div>
    <input type="radio" id="life partner" className="w-[20px] my-1"  name="agenda" value="HTML"/>
    <label>Life Partner</label>
    </div>
    <div>
    <input type="radio" id="marriage" className="w-[20px] my-1"  name="agenda" value="HTML"/>
    <label>Marriage</label>
    </div>
    <div className="flex flex-col">
<h1 className="text-2xl my-2 font-nota font-bold">Sort By:</h1>
<button className="border-2 border-[#094C3B] hover:bg-[#094C3B]  hover:text-white font-bold py-2 px-4 lg:max-xl:px-0 lg:max-xl:w-24  rounded-[32px] my-2">Duration</button>
<button className="border-2 border-[#094C3B] hover:bg-[#094C3B] hover:text-white font-bold py-2 px-4 lg:max-xl:px-0 lg:max-xl:w-32   rounded-[32px] my-2">Feature Event</button>
<button className="border-2 border-[#094C3B] hover:bg-[#094C3B] hover:text-white font-bold py-2 px-4 lg:max-xl:px-0 lg:max-xl:w-32  rounded-[32px] my-2">Relavance</button>

</div>
    
    </div>
      </form> 
    </div>
    </div>
    <div className=' pt-40'><Footer/></div>

  
    
    </main>
  )};
  export default Events;