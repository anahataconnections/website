/* eslint-disable */

"use client";
import React, { useState, useEffect } from "react";
import Blogcard from "./Blogcard";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

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
    <div className="w-[100%] flex flex-col  items-center gap-[20px] z-[11]">
      <div className="w-[100%] font-sarabun flex justify-center items-center gap-x-10 max-mobile:flex-col max-mobile:gap-[50px]">
        {blogs?.map((blog, index) => (
          <Link key={index} target="_blank" href={`../Blog-main/${blog.attributes.tiltle}`}>
            <Blogcard
              imageUrl={blog.attributes.image.data.attributes.url}
              heading={blog.attributes.tiltle}
              published={blog.attributes.published}
              data={blog.attributes.content[0].children[0].text.substring(
                0,
                100
              )}
            />
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center  text-[#979797]"> 
        <Link
          className="text-lg underline font-nota font-bold"
          href="/Blog"
        >
          Read More
        </Link>
        <IoIosArrowForward size={20} className="mt-1" />
      </div>
    </div>
  );
};

export default Blogs;
