/* eslint-disable */

"use client"
import React, { useState, useEffect } from "react";
import Blogcard from "./Blogcard";
import Image from "next/image";
import Link from "next/link";

async function fetchBlog() {
  try {
    const res = await fetch(`https://cms.anahataaconnections.com/api/blogs/?populate=*`);
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}



const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBlog();
      setBlogs(data?.data.slice(0, 3)); 
    };
    fetchData();
  }, []);

  return (
    <div className="container items-center px-16 md:px-8 custom1:px-20  lg:px-20 customMax:px-48 customMax:translate-x-10 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 custom1:gap-3 font-sarabun customMax:gap-0 customMax:">
        {blogs?.map((blog, index) => (
          <Link key={index} href={`../Blog_main/${blog.attributes.tiltle}`}>
        
              <Blogcard
                imageUrl={blog.attributes.image.data.attributes.url}
                heading={blog.attributes.tiltle}
                published={blog.attributes.published}
                data={blog.attributes.content[0].children[0].text.substring(0, 100)}
              />
         
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center gap-x-2 text-2xl font-semibold text-[#979797] text-center pt-10">
        <span className="hover:underline underline-offset-4 cursor-pointer">
          <Link className="underline font-nota font-bold" href="/Blog">Read More</Link>
        </span>
        <Image
          src="/assets/arrow.png"
          width={38}
          height={60}
          className="pt-1"
          alt="Arrow Icon"
        />
      </div>
    </div>
  );
};

export default Blogs;
