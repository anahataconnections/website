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
    <div className="relative flex flex-col grow items-center px-5 pb-5 mx-auto bg-gray-200 rounded border border-solid border-stone-300 max-md:px-5 max-md:mt-10 font-sarabun">
      <Image
        src={imgSrc}
        width={1200}
        height={720}
        loading="lazy"
        alt={`${name} from ${country}`}
        className="absolute -top-16 z-10 mt-0 max-w-full aspect-[1.01] w-[124px] rounded-full object-cover"
      />
      <h3 className="text-3xl text-emerald-900 mt-20">{name}</h3>
      <p className="mt-4 text-xl text-emerald-900">{country}</p>
      <div className="flex gap-0 mt-2 text-2xl">
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} className="text-emerald-900" />
        ))}
        {[...Array(5 - rating)].map((_, index) => (
          <FaRegStar key={index} className="text-emerald-900" />
        ))}
      </div>
      <p className="mt-5 text-lg text-center text-neutral-600">{text}</p>
    </div>
  );
};

const CollabCards: React.FC<WhatWeDoProps> = ({ data }) => {
  return (
    <section className="flex flex-col px-5">
      <header className="self-center text-5xl font-Pattaya custom2:pt-16 text-emerald-900 leading-[67.2px] max-md:max-w-full max-md:text-4xl">
        Our Business Partners
      </header>
      <main className="mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col gap-y-14 md:gap-y-0 md:flex-row md:gap-x-5 mx-20">
          {data.map((partner: any, index: any) => (
            <div
              className="flex flex-col mx-auto md:w-full custom2:px-2 "
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
