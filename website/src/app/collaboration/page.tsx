// Collaboration.tsx
"use client";

import React, { useState, useEffect } from "react";

import WhyChoose from "../components/WhyChoose";
import Image from "next/image";
import WhatWeDo from "../components/WhatWeDo";
import CollabCards from "../components/CollabCards";
import LetsGet from "../components/LetsGet";

interface CollaborationData {
  data: {
    attributes: {
      collaboration: {
        id: number;
        content: {
          type: string;
          children: { bold?: boolean; text: string; type: string }[];
        }[];
      };
      advertisement: {
        id: number;
        content: {
          type: string;
          children: { text: string; type: string }[];
        }[];
      };
      yoga: {
        id: number;
        content: {
          type: string;
          children: { text: string; type: string }[];
        }[];
      };
      business_partner: {
        id: number;
        name: string;
        description: string;
        rating: number | null;
        country: string | null;
      }[];
    };
  };
}

async function fetchWhy(): Promise<CollaborationData | null> {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/collaboration/?populate=*`
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

const Collaboration: React.FC = () => {
  const [collab, setCollab] = useState<CollaborationData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWhy();
      setCollab(data);
    };
    fetchData();
  }, []);

  if (!collab) return <div>Loading...</div>; // Handle loading state

  const { attributes } = collab.data;

  const { collaboration, advertisement, yoga } = attributes;

  return (
    <div className="h-auto scroll-smooth">
      <section className="">
        <div className="w-full custom2:h-[70vh] h-[60vh] relative">
          <Image
            src="/assets/image160.svg"
            alt="Additional Image"
            layout="fill"
            objectFit="cover"
            className="z-10"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
            <h2 className="font-Satisfy text-white text-[4rem] mb-4">
              Collaborate with us?
            </h2>
            <p className="text-white font-semibold text-lg mb-6 text-center font-sarabun">
              Our collaboration opens doors to new connections.
            </p>
            <button className="bg-[rgb(9,76,59)] text-white px-6 py-3 rounded-md hover:bg-green-800 font-sarabun">
              Contact Us
            </button>
          </div>
        </div>

        <WhyChoose />

        <WhatWeDo
          collaboration={collaboration}
          advertisement={advertisement}
          yoga={yoga}
        />

        <CollabCards />

        <LetsGet />
      </section>
    </div>
  );
};

export default Collaboration;
