// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import {
//   ChevronLeft,
//   Star,
//   Phone,
//   Calendar,
//   MapPin,
//   ChevronDown,
// } from "lucide-react";
// import ServicesSlider from "../../../components/ServiceCard/ServicesSlider";
// import TherapyExpertiseSection from "../../../components/TherapyExpertise/TherapyExpertiseSection";
// import ConditionsSection from "../../../components/ConditionsDataSection/ConditionsSection";

// // ✅ IMPORT REAL DATA + CONDITIONS
// import { servicesData } from "../../../components/ServiceCard/servicesData.js";
// import { servicesDataSpecialized } from "../../../components/ServiceCard/servicesDataSpecialized.js";
// import { therapyData } from "../../../components/TherapyExpertise/therapyData.js";
// import { conditionsData } from "../../../components/ConditionsDataSection/ConditionsData.js";
// import { citiesData } from "../../../data/citiesData.js";

// // ✅ MERGE ALL SERVICE DATA
// const allServicesData = [
//   ...servicesData,
//   ...servicesDataSpecialized,
//   ...therapyData,
// ];

// const AreaPhysiotherapyDetailPage = () => {
//   const { citySlug, areaSlug, serviceSlug } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isLoading, setIsLoading] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);
//   const [openSection, setOpenSection] = useState(0);
//   const scrollContainerRef = useRef(null);

//   // ✅ FIXED: Smart search in BOTH services AND conditions
//   const currentService = React.useMemo(() => {
//     if (!serviceSlug) return allServicesData[0];

//     console.log("🔍 Looking for service/condition:", serviceSlug);

//     // First try to find in services
//     let found = allServicesData.find((s) => s.slug === serviceSlug);

//     if (found) {
//       console.log("✅ Found in SERVICES:", found.title);
//       return { ...found, type: 'service' };
//     }

//     // Then try in conditions
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
//         type: 'condition',
//         title: found.name,
//         description: `Comprehensive treatment for ${found.name}`,
//         image: found.image,
//         sections: [] // Conditions don't have sections
//       };
//     }

//     console.warn("⚠️ NOT FOUND! Using fallback");
//     return allServicesData[0];
//   }, [serviceSlug]);

//   // ✅ Get city data from REAL citiesData
//   const currentCityData = citiesData.find((city) => city.slug === citySlug);
//   const cityName = currentCityData?.name || "Delhi";

//   // ✅ Convert area slug to readable name
//   const areaName = areaSlug
//     ? areaSlug
//         .split("-")
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ")
//     : currentCityData?.areas[0] || "Sector 18";

//   const serviceName =
//     location.state?.serviceName ||
//     currentService?.title ||
//     "Physiotherapy Treatment";

//   // ✅ PERFECT AUTO-SCROLL
//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     let scrollPosition = 0;
//     let animationId = null;
//     const scrollSpeed = 0.5;

//     const smoothScroll = () => {
//       if (!isPaused && container) {
//         scrollPosition += scrollSpeed;
//         const maxScroll = container.scrollWidth / 2;
//         if (scrollPosition >= maxScroll) {
//           scrollPosition = 0;
//         }
//         container.scrollLeft = scrollPosition;
//       }
//       animationId = requestAnimationFrame(smoothScroll);
//     };

//     animationId = requestAnimationFrame(smoothScroll);
//     return () => {
//       if (animationId) {
//         cancelAnimationFrame(animationId);
//       }
//     };
//   }, [isPaused]);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     const timer = setTimeout(() => setIsLoading(false), 300);
//     return () => clearTimeout(timer);
//   }, [citySlug, areaSlug, serviceSlug]);

//   // ✅ Handle area click
//   const handleAreaClick = (area) => {
//     const areaSlugified = area.toLowerCase().replace(/\s+/g, "-");
//     const targetUrl = serviceSlug
//       ? `/city/${citySlug}/area/${areaSlugified}/${serviceSlug}`
//       : `/city/${citySlug}/area/${areaSlugified}`;

//     navigate(targetUrl, {
//       state: { cityName, areaName: area, serviceName },
//     });
//   };

