/* eslint-disable */
"use client";
import React from "react";
import Image from "next/image";
import Blogs from "../../components/Blogs";
import { fetchBlogByName } from "@/helpers/blog";
interface BlogPageProps {
  params: {
    Name: string;
  };
}

const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const [blog, setBlog] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchBlogData = async () => {
      const blogName = params.Name.split("-").join(" ");
      const blogData = await fetchBlogByName(blogName);
      setBlog(blogData?.data[0]);
    };

    fetchBlogData();
  }, [params.Name]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-white overflow-x-hidden">
      <div
        style={{
          backgroundImage: "url('/assets/blog_bg.png')",
        }}
        className="w-[100vw] h-[50vh] mobile:h-[65vh]
         bg-cover bg-no-repeat bg-center
        "
      ></div>
      <div className="w-screen flex justify-center bg-home-page-back pt-[30px] pb-[60px] mobile:pt-[50px] mobile:pb-[100px]">
        <div className="w-[90vw] flex flex-col items-center  bg-cover bg-no-repeat customMax:mt-28">
          <div className="flex flex-col gap-[30px] mobile:gap-[60px]">
            <div className="flex flex-col gap-[10px] mobile:gap-[30px]">
              <h1 className=" text-center font-Pattaya text-[#094C3B] text-[30px] small-tab:text-[60px] tab:text-[70px]">
                {blog.attributes.tiltle}
              </h1>
              <h3 className="font-Pattaya flex justify-center items-center text-xl text-black">
                {blog.attributes.published}
              </h3>
            </div>
            <div className="flex flex-col items-center gap-[50px]">
              <Image
                src={blog.attributes.image.data.attributes.url}
                width={500}
                height={500}
                className="w-[90vw] mobile:w-[50vw] h-auto "
                alt="youga image"
              />
              <div className="w-[90vw] mobile:w-[70vw]">
                {blog.attributes.content.map((i: any, index: number) => (
                  <p
                    key={index}
                    className=" text-[#6E6E6E] text-[16px]  mobile:text-[18px] text-center"
                  >
                    {i.children[0].text}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* more bolgs */}
          <div className="bg-flower_back bg-no-repeat bg-cover mt-[30px] mobile:mt-[50px]">
            <div className="font-Pattaya  flex justify-center items-center text-[30px] mobile:text-[60px] tab:text-[70px] text-[#094C3B]">
              More From Us
            </div>
            <Blogs />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;

export const runtime = "edge";
//  <div className="flex flex-col items-center w-[100%]">
//
//    <div className="font-Pattaya flex justify-center items-center text-xl text-black">
//      {blog.attributes.published}
//    </div>
//    <div className="flex justify-center items-center ">
//
//    </div>
//
//  </div>;
