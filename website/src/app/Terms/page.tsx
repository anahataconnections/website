/* eslint-disable */

"use client";
import React, { useState, useEffect } from "react";

const Terms = () => {
  interface TermsContent {
    map(
      arg0: (
        paragraph: { children: any[] },
        index: React.Key | null | undefined
      ) => React.JSX.Element
    ): React.ReactNode;
    data: {
      id: number;
      attributes: {
        policy: {
          type: string;
          children: {
            text: string;
            type: string;
          }[];
        }[];
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
      };
    };
    meta: {};
  }

  const [termsContent, setTermsContent] = useState<TermsContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cms.anahataaconnections.com/api/term?populate=*`
        );
        const data = await response.json();
        console.log(data);
        
        setTermsContent(data.data.attributes.terms);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(termsContent);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="w-screen flex justify-center items-center mt-[100px] mb-[100px]">
      <div className="w-[80vw] mobile:w-[60vw] bg-grey-gradient p-[20px]">
        <div className="font-Pattaya my-3 text-[25px]  mobile:text-3xl text-[#094C3B]">
          Terms Of Use
        </div>
        {termsContent &&
          termsContent.map(
            (
              paragraph: { children: any[] },
              index: React.Key | null | undefined
            ) => (
              <p key={index} className="mb-4">
                {paragraph.children
                  .map((child: { text: any }) => child.text)
                  .join(" ")}
              </p>
            )
          )}
      </div>
    </main>
  );
};
export default Terms;
