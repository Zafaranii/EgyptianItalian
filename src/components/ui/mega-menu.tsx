import React from "react";
import { useTranslation } from "../../../node_modules/react-i18next";
import { useNavigate } from "react-router-dom";
import { FaTools, FaTruck, FaWrench, FaFlag, FaCog } from "react-icons/fa";

interface MenuData {
  sections: {
    title: string;
    items: {
      name: string;
      image: string;
      icon: JSX.Element;
      link: string;
      desc: string;
    }[];
  }[];
  categories: {
    title: string;
    items: string[];
  }[];
}

interface MegaMenuProps {
  isVisible: boolean;
  hoveredItem: string | null;
}

export const MegaMenu = ({ isVisible, hoveredItem }: MegaMenuProps): JSX.Element => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Tire retreading services data
  const productCategories: Record<string, MenuData> = {
    [t('navigation.products')]: {
      sections: [
        {
          title: t('megaMenu.productsSection'),
          items: [
            {
              name: t('megaMenu.service1'),
              image: "/images/sub/Heavy Equipment Tire Retreading/DSC_5673.JPG",
              icon: <FaTools />,
              link: "/products/heavy-equipment-retreading",
              desc: t('megaMenu.serviceCard1Desc'),
            },
            {
              name: t('megaMenu.service2'),
              image: "/images/sub/Heavy Transport Tire Retreading/IMG_20190722_132024.jpg",
              icon: <FaTruck />,
              link: "/products/heavy-transport-retreading",
              desc: t('megaMenu.serviceCard2Desc'),
            },
            {
              name: t('megaMenu.service3'),
              image: "/images/sub/Tire Damage Repair Services/IMG_20200226_104621.jpg",
              icon: <FaWrench />,
              link: "/products/tire-damage-repairs",
              desc: t('megaMenu.serviceCard3Desc'),
            },
            {
              name: t('megaMenu.service4'),
              image: "/images/sub/Tire Repair/DSC_5660.JPG",
              icon: <FaWrench />,
              link: "/products/tire-repair",
              desc: t('megaMenu.serviceCard4Desc'),
            }
          ],
        },
      ],
      categories: [],
    },
  };

  const currentMenu = hoveredItem && productCategories[hoveredItem as keyof typeof productCategories];

  const handleItemClick = (link: string) => {
    navigate(link);
  };

  if (!isVisible || !currentMenu) {
    return <></>;
  }

  return (
    <div 
      className={`absolute top-[147px] w-full bg-white shadow-2xl border-t-4 border-[#1B3958] z-50 min-h-[300px] ${i18n.language === 'ar' ? 'right-0' : 'left-0'}`}
    >
      <div className="max-w-[1495px] mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Main content */}
          <div className="col-span-12">
            {/* SEE ALL CAR WASH CHEMICALS section */}
            {hoveredItem === "PRODUCTS" && (
              <div className="flex gap-8 mb-8">
                <div className="w-[270px] h-[400px] bg-gradient-to-br from-green-800 to-green-600 rounded-lg p-6 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-4 leading-tight">
                      SEE ALL<br />
                      CAR WASH<br />
                      CHEMICALS
                    </h2>
                    <div className="absolute bottom-0 right-0 w-20 h-20 opacity-30">
                      <div className="w-full h-full bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                      backgroundImage: "url('https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=270&h=400&fit=crop')"
                    }}
                  ></div>
                </div>

                {/* Product sections */}
                <div className="flex-1 space-y-6">
                  {currentMenu.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className="text-sm font-medium text-gray-600 mb-3 tracking-wider">
                        {section.title}
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        {section.items.map((item, itemIndex) => (
                          <div 
                            key={itemIndex}
                            className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                            onClick={() => handleItemClick(item.link)}
                          >
                            <div className="relative h-24 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
                              <img 
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/20"></div>
                              <div className="absolute top-2 right-2 text-white text-2xl">
                                {item.icon}
                              </div>
                              <div className="absolute bottom-2 left-2 right-2">
                                <h4 className="text-white text-xs font-bold leading-tight">
                                  {item.name}
                                </h4>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* For other menu items */}
            {hoveredItem !== "PRODUCTS" && (
              <div className="space-y-6">
                {currentMenu.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h3 className="text-sm font-medium text-gray-600 mb-4 tracking-wider">
                      {section.title}
                    </h3>
                    <div className="grid grid-cols-4 gap-4">
                      {section.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                          onClick={() => handleItemClick(item.link)}
                        >
                          <div className="relative h-32 overflow-hidden">
                            <img 
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute top-2 right-2 text-white text-xl">
                              {item.icon}
                            </div>
                            <div className="absolute bottom-2 left-2 right-2">
                              <h4 className="text-white text-sm font-semibold leading-tight">
                                {item.name}
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>


        </div>
      </div>
    </div>
  );
};
