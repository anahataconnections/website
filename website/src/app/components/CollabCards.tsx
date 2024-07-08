import * as React from "react";

interface WhatWeDoProps {
  data: {
    [x: string]: any;
  };
}

type PartnerCardProps = {
  imgSrc: string;
  name: string;
  country: string;
  text: string;
};

const PartnerCard: React.FC<PartnerCardProps> = ({
  imgSrc,
  name,
  country,
  text,
}) => (
  <div className="relative flex flex-col grow items-center px-20 pb-10 mx-auto bg-gray-200 rounded border border-solid border-stone-300 max-md:px-5 max-md:mt-10 font-sarabun">
    <img
      loading="lazy"
      src={imgSrc}
      alt={`${name} from ${country}`}
      className="absolute -top-16 z-10 mt-0 max-w-full aspect-[1.01] w-[124px] rounded-full object-cover"
    />
    <h3 className="text-3xl text-emerald-900 mt-24">{name}</h3>
    <p className="mt-4 text-xl text-emerald-900">{country}</p>
    <div className="flex gap-0 mt-2">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b53b2acb6fc8980f5c004c0d20a22c000f36bd8292871f4aba21feea468e45ad?apiKey=b0951f87dee4449fa252b5f3cfc3b012&"
        alt=""
        className="shrink-0 aspect-square w-[30px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b53b2acb6fc8980f5c004c0d20a22c000f36bd8292871f4aba21feea468e45ad?apiKey=b0951f87dee4449fa252b5f3cfc3b012&"
        alt=""
        className="shrink-0 aspect-square w-[30px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b53b2acb6fc8980f5c004c0d20a22c000f36bd8292871f4aba21feea468e45ad?apiKey=b0951f87dee4449fa252b5f3cfc3b012&"
        alt=""
        className="shrink-0 aspect-square w-[30px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b53b2acb6fc8980f5c004c0d20a22c000f36bd8292871f4aba21feea468e45ad?apiKey=b0951f87dee4449fa252b5f3cfc3b012&"
        alt=""
        className="shrink-0 aspect-square w-[30px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dac47b639e56202355b1e68a8708d5fc920e8f419101c5ed06d6cb9ca7acb771?apiKey=b0951f87dee4449fa252b5f3cfc3b012&"
        alt=""
        className="shrink-0 aspect-square w-[30px]"
      />
    </div>
    <p className="mt-5 text-lg text-center text-neutral-600">{text}</p>
  </div>
);

const CollabCards: React.FC<WhatWeDoProps> = ({ data }) => {
  console.log(data);

  return (
    <section className="flex flex-col px-5">
      <header className="self-center text-5xl font-Pattaya custom2:pt-16 text-emerald-900 leading-[67.2px] max-md:max-w-full max-md:text-4xl">
        Our Business Partners
      </header>
      <main className="mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col gap-y-14 md:gap-y-0 md:flex-row md:gap-3">
          {data.map((partner: any, index: any) => (
            <div
              className="flex flex-col mx-auto custom2:w-[23%] md:w-1/3 custom2:px-2 "
              key={index}
            >
              <PartnerCard
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
