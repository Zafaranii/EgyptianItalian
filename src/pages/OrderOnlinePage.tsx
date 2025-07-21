import React, { useRef, useState } from "react";
import { useTranslation } from "../../node_modules/react-i18next";
import { PageLayout } from "../components/layout/PageLayout";

export const OrderOnlinePage = (): JSX.Element => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [errors, setErrors] = useState<{ name?: string; jobTitle?: string }>({});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setSuccess(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: { name?: string; jobTitle?: string } = {};
    if (!name.trim()) {
      newErrors.name = t('uploadCV.nameRequired') || 'Required';
    }
    if (!jobTitle.trim()) {
      newErrors.jobTitle = t('uploadCV.jobTitleRequired') || 'Required';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    // Here you would handle the file upload logic (e.g., send to server)
    setSuccess(true);
  };

  return (
    <PageLayout>
      {/* Breadcrumb with photo background  */}
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
            <span className="text-[#ff0000]">{t('navigation.orderOnline')}</span>
          </nav>
        </div>
          </div>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">{t('uploadCV.title')}</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">{t('uploadCV.subtitle')}</p>
        <form className="bg-white rounded-lg shadow-md p-8 w-full max-w-md flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="w-full mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('uploadCV.nameLabel')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className={`w-full border border-gray-300 rounded px-3 py-2 mb-1 ${errors.name ? 'border-red-500' : ''}`}
              placeholder={t('uploadCV.namePlaceholder')}
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            {errors.name && <div className="text-red-500 text-xs mb-2">{errors.name}</div>}
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('uploadCV.jobTitleLabel')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className={`w-full border border-gray-300 rounded px-3 py-2 mb-1 ${errors.jobTitle ? 'border-red-500' : ''}`}
              placeholder={t('uploadCV.jobTitlePlaceholder')}
              value={jobTitle}
              onChange={e => setJobTitle(e.target.value)}
              required
            />
            {errors.jobTitle && <div className="text-red-500 text-xs mb-2">{errors.jobTitle}</div>}
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('uploadCV.fileInputLabel')}</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <p className="text-xs text-gray-500 mt-1">{t('uploadCV.fileTypes')}</p>
          </div>
          {fileName && <div className="mb-2 text-sm text-gray-600">{t('uploadCV.selectedFile')} {fileName}</div>}
          <button
            type="submit"
            className="bg-[#1B3958] hover:bg-[#2A4A57] text-white font-semibold px-6 py-2 rounded transition-colors duration-200"
          >
            {t('uploadCV.submitButton')}
          </button>
          {success && <div className="mt-4 text-green-600 font-medium">{t('uploadCV.successMessage')}</div>}
        </form>
      </div>
    </PageLayout>
  );
};