import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { citiesData } from "../../data/citiesData.js";

const CityNavigation = () => {
  const [activeCity, setActiveCity] = useState(null);
  const navigate = useNavigate();

  // Convert city name to slug
  const getCitySlug = (cityName) => {
    return cityName.toLowerCase().replace(/\s+/g, "-");
  };

  // Handle city click
  const handleCityClick = (city) => {
    const slug = getCitySlug(city.name);
    navigate(`/physiotherapists/${slug}`);
  };

  // Handle area click
  const handleAreaClick = (city, area) => {
    const citySlug = getCitySlug(city.name);
    const areaSlug = area.toLowerCase().replace(/\s+/g, "-");
    navigate(`/physiotherapists/${citySlug}/${areaSlug}`);
  };

  return (
    <div
      className="w-full bg-white py-6"
      style={{
        fontFamily: "'Gantari', sans-serif",
        fontWeight: 400,
      }}
    >
      <div className="w-full px-4">
        <div className="overflow-hidden relative">
          {/* ✅ MORE COPIES + LARGER GAP = SLOWER, SMOOTHER SCROLL */}
          <div className="flex gap-18 animate-scroll-continuous will-change-transform">
            {[
              ...citiesData,
              ...citiesData,
              ...citiesData,
              ...citiesData,
              ...citiesData,
              ...citiesData,
            ].map((city, index) => (
              <div
                key={`${city.id}-${index}`}
                className="relative flex-shrink-0"
                onMouseEnter={() => setActiveCity(city.id)}
                onMouseLeave={() => setActiveCity(null)}
              >
                {/* CITY BUTTON */}
                <button
                  onClick={() => handleCityClick(city)}
                  className="group flex items-center bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm hover:border-[#8ab72e] transition"
                >
                  <span className="text-sm  text-gray-800 group-hover:text-[#8ab72e] mr-2">
                    {city.name}
                  </span>

                  <div className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#8ab72e] transition">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>

                {/* SUB LOCATIONS */}
                {activeCity === city.id && (
                  <div className="absolute top-12 left-0 bg-white rounded-xl shadow-xl p-4 z-20 min-w-[220px]">
                    <p className="text-xs  text-gray-500 mb-2">
                      Areas in {city.name}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {city.areas.slice(0, 6).map((area, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAreaClick(city, area);
                          }}
                          className="px-3 py-1 text-xs rounded-full border border-gray-200 text-gray-700 hover:border-[#6f9724] hover:text-[#6f9724] hover:bg-[#8ab72e]/5 cursor-pointer transition"
                        >
                          {area}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ SLOWER & SMOOTHER ANIMATION (120s instead of 45s) */}
      <style>{`
        @keyframes scroll-continuous {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-16.666%);
          }
        }

        .animate-scroll-continuous {
          animation: scroll-continuous 120s linear infinite;
          width: max-content;
        }

        .animate-scroll-continuous:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default CityNavigation;
