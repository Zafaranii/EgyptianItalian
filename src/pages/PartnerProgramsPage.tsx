import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { PageLayout } from "../components/layout/PageLayout";
import { useTranslation } from "../../node_modules/react-i18next";

export const PartnerProgramsPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <PageLayout>
      {/* Breadcrumb with photo background */}
      <div className="w-full h-32 flex items-end" style={{
        backgroundImage: "url('https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200&h=300&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container mx-auto px-4 pb-4">
          <nav className="text-xs sm:text-sm md:text-base text-white flex items-center space-x-2 bg-black/40 rounded px-3 py-2 w-fit">
            <span className="hover:text-[#1B3958] cursor-pointer" onClick={() => navigate('/')}>{t('navigation.home')}</span>
            <span className="mx-1">/</span>
            <span className="text-[#ff0000]">{t('navigation.partnerPrograms')}</span>
          </nav>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-[#1B3958] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Partner Programs</h1>
            <p className="text-xl">Join our network of successful partners</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Distributor Program */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-[#1B3958] to-[#2A4A57] flex items-center justify-center">
                  <span className="text-white text-6xl">🤝</span>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-[#1B3958]">Distributor Program</h2>
                  <p className="text-gray-600 mb-6">
                    Become an authorized distributor of Egyptian Italian products and grow your business 
                    with our comprehensive support system and proven products.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="text-[#1B3958] mr-2">✓</span>
                      Exclusive territory rights
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#1B3958] mr-2">✓</span>
                      Marketing and sales support
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#1B3958] mr-2">✓</span>
                      Technical training and certification
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#1B3958] mr-2">✓</span>
                      Competitive pricing and margins
                    </li>
                  </ul>
                  <Button className="bg-[#1B3958] hover:bg-[#2A4A57] text-white w-full">
                    Apply Now
                  </Button>
                </div>
              </div>

              {/* Operator Program */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-[#1B3958] to-[#2A4A57] flex items-center justify-center">
                  <span className="text-white text-6xl">⚙️</span>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-[#1B3958]">Operator Program</h2>
                  <p className="text-gray-600 mb-6">
                    Join our operator program to access exclusive benefits, training, and support 
                    designed specifically for car wash operators and facility managers.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="text-[#1B3958] mr-2">✓</span>
                      Priority customer support
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#1B3958] mr-2">✓</span>
                      Exclusive product access
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#1B3958] mr-2">✓</span>
                      Performance optimization consulting
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#1B3958] mr-2">✓</span>
                      Volume discounts and incentives
                    </li>
                  </ul>
                  <Button className="bg-[#1B3958] hover:bg-[#2A4A57] text-white w-full">
                    Join Program
                  </Button>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-[#1B3958]">Program Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1B3958] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📈</span>
                  </div>
                  <h3 className="font-semibold mb-2">Increased Revenue</h3>
                  <p className="text-gray-600 text-sm">Grow your business with proven products and support</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1B3958] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎓</span>
                  </div>
                  <h3 className="font-semibold mb-2">Training & Support</h3>
                  <p className="text-gray-600 text-sm">Comprehensive training and ongoing technical support</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1B3958] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌟</span>
                  </div>
                  <h3 className="font-semibold mb-2">Quality Products</h3>
                  <p className="text-gray-600 text-sm">Access to premium, tested car wash solutions</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#1B3958] to-[#2A4A57] rounded-lg p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
              <p className="text-xl mb-6">
                Join hundreds of successful partners who trust Egyptian Italian for their business growth.
              </p>
              <Button className="bg-white text-[#1B3958] hover:bg-gray-100 mr-4">
                Contact Sales Team
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1B3958]">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};