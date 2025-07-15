import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PageLayout } from "../components/layout/PageLayout";
import { Button } from "../components/ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ProductData {
  id: string;
  title: string;
  description: string;
  images: string[];
  features: string[];
  specifications?: Record<string, string>;
}

export const ProductDetailPage = (): JSX.Element => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Product data mapping
  const productData: Record<string, ProductData> = {
    'heavy-equipment-retreading': {
      id: 'heavy-equipment-retreading',
      title: t('megaMenu.service1'),
      description: t('megaMenu.serviceCard1Desc'),
      images: [
        '/images/sub/Heavy Equipment Tire Retreading/DSC_5673.JPG',
        '/images/sub/Heavy Equipment Tire Retreading/DSC_5669.JPG',
        '/images/sub/Heavy Equipment Tire Retreading/1519821188681.jpg'
      ],
      features: t('productDetail.features.heavyEquipment', { returnObjects: true }) as string[]
    },
    'heavy-transport-retreading': {
      id: 'heavy-transport-retreading',
      title: t('megaMenu.service2'),
      description: t('megaMenu.serviceCard2Desc'),
      images: [
        '/images/sub/Heavy Transport Tire Retreading/IMG_20190722_132024.jpg',
        '/images/sub/Heavy Transport Tire Retreading/IMG_20190722_131920.jpg'
      ],
      features: t('productDetail.features.heavyTransport', { returnObjects: true }) as string[]
    },
    'tire-damage-repairs': {
      id: 'tire-damage-repairs',
      title: t('megaMenu.service3'),
      description: t('megaMenu.serviceCard3Desc'),
      images: [
        '/images/sub/Tire Damage Repair Services/IMG_20200226_104621.jpg',
        '/images/sub/Tire Damage Repair Services/1562750072627.jpg'
      ],
      features: t('productDetail.features.tireDamageRepairs', { returnObjects: true }) as string[]
    },
    'tire-repair': {
      id: 'tire-repair',
      title: t('megaMenu.service4'),
      description: t('megaMenu.serviceCard4Desc'),
      images: [
        '/images/sub/Tire Repair/DSC_5660.JPG'
      ],
      features: t('productDetail.features.tireRepair', { returnObjects: true }) as string[]
    },
    'customized-retreading': {
      id: 'customized-retreading',
      title: t('megaMenu.service5'),
      description: 'Tailored retreading solutions to meet unique client needs and applications.',
      images: [
        '/images/CD/eleven.JPG',
        '/images/CD/seven.JPG',
        '/images/CD/eight.JPG',
        '/images/CD/nine.JPG'
      ],
      features: t('productDetail.features.customizedRetreading', { returnObjects: true }) as string[]
    }
  };

  const product = productData[productId || ''];

  useEffect(() => {
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (!product) {
    return (
      <PageLayout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{t('productDetail.productNotFound')}</h1>
            <Button onClick={() => navigate('/products')} className="bg-[#1B3958] hover:bg-[#2A4A57]">
              {t('productDetail.backToProducts')}
            </Button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Breadcrumb */}
      <div className="w-full h-32 flex items-end" style={{
        backgroundImage: "url('/images/social/breadcrumn.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container mx-auto px-4 pb-4">
          <nav className="text-sm text-white flex items-center space-x-2 bg-black/40 rounded px-3 py-2 w-fit">
            <span className="hover:text-[#1B3958] cursor-pointer" onClick={() => navigate('/')}>
              {t('navigation.home')}
            </span>
            <span className="mx-1">/</span>
            <span className="hover:text-[#1B3958] cursor-pointer" onClick={() => navigate('/products')}>
              {t('navigation.products')}
            </span>
            <span className="mx-1">/</span>
            <span className="text-[#ff0000]">{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Slideshow */}
              <div className="space-y-6">
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-96">
                    <img
                      src={product.images[currentImageIndex]}
                      alt={`${product.title} - Image ${currentImageIndex + 1}`}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={handleImageLoad}
                    />
                    {!imageLoaded && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-[#1B3958] border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                    >
                      <FaArrowLeft />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                  
                  {/* Thumbnail Navigation */}
                  <div className="p-4 bg-gray-50">
                    <div className="flex space-x-2 overflow-x-auto">
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                            index === currentImageIndex 
                                                          ? 'border-[#1B3958]' 
                            : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
                  <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('productDetail.keyFeatures')}</h2>
                  <ul
                    className={`space-y-4 list-disc ${isAr ? "pr-8" : "pl-8"}`}
                    dir={isAr ? "rtl" : "ltr"}
                  >
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                {product.specifications && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('productDetail.specifications')}</h2>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                          <span className="font-medium text-gray-700">{key}</span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                <div className="pt-6">
                  <Button 
                    onClick={() => navigate('/contact')}
                    className="w-full bg-[#1B3958] hover:bg-[#2A4A57] text-white py-3 text-lg"
                  >
                    {t('productDetail.getQuote')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}; 