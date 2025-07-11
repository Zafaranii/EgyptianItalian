import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { PageLayout } from "../components/layout/PageLayout";
import { MdDonutLarge } from "react-icons/md";
import { FaLeaf, FaHandshake, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";

export const AboutUsPage = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const values = t('aboutUsPage.values', { returnObjects: true }) as Array<{icon: string, title: string, desc: string}>;
  const qaData = t('qa.questions', { returnObjects: true }) as Array<{question: string, answer: string}>;
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  // Map each value to its icon
  const iconMap = [
    <MdDonutLarge size={36} color="#fff" />,        // Quality (tire-like)
    <GiGearHammer size={36} color="#fff" />,        // Innovation
    <FaLeaf size={36} color="#fff" />,              // Sustainability
    <FaHandshake size={36} color="#fff" />          // Partnership
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

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

        <div className="w-full max-w-5xl">
          <h2 className="text-2xl font-bold mb-6 text-center">{t('aboutUsPage.valuesTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1B3958] mb-4">
                  {iconMap[idx]}
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Q&A Section */}
        <div className="w-full max-w-4xl mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1B3958]">{t('qa.title')}</h2>
          <div className="space-y-4">
            {qaData.map((qa, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-[#1B3958] pr-4">{qa.question}</h3>
                  <div className="flex-shrink-0">
                    {openQuestion === index ? (
                      <FaChevronUp className="text-[#1B3958]" />
                    ) : (
                      <FaChevronDown className="text-[#1B3958]" />
                    )}
                  </div>
                </button>
                {openQuestion === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">{qa.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};