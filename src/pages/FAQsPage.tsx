import React, { useState } from "react";
import { useTranslation } from "../../node_modules/react-i18next";
import { PageLayout } from "../components/layout/PageLayout";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const FAQsPage = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const qaData = t('qa.questions', { returnObjects: true }) as Array<{question: string, answer: string}>;
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
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
            <span className="text-[#ff0000]">{t('navigation.faqs')}</span>
          </nav>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-2 text-center">{t('qa.title')}</h1>
        <div className="w-16 h-1 bg-[#1B3958] rounded my-8"></div>

        {/* Introduction Section */}
        <div className="w-full max-w-4xl mb-12 mx-auto">
          <p className="text-gray-700 text-lg text-center leading-relaxed">
            {t('faqs.introduction')}
          </p>
        </div>

        {/* Q&A Section */}
        <div className="w-full max-w-4xl">
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

        {/* Contact Section */}
        <div className="w-full max-w-4xl mt-16">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#1B3958]">{t('faqs.contactTitle')}</h2>
            <p className="text-gray-700 mb-6">{t('faqs.contactText')}</p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-[#1B3958] text-white px-8 py-3 rounded-lg hover:bg-[#1B3958]/90 transition-colors duration-200 font-semibold"
            >
              {t('faqs.contactButton')}
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}; 