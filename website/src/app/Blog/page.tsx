/* eslint-disable */
"use client";

import React from "react";
import Image from "next/image";
// import { useState } from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

async function fetchBlog() {
  
  try {

    const res = await fetch(
      `https://cms.anahataaconnections.com/api/blogs/?populate=*`
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}
// export default function Blog() {
const Blog = async () => {
  const baseurl = "https://cms.anahataaconnections.com";
  const Blog = await fetchBlog();
  // console.log(Blog.data);
  return (
    <main className="bg-white text-black w-[100%] overflow-x-hidden">
      <Navbar />
      <Image
        src="/assets/blog_bg.png"
        width={500}
        height={300}
        className="w-full h-[52vh] object-cover object-center"
        alt="Screenshots of the dashboard project showing desktop and mobile versions"
      />
      <div className=" bg-home-page-back bg-contain bg-no-repeat">
        <div className="bg-white-gradient">
          <div className="font-Pattaya mt-6 flex justify-center items-center text-7xl text-[#094C3B]">
            Blogs
          </div>
          <div className="flex flex-row mx-5">
            <div className=" w-[60vw]">
              <div className=" my-5 p-8">
                <Image
                  src={Blog.data[3].attributes.image.data.attributes.url}
                  width={700}
                  height={400}
                  className=" w-[750px] -translate-x-3"
                  alt="Screenshots of the dashboard project showing desktop and mobile versions"
                />
                <div className="my-3">{Blog.data[3].attributes.published}</div>
                <div className=" my-3 font-sarabun  text-[35px] text-black">
                  {Blog.data[3].attributes.tiltle}
                </div>
                <div className="my-3 font-sarabun text-[16px]text-justify">
                  {Blog.data[3].attributes.content[0].children[0].text.substring(
                    0,
                    150
                  ) + "...."}
                </div>
                <div>
                  <Link
                    className="my-3 underline font-nota font-bold"
                    href={`/Blog_main/${Blog.data[3].attributes.tiltle}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className=" my-5 p-8">
                <Image
                  src={Blog.data[2].attributes.image.data.attributes.url}
                  width={700}
                  height={400}
                  className=" w-[750px]"
                  alt="Screenshots of the dashboard project showing desktop and mobile versions"
                />
                <div className="my-3">{Blog.data[2].attributes.published}</div>
                <div className=" my-3 font-sarabun  text-[35px] text-black text-justify">
                  {Blog.data[2].attributes.tiltle}
                </div>
                <div className="my-3 font-sarabun text-[16px]">
                  {Blog.data[2].attributes.content[0].children[0].text.substring(
                    0,
                    150
                  ) + "...."}
                </div>
                <div>
                  <Link
                    className="my-3 underline font-nota font-bold"
                    href={`/Blog_main/${Blog.data[2].attributes.tiltle}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="pt-[24px] w-[40vw]  space-y-16 ">
              {Blog.data.map((item: any) => {
                return (
                  <div key={item.id} className="mx-16">
                    <div className="flex flex-row mt-6 ">
                      <Image
                        src={item.attributes.image.data.attributes.url}
                        width={150}
                        height={150}
                        className="object-fit object-center"
                        alt="Screenshots of the dashboard project showing desktop and mobile versions"
                      />
                      <div className="w-[200px] ml-4">
                        <h1 className="text-2xl font-sarabun font-bold text-black ">
                          <Link href={`/Blog_main/${item.attributes.tiltle}`}>
                            {item.attributes.tiltle}
                          </Link>
                        </h1>
                        <div>{item.attributes.published}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};
export default Blog;
