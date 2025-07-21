import React from "react";
import { useTranslation } from "../../../../../node_modules/react-i18next";

export const WhoWeAreSection = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('aboutUsPage.storyTitle')}</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">{t('aboutUsPage.storyText')}</p>
      </div>
    </section>
  );
}; 