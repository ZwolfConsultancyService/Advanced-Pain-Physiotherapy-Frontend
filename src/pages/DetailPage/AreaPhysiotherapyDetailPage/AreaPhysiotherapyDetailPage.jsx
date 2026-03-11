// import React, { useState, useEffect, useRef, useMemo } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Star, Phone, Calendar, MapPin, ChevronLeft } from "lucide-react";
// import ServicesSlider from "../../../components/ServiceCard/ServicesSlider";
// import TherapyExpertiseSection from "../../../components/TherapyExpertise/TherapyExpertiseSection";
// import ConditionsSection from "../../../components/ConditionsDataSection/ConditionsSection";
// import { servicesData } from "../../../components/ServiceCard/servicesData.js";
// import { servicesDataSpecialized } from "../../../components/ServiceCard/servicesDataSpecialized.js";
// import { therapyData } from "../../../components/TherapyExpertise/therapyData.js";
// import { conditionsData } from "../../../components/ConditionsDataSection/ConditionsData.js";
// import { citiesData } from "../../../data/citiesData.js";

// const allServicesData = [...servicesData, ...servicesDataSpecialized, ...therapyData];

// // URL builders — same as AreaDetailPage (duplicated to avoid circular import)
// export function buildAreaUrl(citySlug, areaSlug, serviceSlug) {
//   const areaSlugified = areaSlug.toLowerCase().replace(/\s+/g, "-");
//   if (!serviceSlug) return `/physiotherapy-in-${citySlug}-${areaSlugified}`;
//   return `/${serviceSlug}-treatment-in-${citySlug}-${areaSlugified}`;
// }

// export function buildCityServiceUrl(citySlug, serviceSlug) {
//   if (!serviceSlug) return `/physiotherapy-in-${citySlug}`;
//   return `/${serviceSlug}-treatment-in-${citySlug}`;
// }

// // ============================================================
// // Props: citySlug, areaSlug, serviceSlug  (from SmartRouter in App.jsx)
// // key={fullSlug} passed from SmartRouter → full remount on URL change
// // ============================================================
// const AreaPhysiotherapyDetailPage = ({ citySlug, areaSlug, serviceSlug }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // ✅ ALL HOOKS AT TOP
//   const [isLoading, setIsLoading] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);
//   const scrollContainerRef = useRef(null);

//   const currentService = useMemo(() => {
//     if (!serviceSlug) return allServicesData[0];

//     let found = allServicesData.find((s) => s.slug === serviceSlug);
//     if (found) return { ...found, type: "service" };

//     found = conditionsData.find((condition) => {
//       if (condition.slug) return condition.slug === serviceSlug;
//       if (condition.name) {
//         const slug = condition.name.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "");
//         return slug === serviceSlug;
//       }
//       return false;
//     });

//     if (found) {
//       const displayName = found.title || found.name;
//       return {
//         ...found,
//         type: "condition",
//         title: displayName,
//         description: found.description || `Comprehensive treatment for ${displayName}`,
//         image: found.image,
//         sections: found.sections || [],
//       };
//     }

//     return allServicesData[0];
//   }, [serviceSlug]);

//   const currentCityData = useMemo(
//     () => citiesData.find((city) => city.slug === citySlug),
//     [citySlug]
//   );

//   const cityName = currentCityData?.name || "Delhi";

//   const areaName = useMemo(
//     () =>
//       areaSlug
//         ? areaSlug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
//         : currentCityData?.areas[0] || "Sector 18",
//     [areaSlug, currentCityData]
//   );

//   const serviceName =
//     location.state?.serviceName || currentService?.title || "Physiotherapy Treatment";

//   // ✅ KEY FIX: location.pathname dependency
//   // SmartRouter passes key={fullSlug} so component remounts on URL change
//   // But this useEffect also handles scroll reset just in case
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setIsLoading(true);
//     const timer = setTimeout(() => setIsLoading(false), 300);
//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   // Auto-scroll
//   useEffect(() => {
//     if (isLoading) return;
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     let scrollPosition = 0;
//     let animationId = null;