//   // Toggle section
//   const toggleSection = (index) => {
//     setOpenSection(openSection === index ? -1 : index);
//     setTimeout(() => {
//       const element = document.getElementById(`section-${index}`);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }, 100);
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

//   // ✅ Handle missing service
//   if (serviceSlug && !currentService) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center max-w-md mx-auto px-4">
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
//             className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300 transform hover:scale-105 shadow-lg"
//           >
//             ← Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="min-h-screen bg-gray-50"
//       style={{
//         fontFamily: "'Gantari', sans-serif",
//         fontWeight: 400,
//       }}
//     >
//       {/* Hero Section - Fully Responsive */}
//       <div
//         className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] bg-cover bg-center"
//         style={{
//           backgroundImage: `linear-gradient(rgba(138, 183, 46, 0.88), rgba(138, 183, 46, 0.88)), url(${currentService.image})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-[#8ab72e]/90 to-[#6d9424]/90"></div>

//         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//           <div className="w-full max-w-5xl">
//             {/* Breadcrumb - Hidden on mobile */}
//             <div className="hidden sm:flex items-center gap-2 text-white/80 text-xs md:text-sm mb-4 md:mb-5">
//               <span>{cityName}</span>
//               <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 rotate-180" />
//               <span className="text-white">{areaName}</span>
//             </div>

//             {/* Main Heading - Fully Responsive */}
//             <h1
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4 font-light leading-[1.1] sm:leading-tight"
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//             >
//               {serviceSlug
//                 ? `Best ${serviceName}   In ${areaName}`
//                 : `Best Physiotherapy Centre  In ${areaName}`
//               }
//             </h1>

//             {/* Description - Hidden on small mobile, visible from sm */}
//             <p className="hidden sm:block text-white/90 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-3xl leading-relaxed">
//               {serviceSlug
//                 ? `Best ${serviceName.toLowerCase()} treatment by certified physiotherapists in ${areaName}, ${cityName}. Advanced techniques and personalized care for faster recovery.`
//                 : `Best physiotherapy services in ${areaName}, ${cityName} delivered by certified experts using advanced equipment for complete recovery.`}
//             </p>

//             {/* CTA Buttons - Fully Responsive */}
//             <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4">
//               <button className="group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
//                 <Calendar className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
//                 <span>Request Callback</span>
//                 <svg
//                   className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0"
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
//               <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
//                 <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
//                 <span className="hidden xs:inline">Call: </span>
//                 <span>+91-9220385419</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us Section - Responsive */}
//       <div className="bg-white py-12 sm:py-14 md:py-16">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-8 sm:mb-10 md:mb-12">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4 font-light">
//                 Why Choose Us in{" "}
//                 <span className="text-[#8ab72e]">{areaName}</span>
//               </h2>
//               <p className="text-gray-600 text-base sm:text-lg">
//                 Expert physiotherapy care right in your neighborhood
//               </p>
//             </div>

//             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
//               <div className="text-center p-5 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#8ab72e] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
//                   <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
//                 </div>
//                 <h3 className="text-lg sm:text-xl text-gray-800 mb-2">
//                   Convenient Location
//                 </h3>
//                 <p className="text-gray-600 text-sm sm:text-base">
//                   Easy access in {areaName}
//                 </p>
//               </div>

//               <div className="text-center p-5 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#8ab72e] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
//                   <Star className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
//                 </div>
//                 <h3 className="text-lg sm:text-xl text-gray-800 mb-2">
//                   Expert Therapists
//                 </h3>
//                 <p className="text-gray-600 text-sm sm:text-base">
//                   Certified professionals
//                 </p>
//               </div>

//               <div className="text-center p-5 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#8ab72e] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
//                   <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
//                 </div>
//                 <h3 className="text-lg sm:text-xl text-gray-800 mb-2">
//                   Flexible Timings
//                 </h3>
//                 <p className="text-gray-600 text-sm sm:text-base">
//                   Book appointments easily
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Treatment Details Accordion - Responsive */}
//       {serviceSlug && currentService.sections && currentService.sections.length > 0 && (
//         <div className="bg-gray-50 py-12 sm:py-14 md:py-16">
//           <div className="container mx-auto px-4 sm:px-6">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-6 sm:mb-7 md:mb-8 text-center font-light">
//                 {serviceName} Treatment Details
//               </h2>

