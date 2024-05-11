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
        className="w-[100%]"
        alt="Screenshots of the dashboard project showing desktop and mobile versions"
      />
      <div className="bg-home-page-back bg-cover bg-no-repeat ">
        <div className=" text-center font-Pattaya mt-2 flex justify-center items-center text-5xl md:text-7xl text-[#094C3B]">
          {blog.attributes.tiltle}
        </div>
        <div className="font-Pattaya mt-2 flex justify-center items-center text-xl text-black">
          {blog.attributes.published}
        </div>
        <div className="flex justify-center items-center pt-2 mx-6 md:mx-0">
          <Image
            src={blog.attributes.image.data.attributes.url}
            width={500}
            height={400}
            className=""
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
        </div>
        <div>
          {blog.attributes.content.map((i: any, index: number) => (
            <p
              key={index}
              className="text-justify py-4 text-[#6E6E6E] md:mx-20 mx-6 text-[18px]"
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
