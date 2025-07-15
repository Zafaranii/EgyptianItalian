import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { WhoWeAreSection } from "./sections/whoweare/WhoWeAreSection";
import { RoadmapTimelineSection } from "./RoadmapTimelineSection/RoadmapTimelineSection";
import { SlideshowSection } from "./sections/SlideshowSection";


export const ContainerScreen = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-white w-full min-h-screen">
        <FeaturesSection />
        <SlideshowSection />
        <WhoWeAreSection />
        <HeroSection />
        <FooterSection /> 
      </div>
    </div>
  );
};
