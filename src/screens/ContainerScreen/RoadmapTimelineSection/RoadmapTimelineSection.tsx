import React from "react";
import { useTranslation } from "../../../../node_modules/react-i18next";

export const RoadmapTimelineSection = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  // Timeline data (i18n keys)
  const timeline = [
    {
      year: "timeline.1940s1950s.year",
      desc: "timeline.1940s1950s.desc",
    },
    {
      year: "timeline.2004.year",
      desc: "timeline.2004.desc",
    },
    {
      year: "timeline.20042005.year",
      desc: "timeline.20042005.desc",
    },
    {
      year: "timeline.20052010.year",
      desc: "timeline.20052010.desc",
    },
    {
      year: "timeline.20102015.year",
      desc: "timeline.20102015.desc",
    },
    {
      year: "timeline.20152020.year",
      desc: "timeline.20152020.desc",
    },
    {
      year: "timeline.20202025.year",
      desc: "timeline.20202025.desc",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B3958] text-center mb-10 flex items-center justify-center gap-2">
          <span className="text-2xl">✅</span> {t("timeline.heading")}
        </h2>
        <div className={`flex flex-col gap-0 ${isAr ? "rtl" : "ltr"}`}>
          {timeline.map((item, idx) => (
            <React.Fragment key={item.year}>
              <div className="flex flex-col md:flex-row items-start md:items-center mb-2">
                <div className="min-w-[120px] text-lg md:text-xl font-semibold text-[#1B3958] text-center md:text-left mb-1 md:mb-0 md:mr-6 md:ml-0 ml-0" style={isAr ? {textAlign: 'right'} : {}}>
                  {t(item.year)}
                </div>
                <div className="flex-1 text-base md:text-lg text-gray-800" style={isAr ? {textAlign: 'right'} : {}}>
                  {t(item.desc)}
                </div>
              </div>
              {idx < timeline.length - 1 && (
                <div className="flex justify-center my-2">
                  <span className="text-gray-400 text-2xl">⸻</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}; 