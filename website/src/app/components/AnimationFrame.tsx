import React from "react";
import Image from "next/image";
import "../Style/animation.css";
export const AnimationFrame = () => {
  return (
    <div className="absolute top-0 w-[100%] h-[100%]">
      <div className="relative w-[100%] h-[100%]">
        <div className="flex justify-center items-center w-screen">
          {/* man */}
          <div className="man-image absolute max-mobile:top-[40%] max-mobile:left-0 mobile:bottom-0 1250:left-[5%] 1370:left-[8%] pc:left-[8%]  ">
            <div className="relative w-[100%] h-fit mobile:h-fit">
              <div
                className="absolute w-[100%] h-[100%]  bg-no-repeat bg-50-width-left rose-opacity"
                style={{
                  backgroundImage: "url('/assets/left-rose.svg')",
                }}
              ></div>
              <Image
                src={"/assets/man.svg"}
                alt="man image"
                width={550}
                height={750}
                className="w-[100%] h-[200px] mobile:h-[650px] translate-x-[50px] mobile:translate-x-[140px] z-[10] "
              />
            </div>
          </div>

          {/* woman */}
          <div className="woman-image absolute max-mobile:top-[40%] max-mobile:right-0  mobile:bottom-0 1250:right-[-2%] 1370:right-[2%] pc:right-[7%]">
            <div className="relative w-[100%] h-fit mobile:h-fit">
              <div
                className="absolute w-[100%] h-[100%]  bg-no-repeat bg-50-width-right rose-opacity"
                style={{
                  backgroundImage: "url('/assets/right-rose.svg')",
                }}
              ></div>
              <Image
                src={"/assets/woman.svg"}
                alt="woman image"
                width={550}
                height={750}
                className="w-[100%] h-[200px] mobile:h-[650px] translate-x-[-50px] mobile:translate-x-[-140px] mobile:translate-y-[5px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
