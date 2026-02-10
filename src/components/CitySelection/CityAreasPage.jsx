import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, MapPin, Building2 } from "lucide-react";
import { areasData } from "../../pages/DetailPage/AreaDetailPage/areasData";

const CityAreasPage = () => {
  const { citySlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const serviceName = location.state?.serviceName || "Physiotherapy";
  const [areas, setAreas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get city name from slug
  const getCityName = (slug) => {
    const cityNames = {
      delhi: "Delhi",
      noida: "Noida",
      // 'greater-noida': 'Greater Noida',
      gurugram: "Gurugram",

      faridabad: "Faridabad",
      ghaziabad: "Ghaziabad",
    };
    return cityNames[slug] || slug;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Load areas for this city
    const cityAreas = areasData[citySlug] || [];
    setAreas(cityAreas);

    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [citySlug]);

  const handleAreaClick = (area) => {
    navigate(`/city/${citySlug}/area/${area.slug}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8ab72e] border-solid mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading areas...</p>
        </div>
      </div>
    );
  }

  if (areas.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Building2 className="w-20 h-20 text-gray-400 mx-auto mb-4" />
          <h2 className="text-3xl  text-gray-800 mb-4">
            No Areas Found in {getCityName(citySlug)}
          </h2>
          <p className="text-gray-600 mb-6">
            We're currently not operating in this city yet.
          </p>
          <button
            onClick={() => navigate("/cities")}
            className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Cities
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-r from-[#8ab72e] to-[#6d9424] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white mb-6 hover:text-gray-200 transition-all duration-300 transform hover:translate-x-[-5px] group"
          >
            <ChevronLeft className="w-6 h-6 mr-2 transition-transform group-hover:translate-x-[-3px]" />
            <span className="">Back to Cities</span>
          </button>

          <h1 className="text-4xl md:text-6xl  text-white mb-4 animate-fade-in">
            Specialists Near You {getCityName(citySlug)}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl animate-fade-in-delay">
            Choose your preferred location to find the best ergonomics
            specialists near you
          </p>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-12 fill-gray-50">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Areas Grid */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <button
              key={area.id}
              onClick={() => handleAreaClick(area)}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Area Image (if available) */}
              {area.image && (
                <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Icon */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[#8ab72e]/10 border-2 border-[#8ab72e] flex items-center justify-center group-hover:bg-[#8ab72e] transition-all duration-300">
                  <MapPin className="w-7 h-7 text-[#8ab72e] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Area Name */}
                <div className="flex-1">
                  <h3 className="text-xl  text-gray-800 group-hover:text-[#8ab72e] transition-colors duration-300">
                    {area.name}
                  </h3>
                  <p className="text-sm text-gray-500">{area.city}</p>
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

              {/* Rating */}
              {area.rating && (
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <span className="text-yellow-500">★</span>
                  <span className="">{area.rating}</span>
                  <span className="text-gray-400">
                    ({area.reviews} reviews)
                  </span>
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-gray-600 line-clamp-2">
                {area.description}
              </p>

              {/* Bottom Border Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#8ab72e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"></div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
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
          animation: fade-in 0.8s ease-out 0.2s both;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out both;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default CityAreasPage;
