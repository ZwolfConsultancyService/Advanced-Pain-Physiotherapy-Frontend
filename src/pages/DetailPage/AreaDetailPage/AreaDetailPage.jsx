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

//   // ✅ FIXED: Now handles both old (name) and new (title) structure for conditions
//   const currentItem = React.useMemo(() => {
//     console.log("🔍 Looking for slug:", serviceSlug);

//     // Step 1: Try to find in ALL services (includes therapy data now)
//     let found = allServicesData.find((service) => service.slug === serviceSlug);

//     if (found) {
//       console.log("✅ Found in SERVICES/THERAPY:", found.title);
//       return { ...found, type: "service" };
//     }

//     // Step 2: Try conditions as fallback - ✅ FIXED
//     found = conditionsData.find((condition) => {
//       // Handle both new (slug) and old (name-based) structure
//       if (condition.slug) {
//         return condition.slug === serviceSlug;
//       } else if (condition.name) {
//         const conditionSlug = condition.name
//           .toLowerCase()
//           .replace(/\s+/g, "-")
//           .replace(/[()]/g, "");
//         return conditionSlug === serviceSlug;
//       }
//       return false;
//     });

//     if (found) {
//       const displayName = found.title || found.name;
//       console.log("✅ Found in CONDITIONS:", displayName);
//       return {
//         ...found,
//         type: "condition",
//         title: displayName,
//         description:
//           found.description || `Comprehensive treatment for ${displayName}`,
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
//               Best {serviceName} Treatment in {cityName}
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
//               <h6
//                 className="text-gray-600 text-sm sm:text-base md:text-lg"
//                 style={{
//                   fontFamily: "'Gantari', sans-serif",
//                   fontWeight: 400,
//                 }}
//               >
//                 Comprehensive care and expert treatment in {cityName}
//               </h6>
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
//             <h6
//               className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
//               style={{
//                 fontFamily: "'Gantari', sans-serif",
//                 fontWeight: 400,
//               }}
//             >
//               Select your area to connect with top-rated physiotherapists near
//               you
//             </h6>
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




// import React, { useState, useEffect, useRef, useMemo } from "react";
// import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
// import { Phone, Calendar, MapPin } from "lucide-react";
// import ServicesSlider from "../../../components/ServiceCard/ServicesSlider";
// import ConditionsSection from "../../../components/ConditionsDataSection/ConditionsSection";
// import TherapyExpertiseSection from "../../../components/TherapyExpertise/TherapyExpertiseSection";
// import { servicesData } from "../../../components/ServiceCard/servicesData";
// import { servicesDataSpecialized } from "../../../components/ServiceCard/servicesDataSpecialized";
// import { conditionsData } from "../../../components/ConditionsDataSection/ConditionsData";
// import { therapyData } from "../../../components/TherapyExpertise/therapyData";
// import { citiesData } from "../../../data/citiesData";

// const allServicesData = [
//   ...servicesData,
//   ...servicesDataSpecialized,
//   ...therapyData,
// ];

// // ============================================================
// // ✅ URL PARSER
// // "sports-injury-treatment-in-faridabad-nit"
// // → { serviceSlug: "sports-injury", citySlug: "faridabad", areaSlug: "nit" }
// //
// // IMPORTANT: City slugs citiesData se liye jaate hain — hardcode nahi
// // ============================================================
// export function parseFullSlug(fullSlug, citiesDataList) {
//   if (!fullSlug) return { serviceSlug: null, citySlug: null, areaSlug: null };

//   const inIndex = fullSlug.lastIndexOf("-in-");
//   if (inIndex === -1) return { serviceSlug: null, citySlug: fullSlug, areaSlug: null };

//   const afterIn = fullSlug.slice(inIndex + 4);
//   const beforeIn = fullSlug.slice(0, inIndex);

//   const serviceSlug =
//     beforeIn === "physiotherapy"
//       ? null
//       : beforeIn.endsWith("-treatment")
//       ? beforeIn.slice(0, -"-treatment".length)
//       : beforeIn;

