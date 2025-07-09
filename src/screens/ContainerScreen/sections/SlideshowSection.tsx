import React, { useState, useEffect, useRef } from "react";

export const SlideshowSection = (): JSX.Element => {
  // Slideshow images and titles
  const slideshowData = [{image: "/images/CD/home.jpg"}];

  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

   const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  }; 

  return (
    <div className="w-full max-w-full mb-10 overflow-x-hidden">
      <div className="relative w-full max-w-full h-[260px] md:h-[450px] lg:h-[600px] overflow-hidden">
        <img
          src={slideshowData[currentSlide].image}
          alt={`Slideshow ${currentSlide + 1}`}
          className="w-full max-w-full h-full object-cover transition-all duration-700 mx-auto"
        />
      </div>
    </div>
  );
}; 