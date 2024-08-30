import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchBlog, formatDate } from "@/helpers/blog";

const Blog = async () => {
  const Blog = await fetchBlog();
  return (
    <main className="bg-white text-black w-full overflow-x-hidden">
      <Image
        src="/assets/blog_bg.png"
        width={500}
        height={300}
        className="w-full h-[35vh] sm:h-[52vh] lg:h-[70vh] xl:h-[75vh] object-cover object-center"
        alt="Screenshots of the dashboard project showing desktop and mobile versions"
      />
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 flex justify-center items-center bg-contain bg-no-repeat">
        <div className="w-full flex justify-center bg-white bg-opacity-[0.5]">
          <div className="w-full flex flex-col items-center">
            <h1 className="font-Pattaya mt-6 sm:mt-10 lg:mt-20 text-4xl sm:text-5xl lg:text-7xl text-[#094C3B]">
              Blogs
            </h1>
            <div className="w-full flex flex-col lg:flex-row justify-center mt-8 sm:mt-12 lg:mt-20 mb-12 sm:mb-16 lg:mb-24 gap-8 lg:gap-16">
              <div className="flex flex-col gap-8 lg:w-2/3">
                {Blog.data.slice(2, 4).map((item, index) => (
                  <div key={item.id} className="w-full">
                    <Image
                      src={item.attributes.image.data.attributes.url}
                      width={780}
                      height={400}
                      className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover"
                      alt="Blog post image"
                    />
                    <div className="my-3 text-sm">
                      {formatDate(item.attributes.published)}
                    </div>
                    <h2 className="my-3 font-sarabun text-xl sm:text-2xl lg:text-3xl text-black">
                      {item.attributes.tiltle}
                    </h2>
                    <p className="my-3 font-sarabun text-sm sm:text-base text-justify">
                      {item.attributes.content[0].children[0].text.substring(
                        0,
                        150
                      ) + "...."}
                    </p>
                    <Link
                      className="my-3 underline font-nota font-bold"
                      href={`/Blog-main/${item.attributes.tiltle
                        .split(" ")
                        .join("-")}`}
                    >
                      Read More
                    </Link>
                  </div>
                ))}
              </div>
              <div className="lg:w-1/3">
                <h3 className="text-2xl font-semibold mb-4">Recent Posts</h3>
                {Blog.data.map((item) => (
                  <div key={item.id} className="flex flex-row mt-6">
                    <Image
                      src={item.attributes.image.data.attributes.url}
                      width={100}
                      height={100}
                      className="object-cover object-center w-24 h-24"
                      alt="Blog post thumbnail"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-nota font-semibold text-black">
                        <Link
                          href={`/Blog-main/${item.attributes.tiltle
                            .split(" ")
                            .join("-")}`}
                        >
                          {item.attributes.tiltle}
                        </Link>
                      </h4>
                      <div className="text-sm">
                        {formatDate(item.attributes.published)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
