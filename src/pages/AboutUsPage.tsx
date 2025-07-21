import React, { useState } from "react";
import { useTranslation } from "../../node_modules/react-i18next";
import { PageLayout } from "../components/layout/PageLayout";
import { MdDonutLarge } from "react-icons/md";
import { FaLeaf, FaHandshake } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";

export const AboutUsPage = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const values = t('aboutUsPage.values', { returnObjects: true }) as Array<{icon: string, title: string, desc: string}>;

  // Map each value to its icon
  const iconMap = [
    <MdDonutLarge size={36} color="#fff" />,        // Quality (tire-like)
    <GiGearHammer size={36} color="#fff" />,        // Innovation
    <FaLeaf size={36} color="#fff" />,              // Sustainability
    <FaHandshake size={36} color="#fff" />          // Partnership
  ];

  return (
    <PageLayout>
      {/* Breadcrumb with photo background  */}
      <div className="w-full h-32 flex items-end" style={{
        backgroundImage: "url('images/social/home.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container mx-auto px-4 pb-4">
          <nav className="text-xs sm:text-sm md:text-base text-white flex items-center space-x-2 bg-black/40 rounded px-3 py-2 w-fit">
            <span className="hover:text-[#1B3958] cursor-pointer" onClick={() => window.location.href = '/'}>{t('navigation.home')}</span>
            <span className="mx-1">/</span>
            <span className="text-[#ff0000]">{t('navigation.aboutUs')}</span>
          </nav>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-2 text-center">{t('aboutUsPage.heading')}</h1>
        <div className="w-16 h-1 bg-[#1B3958] rounded my-8"></div>

        {/* Our Story Section */}
        <div className="w-full max-w-4xl mb-12 mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">{t('aboutUsPage.storyTitle')}</h2>
          <p className="text-gray-700 text-lg text-center">{t('aboutUsPage.storyText')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl mb-12 mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2 text-[#1B3958]">{t('aboutUsPage.missionTitle')}</h2>
            <p className="text-gray-700 text-center">{t('aboutUsPage.missionText')}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2 text-[#1B3958]">{t('aboutUsPage.visionTitle')}</h2>
            <p className="text-gray-700 text-center">{t('aboutUsPage.visionText')}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};