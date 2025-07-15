import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";

export const ProductsPage = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isAr = i18n.language === 'ar';
  
  // Service cards data (matches mega menu)
  const services = [
    {
      id: 'heavy-equipment-retreading',
      name: t('megaMenu.service1'),
      image: "/images/sub/Heavy Equipment Tire Retreading/DSC_5673.JPG",
      desc: t('megaMenu.serviceCard1Desc'),
    },
    {
      id: 'heavy-transport-retreading',
      name: t('megaMenu.service2'),
      image: "/images/sub/Heavy Transport Tire Retreading/IMG_20190722_132024.jpg",
      desc: t('megaMenu.serviceCard2Desc'),
    },
    {
      id: 'tire-damage-repairs',
      name: t('megaMenu.service3'),
      image: "/images/sub/Tire Damage Repair Services/IMG_20200226_104621.jpg",
      desc: t('megaMenu.serviceCard3Desc'),
    },
    {
      id: 'tire-repair',
      name: t('megaMenu.service4'),
      image: "/images/sub/Tire Repair/DSC_5660.JPG",
      desc: t('megaMenu.serviceCard4Desc'),
    }
  ];

  const handleProductClick = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  return (
    <PageLayout>
      {/* Breadcrumb with photo background */}
      <div className="w-full h-32 flex items-end" style={{
        backgroundImage: "url('images/social/home.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container mx-auto px-4 pb-4">
          <nav className="text-xs sm:text-sm md:text-base text-white flex items-center space-x-2 bg-black/40 rounded px-3 py-2 w-fit">
            <span className="hover:text-[#1B3958] cursor-pointer" onClick={() => window.location.href = '/'}>{t('navigation.home')}</span>
            <span className="mx-1">/</span>
            <span className="text-[#ff0000]">{t('navigation.products')}</span>
          </nav>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}

        {/* Service Cards */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => handleProductClick(service.id)}
              >
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#1B3958]">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                                      <button className="text-[#1B3958] font-medium hover:text-[#2A4A57] transition-colors duration-200">
                    {t('common.learnMore')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};