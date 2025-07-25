import React from "react";
import { useTranslation } from "../../../../../node_modules/react-i18next";
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
    { to: "/faqs", label: t('footer.faqs') },
    { to: "/order-online", label: t('footer.partnerPrograms') },
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
        <div className={`flex flex-col items-center md:items-start pb-8 md:pb-0 ${isAr ? 'items-end text-right' : 'items-start text-left'}`}>
          <h3 className="text-xl font-bold mb-3 w-full">{t('footer.companyName')}</h3>
          <p className="mb-2 text-sm text-gray-300 max-w-xs">{t('footer.companyDesc')}</p>
        </div>
        {/* Quick Links */}
        <div className={`flex flex-col items-center pb-8 md:pb-0 ${isAr ? 'items-end text-right' : 'items-center text-left'}`}>
          <h3 className="text-xl font-bold mb-3 w-full">{t('footer.quickLinks')}</h3>
          <ul className="space-y-2 w-full">
            {links.map((link, idx) => (
              <li key={idx} className={isAr ? 'text-right' : 'text-left'}>
                <button
                  className="hover:text-[#1B3958] bg-transparent border-none outline-none cursor-pointer p-0 m-0 text-inherit"
                  onClick={() => handleLinkClick(link.to)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div className={`flex flex-col items-center md:items-end ${isAr ? 'items-end text-right' : 'items-end text-left'}`}>
          <h3 className="text-xl font-bold mb-3 w-full">{t('footer.contactInfo')}</h3>
          <ul className="space-y-2 text-sm text-gray-300 w-full">
            <li>
              <div className="flex items-center gap-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>{t('footer.address')}</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <div className="flex flex-col">
                  <a href="tel:01204554778" className="text-[#6A8B9A] underline">01204554778</a>
                  <a href="tel:01204553883" className="text-[#6A8B9A] underline">01204553883</a>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                </svg>
                <a href="mailto:eirc.retreading@gmail.com" className="text-[#6A8B9A] underline">eirc.retreading@gmail.com</a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>{t('footer.hours')}</span>
              </div>
            </li>
          </ul>
          {/* Social Links */}
          <div className="flex gap-4 mt-4 justify-center md:justify-end">
            <a href="https://www.facebook.com/share/1ENc4C9syE/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </a>
            <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>
            <a href="https://wa.me/message/B6JYISP4E6ERF1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#128c7e]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 border-t border-gray-700 pt-6 flex flex-col items-center justify-center text-sm text-gray-400">
        <div>{t('footer.copyright')}</div>
        <div className="font-bold">
          Website designed and developed by{' '}
          <a href="https://www.linkedin.com/company/alt-mate-agency/" target="_blank" rel="noopener noreferrer" className="underline text-gray-300 font-bold">
            ALT MATE Agency
          </a>
        </div>
      </div>
    </footer>
  );
};