


// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { ChevronLeft, MapPin, Star, Phone, Calendar } from "lucide-react";
// import { citiesData } from "../../data/citiesData";
// import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
// import ServicesSlider from "../../components/ServiceCard/ServicesSlider";
// import TherapyExpertiseSection from "../../components/TherapyExpertise/TherapyExpertiseSection";
// import ConditionsSection from "../../components/ConditionsDataSection/ConditionsSection";
// import ServicesCardsSection from "../../components/ServiceCard/ServicesCardsSection";

// const PhysiotherapistsNearYou = () => {
//   const { citySlug } = useParams();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const scrollContainerRef = useRef(null);

//   const getCityFromSlug = (slug) => {
//     const cityMap = {
//       delhi: "Delhi",
//       noida: "Noida",
//       gurugram: "Gurugram",
//       ghaziabad: "Ghaziabad",
//       faridabad: "Faridabad",
//     };
//     return cityMap[slug] || slug;
//   };

//   const cityName = getCityFromSlug(citySlug);
//   const cityData = citiesData.find(
//     (city) => city.name.toLowerCase() === cityName.toLowerCase()
//   );

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     const timer = setTimeout(() => setIsLoading(false), 300);
//     return () => clearTimeout(timer);
//   }, [citySlug]);

//   // Auto-scroll effect
//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     if (!scrollContainer) return;

//     let scrollDirection = 1;
//     const scrollSpeed = 1;

//     const autoScroll = setInterval(() => {
//       if (scrollContainer) {
//         const maxScroll =
//           scrollContainer.scrollWidth - scrollContainer.clientWidth;

//         if (scrollContainer.scrollLeft >= maxScroll) {
//           scrollDirection = -1;
//         } else if (scrollContainer.scrollLeft <= 0) {
//           scrollDirection = 1;
//         }

//         scrollContainer.scrollLeft += scrollSpeed * scrollDirection;
//       }
//     }, 20);

//     return () => clearInterval(autoScroll);
//   }, [isLoading, cityData]);

//   // ✅ FIXED: New SEO-friendly URL format
//   // Old: /city/delhi/area/janakpuri/sports-injury
//   // New: /physiotherapy-in-delhi/janakpuri
//   const handleAreaClick = (area) => {
//     const areaSlugified = area.toLowerCase().replace(/\s+/g, "-");
//     navigate(`/physiotherapy-in-${citySlug}-${areaSlugified}`, {
//       state: {
//         cityName,
//         areaName: area,
//         serviceName: "Physiotherapy Treatment",
//       },
//     });
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

//   if (!cityData) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-3xl text-gray-800 mb-4">City Not Found</h2>
//           <button
//             onClick={() => navigate("/")}
//             className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300"
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Banner */}
//       <div
//         className="relative h-[500px] bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop)",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-[#8ab72e]/90 to-[#8ab72e]/90"></div>

//         <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center text-white mb-6 hover:text-gray-200 transition-colors group w-fit"
//           >
//             <ChevronLeft className="w-6 h-6 mr-2 transition-transform group-hover:translate-x-[-3px]" />
//             <span>Back</span>
//           </button>

//           <div className="max-w-4xl">
//             <h1
//               className="text-4xl md:text-6xl text-white mb-4 animate-fade-in"
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//             >
//               Best Physiotherapy Centre In {cityName}
//             </h1>

//             <p
//               style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
//               className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl animate-fade-in-delay"
//             >
//               Best Physiotherapists Near You in {cityName}. Providing Advanced
//               Hi-Tech Therapies with Certified Experts for Faster Recovery.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
//               <button className="group px-8 py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
//                 <Calendar className="w-5 h-5" />
//                 Request Callback
//                 <svg
//                   className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
//                 className="px-8 py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
//               >
//                 <Phone className="w-5 h-5" />
//                 Book Appointment
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Physiotherapy Info Section */}
//       <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//               <div className="order-2 lg:order-1 animate-fade-in-left">
//                 <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
//                   <img
//                     src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
//                     alt="Physiotherapy Treatment"
//                     className="w-full h-[400px] md:h-[500px] object-cover"
//                   />
//                   <div className="absolute bottom-6 right-6 bg-[#8ab72e] text-white px-6 py-3 rounded-full shadow-lg">
//                     Physical Therapy
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className="order-1 lg:order-2 animate-fade-in-right"
//                 style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
//               >
//                 <h2 className="text-3xl md:text-5xl text-gray-800 mb-6 leading-tight">
//                   Physiotherapy – Reduce Pain & Improve Function
//                 </h2>

