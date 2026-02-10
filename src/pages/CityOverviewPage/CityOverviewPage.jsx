import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { MapPin, Phone, Calendar } from "lucide-react";
import ServicesSlider from "../../components/ServiceCard/ServicesSlider";
import ConditionsSection from "../../components/ConditionsDataSection/ConditionsSection";
import TherapyExpertiseSection from "../../components/TherapyExpertise/TherapyExpertiseSection";
import { citiesData } from "../../data/citiesData";

const CityOverviewPage = () => {
  const { citySlug } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  function getCityNameFromSlug(slug) {
    const cityNames = {
      delhi: "Delhi",
      noida: "Noida",
      gurgaon: "Gurgaon",
      faridabad: "Faridabad",
      ghaziabad: "Ghaziabad",
      "jammu-kashmir": "Jammu And Kashmir",
    };
    return cityNames[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
  }

  const cityName = getCityNameFromSlug(citySlug);
  const currentCityData =
    citiesData.find((city) => city.slug === citySlug) || citiesData[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [citySlug]);

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Enhanced */}
      <div className="relative h-[500px] sm:h-[600px] bg-gradient-to-br from-[#8ab72e] to-[#6d9424] overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            {/* City Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white ">{cityName}</span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white leading-tight animate-fade-in-delay"
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
            >
             Best Physiotherapy centre Near You in {cityName}
            </h1>

            {/* Subheading */}
            {/* <h2
              className="text-2xl sm:text-3xl md:text-4xl mb-6 text-white/90 animate-fade-in-delay-2"
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 300,
              }}
            >
              Expert Care for Your Recovery Journey
            </h2> */}

            {/* Description */}
           

            {/* Features List */}
            {/* <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-delay-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white text-sm ">Certified Therapists</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white text-sm ">Advanced Equipment</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white text-sm ">Home Visit Available</span>
                </div>
                </div> */}

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-5"
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
            >
              {/* Contact / Appointment Button */}
              <Link to="/contact" className="group">
                <button className="px-8 py-4 bg-white text-[#8ab72e] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 w-full">
                  <Calendar className="w-5 h-5" />
                  Book Appointment Now
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
              </Link>

              {/* Direct Call Button */}
              <Link href="tel:+919220385419">
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#8ab72e] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 w-full">
                  <Phone className="w-5 h-5" />
                  Call: +91-9220385419
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Mobile Responsive */}
      {/* <div className="bg-white py-8 sm:py-10 md:py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl  text-[#8ab72e] mb-1 sm:mb-2">
                15+
              </div>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl  text-[#8ab72e] mb-1 sm:mb-2">
                500+
              </div>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Happy Patients
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl  text-[#8ab72e] mb-1 sm:mb-2">
                50+
              </div>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Expert Therapists
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl  text-[#8ab72e] mb-1 sm:mb-2">
                4.9★
              </div>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Patient Rating
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Services Section */}
      <ServicesSlider cityName={cityName} />

      {/* Therapy Expertise */}
      <TherapyExpertiseSection cityName={cityName} />

      {/* Conditions Section */}
      <ConditionsSection cityName={cityName} />

      {/* Areas Slider Section - Mobile Optimized */}
      <div className="bg-white py-12 sm:py-14 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4 px-4"
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
            >
              Find Physiotherapists in{" "}
              <span className="text-[#8ab72e]">{cityName}</span>
            </h2>
            <p
              className="text-gray-600 text-sm sm:text-base md:text-lg px-4"
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
            >
              Select your area to find nearby specialists
            </p>
          </div>

          {/* Auto-scrolling horizontal slider */}
          <div className="relative max-w-6xl mx-auto overflow-hidden">
            <div className="flex gap-3 sm:gap-4 animate-scroll-infinite">
              {/* Duplicate areas for infinite scroll effect */}
              {[...currentCityData.areas, ...currentCityData.areas].map(
                (area, index) => (
                  <button
                    key={`area-${index}`}
                    onClick={() =>
                      navigate(
                        `/city/${citySlug}/area/${area
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`,
                      )
                    }
                    className="group flex-shrink-0 bg-white hover:bg-[#8ab72e] border-2 border-gray-200 hover:border-[#8ab72e] rounded-full px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 hover:scale-105 flex items-center gap-2 sm:gap-3 shadow-md hover:shadow-xl"
                    style={{
                      fontFamily: "'Gantari', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#8ab72e] group-hover:text-white transition-colors flex-shrink-0" />
                    <span className="text-gray-800 group-hover:text-white  text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors duration-300">
                      {area}
                    </span>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#8ab72e] group-hover:bg-white flex items-center justify-center transition-all duration-300 flex-shrink-0">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:text-[#8ab72e] transition-colors duration-300"
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
                ),
              )}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-infinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll-infinite {
            animation: scroll-infinite 30s linear infinite;
          }

          .animate-scroll-infinite:hover {
            animation-play-state: paused;
          }

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
            animation: fade-in 0.6s ease-out 0.2s both;
          }
          .animate-fade-in-delay-2 {
            animation: fade-in 0.6s ease-out 0.4s both;
          }
          .animate-fade-in-delay-3 {
            animation: fade-in 0.6s ease-out 0.6s both;
          }
          .animate-fade-in-delay-4 {
            animation: fade-in 0.6s ease-out 0.8s both;
          }
          .animate-fade-in-delay-5 {
            animation: fade-in 0.6s ease-out 1s both;
          }

          /* Mobile specific adjustments */
          @media (max-width: 640px) {
            .animate-scroll-infinite {
              animation: scroll-infinite 40s linear infinite;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default CityOverviewPage;
