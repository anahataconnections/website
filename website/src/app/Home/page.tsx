// Home/page.tsx
"use client";

import React, { Suspense, useEffect, useState } from "react";
import Hero from "../components/Hero";
import Community from "../components/Community";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";
import "../Style/Home.css";
import "../Style/flowerBack.css";
import HowWeWork from "../components/HowWeWork";

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
      console.log(data);
      setHomeData(data);
    };
    fetchData();
  }, []);

  return (
    <main className="w-screen flex flex-col items-center  bg-white smooth-scroll overflow-x-hidden">
      <div className="p-4">
        <Hero />
      </div>
      <div className="w-[80vw] mobile:w-[60vw] flex flex-col items-center mt-[80px]">
        <HowWeWork />
        <Community />

        <Testimonials />

        <div className="w-[100%] flex flex-col gap-[20px] mobile:gap-[50px] ">
          <header className="text-[25px] mobile:text-[40px] font-Pattaya flex mt-[50px] items-center justify-center text-[#094C3B]">
            Blogs
          </header>
          {/* blog container */}
          <Blogs />
        </div>
        <div id="faq" className=" bg-no-repeat bg-custom1 bg-custom-position">
          <Suspense fallback={<div>Loading FAQ...</div>}>
            {homeData && <FAQ />}
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Home;