//                 <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
//                   Physiotherapy is an evidence-based approach to restore
//                   movement, reduce pain, and improve function. Expert
//                   physiotherapists assess the root cause of your concern and
//                   design a personalized plan using exercise therapy, manual
//                   techniques, and clinically validated modalities to help you
//                   move better, perform better, and prevent future injuries.
//                 </p>

//                 <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#8ab72e]">
//                   <p className="text-gray-700 text-base leading-relaxed mb-4">
//                     At{" "}
//                     <span className="text-[#8ab72e]">
//                       Advanced Pain Physiotherapy Centre
//                     </span>
//                     , our clinicians combine hands-on care with advanced
//                     supportive technologies to create a results-driven program
//                     tailored to your goals.
//                   </p>
//                 </div>

//                 <div className="mt-8">
//                   <Link to="/contact">
//                     <button className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
//                       Book Your Consultation
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <div
//         className="bg-gray-50 py-16"
//         style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
//       >
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="w-16 h-16 bg-[#8ab72e]/10 rounded-full flex items-center justify-center mb-4">
//                 <span className="text-3xl">🏥</span>
//               </div>
//               <h3 className="text-xl text-gray-800 mb-3">Advanced Clinics</h3>
//               <p className="text-gray-600">
//                 Modern infrastructure with latest physiotherapy equipment and
//                 certified professionals
//               </p>
//             </div>

//             <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="w-16 h-16 bg-[#8ab72e]/10 rounded-full flex items-center justify-center mb-4">
//                 <span className="text-3xl">🏠</span>
//               </div>
//               <h3 className="text-xl text-gray-800 mb-3">Home Care</h3>
//               <p className="text-gray-600">
//                 Professional physiotherapy services at your home with expert
//                 oversight
//               </p>
//             </div>

//             <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="w-16 h-16 bg-[#8ab72e]/10 rounded-full flex items-center justify-center mb-4">
//                 <span className="text-3xl">💻</span>
//               </div>
//               <h3 className="text-xl text-gray-800 mb-3">Tele Rehab</h3>
//               <p className="text-gray-600">
//                 Personalized exercise programs with continued guidance and
//                 mentoring
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <ServicesSlider cityName={cityName} />
//       <TherapyExpertiseSection cityName={cityName} />
//       <TestimonialsSection />
//       <ServicesCardsSection cityName={cityName} />
//       <ConditionsSection cityName={cityName} />

//       {/* Areas Slider */}
//       <div className="bg-white py-5">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2
//               className="text-3xl md:text-4xl text-gray-800 mb-4"
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//             >
//               Find Physiotherapists in{" "}
//               <span className="text-[#8ab72e]">{cityName}</span>
//             </h2>
//             <h6 className="text-gray-600 text-lg max-w-3xl mx-auto">
//               Select your area to connect with top-rated physiotherapists near
//               you
//             </h6>
//           </div>

//           <div
//             className="relative max-w-6xl mx-auto overflow-hidden"
//             style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
//           >
//             <div
//               ref={scrollContainerRef}
//               className="overflow-x-auto hide-scrollbar scroll-smooth"
//             >
//               <div
//                 className="flex gap-4 pb-4"
//                 style={{ minWidth: "min-content" }}
//               >
//                 {cityData.areas.map((area, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleAreaClick(area)}
//                     className="group flex-shrink-0 bg-white hover:bg-[#6f9724] border-2 border-gray-300 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 animate-slide-up flex items-center gap-3"
//                     style={{ animationDelay: `${index * 0.05}s` }}
//                   >
//                     <span className="text-gray-800 group-hover:text-white text-base whitespace-nowrap transition-colors duration-300">
//                       {area}
//                     </span>
//                     <div className="w-8 h-8 rounded-full bg-gray-800 group-hover:bg-white flex items-center justify-center transition-all duration-300">
//                       <svg
//                         className="w-4 h-4 text-white group-hover:text-[#6f9724] transition-colors duration-300"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 5l7 7-7 7"
//                         />
//                       </svg>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slide-up {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fade-in-left {
//           from { opacity: 0; transform: translateX(-30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes fade-in-right {
//           from { opacity: 0; transform: translateX(30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .animate-fade-in { animation: fade-in 0.6s ease-out; }
//         .animate-fade-in-delay { animation: fade-in 0.6s ease-out 0.2s both; }
//         .animate-fade-in-delay-3 { animation: fade-in 0.6s ease-out 0.6s both; }
//         .animate-slide-up { animation: slide-up 0.6s ease-out both; }
//         .animate-fade-in-left { animation: fade-in-left 0.6s ease-out; }
//         .animate-fade-in-right { animation: fade-in-right 0.6s ease-out; }
//         .hide-scrollbar::-webkit-scrollbar { display: none; }
//         .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//         .scroll-smooth { scroll-behavior: smooth; }
//       `}</style>
//     </div>
//   );
// };