//   // ✅ citiesData se slugs lo — sort by length desc for correct matching
//   const knownCities = (citiesDataList || [])
//     .map((c) => c.slug)
//     .filter(Boolean)
//     .sort((a, b) => b.length - a.length);

//   let citySlug = null;
//   let areaSlug = null;

//   for (const city of knownCities) {
//     if (afterIn === city) {
//       citySlug = city;
//       areaSlug = null;
//       break;
//     } else if (afterIn.startsWith(city + "-")) {
//       citySlug = city;
//       areaSlug = afterIn.slice(city.length + 1);
//       break;
//     }
//   }

//   // Fallback: agar koi city match nahi hui
//   if (!citySlug) {
//     citySlug = afterIn;
//     areaSlug = null;
//   }

//   return { serviceSlug, citySlug, areaSlug };
// }

// // ✅ URL BUILDERS
// export function buildCityServiceUrl(citySlug, serviceSlug) {
//   if (!serviceSlug) return `/physiotherapy-in-${citySlug}`;
//   return `/${serviceSlug}-treatment-in-${citySlug}`;
// }

// export function buildCityUrl(citySlug) {
//   return `/physiotherapy-in-${citySlug}`;
// }

// export function buildAreaUrl(citySlug, areaSlug, serviceSlug) {
//   const areaSlugified = areaSlug.toLowerCase().replace(/\s+/g, "-");
//   if (!serviceSlug) return `/physiotherapy-in-${citySlug}-${areaSlugified}`;
//   return `/${serviceSlug}-treatment-in-${citySlug}-${areaSlugified}`;
// }

// // ============================================================

// function getCityNameFromSlug(slug) {
//   // ✅ citiesData se directly name lo — hardcode nahi
//   const city = citiesData.find((c) => c.slug === slug);
//   if (city) return city.name;
//   // Fallback: capitalize
//   return slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "";
// }

// // ============================================================
// // ✅ CityOverview — inline (avoids import cycle)
// // ============================================================
// const CityOverviewInline = ({ citySlug }) => {
//   const navigate = useNavigate();
//   const cityName = getCityNameFromSlug(citySlug);
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-4xl text-gray-800 mb-4">Physiotherapy in {cityName}</h1>
//         <button
//           onClick={() => navigate("/")}
//           className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300"
//         >
//           ← Back to Home
//         </button>
//       </div>
//     </div>
//   );
// };

// // ============================================================
// // ✅ AreaDetailPage — ALL HOOKS AT TOP, no early returns before hooks
// // ============================================================
// const AreaDetailPage = () => {
//   const { fullSlug } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // ✅ ALL HOOKS FIRST — no conditions, no early returns before this block
//   const [isLoading, setIsLoading] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);
//   const scrollContainerRef = useRef(null);

//   // Parse URL
//   const { serviceSlug, citySlug, areaSlug } = useMemo(
//     () => parseFullSlug(fullSlug, citiesData),
//     [fullSlug]
//   );

//   // Find current service/condition
//   const currentItem = useMemo(() => {
//     if (!serviceSlug) return null;

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
//       };
//     }

//     return null;
//   }, [serviceSlug]);

//   const cityName = useMemo(
//     () => location.state?.cityName || getCityNameFromSlug(citySlug || ""),
//     [citySlug, location.state]
//   );

//   const currentCityData = useMemo(
//     () => citiesData.find((city) => city.slug === citySlug) || citiesData[0],
//     [citySlug]
//   );

//   const serviceName = currentItem?.title || "Service";

//   // Auto-scroll effect
//   useEffect(() => {
//     // Only run auto-scroll when showing the main service page (not area/city overview)
//     if (areaSlug || !serviceSlug) return;

//     const container = scrollContainerRef.current;
//     if (!container) return;

//     let animationFrameId;
//     let scrollPosition = 0;

