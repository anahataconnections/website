/* eslint-disable */
"use client";
import React, { useEffect, useState } from "react";

const Refund = () => {
  interface RefundPolicyContent {
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

  const [refundContent, setRefundContent] =
    useState<RefundPolicyContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cms.anahataaconnections.com/api/refund-policy?populate=*`
        );
        const data = await response.json();
        setRefundContent(data.data.attributes.policy);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(refundContent);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="w-screen flex justify-center items-center mt-[100px] mb-[100px]">
      <div className="w-[80vw] mobile:w-[60vw] bg-[#FFE4C9] p-[20px]">
        <div className="font-Pattaya text-center my-3 text-[25px] mobile:text-3xl text-[#094C3B]">
          Refund Policy
        </div>

        {refundContent &&
          refundContent.map(
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
export default Refund;
