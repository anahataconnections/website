import * as React from "react";

type PartnerCardProps = {
  imgSrc: string;
  name: string;
  country: string;
};

const PartnerCard: React.FC<PartnerCardProps> = ({ imgSrc, name, country }) => (
  <div className="flex flex-col grow items-center px-10 pb-14 mx-auto w-full bg-gray-200 rounded border border-solid border-stone-300 max-md:px-5 max-md:mt-10 font-sarabun">
    <img
      loading="lazy"
      src={imgSrc}
      alt={`${name} from ${country}`}
      className="z-10 mt-0 -translate-y-16 max-w-full aspect-[1.01] w-[124px]"
    />
    <h3 className="text-3xl text-emerald-900">{name}</h3>
    <p className="mt-4 text-xl text-emerald-900">{country}</p>
    <div className="flex gap-0 mt-8">
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
    <p className="self-stretch mt-5 text-xl text-center text-neutral-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor
      sit amet, consectetur adipiscing elit
    </p>
  </div>
);

const partners = [
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2a48f410adb534460654a0bb9d939f2546e447a4aa1a8a112b0d74ff566486f4?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
    name: "Richard Fury",
    country: "India",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2a48f410adb534460654a0bb9d939f2546e447a4aa1a8a112b0d74ff566486f4?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
    name: "Richard Fury",
    country: "India",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2a48f410adb534460654a0bb9d939f2546e447a4aa1a8a112b0d74ff566486f4?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
    name: "Richard Fury",
    country: "India",
  },
];

const CollabCards: React.FC = () => (
  <section className="flex flex-col px-5">
    <header className="self-center text-5xl font-Pattaya
     custom2:pt-16
    text-emerald-900 leading-[67.2px] max-md:max-w-full max-md:text-4xl">
      Our Business Partners
    </header>
    <main className="mt-24 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-3 max-md:flex-col max-md:gap-0 ">
        {partners.map((partner, index) => (
          <div
            className="flex flex-col mx-auto custom2:w-[28%] w-[33%] custom2:px-2  "
            key={index}
          >
            <PartnerCard
              imgSrc={partner.imgSrc}
              name={partner.name}
              country={partner.country}
            />
          </div>
        ))}
      </div>
    </main>
  </section>
);

export default CollabCards;
