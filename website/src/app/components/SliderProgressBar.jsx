import React from "react";

const SliderProgressBar = ({ totalImages, activeImageIndex }) => {
    return (
        <div className="flex justify-center mt-6">
            {Array.from({ length: totalImages }).map((_, idx) => (
                <div
                    key={idx}
                    className={`w-4 h-4 mx-2 rounded-full ${idx === activeImageIndex ? "bg-green-500" : "bg-gray-300"
                        } border border-gray-400`}
                ></div>
            ))}
        </div>
    );
};

export default SliderProgressBar;
