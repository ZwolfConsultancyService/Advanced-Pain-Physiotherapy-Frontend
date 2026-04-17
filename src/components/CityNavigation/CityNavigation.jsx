// import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { citiesData } from "../../data/citiesData.js";

// const CityNavigation = () => {
//   const [activeCity, setActiveCity] = useState(null);
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);

//   // Convert city name to slug
//   const getCitySlug = (cityName) => {
//     return cityName.toLowerCase().replace(/\s+/g, "-");
//   };

//   // Handle city click
//   const handleCityClick = (city) => {
//     const slug = getCitySlug(city.name);
//     navigate(`/physiotherapists/${slug}`);
//   };

//   // Handle area click
//   const handleAreaClick = (city, area) => {
//     const citySlug = getCitySlug(city.name);
//     const areaSlug = area.toLowerCase().replace(/\s+/g, "-");
//     navigate(`/physiotherapists/${citySlug}/${areaSlug}`);
//   };

//   const scrollLeft = () => {
//   scrollRef.current.scrollBy({
//     left: -300,
//     behavior: "smooth",
//   });
// };

// const scrollRight = () => {
//   scrollRef.current.scrollBy({
//     left: 300,
//     behavior: "smooth",
//   });
// };
//   return (
//     <div
//       className="w-full bg-white py-6"
//       style={{
//         fontFamily: "'Gantari', sans-serif",
//         fontWeight: 400,
//       }}
//     >
//       <div className="w-full px-4">
//         <div className="overflow-hidden relative">
//           {/* ✅ MORE COPIES + LARGER GAP = SLOWER, SMOOTHER SCROLL */}
//           <div className="flex gap-18 animate-scroll-continuous will-change-transform">
//             {[
//               ...citiesData,
//               ...citiesData,
//               ...citiesData,
//               ...citiesData,
//               ...citiesData,
//               ...citiesData,
//             ].map((city, index) => (
//               <div
//                 key={`${city.id}-${index}`}
//                 className="relative flex-shrink-0"
//                 onMouseEnter={() => setActiveCity(city.id)}
//                 onMouseLeave={() => setActiveCity(null)}
//               >
//                 {/* CITY BUTTON */}
//                 <button
//                   onClick={() => handleCityClick(city)}
//                   className="group flex items-center bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm hover:border-[#8ab72e] transition"
//                 >
//                   <span className="text-sm  text-gray-800 group-hover:text-[#8ab72e] mr-2">
//                     {city.name}
//                   </span>

//                   <div className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#8ab72e] transition">
//                     <svg
//                       className="w-3.5 h-3.5 text-white"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2.5}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </div>
//                 </button>

//                 {/* SUB LOCATIONS */}
//                 {activeCity === city.id && (
//                   <div className="absolute top-12 left-0 bg-white rounded-xl shadow-xl p-4 z-20 min-w-[220px]">
//                     <p className="text-xs  text-gray-500 mb-2">
//                       Areas in {city.name}
//                     </p>

//                     <div className="flex flex-wrap gap-2">
//                       {city.areas.slice(0, 6).map((area, i) => (
//                         <button
//                           key={i}
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleAreaClick(city, area);
//                           }}
//                           className="px-3 py-1 text-xs rounded-full border border-gray-200 text-gray-700 hover:border-[#6f9724] hover:text-[#6f9724] hover:bg-[#8ab72e]/5 cursor-pointer transition"
//                         >
//                           {area}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="relative">
  
//   {/* LEFT BUTTON */}
//   <button
//     onClick={scrollLeft}
//     className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white shadow-md p-2 rounded-full"
//   >
//     ◀
//   </button>

//   {/* RIGHT BUTTON */}
//   <button
//     onClick={scrollRight}
//     className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white shadow-md p-2 rounded-full"
//   >
//     ▶
//   </button>

//   {/* SCROLL AREA */}
//   <div
//     ref={scrollRef}
//     className="flex gap-18 overflow-x-auto scroll-smooth no-scrollbar"
//   ></div>
//       </div>

//       {/* ✅ SLOWER & SMOOTHER ANIMATION (120s instead of 45s) */}
//       <style>{`
//         @keyframes scroll-continuous {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-16.666%);
//           }
//         }

//         .animate-scroll-continuous {
//           animation: scroll-continuous 40s linear infinite;
//           width: max-content;
//         }

//         .animate-scroll-continuous:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CityNavigation;


import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { citiesData } from "../../data/citiesData.js";

const CityNavigation = () => {
  const [activeCity, setActiveCity] = useState(null);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const getCitySlug = (cityName) => cityName.toLowerCase().replace(/\s+/g, "-");

  const handleCityClick = (city) => {
    const slug = getCitySlug(city.name);
    navigate(`/physiotherapists/${slug}`);
  };

  const handleAreaClick = (city, area) => {
    const citySlug = getCitySlug(city.name);
    const areaSlug = area.toLowerCase().replace(/\s+/g, "-");
    navigate(`/physiotherapists/${citySlug}/${areaSlug}`);
  };

  // ✅ Manual Scroll Logic Fixed
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - 300 : scrollLeft + 300;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // Multiple copies for infinite scroll effect
  const displayCities = [...citiesData, ...citiesData, ...citiesData, ...citiesData];

  return (
    <div className="w-full bg-white py-8 relative group" style={{ fontFamily: "'Gantari', sans-serif" }}>
      
      {/* LEFT BUTTON */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white shadow-xl border border-gray-100 p-3 rounded-full hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white shadow-xl border border-gray-100 p-3 rounded-full hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* SCROLLABLE CONTAINER */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-10"
      >
        <div className="flex gap-6 animate-scroll-continuous hover:pause-scroll">
          {displayCities.map((city, index) => (
            <div
              key={`${city.id}-${index}`}
              className="relative flex-shrink-0 py-4"
              onMouseEnter={() => setActiveCity(`${city.id}-${index}`)}
              onMouseLeave={() => setActiveCity(null)}
            >
              <button
                onClick={() => handleCityClick(city)}
                className="group flex items-center bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm hover:border-[#8ab72e] transition-all"
              >
                <span className="text-sm font-medium text-gray-800 group-hover:text-[#8ab72e] mr-3">
                  {city.name}
                </span>
                <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#8ab72e] transition-colors">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {/* DROPDOWN */}
              {activeCity === `${city.id}-${index}` && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-50 min-w-[220px]">
                  <p className="text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-widest">Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {city.areas.slice(0, 6).map((area, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAreaClick(city, area);
                        }}
                        className="px-3 py-1 text-xs rounded-full border border-gray-100 text-gray-600 hover:border-[#8ab72e] hover:text-[#8ab72e] hover:bg-[#8ab72e]/5 transition-all"
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

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes scroll-continuous {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-continuous {
          animation: scroll-continuous 40s linear infinite;
        }

        .pause-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default CityNavigation;