//               {currentService.sections.map((section, index) => (
//                 <div
//                   key={index}
//                   id={`section-${index}`}
//                   className="bg-white rounded-xl shadow-lg overflow-hidden mb-3 sm:mb-4"
//                 >
//                   <button
//                     onClick={() => toggleSection(index)}
//                     className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 hover:bg-gray-50 transition-all"
//                   >
//                     <div className="flex items-center flex-1">
//                       <div
//                         className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 sm:mr-4 text-sm sm:text-base ${
//                           openSection === index
//                             ? "bg-[#8ab72e] text-white"
//                             : "bg-gray-100 text-[#8ab72e]"
//                         }`}
//                       >
//                         {index + 1}
//                       </div>
//                       <h3 className="text-base sm:text-lg text-gray-800 text-left">
//                         {section.title}
//                       </h3>
//                     </div>
//                     <ChevronDown
//                       className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform flex-shrink-0 ml-2 ${
//                         openSection === index
//                           ? "rotate-180 text-[#8ab72e]"
//                           : "text-gray-400"
//                       }`}
//                     />
//                   </button>

//                   <div
//                     className={`transition-all duration-500 overflow-hidden ${
//                       openSection === index
//                         ? "max-h-96 opacity-100"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     <div className="p-4 sm:p-5 md:p-6 pt-0 border-t border-gray-100">
//                       <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
//                         {section.content}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ✅ CHANGED: Pass areaName instead of cityName */}
//       <ServicesSlider cityName={areaName} />
//       <TherapyExpertiseSection cityName={areaName} />
//       <ConditionsSection cityName={areaName} className="mt-14" />

//       {/* ✅ AUTO-SCROLLING AREAS SLIDER - Responsive */}
//       <div className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-14 md:py-16 border-t border-gray-100">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="text-center mb-8 sm:mb-10 md:mb-12">
//             <h2
//               className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4 font-light"
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//             >
//               Explore Other Areas in {cityName}
//             </h2>
//             <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
//               Find top physiotherapists in different areas
//             </p>
//           </div>

//           {/* Scrolling Container */}
//           <div className="relative max-w-7xl mx-auto">
//             {/* Gradient Fades */}
//             <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
//             <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

//             <div className="overflow-hidden">
//               <div
//                 ref={scrollContainerRef}
//                 className="flex gap-3 sm:gap-4 py-4"
//                 onMouseEnter={() => setIsPaused(true)}
//                 onMouseLeave={() => setIsPaused(false)}
//                 style={{
//                   display: "flex",
//                   overflow: "hidden",
//                   whiteSpace: "nowrap",
//                   cursor: "grab",
//                   userSelect: "none",
//                 }}
//               >
//                 {currentCityData &&
//                   [
//                     ...currentCityData.areas,
//                     ...currentCityData.areas,
//                     ...currentCityData.areas,
//                   ].map((area, index) => (
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
//                         <svg
//                           className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-[#8ab72e] transition-colors duration-300"
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
//                   ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         /* Remove scrollbar but keep functionality */
//         *::-webkit-scrollbar {
//           display: none;
//         }
//         * {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AreaPhysiotherapyDetailPage;

// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import {
//   ChevronLeft,
//   Star,
//   Phone,
//   Calendar,
//   MapPin,
//   ChevronDown,
// } from "lucide-react";
// import ServicesSlider from "../../../components/ServiceCard/ServicesSlider";
// import TherapyExpertiseSection from "../../../components/TherapyExpertise/TherapyExpertiseSection";
// import ConditionsSection from "../../../components/ConditionsDataSection/ConditionsSection";

