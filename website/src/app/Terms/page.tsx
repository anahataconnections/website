/* eslint-disable */
"use client";

import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

async function fetchTerm() {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/term?populate=*`
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

const Terms = async () => {
  const item = await fetchTerm();
  // console.log(item.data.attributes.terms[1].children[0].text);

  return (
    <main>
      <Navbar />
      <div className="bg-home-page-back  overflow-x-hidden">
        <div className="bg-grey-gradient mx-20 py-20 px-10  text-justify">
          <div className="font-Pattaya my-3  text-3xl text-[#094C3B]">
            Terms Of Use
          </div>
          <p className="font-sarabun py-2 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.terms[0].children[0].text}{" "}
          </p>
          <h1 className=" font-sarabun font-bold pt-8 text-black text-[18px]">
            Collection of your Information
          </h1>
          <p className="font-sarabun py-1 text-gray-600 font-medium text-[18px]">
            {" "}
            {item.data.attributes.terms[1].children[0].text}{" "}
          </p>
          <p className="font-sarabun py-2 text-gray-600 font-medium text-[18px]">
            {" "}
            {item.data.attributes.terms[1].children[0].text}{" "}
          </p>
          <p className="font-sarabun py-2 text-gray-600 font-medium text-[18px]">
            {" "}
            {item.data.attributes.terms[1].children[0].text}{" "}
          </p>

          <h1 className="font-sarabun font-bold  pt-8 text-black text-[18px]">
            Use of Demographic / Profile Data / Your Information
          </h1>
          <p className="font-sarabun py-1 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.terms[2].children[0].text}{" "}
          </p>
          <p className="font-sarabun py-2 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.terms[2].children[0].text}{" "}
          </p>
          <p className="font-sarabun py-2 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.terms[2].children[0].text}{" "}
          </p>
          <p className="font-sarabun py-2 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.terms[2].children[0].text}{" "}
          </p>

          <h1 className="font-sarabun font-bold pt-8 text-black text-[18px]">
            Cookies
          </h1>
          <p className="font-sarabun py-1 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.terms[0].children[0].text}{" "}
          </p>
          <p className="font-sarabun py-2 text-gray-600 font-medium text-[18px]">
            {item.data.attributes.terms[0].children[0].text}{" "}
          </p>
        </div>
      </div>
      <div className="bg-flower_back bg-no-repeat bg-cover pt-40">
        <Footer />
      </div>
    </main>
  );
};
export default Terms;
