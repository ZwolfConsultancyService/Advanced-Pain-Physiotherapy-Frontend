// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
// import { ChevronLeft, Star, Phone, Calendar, MapPin } from "lucide-react";
// import ServicesSlider from "../../../components/ServiceCard/ServicesSlider";
// import ConditionsSection from "../../../components/ConditionsDataSection/ConditionsSection";
// import TherapyExpertiseSection from "../../../components/TherapyExpertise/TherapyExpertiseSection";
// import { servicesData } from "../../../components/ServiceCard/servicesData";
// import { servicesDataSpecialized } from "../../../components/ServiceCard/servicesDataSpecialized";
// import { conditionsData } from "../../../components/ConditionsDataSection/ConditionsData";
// import { therapyData } from "../../../components/TherapyExpertise/therapyData";
// import { citiesData } from "../../../data/citiesData";

// // ✅ Merge ALL data arrays: services + therapy + conditions
// const allServicesData = [
//   ...servicesData,
//   ...servicesDataSpecialized,
//   ...therapyData,
// ];

// const AreaDetailPage = () => {
//   const { citySlug, serviceSlug } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isLoading, setIsLoading] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);
//   const scrollContainerRef = useRef(null);

//   // ✅ FIXED: Now includes therapyData in the lookup
//   const currentItem = React.useMemo(() => {
//     console.log("🔍 Looking for slug:", serviceSlug);

//     // Step 1: Try to find in ALL services (includes therapy data now)
//     let found = allServicesData.find((service) => service.slug === serviceSlug);

//     if (found) {
//       console.log("✅ Found in SERVICES/THERAPY:", found.title);
//       return { ...found, type: "service" };
//     }

//     // Step 2: Try conditions as fallback
//     found = conditionsData.find((condition) => {
//       const conditionSlug = condition.name
//         .toLowerCase()
//         .replace(/\s+/g, "-")
//         .replace(/[()]/g, "");
//       return conditionSlug === serviceSlug;
//     });

//     if (found) {
//       console.log("✅ Found in CONDITIONS:", found.name);
//       return {
//         ...found,
//         type: "condition",
//         title: found.name,
//         description: `Comprehensive treatment for ${found.name}`,
//         image: found.image,
//       };
//     }

//     console.error("❌ NOT FOUND! Slug:", serviceSlug);
//     return null;
//   }, [serviceSlug]);

//   const serviceName = currentItem?.title || "Service";

//   // City name mapping
//   function getCityNameFromSlug(slug) {
//     const cityNames = {
//       delhi: "Delhi",
//       noida: "Noida",
//       gurgaon: "Gurgaon",
//       faridabad: "Faridabad",
//       ghaziabad: "Ghaziabad",
//     };
//     return cityNames[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
//   }

//   const cityName = location.state?.cityName || getCityNameFromSlug(citySlug);
//   const currentCityData =
//     citiesData.find((city) => city.slug === citySlug) || citiesData[0];

//   // Handle area navigation
//   const handleAreaClick = (area) => {
//     const areaSlugified = area.toLowerCase().replace(/\s+/g, "-");
//     navigate(`/city/${citySlug}/area/${areaSlugified}/${serviceSlug}`, {
//       state: {
//         cityName,
//         areaName: area,
//         serviceName,
//       },
//     });
//   };

//   // Auto-scroll effect for areas
//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     let animationFrameId;
//     let scrollPosition = 0;
//     const scrollSpeed = 0.8;

//     const scroll = () => {
//       if (!isPaused && container) {
//         scrollPosition += scrollSpeed;

//         if (scrollPosition >= container.scrollWidth / 2) {
//           scrollPosition = 0;
//         }

//         container.scrollLeft = scrollPosition;
//         animationFrameId = requestAnimationFrame(scroll);
//       } else if (!isPaused) {
//         animationFrameId = requestAnimationFrame(scroll);
//       }
//     };

//     animationFrameId = requestAnimationFrame(scroll);

//     return () => {
//       if (animationFrameId) {
//         cancelAnimationFrame(animationFrameId);
//       }
//     };
//   }, [isPaused]);

//   // Loading state and scroll to top
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     const timer = setTimeout(() => setIsLoading(false), 300);
//     return () => clearTimeout(timer);
//   }, [citySlug, serviceSlug]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-4 border-[#8ab72e] border-solid mx-auto mb-4"></div>
//           <p className="text-gray-600 text-base sm:text-lg">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   // ✅ Show error if not found
//   if (!currentItem) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//         <div className="text-center max-w-md mx-auto">
//           <div className="text-6xl mb-4">😕</div>
//           <h2 className="text-3xl text-gray-700 mb-4">Service Not Found</h2>
//           <p className="text-gray-600 mb-3">
//             The service you're looking for doesn't exist.
//           </p>
//           <p className="text-sm text-gray-500 mb-6 font-mono bg-gray-100 p-3 rounded">
//             Slug: <span className="text-red-600">{serviceSlug}</span>
//           </p>
//           <button
//             onClick={() => navigate("/")}
//             className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300"
//           >
//             ← Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50">
//       {/* Hero Section */}
//       <div
//         className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-cover bg-center"
//         style={{
//           backgroundImage: `linear-gradient(rgba(138, 183, 46, 0.85), rgba(138, 183, 46, 0.85)), url(${currentItem.image})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-[#8ab72e]/90 to-[#6d9424]/90"></div>