// // ✅ IMPORT REAL DATA + CONDITIONS
// import { servicesData } from "../../../components/ServiceCard/servicesData.js";
// import { servicesDataSpecialized } from "../../../components/ServiceCard/servicesDataSpecialized.js";
// import { therapyData } from "../../../components/TherapyExpertise/therapyData.js";
// import { conditionsData } from "../../../components/ConditionsDataSection/ConditionsData.js";
// import { citiesData } from "../../../data/citiesData.js";

// // ✅ MERGE ALL SERVICE DATA
// const allServicesData = [
//   ...servicesData,
//   ...servicesDataSpecialized,
//   ...therapyData,
// ];

// const AreaPhysiotherapyDetailPage = () => {
//   const { citySlug, areaSlug, serviceSlug } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isLoading, setIsLoading] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);
//   const [openSection, setOpenSection] = useState(0);
//   const scrollContainerRef = useRef(null);

//   // ✅ FIXED: Smart search in BOTH services AND conditions
//   const currentService = React.useMemo(() => {
//     if (!serviceSlug) return allServicesData[0];

//     console.log("🔍 Looking for service/condition:", serviceSlug);

//     // First try to find in services
//     let found = allServicesData.find((s) => s.slug === serviceSlug);

//     if (found) {
//       console.log("✅ Found in SERVICES:", found.title);
//       return { ...found, type: 'service' };
//     }

//     // Then try in conditions
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
//         type: 'condition',
//         title: found.name,
//         description: `Comprehensive treatment for ${found.name}`,
//         image: found.image,
//         sections: [] // Conditions don't have sections
//       };
//     }

//     console.warn("⚠️ NOT FOUND! Using fallback");
//     return allServicesData[0];
//   }, [serviceSlug]);

//   // ✅ Get city data from REAL citiesData
//   const currentCityData = citiesData.find((city) => city.slug === citySlug);
//   const cityName = currentCityData?.name || "Delhi";

//   // ✅ Convert area slug to readable name
//   const areaName = areaSlug
//     ? areaSlug
//         .split("-")
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ")
//     : currentCityData?.areas[0] || "Sector 18";

//   const serviceName =
//     location.state?.serviceName ||
//     currentService?.title ||
//     "Physiotherapy Treatment";

//   // ✅ PERFECT AUTO-SCROLL
//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     let scrollPosition = 0;
//     let animationId = null;
//     const scrollSpeed = 0.5;

//     const smoothScroll = () => {
//       if (!isPaused && container) {
//         scrollPosition += scrollSpeed;
//         const maxScroll = container.scrollWidth / 2;
//         if (scrollPosition >= maxScroll) {
//           scrollPosition = 0;
//         }
//         container.scrollLeft = scrollPosition;
//       }
//       animationId = requestAnimationFrame(smoothScroll);
//     };

//     animationId = requestAnimationFrame(smoothScroll);
//     return () => {
//       if (animationId) {
//         cancelAnimationFrame(animationId);
//       }
//     };
//   }, [isPaused]);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     const timer = setTimeout(() => setIsLoading(false), 300);
//     return () => clearTimeout(timer);
//   }, [citySlug, areaSlug, serviceSlug]);

//   // ✅ Handle area click
//   const handleAreaClick = (area) => {
//     const areaSlugified = area.toLowerCase().replace(/\s+/g, "-");
//     const targetUrl = serviceSlug
//       ? `/city/${citySlug}/area/${areaSlugified}/${serviceSlug}`
//       : `/city/${citySlug}/area/${areaSlugified}`;

//     navigate(targetUrl, {
//       state: { cityName, areaName: area, serviceName },
//     });
//   };

//   // Toggle section
//   const toggleSection = (index) => {
//     setOpenSection(openSection === index ? -1 : index);
//     setTimeout(() => {
//       const element = document.getElementById(`section-${index}`);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }, 100);
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

//   // ✅ Handle missing service
//   if (serviceSlug && !currentService) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center max-w-md mx-auto px-4">
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
//             className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300 transform hover:scale-105 shadow-lg"
//           >
//             ← Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="min-h-screen bg-gray-50"
//       style={{
//         fontFamily: "'Gantari', sans-serif",
//         fontWeight: 400,
//       }}
//     >
//       {/* Hero Section - Fully Responsive */}
//       <div
//         className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] bg-cover bg-center"
//         style={{
//           backgroundImage: `linear-gradient(rgba(138, 183, 46, 0.88), rgba(138, 183, 46, 0.88)), url(${currentService.image})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-[#8ab72e]/90 to-[#6d9424]/90"></div>

