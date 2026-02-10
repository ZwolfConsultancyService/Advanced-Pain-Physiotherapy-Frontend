import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import kajal from "../../assets/therapists/kajal.jpeg";
import Ashish from "../../assets/therapists/Ashish.jpeg";

export default function CertifiedTherapists() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const therapists = [
    {
      id: 1,
      name: "Dr. Kajal",
      title: "Neurological Rehabilitation",
      image: kajal,
    },
    {
      id: 2,
      name: "Dr. Ashish Yadav",
      title: "Senior  Physiotherapist",
      image: Ashish,
    },
    // {
    //   id: 3,
    //   name: "Dr. Amit Singh",
    //   title: "Sports Physiotherapist",
    //   image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    // },
  ];

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{
        fontFamily: "'Gantari', sans-serif",
        fontWeight: 400,
      }}
    >
      {/* Hero Section */}
      <div
        className="relative h-64 md:h-80 bg-gradient-to-r from-[#8ab72e] to-[#6d9424] overflow-hidden"
        style={{
          fontFamily: "'Zalando Sans Expanded', sans-serif",
          fontWeight: 200,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-5xl text-white mb-4 animate-fade-in">
              Our Certified Therapists
            </h1>
            <p className="text-white/90 text-base md:text-xl max-w-2xl animate-fade-in-delay">
              Meet our team of highly qualified and experienced physiotherapists
              dedicated to your wellness
            </p>
          </div>
        </div>
      </div>

      {/* Therapists Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapists.map((therapist, index) => (
            <div
              key={therapist.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Therapist Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Therapist Details */}
              <div className="p-6 text-center">
                <h3 className="text-2xl  text-gray-900 mb-2">
                  {therapist.name}
                </h3>
                <p className="text-[#8ab72e]  text-lg mb-6">
                  {therapist.title}
                </p>

                {/* Book Appointment Button */}
                {/* <button
                  onClick={() => navigate("/contact")}
                  className="w-full bg-[#8ab72e] text-white py-3 rounded-lg hover:bg-[#6d9424] transition-all duration-300  shadow-md hover:shadow-lg"
                >
                  Book Appointment
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#8ab72e] to-[#6d9424] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl  mb-4">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our certified therapists are here to help you achieve your health
            and wellness goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-[#8ab72e] px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300  shadow-lg"
            >
              Book Appointment
            </button>
            <a
              href="tel:+919220385419"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 "
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Animations CSS */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-delay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 0.6s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
}
