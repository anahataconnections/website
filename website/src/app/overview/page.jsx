"use client";
import React, { useState } from "react";
import Image from "next/image";
import img from "@/helpers/images/overview.png";
import logo from "@/helpers/images/logo.png";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const apiUrl =
      "https://admin.anahataaconnections.com/api/profile/add-purpose-gender";

    const payload = {
      gender: selectedGender,
      purpose: purpose,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      localStorage.removeItem("token");
      window.location.href = "/download-app";
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <main className="bg-emerald-900 shadow-sm w-full z-[11] pb-40">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-1/2 ">
          <Image
            src={img}
            alt="Decorative image"
            width={500}
            height={943}
            className=""
          />
        </section>
        <section className="flex flex-col items-center z-[11] pt-14">
          <form className="flex flex-col text-2xl leading-8 text-neutral-200 max-md:mt-10 max-md:max-w-full">
            <div className=" flex flex-col justify-center items-center mb-10">
              <Image
                src={logo}
                alt="Logo"
                width={279}
                height={372}
                className="w-60 h-60 object-cover"
              />

              <div className="font-EvaMayasari text-[60px] text-center ">
                Anahata Connections
              </div>

              <div className="font-Pattaya text-[40px] mt-5">Overview</div>
            </div>

            <div className="font-semibold pb-2">Gender</div>
            <div className="flex flex-col gap-y-6 text-base">
              <label
                className={`flex items-center border-[#FFFFFF] border-2 rounded-lg py-2.5 bg-transparent text-white px-2.5 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 ${
                  selectedGender === "male" ? "bg-blue-500" : ""
                }`}
                onClick={() => setSelectedGender("male")}
              >
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  className="hidden"
                  checked={selectedGender === "male"}
                />
                <span
                  className={`cursor-pointer flex items-center justify-center w-4 h-4 mr-2 ${
                    selectedGender === "male" ? "bg-blue-500" : "bg-white"
                  } rounded-full border-2 border-white`}
                ></span>
                <span>Male</span>
              </label>
              <label
                className={`flex items-center border-[#FFFFFF] border-2 rounded-lg py-2.5 bg-transparent text-white px-2.5 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 ${
                  selectedGender === "female" ? "bg-blue-500" : ""
                }`}
                onClick={() => setSelectedGender("female")}
              >
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  className="hidden"
                  checked={selectedGender === "female"}
                />
                <span
                  className={`cursor-pointer flex items-center justify-center w-4 h-4 mr-2 ${
                    selectedGender === "female" ? "bg-blue-500" : "bg-white"
                  } rounded-full border-2 border-white`}
                ></span>
                <span>Female</span>
              </label>
              <label
                className={`flex items-center border-[#FFFFFF] border-2 rounded-lg py-2.5 bg-transparent text-white px-2.5 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 ${
                  selectedGender === "others" ? "bg-blue-500" : ""
                }`}
                onClick={() => setSelectedGender("others")}
              >
                <input
                  type="radio"
                  name="gender"
                  id="others"
                  value="others"
                  className="hidden"
                  checked={selectedGender === "others"}
                />
                <span
                  className={`cursor-pointer flex items-center justify-center w-4 h-4 mr-2 ${
                    selectedGender === "others" ? "bg-blue-500" : "bg-white"
                  } rounded-full border-2 border-white`}
                ></span>
                <span>Others</span>
              </label>
            </div>

            <div className="font-semibold py-2">Purpose</div>
            <div className="flex flex-col gap-y-6 text-base">
              <select
                id="relationship-status"
                name="relationshipStatus"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 text-base border-[#FFFFFF] border-2 rounded-lg py-2.5 bg-transparent text-white px-2.5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option className="text-black" value="">
                  Select One
                </option>
                <option className="text-black" value="dating">
                  Dating
                </option>
                <option className="text-black" value="lifePartner">
                  Life Partner
                </option>
                <option className="text-black" value="marriage">
                  Marriage
                </option>
                <option className="text-black" value="bff">
                  BFF
                </option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              className="self-center px-14 py-3 mt-10 text-xl font-bold tracking-wide text-center text-emerald-900 whitespace-nowrap bg-white rounded-[32px] max-md:px-5 max-md:mt-10 hover:scale-105 transition ease-linear duration-200"
            >
              Next
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default page;
