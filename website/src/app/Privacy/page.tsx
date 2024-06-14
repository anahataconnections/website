/* eslint-disable */

import React from "react";
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

  return (
    <main className=" w-scren flex justify-center items-center mt-[100px] mb-[100px]">
      <div className="w-[80vw] mobile:w-[60vw] text-justify bg-[#FCD9B6] p-[20px]">
        <div className="font-Pattaya text-[25px] text-center mb-10  mobile:text-3xl text-[#094C3B]">
          Privacy Policy
        </div>
        <p className="font-sarabun  text-gray-600 text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[0].children[0].text}
        </p>
        <h1 className="font-sarabun font-bold text-[15px] mobile:text-[20px]  pt-8 text-black">
          Collection of your Information
        </h1>
        <p className="font-sarabun py-1 text-gray-600  text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[1].children[0].text}
        </p>
        <p className="font-sarabun py-1 text-gray-600  text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[1].children[0].text}
        </p>
        <p className="font-sarabun py-1 text-gray-600  text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[1].children[0].text}
        </p>

        <h1 className="font-sarabun font-bold text-[15px] mobile:text-[20px]  pt-8 text-black ">
          Use of Demographic / Profile Data / Your Information
        </h1>
        <p className="font-sarabun py-1 text-gray-600  text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[2].children[0].text}
        </p>
        <p className="font-sarabun py-1 text-gray-600  text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[2].children[0].text}
        </p>
        <p className="font-sarabun py-1 text-gray-600  text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[2].children[0].text}
        </p>
        <p className="font-sarabun py-1 text-gray-600  text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[2].children[0].text}
        </p>

        <h1 className="font-sarabun font-bold pt-8 text-black text-[15px] mobile:text-[20px]">
          Cookies
        </h1>
        <p className="font-sarabun py-1 text-gray-600  text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[2].children[0].text}
        </p>
        <p className="font-sarabun py-1 text-gray-600  text-[13px] mobile:text-[18px]">
          {item.data.attributes.policy[2].children[0].text}
        </p>
      </div>
    </main>
  );
};
export default Privacy;