//     const smoothScroll = () => {
//       if (!isPaused && container) {
//         scrollPosition += 0.5;
//         if (scrollPosition >= container.scrollWidth / 2) scrollPosition = 0;
//         container.scrollLeft = scrollPosition;
//       }
//       animationId = requestAnimationFrame(smoothScroll);
//     };

//     animationId = requestAnimationFrame(smoothScroll);
//     return () => { if (animationId) cancelAnimationFrame(animationId); };
//   }, [isPaused, isLoading]);

//   // ✅ Area click
//   const handleAreaClick = (area) => {
//     const url = buildAreaUrl(citySlug, area, serviceSlug);
//     navigate(url, { state: { cityName, areaName: area, serviceName } });
//   };

//   // ✅ ALL HOOKS DONE

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8ab72e] border-solid mx-auto mb-4"></div>
//           <p className="text-gray-600 text-lg">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}>

//       {/* Hero Section */}
//       <div
//         className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] bg-cover bg-center"
//         style={{
//           backgroundImage: `linear-gradient(rgba(138, 183, 46, 0.88), rgba(138, 183, 46, 0.88)), url(${currentService.image})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-[#8ab72e]/90 to-[#6d9424]/90"></div>
//         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//           <div className="w-full max-w-5xl">
//             {/* Breadcrumb */}
//             <div className="hidden sm:flex items-center gap-2 text-white/80 text-xs md:text-sm mb-4 md:mb-5">
//               <span
//                 className="cursor-pointer hover:text-white"
//                 onClick={() => navigate(buildCityServiceUrl(citySlug, serviceSlug))}
//               >
//                 {cityName}
//               </span>
//               <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 rotate-180" />
//               <span className="text-white">{areaName}</span>
//             </div>

//             <h1
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4 font-light leading-tight"
//               style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
//             >
//               {serviceSlug
//                 ? `Best ${serviceName} In ${areaName}`
//                 : `Best Physiotherapy Centre In ${areaName}`}
//             </h1>

//             <p className="hidden sm:block text-white/90 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-3xl leading-relaxed">
//               {serviceSlug
//                 ? `Best ${serviceName.toLowerCase()} treatment by certified physiotherapists in ${areaName}, ${cityName}.`
//                 : `Best physiotherapy services in ${areaName}, ${cityName} by certified experts.`}
//             </p>

//             <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4">
//               <button className="group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
//                 <Calendar className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
//                 <span>Request Callback</span>
//                 <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//               <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
//                 <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
//                 <span>+91-9220385419</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us */}
//       <div className="bg-white py-12 sm:py-14 md:py-16">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-8 sm:mb-10 md:mb-12">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4 font-light">
//                 Why Choose Us in <span className="text-[#8ab72e]">{areaName}</span>
//               </h2>
//               <h6 className="text-gray-600 text-base sm:text-lg">
//                 Expert physiotherapy care right in your neighborhood
//               </h6>
//             </div>
//             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
//               {[
//                 { icon: <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />, title: "Convenient Location", desc: `Easy access in ${areaName}` },
//                 { icon: <Star className="w-7 h-7 sm:w-8 sm:h-8 text-white" />, title: "Expert Therapists", desc: "Certified professionals" },
//                 { icon: <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-white" />, title: "Flexible Timings", desc: "Book appointments easily" },
//               ].map((item, i) => (
//                 <div key={i} className={`text-center p-5 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow ${i === 2 ? "sm:col-span-2 md:col-span-1" : ""}`}>
//                   <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#8ab72e] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
//                     {item.icon}
//                   </div>
//                   <h3 className="text-lg sm:text-xl text-gray-800 mb-2">{item.title}</h3>
//                   <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Treatment Overview */}
//       {serviceSlug && (
//         <div className="bg-gray-50 py-8 sm:py-10 md:py-12">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="max-w-6xl mx-auto">
//               <div className="text-center mb-6 sm:mb-8">
//                 <h2
//                   className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3"
//                   style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
//                 >
//                   Best <span className="text-[#8ab72e] font-medium">{serviceName}</span> Treatment
//                 </h2>
//                 <h6 className="text-gray-600 text-sm sm:text-base md:text-lg">
//                   Comprehensive care and expert treatment in {areaName}
//                 </h6>
//               </div>
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
//                 <div className="relative group">
//                   <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
//                     <img
//                       src={currentService.image}
//                       alt={`${serviceName} treatment`}
//                       className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <div className="bg-white p-4 sm:p-6 rounded-xl border-l-4 border-[#8ab72e] shadow-md">
//                     <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-2 sm:mb-3 font-semibold">Treatment Overview</h3>
//                     <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{currentService.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <ServicesSlider cityName={areaName} />
//       <TherapyExpertiseSection cityName={areaName} />
//       <ConditionsSection cityName={areaName} className="mt-14" />

