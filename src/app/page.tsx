import Image from "next/image";
import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import HowWeWork from './components/HowWeWork'
import Community from './components/Community'
import Testimonials from './components/Testimonials'
import Blogs from './components/Blogs'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero />
      {/* <WhyUs /> */}
       <HowWeWork />
    <Community />
        <Testimonials />
      <Blogs />
<div className='bg-flower_back bg-no-repeat bg-contain'>
      <FAQ />
      <Footer />
      </div>
    </main>
  );
}
