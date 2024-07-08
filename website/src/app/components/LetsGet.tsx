import * as React from "react";

type TextSectionProps = {
  children: React.ReactNode;
};

const TextSection: React.FC<TextSectionProps> = ({ children }) => (
  <section className="flex flex-col w-auto mx-20">
    <h1 className="self-stretch my-auto text-6xl text-center text-rose-500 leading-[88px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[70px]">
      {children}
    </h1>
  </section>
);

type ContentSectionProps = {
  children: React.ReactNode;
};

const ContentSection: React.FC<ContentSectionProps> = ({ children }) => (
  <section className="flex flex-col mx-5 md:mx-0 md:ml-5  w-auto md:w-full custom2:px-20">
    <p className="text-lg md:text-2xl leading-10 text-justify text-black max-md:mt-10 max-md:max-w-full font-sarabun">
      {children}
    </p>
  </section>
);

const LetsGet: React.FC = () => (
  <main className="px-5 custom2:h-[30rem] pt-24">
    <div className="flex flex-col justify-center items-center gap-5">
      <TextSection>
        <span className="text-emerald-900 font-Satisfy">
          Do you have any plan?{" "}
        </span>
        <br />
        <span className="text-rose-500 font-Satisfy">Let’s get connected</span>
      </TextSection>
      <ContentSection>
        Aenean tempor mi molestie egestas cras. Quis nec eget arcu ultricies.
        Ultricies nisl risus in ridiculus. Tristique facilisis tristique cursus
        elementum porta erat est. Nulla condimentum elit neque Aenean tempor mi
        molestie egestas cras. Quis nec eget arcu ultricies. Ultricies nisl
        risus in ridiculus. Tristique facilisis tristique cursus elementum porta
        erat est. Nulla condimentum elit neque
      </ContentSection>
    </div>
  </main>
);

export default LetsGet;