//       {/* Areas Slider */}
//       <div className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-14 md:py-16 border-t border-gray-100">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="text-center mb-8 sm:mb-10 md:mb-12">
//             <h2
//               className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4 font-light"
//               style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
//             >
//               Explore Other Areas in {cityName}
//             </h2>
//             <h6 className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
//               Find top physiotherapists in different areas
//             </h6>
//           </div>
//           <div className="relative max-w-7xl mx-auto">
//             <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
//             <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
//             <div className="overflow-hidden">
//               <div
//                 ref={scrollContainerRef}
//                 className="flex gap-3 sm:gap-4 py-4"
//                 onMouseEnter={() => setIsPaused(true)}
//                 onMouseLeave={() => setIsPaused(false)}
//                 style={{ display: "flex", overflow: "hidden", whiteSpace: "nowrap", cursor: "grab", userSelect: "none" }}
//               >
//                 {currentCityData &&
//                   [...currentCityData.areas, ...currentCityData.areas, ...currentCityData.areas].map((area, index) => (
//                     <button
//                       key={`area-${index}`}
//                       onClick={() => handleAreaClick(area)}
//                       className="group flex-shrink-0 bg-white hover:bg-gradient-to-r hover:from-[#8ab72e] hover:to-[#6d9424] border-2 border-gray-200 hover:border-[#8ab72e] rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 hover:scale-110 flex items-center gap-2 sm:gap-3 shadow-md hover:shadow-2xl"
//                       style={{ display: "inline-flex" }}
//                     >
//                       <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#8ab72e] group-hover:text-white transition-colors flex-shrink-0" />
//                       <span className="text-gray-800 group-hover:text-white text-sm sm:text-base whitespace-nowrap transition-colors duration-300">
//                         {area}
//                       </span>
//                       <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#8ab72e] to-[#6d9424] group-hover:bg-white flex items-center justify-center transition-all duration-300 flex-shrink-0">
//                         <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-[#8ab72e] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//                         </svg>
//                       </div>
//                     </button>
//                   ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         *::-webkit-scrollbar { display: none; }
//         * { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>
//     </div>
//   );
// };

// export default AreaPhysiotherapyDetailPage;



// import React, { useState, useEffect, useRef, useMemo } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Star, Phone, Calendar, MapPin, ChevronLeft } from "lucide-react";
// import ServicesSlider from "../../../components/ServiceCard/ServicesSlider";
// import TherapyExpertiseSection from "../../../components/TherapyExpertise/TherapyExpertiseSection";
// import ConditionsSection from "../../../components/ConditionsDataSection/ConditionsSection";
// import { servicesData } from "../../../components/ServiceCard/servicesData.js";
// import { servicesDataSpecialized } from "../../../components/ServiceCard/servicesDataSpecialized.js";
// import { therapyData } from "../../../components/TherapyExpertise/therapyData.js";
// import { conditionsData } from "../../../components/ConditionsDataSection/ConditionsData.js";
// import { citiesData } from "../../../data/citiesData.js";

// const allServicesData = [...servicesData, ...servicesDataSpecialized, ...therapyData];

// // ✅ URL builders — NEW format: area-city (area pehle, city baad mein)
// export function buildAreaUrl(citySlug, areaSlug, serviceSlug) {
//   const areaSlugified = areaSlug.toLowerCase().replace(/\s+/g, "-");
//   if (!serviceSlug) return `/physiotherapy-in-${areaSlugified}-${citySlug}`;
//   return `/${serviceSlug}-treatment-in-${areaSlugified}-${citySlug}`;
// }

