import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { PageLayout } from "../components/layout/PageLayout";

export const AboutUsPage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-8 pb-4">
          <nav className="text-sm text-gray-400 flex items-center space-x-2">
            <span className="hover:text-[#00824a] cursor-pointer" onClick={() => navigate('/')}>Home</span>
            <span className="mx-1">/</span>
            <span className="text-[#ff4d4f]">About Us</span>
          </nav>
        </div>
        {/* Header */}
        <div className="bg-[#00824a] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl">Learn about our mission and values</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-[#00824a]">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Egyptian Italian is a leading provider of high-quality car wash chemicals and solutions. 
                With years of experience in the industry, we have built a reputation for excellence, 
                innovation, and customer satisfaction.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our mission is to provide car wash operators with the most effective, efficient, 
                and environmentally friendly cleaning solutions available in the market today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#00824a]">Our Mission</h3>
                <p className="text-gray-700">
                  To deliver innovative car wash solutions that exceed customer expectations 
                  while maintaining the highest standards of quality and environmental responsibility.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#00824a]">Our Vision</h3>
                <p className="text-gray-700">
                  To be the global leader in car wash chemical solutions, recognized for 
                  innovation, quality, and commitment to customer success.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold mb-6 text-[#00824a]">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00824a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✨</span>
                  </div>
                  <h4 className="font-semibold mb-2">Quality</h4>
                  <p className="text-gray-600 text-sm">We never compromise on quality</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00824a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌱</span>
                  </div>
                  <h4 className="font-semibold mb-2">Sustainability</h4>
                  <p className="text-gray-600 text-sm">Environmental responsibility is our priority</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00824a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <h4 className="font-semibold mb-2">Partnership</h4>
                  <p className="text-gray-600 text-sm">We build lasting relationships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};