//         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//           <div className="w-full max-w-5xl">
//             {/* Breadcrumb - Hidden on mobile */}
//             <div className="hidden sm:flex items-center gap-2 text-white/80 text-xs md:text-sm mb-4 md:mb-5">
//               <span>{cityName}</span>
//               <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 rotate-180" />
//               <span className="text-white">{areaName}</span>
//             </div>

//             {/* Main Heading - Fully Responsive */}
//             <h1
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4 font-light leading-[1.1] sm:leading-tight"
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//             >
//               {serviceSlug
//                 ? `Best ${serviceName}  In ${areaName}`
//                 : `Best Physiotherapy Centre  In ${areaName}`
//               }
//             </h1>

//             {/* Description - Hidden on small mobile, visible from sm */}
//             <p className="hidden sm:block text-white/90 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-3xl leading-relaxed">
//               {serviceSlug
//                 ? `Best ${serviceName.toLowerCase()} treatment by certified physiotherapists in ${areaName}, ${cityName}. Advanced techniques and personalized care for faster recovery.`
//                 : `Best physiotherapy services in ${areaName}, ${cityName} delivered by certified experts using advanced equipment for complete recovery.`}
//             </p>

//             {/* CTA Buttons - Fully Responsive */}
//             <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4">
//               <button className="group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
//                 <Calendar className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
//                 <span>Request Callback</span>
//                 <svg
//                   className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0"
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
//               <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
//                 <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
//                 <span className="hidden xs:inline">Call: </span>
//                 <span>+91-9220385419</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us Section - Responsive */}
//       <div className="bg-white py-12 sm:py-14 md:py-16">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-8 sm:mb-10 md:mb-12">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4 font-light">
//                 Why Choose Us in{" "}
//                 <span className="text-[#8ab72e]">{areaName}</span>
//               </h2>
//               <p className="text-gray-600 text-base sm:text-lg">
//                 Expert physiotherapy care right in your neighborhood
//               </p>
//             </div>

//             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
//               <div className="text-center p-5 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#8ab72e] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
//                   <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
//                 </div>
//                 <h3 className="text-lg sm:text-xl text-gray-800 mb-2">
//                   Convenient Location
//                 </h3>
//                 <p className="text-gray-600 text-sm sm:text-base">
//                   Easy access in {areaName}
//                 </p>
//               </div>

//               <div className="text-center p-5 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#8ab72e] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
//                   <Star className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
//                 </div>
//                 <h3 className="text-lg sm:text-xl text-gray-800 mb-2">
//                   Expert Therapists
//                 </h3>
//                 <p className="text-gray-600 text-sm sm:text-base">
//                   Certified professionals
//                 </p>
//               </div>

//               <div className="text-center p-5 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#8ab72e] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
//                   <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
//                 </div>
//                 <h3 className="text-lg sm:text-xl text-gray-800 mb-2">
//                   Flexible Timings
//                 </h3>
//                 <p className="text-gray-600 text-sm sm:text-base">
//                   Book appointments easily
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ NEW: Treatment Overview Section with Image */}
//       {serviceSlug && (
//         <div className="bg-gray-50 py-8 sm:py-10 md:py-12">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="max-w-6xl mx-auto">
//               <div className="text-center mb-6 sm:mb-8">
//                 <h2
//                   className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3"
//                   style={{
//                     fontFamily: "'Zalando Sans Expanded', sans-serif",
//                     fontWeight: 200,
//                   }}
//                 >
//                   Best <span className="text-[#8ab72e] font-medium">{serviceName}</span> Treatment
//                 </h2>
//                 <p
//                   className="text-gray-600 text-sm sm:text-base md:text-lg"
//                   style={{
//                     fontFamily: "'Gantari', sans-serif",
//                     fontWeight: 400,
//                   }}
//                 >
//                   Comprehensive care and expert treatment in {areaName}
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
//                 {/* Image Section */}
//                 <div className="relative group">
//                   <div className="absolute -inset-2 bg-gradient-to-r from-[#8ab72e]/20 to-[#6d9424]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
//                     <img
//                       src={currentService.image}
//                       alt={`${serviceName} treatment`}
//                       className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#8ab72e] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
//                       <span className="text-xs sm:text-sm font-medium">
//                         {currentService.category || 'Treatment'}
//                       </span>
//                     </div>
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
//                   </div>
//                 </div>

