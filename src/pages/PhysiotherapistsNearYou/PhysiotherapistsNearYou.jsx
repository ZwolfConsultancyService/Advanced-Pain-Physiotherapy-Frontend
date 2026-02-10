// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { ChevronLeft, MapPin, Star, Phone, Calendar } from "lucide-react";
// import { citiesData } from "../../data/citiesData";
// import CityNavigation from "../../components/CityNavigation/CityNavigation";
// import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
// import ServicesSlider from "../../components/ServiceCard/ServicesSlider";
// import TherapyExpertiseSection from "../../components/TherapyExpertise/TherapyExpertiseSection";
// import FAQSection from "../../components/FAQSection/FAQSection";

// const PhysiotherapistsNearYou = () => {
//   const { citySlug } = useParams();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const scrollContainerRef = useRef(null);

//   // Convert slug to city name and find city data
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

//     let scrollDirection = 1; // 1 for right, -1 for left
//     const scrollSpeed = 1; // pixels per interval

//     const autoScroll = setInterval(() => {
//       if (scrollContainer) {
//         const maxScroll =
//           scrollContainer.scrollWidth - scrollContainer.clientWidth;

//         // Change direction at edges
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

//   // Area click handler - NOW NAVIGATES TO AREA DETAIL PAGE
//   const handleAreaClick = (area) => {
//     // Convert area name to slug format (e.g., "Sector 18" -> "sector-18")
//     const areaSlugified = area.toLowerCase().replace(/\s+/g, "-");

//     // Default service slug - you can change this to any default service you prefer
//     const defaultServiceSlug = "sports-injury";

//     // Navigate to area detail page
//     navigate(`/city/${citySlug}/area/${areaSlugified}/${defaultServiceSlug}`, {
//       state: {
//         cityName,
//         areaName: area,
//         serviceName: "Physiotherapy Treatment" // Default service name
//       }
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
//           <h2 className="text-3xl  text-gray-800 mb-4">City Not Found</h2>
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

//         {/* Content */}
//         <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center text-white mb-6 hover:text-gray-200 transition-colors group w-fit"
//           >
//             <ChevronLeft className="w-6 h-6 mr-2 transition-transform group-hover:translate-x-[-3px]" />
//             <span className="">Back</span>
//           </button>

//           <div className="max-w-4xl">
//             <h1
//               className="text-4xl md:text-6xl  text-white mb-4 animate-fade-in"
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//             >
//               {cityName}'s Best Physiotherapists Near You
//             </h1>

//             <p
//               style={{
//                 fontFamily: "'Gantari', sans-serif",
//                 fontWeight: 400,
//               }}
//               className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl animate-fade-in-delay"
//             >
//               Find Top Physiotherapists near you in {cityName}. Advanced
//               Physiotherapy Clinics with Hi-Tech Therapies & Certified
//               Physiotherapists for AI Precision Recovery
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
//               <button className="group px-8 py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105  shadow-lg flex items-center justify-center gap-2">
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
//               <button className="px-8 py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105  shadow-lg flex items-center justify-center gap-2">
//                 <Phone className="w-5 h-5" />
//                 Book Appointment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div
//         className="bg-gray-50 py-16"
//         style={{
//           fontFamily: "'Gantari', sans-serif",
//           fontWeight: 400,
//         }}
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

//             <div
//               className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
//               style={{
//                 fontFamily: "'Gantari', sans-serif",
//                 fontWeight: 400,
//               }}
//             >
//               <div className="w-16 h-16 bg-[#8ab72e]/10 rounded-full flex items-center justify-center mb-4">
//                 <span className="text-3xl">🏠</span>
//               </div>
//               <h3 className="text-xl  text-gray-800 mb-3">Home Care</h3>
//               <p className="text-gray-600">
//                 Professional physiotherapy services at your home with expert
//                 oversight
//               </p>
//             </div>

//             <div
//               className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
//               style={{
//                 fontFamily: "'Gantari', sans-serif",
//                 fontWeight: 400,
//               }}
//             >
//               <div className="w-16 h-16 bg-[#8ab72e]/10 rounded-full flex items-center justify-center mb-4">
//                 <span className="text-3xl">💻</span>
//               </div>
//               <h3 className="text-xl  text-gray-800 mb-3">Tele Rehab</h3>
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

//       <div className="bg-white py-5">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2
//               className="text-3xl md:text-4xl  text-gray-800 mb-4"
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//             >
//               Find Physiotherapists in{" "}
//               <span className="text-[#8ab72e]">{cityName}</span>
//             </h2>
//             <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//               Select your area to connect with top-rated physiotherapists near
//               you
//             </p>
//           </div>

