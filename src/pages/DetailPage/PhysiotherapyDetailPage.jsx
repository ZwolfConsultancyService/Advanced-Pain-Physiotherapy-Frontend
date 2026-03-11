


import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ChevronLeft, CheckCircle, Star } from "lucide-react";
import { servicesData } from "../../components/ServiceCard/servicesData.js";
import { servicesDataSpecialized } from "../../components/ServiceCard/servicesDataSpecialized.js";
import { therapyData } from "../../components/TherapyExpertise/therapyData.js";
import { conditionsData } from "../../components/ConditionsDataSection/ConditionsData.js";
import RelatedConditionsSlider from "./RelatedConditionsSlider/RelatedConditionsSlider.jsx";
import CitySelection from "../../components/CitySelection/CitySelection.jsx";

const allServicesData = [
  ...servicesData,
  ...servicesDataSpecialized,
  ...therapyData,
];

// Default benefits if service doesn't have custom benefits
const defaultBenefits = [
  "Reduced pain and inflammation",
  "Improved range of motion and flexibility",
  "Increased strength and stability",
  "Prevention of further injury",
  "Enhanced blood circulation and nutrient exchange",
  "Early return to work and sports activities",
];

const getCategoryKeywords = (serviceCategory) => {
  const mappings = {
    "Spine Conditions": ["Spinal", "Nerve"],
    "Joint Conditions": ["Shoulder", "Hand"],
    "Knee Conditions": ["Knee"],
    Neurological: ["Neurological", "Nerve"],
    "Nerve Conditions": ["Nerve"],
    "Foot Conditions": ["Foot"],
    "Elbow Conditions": ["Hand"],
    "Pain Conditions": ["Pain"],
    "Sports Injury": ["Sports Injury"],
    "Specialized Care": ["Specialized"],
    "Respiratory Care": ["Respiratory"],
    "Post-Surgical Care": ["Surgical"],
    "Convenience Care": ["Home"],
    "Clinical Care": ["Clinic"],
    "Virtual Care": ["Virtual", "Tele"],
    "Athletic Performance": ["Sports"],
    "Orthopedic Care": ["Ortho", "Joint"],
    "Workplace Health": ["Ergonomics"],
    "Women's Wellness": ["Women"],
    "Child Development": ["Pediatric", "Child"],
    "Senior Care": ["Geriatric", "Elder"],
    "Recovery & Performance": ["Recovery", "Massage"],
    "Surgical Recovery": ["Surgery"],
    "Spinal Health": ["Spine", "Chiropractic"],
    "Lymphatic Massage": ["Lymphatic", "Massage"],
    Chiropractic: ["Chiropractic", "Adjustment"],
  };
  return mappings[serviceCategory] || [serviceCategory];
};

const getDetailedContent = (slug) => {
  const service = allServicesData.find((s) => s.slug === slug);
  return service?.sections || [];
};

