import Image from "next/image";
import * as React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

interface WhatWeDoProps {
  data: {
    [x: string]: any;
  };
}

type PartnerCardProps = {
  rating: number;
  imgSrc: string;
  name: string;
  country: string;
  text: string;
};

const PartnerCard: React.FC<PartnerCardProps> = ({
  rating,
  imgSrc,
  name,
  country,
  text,
}) => {
  return (
    <div className="relative w-96 h-[30rem] items-center bg-gray-100 rounded-md shadow-lg px-4 py-2 flex flex-col gap-4">
      <Image
        src={imgSrc}
        width={1200}
        height={720}
        loading="lazy"
        alt={`${name} from ${country}`}
        className="absolute -top-16 z-10 mt-0 shadow-lg max-w-full aspect-[1.01] w-[124px] rounded-full object-cover"
      />
      <div className="flex flex-col gap-2 items-center mt-16">
        <h3 className="text-3xl text-emerald-900 font-bold">{name}</h3>
        <p className="text-lg text-emerald-900">{country}</p>
      </div>
      <div className="flex text-2xl">
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} className="text-emerald-900" />
        ))}
        {[...Array(5 - rating)].map((_, index) => (
          <FaRegStar key={index} className="text-emerald-900" />
        ))}
      </div>
      <p className="text-lg text-center text-gray-500">{text}</p>
    </div>
  );
};

const CollabCards: React.FC<WhatWeDoProps> = ({ data }) => {
  return (
    <section className="flex flex-col px-5">
      <header className="self-center text-5xl font-Pattaya custom2:pt-16 text-emerald-900 leading-[67.2px] max-md:max-w-full max-md:text-4xl">
        Our Business Partners
      </header>
      <main className="mt-20 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-24">
          {data.map((partner: any, index: any) => (
            <div
              className="flex flex-col items-center justify-center "
              key={index}
            >
              <PartnerCard
                rating={partner.rating}
                imgSrc={partner.image?.data?.attributes?.url}
                name={partner.name}
                country={partner.country}
                text={partner.description}
              />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default CollabCards;
