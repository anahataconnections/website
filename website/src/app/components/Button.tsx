import * as React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const Btn: React.FC = () => {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b8474bdf42ca4a1c19aae7680e8db6b33918a3903ef008636e73ab1d01465c2?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      alt: "Description for image 1",
      className: "shrink-0 w-14 aspect-square",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a31c7ec86b974129169785fac50649bdff685e6e00fb9b2968337f6e319c50ed?apiKey=b0951f87dee4449fa252b5f3cfc3b012&",
      alt: "Description for image 2",
      className: "shrink-0 aspect-[0.98] w-[55px]",
    },
  ];

  return (
    <section className="flex gap-3.5">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          className={image.className}
        />
      ))}
    </section>
  );
};

export default Btn;
