"use client"

import React from 'react';

interface ProductDescriptionProps {
  description: string;
}

export default function ProductDescription({ description }: ProductDescriptionProps) {
  let showFullDescription = false;

  const toggleDescription = () => {
    showFullDescription = !showFullDescription;
    forceUpdate(); // Trigger a re-render
  };

  // Function to force a re-render when the toggle state changes
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  return (
    <div className="py-6">
      {showFullDescription ? (
        <p>{description}</p>
      ) : (
        <>
          <p style={{ maxHeight: '4.5em', overflow: 'hidden' }}>{description}</p>
          <span className="text-gray-500" onClick={toggleDescription}>
           Learn more...
          </span>
        </>
      )}
    </div>
  );
};

