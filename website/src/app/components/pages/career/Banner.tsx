import React from "react";

export const Banner = () => {
  return (
    <div
      className="w-screen h-[60vh]  bg-cover bg-no-repeat max-mobile:bg-center text-white"
      style={{
        backgroundImage: "url('/assets/careers.svg')",
      }}
    >
      <div
        className="w-[100%] h-[100%] flex flex-col justify-center gap-[20px] box-border p-[30px] bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/careerBannerOverlay.svg')",
        }}
      >
        <h1 className=" font-Pattaya text-[25px] mobile:text-[40px]">
          Careers
        </h1>
        <div className="w-[200px] mobile:w-[500px] flex flex-col gap-[10px] font-sarabun">
          <h2 className="font-bold text-[#FDF9DA] mobile:text-[25px]">
            We're looking for talented
          </h2>
          <p className="mobile:text-[20px]">
            individuals who share our passion to be the best and achieve their
            full potential
          </p>
        </div>
      </div>
    </div>
  );
};