export default function PhysiotherapyDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const service = allServicesData.find((s) => s.slug === slug);
  const detailedSections = getDetailedContent(slug);

  // Get benefits for current service or use default
  const benefits = service?.benefits || defaultBenefits;

  // Get custom treatment text or use default
  const customTreatmentText =
    service?.customTreatmentText ||
    `If you are suffering from ${service?.title} in Delhi-NCR, contact Dr. Ashish Sharma - Best Physiotherapist at Advanced Pain Physiotherapy Centre, Nehru Enclave, Kalkaji, South Delhi for effective pain relief and recovery.`;

  useEffect(() => {
    console.log("🔍 Searching for slug:", slug);
    console.log("📊 Total services available:", allServicesData.length);
    console.log("✅ Service found:", service ? service.title : "❌ NOT FOUND");
  }, [slug, service]);

  const getRelatedConditions = () => {
    if (!service) return [];
    const keywords = getCategoryKeywords(service.category);
    return conditionsData.filter((condition) =>
      keywords.some((keyword) =>
        condition.category.toLowerCase().includes(keyword.toLowerCase()),
      ),
    );
  };

  const relatedConditions = getRelatedConditions();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8ab72e] border-solid mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading therapy details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-3xl text-gray-700 mb-4">Service Not Found</h2>
          <p className="text-gray-600 mb-3">
            The service you're looking for doesn't exist.
          </p>
          <p className="text-sm text-gray-500 mb-6 font-mono bg-gray-100 p-3 rounded">
            Slug: <span className="text-red-600">{slug}</span>
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
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Banner */}
        <div
          className="relative h-64 md:h-80 bg-gradient-to-r from-[#8ab72e] to-[#6d9424] overflow-hidden animate-fade-in"
          style={{
            fontFamily: "'Zalando Sans Expanded', sans-serif",
            fontWeight: 200,
          }}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <button
                onClick={() => navigate(-1)}
                className="mb-4 flex items-center text-white hover:text-white/80 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                <span>Back</span>
              </button>
              <div className="flex items-center mb-3">
                <CheckCircle className="w-8 h-8 mr-3 text-white" />
                <h1 className="text-2xl md:text-4xl text-white animate-slide-up">
                  {service.title}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Full Width */}
        <div
          className="max-w-7xl mx-auto px-4 py-8 md:py-12"
          style={{
            fontFamily: "'Gantari', sans-serif",
            fontWeight: 400,
          }}
        >
          <div className="space-y-6">
            {/* Image on Left and About Section on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Image Card - Left Side (2 columns) */}
              <div className="lg:col-span-2">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-right">
                  <img
                    src={service.image}
                    alt={`${service.title} treatment`}
                    loading="lazy"
                    className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px] object-contain bg-gray-50"
                  />
                </article>
              </div>

              {/* About Section - Right Side (3 columns) */}
              <div className="lg:col-span-3">
                <article className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#8ab72e]/10 p-3 rounded-full mr-4">
                      <CheckCircle className="w-8 h-8 text-[#8ab72e]" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl text-gray-800">
                        About {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Service Description */}
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-base md:text-lg">
                      {service.description}
                    </p>

                    {/* Display FIRST section's content - Convert text to formatted list */}
                    {detailedSections.length > 0 &&
                      detailedSections[0].content && (
                        <div className="mt-6 space-y-4">
                          {detailedSections[0].content.split('\n\n').map((paragraph, idx) => {
                            // Check if it's a heading (ends with colon)
                            if (paragraph.trim().endsWith(':')) {
                              return (
                                <h3 key={idx} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                                  {paragraph.trim()}
                                </h3>
                              );
                            }
                            
                            // Check if it contains bullet points
                            if (paragraph.includes('•')) {
                              const lines = paragraph.split('\n').filter(line => line.trim());
                              return (
                                <div key={idx} className="bg-gradient-to-r from-[#8ab72e]/5 to-transparent p-5 rounded-lg border-l-4 border-[#8ab72e]">
                                  <ul className="space-y-3">
                                    {lines.map((line, lineIdx) => {
                                      const text = line.replace('•', '').trim();
                                      if (text) {
                                        return (
                                          <li key={lineIdx} className="flex items-start">
                                            <div className="bg-[#8ab72e] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                                              <CheckCircle className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-gray-700 font-medium">
                                              {text}
                                            </span>
                                          </li>
                                        );
                                      }
                                      return null;
                                    })}
                                  </ul>
                                </div>
                              );
                            }
                            
                            // Regular paragraph
                            if (paragraph.trim()) {
                              return (
                                <p key={idx} className="text-base leading-relaxed">
                                  {paragraph.trim()}
                                </p>
                              );
                            }
                            return null;
                          })}
                        </div>
                      )}

                    {/* Custom Treatment Text - Displayed at the end */}
                    <div className="mt-6 p-4 bg-[#8ab72e]/5 border-l-4 border-[#8ab72e] rounded-r-lg">
                      <p className="text-base leading-relaxed text-gray-800 font-medium">
                        {customTreatmentText}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            {/* ALL REMAINING SECTIONS - Display as separate cards */}
            {detailedSections.slice(1).map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in"
              >
                {/* Parse and render section content */}
                {section.content && (
                  <div className="space-y-4">
                    {section.content.split('\n\n').map((paragraph, idx) => {
                      // Check if it's a heading (ends with colon)
                      if (paragraph.trim().endsWith(':')) {
                        return (
                          <h3 key={idx} className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Star className="w-6 h-6 mr-2 text-[#8ab72e]" />
                            {paragraph.trim()}
                          </h3>
                        );
                      }
                      
                      // Check if it contains bullet points
                      if (paragraph.includes('•')) {
                        const lines = paragraph.split('\n').filter(line => line.trim());
                        return (
                          <div key={idx} className="bg-gradient-to-r from-[#8ab72e]/5 to-transparent p-5 rounded-lg border-l-4 border-[#8ab72e]">
                            <ul className="space-y-3">
                              {lines.map((line, lineIdx) => {
                                const text = line.replace('•', '').trim();
                                if (text) {
                                  return (
                                    <li key={lineIdx} className="flex items-start">
                                      <div className="bg-[#8ab72e] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                                        <CheckCircle className="w-3 h-3 text-white" />
                                      </div>
                                      <span className="text-gray-700 font-medium">
                                        {text}
                                      </span>
                                    </li>
                                  );
                                }
                                return null;
                              })}
                            </ul>
                          </div>
                        );
                      }
                      
                      // Regular paragraph
                      if (paragraph.trim()) {
                        return (
                          <p key={idx} className="text-base leading-relaxed text-gray-700">
                            {paragraph.trim()}
                          </p>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}
              </div>
            ))}

            {/* Benefits Section - Dynamic Cards */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="bg-[#8ab72e]/10 p-2 rounded-full mr-3">
                  <CheckCircle className="w-6 h-6 text-[#8ab72e]" />
                </div>
                <h3 className="text-xl md:text-2xl text-gray-800">
                  Benefits of Physiotherapy {service.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-[#8ab72e]/5 rounded-lg p-4 hover:bg-[#8ab72e]/10 transition-all duration-300 border border-[#8ab72e]/20 transform hover:scale-105"
                  >
                    <div className="flex items-start">
                      <div className="bg-[#8ab72e] rounded-full p-2 mr-3 mt-1 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Conditions Slider */}
          {/* {relatedConditions.length > 0 && (
            <div className="mt-12">
              <RelatedConditionsSlider conditions={relatedConditions} />
            </div>
          )} */}
        </div>

        {/* City Selection */}
        <CitySelection serviceName={service.title} serviceSlug={slug} />
      </div>

      {/* Animations CSS */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.6s ease-out 0.2s both;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #8ab72e;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #6d9424;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}