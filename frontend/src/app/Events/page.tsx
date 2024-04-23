import React from "react";
import Image from "next/image";
// import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from './Slider'
import Eventcard from  './/eventcard'
// const blog1="/assets/event1.png";
async function fetchEvents() {
  try {
    const res = await fetch(`http://localhost:1337/api/events/?populate=*`);
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}
// export default function Events() {
  const Events = async () =>  {
  const baseurl = "http://localhost:1337 ";
  const Event = await fetchEvents();
  
  // console.log(Event.data); 
  return (
    <>
     <Navbar/>
    <div className="bg-home-page-back">
        <Slider/>
        <div className="font-Pattaya my-4 flex justify-center items-center  text-5xl text-[#094C3B]">Upcoming  Event</div>
        <div className=" flex flex-row ">
        <div className="py-16 px-6 justify-center items-center  grid-cols-2 grid w-[1000px]">
       
    <Eventcard events={Event}  />
    {/* // <Eventcard
    //       imageUrl={blog1}
    //       heading="Yoga and  Relationships"
    //       details="April 24, 2024 "
    //       data="Yoga extends beyond individual practice; it’s about connection. Explore how yogic principles, such as non-violence (ahimsa)."
    //     />
    // <Eventcard
    //       imageUrl={blog1}
    //       heading="Yoga and  Relationships"
    //       details="April 24, 2024 "
    //       data="Yoga extends beyond individual practice; it’s about connection. Explore how yogic principles, such as non-violence (ahimsa)."
    //     />
    // <Eventcard
    //       imageUrl={blog1}
    //       heading="Yoga and  Relationships"
    //       details="April 24, 2024 "
    //       data="Yoga extends beyond individual practice; it’s about connection. Explore how yogic principles, such as non-violence (ahimsa)."
    //     />     */}
    </div>
    <div className="w-[40%] mx-5">
      <h1 className="border-b-2 text-3xl font-nota font-bold border-black">Filter</h1> 
     
      <form className="my-8 absolute">
      <h1 className="text-2xl font-nota font-bold">Select Date Range</h1>
        <label className="text-[14px] bg-white absolute left-2 top-[-10]">Date</label>
      <input type="date" className=" w-[300px] mt-2 h-10 border-2  border-black" placeholder="18-1-2004" id="date" name="bday"/>
      <p className="text-[10px]">MM/DD/YYYY</p>
<div className="flex flex-col">
<h1 className="text-2xl font-nota font-bold">Event Agenda</h1>
     <div>
    <input type="radio" id="relationship" className="w-[20px] " name="agenda" value="HTML"/>
    <label>Relationship</label>
    </div>
    <div>
    <input type="radio" id="life partner" className="w-[20px] "  name="agenda" value="HTML"/>
    <label>Life Partner</label>
    </div>
    <div>
    <input type="radio" id="marriage" className="w-[20px] "  name="agenda" value="HTML"/>
    <label>Marriage</label>
    </div>
    <div className="flex flex-col">
<h1 className="text-2xl font-nota font-bold">Sort :</h1>
<button className="border-2 border-[#094C3B] hover:bg-[#094C3B] hover:text-white font-bold py-2 px-4 rounded-[32px] my-2">Duration</button>
<button className="border-2 border-[#094C3B] hover:bg-[#094C3B] hover:text-white font-bold py-2 px-4 rounded-[32px] my-2">Feature Event</button>
<button className="border-2 border-[#094C3B] hover:bg-[#094C3B] hover:text-white font-bold py-2 px-4 rounded-[32px] my-2">Relavance</button>

</div>
    
    </div>
      </form> 
    </div>
    </div>
    <div className='bg-flower_back bg-no-repeat bg-cover pt-40'><Footer/></div>

    </div>
    
    </>
  )};
  export default Events;