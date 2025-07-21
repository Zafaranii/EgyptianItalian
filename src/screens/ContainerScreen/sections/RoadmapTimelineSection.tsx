import React from "react";
import { useTranslation } from "../../../../node_modules/react-i18next";

export const RoadmapTimelineSection = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  // Timeline data (i18n keys)
  const timeline = [
    {
      year: ["timeline", "1940s1950s", "year"],
      desc: ["timeline", "1940s1950s", "desc"],
    },
    {
      year: ["timeline", "2004", "year"],
      desc: ["timeline", "2004", "desc"],
    },
    {
      year: ["timeline", "20042005", "year"],
      desc: ["timeline", "20042005", "desc"],
    },
    {
      year: ["timeline", "20052010", "year"],
      desc: ["timeline", "20052010", "desc"],
    },
    {
      year: ["timeline", "20102015", "year"],
      desc: ["timeline", "20102015", "desc"],
    },
    {
      year: ["timeline", "20152020", "year"],
      desc: ["timeline", "20152020", "desc"],
    },
    {
      year: ["timeline", "20202025", "year"],
      desc: ["timeline", "20202025", "desc"],
    },
  ];

  // SVG path points for milestones (percentages of SVG height)
  const points = [10, 23, 36, 49, 62, 75, 88];

  return (
    <section className="w-full py-20 bg-white flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#00824a] text-center mb-10 flex items-center justify-center gap-2">
        <span className="text-2xl">✅</span> {t(["timeline", "heading"])}
      </h2>
      <div className="relative w-full flex justify-center" style={{ minHeight: 700 }}>
        {/* SVG Road */}
        <svg
          viewBox="0 0 200 1000"
          width="120"
          height="700"
          className="block mx-auto z-0"
          style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}
        >
          <path
            d="M100 0 Q180 80 100 160 Q20 240 100 320 Q180 400 100 480 Q20 560 100 640 Q180 720 100 800 Q20 880 100 960 L100 1000 Q100 1000 100 1000"
            stroke="#222"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            filter="drop-shadow(0 2px 2px #eee)"
          />
          <path
            d="M100 0 Q180 80 100 160 Q20 240 100 320 Q180 400 100 480 Q20 560 100 640 Q180 720 100 800 Q20 880 100 960 L100 1000 Q100 1000 100 1000"
            stroke="#fff"
            strokeWidth="4"
            fill="none"
            strokeDasharray="20,20"
            strokeLinecap="round"
          />
          {/* Arrow at the end */}
          <polygon points="90,990 110,990 100,1010" fill="#222" />
        </svg>
        {/* Milestones */}
        {timeline.map((item, idx) => {
          // Calculate vertical position
          const top = `calc(${points[idx]}% - 32px)`;
          // Alternate left/right
          const side = idx % 2 === 0 ? (isAr ? 'right' : 'left') : (isAr ? 'left' : 'right');
          const align = side === 'left' ? 'items-end text-right' : 'items-start text-left';
          const offset = side === 'left' ? 'mr-[140px]' : 'ml-[140px]';
          return (
            <div
              key={item.year.join('-')}
              className={`absolute flex flex-col ${align} ${offset}`}
              style={{ top, [side]: '50%' }}
            >
              <div className="flex items-center mb-2">
                <div className="w-16 h-16 rounded-full bg-yellow-400 border-4 border-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  {t(item.year)}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md px-4 py-2 max-w-xs text-gray-800 text-base font-medium">
                {t(item.desc)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}; 