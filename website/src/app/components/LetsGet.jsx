import React, { useEffect, useState } from "react";

const LetsGet = () => {
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cms.anahataaconnections.com/api/collaboration?populate=*,any_plans"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPlans(data.data.attributes.any_plans);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch plans:", error);
      }
    };

    fetchData();
  }, []);

  console.log(plans);

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="px-5 custom2:h-[30rem] pt-24">
      <div className="grid grid-cols-2 gap-x-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <span className="text-emerald-900 font-Satisfy text-[60px]">
            {plans.content[0].children[0].text}
          </span>
          <br />
          <span className="text-rose-500 font-Satisfy text-[60px]">
            {plans.content[1].children[0].text}
          </span>
        </div>
        <div className="text-lg font-medium flex flex-col justify-center">
          {plans.content.map((item, index) => {
            // Check if the current item is a paragraph
            if (item.type === "paragraph") {
              return (
                <React.Fragment key={index}>
                  {item.children.map((child, childIndex) => (
                    <p key={childIndex}>{child.text}</p>
                  ))}
                </React.Fragment>
              );
            }
            // Optionally, you can return null or something else for non-paragraph items
            return null;
          })}
        </div>
      </div>
    </main>
  );
};

export default LetsGet;