//     const scroll = () => {
//       if (!isPaused && container) {
//         scrollPosition += 0.8;
//         if (scrollPosition >= container.scrollWidth / 2) scrollPosition = 0;
//         container.scrollLeft = scrollPosition;
//       }
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     animationFrameId = requestAnimationFrame(scroll);
//     return () => { if (animationFrameId) cancelAnimationFrame(animationFrameId); };
//   }, [isPaused, areaSlug, serviceSlug]);

//   // Loading + scroll to top
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     const timer = setTimeout(() => setIsLoading(false), 300);
//     return () => clearTimeout(timer);
//   }, [fullSlug]);

//   // Area click handler
//   const handleAreaClick = (area) => {
//     const url = buildAreaUrl(citySlug, area, serviceSlug);
//     navigate(url, { state: { cityName, areaName: area, serviceName } });
//   };

//   // ============================================================
//   // ✅ NOW safe to do conditional rendering — all hooks are done
//   // ============================================================

//   // Loading state
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

//   // Area page — delegate to AreaPhysiotherapyDetailPage
//   if (areaSlug) {
//     // Lazy import to avoid circular dependency
//     const AreaPhysiotherapyDetailPage = React.lazy(
//       () => import("../AreaPhysiotherapyDetailPage/AreaPhysiotherapyDetailPage")
//     );
//     return (
//       <React.Suspense fallback={
//         <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8ab72e] border-solid"></div>
//         </div>
//       }>
//         <AreaPhysiotherapyDetailPage
//           key={fullSlug}
//           citySlug={citySlug}
//           areaSlug={areaSlug}
//           serviceSlug={serviceSlug}
//         />
//       </React.Suspense>
//     );
//   }

//   // City overview — no service
//   if (!serviceSlug && citySlug) {
//     return <CityOverviewInline citySlug={citySlug} />;
//   }

//   // Service not found
//   if (!currentItem) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//         <div className="text-center max-w-md mx-auto">
//           <div className="text-6xl mb-4">😕</div>
//           <h2 className="text-3xl text-gray-700 mb-4">Service Not Found</h2>
//           <p className="text-sm text-gray-500 mb-6 font-mono bg-gray-100 p-3 rounded">
//             URL: <span className="text-red-600">/{fullSlug}</span>
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

//   // ✅ Main service page render
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
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2 sm:mb-3 leading-tight"
//               style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
//             >
//               Best {serviceName}  in {cityName}
//             </h1>
//             <p
//               className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl leading-relaxed text-white/90"
//               style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
//             >
//               Find certified specialists in {cityName} with advanced treatment protocols.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3">
//               <button className="group w-full sm:w-auto px-6 py-3 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base font-medium">
//                 <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
//                 Request Callback
//                 <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

//       {/* Service Details */}
//       <div className="bg-white py-8 sm:py-10 md:py-12">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-6 sm:mb-8">
//               <h2
//                 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3"
//                 style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
//               >
//                 Best <span className="text-[#8ab72e] font-medium">{serviceName}</span> Treatment
//               </h2>
//               <h6 className="text-gray-600 text-sm sm:text-base md:text-lg" style={{ fontFamily: "'Gantari', sans-serif" }}>
//                 Comprehensive care and expert treatment in {cityName}
//               </h6>
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
//               <div className="relative group">
//                 <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
//                   <img
//                     src={currentItem.image}
//                     alt={`${serviceName} treatment`}
//                     className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] object-cover transform group-hover:scale-105 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
//                 </div>
//               </div>
//               <div className="space-y-4" style={{ fontFamily: "'Gantari', sans-serif" }}>
//                 <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border-l-4 border-[#8ab72e]">
//                   <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-2 sm:mb-3 font-semibold">
//                     Treatment Overview
//                   </h3>
//                   <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
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