//           {/* Auto-Scrolling Slider */}
//           <div
//             className="relative max-w-6xl mx-auto overflow-hidden"
//             style={{
//               fontFamily: "'Gantari', sans-serif",
//               fontWeight: 400,
//             }}
//           >
//             <div
//               ref={scrollContainerRef}
//               className="overflow-x-auto hide-scrollbar scroll-smooth"
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.animationPlayState = "paused")
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.animationPlayState = "running")
//               }
//             >
//               <div
//                 className="flex gap-4 pb-4"
//                 style={{ minWidth: "min-content" }}
//               >
//                 {cityData.areas.map((area, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleAreaClick(area)}
//                     className="group flex-shrink-0 bg-white hover:bg-[#8ab72e] border-2 border-gray-300 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 animate-slide-up flex items-center gap-3"
//                     style={{ animationDelay: `${index * 0.05}s` }}
//                   >
//                     <span className="text-gray-800 group-hover:text-white  text-base whitespace-nowrap transition-colors duration-300">
//                       {area}
//                     </span>

//                     {/* Arrow Icon */}
//                     <div className="w-8 h-8 rounded-full bg-gray-800 group-hover:bg-white flex items-center justify-center transition-all duration-300">
//                       <svg
//                         className="w-4 h-4 text-white group-hover:text-[#8ab72e] transition-colors duration-300"
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

//       {/* Animations */}
//       <style>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes slide-up {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .animate-fade-in { animation: fade-in 0.6s ease-out; }
//         .animate-fade-in-delay { animation: fade-in 0.6s ease-out 0.2s both; }
//         .animate-fade-in-delay-2 { animation: fade-in 0.6s ease-out 0.4s both; }
//         .animate-fade-in-delay-3 { animation: fade-in 0.6s ease-out 0.6s both; }
//         .animate-slide-up { animation: slide-up 0.6s ease-out both; }

//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }

//         .scroll-smooth {
//           scroll-behavior: smooth;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PhysiotherapistsNearYou;

import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ChevronLeft, MapPin, Star, Phone, Calendar } from "lucide-react";
import { citiesData } from "../../data/citiesData";
import CityNavigation from "../../components/CityNavigation/CityNavigation";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import ServicesSlider from "../../components/ServiceCard/ServicesSlider";
import TherapyExpertiseSection from "../../components/TherapyExpertise/TherapyExpertiseSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import ConditionsSection from "../../components/ConditionsDataSection/ConditionsSection";
import ServicesCardsSection from "../../components/ServiceCard/ServicesCardsSection";

