import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const SlideshowSection = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Images from the Home folder
  const slides = [
    {
      src: "/images/Home/DSC_5706.JPG",
      alt: "Egyptian Italian Retreading Company - Heavy Equipment"
    },
    {
      src: "/images/Home/DSC_5660.JPG", 
      alt: "Egyptian Italian Retreading Company - Tire Retreading Process"
    },
    {
      src: "/images/Home/DSC_5658.JPG",
      alt: "Egyptian Italian Retreading Company - Quality Control"
    },
    {
      src: "/images/Home/WhatsApp Image 2025-07-13 at 10.47.28 PM.jpeg",
      alt: "Egyptian Italian Retreading Company - Italian Technology"
    }
  ];

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setImageLoaded(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setImageLoaded(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setImageLoaded(false);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-full max-w-full mb-10 overflow-hidden relative">
      {/* Slideshow Container */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
        {/* Current Slide */}
        <img
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          className={`w-full h-full object-cover transition-all duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={handleImageLoad}
        />

        {/* Loading Spinner */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-[#1B3958] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* Overlay with Company Info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <div className={`absolute bottom-20 text-white ${i18n.language === 'ar' ? 'right-8 left-8' : 'left-8 right-8'}`}>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
              {t('slideshow.companyName')}
            </h2>
            <p className={`text-lg md:text-xl max-w-2xl ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
              {t('slideshow.tagline')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 