// export default PhysiotherapistsNearYou;



// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { ChevronLeft, MapPin, Star, Phone, Calendar } from "lucide-react";
// import { citiesData } from "../../data/citiesData";
// import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
// import ServicesSlider from "../../components/ServiceCard/ServicesSlider";
// import TherapyExpertiseSection from "../../components/TherapyExpertise/TherapyExpertiseSection";
// import ConditionsSection from "../../components/ConditionsDataSection/ConditionsSection";
// import ServicesCardsSection from "../../components/ServiceCard/ServicesCardsSection";

// // ✅ citySlug prop bhi accept karta hai (SmartRouter se) aur useParams bhi (direct route se)
// const PhysiotherapistsNearYou = ({ citySlug: citySlugProp }) => {
//   const { citySlug: citySlugParam } = useParams();
//   const citySlug = citySlugProp || citySlugParam; // prop priority, fallback params

//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const scrollContainerRef = useRef(null);

//   const getCityFromSlug = (slug) => {
//     const cityMap = {
//       delhi: "Delhi",
//       noida: "Noida",
//       gurugram: "Gurugram",
//       ghaziabad: "Ghaziabad",
//       faridabad: "Faridabad",
//     };
//     return cityMap[slug] || (slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "");
//   };

//   const cityName = getCityFromSlug(citySlug);
//   const cityData = citiesData.find(
//     (city) => city.name.toLowerCase() === cityName.toLowerCase()
//   );

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     const timer = setTimeout(() => setIsLoading(false), 300);
//     return () => clearTimeout(timer);
//   }, [citySlug]);

//   // Auto-scroll effect
//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     if (!scrollContainer) return;

//     let scrollDirection = 1;
//     const scrollSpeed = 1;

//     const autoScroll = setInterval(() => {
//       if (scrollContainer) {
//         const maxScroll =
//           scrollContainer.scrollWidth - scrollContainer.clientWidth;

//         if (scrollContainer.scrollLeft >= maxScroll) {
//           scrollDirection = -1;
//         } else if (scrollContainer.scrollLeft <= 0) {
//           scrollDirection = 1;
//         }

//         scrollContainer.scrollLeft += scrollSpeed * scrollDirection;
//       }
//     }, 20);

//     return () => clearInterval(autoScroll);
//   }, [isLoading, cityData]);

//   const handleAreaClick = (area) => {
//     const areaSlugified = area.toLowerCase().replace(/\s+/g, "-");
//     navigate(`/physiotherapy-in-${citySlug}-${areaSlugified}`, {
//       state: {
//         cityName,
//         areaName: area,
//         serviceName: "Physiotherapy Treatment",
//       },
//     });
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

//   if (!cityData) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-3xl text-gray-800 mb-4">City Not Found</h2>
//           <button
//             onClick={() => navigate("/")}
//             className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300"
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Banner */}
//       <div
//         className="relative h-[500px] bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop)",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-[#8ab72e]/90 to-[#8ab72e]/90"></div>

//         <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center text-white mb-6 hover:text-gray-200 transition-colors group w-fit"
//           >
//             <ChevronLeft className="w-6 h-6 mr-2 transition-transform group-hover:translate-x-[-3px]" />
//             <span>Back</span>
//           </button>

//           <div className="max-w-4xl">
//             <h1
//               className="text-4xl md:text-6xl text-white mb-4 animate-fade-in"
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//             >
//               Best Physiotherapy Centre In {cityName}
//             </h1>