//       {/* Areas Slider */}
//       <div className="bg-white py-6 sm:py-8 md:py-10 border-t border-gray-100">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-6 sm:mb-8">
//             <h2
//               className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3"
//               style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
//             >
//               Find Physiotherapists in <span className="text-[#8ab72e] font-medium">{cityName}</span>
//             </h2>
//             <h6 className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Gantari', sans-serif" }}>
//               Select your area to connect with top-rated physiotherapists near you
//             </h6>
//           </div>
//           <div className="relative max-w-6xl mx-auto overflow-hidden">
//             <div
//               ref={scrollContainerRef}
//               className="overflow-x-auto hide-scrollbar"
//               onMouseEnter={() => setIsPaused(true)}
//               onMouseLeave={() => setIsPaused(false)}
//               style={{ scrollBehavior: "auto", cursor: "grab" }}
//             >
//               <div className="flex gap-3 sm:gap-4 pb-4" style={{ minWidth: "min-content" }}>
//                 {[...currentCityData.areas, ...currentCityData.areas].map((area, index) => (
//                   <button
//                     key={`area-${index}`}
//                     onClick={() => handleAreaClick(area)}
//                     className="group flex-shrink-0 bg-white hover:bg-[#8ab72e] border-2 border-gray-200 hover:border-[#8ab72e] rounded-full px-4 sm:px-5 py-2.5 sm:py-3 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-md hover:shadow-xl"
//                   >
//                     <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#8ab72e] group-hover:text-white transition-colors flex-shrink-0" />
//                     <span className="text-gray-800 group-hover:text-white text-xs sm:text-sm md:text-base whitespace-nowrap font-medium transition-colors">
//                       {area}
//                     </span>
//                     <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#8ab72e] group-hover:bg-white flex items-center justify-center transition-all duration-300 flex-shrink-0">
//                       <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white group-hover:text-[#8ab72e] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//         .hide-scrollbar::-webkit-scrollbar { display: none; }
//       `}</style>
//     </div>
//   );
// };

// export default AreaDetailPage;
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, Calendar, MapPin } from "lucide-react";
import ServicesSlider from "../../../components/ServiceCard/ServicesSlider";
import ConditionsSection from "../../../components/ConditionsDataSection/ConditionsSection";
import TherapyExpertiseSection from "../../../components/TherapyExpertise/TherapyExpertiseSection";
import { servicesData } from "../../../components/ServiceCard/servicesData";
import { servicesDataSpecialized } from "../../../components/ServiceCard/servicesDataSpecialized";
import { conditionsData } from "../../../components/ConditionsDataSection/ConditionsData";
import { therapyData } from "../../../components/TherapyExpertise/therapyData";
import { citiesData } from "../../../data/citiesData";

const allServicesData = [
  ...servicesData,
  ...servicesDataSpecialized,
  ...therapyData,
];

// ── Constants ────────────────────────────────────────────────────────────────
const BRAND = "Advanced Pain Physiotherapy";
const SITE_URL = "https://www.advancedpainphysiotherapy.com";
const DOCTOR = "Dr. Deepanshu Gupta (BPT, MPT)";
const PHONE = "+91-9220385419";
const PHONE_CLEAN = "+919220385419";
const OG_FALLBACK = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=630&fit=crop";

// ── Safe citiesData ──────────────────────────────────────────────────────────
const safeCitiesData = (citiesData || []).filter((c) => c && c.slug);

// ── URL PARSER ───────────────────────────────────────────────────────────────
export function parseFullSlug(fullSlug, citiesDataList) {
  if (!fullSlug) return { serviceSlug: null, citySlug: null, areaSlug: null };

  const inIndex = fullSlug.lastIndexOf("-in-");
  if (inIndex === -1) return { serviceSlug: null, citySlug: fullSlug, areaSlug: null };

  const afterIn = fullSlug.slice(inIndex + 4);
  const beforeIn = fullSlug.slice(0, inIndex);

  const serviceSlug =
    beforeIn === "physiotherapy"
      ? null
      : beforeIn.endsWith("-treatment")
      ? beforeIn.slice(0, -"-treatment".length)
      : beforeIn;

  const knownCities = (citiesDataList || [])
    .filter((c) => c && c.slug)
    .map((c) => c.slug)
    .sort((a, b) => b.length - a.length);

  let citySlug = null;
  let areaSlug = null;

  for (const city of knownCities) {
    if (afterIn === city) {
      citySlug = city;
      areaSlug = null;
      break;
    } else if (afterIn.startsWith(city + "-")) {
      citySlug = city;
      areaSlug = afterIn.slice(city.length + 1);
      break;
    }
  }

  if (!citySlug) {
    citySlug = afterIn;
    areaSlug = null;
  }

  return { serviceSlug, citySlug, areaSlug };
}

