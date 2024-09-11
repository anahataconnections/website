import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchBannerImage, fetchBlog, formatDate } from "@/helpers/blog";

const Blog = async () => {
  const Blog = await fetchBlog();

  const BannerImageResponse = await fetchBannerImage();

  const BannerImage =
    BannerImageResponse.data.attributes.banner_image.data.attributes;

  return (
    <main className="bg-white text-black w-full overflow-x-hidden">
      <Image
        src={BannerImage.url}
        quality={100}
        width={2400}
        height={2400}
        className="w-full h-[35vh] sm:h-[52vh] lg:h-[70vh] xl:h-[75vh] object-cover object-center"
        alt="Screenshots of the dashboard project showing desktop and mobile versions"
      />
      <div className="w-full p-4 px-16 flex justify-center items-center bg-contain bg-no-repeat">
        <div className="w-full flex justify-center bg-white bg-opacity-[0.5]">
          <div className="w-full flex flex-col items-center gap-4">
            <h1 className="font-Pattaya text-4xl p-4 sm:text-5xl lg:text-7xl text-[#094C3B]">
              Blogs
            </h1>
            <div className="w-full flex flex-col lg:flex-row justify-center mb-12 sm:mb-16 lg:mb-24 gap-8 lg:gap-16">
              <div className="flex flex-col gap-8 lg:w-2/3">
                {Blog.data.slice(2, 4).map((item: any) => (
                  <div
                    key={item.id}
                    className="w-full flex flex-col gap-2 border rounded-md shadow-lg overflow-hidden"
                  >
                    <Image
                      src={item.attributes.image.data.attributes.url}
                      width={780}
                      height={400}
                      className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover"
                      alt="Blog post image"
                    />
                    <div className="p-4 flex flex-col gap-3">
                      <h2 className="font-sarabun text-xl sm:text-2xl lg:text-3xl font-bold text-[#094C3B]">
                        {item.attributes.tiltle}
                      </h2>
                      <p className="font-sarabun text-sm sm:text-base text-justify">
                        {item.attributes.content[0].children[0].text.substring(
                          0,
                          150
                        ) + "...."}
                      </p>
                      <div className="text-sm text-gray-400 flex justify-end">
                        {formatDate(item.attributes.published)}
                      </div>
                      <Link
                        className="underline font-nota font-bold text-[#094C3B]"
                        href={`/Blog-main/${item.attributes.tiltle
                          .split(" ")
                          .join("-")}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:w-1/3">
                <h3 className="text-3xl font-bold mb-4 text-[#094C3B]">
                  Recent Posts
                </h3>
                {Blog.data.map((item: any) => (
                  <div key={item.id}>
                    <Link
                      href={`/Blog-main/${item.attributes.tiltle
                        .split(" ")
                        .join("-")}`}
                    >
                      <div className="flex flex-row items-center mt-6 shadow-lg rounded-md overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                        <Image
                          src={item.attributes.image.data.attributes.url}
                          width={100}
                          height={100}
                          className="object-cover object-center w-24 h-24"
                          alt="Blog post thumbnail"
                        />
                        <div className="ml-4">
                          <h4 className="text-lg font-nota font-bold text-[#094C3B]">
                            {item.attributes.tiltle}
                          </h4>
                          <div className="text-sm text-gray-400">
                            {formatDate(item.attributes.published)}
                          </div>
                        </div>
                      </div>
                    </Link>
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
