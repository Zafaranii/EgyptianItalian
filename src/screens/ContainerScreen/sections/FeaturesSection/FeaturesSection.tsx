import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { MegaMenu } from "../../../../components/ui/mega-menu";
import { LanguageToggle } from "../../../../components/ui/language-toggle";

export const FeaturesSection = (): JSX.Element => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation menu items data with routes - reverse array for Arabic to ensure proper RTL order
  const navItems = useMemo(() => {
    const baseNavItems = [
      { text: t('navigation.home'), position: "left-[100px]", route: "/", hasMegaMenu: false },
      { text: t('navigation.products'), position: "left-[83px]", route: "/products", hasMegaMenu: true },
      { text: t('navigation.aboutUs'), position: "left-[86px]", route: "/about-us", hasMegaMenu: false },
      { text: t('navigation.orderOnline'), position: "left-[68px]", route: "/order-online", hasMegaMenu: false },
      { text: t('navigation.contact'), position: "left-[89px]", route: "/contact", hasMegaMenu: false },
    ];
    return i18n.language === 'ar' ? [...baseNavItems].reverse() : baseNavItems;
  }, [i18n.language, t]);

  // Reset hover states when language changes
  useEffect(() => {
    setHoveredItem(null);
    setShowMegaMenu(false);
    setIsMobileMenuOpen(false);
  }, [i18n.language]);

  const handleNavClick = (route: string) => {
    navigate(route);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const handleNavMouseEnter = (item: any) => {
    setHoveredItem(item.text);
    if (item.hasMegaMenu) {
      setShowMegaMenu(true);
    } else {
      setShowMegaMenu(false);
    }
  };

  const handleContainerMouseLeave = () => {
    // Only hide when leaving the entire navigation + mega menu area
    setHoveredItem(null);
    setShowMegaMenu(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div 
      onMouseLeave={handleContainerMouseLeave} 
      className={i18n.language === 'ar' ? 'rtl' : 'ltr'}
    >
      <header className="w-full bg-white relative z-30">
        <div className="max-w-[1495px] mx-auto px-4">
          {/* Logo and top navigation */}
          <div className={`flex justify-between items-center pt-[15px] ${i18n.language === 'ar' ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <div 
              className="cursor-pointer transition-transform duration-200 hover:scale-105"
              onClick={() => navigate('/')}
            >
              <img className="w-[90px] h-[66px] md:w-[150px] md:h-[66px] lg:w-[220px] lg:h-[66px] object-cover" alt="Logo" src="/images/logos/eir.png" />
            </div>

            {/* Desktop Language Toggle */}
            <div className="hidden md:block">
              <LanguageToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <LanguageToggle />
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-600 hover:text-[#00824a] hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Main navigation */}
          <div className={`hidden md:flex h-[60px] mt-auto justify-center border-b border-gray-200 shadow-sm mb-2 ${i18n.language === 'ar' ? 'flex-row-reverse' : ''}`}>
            {navItems.map((item, index) => (
              <React.Fragment key={`${i18n.language}-navitem-${index}`}>
                {index > 0 && (
                  <div
                    className="w-px h-[45px] my-0.5"
                    style={{
                      background: 'linear-gradient(to bottom, transparent, rgba(75, 85, 99, 0.5))'
                    }}
                  />
                )}
                <div 
                  className={`w-full md:w-[248px] h-[60px] border-b-2 relative cursor-pointer transition-all duration-300 flex items-center justify-center ${
                    hoveredItem === item.text 
                      ? 'border-[#00824a] bg-gradient-to-t from-[#00824a]/10 to-transparent' 
                      : 'border-white hover:border-[#00824a]/50 hover:bg-gradient-to-t hover:from-[#00824a]/5 hover:to-transparent'
                  }`}
                  onMouseEnter={() => handleNavMouseEnter(item)}
                  onClick={() => handleNavClick(item.route)}
                >
                  <div
                    className={`font-['Inter',Helvetica] font-normal text-[13px] text-center tracking-[0.75px] leading-[15.8px] whitespace-nowrap transition-colors duration-300 ${
                      hoveredItem === item.text 
                        ? 'text-[#00824a] font-semibold' 
                        : 'text-[#545859] hover:text-[#00824a]'
                    }`}
                  >
                    {item.text}
                  </div>
                  {/* Active indicator */}
                  {hoveredItem === item.text && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#00824a] rounded-t-full transition-all duration-300"></div>
                  )}
                </div>
              </React.Fragment>
            ))}
            <div
              className="w-px h-[45px] my-0.5"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(75, 85, 99, 0.5))'
              }}
            />
          </div>
        </div>

        {/* Mega Menu - Desktop Only */}
        <div className="hidden md:block">
          <MegaMenu
            isVisible={showMegaMenu}
            hoveredItem={hoveredItem}
          />
        </div>
      </header>

      {/* Mobile Navigation Menu - Block below header */}
      {isMobileMenuOpen && (
        <div className="block md:hidden w-full bg-white shadow-lg animate-slide-down z-50">
          <nav className="px-4 py-2">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={`mobile-${i18n.language}-navitem-${index}`}>
                  <button
                    onClick={() => handleNavClick(item.route)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors duration-200 font-medium ${
                      hoveredItem === item.text
                        ? 'bg-[#00824a] text-white'
                        : 'text-[#545859] hover:bg-gray-100 hover:text-[#00824a]'
                    }`}
                    onMouseEnter={() => setHoveredItem(item.text)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
