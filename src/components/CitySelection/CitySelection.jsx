// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Building2 } from "lucide-react";

// const CitySelection = ({
//   serviceName: propServiceName,
//   serviceSlug: propServiceSlug,
// }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Priority: Props (from PhysiotherapyDetailPage) > Location State > Default
//   const serviceName =
//     propServiceName || location.state?.serviceName || "Ergonomics";
//   const serviceSlug =
//     propServiceSlug ||
//     location.state?.serviceSlug ||
//     "workplace-ergonomics-assessment-training";

//   const cities = [
//     { id: 1, name: "Delhi", slug: "delhi" },
//     { id: 2, name: "Faridabad", slug: "faridabad" },
//     { id: 3, name: "Ghaziabad", slug: "ghaziabad" },
//     { id: 4, name: "Gurgaon", slug: "gurgaon" },
//     { id: 5, name: "Noida", slug: "noida" },
//   ];

//   // Direct navigation to AreaDetailPage with city slug
//   const handleCityClick = (city) => {
//     navigate(`/city/${city.slug}`, {
//       state: {
//         serviceName: serviceName, // Dynamic service name from state
//         serviceSlug: serviceSlug, // Pass service slug for back navigation
//         cityName: city.name,
//       },
//     });
//   };

//   return (
//     <div className="min-h-screen relative overflow-hidden bg-white">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#8ab72e]/5 via-white to-[#8ab72e]/10"></div>

//       {/* Decorative Circles */}
//       <div className="absolute top-20 right-20 w-96 h-96 bg-[#8ab72e]/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8ab72e]/10 rounded-full blur-3xl"></div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
//         {/* Header Section */}
//         <div
//           className="text-center mb-12 md:mb-16 animate-fade-in"
//           style={{
//             fontFamily: "'Gantari', sans-serif",
//             fontWeight: 400,
//           }}
//         >
//           <h1
//             style={{
//               fontFamily: "'Gantari', sans-serif",
//               fontWeight: 200,
//             }}
//             className="text-4xl md:text-6xl text-gray-700 mb-4 leading-tight"
//           >
//             {serviceName}
//           </h1>
//           <h2
//             className="text-2xl md:text-4xl  text-[#8ab72e] mb-6"
//             style={{
//               fontFamily: "'Gantari', sans-serif",
//               fontWeight: 400,
//             }}
//           >
//             Treatment & Care
//           </h2>
//           <h3
//             className="text-2xl md:text-3xl  text-gray-800 mb-6"
//             style={{
//               fontFamily: "'Gantari', sans-serif",
//               fontWeight: 400,
//             }}
//           >
//             Find Specialists Nearby
//           </h3>
//           <p
//             style={{
//               fontFamily: "'Gantari', sans-serif",
//               fontWeight: 400,
//             }}
//             className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto mt-8"
//           >
//             Select your City to find & connect with our expert {serviceName}{" "}
//             specialists and start your recovery journey today
//           </p>
//         </div>

//         {/* Cities Grid */}
//         <div className="max-w-5xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {cities.map((city, index) => (
//               <button
//                 key={city.id}
//                 onClick={() => handleCityClick(city)}
//                 className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#8ab72e] hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 {/* City Icon Circle */}
//                 <div className="flex items-center gap-4">
//                   <div className="w-16 h-16 rounded-full bg-[#8ab72e]/10 border-2 border-[#8ab72e] flex items-center justify-center group-hover:bg-[#8ab72e] transition-all duration-300">
//                     <Building2 className="w-8 h-8 text-[#8ab72e] group-hover:text-white transition-colors duration-300" />
//                   </div>

//                   {/* City Name */}
//                   <div className="flex-1 text-left">
//                     <h3 className="text-xl text-gray-800 group-hover:text-[#8ab72e] transition-colors duration-300">
//                       {city.name}
//                     </h3>
//                   </div>

//                   {/* Arrow Icon */}
//                   <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
//                     <svg
//                       className="w-6 h-6 text-[#8ab72e]"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </div>
//                 </div>