//         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
//           <div className="max-w-4xl">
//             <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-2 sm:mb-3">
//               <span className="text-white text-xs sm:text-sm font-medium">
//                 {currentItem.category || "Treatment"}
//               </span>
//             </div>

//             <h1
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2 sm:mb-3 leading-tight animate-fade-in"
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//             >
//               Best {serviceName} Treatment  in {cityName}
//             </h1>

//             <p
//               className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl animate-fade-in-delay leading-relaxed text-white/90"
//               style={{
//                 fontFamily: "'Gantari', sans-serif",
//                 fontWeight: 400,
//               }}
//             >
//               Find certified specialists in {cityName} with advanced treatment
//               protocols.
//             </p>

//             <div
//               className="flex flex-col sm:flex-row gap-3 animate-fade-in-delay-2"
//               style={{
//                 fontFamily: "'Gantari', sans-serif",
//                 fontWeight: 400,
//               }}
//             >
//               <button className="group w-full sm:w-auto px-6 py-3 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base font-medium">
//                 <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
//                 Request Callback
//                 <svg
//                   className="w-4 h-4 transition-transform group-hover:translate-x-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>
//               <Link
//                 to="/contact"
//                 className="w-full sm:w-auto px-6 py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
//               >
//                 <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
//                 Book Appointment
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* SERVICE DETAILS SECTION */}
//       <div className="bg-white py-8 sm:py-10 md:py-12">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-6 sm:mb-8">
//               <h2
//                 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3"
//                 style={{
//                   fontFamily: "'Zalando Sans Expanded', sans-serif",
//                   fontWeight: 200,
//                 }}
//               >
//                 Best{" "}
//                 <span className="text-[#8ab72e] font-medium">
//                   {serviceName}
//                 </span>{" "}
//                 Treatment
//               </h2>
//               <p
//                 className="text-gray-600 text-sm sm:text-base md:text-lg"
//                 style={{
//                   fontFamily: "'Gantari', sans-serif",
//                   fontWeight: 400,
//                 }}
//               >
//                 Comprehensive care and expert treatment in {cityName}
//               </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
//               <div className="relative group">
//                 <div className="absolute -inset-2 bg-gradient-to-r from-[#8ab72e]/20 to-[#6d9424]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
//                   <img
//                     src={currentItem.image}
//                     alt={`${serviceName} treatment`}
//                     className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
//                 </div>
//               </div>

//               <div
//                 className="space-y-4"
//                 style={{
//                   fontFamily: "'Gantari', sans-serif",
//                   fontWeight: 400,
//                 }}
//               >
//                 <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border-l-4 border-[#8ab72e]">
//                   <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-2 sm:mb-3 font-semibold">
//                     Treatment Overview
//                   </h3>

//                   <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3">
//                     {currentItem.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <ServicesSlider cityName={cityName} />
//       <TherapyExpertiseSection cityName={cityName} />
//       <ConditionsSection cityName={cityName} className="sm:mt-10 sm:mb-10" />

//       {/* CITY AREAS SLIDER */}
//       <div className="bg-white py-6 sm:py-8 md:py-10 -mt-6 sm:-mt-8 md:-mt-10 border-t border-gray-100">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-6 sm:mb-8">
//             <h2
//               className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3"
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//             >
//               Find Physiotherapists in{" "}
//               <span className="text-[#8ab72e] font-medium">{cityName}</span>
//             </h2>
//             <p
//               className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
//               style={{
//                 fontFamily: "'Gantari', sans-serif",
//                 fontWeight: 400,
//               }}
//             >
//               Select your area to connect with top-rated physiotherapists near
//               you
//             </p>
//           </div>

