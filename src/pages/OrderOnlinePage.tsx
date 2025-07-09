import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { PageLayout } from "../components/layout/PageLayout";

export const OrderOnlinePage = (): JSX.Element => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setSuccess(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the file upload logic (e.g., send to server)
    setSuccess(true);
  };

  return (
    <PageLayout>
      {/* Breadcrumb with photo background  */}
      <div className="w-full h-32 flex items-end" style={{
        backgroundImage: "url('/images/CD/home.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container mx-auto px-4 pb-4">
          <nav className="text-sm text-white flex items-center space-x-2 bg-black/40 rounded px-3 py-2 w-fit">
            <span className="hover:text-[#00b67a] cursor-pointer" onClick={() => window.location.href = '/'}>Home</span>
            <span className="mx-1">/</span>
            <span className="text-[#ffeb3b]">Upload Your CV</span>
          </nav>
        </div>
          </div>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Upload Your CV</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">Submit your resume to join our team!</p>
        <form className="bg-white rounded-lg shadow-md p-8 w-full max-w-md flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="mb-4 w-full border border-gray-300 rounded px-3 py-2"
            required
          />
          {fileName && <div className="mb-2 text-sm text-gray-600">Selected file: {fileName}</div>}
          <button
            type="submit"
            className="bg-[#00824a] hover:bg-[#006838] text-white font-semibold px-6 py-2 rounded transition-colors duration-200"
          >
            Submit
          </button>
          {success && <div className="mt-4 text-green-600 font-medium">Your CV has been uploaded successfully!</div>}
        </form>
      </div>
    </PageLayout>
  );
};