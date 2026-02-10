// import React, { useRef, useEffect, useState } from 'react';

// const RelatedConditionsSlider = ({ conditions }) => {
//   const sliderRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);

//   // =========================
//   // AUTO SCROLL – BUTTERY SMOOTH
//   // =========================
//   useEffect(() => {
//     if (!sliderRef.current || isHovered) return;

//     const slider = sliderRef.current;
//     let scrollAmount = 0;
//     const speed = 0.3; // 👈 jitna kam, utna pyaar se

//     const autoScroll = () => {
//       if (!slider) return;

//       scrollAmount += speed;
//       slider.scrollLeft += speed;

//       // Jab end aaye → smoothly start pe
//       if (
//         slider.scrollLeft + slider.clientWidth >=
//         slider.scrollWidth - 5
//       ) {
//         slider.scrollLeft = 0;
//         scrollAmount = 0;
//       }

//       requestAnimationFrame(autoScroll);
//     };

//     const animationId = requestAnimationFrame(autoScroll);

//     return () => cancelAnimationFrame(animationId);
//   }, [isHovered]);

//   if (!conditions || conditions.length === 0) return null;

//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-[#8ab72e]/5 rounded-full blur-3xl -z-10"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6d9424]/5 rounded-full blur-3xl -z-10"></div>

//       {/* Header */}
//       <div className="text-center mb-10"
//       style={{
//                 fontFamily: "'Gantari', sans-serif",
//                 fontWeight: 400,
//               }}>
//         <h2 className="text-3xl md:text-5xl mb-2">
//           <span className="text-gray-800">Related </span>
//           <span className="text-[#8ab72e]">Conditions</span>
//         </h2>
//         <div className="w-24 h-1 bg-[#8ab72e] mx-auto mt-4 rounded-full"></div>
//       </div>

//       {/* Slider */}
//       <div
//         ref={sliderRef}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className="flex gap-8 overflow-x-hidden pb-4 px-2"
//       >
//         {conditions.map((condition) => (
//           <div
//             key={condition.id}
//             className="flex-shrink-0 w-40 flex flex-col items-center cursor-pointer group"
//           >
//             {/* Image */}
//             <div className="relative mb-4 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:border-[#8ab72e]">
//               <img
//                 src={condition.image}
//                 alt={condition.name}
//                 className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#8ab72e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>

//             {/* Name */}
//             <h3 className="text-center text-sm y-800 group-hover:text-[#8ab72e] transition-colors duration-300 min-h-[40px] flex items-center">
//               {condition.name}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RelatedConditionsSlider;

import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RelatedConditionsSlider = ({ conditions }) => {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // =========================
  // AUTO SCROLL – BUTTERY SMOOTH
  // =========================
  useEffect(() => {
    if (!sliderRef.current || isHovered) return;

    const slider = sliderRef.current;
    let scrollAmount = 0;
    const speed = 0.3; // 👈 jitna kam, utna pyaar se

    const autoScroll = () => {
      if (!slider) return;

      scrollAmount += speed;
      slider.scrollLeft += speed;

      // Jab end aaye → smoothly start pe
      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 5
      ) {
        slider.scrollLeft = 0;
        scrollAmount = 0;
      }

      requestAnimationFrame(autoScroll);
    };

    const animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  // =========================
  // 🎯 HANDLE CONDITION CLICK
  // Navigate to /condition/:slug instead of /service/:slug
  // =========================
  const handleConditionClick = (conditionName) => {
    // Convert condition name to slug format
    const slug = conditionName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    // Navigate to CONDITION detail page (not service)
    navigate(`/condition/${slug}`);
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!conditions || conditions.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8ab72e]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6d9424]/5 rounded-full blur-3xl -z-10"></div>

      {/* Header */}
      <div className="text-center mb-10"
      style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}>
        <h2 className="text-3xl md:text-5xl mb-2">
          <span className="text-gray-800">Related </span>
          <span className="text-[#8ab72e]">Conditions</span>
        </h2>
        <div className="w-24 h-1 bg-[#8ab72e] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-8 overflow-x-hidden pb-4 px-2"
      >
        {conditions.map((condition) => (
          <button
            key={condition.id}
            onClick={() => handleConditionClick(condition.name)}
            className="flex-shrink-0 w-40 flex flex-col items-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#8ab72e] focus:ring-offset-2 rounded-2xl p-2 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative mb-4 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:border-[#8ab72e] group-active:scale-105">
              <img
                src={condition.image}
                alt={condition.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8ab72e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Click Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 rounded-full p-2 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <svg 
                    className="w-6 h-6 text-[#8ab72e]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Name */}
            <h3 className="text-center text-sm y-800 group-hover:text-[#8ab72e] transition-colors duration-300 min-h-[40px] flex items-center">
              {condition.name}
            </h3>
            
            {/* Hover Underline */}
            <div className="w-0 h-0.5 bg-[#8ab72e] group-hover:w-full transition-all duration-300 mt-1"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RelatedConditionsSlider;