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
        <div className={`flex flex-col items-center md:items-end ${isAr ? 'items-end text-right' : 'items-end text-left'}`}>
          <h3 className="text-xl font-bold mb-3 w-full">{t('footer.contactInfo')}</h3>
          <ul className="space-y-2 text-sm text-gray-300 w-full">
            <li>{t('footer.address')}</li>
            <li>
              {t('footer.phone')}
              <br />
              <a href="tel:01204554778" className="text-[#00b67a] underline block">01204554778</a>
              <a href="tel:01204553883" className="text-[#00b67a] underline block">01204553883</a>
            </li>
            <li>
              {t('footer.email').replace(/Email: /, '')}
              <br />
              <a href="mailto:eirc.retreading@gmail.com" className="text-[#00b67a] underline block">eirc.retreading@gmail.com</a>
            </li>
            <li>{t('footer.hours')}</li>
          </ul>
          {/* Social Links */}
          <div className="flex gap-4 mt-4 justify-center md:justify-end">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#1877f3] transition-colors">
              {/* Facebook SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
              </svg>
            </a>
            <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[#25D366] transition-colors">
              {/* WhatsApp SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374A9.86 9.86 0 0 1 0 11.974C0 5.364 5.373 0 11.985 0 18.627 0 24 5.373 24 11.974c0 6.602-5.373 11.974-12.028 11.974m7.563-19.537A9.824 9.824 0 0 0 11.974 2.1c-5.464 0-9.896 4.429-9.896 9.874 0 1.737.455 3.428 1.318 4.899l-1.4 5.127 5.262-1.381a9.824 9.824 0 0 0 4.69 1.195h.004c5.463 0 9.896-4.429 9.896-9.874a9.822 9.822 0 0 0-2.893-6.973"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 border-t border-gray-700 pt-6 flex flex-col items-center justify-center text-sm text-gray-400">
        <div>{t('footer.copyright')}</div>
      </div>
    </footer>
  );
};