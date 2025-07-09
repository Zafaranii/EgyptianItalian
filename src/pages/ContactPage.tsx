import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { PageLayout } from "../components/layout/PageLayout";
import { useTranslation } from "react-i18next";

export const ContactPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <PageLayout>
      {/* Breadcrumb with photo background  */}
      {/* Breadcrumb with photo background */}
      <div className="w-full h-32 flex items-end" style={{
        backgroundImage: "url('/images/CD/home.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container mx-auto px-4 pb-4">
          <nav className="text-sm text-white flex items-center space-x-2 bg-black/40 rounded px-3 py-2 w-fit">
            <span className="hover:text-[#00b67a] cursor-pointer" onClick={() => navigate('/')}>{t('navigation.home')}</span>
            <span className="mx-1">/</span>
            <span className="text-[#ffeb3b]">{t('navigation.contact')}</span>
          </nav>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}


        {/* Content */}
        <div className="container mx-auto px-4 py-16" dir={isAr ? 'rtl' : 'ltr'}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information Only */}
              <div className={`bg-white rounded-lg shadow-md p-8 flex flex-col items-center w-full col-span-2 ${isAr ? 'items-end text-right' : 'items-start text-left'}`}>
                <h2 className="text-2xl font-bold mb-6 text-[#00824a] w-full">{t('footer.contactInfo')}</h2>
                <ul className="space-y-2 text-sm text-gray-700 mb-4 w-full">
                  <li>{isAr ? t('footer.address', { lng: 'ar' }) : t('footer.address')}</li>
                  <li>
                    {isAr ? t('footer.phone', { lng: 'ar' }) : t('footer.phone')}
                    <br />
                    <a href="tel:01204554778" className="text-[#00824a] underline block">01204554778</a>
                    <a href="tel:01204553883" className="text-[#00824a] underline block">01204553883</a>
                  </li>
                  <li>
                    {isAr ? t('footer.email', { lng: 'ar' }) : t('footer.email').replace('Email: ', '')}
                    <br />
                    <a href="mailto:eirc.retreading@gmail.com" className="text-[#00824a] underline block">eirc.retreading@gmail.com</a>
                  </li>
                  <li>{isAr ? t('footer.hours', { lng: 'ar' }) : t('footer.hours')}</li>
                </ul>
                <div className={`flex gap-6 mt-4 items-center w-full ${isAr ? 'justify-start flex-row-reverse' : 'justify-end'}`}>
                  <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#25D366" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374A9.86 9.86 0 0 1 0 11.974C0 5.364 5.373 0 11.985 0 18.627 0 24 5.373 24 11.974c0 6.602-5.373 11.974-12.028 11.974m7.563-19.537A9.824 9.824 0 0 0 11.974 2.1c-5.464 0-9.896 4.429-9.896 9.874 0 1.737.455 3.428 1.318 4.899l-1.4 5.127 5.262-1.381a9.824 9.824 0 0 0 4.69 1.195h.004c5.463 0 9.896-4.429 9.896-9.874a9.822 9.822 0 0 0-2.893-6.973"/>
                    </svg>
                    <span className="font-medium">{isAr ? 'واتساب' : 'WhatsApp'}</span>
                  </a>
                  <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#1877f3" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                    </svg>
                    <span className="font-medium">{isAr ? 'فيسبوك' : 'Facebook'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </PageLayout>
  )
  }