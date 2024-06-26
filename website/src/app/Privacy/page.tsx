"use client";
import React, { useState, useEffect } from "react";

const Privacy = () => {
  interface PrivacyPolicyContent {
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

  const [privacyPolicyContent, setPrivacyPolicyContent] =
    useState<PrivacyPolicyContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cms.anahataaconnections.com/api/privacy-policy?populate=*`
        );
        const data = await response.json();
        setPrivacyPolicyContent(data.data.attributes.policy);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(privacyPolicyContent);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="w-screen flex justify-center items-center mt-[100px] mb-[100px]">
      <div className="w-[80vw] mobile:w-[60vw] text-justify bg-[#FCD9B6] p-[20px]">
        <div className="font-Pattaya text-[25px] text-center mb-10 mobile:text-3xl text-[#094C3B]">
          Privacy Policy
        </div>
        {privacyPolicyContent &&
          privacyPolicyContent.map(
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

export default Privacy;
