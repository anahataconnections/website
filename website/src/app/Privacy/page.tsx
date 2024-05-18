/* eslint-disable */
"use client";

import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
async function fetchPrivacy() {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/privacy-policy?populate=*`
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}
const Privacy = async () => {
  const item = await fetchPrivacy();
  // console.log(item.data.attributes.policy[0].children[0].text);
  return (
    <main className=" overflow-x-hidden">
      <Navbar />
      <div className="bg-home-page-back text-justify ">
        <div className="bg-grey-gradient mx-20 py-10 px-10 ">
          <div className="font-Pattaya my-3  text-3xl text-[#094C3B]">
            Privacy Policy
          </div>
          <p className="font-sarabun py-1 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.policy[0].children[0].text}
          </p>
          <h1 className="font-sarabun font-bold text-[20px]  pt-8 text-black">
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

          <h1 className="font-sarabun font-bold text-[20px]  pt-8 text-black ">
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

          <h1 className="font-sarabun font-bold pt-8 text-black text-[20px]">
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
export default Privacy;
