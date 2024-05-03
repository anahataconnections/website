"use client" ;
// components/ShowMoreButton.tsx

import React, { useState } from 'react';

const ShowMoreButton: React.FC = () => {
    const [showContent, setShowContent] = useState(false);

    const handleButtonClick = () => {
        setShowContent(!showContent);
    };

    return (
        <div>
            
            {showContent && (
                <div>
                    {/* Your hidden content goes here */}
                    ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
                </div>
            )}

<button onClick={handleButtonClick} className='text-black text-m'>
                {showContent ? 'Less' : 'more...'}
            </button>
        </div>
    );
};

export default ShowMoreButton;
