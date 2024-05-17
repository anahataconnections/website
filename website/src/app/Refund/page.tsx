/* eslint-disable */
"use client";

import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import our from "../Our_story/Our_story"
async function fetchRefund() {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/refund-policy?populate=*`
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}
// export default function Refund()
const Refund = async () => {
  const item = await fetchRefund();
  // console.log(item.data.attributes.policy[0].children[0].text);
  return (
    <main>
      <Navbar />
      <div className="bg-home-page-back">
        <div className="bg-grey-gradient mx-20 py-20 px-10 text-justify">
          <div className="font-Pattaya my-3  text-3xl text-[#094C3B]">
            Refund Policy
          </div>
          <p className="font-sarabun py-1 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.policy[0].children[0].text}
          </p>
          <h1 className="font-sarabun  font-bold text-[20px] text-black pt-8">
            Collection of your Information
          </h1>
          <p className="font-sarabun py-1 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.policy[1].children[0].text}
          </p>
          <p className="font-sarabun py-1 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.policy[1].children[0].text}
          </p>
          <p className="font-sarabun py-1 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.policy[1].children[0].text}
          </p>

          <h1 className="font-sarabun font-bold text-[20px] text-black pt-8">
            Use of Demographic / Profile Data / Your Information
          </h1>
          <p className="font-sarabun py-1 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.policy[2].children[0].text}
          </p>
          <p className="font-sarabun py-1 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.policy[2].children[0].text}
          </p>
          <p className="font-sarabun py-1 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.policy[2].children[0].text}
          </p>
          <p className="font-sarabun py-1 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.policy[2].children[0].text}
          </p>

          <h1 className="font-sarabun font-bold text-[20px] text-black pt-8">
            Cookies
          </h1>
          <p className="font-sarabun py-1 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.policy[2].children[0].text}
          </p>
          <p className="font-sarabun py-1 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.policy[2].children[0].text}
          </p>
        </div>
      </div>
      <div className="bg-flower_back bg-no-repeat bg-cover pt-40">
        <Footer />
      </div>
    </main>
  );
};
export default Refund;
