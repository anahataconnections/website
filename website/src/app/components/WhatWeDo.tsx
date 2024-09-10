import React from "react";
import Image from "next/image";

interface TextItem {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

interface ContentItem {
  type: string;
  children: TextItem[];
  level?: number;
}

interface SectionData {
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  content: ContentItem[];
}

interface WhatWeDoProps {
  sections: SectionData[];
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ sections }) => {
  const renderTextWithFormat = (textItem: TextItem, index: number): React.ReactNode => {
    let text: React.ReactNode = textItem.text;

    if (textItem.bold) {
      text = <strong key={`bold-${index}`}>{text}</strong>;
    }
    if (textItem.italic) {
      text = <em key={`italic-${index}`}>{text}</em>;
    }
    if (textItem.underline) {
      text = <u key={`underline-${index}`}>{text}</u>;
    }

    return text;
  };

  const renderContent = (content: ContentItem[]) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'heading':
          return renderHeading(item, index);
        case 'paragraph':
          return (
            <p key={index} className="font-sarabun text-xl text-justify mb-4">
              {item.children.map((child, childIndex) =>
                renderTextWithFormat(child, childIndex)
              )}
            </p>
          );
        default:
          return null;
      }
    });
  };

  const renderHeading = (item: ContentItem, index: number) => {
    const headingClasses: { [key: number]: string } = {
      1: "text-4xl font-bold",
      2: "text-3xl font-semibold",
      3: "text-2xl font-medium",
      4: "text-xl font-medium",
      5: "text-lg font-medium",
      6: "text-base font-medium",
    };

    const HeadingTag = `h${item.level || 1}` as keyof JSX.IntrinsicElements;

    return (
      <HeadingTag
        key={index}
        className={`font-sarabun text-emerald-900 mb-4 ${headingClasses[item.level || 1]}`}
      >
        {item.children.map((child, childIndex) =>
          renderTextWithFormat(child, childIndex)
        )}
      </HeadingTag>
    );
  };

  return (
    <div className="pt-16 flex flex-col space-y-3">
      <h1 className="font-Pattaya text-emerald-900 text-center text-5xl my-10">
        What we do?
      </h1>

      {sections?.map((section, index) => (
        <div
          key={index}
          className="text-black py-10 px-5 md:px-0 flex flex-col md:flex-row items-center justify-center md:items-start gap-2 gap-x-10"
        >
          {index % 2 === 0 ? (
            <>
              <div>
                <Image
                  src={section.image.data.attributes.url}
                  alt={`Section ${index + 1} Image`}
                  width={400}
                  height={200}
                />
              </div>
              <div className="md:w-1/2 md:pl-8">{renderContent(section.content)}</div>
            </>
          ) : (
            <>
              <div className="md:w-1/2">{renderContent(section.content)}</div>
              <div className="custom2:pl-6">
                <Image
                  src={section.image.data.attributes.url}
                  alt={`Section ${index + 1} Image`}
                  width={400}
                  height={200}
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default WhatWeDo;