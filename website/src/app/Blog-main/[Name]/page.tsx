/* eslint-disable */
"use client";
import React from "react";
import Image from "next/image";
import Blogs from "../../components/Blogs";
import { fetchBannerImage, fetchBlogByName, formatDate } from "@/helpers/blog";

interface BlogPageProps {
  params: {
    Name: string;
  };
}

interface RichTextItem {
  type: string;
  children: Array<TextItem | ListItem>;
  level?: number;
  format?: 'ordered' | 'unordered';
  url?: string;
  language?: string;
}

interface TextItem {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  link?: {
    url: string;
    target?: string;
  };
}

interface ListItem {
  children: Array<TextItem>;
}

interface BlogData {
  attributes: {
    tiltle: string;
    published: string;
    content: RichTextItem[];
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

interface BannerImageData {
  url: string;
}

const RichTextRenderer: React.FC<{ content: RichTextItem[] }> = ({ content }) => {
  const renderContent = (item: RichTextItem, index: number) => {
    switch (item.type) {
      case "paragraph":
        return (
          <p
            key={index}
            className="text-[#6E6E6E] text-base md:text-lg text-center md:text-left mb-4"
          >
            {item.children.map((child, childIndex) =>
              renderTextWithFormat(child as TextItem, childIndex)
            )}
          </p>
        );
      case "heading":
        return renderHeading(item, index);
      case "list":
        return renderList(item, index);
      case "blockquote":
        return renderBlockquote(item, index);
      case "code":
        return renderCode(item, index);
      default:
        return null;
    }
  };

  const renderHeading = (item: RichTextItem, index: number) => {
    const headingClasses: { [key: number]: string } = {
      1: "text-4xl",
      2: "text-3xl",
      3: "text-2xl",
      4: "text-xl",
      5: "text-lg",
      6: "text-base",
    };

    return React.createElement(
      `h${item.level}`,
      {
        key: index,
        className: `text-[#094C3B] font-bold mb-4 ${
          headingClasses[item.level || 1] || "text-lg"
        }`,
      },
      item.children.map((child, childIndex) =>
        renderTextWithFormat(child as TextItem, childIndex)
      )
    );
  };

  const renderList = (item: RichTextItem, index: number) => {
    const ListTag = item.format === "ordered" ? "ol" : "ul";
    const listClass = item.format === "ordered" ? "list-decimal" : "list-disc";

    return (
      <ListTag key={index} className={`pl-5 mb-4 text-[#6E6E6E] ${listClass}`}>
        {item.children.map((listItem, listItemIndex) => (
          <li key={listItemIndex} className="mb-2 pl-2">
            {(listItem as ListItem).children.map((child, childIndex) =>
              renderTextWithFormat(child, childIndex)
            )}
          </li>
        ))}
      </ListTag>
    );
  };

  const renderBlockquote = (item: RichTextItem, index: number) => {
    return (
      <blockquote key={index} className="border-l-4 border-[#094C3B] pl-4 italic my-4">
        {item.children.map((child, childIndex) =>
          renderTextWithFormat(child as TextItem, childIndex)
        )}
      </blockquote>
    );
  };

  const renderCode = (item: RichTextItem, index: number) => {
    return (
      <pre key={index} className="bg-gray-100 p-4 rounded-md overflow-x-auto my-4">
        <code className={`language-${item.language || 'text'}`}>
          {item.children.map((child, childIndex) =>
            renderTextWithFormat(child as TextItem, childIndex)
          )}
        </code>
      </pre>
    );
  };

  const renderTextWithFormat = (textItem: TextItem, index: number): React.ReactNode => {
    let text: React.ReactNode = textItem.text;

    if (textItem.code) {
      text = <code key={index} className="bg-gray-100 px-1 rounded">{text}</code>;
    }
    if (textItem.bold) {
      text = <strong key={index}>{text}</strong>;
    }
    if (textItem.italic) {
      text = <em key={index}>{text}</em>;
    }
    if (textItem.underline) {
      text = <u key={index}>{text}</u>;
    }
    if (textItem.link) {
      text = (
        <a
          key={index}
          href={textItem.link.url}
          target={textItem.link.target || '_blank'}
          rel="noopener noreferrer"
          className="text-[#094C3B] underline"
        >
          {text}
        </a>
      );
    }
    return text;
  };

  return (
    <div className="w-[100%]">
      {content.map((item, index) => renderContent(item, index))}
    </div>
  );
};

const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const [blog, setBlog] = React.useState<BlogData | null>(null);
  const [bannerImage, setBannerImage] = React.useState<BannerImageData>({ url: '' });

  React.useEffect(() => {
    const fetchBlogData = async () => {
      const blogName = params.Name.split("-").join(" ");
      const blogData = await fetchBlogByName(blogName);
      setBlog(blogData?.data[0]);
    };
    const fetchBannerImageData = async () => {
      const bannerImageData = await fetchBannerImage();
      setBannerImage(
        bannerImageData?.data?.attributes?.banner_image?.data?.attributes || { url: '' }
      );
    };

    fetchBlogData();
    fetchBannerImageData();
  }, [params.Name]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-white overflow-x-hidden">
      <div
        style={{
          backgroundImage: `url(${bannerImage.url})`,
        }}
        className="w-[100vw] h-[50vh] mobile:h-[65vh] bg-cover bg-no-repeat bg-center"
      ></div>
      <div className="w-screen flex items-center justify-center  pt-[30px] pb-[60px] mobile:pt-[50px] mobile:pb-[100px]">
        <div className="w-[80vw] mobile:w-[60vw] flex flex-col items-center  bg-cover bg-no-repeat customMax:mt-28">
          <div className="flex flex-col gap-[30px] mobile:gap-[60px]">
            <div className="flex flex-col gap-[10px] mobile:gap-[30px]">
              <h1 className=" text-center font-Pattaya text-[#094C3B] text-[30px] small-tab:text-[40px]">
                {blog.attributes.tiltle}
              </h1>
              <h3 className="font-sarabun flex justify-center items-center text-xl text-black">
                {formatDate(blog.attributes.published)}
              </h3>
            </div>
            <div className="flex flex-col items-center gap-[50px]">
              <Image
                src={blog.attributes.image.data.attributes.url}
                width={500}
                height={500}
                className="w-[700px] h-auto "
                alt="youga image"
              />
              <RichTextRenderer content={blog.attributes.content} />
            </div>
          </div>
          {/* more blogs */}
          <div className="w-[100%] flex flex-col gap-[20px] mt-[30px] mobile:mt-[50px]">
            <div className="font-Pattaya  flex justify-center items-center text-[30px] mobile:text-[40px] text-[#094C3B]">
              More From Us
            </div>
            <div className="w-[100%] flex items-center justify-between">
              <Blogs />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;

export const runtime = "edge";