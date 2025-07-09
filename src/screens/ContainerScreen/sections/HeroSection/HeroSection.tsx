import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegHandshake, FaLeaf, FaMoneyBillWave } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";
import { MdVerified, MdSpeed } from "react-icons/md";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  // Why Choose Us feature cards data
  const features = [
    {
      icon: <FaRegHandshake size={36} color="#00824a" />,
      title: t('whyChoose.experienceTitle'),
      desc: t('whyChoose.experienceDesc'),
    },
    {
      icon: <GiGearHammer size={36} color="#00824a" />,
      title: t('whyChoose.italianTechTitle'),
      desc: t('whyChoose.italianTechDesc'),
    },
    {
      icon: <FaMoneyBillWave size={36} color="#00824a" />,
      title: t('whyChoose.costSavingsTitle'),
      desc: t('whyChoose.costSavingsDesc'),
    },
    {
      icon: <FaLeaf size={36} color="#00824a" />,
      title: t('whyChoose.environmentTitle'),
      desc: t('whyChoose.environmentDesc'),
    },
    {
      icon: <MdVerified size={36} color="#00824a" />,
      title: t('whyChoose.qualityTitle'),
      desc: t('whyChoose.qualityDesc'),
    },
    {
      icon: <MdSpeed size={36} color="#00824a" />,
      title: t('whyChoose.fastTurnaroundTitle'),
      desc: t('whyChoose.fastTurnaroundDesc'),
    },
  ];

  return (
    <section className="w-full py-24 relative bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/CD/one.JPG')`
    }}>
      <div className="container mx-auto px-4">
        <h2 className="text-[37px] text-center text-white font-normal [font-family:'Inter',Helvetica] leading-[43.9px] mb-12">
          {t('whyChoose.heading')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="rounded-lg border-0 bg-black bg-opacity-80 hover:bg-opacity-90 transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-white text-base mb-2">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};