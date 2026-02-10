// import React, { useState, useEffect } from "react";
// import {
//   CheckCircle,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { servicesDataSpecialized } from "./servicesDataSpecialized";

// export default function ServicesCardsSection() {
//   const navigate = useNavigate();
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);

//   // Check if mobile/tablet
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Fetch services from servicesDataSpecialized
//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       setTimeout(() => {
//         setServices(servicesDataSpecialized);
//         setLoading(false);
//       }, 300);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//       setServices(servicesDataSpecialized);
//     }
//   };

//   // Auto-slide effect
//   useEffect(() => {
//     if (!isPaused && services.length > 0) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % services.length);
//       }, 4000); // Change slide every 4 seconds

//       return () => clearInterval(interval);
//     }
//   }, [isPaused, services.length]);

//   // Navigate to detail page with slug
//   const handleViewDetails = (slug) => {
//     navigate(`/services/${slug}`);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const goToPrevious = () => {
//     setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
//   };

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % services.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   if (loading) {
//     return (
//       <div className="w-full bg-gradient-to-br from-gray-50 to-emerald-50 py-16 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-emerald-600 border-t-transparent"></div>
//           <p className="mt-4 text-gray-600">Loading services...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-full bg-gradient-to-br from-gray-50 to-emerald-50 py-16 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <p className="text-red-600">Error: {error}</p>
//           <button
//             onClick={fetchServices}
//             className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full bg-gradient-to-br from-gray-50 to-emerald-50 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div
//             className="inline-block bg-[#e8f1d7] text-[#8ab72e] px-4 py-2 rounded-full text-sm mb-4"
//             style={{
//               fontFamily: "'Zalando Sans Expanded', sans-serif",
//               fontWeight: 200,
//             }}
//           >
//             Our Services
//           </div>
//           <h2
//             className="text-4xl text-gray-800 mb-4"
//             style={{
//               fontFamily: "'Zalando Sans Expanded', sans-serif",
//               fontWeight: 200,
//             }}
//           >
//             Specialized{" "}
//             <span className="text-[#8ab72e]">Physiotherapy Services</span>
//           </h2>
        
//         </div>

    

//         {/* Additional Services Grid (showing 3 more services) */}
//         <div className="mt-16">
       
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {services.slice(0, 3).map((service) => (
//               <div
//                 key={service.id}
//                 className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
//                 onClick={() => handleViewDetails(service.slug)}
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h4 className="text-xl text-gray-800 mb-2 ">
//                     {service.title}
//                   </h4>
//                   <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                     {service.description}
//                   </p>
//                   <button className="text-[#8ab72e]  flex items-center gap-1 group-hover:gap-2 transition-all">
//                     Learn More <ArrowRight size={16} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* View All Services Button */}
//         <div className="text-center mt-12">
//           <Link
//             to="/services"
//             className="bg-white text-[#8ab72e] border-2 border-[#8ab72e] px-8 py-3 rounded-full hover:bg-[#8ab72e] hover:text-white transition-all duration-300 inline-flex items-center gap-2 group shadow-lg hover:shadow-xl transform hover:scale-105"
//           >
//             View All Services
//             <ArrowRight
//               size={20}
//               className="group-hover:translate-x-1 transition-transform"
//             />
//           </Link>
//         </div>
//       </div>

//       {/* Add custom CSS for progress animation */}
//       <style>{`
//         @keyframes progress {
//           from {
//             width: 0%;
//           }
//           to {
//             width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { servicesDataSpecialized } from "./servicesDataSpecialized";

export default function ServicesCardsSection() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Check if mobile/tablet
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch services from servicesDataSpecialized
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError(null);
      setTimeout(() => {
        setServices(servicesDataSpecialized);
        setLoading(false);
      }, 300);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      setServices(servicesDataSpecialized);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused && services.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, services.length]);

  // Navigate to detail page with slug
  const handleViewDetails = (slug) => {
    navigate(`/services/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <div className="w-full bg-gradient-to-br from-gray-50 to-emeral-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-emerald-600 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-gradient-to-br from-gray-50 to-emerald-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-600">Error: {error}</p>
          <button
            onClick={fetchServices}
            className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-emerald-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-block bg-[#e8f1d7] text-[#8ab72e] px-4 py-2 rounded-full text-sm mb-4"
            style={{
              fontFamily: "'Zalando Sans Expanded', sans-serif",
              fontWeight: 200,
            }}
          >
            Our Services
          </div>
          <h2
            className="text-4xl text-gray-800 mb-4"
            style={{
              fontFamily: "'Zalando Sans Expanded', sans-serif",
              fontWeight: 200,
            }}
          >
            Specialized{" "}
            <span className="text-[#8ab72e]">Physiotherapy Services</span>
          </h2>
        </div>

        {/* Services Grid (without images) */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border-t-4 border-[#8ab72e]"
                onClick={() => handleViewDetails(service.slug)}
              >
                <div className="p-8">
                  <h4 className="text-2xl text-gray-800 mb-4 font-semibold">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-base mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  <button className="text-[#8ab72e] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="bg-white text-[#8ab72e] border-2 border-[#8ab72e] px-8 py-3 rounded-full hover:bg-[#8ab72e] hover:text-white transition-all duration-300 inline-flex items-center gap-2 group shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Services
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>

      {/* Add custom CSS for progress animation */}
      <style>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}