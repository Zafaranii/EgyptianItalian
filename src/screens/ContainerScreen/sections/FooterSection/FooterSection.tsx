import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

export const FooterSection = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const navigate = useNavigate();

  // Quick links
  const links = [
    { to: "/", label: t('footer.home') },
    { to: "/about-us", label: t('footer.aboutUs') },
    { to: "/products", label: t('footer.products') },
    { to: "/services", label: t('footer.services') },
    { to: "/partner-programs", label: t('footer.partnerPrograms') },
    { to: "/order-online", label: t('footer.uploadCv') },
    { to: "/contact", label: t('footer.contact') },
  ];

  const handleLinkClick = (to: string) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181818] text-white pt-16 pb-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start pb-8 md:pb-0">
          <h3 className="text-xl font-bold mb-3">{t('footer.companyName')}</h3>
          <p className="mb-2 text-sm text-gray-300 max-w-xs">{t('footer.companyDesc')}</p>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-center pb-8 md:pb-0">
          <h3 className="text-xl font-bold mb-3">{t('footer.quickLinks')}</h3>
          <ul className="space-y-2">
            {links.map((link, idx) => (
              <li key={idx}>
                <button
                  className="hover:text-[#00b67a] bg-transparent border-none outline-none cursor-pointer p-0 m-0 text-inherit"
                  onClick={() => handleLinkClick(link.to)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-xl font-bold mb-3">{t('footer.contactInfo')}</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>{t('footer.address')}</li>
            <li>{t('footer.phone')}</li>
            <li>{t('footer.email')}</li>
            <li>{t('footer.hours')}</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 border-t border-gray-700 pt-6 flex flex-col items-center justify-center text-sm text-gray-400">
        <div>{t('footer.copyright')}</div>
      </div>
    </footer>
  );
};