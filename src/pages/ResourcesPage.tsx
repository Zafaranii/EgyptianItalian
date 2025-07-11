import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { PageLayout } from "../components/layout/PageLayout";
import { useTranslation } from "react-i18next";

export const ResourcesPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
            <span className="hover:text-[#1B3958] cursor-pointer" onClick={() => navigate('/')}>{t('navigation.home')}</span>
            <span className="mx-1">/</span>
            <span className="text-[#ff0000]">{t('navigation.resources')}</span>
          </nav>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-[#1B3958] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Resources</h1>
            <p className="text-xl">Access our comprehensive library of resources</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Technical Documentation */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 bg-gradient-to-br from-[#1B3958] to-[#2A4A57] flex items-center justify-center">
              <span className="text-white text-4xl">📚</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[#1B3958]">Technical Documentation</h3>
                  <p className="text-gray-600 mb-4">Comprehensive guides and technical specifications for all our products.</p>
                  <Button className="bg-[#1B3958] hover:bg-[#2A4A57] text-white">
                    View Docs
                  </Button>
                </div>
              </div>

              {/* Training Materials */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-[#1B3958] to-[#2A4A57] flex items-center justify-center">
                  <span className="text-white text-4xl">🎓</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#1B3958]">Training Materials</h3>
                  <p className="text-gray-600 mb-4">Educational resources to help you maximize the effectiveness of our products.</p>
                  <Button className="bg-[#1B3958] hover:bg-[#2A4A57] text-white">
                    Start Learning
                  </Button>
                </div>
              </div>

              {/* Video Library */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-[#1B3958] to-[#2A4A57] flex items-center justify-center">
                  <span className="text-white text-4xl">🎥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#1B3958]">Video Library</h3>
                  <p className="text-gray-600 mb-4">Visual guides and demonstrations for product usage and best practices.</p>
                  <Button className="bg-[#1B3958] hover:bg-[#2A4A57] text-white">
                    Watch Videos
                  </Button>
                </div>
              </div>

              {/* SDS Database */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-[#1B3958] to-[#2A4A57] flex items-center justify-center">
                  <span className="text-white text-4xl">🛡️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#1B3958]">SDS Database</h3>
                  <p className="text-gray-600 mb-4">Safety Data Sheets for all our chemical products and solutions.</p>
                  <Button className="bg-[#1B3958] hover:bg-[#2A4A57] text-white">
                    Access SDS
                  </Button>
                </div>
              </div>

              {/* Best Practices */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-[#1B3958] to-[#2A4A57] flex items-center justify-center">
                  <span className="text-white text-4xl">✨</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#1B3958]">Best Practices</h3>
                  <p className="text-gray-600 mb-4">Industry best practices and tips for optimal car wash operations.</p>
                  <Button className="bg-[#1B3958] hover:bg-[#2A4A57] text-white">
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Case Studies */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-[#1B3958] to-[#2A4A57] flex items-center justify-center">
                  <span className="text-white text-4xl">📊</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#1B3958]">Case Studies</h3>
                  <p className="text-gray-600 mb-4">Real-world examples of successful implementations and results.</p>
                  <Button className="bg-[#1B3958] hover:bg-[#2A4A57] text-white">
                    Read Cases
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