//                 {/* Bottom Border Effect */}
//                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#8ab72e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"></div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Info */}
//         {/* <div className="text-center mt-16 animate-fade-in-delay">
//           <p className="text-gray-600 text-sm md:text-base">
//             Can't find your city?{" "}
//             <button className="text-[#8ab72e] hover:text-[#6d9424]  underline transition-colors">
//               Contact us
//             </button>
//           </p>
//         </div> */}
//       </div>

//       {/* Custom Animations */}
//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slide-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out;
//         }

//         .animate-fade-in-delay {
//           animation: fade-in 0.8s ease-out 0.4s both;
//         }

//         .animate-slide-up {
//           animation: slide-up 0.6s ease-out both;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CitySelection;



import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Building2 } from "lucide-react";

const CitySelection = ({
  serviceName: propServiceName,
  serviceSlug: propServiceSlug,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Priority: Props (from PhysiotherapyDetailPage) > Location State > Default
  const serviceName =
    propServiceName || location.state?.serviceName || "Ergonomics";
  const serviceSlug =
    propServiceSlug ||
    location.state?.serviceSlug ||
    "workplace-ergonomics-assessment-training";

  const cities = [
    { id: 1, name: "Delhi", slug: "delhi" },
    { id: 2, name: "Faridabad", slug: "faridabad" },
    { id: 3, name: "Ghaziabad", slug: "ghaziabad" },
    { id: 4, name: "Gurgaon", slug: "gurgaon" },
    { id: 5, name: "Noida", slug: "noida" },
  ];

  // ✅ FIXED: Direct navigation to AreaDetailPage with city slug AND service slug
  const handleCityClick = (city) => {
    navigate(`/city/${city.slug}/${serviceSlug}`, {
      state: {
        serviceName: serviceName,
        serviceSlug: serviceSlug,
        cityName: city.name,
      },
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8ab72e]/5 via-white to-[#8ab72e]/10"></div>

      {/* Decorative Circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#8ab72e]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8ab72e]/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Header Section */}
        <div
          className="text-center mb-12 md:mb-16 animate-fade-in"
          style={{
            fontFamily: "'Gantari', sans-serif",
            fontWeight: 400,
          }}
        >
          <h1
            style={{
              fontFamily: "'Gantari', sans-serif",
              fontWeight: 200,
            }}
            className="text-4xl md:text-6xl text-gray-700 mb-4 leading-tight"
          >
            {serviceName}
          </h1>
          <h2
            className="text-2xl md:text-4xl text-[#8ab72e] mb-6"
            style={{
              fontFamily: "'Gantari', sans-serif",
              fontWeight: 400,
            }}
          >
            Treatment & Care
          </h2>
          <h3
            className="text-2xl md:text-3xl text-gray-800 mb-6"
            style={{
              fontFamily: "'Gantari', sans-serif",
              fontWeight: 400,
            }}
          >
            Find Specialists Nearby
          </h3>
          <p
            style={{
              fontFamily: "'Gantari', sans-serif",
              fontWeight: 400,
            }}
            className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto mt-8"
          >
            Select your City to find & connect with our expert {serviceName}{" "}
            specialists and start your recovery journey today
          </p>
        </div>

        {/* Cities Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <button
                key={city.id}
                onClick={() => handleCityClick(city)}
                className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#8ab72e] hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* City Icon Circle */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#8ab72e]/10 border-2 border-[#8ab72e] flex items-center justify-center group-hover:bg-[#8ab72e] transition-all duration-300">
                    <Building2 className="w-8 h-8 text-[#8ab72e] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* City Name */}
                  <div className="flex-1 text-left">
                    <h3 className="text-xl text-gray-800 group-hover:text-[#8ab72e] transition-colors duration-300">
                      {city.name}
                    </h3>
                  </div>

                  {/* Arrow Icon */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom Border Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#8ab72e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.4s both;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default CitySelection;