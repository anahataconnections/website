/* eslint-disable */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchBlog } from "@/helpers/blog";

// export default function Blog() {
const Blog = async () => {
  const Blog = await fetchBlog();
  // console.log(Blog.data);
  return (
    <main className="bg-white text-black w-screen overflow-x-hidden pb-[200px]">
      <Image
        src="/assets/blog_bg.png"
        width={500}
        height={300}
        className="w-[100vw] h-[35vh] mobile:h-[52vh] custom3:h-[70vh] customMax:h-[75vh] object-cover object-center "
        alt="Screenshots of the dashboard project showing desktop and mobile versions"
      />
      <div className="w-screen flex justify-center items-center bg-home-page-back bg-contain bg-no-repeat">
        <div className="w-screen flex justify-center  bg-white bg-opacity-[0.5]">
          <div className="w-[80vw] small-tab:w-[60vw] flex flex-col items-center">
            <div className="font-Pattaya mt-[30px] mobile:[100px]  flex justify-center items-center text-[50px] mobile:text-7xl text-[#094C3B] custom3:mt-[4.7rem] customMax:mt-[6rem]">
              Blogs
            </div>
            <div className="w-[100%]  flex  justify-center  mt-[30px] mb-[50px] mobile:mt-[100px] mobile:mb-[100px] ">
              <div className="w-[100%] flex max-mobile:flex-col max-mobile:items-center mobile:justify-center gap-[30px]">
                <div className="flex flex-col gap-[30px]">
                  <div className=" ">
                    <Image
                      src={Blog.data[3].attributes.image.data.attributes.url}
                      width={700}
                      height={400}
                      className="w-[100%] "
                      alt="yoga images"
                    />
                    <div className="my-3">
                      {Blog.data[3].attributes.published}
                    </div>
                    <div className=" my-3 font-sarabun  text-[25px] mobile:text-[35px] text-black">
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
                        href={`/Blog-main/${Blog.data[3].attributes.tiltle
                          .split(" ")
                          .join("-")}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                  <div className=" ">
                    <Image
                      src={Blog.data[2].attributes.image.data.attributes.url}
                      width={700}
                      height={400}
                      className=" w-[100%]"
                      alt="yoga images"
                    />
                    <div className="my-3">
                      {Blog.data[2].attributes.published}
                    </div>
                    <div className=" my-3 font-sarabun text-[25px] mobile:text-[35px]  text-black text-justify">
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
                        href={`/Blog-main/${Blog.data[2].attributes.tiltle
                          .split(" ")
                          .join("-")}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  {Blog.data.map((item: any) => {
                    return (
                      <div
                        key={item.id}
                        className=" customMax:px-40 custom3:px-20"
                      >
                        <div className="flex flex-row mt-6 ">
                          <Image
                            src={item.attributes.image.data.attributes.url}
                            width={150}
                            height={150}
                            className="object-fit object-center"
                            alt="you image"
                          />
                          <div className="w-[200px] ml-4">
                            <h1 className="text-[20px] text-2xl font-sarabun font-bold text-black ">
                              <Link
                                href={`/Blog-main/${item.attributes.tiltle
                                  .split(" ")
                                  .join("-")}`}
                              >
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
          </div>
        </div>
      </div>
    </main>
  );
};
export default Blog;