// export function buildCityServiceUrl(citySlug, serviceSlug) {
//   if (!serviceSlug) return `/physiotherapy-in-${citySlug}`;
//   return `/${serviceSlug}-treatment-in-${citySlug}`;
// }

// // ============================================================
// // Props: citySlug, areaSlug, serviceSlug  (from SmartRouter in App.jsx)
// // key={fullSlug} passed from SmartRouter → full remount on URL change
// // ============================================================
// const AreaPhysiotherapyDetailPage = ({ citySlug, areaSlug, serviceSlug }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [isLoading, setIsLoading] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);
//   const scrollContainerRef = useRef(null);

//   const currentService = useMemo(() => {
//     if (!serviceSlug) return allServicesData[0];

//     let found = allServicesData.find((s) => s.slug === serviceSlug);
//     if (found) return { ...found, type: "service" };

//     found = conditionsData.find((condition) => {
//       if (condition.slug) return condition.slug === serviceSlug;
//       if (condition.name) {
//         const slug = condition.name.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "");
//         return slug === serviceSlug;
//       }
//       return false;
//     });

//     if (found) {
//       const displayName = found.title || found.name;
//       return {
//         ...found,
//         type: "condition",
//         title: displayName,
//         description: found.description || `Comprehensive treatment for ${displayName}`,
//         image: found.image,
//         sections: found.sections || [],
//       };
//     }

//     return allServicesData[0];
//   }, [serviceSlug]);

//   const currentCityData = useMemo(
//     () => citiesData.find((city) => city.slug === citySlug),
//     [citySlug]
//   );

//   const cityName = currentCityData?.name || "Delhi";

//   const areaName = useMemo(
//     () =>
//       areaSlug
//         ? areaSlug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
//         : currentCityData?.areas[0] || "Sector 18",
//     [areaSlug, currentCityData]
//   );

//   const serviceName =
//     location.state?.serviceName || currentService?.title || "Physiotherapy Treatment";

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setIsLoading(true);
//     const timer = setTimeout(() => setIsLoading(false), 300);
//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   // Auto-scroll
//   useEffect(() => {
//     if (isLoading) return;
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     let scrollPosition = 0;
//     let animationId = null;

//     const smoothScroll = () => {
//       if (!isPaused && container) {
//         scrollPosition += 0.5;
//         if (scrollPosition >= container.scrollWidth / 2) scrollPosition = 0;
//         container.scrollLeft = scrollPosition;
//       }
//       animationId = requestAnimationFrame(smoothScroll);
//     };

//     animationId = requestAnimationFrame(smoothScroll);
//     return () => { if (animationId) cancelAnimationFrame(animationId); };
//   }, [isPaused, isLoading]);

//   // ✅ Area click — uses new buildAreaUrl (area-city format)
//   const handleAreaClick = (area) => {
//     const url = buildAreaUrl(citySlug, area, serviceSlug);
//     navigate(url, { state: { cityName, areaName: area, serviceName } });
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8ab72e] border-solid mx-auto mb-4"></div>
//           <p className="text-gray-600 text-lg">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}>

//       {/* Hero Section */}
//       <div
//         className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] bg-cover bg-center"
//         style={{
//           backgroundImage: `linear-gradient(rgba(138, 183, 46, 0.88), rgba(138, 183, 46, 0.88)), url(${currentService.image})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-[#8ab72e]/90 to-[#6d9424]/90"></div>
//         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//           <div className="w-full max-w-5xl">
//             {/* Breadcrumb */}
//             <div className="hidden sm:flex items-center gap-2 text-white/80 text-xs md:text-sm mb-4 md:mb-5">
//               <span
//                 className="cursor-pointer hover:text-white"
//                 onClick={() => navigate(buildCityServiceUrl(citySlug, serviceSlug))}
//               >
//                 {cityName}
//               </span>
//               <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 rotate-180" />
//               <span className="text-white">{areaName}</span>
//             </div>