//                 {/* Overview Section */}

//                 <div
//                   className="space-y-4"
//                   style={{
//                     fontFamily: "'Gantari', sans-serif",
//                     fontWeight: 400,
//                   }}
//                 >
//                   <div className="bg-white p-4 sm:p-6 rounded-xl border-l-4 border-[#8ab72e] shadow-md">
//                     <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-2 sm:mb-3 font-semibold">
//                       Treatment Overview
//                     </h3>

//                     <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3">
//                       {currentService.description}
//                     </p>

//                     {currentService.sections &&
//                       currentService.sections.length > 0 && (
//                         <div className="space-y-2">
//                           {currentService.sections
//                             .slice(0, 4)
//                             .map((section, index) => (
//                               <p key={index} className="text-gray-700 text-sm sm:text-base">
//                                 <strong className="text-gray-800">
//                                   {section.title}:
//                                 </strong>{" "}
//                                 {section.content}
//                               </p>
//                             ))}
//                         </div>
//                       )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Treatment Details Accordion - Responsive */}
//       {/* {serviceSlug && currentService.sections && currentService.sections.length > 0 && (
//         <div className="bg-white py-12 sm:py-14 md:py-16">
//           <div className="container mx-auto px-4 sm:px-6">

//           </div>
//         </div>
//       )} */}

//       {/* ✅ CHANGED: Pass areaName instead of cityName */}
//       <ServicesSlider cityName={areaName} />
//       <TherapyExpertiseSection cityName={areaName} />
//       <ConditionsSection cityName={areaName} className="mt-14" />

//       {/* ✅ AUTO-SCROLLING AREAS SLIDER - Responsive */}
//       <div className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-14 md:py-16 border-t border-gray-100">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="text-center mb-8 sm:mb-10 md:mb-12">
//             <h2
//               className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4 font-light"
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//             >
//               Explore Other Areas in {cityName}
//             </h2>
//             <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
//               Find top physiotherapists in different areas
//             </p>
//           </div>

//           {/* Scrolling Container */}
//           <div className="relative max-w-7xl mx-auto">
//             {/* Gradient Fades */}
//             <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
//             <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

//             <div className="overflow-hidden">
//               <div
//                 ref={scrollContainerRef}
//                 className="flex gap-3 sm:gap-4 py-4"
//                 onMouseEnter={() => setIsPaused(true)}
//                 onMouseLeave={() => setIsPaused(false)}
//                 style={{
//                   display: "flex",
//                   overflow: "hidden",
//                   whiteSpace: "nowrap",
//                   cursor: "grab",
//                   userSelect: "none",
//                 }}
//               >
//                 {currentCityData &&
//                   [
//                     ...currentCityData.areas,
//                     ...currentCityData.areas,
//                     ...currentCityData.areas,
//                   ].map((area, index) => (
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
//                         <svg
//                           className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-[#8ab72e] transition-colors duration-300"
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
//                   ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         /* Remove scrollbar but keep functionality */
//         *::-webkit-scrollbar {
//           display: none;
//         }
//         * {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AreaPhysiotherapyDetailPage;

import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  ChevronLeft,
  Star,
  Phone,
  Calendar,
  MapPin,
  ChevronDown,
} from "lucide-react";
import ServicesSlider from "../../../components/ServiceCard/ServicesSlider";
import TherapyExpertiseSection from "../../../components/TherapyExpertise/TherapyExpertiseSection";
import ConditionsSection from "../../../components/ConditionsDataSection/ConditionsSection";

