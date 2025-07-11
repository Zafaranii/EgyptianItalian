import React, { useState } from "react";

export const SlideshowSection = (): JSX.Element => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="w-full max-w-full mb-10 overflow-hidden">
<div className="w-full max-w-full mb-10 overflow-hidden">
  <img
    src="/images/social/home.jpg"
    alt="Egyptian Italian Retreading Company"
    className={`w-full h-auto transition-all duration-700 ${
      imageLoaded ? 'opacity-100' : 'opacity-0'
    }`}
    loading="lazy"
    onLoad={handleImageLoad}
  />
  {!imageLoaded && (
    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-[#1B3958] border-t-transparent rounded-full animate-spin"></div>
    </div>
  )}
</div>
    </div>
  );
}; 