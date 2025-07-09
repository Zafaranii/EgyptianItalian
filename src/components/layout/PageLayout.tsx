import React from "react";
import { FeaturesSection } from "../../screens/ContainerScreen/sections/FeaturesSection";
import { FooterSection } from "../../screens/ContainerScreen/sections/FooterSection";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="bg-white w-full min-h-screen">
      {/* Navigation Bar */}
      <FeaturesSection />
      
      {/* Page Content */}
      <main className="min-h-screen">
        {children}
      </main>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
}; 