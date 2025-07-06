import React from "react";
import { useTranslation } from "react-i18next";

interface MegaMenuProps {
  isVisible: boolean;
  hoveredItem: string | null;
}

interface MenuItem {
  name: string;
  image: string;
  icon: string;
  link: string;
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

  // Product categories data based on your screenshot - with bilingual support
  const productCategories: Record<string, MenuData> = {
    [t('navigation.products')]: {
      sections: [
        {
          title: i18n.language === 'ar' ? "أنظمة كيماويات غسيل السيارات تيتانيوم" : "TITANIUM CAR WASH CHEMICAL SYSTEMS",
          items: [
            {
              name: "TITANIUM TX4",
              image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
              icon: "🚗",
              link: "/products/titanium-tx4"
            },
            {
              name: i18n.language === 'ar' ? "نظام استرداد تيتانيوم" : "TITANIUM RECLAIM SYSTEM", 
              image: "https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
              icon: "♻️",
              link: "/products/titanium-reclaim"
            }
          ]
        },
        {
          title: i18n.language === 'ar' ? "كيماويات غسيل السيارات المتميزة" : "PREMIUM CAR WASH CHEMICALS",
          items: [
            {
              name: i18n.language === 'ar' ? "طلاء صلب فائق" : "SUPER HARD SHELL FINISH",
              image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
              icon: "✨",
              link: "/products/super-hard-shell"
            },
            {
              name: i18n.language === 'ar' ? "حماية النظافة النارية" : "FIRE CLEAN PROTECT",
              image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
              icon: "🔥",
              link: "/products/fire-clean"
            },
            {
              name: i18n.language === 'ar' ? "لمعان فوري جليد+" : "ICE+ INSTANT SHINE",
              image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
              icon: "❄️",
              link: "/products/ice-instant-shine"
            }
          ]
        },
        {
          title: i18n.language === 'ar' ? "كيماويات غسيل السيارات الأخرى" : "OTHER CAR WASH CHEMICALS",
          items: [
            {
              name: i18n.language === 'ar' ? "نقع مسبق لقطة واحدة" : "ONESHOT PRESOAK",
              image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
              icon: "💧",
              link: "/products/oneshot-presoak"
            },
            {
              name: i18n.language === 'ar' ? "تلميع متوهج" : "BLAZIN' GLAZE",
              image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
              icon: "🌟",
              link: "/products/blazin-glaze"
            },
            {
              name: i18n.language === 'ar' ? "شمع التلميع الثلاثي" : "TRIPLE SHINE WAX",
              image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
              icon: "🏆",
              link: "/products/triple-shine-wax"
            },
            {
              name: i18n.language === 'ar' ? "تلميع التجفيف الثلاثي" : "TRIPLE DRY POLISH",
              image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
              icon: "🌪️",
              link: "/products/triple-dry-polish"
            }
          ]
        }
      ],
      categories: [
        {
          title: i18n.language === 'ar' ? "النقع المسبق" : "PRESOAKS",
          items: i18n.language === 'ar' 
            ? ["النقع المسبق عالي الأس الهيدروجيني", "النقع المسبق منخفض الأس الهيدروجيني", "الاحتكاك", "بدون لمس"]
            : ["High pH Presoaks", "Low pH Presoaks", "Friction", "Touchless"]
        },
        {
          title: i18n.language === 'ar' ? "المنظفات" : "DETERGENTS", 
          items: i18n.language === 'ar'
            ? ["المنظفات عالية الأس الهيدروجيني", "المنظفات منخفضة الأس الهيدروجيني", "المنظفات المحايدة", "ملونة", "عديمة اللون", "الاحتكاك", "بدون لمس"]
            : ["High pH Detergents", "Low pH Detergents", "Neutral pH Detergents", "Colored", "Colorless", "Friction", "Touchless"]
        },
        {
          title: i18n.language === 'ar' ? "منتجات التشطيب" : "FINISHING PRODUCTS",
          items: i18n.language === 'ar'
            ? ["المواد المانعة للتسرب", "المواد الواقية", "عوامل التجفيف", "شمع الكارنوبا", "السيراميك"]
            : ["Sealants", "Protectants", "Drying Agents", "Carnauba Wax", "Ceramics"]
        },
        {
          title: i18n.language === 'ar' ? "العجلات والإطارات" : "WHEEL & TIRE",
          items: i18n.language === 'ar'
            ? ["منظفات الإطارات", "تلميع الإطارات"]
            : ["Tire Cleaners", "Tire Dressings"]
        },
        {
          title: i18n.language === 'ar' ? "المنتجات المتخصصة" : "SPECIALITY",
          items: i18n.language === 'ar'
            ? ["مزيلات الحشرات", "المنظفات اليدوية", "معززات النقع المسبق", "مثبطات الصدأ"]
            : ["Bug Removers", "Manual Cleaners", "Pre-Soak Boosts", "Rust Inhibitors"]
        }
      ]
    },
    [t('navigation.resources')]: {
      sections: [
        {
          title: i18n.language === 'ar' ? "الموارد التقنية" : "TECHNICAL RESOURCES",
          items: [
            {
              name: i18n.language === 'ar' ? "الوثائق التقنية" : "Technical Documentation",
              image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
              icon: "📚",
              link: "/resources/technical-docs"
            },
            {
              name: i18n.language === 'ar' ? "قاعدة بيانات SDS" : "SDS Database",
              image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
              icon: "🛡️",
              link: "/resources/sds-database"
            }
          ]
        },
        {
          title: i18n.language === 'ar' ? "التدريب والدعم" : "TRAINING & SUPPORT",
          items: [
            {
              name: i18n.language === 'ar' ? "المواد التدريبية" : "Training Materials",
              image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
              icon: "🎓",
              link: "/resources/training"
            },
            {
              name: i18n.language === 'ar' ? "مكتبة الفيديو" : "Video Library",
              image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
              icon: "🎥",
              link: "/resources/videos"
            }
          ]
        }
      ]
    },
    [t('navigation.partnerPrograms')]: {
      sections: [
        {
          title: i18n.language === 'ar' ? "فرص الشراكة" : "PARTNERSHIP OPPORTUNITIES",
          items: [
            {
              name: i18n.language === 'ar' ? "برنامج الموزعين" : "Distributor Program",
              image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
              icon: "🤝",
              link: "/partner-programs/distributor"
            },
            {
              name: i18n.language === 'ar' ? "برنامج المشغلين" : "Operator Program",
              image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
              icon: "⚙️",
              link: "/partner-programs/operator"
            }
          ]
        }
      ]
    }
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
            {hoveredItem !== "PRODUCTS" && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-gray-800 mb-4 tracking-wider">
                  QUICK ACCESS
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded border hover:border-[#00824a] cursor-pointer transition-colors duration-200">
                    <div className="text-sm font-medium text-[#00824a]">Contact Support</div>
                    <div className="text-xs text-gray-600">Get help from our experts</div>
                  </div>
                  <div className="p-3 bg-white rounded border hover:border-[#00824a] cursor-pointer transition-colors duration-200">
                    <div className="text-sm font-medium text-[#00824a]">Download Catalogs</div>
                    <div className="text-xs text-gray-600">Browse our product catalogs</div>
                  </div>
                  <div className="p-3 bg-white rounded border hover:border-[#00824a] cursor-pointer transition-colors duration-200">
                    <div className="text-sm font-medium text-[#00824a]">Schedule Training</div>
                    <div className="text-xs text-gray-600">Book a training session</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
