import React from "react";
import { Link } from "react-router-dom";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="bg-[#181818] text-white py-12 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p className="mb-2">1 (877) 857-3870</p>
          <p className="mb-2">INFO@TURTLEWAXPRO.COM</p>
          <a href="https://transchem.com" className="block mb-2 text-[#00b67a] hover:underline" target="_blank" rel="noopener noreferrer">transchem.com</a>
          <a href="https://turtlewax.com" className="block mb-2 text-[#00b67a] hover:underline" target="_blank" rel="noopener noreferrer">turtlewax.com</a>
        </div>
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-bold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#00b67a]">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-[#00b67a]">About Us</Link></li>
            <li><Link to="/products" className="hover:text-[#00b67a]">Products</Link></li>
            <li><Link to="/order-online" className="hover:text-[#00b67a]">Order Online</Link></li>
            <li><Link to="/contact" className="hover:text-[#00b67a]">Contact</Link></li>
            <li><a href="#faq" className="hover:text-[#00b67a]">Frequently Asked Questions</a></li>
            <li><a href="#newsletter" className="hover:text-[#00b67a]">Turtle Wax Pro Sparkle Newsletter</a></li>
          </ul>
        </div>
        {/* Car Wash Chemical Category */}
        <div>
          <h3 className="text-lg font-bold mb-4">Car Wash Chemical Category</h3>
          <ul className="space-y-2">
            <li><a href="#presoaks" className="hover:text-[#00b67a]">Presoaks</a></li>
            <li><a href="#detergents" className="hover:text-[#00b67a]">Detergents</a></li>
            <li><a href="#finishing" className="hover:text-[#00b67a]">Finishing Products</a></li>
            <li><a href="#wheel-tire" className="hover:text-[#00b67a]">Wheel & Tire</a></li>
            <li><a href="#speciality" className="hover:text-[#00b67a]">Speciality</a></li>
          </ul>
        </div>
        {/* Car Wash Resources */}
        <div>
          <h3 className="text-lg font-bold mb-4">Car Wash Resources</h3>
          <ul className="space-y-2">
            <li><a href="#marketing-support" className="hover:text-[#00b67a]">Marketing Support</a></li>
            <li><a href="#learning-center" className="hover:text-[#00b67a]">Learning Center</a></li>
            <li><a href="#blog" className="hover:text-[#00b67a]">Car Wash Blog</a></li>
            <li><a href="#sds" className="hover:text-[#00b67a]">SDS Database</a></li>
            <li><a href="#merchandise" className="hover:text-[#00b67a]">Turtle Wax Pro Partner Merchandise</a></li>
            <li><a href="#signage" className="hover:text-[#00b67a]">Car Wash Marketing Signage</a></li>
            <li><a href="#calculator" className="hover:text-[#00b67a]">Car Wash Cost Per Car Calculator</a></li>
            <li><a href="#books" className="hover:text-[#00b67a]">Car Wash Books</a></li>
          </ul>
        </div>
      </div>
      {/* Legal and Agency */}
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <div className="flex flex-wrap gap-4 mb-2 md:mb-0">
          <a href="#privacy" className="hover:text-[#00b67a]">Privacy Policy</a>
          <span>|</span>
          <a href="#terms" className="hover:text-[#00b67a]">Terms and Conditions</a>
        </div>
        <div>
          Made by <a href="https://wanderland.agency" className="hover:text-[#00b67a]" target="_blank" rel="noopener noreferrer">Wanderland Agency</a>
        </div>
      </div>
    </footer>
  );
};