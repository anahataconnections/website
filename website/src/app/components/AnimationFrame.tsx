import React from "react";
import Image from "next/image";
import "../Style/animation.css";

const AnimationFrame = () => {
  return (
    <div className="flex items-center justify-center xl:translate-y-48 lg:translate-y-32 md:translate-y-72">
      <div className="relative">
        <Image
          src={"/assets/left-rose.svg"}
          alt="rose image"
          width={1200}
          height={1200}
          priority
          className="lg:w-[16.5rem] md:w-56 w-32 translate-y-80 -translate-x-2 lg:translate-y-48 lg:-translate-x-32 md:-translate-x-4 md:translate-y-32 absolute"
        />
        <Image
          src={"/assets/man.svg"}
          alt="man image"
          width={1200}
          height={1200}
          priority
          className="xl:w-[32rem] md:w-96 w-[70rem] lg:translate-y-12 md:translate-y-24 lg:translate-x-14 md:translate-x-10 translate-y-80 translate-x-4"
        />
      </div>
      <div className="relative">
        <Image
          src={"/assets/right-rose.svg"}
          alt="rose image"
          width={1200}
          height={1200}
          priority
          className="lg:w-[16.5rem] md:w-56 w-32 translate-y-80 translate-x-24 lg:translate-y-48 lg:translate-x-96 md:translate-x-48 md:translate-y-32 absolute "
        />
        <Image
          src={"/assets/woman.svg"}
          alt="woman image"
          width={1200}
          height={1200}
          priority
          className="xl:w-[36rem] md:w-[27rem] w-[78rem] lg:translate-y-14 md:translate-y-24 lg:-translate-x-14 md:-translate-x-10 translate-y-80 -translate-x-4"
        />
      </div>
    </div>
  );
};

export default AnimationFrame;
// import React from "react";
// import Image from "next/image";
// import "../Style/animation.css";

// const AnimationFrame = () => {
//   return (
//     <div className="flex items-center justify-center xl:translate-y-48 lg:translate-y-32 md:translate-y-72">
//       <div className="animate-fade-right animate-once animate-ease-in relative">
//         <Image
//           src={"/assets/left-rose.svg"}
//           alt="rose image"
//           width={1200}
//           height={1200}
//           priority
//           className="lg:w-[16.5rem] md:w-56 w-32 translate-y-80 -translate-x-2 lg:translate-y-48 lg:-translate-x-32 md:-translate-x-4 md:translate-y-32 absolute animate-fade animate-delay-500"
//         />
//         <Image
//           src={"/assets/man.svg"}
//           alt="man image"
//           width={1200}
//           height={1200}
//           priority
//           className="xl:w-[32rem] md:w-96 w-[70rem] lg:translate-y-12 md:translate-y-24 lg:translate-x-14 md:translate-x-10 translate-y-80 translate-x-4"
//         />
//       </div>
//       <div className="animate-fade-left animate-once animate-ease-in relative">
//         <Image
//           src={"/assets/right-rose.svg"}
//           alt="rose image"
//           width={1200}
//           height={1200}
//           priority
//           className="lg:w-[16.5rem] md:w-56 w-32 translate-y-80 translate-x-24 lg:translate-y-48 lg:translate-x-96 md:translate-x-48 md:translate-y-32 absolute animate-fade animate-delay-500"
//         />
//         <Image
//           src={"/assets/woman.svg"}
//           alt="woman image"
//           width={1200}
//           height={1200}
//           priority
//           className="xl:w-[36rem] md:w-[27rem] w-[78rem] lg:translate-y-14 md:translate-y-24 lg:-translate-x-14 md:-translate-x-10 translate-y-80 -translate-x-4"
//         />
//       </div>
//     </div>
//   );
// };

// export default AnimationFrame;
