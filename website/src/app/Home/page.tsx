// Home/page.tsx
"use client"

import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowWeWork from "../components/HowWeWork";
import Community from "../components/Community";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import "../Style/Home.css";
import "../Style/flowerBack.css"

// Lazy load FAQ component
const FAQ = React.lazy(() => import("../FAQ/page"));

async function fetchEvents() {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/home?populate=*`
    );
    const response = await res.json();

    return response.data;
  } catch (err) {
    console.error(err);
  }
}


const Home = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEvents();
      setHomeData(data);
    };
    fetchData();
  }, []);

  console.log(homeData);

  return (
    <main className="bg-white smooth-scroll overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowWeWork />
     
      <Community />
      
       <Testimonials />
     
      <header className="font-Pattaya flex mt-28 items-center justify-center text-[#094C3B] text-[2.2rem] ">
        Our Blogs{" "}
      </header>
      <Blogs />
      <div
        id="faq"
        className="bg-flower_back bg-no-repeat bg-custom1 bg-custom-position"
      >
        <Suspense fallback={<div>Loading FAQ...</div>}>
          {homeData && <FAQ />}
        </Suspense>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