// ── URL BUILDERS ─────────────────────────────────────────────────────────────
export function buildCityServiceUrl(citySlug, serviceSlug) {
  if (!serviceSlug) return `/physiotherapy-in-${citySlug}`;
  return `/${serviceSlug}-treatment-in-${citySlug}`;
}

export function buildCityUrl(citySlug) {
  return `/physiotherapy-in-${citySlug}`;
}

export function buildAreaUrl(citySlug, areaSlug, serviceSlug) {
  const areaSlugified = areaSlug.toLowerCase().replace(/\s+/g, "-");
  if (!serviceSlug) return `/physiotherapy-in-${citySlug}-${areaSlugified}`;
  return `/${serviceSlug}-treatment-in-${citySlug}-${areaSlugified}`;
}

// ── getCityNameFromSlug ───────────────────────────────────────────────────────
function getCityNameFromSlug(slug) {
  if (!slug) return "";
  const city = safeCitiesData.find((c) => c.slug === slug);
  if (city) return city.name;
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

// ── CityServiceSEO — renders Helmet for city+service pages ───────────────────
const CityServiceSEO = ({ serviceSlug, citySlug, cityName, serviceName, currentItem }) => {
  const canonicalUrl = serviceSlug
    ? `${SITE_URL}/${serviceSlug}-treatment-in-${citySlug}`
    : `${SITE_URL}/physiotherapy-in-${citySlug}`;

  const ogImage = currentItem?.image || OG_FALLBACK;

  const pageTitle = serviceSlug
    ? `Best ${serviceName} in ${cityName} | ${BRAND}`
    : `Best Physiotherapy Centre in ${cityName} | ${BRAND}`;

  const pageDescription = serviceSlug
    ? `Get expert ${serviceName} in ${cityName} by ${DOCTOR} at ${BRAND}. Certified physiotherapists, advanced treatment techniques & same-day appointments. Call ${PHONE} to book now!`
    : `Find the best physiotherapy services in ${cityName} at ${BRAND}. Expert pain management, home visits & tele-rehab by ${DOCTOR}. Call ${PHONE} to book your appointment today!`;

  const pageKeywords = serviceSlug
    ? [
        `${serviceName.toLowerCase()} in ${cityName}`,
        `best ${serviceName.toLowerCase()} ${cityName}`,
        `${serviceName.toLowerCase()} near me ${cityName}`,
        `${serviceName.toLowerCase()} specialist ${cityName}`,
        `physiotherapy ${cityName}`,
        `physiotherapist near me ${cityName}`,
        `best physiotherapist ${cityName}`,
        `pain management ${cityName}`,
        `physiotherapy clinic ${cityName}`,
        `home physiotherapy ${cityName}`,
        `${serviceName.toLowerCase()} treatment ${cityName}`,
        `${BRAND.toLowerCase()} ${cityName}`,
      ].join(", ")
    : [
        `physiotherapy in ${cityName}`,
        `best physiotherapy ${cityName}`,
        `physiotherapist near me ${cityName}`,
        `physiotherapy centre ${cityName}`,
        `pain management ${cityName}`,
        `home physiotherapy ${cityName}`,
        `back pain treatment ${cityName}`,
        `knee pain physiotherapy ${cityName}`,
        `sports injury treatment ${cityName}`,
        `neuro physiotherapy ${cityName}`,
        `${BRAND.toLowerCase()} ${cityName}`,
      ].join(", ");

  // Schema: MedicalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `${BRAND} – ${cityName}`,
    description: pageDescription,
    url: canonicalUrl,
    image: ogImage,
    logo: `${SITE_URL}/logo.png`,
    telephone: PHONE,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI",
    openingHours: "Mo-Sa 09:00-20:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: "E-36, First Floor, Kalkaji",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110019",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.5494",
      longitude: "77.2601",
    },
    areaServed: [{ "@type": "City", name: cityName }],
    medicalSpecialty: "Physiotherapy",
    founder: {
      "@type": "Person",
      name: DOCTOR,
      jobTitle: "Senior Physiotherapist",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["Hindi", "English"],
    },
    sameAs: [
      "https://www.facebook.com/advancedpainphysiotherapy",
      "https://www.instagram.com/advancedpainphysiotherapy",
    ],
    availableService: serviceSlug
      ? [
          {
            "@type": "MedicalProcedure",
            name: serviceName,
            description: currentItem?.description || `${serviceName} treatment in ${cityName}`,
            procedureType: "PhysicalExam",
          },
        ]
      : [
          { "@type": "MedicalProcedure", name: "Physiotherapy Treatment" },
          { "@type": "MedicalProcedure", name: "Home Physiotherapy" },
          { "@type": "MedicalProcedure", name: "Tele Rehabilitation" },
          { "@type": "MedicalProcedure", name: "Sports Injury Rehabilitation" },
          { "@type": "MedicalProcedure", name: "Neurological Physiotherapy" },
        ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "320",
      bestRating: "5",
      worstRating: "1",
    },
  };

  // Schema: BreadcrumbList
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: `Physiotherapy in ${cityName}`,
        item: `${SITE_URL}/physiotherapy-in-${citySlug}`,
      },
      ...(serviceSlug
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: `${serviceName} in ${cityName}`,
              item: canonicalUrl,
            },
          ]
        : []),
    ],
  };

  // Schema: FAQPage
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: serviceSlug
          ? `Where can I get the best ${serviceName} in ${cityName}?`
          : `Where is the best physiotherapy centre in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: serviceSlug
            ? `${BRAND} provides expert ${serviceName} in ${cityName} by ${DOCTOR}. Advanced techniques, certified physiotherapists & same-day appointments available. Call ${PHONE} to book.`
            : `${BRAND} is one of the best physiotherapy centres in ${cityName}, offering expert care by ${DOCTOR}. Call ${PHONE} to book your appointment.`,
        },
      },
      {
        "@type": "Question",
        name: `Does Advanced Pain Physiotherapy offer home visits in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, ${BRAND} provides home physiotherapy visits across ${cityName}. Our certified physiotherapists come to your doorstep. Call ${PHONE} to schedule.`,
        },
      },
      {
        "@type": "Question",
        name: `How do I book a physiotherapy appointment in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can book a physiotherapy appointment in ${cityName} by calling ${PHONE} or visiting ${SITE_URL}. Same-day appointments are often available.`,
        },
      },
    ],
  };

  return (
    <Helmet>
      {/* Primary */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content={DOCTOR} />
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content={cityName} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${serviceSlug ? serviceName : "Physiotherapy"} in ${cityName}`} />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${serviceSlug ? serviceName : "Physiotherapy"} in ${cityName}`} />

      {/* Schemas */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      <script type="application/ld+json">{JSON.stringify(faqData)}</script>
    </Helmet>
  );
};

// ── CityOverviewInline ────────────────────────────────────────────────────────
const CityOverviewInline = ({ citySlug }) => {
  const navigate = useNavigate();
  const cityName = getCityNameFromSlug(citySlug);
  const canonicalUrl = `${SITE_URL}/physiotherapy-in-${citySlug}`;
  const pageTitle = `Best Physiotherapy Centre in ${cityName} | ${BRAND}`;
  const pageDescription = `Find the best physiotherapy services in ${cityName} at ${BRAND}. Expert pain management, home visits & tele-rehab by ${DOCTOR}. Call ${PHONE} to book today!`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `${BRAND} – ${cityName}`,
    description: pageDescription,
    url: canonicalUrl,
    telephone: PHONE,
    areaServed: [{ "@type": "City", name: cityName }],
    medicalSpecialty: "Physiotherapy",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "320",
      bestRating: "5",
    },
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={BRAND} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-gray-800 mb-4">Physiotherapy in {cityName}</h1>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

// ── AreaDetailPage ────────────────────────────────────────────────────────────
const AreaDetailPage = () => {
  const { fullSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ ALL HOOKS FIRST
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  const { serviceSlug, citySlug, areaSlug } = useMemo(
    () => parseFullSlug(fullSlug, safeCitiesData),
    [fullSlug]
  );

  const currentItem = useMemo(() => {
    if (!serviceSlug) return null;

    let found = allServicesData.find((s) => s && s.slug === serviceSlug);
    if (found) return { ...found, type: "service" };

    found = (conditionsData || []).find((condition) => {
      if (!condition) return false;
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
      };
    }

    return null;
  }, [serviceSlug]);

  const cityName = useMemo(
    () => location.state?.cityName || getCityNameFromSlug(citySlug || ""),
    [citySlug, location.state]
  );

  const currentCityData = useMemo(
    () => safeCitiesData.find((city) => city.slug === citySlug) || safeCitiesData[0] || { areas: [] },
    [citySlug]
  );

  const serviceName = currentItem?.title || "Physiotherapy Treatment";

  // Auto-scroll
  useEffect(() => {
    if (areaSlug || !serviceSlug) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused && container) {
        scrollPosition += 0.8;
        if (scrollPosition >= container.scrollWidth / 2) scrollPosition = 0;
        container.scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => { if (animationFrameId) cancelAnimationFrame(animationFrameId); };
  }, [isPaused, areaSlug, serviceSlug]);

  // Loading + scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [fullSlug]);

  const handleAreaClick = (area) => {
    const url = buildAreaUrl(citySlug, area, serviceSlug);
    navigate(url, { state: { cityName, areaName: area, serviceName } });
  };

  // ── Conditional renders (after all hooks) ────────────────────────────────────

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

  // Delegate area pages to AreaPhysiotherapyDetailPage
  if (areaSlug) {
    const AreaPhysiotherapyDetailPage = React.lazy(
      () => import("../AreaPhysiotherapyDetailPage/AreaPhysiotherapyDetailPage")
    );
    return (
      <React.Suspense fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8ab72e] border-solid"></div>
        </div>
      }>
        <AreaPhysiotherapyDetailPage
          key={fullSlug}
          citySlug={citySlug}
          areaSlug={areaSlug}
          serviceSlug={serviceSlug}
        />
      </React.Suspense>
    );
  }

  // City overview — no service
  if (!serviceSlug && citySlug) {
    return <CityOverviewInline citySlug={citySlug} />;
  }

  // Service not found
  if (!currentItem) {
    return (
      <>
        <Helmet>
          <title>Service Not Found | {BRAND}</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="text-center max-w-md mx-auto">
            <div className="text-6xl mb-4">😕</div>
            <h2 className="text-3xl text-gray-700 mb-4">Service Not Found</h2>
            <p className="text-sm text-gray-500 mb-6 font-mono bg-gray-100 p-3 rounded">
              URL: <span className="text-red-600">/{fullSlug}</span>
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </>
    );
  }

  const safeAreas = currentCityData.areas || [];

  // ── Main city + service page ──────────────────────────────────────────────────
  return (
    <>
      {/* ✅ SEO */}
      <CityServiceSEO
        serviceSlug={serviceSlug}
        citySlug={citySlug}
        cityName={cityName}
        serviceName={serviceName}
        currentItem={currentItem}
      />

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

              {/* Breadcrumb — visible + SEO */}
              <nav aria-label="breadcrumb" className="hidden sm:flex items-center gap-2 text-white/80 text-xs sm:text-sm mb-3 sm:mb-4">
                <span className="cursor-pointer hover:text-white hover:underline" onClick={() => navigate("/")}>Home</span>
                <span className="text-white/60">›</span>
                <span className="cursor-pointer hover:text-white hover:underline" onClick={() => navigate(buildCityUrl(citySlug))}>{cityName}</span>
                <span className="text-white/60">›</span>
                <span className="text-white font-medium">{serviceName}</span>
              </nav>

              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-2 sm:mb-3">
                <span className="text-white text-xs sm:text-sm font-medium">
                  {currentItem.category || "Treatment"}
                </span>
              </div>

              {/* ✅ H1 — city included for local SEO */}
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2 sm:mb-3 leading-tight"
                style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
              >
                Best {serviceName} in {cityName}
              </h1>

              <p
                className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl leading-relaxed text-white/90"
                style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
              >
                Expert {serviceName.toLowerCase()} by certified physiotherapists in {cityName}.
                Advanced treatment techniques, same-day appointments & home visits available.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  className="group w-full sm:w-auto px-6 py-3 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
                  aria-label="Request a callback from our physiotherapist"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  Request Callback
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <a
                  href={`tel:${PHONE_CLEAN}`}
                  className="w-full sm:w-auto px-6 py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
                  aria-label={`Call us at ${PHONE}`}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="bg-white py-8 sm:py-10 md:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                {/* ✅ H2 — keyword rich with city */}
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3"
                  style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
                >
                  Best <span className="text-[#8ab72e] font-medium">{serviceName}</span> Treatment in {cityName}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg" style={{ fontFamily: "'Gantari', sans-serif" }}>
                  Comprehensive {serviceName.toLowerCase()} care by certified experts in {cityName}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                    <img
                      src={currentItem.image}
                      alt={`${serviceName} treatment in ${cityName}`}
                      className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width="600"
                      height="480"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                </div>
                <div className="space-y-4" style={{ fontFamily: "'Gantari', sans-serif" }}>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border-l-4 border-[#8ab72e]">
                    <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-2 sm:mb-3 font-semibold">
                      {serviceName} Treatment in {cityName}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
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

        {/* Areas Slider */}
        {safeAreas.length > 0 && (
          <div className="bg-white py-6 sm:py-8 md:py-10 border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6 sm:mb-8">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3"
                  style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
                >
                  {serviceName} in Areas of{" "}
                  <span className="text-[#8ab72e] font-medium">{cityName}</span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Gantari', sans-serif" }}>
                  Select your area to connect with top-rated physiotherapists near you
                </p>
              </div>
              <div className="relative max-w-6xl mx-auto overflow-hidden">
                <div
                  ref={scrollContainerRef}
                  className="overflow-x-auto hide-scrollbar"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  style={{ scrollBehavior: "auto", cursor: "grab" }}
                >
                  <div className="flex gap-3 sm:gap-4 pb-4" style={{ minWidth: "min-content" }}>
                    {[...safeAreas, ...safeAreas].map((area, index) => (
                      <button
                        key={`area-${index}`}
                        onClick={() => handleAreaClick(area)}
                        aria-label={`${serviceName} in ${area}, ${cityName}`}
                        className="group flex-shrink-0 bg-white hover:bg-[#8ab72e] border-2 border-gray-200 hover:border-[#8ab72e] rounded-full px-4 sm:px-5 py-2.5 sm:py-3 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-md hover:shadow-xl"
                      >
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#8ab72e] group-hover:text-white transition-colors flex-shrink-0" />
                        <span className="text-gray-800 group-hover:text-white text-xs sm:text-sm md:text-base whitespace-nowrap font-medium transition-colors">
                          {area}
                        </span>
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#8ab72e] group-hover:bg-white flex items-center justify-center transition-all duration-300 flex-shrink-0">
                          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white group-hover:text-[#8ab72e] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        )}

        <style jsx>{`
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    </>
  );
};

export default AreaDetailPage;