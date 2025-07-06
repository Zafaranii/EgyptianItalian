import { ChemicalCategoriesSection } from "./sections/ChemicalCategoriesSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";


export const ContainerScreen = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-white w-full min-h-screen">
        <FeaturesSection />
        <ChemicalCategoriesSection />
        <HeroSection />
        <FooterSection /> 
      </div>
    </div>
  );
};