//           <div
//             className="relative max-w-6xl mx-auto overflow-hidden"
//             style={{
//               fontFamily: "'Gantari', sans-serif",
//               fontWeight: 400,
//             }}
//           >
//             <div
//               ref={scrollContainerRef}
//               className="overflow-x-auto hide-scrollbar"
//               onMouseEnter={() => setIsPaused(true)}
//               onMouseLeave={() => setIsPaused(false)}
//               onTouchStart={() => setIsPaused(true)}
//               onTouchEnd={() => setIsPaused(false)}
//               style={{
//                 scrollBehavior: "auto",
//                 cursor: "grab",
//               }}
//             >
//               <div
//                 className="flex gap-3 sm:gap-4 pb-4"
//                 style={{ minWidth: "min-content" }}
//               >
//                 {[...currentCityData.areas, ...currentCityData.areas].map(
//                   (area, index) => (
//                     <button
//                       key={`area-${index}`}
//                       onClick={() => handleAreaClick(area)}
//                       className="group flex-shrink-0 bg-white hover:bg-[#8ab72e] border-2 border-gray-200 hover:border-[#8ab72e] rounded-full px-4 sm:px-5 py-2.5 sm:py-3 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-md hover:shadow-xl"
//                     >
//                       <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#8ab72e] group-hover:text-white transition-colors flex-shrink-0" />
//                       <span className="text-gray-800 group-hover:text-white text-xs sm:text-sm md:text-base whitespace-nowrap font-medium transition-colors">
//                         {area}
//                       </span>

//                       <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#8ab72e] group-hover:bg-white flex items-center justify-center transition-all duration-300 flex-shrink-0">
//                         <svg
//                           className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white group-hover:text-[#8ab72e] transition-colors"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2.5}
//                             d="M9 5l7 7-7 7"
//                           />
//                         </svg>
//                       </div>
//                     </button>
//                   ),
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out;
//         }
//         .animate-fade-in-delay {
//           animation: fade-in 0.6s ease-out 0.15s both;
//         }
//         .animate-fade-in-delay-2 {
//           animation: fade-in 0.6s ease-out 0.3s both;
//         }

//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AreaDetailPage;

import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { ChevronLeft, Star, Phone, Calendar, MapPin } from "lucide-react";
import ServicesSlider from "../../../components/ServiceCard/ServicesSlider";
import ConditionsSection from "../../../components/ConditionsDataSection/ConditionsSection";
import TherapyExpertiseSection from "../../../components/TherapyExpertise/TherapyExpertiseSection";
import { servicesData } from "../../../components/ServiceCard/servicesData";
import { servicesDataSpecialized } from "../../../components/ServiceCard/servicesDataSpecialized";
import { conditionsData } from "../../../components/ConditionsDataSection/ConditionsData";
import { therapyData } from "../../../components/TherapyExpertise/therapyData";
import { citiesData } from "../../../data/citiesData";

// ✅ Merge ALL data arrays: services + therapy + conditions
const allServicesData = [
  ...servicesData,
  ...servicesDataSpecialized,
  ...therapyData,
];

