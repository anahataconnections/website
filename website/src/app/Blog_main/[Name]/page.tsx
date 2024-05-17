/* eslint-disable */
"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Blogs from "../../components/Blogs";
import Footer from "../../components/Footer";

interface BlogPageProps {
  params: {
    Name: string;
  };
}

const fetchBlog = async (id: string) => {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/blogs?filters[tiltle][$eq]=${id}&populate=*`
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch blog");
  }
};

const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const [blog, setBlog] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchBlogData = async () => {
      const blogData = await fetchBlog(params.Name);
      setBlog(blogData?.data[0]);
    };

    fetchBlogData();
  }, [params.Name]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-white">
      <Navbar />
      <Image
        src="/assets/blog_bg.png"
        width={500}
        height={500}
        className="w-[100vw] h-[67vh] customMax:w-[100vw]
        customMax:h-[70vh]
        "
        alt="Screenshots of the dashboard project showing desktop and mobile versions"
      />
      <div className="bg-home-page-back bg-cover bg-no-repeat customMax:mt-28">
        <div className=" text-center font-Pattaya mt-6 flex justify-center items-center  md:text-[60px] text-[#094C3B] customMax:px-20">
          {blog.attributes.tiltle}
        </div>
        <div className="font-Pattaya mt-2 flex justify-center items-center text-xl text-black">
          {blog.attributes.published}
        </div>
        <div className="flex justify-center items-center pt-2 mx-6 md:mx-0">
          <Image
            src={blog.attributes.image.data.attributes.url}
            width={200}
            height={100}
            className=" customMax:max-h-[600px] w-[75vw] text-left"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
        </div>
        <div className="md:w-[75vw] w-[75vw] customMax:w-[75vw]">
          {blog.attributes.content.map((i: any, index: number) => (
            <p
              key={index}
              className="py-4 text-[#6E6E6E]  text-[18px] text-left customMax:pl-[15rem]  customMax:mt-6"
            >
              {i.children[0].text}
            </p>
          ))}
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
  );
};

export default BlogPage;

 export const runtime = "edge";