const PhysiotherapistsNearYou = () => {
  const { citySlug } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef(null);

  // Convert slug to city name and find city data
  const getCityFromSlug = (slug) => {
    const cityMap = {
      delhi: "Delhi",
      noida: "Noida",
      gurugram: "Gurugram",
      ghaziabad: "Ghaziabad",
      faridabad: "Faridabad",
    };
    return cityMap[slug] || slug;
  };

  const cityName = getCityFromSlug(citySlug);
  const cityData = citiesData.find(
    (city) => city.name.toLowerCase() === cityName.toLowerCase(),
  );

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
        const maxScroll =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollDirection = -1;
        } else if (scrollContainer.scrollLeft <= 0) {
          scrollDirection = 1;
        }

        scrollContainer.scrollLeft += scrollSpeed * scrollDirection;
      }
    }, 20);

    return () => clearInterval(autoScroll);
  }, [isLoading, cityData]);

  // Area click handler
  const handleAreaClick = (area) => {
    const areaSlugified = area.toLowerCase().replace(/\s+/g, "-");
    const defaultServiceSlug = "sports-injury";

    navigate(`/city/${citySlug}/area/${areaSlugified}/${defaultServiceSlug}`, {
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
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
            >
              Best Physiotherapy centre In {cityName}
            </h1>

            <p
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
              className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl animate-fade-in-delay"
            >
              Best Physiotherapists Near You in {cityName}. Providing Advanced
              Hi-Tech Therapies with Certified Experts for Faster Recovery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              <button className="group px-8 py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105  shadow-lg flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Request Callback
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
                className="px-8 py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105  shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== NEW PHYSIOTHERAPY INFO SECTION ==================== */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Image */}
              <div className="order-2 lg:order-1 animate-fade-in-left">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                    alt="Physiotherapy Treatment"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute bottom-6 right-6 bg-[#8ab72e] text-white px-6 py-3 rounded-full  shadow-lg">
                    Physical Therapy
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div
                className="order-1 lg:order-2 animate-fade-in-right"
                style={{
                  fontFamily: "'Gantari', sans-serif",
                  fontWeight: 400,
                }}
              >
                <h2 className="text-3xl md:text-5xl text-gray-800 mb-6 leading-tight">
                  Physiotherapy – Reduce Pain & Improve Function
                </h2>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  Physiotherapy is an evidence-based approach to restore
                  movement, reduce pain, and improve function. Expert
                  physiotherapists assess the root cause of your concern and
                  design a personalized plan using exercise therapy, manual
                  techniques, and clinically validated modalities to help you
                  move better, perform better, and prevent future injuries.
                  Physiotherapy treatment usually requires multiple sessions and
                  should hence be taken at physio clinics nearby.
                </p>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#8ab72e]">
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    At{" "}
                    <span className=" text-[#8ab72e]">
                      Advanced Pain Physiotherapy Centre
                    </span>
                    , our clinicians combine hands-on care with advanced
                    supportive technologies to create a results-driven program
                    tailored to your goals. Each plan follows a{" "}
                    <span className="">structured pathway</span>
                    —comprehensive assessment, focused treatment & progress
                    measurements followed by clear home exercises for continuous
                    progress.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <Link to="/contact">
                    <button className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300 transform hover:scale-105 shadow-lg  text-lg">
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
      <div
        className="bg-gray-50 py-16"
        style={{
          fontFamily: "'Gantari', sans-serif",
          fontWeight: 400,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#8ab72e]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Advanced Clinics</h3>
              <p className="text-gray-600">
                Modern infrastructure with latest physiotherapy equipment and
                certified professionals
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#8ab72e]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Home Care</h3>
              <p className="text-gray-600">
                Professional physiotherapy services at your home with expert
                oversight
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#8ab72e]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Tele Rehab</h3>
              <p className="text-gray-600">
                Personalized exercise programs with continued guidance and
                mentoring
              </p>
            </div>
          </div>
        </div>
      </div>

      <ServicesSlider cityName={cityName} />
      <TherapyExpertiseSection cityName={cityName} />
      <TestimonialsSection />
      <ServicesCardsSection cityName={cityName} />
      <ConditionsSection cityName={cityName} />

      <div className="bg-white py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl text-gray-800 mb-4"
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
            >
              Find Physiotherapists in{" "}
              <span className="text-[#8ab72e]">{cityName}</span>
            </h2>
            <h6 className="text-gray-600 text-lg max-w-3xl mx-auto">
              Select your area to connect with top-rated physiotherapists near
              you
            </h6>
          </div>

          {/* Auto-Scrolling Slider */}
          <div
            className="relative max-w-6xl mx-auto overflow-hidden"
            style={{
              fontFamily: "'Gantari', sans-serif",
              fontWeight: 400,
            }}
          >
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto hide-scrollbar scroll-smooth"
              onMouseEnter={(e) =>
                (e.currentTarget.style.animationPlayState = "paused")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.animationPlayState = "running")
              }
            >
              <div
                className="flex gap-4 pb-4"
                style={{ minWidth: "min-content" }}
              >
                {cityData.areas.map((area, index) => (
                  <button
                    key={index}
                    onClick={() => handleAreaClick(area)}
                    className="group flex-shrink-0 bg-white hover:bg-[#6f9724] border-2 border-gray-300 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 animate-slide-up flex items-center gap-3"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="text-gray-800 group-hover:text-white  text-base whitespace-nowrap transition-colors duration-300">
                      {area}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-gray-800 group-hover:bg-white flex items-center justify-center transition-all duration-300">
                      <svg
                        className="w-4 h-4 text-white group-hover:text-[#6f9724] transition-colors duration-300"
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
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-fade-in-delay { animation: fade-in 0.6s ease-out 0.2s both; }
        .animate-fade-in-delay-2 { animation: fade-in 0.6s ease-out 0.4s both; }
        .animate-fade-in-delay-3 { animation: fade-in 0.6s ease-out 0.6s both; }
        .animate-slide-up { animation: slide-up 0.6s ease-out both; }
        .animate-fade-in-left { animation: fade-in-left 0.6s ease-out; }
        .animate-fade-in-right { animation: fade-in-right 0.6s ease-out; }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scroll-smooth {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default PhysiotherapistsNearYou;
