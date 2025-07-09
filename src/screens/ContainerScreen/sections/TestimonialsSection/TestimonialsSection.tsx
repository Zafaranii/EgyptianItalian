// import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const TestimonialsSection = (): JSX.Element => {
  // Data for the bottom cards
  const bottomCards = [
    {
      id: 1,
      content: "TRUE-VUE 2  CHEMICAL  MANAGEMENT",
      isImage: false,
    },
    {
      id: 2,
      content: "",
      isImage: true,
      imageSrc: "https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg?auto=compress&cs=tinysrgb&w=157&h=82&fit=crop",
    },
    {
      id: 3,
      content: '"TX4 IS  AWESOME!"',
      isImage: false,
    },
  ];

  return (
    <section 
      className="relative w-full h-[1024px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1024&fit=crop')`
      }}
    >
      <div className="relative h-full">
        {/* Main content area */}
        <div className="relative w-[550px] h-[360px] top-[383px] left-[212px]">
          <div className="absolute top-[242px] left-0 font-normal text-white text-[17px] leading-[27px]">
            A next generation presoak technology. Turtle Wax® Pro One Shot{" "}
            <br />
            Presoak is 3X more effective than traditional presoaks.
          </div>

          <Button
            variant="outline"
            className="absolute w-[137px] h-11 top-[316px] left-0 bg-[#ffffffbf] border border-solid border-white rounded-none hover:bg-white hover:text-[#00824a] transition-colors duration-300"
          >
            <span className="font-normal text-[#00824a] text-[13px] text-center tracking-[0.75px] leading-[19.7px]">
              LEARN MORE
            </span>
          </Button>
        </div>

        {/* Product showcase image */}
        <div className="absolute top-[200px] right-[200px] w-[400px] h-[400px] rounded-lg overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
            alt="Turtle Wax Pro Product"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom cards */}
        <div className="absolute w-[500px] h-[82px] top-[848px] left-[212px] flex justify-center">
          {/* Only render the image card, not the text boxes */}
          <div className="w-[157px] h-[82px] rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-full object-cover"
              alt="Container"
              src="https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg?auto=compress&cs=tinysrgb&w=157&h=82&fit=crop"
            />
          </div>
        </div>
      </div>
    </section>
  );
};