//             <p
//               style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
//               className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl animate-fade-in-delay"
//             >
//               Best Physiotherapists Near You in {cityName}. Providing Advanced
//               Hi-Tech Therapies with Certified Experts for Faster Recovery.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
//               <button className="group px-8 py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
//                 <Calendar className="w-5 h-5" />
//                 Request Callback
//                 <svg
//                   className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
//                 className="px-8 py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
//               >
//                 <Phone className="w-5 h-5" />
//                 Book Appointment
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Physiotherapy Info Section */}
//       <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//               <div className="order-2 lg:order-1 animate-fade-in-left">
//                 <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
//                   <img
//                     src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
//                     alt="Physiotherapy Treatment"
//                     className="w-full h-[400px] md:h-[500px] object-cover"
//                   />
//                   <div className="absolute bottom-6 right-6 bg-[#8ab72e] text-white px-6 py-3 rounded-full shadow-lg">
//                     Physical Therapy
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className="order-1 lg:order-2 animate-fade-in-right"
//                 style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
//               >
//                 <h2 className="text-3xl md:text-5xl text-gray-800 mb-6 leading-tight">
//                   Physiotherapy – Reduce Pain & Improve Function
//                 </h2>

//                 <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
//                   Physiotherapy is an evidence-based approach to restore
//                   movement, reduce pain, and improve function. Expert
//                   physiotherapists assess the root cause of your concern and
//                   design a personalized plan using exercise therapy, manual
//                   techniques, and clinically validated modalities to help you
//                   move better, perform better, and prevent future injuries.
//                 </p>

//                 <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#8ab72e]">
//                   <p className="text-gray-700 text-base leading-relaxed mb-4">
//                     At{" "}
//                     <span className="text-[#8ab72e]">
//                       Advanced Pain Physiotherapy Centre
//                     </span>
//                     , our clinicians combine hands-on care with advanced
//                     supportive technologies to create a results-driven program
//                     tailored to your goals.
//                   </p>
//                 </div>

//                 <div className="mt-8">
//                   <Link to="/contact">
//                     <button className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
//                       Book Your Consultation
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <div
//         className="bg-gray-50 py-16"
//         style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
//       >
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="w-16 h-16 bg-[#8ab72e]/10 rounded-full flex items-center justify-center mb-4">
//                 <span className="text-3xl">🏥</span>
//               </div>
//               <h3 className="text-xl text-gray-800 mb-3">Advanced Clinics</h3>
//               <p className="text-gray-600">
//                 Modern infrastructure with latest physiotherapy equipment and
//                 certified professionals
//               </p>
//             </div>

//             <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="w-16 h-16 bg-[#8ab72e]/10 rounded-full flex items-center justify-center mb-4">
//                 <span className="text-3xl">🏠</span>
//               </div>
//               <h3 className="text-xl text-gray-800 mb-3">Home Care</h3>
//               <p className="text-gray-600">
//                 Professional physiotherapy services at your home with expert
//                 oversight
//               </p>
//             </div>

//             <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="w-16 h-16 bg-[#8ab72e]/10 rounded-full flex items-center justify-center mb-4">
//                 <span className="text-3xl">💻</span>
//               </div>
//               <h3 className="text-xl text-gray-800 mb-3">Tele Rehab</h3>
//               <p className="text-gray-600">
//                 Personalized exercise programs with continued guidance and
//                 mentoring
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <ServicesSlider cityName={cityName} />
//       <TherapyExpertiseSection cityName={cityName} />
//       <TestimonialsSection />
//       <ServicesCardsSection cityName={cityName} />
//       <ConditionsSection cityName={cityName} />

//       {/* Areas Slider */}
//       <div className="bg-white py-5">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2
//               className="text-3xl md:text-4xl text-gray-800 mb-4"
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//             >
//               Find Physiotherapists in{" "}
//               <span className="text-[#8ab72e]">{cityName}</span>
//             </h2>
//             <h6 className="text-gray-600 text-lg max-w-3xl mx-auto">
//               Select your area to connect with top-rated physiotherapists near
//               you
//             </h6>
//           </div>