//             <h1
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4 font-light leading-tight"
//               style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
//             >
//               {serviceSlug
//                 ? `Best ${serviceName} In ${areaName}`
//                 : `Best Physiotherapy Centre In ${areaName}`}
//             </h1>

//             <p className="hidden sm:block text-white/90 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-3xl leading-relaxed">
//               {serviceSlug
//                 ? `Best ${serviceName.toLowerCase()} treatment by certified physiotherapists in ${areaName}, ${cityName}.`
//                 : `Best physiotherapy services in ${areaName}, ${cityName} by certified experts.`}
//             </p>

//             <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4">
//               <button className="group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
//                 <Calendar className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
//                 <span>Request Callback</span>
//                 <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//               <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
//                 <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
//                 <span>+91-9220385419</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us */}
//       <div className="bg-white py-12 sm:py-14 md:py-16">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-8 sm:mb-10 md:mb-12">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4 font-light">
//                 Why Choose Us in <span className="text-[#8ab72e]">{areaName}</span>
//               </h2>
//               <h6 className="text-gray-600 text-base sm:text-lg">
//                 Expert physiotherapy care right in your neighborhood
//               </h6>
//             </div>
//             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
//               {[
//                 { icon: <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />, title: "Convenient Location", desc: `Easy access in ${areaName}` },
//                 { icon: <Star className="w-7 h-7 sm:w-8 sm:h-8 text-white" />, title: "Expert Therapists", desc: "Certified professionals" },
//                 { icon: <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-white" />, title: "Flexible Timings", desc: "Book appointments easily" },
//               ].map((item, i) => (
//                 <div key={i} className={`text-center p-5 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow ${i === 2 ? "sm:col-span-2 md:col-span-1" : ""}`}>
//                   <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#8ab72e] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
//                     {item.icon}
//                   </div>
//                   <h3 className="text-lg sm:text-xl text-gray-800 mb-2">{item.title}</h3>
//                   <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Treatment Overview */}
//       {serviceSlug && (
//         <div className="bg-gray-50 py-8 sm:py-10 md:py-12">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="max-w-6xl mx-auto">
//               <div className="text-center mb-6 sm:mb-8">
//                 <h2
//                   className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3"
//                   style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
//                 >
//                   Best <span className="text-[#8ab72e] font-medium">{serviceName}</span> Treatment
//                 </h2>
//                 <h6 className="text-gray-600 text-sm sm:text-base md:text-lg">
//                   Comprehensive care and expert treatment in {areaName}
//                 </h6>
//               </div>
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
//                 <div className="relative group">
//                   <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
//                     <img
//                       src={currentService.image}
//                       alt={`${serviceName} treatment`}
//                       className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <div className="bg-white p-4 sm:p-6 rounded-xl border-l-4 border-[#8ab72e] shadow-md">
//                     <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-2 sm:mb-3 font-semibold">Treatment Overview</h3>
//                     <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{currentService.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <ServicesSlider cityName={areaName} />
//       <TherapyExpertiseSection cityName={areaName} />
//       <ConditionsSection cityName={areaName} className="mt-14" />

