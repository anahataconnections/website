"use client";
import React from "react";
import Image from "next/image";
import img from "@/helpers/images/register.png";
import logo from "@/helpers/images/logo.png";
import Link from "next/link";

const page = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = "https://admin.anahataaconnections.com/api/auth/register";

    const payload = {
      name: document.getElementById("name").value,
      email_phone: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      localStorage.setItem("token", data.token);

      alert("Registration successful! Redirecting to Overview...");
      window.location.href = "/overview";
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <main className="pt-14 bg-emerald-900 shadow-sm w-full z-[11]">
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-2xl leading-8 text-neutral-200 max-md:mt-10 max-md:max-w-full"
          >
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
            </div>

            <div className="flex flex-col gap-y-6 text-base">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="john"
                className="border-[#FFFFFF] border-2 rounded-lg py-2.5 bg-transparent text-white px-2.5 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="xyz@email.com"
                className="border-[#FFFFFF] border-2 rounded-lg py-2.5 bg-transparent text-white px-2.5 focus:outline-none"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                className="border-[#FFFFFF] border-2 rounded-lg py-2.5 bg-transparent text-white px-2.5 focus:outline-none"
              />
            </div>
            <button className="self-center px-14 py-3 mt-10 text-xl font-bold tracking-wide text-center text-emerald-900 whitespace-nowrap bg-white rounded-[32px] max-md:px-5 max-md:mt-10 hover:scale-105 transition ease-linear duration-200">
              Signup
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default page;
