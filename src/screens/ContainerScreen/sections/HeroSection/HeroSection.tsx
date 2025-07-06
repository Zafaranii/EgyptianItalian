// import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Feature cards data
  const featureCards = [
    {
      title: "BRAND AWARENESS",
      description:
        "With a 97% unaided brand awareness among consumers in North America, Turtle Wax® builds customer loyalty and trust.",
      iconSrc: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      iconAlt: "Brand awareness",
    },
    {
      title: "MARKETING SUPPORT",
      description:
        "Gain instant access to proven marketing and advertising materials, promotions, grand opening events, signage, and custom arches.",
      iconSrc: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      iconAlt: "Marketing support",
    },
    {
      title: "INDUSTRY LEADERS",
      description:
        "We provide the best commercial car wash chemicals and technical support in the industry – at a price that sets your business up for success.",
      iconSrc: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      iconAlt: "Industry leaders",
    },
    {
      title: "ECO-FRIENDLY PRODUCTS",
      description:
        "Our parent company, Transchem Group, has helped establish benchmarks for environmental protection across North America.",
      iconSrc: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      iconAlt: "Eco friendly products",
    },
  ];

  // Solution cards data

  return (
    <section 
      className="w-full py-24 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1024&fit=crop')`
      }}
    >
      <div className="container mx-auto px-4">
        {/* Why Choose Turtle Wax Pro Section */}
        <div className="mb-20">
          <h2 className="text-[37px] text-center text-white font-normal [font-family:'Inter',Helvetica] leading-[43.9px] mb-12">
            WHY CHOOSE TURTLE WAX® PRO?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {featureCards.map((card, index) => (
              <Card
                key={index}
                className="rounded-none border-0 bg-black bg-opacity-80 hover:bg-opacity-90 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative h-[300px] flex">
                    <div className="p-6 flex">
                      <div className="w-[150px] h-[150px] self-center rounded-lg overflow-hidden shadow-md">
                        <img
                          className="w-full h-full object-cover"
                          alt={card.iconAlt}
                          src={card.iconSrc}
                        />
                      </div>
                      <div className="ml-8 flex flex-col justify-center">
                        <h3 className="text-[23px] text-white font-normal [font-family:'Inter',Helvetica] leading-[28.1px] mb-6">
                          {card.title}
                        </h3>
                        <p className="text-[17px] text-white font-normal [font-family:'Inter',Helvetica] leading-[27px] mb-6">
                          {card.description}
                        </p>
                        <Button
                          variant="link"
                          className="w-[116px] h-[19px] p-0 text-[#00824a] text-[13px] font-normal [font-family:'Inter',Helvetica] tracking-[0.75px] leading-[19.7px] self-start hover:text-[#00a85c] transition-colors duration-300"
                        >
                          LEARN MORE
                          <div className="w-[11px] h-[11px] ml-2">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                            </svg>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/*  Testimonial Section  */}

      </div>
    </section>
  );
};