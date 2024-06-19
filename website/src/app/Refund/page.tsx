/* eslint-disable */

import React from "react";

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
  return (
    <main className="w-screen flex justify-center items-center mt-[100px] mb-[100px]">
      <div className="w-[80vw] mobile:w-[60vw] bg-grey-gradient p-[20px]">
        <div className="font-Pattaya my-3 text-[25px] mobile:text-3xl text-[#094C3B]">
          Refund Policy
        </div>
        <p className="font-sarabun py-1 text-gray-600 font-medium text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[0].children[0].text}
        </p>
        <h1 className="font-sarabun  font-bold text-[15px] mobile:text-[20px] text-black pt-8">
          Collection of your Information
        </h1>
        <p className="font-sarabun py-1 text-gray-600 font-medium text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[1].children[0].text}
        </p>
        <p className="font-sarabun py-1 text-gray-600 font-medium text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[1].children[0].text}
        </p>
        <p className="font-sarabun py-1 text-gray-600 font-medium text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[1].children[0].text}
        </p>

        <h1 className="font-sarabun font-bold text-[15px] mobile:text-[20px] text-black pt-8">
          Use of Demographic / Profile Data / Your Information
        </h1>
        <p className="font-sarabun py-1 text-gray-600 font-medium text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[2].children[0].text}
        </p>
        <p className="font-sarabun py-1 text-gray-600 font-medium text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[2].children[0].text}
        </p>
        <p className="font-sarabun py-1 text-gray-600 font-medium text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[2].children[0].text}
        </p>
        <p className="font-sarabun py-1 text-gray-600 font-medium text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[2].children[0].text}
        </p>

        <h1 className="font-sarabun font-bold text-[15px] mobile:text-[20px] text-black pt-8">
          Cookies
        </h1>
        <p className="font-sarabun py-1 text-gray-600 font-medium text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[2].children[0].text}
        </p>
        <p className="font-sarabun py-1 text-gray-600 font-medium text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[2].children[0].text}
        </p>
      </div>
    </main>
  );
};
export default Refund;