// ✅ IMPORT REAL DATA + CONDITIONS
import { servicesData } from "../../../components/ServiceCard/servicesData.js";
import { servicesDataSpecialized } from "../../../components/ServiceCard/servicesDataSpecialized.js";
import { therapyData } from "../../../components/TherapyExpertise/therapyData.js";
import { conditionsData } from "../../../components/ConditionsDataSection/ConditionsData.js";
import { citiesData } from "../../../data/citiesData.js";

// ✅ MERGE ALL SERVICE DATA
const allServicesData = [
  ...servicesData,
  ...servicesDataSpecialized,
  ...therapyData,
];

const AreaPhysiotherapyDetailPage = () => {
  const { citySlug, areaSlug, serviceSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [openSection, setOpenSection] = useState(0);
  const scrollContainerRef = useRef(null);

  // ✅ FIXED: Smart search in BOTH services AND conditions with proper null checks
  const currentService = React.useMemo(() => {
    if (!serviceSlug) return allServicesData[0];

    console.log("🔍 Looking for service/condition:", serviceSlug);

    // First try to find in services
    let found = allServicesData.find((s) => s.slug === serviceSlug);

    if (found) {
      console.log("✅ Found in SERVICES:", found.title);
      return { ...found, type: "service" };
    }

    // Then try in conditions - ✅ FIXED: Handle both old (name) and new (title/slug)
    found = conditionsData.find((condition) => {
      // Handle new structure with slug
      if (condition.slug) {
        return condition.slug === serviceSlug;
      }
      // Handle old structure with name
      if (condition.name) {
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
        sections: found.sections || [], // Use sections if available, empty array if not
      };
    }

    console.warn("⚠️ NOT FOUND! Using fallback");
    return allServicesData[0];
  }, [serviceSlug]);

  // ✅ Get city data from REAL citiesData
  const currentCityData = citiesData.find((city) => city.slug === citySlug);
  const cityName = currentCityData?.name || "Delhi";

  // ✅ Convert area slug to readable name
  const areaName = areaSlug
    ? areaSlug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : currentCityData?.areas[0] || "Sector 18";

  const serviceName =
    location.state?.serviceName ||
    currentService?.title ||
    "Physiotherapy Treatment";

  // ✅ PERFECT AUTO-SCROLL
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    let animationId = null;
    const scrollSpeed = 0.5;

    const smoothScroll = () => {
      if (!isPaused && container) {
        scrollPosition += scrollSpeed;
        const maxScroll = container.scrollWidth / 2;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        container.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(smoothScroll);
    };

    animationId = requestAnimationFrame(smoothScroll);
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [citySlug, areaSlug, serviceSlug]);

  // ✅ Handle area click
  const handleAreaClick = (area) => {
    const areaSlugified = area.toLowerCase().replace(/\s+/g, "-");
    const targetUrl = serviceSlug
      ? `/city/${citySlug}/area/${areaSlugified}/${serviceSlug}`
      : `/city/${citySlug}/area/${areaSlugified}`;

    navigate(targetUrl, {
      state: { cityName, areaName: area, serviceName },
    });
  };

  // Toggle section
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? -1 : index);
    setTimeout(() => {
      const element = document.getElementById(`section-${index}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
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

  // ✅ Handle missing service
  if (serviceSlug && !currentService) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
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
            className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{
        fontFamily: "'Gantari', sans-serif",
        fontWeight: 400,
      }}
    >
      {/* Hero Section - Fully Responsive */}
      <div
        className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(138, 183, 46, 0.88), rgba(138, 183, 46, 0.88)), url(${currentService.image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#8ab72e]/90 to-[#6d9424]/90"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full max-w-5xl">
            {/* Breadcrumb - Hidden on mobile */}
            <div className="hidden sm:flex items-center gap-2 text-white/80 text-xs md:text-sm mb-4 md:mb-5">
              <span>{cityName}</span>
              <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 rotate-180" />
              <span className="text-white">{areaName}</span>
            </div>

            {/* Main Heading - Fully Responsive */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4 font-light leading-[1.1] sm:leading-tight"
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
            >
              {serviceSlug
                ? `Best ${serviceName}  In ${areaName}`
                : `Best Physiotherapy Centre  In ${areaName}`}
            </h1>

            {/* Description - Hidden on small mobile, visible from sm */}
            <p className="hidden sm:block text-white/90 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-3xl leading-relaxed">
              {serviceSlug
                ? `Best ${serviceName.toLowerCase()} treatment by certified physiotherapists in ${areaName}, ${cityName}. Advanced techniques and personalized care for faster recovery.`
                : `Best physiotherapy services in ${areaName}, ${cityName} delivered by certified experts using advanced equipment for complete recovery.`}
            </p>

            {/* CTA Buttons - Fully Responsive */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4">
              <button className="group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span>Request Callback</span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0"
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
              <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span className="hidden xs:inline">Call: </span>
                <span>+91-9220385419</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section - Responsive */}
      <div className="bg-white py-12 sm:py-14 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4 font-light">
                Why Choose Us in{" "}
                <span className="text-[#8ab72e]">{areaName}</span>
              </h2>
              <h6 className="text-gray-600 text-base sm:text-lg">
                Expert physiotherapy care right in your neighborhood
              </h6>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
              <div className="text-center p-5 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#8ab72e] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl text-gray-800 mb-2">
                  Convenient Location
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Easy access in {areaName}
                </p>
              </div>

              <div className="text-center p-5 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#8ab72e] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Star className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl text-gray-800 mb-2">
                  Expert Therapists
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Certified professionals
                </p>
              </div>

              <div className="text-center p-5 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#8ab72e] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl text-gray-800 mb-2">
                  Flexible Timings
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Book appointments easily
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ NEW: Treatment Overview Section with Image */}
      {serviceSlug && (
        <div className="bg-gray-50 py-8 sm:py-10 md:py-12">
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
                  Comprehensive care and expert treatment in {areaName}
                </h6>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Image Section */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#8ab72e]/20 to-[#6d9424]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                    <img
                      src={currentService.image}
                      alt={`${serviceName} treatment`}
                      className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#8ab72e] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
                      <span className="text-xs sm:text-sm font-medium">
                        {currentService.category || 'Treatment'}
                      </span>
                    </div> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Overview Section */}

                <div
                  className="space-y-4"
                  style={{
                    fontFamily: "'Gantari', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  <div className="bg-white p-4 sm:p-6 rounded-xl border-l-4 border-[#8ab72e] shadow-md">
                    <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-2 sm:mb-3 font-semibold">
                      Treatment Overview
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3">
                      {currentService.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Treatment Details Accordion - Responsive */}
      {/* {serviceSlug && currentService.sections && currentService.sections.length > 0 && (
        <div className="bg-white py-12 sm:py-14 md:py-16">
          <div className="container mx-auto px-4 sm:px-6">
        
          </div>
        </div>
      )} */}

      {/* ✅ CHANGED: Pass areaName instead of cityName */}
      <ServicesSlider cityName={areaName} />
      <TherapyExpertiseSection cityName={areaName} />
      <ConditionsSection cityName={areaName} className="mt-14" />

      {/* ✅ AUTO-SCROLLING AREAS SLIDER - Responsive */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-14 md:py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4 font-light"
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
            >
              Explore Other Areas in {cityName}
            </h2>
            <h6 className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Find top physiotherapists in different areas
            </h6>
          </div>

          {/* Scrolling Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

            <div className="overflow-hidden">
              <div
                ref={scrollContainerRef}
                className="flex gap-3 sm:gap-4 py-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={{
                  display: "flex",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  cursor: "grab",
                  userSelect: "none",
                }}
              >
                {currentCityData &&
                  [
                    ...currentCityData.areas,
                    ...currentCityData.areas,
                    ...currentCityData.areas,
                  ].map((area, index) => (
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
                        <svg
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-[#8ab72e] transition-colors duration-300"
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
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Remove scrollbar but keep functionality */
        *::-webkit-scrollbar {
          display: none;
        }
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default AreaPhysiotherapyDetailPage;