//       {/* Areas Slider */}
//       <div className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-14 md:py-16 border-t border-gray-100">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="text-center mb-8 sm:mb-10 md:mb-12">
//             <h2
//               className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4 font-light"
//               style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
//             >
//               Explore Other Areas in {cityName}
//             </h2>
//             <h6 className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
//               Find top physiotherapists in different areas
//             </h6>
//           </div>
//           <div className="relative max-w-7xl mx-auto">
//             <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
//             <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
//             <div className="overflow-hidden">
//               <div
//                 ref={scrollContainerRef}
//                 className="flex gap-3 sm:gap-4 py-4"
//                 onMouseEnter={() => setIsPaused(true)}
//                 onMouseLeave={() => setIsPaused(false)}
//                 style={{ display: "flex", overflow: "hidden", whiteSpace: "nowrap", cursor: "grab", userSelect: "none" }}
//               >
//                 {currentCityData &&
//                   [...currentCityData.areas, ...currentCityData.areas, ...currentCityData.areas].map((area, index) => (
//                     <button
//                       key={`area-${index}`}
//                       onClick={() => handleAreaClick(area)}
//                       className="group flex-shrink-0 bg-white hover:bg-gradient-to-r hover:from-[#8ab72e] hover:to-[#6d9424] border-2 border-gray-200 hover:border-[#8ab72e] rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 hover:scale-110 flex items-center gap-2 sm:gap-3 shadow-md hover:shadow-2xl"
//                       style={{ display: "inline-flex" }}
//                     >
//                       <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#8ab72e] group-hover:text-white transition-colors flex-shrink-0" />
//                       <span className="text-gray-800 group-hover:text-white text-sm sm:text-base whitespace-nowrap transition-colors duration-300">
//                         {area}
//                       </span>
//                       <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#8ab72e] to-[#6d9424] group-hover:bg-white flex items-center justify-center transition-all duration-300 flex-shrink-0">
//                         <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-[#8ab72e] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//                         </svg>
//                       </div>
//                     </button>
//                   ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         *::-webkit-scrollbar { display: none; }
//         * { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>
//     </div>
//   );
// };

// export default AreaPhysiotherapyDetailPage;



import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Star, Phone, Calendar, MapPin, ChevronLeft } from "lucide-react";
import ServicesSlider from "../../../components/ServiceCard/ServicesSlider";
import TherapyExpertiseSection from "../../../components/TherapyExpertise/TherapyExpertiseSection";
import ConditionsSection from "../../../components/ConditionsDataSection/ConditionsSection";
import { servicesData } from "../../../components/ServiceCard/servicesData.js";
import { servicesDataSpecialized } from "../../../components/ServiceCard/servicesDataSpecialized.js";
import { therapyData } from "../../../components/TherapyExpertise/therapyData.js";
import { conditionsData } from "../../../components/ConditionsDataSection/ConditionsData.js";
import { citiesData } from "../../../data/citiesData.js";

const allServicesData = [...servicesData, ...servicesDataSpecialized, ...therapyData];

// ✅ URL builders — NEW format: area-city (area pehle, city baad mein)
export function buildAreaUrl(citySlug, areaSlug, serviceSlug) {
  const areaSlugified = areaSlug.toLowerCase().replace(/\s+/g, "-");
  if (!serviceSlug) return `/physiotherapy-in-${areaSlugified}-${citySlug}`;
  return `/${serviceSlug}-treatment-in-${areaSlugified}-${citySlug}`;
}

export function buildCityServiceUrl(citySlug, serviceSlug) {
  if (!serviceSlug) return `/physiotherapy-in-${citySlug}`;
  return `/${serviceSlug}-treatment-in-${citySlug}`;
}

