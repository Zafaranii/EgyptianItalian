import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ChemicalCategoriesSection = (): JSX.Element => {
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

  // Define categories data for mapping
  const categories = [
    {
      name: "PRESOAKS",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "DETERGENTS",
      image: "https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "FINISHING PRODUCTS",
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "WHEEL & TIRE",
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "SPECIALITY",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
  ];

  return (
    <>
      {/* Full-width, truly centered slideshow after navbar, with overflow-x-hidden */}
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
        </div>
      </div>
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto max-w-[1495px]">
          {/* Heading and description */}
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-[37px] text-[#00824a] font-normal leading-[43.9px] mb-4 font-['Inter',Helvetica]">
              COMMERCIAL CAR WASHING CHEMICALS
            </h2>
            <p className="text-[17px] text-[#070c0f] font-normal leading-[27px] font-['Inter',Helvetica]">
              Browse our catalog of innovative and eco-friendly car wash
              chemicals.
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="w-[150px] border-none shadow-none bg-transparent hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <CardContent className="p-0 flex flex-col items-center">
                  <div className="w-[150px] h-[150px] mb-4 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={category.image}
                      alt={`${category.name} icon`}
                      className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                    />
                  </div>
                  <p className="text-[15px] text-[#070c0f] font-normal text-center leading-[21px] font-['Inter',Helvetica] hover:text-[#00824a] transition-colors duration-300">
                    {category.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};