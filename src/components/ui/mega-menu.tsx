import React from "react";
import { useTranslation } from "react-i18next";
import { FaTools, FaTruck, FaWrench, FaFlag, FaCog } from "react-icons/fa";

interface MegaMenuProps {
  isVisible: boolean;
  hoveredItem: string | null;
}

interface MenuItem {
  name: string;
  image: string;
  icon: React.ReactNode;
  link: string;
  desc?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface CategoryItem {
  title: string;
  items: string[];
}

interface MenuData {
  sections: MenuSection[];
  categories?: CategoryItem[];
}

export const MegaMenu = ({ isVisible, hoveredItem }: MegaMenuProps): JSX.Element => {
  const { t, i18n } = useTranslation();

  // Tire retreading services data
  const productCategories: Record<string, MenuData> = {
    [t('navigation.products')]: {
      sections: [
        {
          title: t('megaMenu.productsSection'),
          items: [
            {
              name: t('megaMenu.service1'),
              image: "/images/CD/seven.JPG",
              icon: <FaTools />,
              link: "/products/heavy-equipment-retreading",
              desc: t('megaMenu.serviceCard1Desc'),
            },
            {
              name: t('megaMenu.service2'),
              image: "/images/CD/eight.JPG",
              icon: <FaTruck />,
              link: "/products/heavy-transport-retreading",
              desc: t('megaMenu.serviceCard2Desc'),
            },
            {
              name: t('megaMenu.service3'),
              image: "/images/CD/nine.JPG",
              icon: <FaWrench />,
              link: "/products/tire-damage-repairs",
              desc: t('megaMenu.serviceCard3Desc'),
            },
            {
              name: t('megaMenu.service4'),
              image: "/images/CD/ten.JPG",
              icon: <FaFlag />,
              link: "/products/italian-technology",
              desc: t('megaMenu.serviceCard4Desc'),
            },
            {
              name: t('megaMenu.service5'),
              image: "/images/CD/eleven.JPG",
              icon: <FaCog />,
              link: "/products/customized-retreading",
              desc: "",
            },
          ],
        },
      ],
      categories: [
        {
          title: t('megaMenu.sidebarTitle'),
          items: [
            t('megaMenu.sidebar1'),
            t('megaMenu.sidebar2'),
            t('megaMenu.sidebar3'),
            t('megaMenu.sidebar4'),
            t('megaMenu.sidebar5'),
          ],
        },
      ],
    },
  };

  const currentMenu = hoveredItem && productCategories[hoveredItem as keyof typeof productCategories];

  const handleItemClick = (link: string) => {
    window.location.href = link;
  };

  if (!isVisible || !currentMenu) {
    return <></>;
  }

  return (
    <div 
      className={`absolute top-[147px] w-full bg-white shadow-2xl border-t-4 border-[#00824a] z-50 min-h-[600px] ${i18n.language === 'ar' ? 'right-0' : 'left-0'}`}
    >
      <div className="max-w-[1495px] mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left side - Featured products/main content */}
          <div className="col-span-8">
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

          {/* Right side - Categories */}
          <div className="col-span-4 bg-gray-50 rounded-lg p-6">
            {hoveredItem === "PRODUCTS" && 'categories' in currentMenu && currentMenu.categories && (
              <>
                <h3 className="text-sm font-bold text-gray-800 mb-6 tracking-wider">
                  CAR WASH CHEMICAL CATEGORIES
                </h3>
                <div className="space-y-6">
                  {currentMenu.categories.map((category: CategoryItem, categoryIndex: number) => (
                    <div key={categoryIndex}>
                      <h4 className="text-sm font-semibold text-[#00824a] mb-3 tracking-wider">
                        {category.title}
                      </h4>
                      <div className="space-y-2">
                        {category.items.map((item: string, itemIndex: number) => (
                          <div 
                            key={itemIndex}
                            className="text-sm text-gray-600 hover:text-[#00824a] cursor-pointer transition-colors duration-200 pl-2 border-l-2 border-transparent hover:border-[#00824a]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {/* For other menu items, show related info */}
            {/* Quick Access section removed */}
          </div>
        </div>
      </div>
    </div>
  );
};