// ============================================================
// Props: citySlug, areaSlug, serviceSlug  (from SmartRouter in App.jsx)
// key={fullSlug} passed from SmartRouter → full remount on URL change
// ============================================================
const AreaPhysiotherapyDetailPage = ({ citySlug, areaSlug, serviceSlug }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  const currentService = useMemo(() => {
    if (!serviceSlug) return allServicesData[0];

    let found = allServicesData.find((s) => s.slug === serviceSlug);
    if (found) return { ...found, type: "service" };

    found = conditionsData.find((condition) => {
      if (condition.slug) return condition.slug === serviceSlug;
      if (condition.name) {
        const slug = condition.name.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "");
        return slug === serviceSlug;
      }
      return false;
    });

    if (found) {
      const displayName = found.title || found.name;
      return {
        ...found,
        type: "condition",
        title: displayName,
        description: found.description || `Comprehensive treatment for ${displayName}`,
        image: found.image,
        sections: found.sections || [],
      };
    }

    return allServicesData[0];
  }, [serviceSlug]);

  const currentCityData = useMemo(
    () => citiesData.find((city) => city.slug === citySlug),
    [citySlug]
  );

  const cityName = currentCityData?.name || "Delhi";

  const areaName = useMemo(
    () =>
      areaSlug
        ? areaSlug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
        : currentCityData?.areas[0] || "Sector 18",
    [areaSlug, currentCityData]
  );

  const serviceName =
    location.state?.serviceName || currentService?.title || "Physiotherapy Treatment";

  // ── SEO helpers ──────────────────────────────────────────────────────────────
  const pageTitle = serviceSlug
    ? `Best ${serviceName} in ${areaName}, ${cityName} | Advanced Pain Physiotherapy`
    : `Best Physiotherapy Centre in ${areaName}, ${cityName} | Advanced Pain Physiotherapy`;

  const pageDescription = serviceSlug
    ? `Looking for the best ${serviceName.toLowerCase()} treatment in ${areaName}, ${cityName}? Advanced Pain Physiotherapy Centre provides expert, certified physiotherapy care near you. Book your appointment today!`
    : `Find the best physiotherapy services in ${areaName}, ${cityName}. Advanced Pain Physiotherapy Centre offers expert pain management, home care & tele-rehab by certified physiotherapists. Book now!`;

  const canonicalUrl = serviceSlug
    ? `https://www.advancedpainphysiotherapy.com/${serviceSlug}-treatment-in-${areaSlug}-${citySlug}`
    : `https://www.advancedpainphysiotherapy.com/physiotherapy-in-${areaSlug}-${citySlug}`;

  const ogImage =
    currentService?.image ||
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=630&fit=crop";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `Advanced Pain Physiotherapy Centre – ${areaName}, ${cityName}`,
    description: pageDescription,
    url: canonicalUrl,
    image: ogImage,
    areaServed: [
      { "@type": "City", name: cityName },
      { "@type": "Place", name: areaName },
    ],
    medicalSpecialty: "Physiotherapy",
    availableService: serviceSlug
      ? [{ "@type": "MedicalProcedure", name: serviceName }]
      : [
          { "@type": "MedicalProcedure", name: "Physiotherapy Treatment" },
          { "@type": "MedicalProcedure", name: "Home Physiotherapy" },
          { "@type": "MedicalProcedure", name: "Tele Rehabilitation" },
        ],
    telephone: "+91-9220385419",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9220385419",
      contactType: "customer service",
      url: "https://www.advancedpainphysiotherapy.com/contact",
    },
  };
  // ─────────────────────────────────────────────────────────────────────────────

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Auto-scroll
  useEffect(() => {
    if (isLoading) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    let animationId = null;

    const smoothScroll = () => {
      if (!isPaused && container) {
        scrollPosition += 0.5;
        if (scrollPosition >= container.scrollWidth / 2) scrollPosition = 0;
        container.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(smoothScroll);
    };

    animationId = requestAnimationFrame(smoothScroll);
    return () => { if (animationId) cancelAnimationFrame(animationId); };
  }, [isPaused, isLoading]);

  // ✅ Area click — uses new buildAreaUrl (area-city format)
  const handleAreaClick = (area) => {
    const url = buildAreaUrl(citySlug, area, serviceSlug);
    navigate(url, { state: { cityName, areaName: area, serviceName } });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8ab72e] border-solid mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}>

      {/* ── React Helmet (SEO) ─────────────────────────────────────────────────── */}
      <Helmet>
        {/* Primary */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content={
            serviceSlug
              ? `${serviceName} in ${areaName}, ${serviceName.toLowerCase()} ${cityName}, physiotherapy ${areaName}, best physiotherapist ${areaName} ${cityName}`
              : `physiotherapy in ${areaName}, physiotherapist near me ${areaName}, best physiotherapy ${areaName} ${cityName}, pain management ${areaName}`
          }
        />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`Physiotherapy in ${areaName}, ${cityName}`} />
        <meta property="og:site_name" content="Advanced Pain Physiotherapy" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      {/* ───────────────────────────────────────────────────────────────────────── */}

      {/* Hero Section */}
      <div
        className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(138, 183, 46, 0.88), rgba(138, 183, 46, 0.88)), url(${currentService.image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#8ab72e]/90 to-[#6d9424]/90"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full max-w-5xl">
            {/* Breadcrumb */}
            <div className="hidden sm:flex items-center gap-2 text-white/80 text-xs md:text-sm mb-4 md:mb-5">
              <span
                className="cursor-pointer hover:text-white"
                onClick={() => navigate(buildCityServiceUrl(citySlug, serviceSlug))}
              >
                {cityName}
              </span>
              <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 rotate-180" />
              <span className="text-white">{areaName}</span>
            </div>

            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4 font-light leading-tight"
              style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
            >
              {serviceSlug
                ? `Best ${serviceName} In ${areaName}`
                : `Best Physiotherapy Centre In ${areaName}`}
            </h1>

            <p className="hidden sm:block text-white/90 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-3xl leading-relaxed">
              {serviceSlug
                ? `Best ${serviceName.toLowerCase()} treatment by certified physiotherapists in ${areaName}, ${cityName}.`
                : `Best physiotherapy services in ${areaName}, ${cityName} by certified experts.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4">
              <button className="group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span>Request Callback</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span>+91-9220385419</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-12 sm:py-14 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4 font-light">
                Why Choose Us in <span className="text-[#8ab72e]">{areaName}</span>
              </h2>
              <h6 className="text-gray-600 text-base sm:text-lg">
                Expert physiotherapy care right in your neighborhood
              </h6>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
              {[
                { icon: <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />, title: "Convenient Location", desc: `Easy access in ${areaName}` },
                { icon: <Star className="w-7 h-7 sm:w-8 sm:h-8 text-white" />, title: "Expert Therapists", desc: "Certified professionals" },
                { icon: <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-white" />, title: "Flexible Timings", desc: "Book appointments easily" },
              ].map((item, i) => (
                <div key={i} className={`text-center p-5 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow ${i === 2 ? "sm:col-span-2 md:col-span-1" : ""}`}>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#8ab72e] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Overview */}
      {serviceSlug && (
        <div className="bg-gray-50 py-8 sm:py-10 md:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3"
                  style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
                >
                  Best <span className="text-[#8ab72e] font-medium">{serviceName}</span> Treatment
                </h2>
                <h6 className="text-gray-600 text-sm sm:text-base md:text-lg">
                  Comprehensive care and expert treatment in {areaName}
                </h6>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                    <img
                      src={currentService.image}
                      alt={`${serviceName} treatment in ${areaName}`}
                      className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 sm:p-6 rounded-xl border-l-4 border-[#8ab72e] shadow-md">
                    <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-2 sm:mb-3 font-semibold">Treatment Overview</h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{currentService.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ServicesSlider cityName={areaName} />
      <TherapyExpertiseSection cityName={areaName} />
      <ConditionsSection cityName={areaName} className="mt-14" />

      {/* Areas Slider */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-14 md:py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4 font-light"
              style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
            >
              Explore Other Areas in {cityName}
            </h2>
            <h6 className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Find top physiotherapists in different areas
            </h6>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="overflow-hidden">
              <div
                ref={scrollContainerRef}
                className="flex gap-3 sm:gap-4 py-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={{ display: "flex", overflow: "hidden", whiteSpace: "nowrap", cursor: "grab", userSelect: "none" }}
              >
                {currentCityData &&
                  [...currentCityData.areas, ...currentCityData.areas, ...currentCityData.areas].map((area, index) => (
                    <button
                      key={`area-${index}`}
                      onClick={() => handleAreaClick(area)}
                      className="group flex-shrink-0 bg-white hover:bg-gradient-to-r hover:from-[#8ab72e] hover:to-[#6d9424] border-2 border-gray-200 hover:border-[#8ab72e] rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 hover:scale-110 flex items-center gap-2 sm:gap-3 shadow-md hover:shadow-2xl"
                      style={{ display: "inline-flex" }}
                    >
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#8ab72e] group-hover:text-white transition-colors flex-shrink-0" />
                      <span className="text-gray-800 group-hover:text-white text-sm sm:text-base whitespace-nowrap transition-colors duration-300">
                        {area}
                      </span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#8ab72e] to-[#6d9424] group-hover:bg-white flex items-center justify-center transition-all duration-300 flex-shrink-0">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-[#8ab72e] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        *::-webkit-scrollbar { display: none; }
        * { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default AreaPhysiotherapyDetailPage;