//           <div
//             className="relative max-w-6xl mx-auto overflow-hidden"
//             style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
//           >
//             <div
//               ref={scrollContainerRef}
//               className="overflow-x-auto hide-scrollbar scroll-smooth"
//             >
//               <div
//                 className="flex gap-4 pb-4"
//                 style={{ minWidth: "min-content" }}
//               >
//                 {cityData.areas.map((area, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleAreaClick(area)}
//                     className="group flex-shrink-0 bg-white hover:bg-[#6f9724] border-2 border-gray-300 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 animate-slide-up flex items-center gap-3"
//                     style={{ animationDelay: `${index * 0.05}s` }}
//                   >
//                     <span className="text-gray-800 group-hover:text-white text-base whitespace-nowrap transition-colors duration-300">
//                       {area}
//                     </span>
//                     <div className="w-8 h-8 rounded-full bg-gray-800 group-hover:bg-white flex items-center justify-center transition-all duration-300">
//                       <svg
//                         className="w-4 h-4 text-white group-hover:text-[#6f9724] transition-colors duration-300"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 5l7 7-7 7"
//                         />
//                       </svg>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slide-up {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fade-in-left {
//           from { opacity: 0; transform: translateX(-30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes fade-in-right {
//           from { opacity: 0; transform: translateX(30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .animate-fade-in { animation: fade-in 0.6s ease-out; }
//         .animate-fade-in-delay { animation: fade-in 0.6s ease-out 0.2s both; }
//         .animate-fade-in-delay-3 { animation: fade-in 0.6s ease-out 0.6s both; }
//         .animate-slide-up { animation: slide-up 0.6s ease-out both; }
//         .animate-fade-in-left { animation: fade-in-left 0.6s ease-out; }
//         .animate-fade-in-right { animation: fade-in-right 0.6s ease-out; }
//         .hide-scrollbar::-webkit-scrollbar { display: none; }
//         .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//         .scroll-smooth { scroll-behavior: smooth; }
//       `}</style>
//     </div>
//   );
// };

// export default PhysiotherapistsNearYou;



// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { ChevronLeft, Phone, Calendar } from "lucide-react";
// import { citiesData } from "../../data/citiesData";
// import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
// import ServicesSlider from "../../components/ServiceCard/ServicesSlider";
// import TherapyExpertiseSection from "../../components/TherapyExpertise/TherapyExpertiseSection";
// import ConditionsSection from "../../components/ConditionsDataSection/ConditionsSection";
// import ServicesCardsSection from "../../components/ServiceCard/ServicesCardsSection";

// // ✅ citySlug prop bhi accept karta hai (SmartRouter se) aur useParams bhi (direct route se)
// const PhysiotherapistsNearYou = ({ citySlug: citySlugProp }) => {
//   const { citySlug: citySlugParam } = useParams();
//   const citySlug = citySlugProp || citySlugParam;

//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const scrollContainerRef = useRef(null);

//   const getCityFromSlug = (slug) => {
//     const cityMap = {
//       delhi: "Delhi",
//       noida: "Noida",
//       gurugram: "Gurugram",
//       ghaziabad: "Ghaziabad",
//       faridabad: "Faridabad",
//     };
//     return cityMap[slug] || (slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "");
//   };

//   const cityName = getCityFromSlug(citySlug);
//   const cityData = citiesData.find(
//     (city) => city.name.toLowerCase() === cityName.toLowerCase()
//   );

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     const timer = setTimeout(() => setIsLoading(false), 300);
//     return () => clearTimeout(timer);
//   }, [citySlug]);

//   // Auto-scroll effect
//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     if (!scrollContainer) return;

//     let scrollDirection = 1;
//     const scrollSpeed = 1;

//     const autoScroll = setInterval(() => {
//       if (scrollContainer) {
//         const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
//         if (scrollContainer.scrollLeft >= maxScroll) scrollDirection = -1;
//         else if (scrollContainer.scrollLeft <= 0) scrollDirection = 1;
//         scrollContainer.scrollLeft += scrollSpeed * scrollDirection;
//       }
//     }, 20);

//     return () => clearInterval(autoScroll);
//   }, [isLoading, cityData]);

//   // ✅ NEW URL format: /physiotherapy-in-{area}-{city}
//   const handleAreaClick = (area) => {
//     const areaSlugified = area.toLowerCase().replace(/\s+/g, "-");
//     navigate(`/physiotherapy-in-${areaSlugified}-${citySlug}`, {
//       state: {
//         cityName,
//         areaName: area,
//         serviceName: "Physiotherapy Treatment",
//       },
//     });
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

//   if (!cityData) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-3xl text-gray-800 mb-4">City Not Found</h2>
//           <button
//             onClick={() => navigate("/")}
//             className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300"
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Banner */}
      
//       <div
//         className="relative h-[500px] bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop)",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-[#8ab72e]/90 to-[#8ab72e]/90"></div>
//         <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center text-white mb-6 hover:text-gray-200 transition-colors group w-fit"
//           >
//             <ChevronLeft className="w-6 h-6 mr-2 transition-transform group-hover:translate-x-[-3px]" />
//             <span>Back</span>
//           </button>

//           <div className="max-w-4xl">
//             <h1
//               className="text-4xl md:text-6xl text-white mb-4 animate-fade-in"
//               style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
//             >
//               Best Physiotherapy Centre In {cityName}
//             </h1>

