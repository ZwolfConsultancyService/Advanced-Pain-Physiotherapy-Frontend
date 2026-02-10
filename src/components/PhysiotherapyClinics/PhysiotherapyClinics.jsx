import { Instagram } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sharma from "../../assets/Sharma.jpeg";

export default function PhysiotherapyClinics() {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  // Future API integration ke liye ready structure
  const clinics = [
    {
      id: 1,
      slug: "advanced-pain-physiotherapy-centre",
      name: "Advanced Pain Physiotherapy Centre",
      rating: 5.0,
      specialty: "Ortho, Spine & Sports Physiotherapy Center",
      address:
        "Address 10/16 Basement, Block 10, Nehru Enclave East, Kalkaji 110019",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=Advanced+Pain+Physiotherapy+Centre+Nehru+Enclave+Kalkaji+Delhi",
      phone: "9220385419",
      email: "advancedpainphysiotherapy@gmail.com",
      hours: "9am To 8pm",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
      facebook: "https://www.facebook.com/profile.php?id=61584557627631",
      Instagram:
        "https://www.instagram.com/advancedphysio19?igsh=c2hpdzkyN21zZ2U=",
    },
    {
      id: 2,
      slug: "sharma-orthopedic-rehab-centre",
      name: "Sharma Orthopedic and Rehab Centre",
      rating: 4.9,
      specialty: "Specialized Spine & Back Pain Treatment",
      address:
        "G 243 40 Feet Road, Near Aggarwal Medical Store, Badarpur, New Delhi 110044.",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=Sharma+Orthopedic+Rehab+Center+G+241+40+Feet+Road+Badarpur+Delhi",
      phone: "9220385419",
      hours: "8am To 10pm",
      image: Sharma,
      facebook: "https://www.facebook.com/profile.php?id=61584935369686",
      Instagram: "https://www.instagram.com/sharma_ortho/",
    },
    {
      id: 3,
      slug: "parth-medicare",
      name: "PARTH MEDICARE",
      rating: 4.8,
      specialty: "Athletes Recovery & Performance Center",
      address: "10/16, Block 10 Nehru Enclave East, Kalkaji 110019",
      phone: "8076206304",
      hours: "7am To 9pm",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      facebook: "#",
      Instagram: "#",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % clinics.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [clinics.length]);

  // Navigation handlers
  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % clinics.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + clinics.length) % clinics.length);
  };

  const handleViewMore = (clinicSlug) => {
    // If it's Advanced Pain clinic, scroll to top of page
    if (clinicSlug === "advanced-pain-physiotherapy-centre") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // For other clinics, navigate to detail page
      navigate(`/clinic/${clinicSlug}`);
    }
  };

  const currentClinic = clinics[activeSlide];

  return (
    <div className="w-full py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className="text-center mb-12"
          style={{
            fontFamily: "'Zalando Sans Expanded', sans-serif",
            fontWeight: 200,
          }}
        >
          <h1 className="text-4xl md:text-5xl text-gray-800 mb-2 tracking-tight">
            ADVANCED PHYSIOTHERAPY
            <br />
            CLINICS
          </h1>
        </div>

        {/* Clinic Card */}
        <div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden relative"
          style={{
            fontFamily: "'Gantari', sans-serif",
            fontWeight: 400,
          }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous clinic"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next clinic"
          >
            <svg
              className="w-6 h-6 text-gray-800"
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

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Image with ultra smooth transition */}
            <div className="relative h-96 md:h-auto overflow-hidden bg-gray-100">
              {clinics.map((clinic, index) => (
                <div
                  key={clinic.id}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                    index === activeSlide
                      ? "opacity-100 translate-x-0 z-10"
                      : index < activeSlide
                        ? "opacity-0 -translate-x-full z-0"
                        : "opacity-0 translate-x-full z-0"
                  }`}
                >
                  <img
                    src={clinic.image}
                    alt={clinic.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="absolute top-6 left-6 bg-[#8ab72e] text-white px-4 py-2 rounded-full shadow-lg z-20">
                Clinic {activeSlide + 1} of {clinics.length}
              </div>
            </div>

            {/* Right Side - Info with smooth fade */}
            <div
              key={`info-${currentClinic.id}`}
              className="bg-gradient-to-br from-[#8ab72e] to-[#7aa625] p-10 md:p-12 text-white flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-4xl mb-4 leading-tight">
                {currentClinic.name}
              </h2>

              {/* Rating */}
              <div
                className="flex items-center gap-3 mb-4"
                style={{
                  fontFamily: "'Gantari', sans-serif",
                  fontWeight: 400,
                }}
              >
                <div className="flex text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-2xl text-yellow-300">
                  {currentClinic.rating}
                </span>
              </div>

              <p className="text-xl text-white/90 mb-6">
                {currentClinic.specialty}
              </p>

              {/* Address - Clickable */}
              {currentClinic.mapLink ? (
                <a
                  href={currentClinic.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 mb-5 group cursor-pointer"
                >
                  <svg
                    className="w-6 h-6 text-white flex-shrink-0 mt-1 group-hover:text-yellow-300 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-white/90 leading-relaxed group-hover:text-yellow-300 transition-colors underline-offset-4 group-hover:underline">
                    {currentClinic.address}
                  </p>
                </a>
              ) : (
                <div className="flex items-start gap-3 mb-5 group">
                  <svg
                    className="w-6 h-6 text-white flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors">
                    {currentClinic.address}
                  </p>
                </div>
              )}

              {/* Phone */}
              <div className="flex items-center gap-3 mb-5 group">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href={`tel:${currentClinic.phone}`}
                  className="text-xl  text-white hover:text-yellow-300 transition-colors"
                >
                  {currentClinic.phone}
                </a>
              </div>

              {/* Hours */}
              <div className="mb-8 bg-white/10 rounded-lg px-4 py-3 backdrop-blur-sm">
                <p className="text-white text-lg">
                  <span>Opening Hours:</span> {currentClinic.hours}
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mb-8">
                <a
                  href={currentClinic.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 hover:bg-white hover:text-[#8ab72e] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={currentClinic.Instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 hover:bg-white hover:text-[#8ab72e] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleViewMore(currentClinic.slug)}
                className="bg-white text-[#8ab72e] text-lg  px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                View More
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {clinics.map((clinic, index) => (
            <button
              key={clinic.id}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                activeSlide === index
                  ? "bg-[#8ab72e] w-8 shadow-lg"
                  : "bg-gray-300 hover:bg-[#8ab72e] w-3"
              }`}
              aria-label={`Go to clinic ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
