

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  Home,
  Activity,
  Stethoscope,
  Video,
  Trophy,
  Bone,
  Brain,
  Monitor,
  Heart,
  Baby,
  Users,
  Dumbbell,
  RefreshCw,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { servicesDataSpecialized } from "../../../components/ServiceCard/servicesDataSpecialized";

// ==================== ICON MAPPING ====================
const iconMap = {
  Home,
  Activity,
  Stethoscope,
  Video,
  Trophy,
  Bone,
  Brain,
  Monitor,
  Heart,
  Baby,
  Users,
  Dumbbell,
  RefreshCw,
};

// ==================== MAIN COMPONENT ====================
export default function ServicesPage() {
  const navigate = useNavigate();

  const [services] = useState(servicesDataSpecialized);
  const [filteredServices, setFilteredServices] = useState(
    servicesDataSpecialized,
  );
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(3); // 👈 View More logic

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  // ================= FILTER LOGIC =================
  useEffect(() => {
    let filtered = services;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (service) => service.category === selectedCategory,
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (service) =>
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setFilteredServices(filtered);
    setVisibleCount(3); // 👈 Reset cards on filter/search
  }, [selectedCategory, searchQuery, services]);

  const currentServices = filteredServices.slice(0, visibleCount);

  const handleViewDetails = (slug) => {
    navigate(`/services/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* ================= HERO ================= */}
      <div
        className="bg-gradient-to-r from-[#8ab72e] to-[#6d9424] text-white py-20 px-4"
        data-aos="fade-down"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6">
            Our Specialized <span>Services</span>
          </h1>
          <h6 className="text-xl text-emerald-50 max-w-3xl mx-auto">
            Expert physiotherapy care tailored to your recovery journey.
          </h6>
        </div>
      </div>

      {/* ================= SERVICES GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filteredServices.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">
              No services found matching your criteria.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {currentServices.map((service, index) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Image */}
                    <div
                      className="relative h-48 overflow-hidden cursor-pointer"
                      onClick={() => handleViewDetails(service.slug)}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-110 transition duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow">
                        {IconComponent && (
                          <IconComponent size={20} className="text-[#8ab72e]" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl  mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-5">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-5">
                        {service.features?.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-[#8ab72e]" />
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => handleViewDetails(service.slug)}
                        className="w-full bg-[#8ab72e] text-white py-3 rounded-xl hover:bg-[#6d9424] transition flex justify-center items-center gap-2"
                      >
                        View Details
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ================= VIEW MORE ================= */}
            {visibleCount < filteredServices.length && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                  className="bg-[#8ab72e] text-white px-8 py-3 rounded-xl hover:bg-[#6d9424] transition shadow-lg flex items-center gap-2"
                >
                  View More
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
