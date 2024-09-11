import * as React from "react";

type ItemProps = {
  imgSrc: string;
  altText: string;
  text: string;
};

const Item: React.FC<ItemProps> = ({ imgSrc, altText, text }) => (
  <div className="flex flex-col flex-1 gap-4">
    <img
      loading="lazy"
      src={imgSrc}
      alt={altText}
      className="self-center aspect-[1.12] w-[169px]"
    />
    <div className="text-center font-nota text-2xl font-semibold text-[#0C6242]">
      {text}
    </div>
  </div>
);

function WhyChoose() {
  const items = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/584e966fa9ec2c375e839631b7d2811470ab99e2b3c6eca009f43506435d69f7?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      altText: "Image for 1000+ Users",
      text: "1000+ Users",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/21d269025b73763eeeedff17fdc51da426e45b619846c5ebeaa8535939180798?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      altText: "Image for 100% Secure",
      text: "100% Secure",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d5cf2c9880f970c9a57b03fafe85be9bcda41f1e89dff3eff427dd1c413f5ba5?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      altText: "Image for 1000+ Users",
      text: "1000+ Users",
    },
  ];

  return (
    <section className="flex flex-col px-5 custom2:pt-14">
      <h1 className="self-center font-Pattaya text-emerald-900 text-5xl">
        Why choose us ?
      </h1>
      <div className="flex flex-col md:flex-row gap-5 mt-14 w-full text-3xl leading-10 text-justify text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        {items.map((item, index) => (
          <Item
            key={index}
            imgSrc={item.imgSrc}
            altText={item.altText}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