//             <p
//               style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
//               className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl animate-fade-in-delay"
//             >
//               Best Physiotherapists Near You in {cityName}. Providing Advanced
//               Hi-Tech Therapies with Certified Experts for Faster Recovery.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
//               <button className="group px-8 py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
//                 <Calendar className="w-5 h-5" />
//                 Request Callback
//                 <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//               <Link
//                 to="/contact"
//                 className="px-8 py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
//               >
//                 <Phone className="w-5 h-5" />
//                 Book Appointment
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Physiotherapy Info Section */}
//       <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//               <div className="order-2 lg:order-1 animate-fade-in-left">
//                 <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
//                   <img
//                     src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
//                     alt="Physiotherapy Treatment"
//                     className="w-full h-[400px] md:h-[500px] object-cover"
//                   />
//                   <div className="absolute bottom-6 right-6 bg-[#8ab72e] text-white px-6 py-3 rounded-full shadow-lg">
//                     Physical Therapy
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className="order-1 lg:order-2 animate-fade-in-right"
//                 style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
//               >
//                 <h2 className="text-3xl md:text-5xl text-gray-800 mb-6 leading-tight">
//                   Physiotherapy – Reduce Pain & Improve Function
//                 </h2>
//                 <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
//                   Physiotherapy is an evidence-based approach to restore movement, reduce pain,
//                   and improve function. Expert physiotherapists assess the root cause of your
//                   concern and design a personalized plan using exercise therapy, manual
//                   techniques, and clinically validated modalities.
//                 </p>
//                 <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#8ab72e]">
//                   <p className="text-gray-700 text-base leading-relaxed mb-4">
//                     At{" "}
//                     <span className="text-[#8ab72e]">Advanced Pain Physiotherapy Centre</span>
//                     , our clinicians combine hands-on care with advanced supportive technologies
//                     to create a results-driven program tailored to your goals.
//                   </p>
//                 </div>
//                 <div className="mt-8">
//                   <Link to="/contact">
//                     <button className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
//                       Book Your Consultation
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <div className="bg-gray-50 py-16" style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}>
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {[
//               { emoji: "🏥", title: "Advanced Clinics", desc: "Modern infrastructure with latest physiotherapy equipment and certified professionals" },
//               { emoji: "🏠", title: "Home Care", desc: "Professional physiotherapy services at your home with expert oversight" },
//               { emoji: "💻", title: "Tele Rehab", desc: "Personalized exercise programs with continued guidance and mentoring" },
//             ].map((item, i) => (
//               <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
//                 <div className="w-16 h-16 bg-[#8ab72e]/10 rounded-full flex items-center justify-center mb-4">
//                   <span className="text-3xl">{item.emoji}</span>
//                 </div>
//                 <h3 className="text-xl text-gray-800 mb-3">{item.title}</h3>
//                 <p className="text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <ServicesSlider cityName={cityName} />
//       <TherapyExpertiseSection cityName={cityName} />
//       <TestimonialsSection />
//       <ServicesCardsSection cityName={cityName} />
//       <ConditionsSection cityName={cityName} />

//       {/* Areas Slider */}
//       <div className="bg-white py-5">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2
//               className="text-3xl md:text-4xl text-gray-800 mb-4"
//               style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
//             >
//               Find Physiotherapists in <span className="text-[#8ab72e]">{cityName}</span>
//             </h2>
//             <h6 className="text-gray-600 text-lg max-w-3xl mx-auto">
//               Select your area to connect with top-rated physiotherapists near you
//             </h6>
//           </div>

//           <div
//             className="relative max-w-6xl mx-auto overflow-hidden"
//             style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
//           >
//             <div ref={scrollContainerRef} className="overflow-x-auto hide-scrollbar scroll-smooth">
//               <div className="flex gap-4 pb-4" style={{ minWidth: "min-content" }}>
//                 {cityData.areas.map((area, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleAreaClick(area)}
//                     className="group flex-shrink-0 bg-white hover:bg-[#6f9724] border-2 border-gray-300 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 animate-slide-up flex items-center gap-3"
//                     style={{ animationDelay: `${index * 0.05}s` }}
//                   >
//                     <span className="text-gray-800 group-hover:text-white text-base whitespace-nowrap transition-colors duration-300">
//                       {area}
//                     </span>
//                     <div className="w-8 h-8 rounded-full bg-gray-800 group-hover:bg-white flex items-center justify-center transition-all duration-300">
//                       <svg className="w-4 h-4 text-white group-hover:text-[#6f9724] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes fade-in-left { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
//         @keyframes fade-in-right { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
//         .animate-fade-in { animation: fade-in 0.6s ease-out; }
//         .animate-fade-in-delay { animation: fade-in 0.6s ease-out 0.2s both; }
//         .animate-fade-in-delay-3 { animation: fade-in 0.6s ease-out 0.6s both; }
//         .animate-slide-up { animation: slide-up 0.6s ease-out both; }
//         .animate-fade-in-left { animation: fade-in-left 0.6s ease-out; }
//         .animate-fade-in-right { animation: fade-in-right 0.6s ease-out; }
//         .hide-scrollbar::-webkit-scrollbar { display: none; }
//         .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//         .scroll-smooth { scroll-behavior: smooth; }
//       `}</style>
//     </div>
//   );
// };

// export default PhysiotherapistsNearYou;



import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, Phone, Calendar } from "lucide-react";
import { citiesData } from "../../data/citiesData";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import ServicesSlider from "../../components/ServiceCard/ServicesSlider";
import TherapyExpertiseSection from "../../components/TherapyExpertise/TherapyExpertiseSection";
import ConditionsSection from "../../components/ConditionsDataSection/ConditionsSection";
import ServicesCardsSection from "../../components/ServiceCard/ServicesCardsSection";

// ✅ citySlug prop bhi accept karta hai (SmartRouter se) aur useParams bhi (direct route se)
const PhysiotherapistsNearYou = ({ citySlug: citySlugProp }) => {
  const { citySlug: citySlugParam } = useParams();
  const citySlug = citySlugProp || citySlugParam;

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef(null);

  const getCityFromSlug = (slug) => {
    const cityMap = {
      delhi: "Delhi",
      noida: "Noida",
      gurugram: "Gurugram",
      ghaziabad: "Ghaziabad",
      faridabad: "Faridabad",
    };
    return cityMap[slug] || (slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "");
  };

  const cityName = getCityFromSlug(citySlug);
  const cityData = citiesData.find(
    (city) => city.name.toLowerCase() === cityName.toLowerCase()
  );

  // ── SEO helpers ──────────────────────────────────────────────────────────────
  const pageTitle = `Best Physiotherapy Centre in ${cityName} | Advanced Pain Physiotherapy`;
  const pageDescription = `Looking for the best physiotherapists near you in ${cityName}? Advanced Pain Physiotherapy Centre offers expert physiotherapy treatment, home care & tele-rehab services in ${cityName}. Book your consultation today!`;
  const canonicalUrl = `https://www.advancedpainphysiotherapy.com/physiotherapists-near-you/${citySlug}`;
  const ogImage = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=630&fit=crop";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `Advanced Pain Physiotherapy Centre – ${cityName}`,
    description: pageDescription,
    url: canonicalUrl,
    image: ogImage,
    areaServed: {
      "@type": "City",
      name: cityName,
    },
    medicalSpecialty: "Physiotherapy",
    availableService: [
      { "@type": "MedicalProcedure", name: "Physiotherapy Treatment" },
      { "@type": "MedicalProcedure", name: "Home Physiotherapy" },
      { "@type": "MedicalProcedure", name: "Tele Rehabilitation" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://www.advancedpainphysiotherapy.com/contact",
    },
  };
  // ─────────────────────────────────────────────────────────────────────────────

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [citySlug]);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollDirection = 1;
    const scrollSpeed = 1;

    const autoScroll = setInterval(() => {
      if (scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (scrollContainer.scrollLeft >= maxScroll) scrollDirection = -1;
        else if (scrollContainer.scrollLeft <= 0) scrollDirection = 1;
        scrollContainer.scrollLeft += scrollSpeed * scrollDirection;
      }
    }, 20);

    return () => clearInterval(autoScroll);
  }, [isLoading, cityData]);

  // ✅ NEW URL format: /physiotherapy-in-{area}-{city}
  const handleAreaClick = (area) => {
    const areaSlugified = area.toLowerCase().replace(/\s+/g, "-");
    navigate(`/physiotherapy-in-${areaSlugified}-${citySlug}`, {
      state: {
        cityName,
        areaName: area,
        serviceName: "Physiotherapy Treatment",
      },
    });
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

  if (!cityData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl text-gray-800 mb-4">City Not Found</h2>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── React Helmet (SEO) ─────────────────────────────────────────────────── */}
      <Helmet>
        {/* Primary */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content={`physiotherapy in ${cityName}, physiotherapist near me ${cityName}, best physiotherapy centre ${cityName}, home physiotherapy ${cityName}, pain management ${cityName}`}
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
        <meta property="og:image:alt" content={`Physiotherapy Centre in ${cityName}`} />
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

      {/* Hero Banner */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#8ab72e]/90 to-[#8ab72e]/90"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white mb-6 hover:text-gray-200 transition-colors group w-fit"
          >
            <ChevronLeft className="w-6 h-6 mr-2 transition-transform group-hover:translate-x-[-3px]" />
            <span>Back</span>
          </button>

          <div className="max-w-4xl">
            <h1
              className="text-4xl md:text-6xl text-white mb-4 animate-fade-in"
              style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
            >
              Best Physiotherapy Centre In {cityName}
            </h1>

            <p
              style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
              className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl animate-fade-in-delay"
            >
              Best Physiotherapists Near You in {cityName}. Providing Advanced
              Hi-Tech Therapies with Certified Experts for Faster Recovery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              <button className="group px-8 py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Request Callback
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Physiotherapy Info Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in-left">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                    alt="Physiotherapy Treatment"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute bottom-6 right-6 bg-[#8ab72e] text-white px-6 py-3 rounded-full shadow-lg">
                    Physical Therapy
                  </div>
                </div>
              </div>

              <div
                className="order-1 lg:order-2 animate-fade-in-right"
                style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
              >
                <h2 className="text-3xl md:text-5xl text-gray-800 mb-6 leading-tight">
                  Physiotherapy – Reduce Pain & Improve Function
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  Physiotherapy is an evidence-based approach to restore movement, reduce pain,
                  and improve function. Expert physiotherapists assess the root cause of your
                  concern and design a personalized plan using exercise therapy, manual
                  techniques, and clinically validated modalities.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#8ab72e]">
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    At{" "}
                    <span className="text-[#8ab72e]">Advanced Pain Physiotherapy Centre</span>
                    , our clinicians combine hands-on care with advanced supportive technologies
                    to create a results-driven program tailored to your goals.
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/contact">
                    <button className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                      Book Your Consultation
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="bg-gray-50 py-16" style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { emoji: "🏥", title: "Advanced Clinics", desc: "Modern infrastructure with latest physiotherapy equipment and certified professionals" },
              { emoji: "🏠", title: "Home Care", desc: "Professional physiotherapy services at your home with expert oversight" },
              { emoji: "💻", title: "Tele Rehab", desc: "Personalized exercise programs with continued guidance and mentoring" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#8ab72e]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">{item.emoji}</span>
                </div>
                <h3 className="text-xl text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServicesSlider cityName={cityName} />
      <TherapyExpertiseSection cityName={cityName} />
      <TestimonialsSection />
      <ServicesCardsSection cityName={cityName} />
      <ConditionsSection cityName={cityName} />

      {/* Areas Slider */}
      <div className="bg-white py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl text-gray-800 mb-4"
              style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
            >
              Find Physiotherapists in <span className="text-[#8ab72e]">{cityName}</span>
            </h2>
            <h6 className="text-gray-600 text-lg max-w-3xl mx-auto">
              Select your area to connect with top-rated physiotherapists near you
            </h6>
          </div>

          <div
            className="relative max-w-6xl mx-auto overflow-hidden"
            style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
          >
            <div ref={scrollContainerRef} className="overflow-x-auto hide-scrollbar scroll-smooth">
              <div className="flex gap-4 pb-4" style={{ minWidth: "min-content" }}>
                {cityData.areas.map((area, index) => (
                  <button
                    key={index}
                    onClick={() => handleAreaClick(area)}
                    className="group flex-shrink-0 bg-white hover:bg-[#6f9724] border-2 border-gray-300 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 animate-slide-up flex items-center gap-3"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="text-gray-800 group-hover:text-white text-base whitespace-nowrap transition-colors duration-300">
                      {area}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-800 group-hover:bg-white flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4 text-white group-hover:text-[#6f9724] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-left { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fade-in-right { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-fade-in-delay { animation: fade-in 0.6s ease-out 0.2s both; }
        .animate-fade-in-delay-3 { animation: fade-in 0.6s ease-out 0.6s both; }
        .animate-slide-up { animation: slide-up 0.6s ease-out both; }
        .animate-fade-in-left { animation: fade-in-left 0.6s ease-out; }
        .animate-fade-in-right { animation: fade-in-right 0.6s ease-out; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .scroll-smooth { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default PhysiotherapistsNearYou;