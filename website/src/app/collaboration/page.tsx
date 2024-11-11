// Collaboration.tsx
"use client";

import React, { useState, useEffect } from "react";

import WhyChoose from "../components/WhyChoose";
import Image from "next/image";
import WhatWeDo from "../components/WhatWeDo";
import CollabCards from "../components/CollabCards";
import LetsGet from "../components/LetsGet";
import ContactUsDialog from "../components/ContactUsDialog";

interface CollaborationData {
  data: {
    attributes: {
      heading: string;
      description: string;
      button_text: string;
      collaboration: {
        id: number;
        content: {
          type: string;
          children: { bold?: boolean; text: string; type: string }[];
        }[];
        image: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
      advertisement: {
        id: number;
        content: {
          type: string;
          children: { text: string; type: string }[];
        }[];
        image: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
      yoga: {
        id: number;
        content: {
          type: string;
          children: { text: string; type: string }[];
        }[];
        image: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
      banner_image: {
        data: {
          id: number;
          attributes: {
            url: string;
          };
        };
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
      `https://cms.anahataaconnections.com/api/collaboration?populate=*,collaboration.image,advertisement.image,yoga.image,business_partner.image,any_plans,banner_image`
    );
    const response = await res.json();
    console.log(response);
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

  const {
    collaboration,
    advertisement,
    yoga,
    business_partner,
    banner_image,
    heading,
    description,
    button_text,
  } = attributes;

  const sections = [
    {
      image: {
        data: { attributes: { url: collaboration.image.data.attributes.url } },
      },
      content: collaboration.content,
    },
    {
      image: {
        data: { attributes: { url: advertisement.image.data.attributes.url } },
      },
      content: advertisement.content,
    },
    {
      image: { data: { attributes: { url: yoga.image.data.attributes.url } } },
      content: yoga.content,
    },
  ];

  return (
    <div className="h-auto scroll-smooth">
      <section className="flex flex-col">
        <div className="w-full custom2:h-[70vh] h-[60vh] relative mb-10 lg:mb-0">
          {banner_image && (
            <Image
              style={{opacity:.8}}
              src={banner_image.data.attributes.url}
              alt="Additional Image"
              layout="fill"
              objectFit="cover"
              className="z-10"
            />
          )}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
            <h2 className="font-Satisfy text-black text-4xl lg:text-[4rem] mb-4">
              {heading}
            </h2>
            <p className="text-black font-semibold text-lg mb-6 text-center font-sarabun">
              {description}{" "}
            </p>
            <ContactUsDialog />
          </div>
        </div>

        <WhyChoose />

        <WhatWeDo sections={sections} />

        <CollabCards data={business_partner} />

        <LetsGet />
      </section>
    </div>
  );
};

export default Collaboration;
