import React from "react";
import Blogcard from "./Blogcard";
import Image from "next/image";
import Link from "next/link";
// import Blogpage from "../Blog_main/[Name]"

async function fetchBlog() {
  try {
    const res = await fetch(`https://cms.anahataaconnections.com/api/blogs/?populate=*`);
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}
const Blogs = async () =>  {
  const baseurl = "https://cms.anahataaconnections.com";
  const item = await fetchBlog();
  // console.log(item.data[0].attributes.image.data.attributes.url); 
  return (
    <div className="h-auto py-20">
      

      <div className="py-16 flex justify-center items-center gap-x-10">
      <Link  href={`../Blog_main/${item.data[0].attributes.tiltle}`}>
        <Blogcard
          imageUrl={item.data[0].attributes.image.data.attributes.url}
          heading={item.data[0].attributes.tiltle}
          details={item.data[0].attributes.published}
          data={item.data[0].attributes.content[0].children[0].text.substring(0, 100)}/></Link>
           <Link  href={`../Blog_main/${item.data[1].attributes.tiltle}`}>
           <Blogcard
          imageUrl={item.data[1].attributes.image.data.attributes.url}
          heading={item.data[1].attributes.tiltle}
          details={item.data[1].attributes.published}
          data={item.data[1].attributes.content[0].children[0].text.substring(0, 100)}/></Link>
           <Link  href={`../Blog_main/${item.data[2].attributes.tiltle}`}>
           <Blogcard
          imageUrl={item.data[2].attributes.image.data.attributes.url}
          heading={item.data[2].attributes.tiltle}
          details={item.data[2].attributes.published}
          data={item.data[2].attributes.content[0].children[0].text.substring(0, 100)}/></Link>
       
      </div>

      <div className="flex justify-center items-center gap-x-2 text-2xl font-semibold text-[#979797] text-center pb-10">
        <span className="hover:underline underline-offset-4 cursor-pointer">
        <Link className="underline  font-nota font-bold" href="/Blog">Read More</Link>
        </span>
        {/* <img src={arrow} alt="" className="pt-1" /> */}
        <Image
            src="/assets/arrow.png"
            width={38}
            height={60}
            className="pt-1"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
      </div>
    </div>
  );
};

export default Blogs;
