import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowWeWork from '../components/HowWeWork'
import Community from '../components/Community'
import Testimonials from '../components/Testimonials'
import Blogs from '../components/Blogs'
import FAQ from '../FAQ/page'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className='bg-white' >
      <Navbar />
      <Hero />
       <HowWeWork />
    <Community />
        <Testimonials />
        <header className="font-Pattaya flex mt-28 items-center justify-center text-[#094C3B] text-[52px]">
        Our Blogs{" "}
      </header>
      <Blogs />
<div id='faq' className='bg-flower_back bg-no-repeat bg-cover'>
      <FAQ />
      
      </div>
      <Footer />
    </main>
  );
}
