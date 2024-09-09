import React, { useEffect, useState } from "react";
import Link from "next/link";
import Motionframe from "./Motionframe";
import AnimationFrame from "./AnimationFrame";
import "../Style/animation.css";

async function fetchEvents() {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/home?populate=*`
    );
    const response = await res.json();
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

const Hero = () => {
  const [data, setData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [truncatedText, setTruncatedText] = useState("");
  const [fullText, setFullText] = useState("");

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchEvents();
      setData(res.attributes.why_anahata_connections);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data?.content) {
      const fullContent = data.content
        .map((paragraph) => paragraph.children.map((child) => child.text).join(" "))
        .join(" ");
      setFullText(fullContent);
      setTruncatedText(fullContent.substr(0, 150) + "...");
    }
  }, [data]);

  return (
    <div className="w-screen flex flex-col items-center bg-no-repeat bg-cover bg-center gap-4">
      <div className="w-screen h-fit items-center flex flex-col gap-2">
        <div className="bg-home-page-back bg-cover bg-no-repeat bg-center">
          <div className="relative w-screen p-4 lg:h-screen mobile:h-[80vh] bg-radial-gradient flex justify-center overflow-hidden frame">
            <div className="absolute">
              <AnimationFrame />
            </div>
            <Motionframe />
          </div>
        </div>

        <div className="w-[90vw] small-tab:w-[60vw] flex flex-col gap-4 items-center mt-14">
          <header className="font-Pattaya md:text-5xl  text-4xl text-center text-[#094C3B]">
            {data?.title}
          </header>
          <header className="text-black text-2xl text-justify font-Satisfy">
            {isExpanded ? fullText : truncatedText}
          </header>

          <button
            className="flex text-sm font-mono text-center font-semibold justify-center items-center"
            onClick={toggleContent}
          >
            {isExpanded ? "Show Less" : "Show More..."}
          </button>

          <Link href="../../Whyanahata">
            <div className="flex justify-center rounded-full hover:scale-105 transition-all duration-300 ease-in-out p-2 px-8 text-base shadow-xl font-semibold text-white bg-[#286f5d]">
              Know More
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;