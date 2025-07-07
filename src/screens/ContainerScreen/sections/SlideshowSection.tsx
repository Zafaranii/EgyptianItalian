import React, { useState, useEffect, useRef } from "react";

export const SlideshowSection = (): JSX.Element => {
  // Slideshow images and titles
  const slideshowData = [
    {
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1200&h=500&fit=crop",
      title: "TRUE-VUE 2 CHEMICAL MANAGEMENT",
    },
    {
      image: "https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg?auto=compress&cs=tinysrgb&w=1200&h=500&fit=crop",
      title: "TURTLE WAX PRO COMPLETE",
    },
    {
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1200&h=500&fit=crop",
      title: '"TX4 IS AWESOME!"',
    },
    {
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=500&fit=crop",
      title: "ECO-FRIENDLY SOLUTIONS",
    },
    {
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=500&fit=crop",
      title: "INNOVATIVE TECHNOLOGY",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-slide every 3 seconds, reset on manual change
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowData.length);
    }, 3000);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentSlide, slideshowData.length]);

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
        {/* Thumbnails at bottom left, flex-wrap and max-w-full to prevent overflow */}
        <div className="absolute bottom-4 left-0 ml-2 flex gap-3 flex-wrap max-w-full z-10">
          {slideshowData.map((item, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`relative w-20 h-10 md:w-28 md:h-16 rounded-md overflow-hidden shadow-lg transition-all duration-200 group focus:outline-none ${
                currentSlide === idx ? 'ring-2 ring-[#00824a]' : ''
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <img
                src={item.image}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover brightness-50 group-hover:brightness-75"
              />
              {/* Overlay (no text) */}
              <div className="absolute inset-0 bg-black/30" />
              {/* Underline for active */}
              {currentSlide === idx && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#dd3c27]" />
              )}
            </button>
          ))}
        </div>
        {/* Slide title overlay */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/60 px-6 py-2 rounded text-white text-lg font-semibold shadow-lg max-w-[90vw] text-center">
          {slideshowData[currentSlide].title}
        </div>
      </div>
    </div>
  );
}; 