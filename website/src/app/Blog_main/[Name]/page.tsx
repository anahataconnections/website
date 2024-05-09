import Image from "next/image";
import Link from "next/link";
import React from "react";
// import qs from "qs";
// import { Strapi } from "strapi";
// import { pages } from "next/dist/build/templates/app-page";
import Navbar from "../../components/Navbar" 
import  Blogs from '../../components/Blogs'

import Footer from '../../components/Footer'

export const runtime = 'edge';

async function fetchBlog(Name: string) {

// const populate = ['profile_picture' , 'page', 'seo' , 'courses' , 'courses.image.url'];
// const queryObject = qs.stringify({
//  populate,
// });
console.log(`${Name}`);


  try {
    const res = await fetch(
    //   `https://strapi.saralgroups.com/api/teachers?filters[Name][$eq]=${Name}&${queryObject}`
      // `https://cms.anahataaconnections.com/api/blogs?filters[Name][$eq]=Yoga and Anahata`,
      `https://cms.anahataaconnections.com/api/blogs?filters[tiltle][$eq]=${Name}&populate=*`,

      
    );
   
  
    const response = await res.json();
  //  console.log(response)
    return response;
  } catch (err) {
    console.error(err);
  }
}



const BlogPage = async ({ params }: any) => {
   
  const item = await fetchBlog(params.Name);
  // console.log(item);
  return (
    <>
<<<<<<< HEAD
      <main className="bg-white">
        <Navbar />
        <Image
          src="/assets/blog_bg.png"
          width={500}
          height={500}
          className="w-[100%]"
          alt="Screenshots of the dashboard project showing desktop and mobile versions"
        />
        <div className="bg-home-page-back bg-cover bg-no-repeat ">
          <div className="font-Pattaya mt-2 flex justify-center items-center text-7xl text-[#094C3B]">
            {item.data[0].attributes.tiltle}
          </div>
          <div className="font-Pattaya mt-2 flex justify-center items-center text-xl text-black">
            {item.data[0].attributes.published}
          </div>
          <div className="flex justify-center items-center w-[100%]">
            <Image
              src={item.data[0].attributes.image.data.attributes.url}
              width={500}
              height={400}
              className=""
              alt="Screenshots of the dashboard project showing desktop and mobile versions"
            />
          </div>
          <div>
            {item.data[0].attributes.content.map((i: any) => {
              return (
                <>
                  <p className="mx-20 text-xl">{i.children[0].text}</p>
                </>
              );
            })}
            ;
          </div>
          <div className="bg-flower_back bg-no-repeat bg-cover">
            <div className="font-Pattaya mt-2 flex justify-center items-center text-7xl text-[#094C3B]">
              More From Us
            </div>
            <Blogs />
            <Footer />
          </div>
        </div>
      </main>
=======
    <main className="bg-white" >
      <Navbar />
      <Image
            src="/assets/blog_bg.png"
            width={500}
            height={500}
            className="w-[100%]"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <div className="bg-home-page-back bg-cover bg-no-repeat">
          <div className="font-Pattaya mt-2 flex justify-center items-center text-7xl text-[#094C3B]">{item.data[0].attributes.tiltle}</div>
          <div className="font-Pattaya mt-2 flex justify-center items-center text-xl text-black">{item.data[0].attributes.published}</div>
          <div className="flex justify-center items-center w-[100%]">
          <Image
            src={item.data[0].attributes.image.data.attributes.url}
            width={500}
            height={400}
            className=""
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          </div>
          <div>
            {item.data[0].attributes.content.map((i : any)=>{
                return(
                    <>
                    <p className="mx-20 text-xl">{i.children[0].text}</p>
                    </>
                )
            })};
          </div>
          <div className="bg-flower_back bg-no-repeat bg-cover">
          <div className="font-Pattaya mt-2 flex justify-center items-center text-7xl text-[#094C3B]">More From Us</div>
          <Blogs/>
          <Footer/>

          </div>

          </div>
    </main>
   
>>>>>>> 38562e36719f903f4e515a9ee8a49654df32cd27
    </>
  );
};

export default BlogPage;

