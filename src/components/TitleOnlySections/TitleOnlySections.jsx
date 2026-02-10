import React, { useState, useEffect } from "react";
import { CheckCircle, ArrowRight, ChevronRight } from "lucide-react";

// Sample data for demonstration
const servicesData = [
  { id: 1, title: "Sports Physiotherapy", slug: "sports-physiotherapy" },
  { id: 2, title: "Pediatric Physiotherapy", slug: "pediatric-physiotherapy" },
  { id: 3, title: "Home Care Physiotherapy", slug: "home-care-physiotherapy" },
  { id: 4, title: "Neuro Physiotherapy", slug: "neuro-physiotherapy" },
  { id: 5, title: "Chiropractor Treatment", slug: "chiropractor-treatment" },
  { id: 6, title: "Geriatric Physiotherapy", slug: "geriatric-physiotherapy" },
];

const therapiesData = [
  { id: 1, title: "Ultrasound Therapy", slug: "ultrasound-therapy" },
  { id: 2, title: "Interferential Therapy", slug: "interferential-therapy" },
  { id: 3, title: "TENS Therapy", slug: "tens-therapy" },
  { id: 4, title: "Laser Therapy", slug: "laser-therapy" },
  { id: 5, title: "Manual Therapy", slug: "manual-therapy" },
  { id: 6, title: "Dry Needling Therapy", slug: "dry-needling-therapy" },
  { id: 7, title: "Cupping Therapy", slug: "cupping-therapy" },
  { id: 8, title: "Kinesio Taping", slug: "kinesio-taping" },
];

const conditionsData = [
  { id: 1, name: "Lumbar Spondylosis", category: "Spinal" },
  { id: 2, name: "Frozen Shoulder", category: "Joint" },
  { id: 3, name: "Tennis Elbow", category: "Sports Injury" },
  { id: 4, name: "Sciatica", category: "Nerve" },
  { id: 5, name: "Arthritis", category: "Joint" },
  { id: 6, name: "Plantar Fasciitis", category: "Foot" },
  { id: 7, name: "Cervical Spondylosis", category: "Spinal" },
  { id: 8, name: "ACL Injury", category: "Sports Injury" },
];

export default function TitleOnlySections() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Services Section */}
      <ServicesSection services={servicesData} />

      {/* Therapies Section */}
      <TherapiesSection therapies={therapiesData} />

      {/* Conditions Section */}
      <ConditionsSection conditions={conditionsData} />
    </div>
  );
}

// Services Section Component
function ServicesSection({ services }) {
  const handleViewDetails = (slug) => {
    console.log(`Navigate to /services/${slug}`);
  };

  return (
    <div className="w-full py-16 px-4">
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
          <p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
          >
            Comprehensive treatment solutions tailored to your unique needs and
            recovery goals
          </p>
        </div>

        {/* Title Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleViewDetails(service.slug)}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-[#8ab72e]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#e8f1d7] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#8ab72e]" />
                  </div>
                  <h3 className="text-lg  text-gray-800 group-hover:text-[#8ab72e] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#8ab72e] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-white text-[#8ab72e] border-2 border-[#8ab72e] px-8 py-3 rounded-full hover:bg-[#8ab72e] hover:text-white transition-all duration-300 inline-flex items-center gap-2 group shadow-lg">
            View All Services
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

// Therapies Section Component
function TherapiesSection({ therapies }) {
  const handleTherapyClick = (slug) => {
    console.log(`Navigate to /physiotherapy/${slug}`);
  };

  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-block bg-[#e8f1d7] text-[#6d9624] px-5 py-2.5 rounded-full text-sm mb-6"
            style={{
              fontFamily: "'Zalando Sans Expanded', sans-serif",
              fontWeight: 200,
            }}
          >
            Our Expertise
          </div>
          <h2
            className="text-4xl text-gray-800 mb-4"
            style={{
              fontFamily: "'Zalando Sans Expanded', sans-serif",
              fontWeight: 200,
            }}
          >
            Advanced <span className="text-[#8ab72e]">Therapy Solutions</span>
          </h2>
          <p
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
          >
            Evidence-based treatment modalities combining traditional techniques
            with modern technology
          </p>
        </div>

        {/* Title Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {therapies.map((therapy) => (
            <div
              key={therapy.id}
              onClick={() => handleTherapyClick(therapy.slug)}
              className="bg-gradient-to-br from-[#f8fcf4] to-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-[#8ab72e] transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#8ab72e] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base  text-gray-800 group-hover:text-[#8ab72e] transition-colors leading-snug">
                    {therapy.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Conditions Section Component
function ConditionsSection({ conditions }) {
  const handleConditionClick = (condition) => {
    const slug = condition.name.toLowerCase().replace(/\s+/g, "-");
    console.log(`Navigate to /conditions/${slug}`);
  };

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-block bg-[#8ab72e] text-white px-6 py-2.5 rounded-full text-sm mb-6 shadow-lg"
            style={{
              fontFamily: "'Zalando Sans Expanded', sans-serif",
              fontWeight: 200,
            }}
          >
            ✨ Expert Treatment
          </div>
          <h2
            className="text-4xl text-gray-800 mb-4"
            style={{
              fontFamily: "'Zalando Sans Expanded', sans-serif",
              fontWeight: 200,
            }}
          >
            Conditions We <span className="text-[#8ab72e]">Treat</span>
          </h2>
          <p
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
          >
            Specialized physiotherapy care for 48+ medical conditions with
            proven treatment protocols
          </p>
        </div>

        {/* Title Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {conditions.map((condition) => (
            <div
              key={condition.id}
              onClick={() => handleConditionClick(condition)}
              className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border-l-4 border-transparent hover:border-[#8ab72e]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 bg-[#e8f1d7] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#8ab72e] transition-colors">
                    <CheckCircle className="w-5 h-5 text-[#8ab72e] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base  text-gray-800 group-hover:text-[#8ab72e] transition-colors">
                      {condition.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {condition.category}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#8ab72e] group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
