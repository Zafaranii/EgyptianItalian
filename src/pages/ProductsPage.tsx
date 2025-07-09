import React from "react";
import { useTranslation } from "react-i18next";
import { PageLayout } from "../components/layout/PageLayout";

export const ProductsPage = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  // Service cards data (matches mega menu)
  const services = [
    {
      name: t('megaMenu.service1'),
      image: "/images/CD/seven.JPG",
      desc: t('megaMenu.serviceCard1Desc'),
    },
    {
      name: t('megaMenu.service2'),
      image: "/images/CD/eight.JPG",
      desc: t('megaMenu.serviceCard2Desc'),
    },
    {
      name: t('megaMenu.service3'),
      image: "/images/CD/nine.JPG",
      desc: t('megaMenu.serviceCard3Desc'),
    },
    {
      name: t('megaMenu.service4'),
      image: "/images/CD/ten.JPG",
      desc: t('megaMenu.serviceCard4Desc'),
    },
    {
      name: t('megaMenu.service5'),
      image: "/images/CD/eleven.JPG",
      desc: "",
    },
  ];

  return (
    <PageLayout>
      {/* Breadcrumb with photo background */}
      <div className="w-full h-32 flex items-end" style={{
        backgroundImage: "url('/images/CD/home.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container mx-auto px-4 pb-4">
          <nav className="text-xs sm:text-sm md:text-base text-white flex items-center space-x-2 bg-black/40 rounded px-3 py-2 w-fit">
            <span className="hover:text-[#00b67a] cursor-pointer" onClick={() => window.location.href = '/'}>{t('navigation.home')}</span>
            <span className="mx-1">/</span>
            <span className="text-[#ffeb3b]">{t('navigation.products')}</span>
          </nav>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}

        {/* Service Cards */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#00824a]">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};