import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowWeWork from "../components/HowWeWork";
import Community from "../components/Community";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import "../Style/Home.css";

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

const Home = async () => {
  const homeData = await fetchEvents();
  // const controls = useAnimationControls();
  console.log(homeData);
  return (
    <main className="bg-white smooth-scroll">
      <Navbar />
      <Hero />
      <HowWeWork />
      <Community />
      <Testimonials />
      <header className="font-Pattaya flex mt-28 items-center justify-center text-[#094C3B] text-[52px]">
        Our Blogs{" "}
      </header>
      <Blogs />
      <div id="faq" className="bg-flower_back bg-no-repeat bg-cover">
        <Suspense fallback={<div>Loading FAQ...</div>}>
          <FAQ />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