const AreaDetailPage = () => {
  const { citySlug, serviceSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  // ✅ FIXED: Now handles both old (name) and new (title) structure for conditions
  const currentItem = React.useMemo(() => {
    console.log("🔍 Looking for slug:", serviceSlug);

    // Step 1: Try to find in ALL services (includes therapy data now)
    let found = allServicesData.find((service) => service.slug === serviceSlug);

    if (found) {
      console.log("✅ Found in SERVICES/THERAPY:", found.title);
      return { ...found, type: "service" };
    }

    // Step 2: Try conditions as fallback - ✅ FIXED
    found = conditionsData.find((condition) => {
      // Handle both new (slug) and old (name-based) structure
      if (condition.slug) {
        return condition.slug === serviceSlug;
      } else if (condition.name) {
        const conditionSlug = condition.name
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[()]/g, "");
        return conditionSlug === serviceSlug;
      }
      return false;
    });

    if (found) {
      const displayName = found.title || found.name;
      console.log("✅ Found in CONDITIONS:", displayName);
      return {
        ...found,
        type: "condition",
        title: displayName,
        description:
          found.description || `Comprehensive treatment for ${displayName}`,
        image: found.image,
      };
    }

    console.error("❌ NOT FOUND! Slug:", serviceSlug);
    return null;
  }, [serviceSlug]);

  const serviceName = currentItem?.title || "Service";

  // City name mapping
  function getCityNameFromSlug(slug) {
    const cityNames = {
      delhi: "Delhi",
      noida: "Noida",
      gurgaon: "Gurgaon",
      faridabad: "Faridabad",
      ghaziabad: "Ghaziabad",
    };
    return cityNames[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
  }

  const cityName = location.state?.cityName || getCityNameFromSlug(citySlug);
  const currentCityData =
    citiesData.find((city) => city.slug === citySlug) || citiesData[0];

  // Handle area navigation
  const handleAreaClick = (area) => {
    const areaSlugified = area.toLowerCase().replace(/\s+/g, "-");
    navigate(`/city/${citySlug}/area/${areaSlugified}/${serviceSlug}`, {
      state: {
        cityName,
        areaName: area,
        serviceName,
      },
    });
  };

  // Auto-scroll effect for areas
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 0.8;

    const scroll = () => {
      if (!isPaused && container) {
        scrollPosition += scrollSpeed;

        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
        }

        container.scrollLeft = scrollPosition;
        animationFrameId = requestAnimationFrame(scroll);
      } else if (!isPaused) {
        animationFrameId = requestAnimationFrame(scroll);
      }
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  // Loading state and scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [citySlug, serviceSlug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-4 border-[#8ab72e] border-solid mx-auto mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  // ✅ Show error if not found
  if (!currentItem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-3xl text-gray-700 mb-4">Service Not Found</h2>
          <p className="text-gray-600 mb-3">
            The service you're looking for doesn't exist.
          </p>
          <p className="text-sm text-gray-500 mb-6 font-mono bg-gray-100 p-3 rounded">
            Slug: <span className="text-red-600">{serviceSlug}</span>
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(138, 183, 46, 0.85), rgba(138, 183, 46, 0.85)), url(${currentItem.image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#8ab72e]/90 to-[#6d9424]/90"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-2 sm:mb-3">
              <span className="text-white text-xs sm:text-sm font-medium">
                {currentItem.category || "Treatment"}
              </span>
            </div>

            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2 sm:mb-3 leading-tight animate-fade-in"
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
            >
              Best {serviceName} Treatment in {cityName}
            </h1>

            <p
              className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl animate-fade-in-delay leading-relaxed text-white/90"
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
            >
              Find certified specialists in {cityName} with advanced treatment
              protocols.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 animate-fade-in-delay-2"
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
            >
              <button className="group w-full sm:w-auto px-6 py-3 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base font-medium">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Request Callback
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICE DETAILS SECTION */}
      <div className="bg-white py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3"
                style={{
                  fontFamily: "'Zalando Sans Expanded', sans-serif",
                  fontWeight: 200,
                }}
              >
                Best{" "}
                <span className="text-[#8ab72e] font-medium">
                  {serviceName}
                </span>{" "}
                Treatment
              </h2>
              <h6
                className="text-gray-600 text-sm sm:text-base md:text-lg"
                style={{
                  fontFamily: "'Gantari', sans-serif",
                  fontWeight: 400,
                }}
              >
                Comprehensive care and expert treatment in {cityName}
              </h6>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#8ab72e]/20 to-[#6d9424]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                  <img
                    src={currentItem.image}
                    alt={`${serviceName} treatment`}
                    className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>

              <div
                className="space-y-4"
                style={{
                  fontFamily: "'Gantari', sans-serif",
                  fontWeight: 400,
                }}
              >
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border-l-4 border-[#8ab72e]">
                  <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-2 sm:mb-3 font-semibold">
                    Treatment Overview
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3">
                    {currentItem.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesSlider cityName={cityName} />
      <TherapyExpertiseSection cityName={cityName} />
      <ConditionsSection cityName={cityName} className="sm:mt-10 sm:mb-10" />

      {/* CITY AREAS SLIDER */}
      <div className="bg-white py-6 sm:py-8 md:py-10 -mt-6 sm:-mt-8 md:-mt-10 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3"
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
            >
              Find Physiotherapists in{" "}
              <span className="text-[#8ab72e] font-medium">{cityName}</span>
            </h2>
            <h6
              className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
            >
              Select your area to connect with top-rated physiotherapists near
              you
            </h6>
          </div>

          <div
            className="relative max-w-6xl mx-auto overflow-hidden"
            style={{
              fontFamily: "'Gantari', sans-serif",
              fontWeight: 400,
            }}
          >
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto hide-scrollbar"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              style={{
                scrollBehavior: "auto",
                cursor: "grab",
              }}
            >
              <div
                className="flex gap-3 sm:gap-4 pb-4"
                style={{ minWidth: "min-content" }}
              >
                {[...currentCityData.areas, ...currentCityData.areas].map(
                  (area, index) => (
                    <button
                      key={`area-${index}`}
                      onClick={() => handleAreaClick(area)}
                      className="group flex-shrink-0 bg-white hover:bg-[#8ab72e] border-2 border-gray-200 hover:border-[#8ab72e] rounded-full px-4 sm:px-5 py-2.5 sm:py-3 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-md hover:shadow-xl"
                    >
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#8ab72e] group-hover:text-white transition-colors flex-shrink-0" />
                      <span className="text-gray-800 group-hover:text-white text-xs sm:text-sm md:text-base whitespace-nowrap font-medium transition-colors">
                        {area}
                      </span>

                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#8ab72e] group-hover:bg-white flex items-center justify-center transition-all duration-300 flex-shrink-0">
                        <svg
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white group-hover:text-[#8ab72e] transition-colors"
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
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.15s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.6s ease-out 0.3s both;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AreaDetailPage;
