import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { PageLayout } from "../components/layout/PageLayout";

export const ContactPage = (): JSX.Element => {
  const navigate = useNavigate();

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
            <span className="hover:text-[#00b67a] cursor-pointer" onClick={() => navigate('/')}>Home</span>
            <span className="mx-1">/</span>
            <span className="text-[#ffeb3b]">Contact</span>
          </nav>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}


        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#00824a]">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00824a]"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00824a]"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00824a]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00824a]"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00824a]"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00824a]"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#00824a] hover:bg-[#006838] text-white">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold mb-6 text-[#00824a]">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#00824a] rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm">📍</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-gray-600">123 Business Street<br />Cairo, Egypt</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#00824a] rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm">📞</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-600">+20 123 456 7890</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#00824a] rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm">✉️</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-600">info@egyptianitalian.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#00824a] rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm">🕒</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold mb-6 text-[#00824a]">Get Support</h2>
                  <p className="text-gray-600 mb-4">
                    Need technical support or have questions about our products? 
                    Our team is here to help you succeed.
                  </p>
                  <Button className="bg-[#00824a] hover:bg-[#006838] text-white">
                    Request Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};