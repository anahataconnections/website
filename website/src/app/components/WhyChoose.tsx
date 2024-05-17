import * as React from "react";

type FeatureProps = {
    imageSrc: string;
    imageAlt: string;
    description: string;
};

const Feature: React.FC<FeatureProps> = ({ imageSrc, imageAlt, description }) => (
    <div className="flex flex-col flex-1 items-center">
        <img
            loading="lazy"
            src={imageSrc}
            alt={imageAlt}
            className="aspect-[1.12] w-[135px] max-lg:w-[120px] max-md:w-[80px]"
        />
        <div className="mt-12 text-center max-md:mt-10">{description}</div>
    </div>
);

const features = [
    {
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/584e966fa9ec2c375e839631b7d2811470ab99e2b3c6eca009f43506435d69f7?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
        imageAlt: "Image representing 1000+ users",
        description: "1000+ Users",
    },
    {
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/21d269025b73763eeeedff17fdc51da426e45b619846c5ebeaa8535939180798?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
        imageAlt: "Image representing 100% secure",
        description: "100% Secure",
    },
    {
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5cf2c9880f970c9a57b03fafe85be9bcda41f1e89dff3eff427dd1c413f5ba5?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
        imageAlt: "Image representing 1000+ users",
        description: "1000+ Users",
    },
];

const WhyChoose: React.FC = () => {
    return (
        <section className="flex flex-col px-5 h-[150px]">
            <h1 className="self-center text-6xl text-emerald-900 font-Pattaya xl:mt-20 leading-[67.2px] max-md:text-4xl">
                Why choose us?
            </h1>
            <div className="flex flex-wrap gap-5 mt-16 text-[1.2rem] leading-10 text-justify text-black max-md:mt-10 max-md:max-w-full max-lg:gap-3 max-lg:mt-8">

                {features.map((feature, index) => (
                    <Feature
                        key={index}
                        imageSrc={feature.imageSrc}
                        imageAlt={feature.imageAlt}
                        description={feature.description}
                    />

                ))}
            </div>
        </section>
    );
};

export default WhyChoose;