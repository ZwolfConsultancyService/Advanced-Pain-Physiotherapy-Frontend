import React from "react";
import { ArrowRight, MessageCircle, Award, Heart } from "lucide-react";

// ✅ Import images from assets
import member from "../../assets/therapists/member.jpeg";
import member1 from "../../assets/therapists/member1.jpeg";
import kajal from "../../assets/therapists/kajal.jpeg";
import Ashish from "../../assets/therapists/Ashish.jpeg";

export default function TherapistsTeam() {
  const therapists = [
    {
      name: "Anuj maurya",
      role: "Head-Team Building & Strategic Planning",
      image: member1,
    },
    {
      name: "Megha kumari",
      role: "Operational Head",
      image: member,
    },
    {
      name: "Dr. Ashish Yadav",
      role: "Senior  Physiotherapist",
      image: Ashish,
    },
    {
      name: "Dr. Kajal",
      role: "Neurological Rehabilitation",
      image: kajal,
    },
  ];

  // const features = [
  //   {
  //     icon: MessageCircle,
  //     title: "Good Communicators",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   {
  //     icon: Award,
  //     title: "Certified & Experienced",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   {
  //     icon: Heart,
  //     title: "Caring & Patient-Centered",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  // ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div
            className="flex-1"
            style={{
              fontFamily: "'Zalando Sans Expanded', sans-serif",
              fontWeight: 200,
            }}
          >
            <span className="text-[#8ab72e]">Our Team</span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4 leading-tight">
              Meet Our Expert Team
              <br />
              Here to Support Your Healing Journey
            </h2>
          </div>

          {/* <div className="flex flex-col items-end gap-4">
            <p
              className="text-gray-600 max-w-md text-right"
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            <button
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
              className="flex items-center gap-2 px-6 py-3 border-2 border-[#8ab72e] rounded-full hover:bg-[#8ab72e] hover:text-white transition-all duration-300"
            >
              SEE MORE
              <ArrowRight className="w-5 h-5" />
            </button>
          </div> */}
        </div>

        {/* ================= THERAPISTS CARDS ================= */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          style={{
            fontFamily: "'Gantari', sans-serif",
            fontWeight: 400,
          }}
        >
          {therapists.map((therapist, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#e7efd8] to-[#e5f1ce]">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 text-center">
                <h3 className="text-2xl text-gray-900 mb-1">
                  {therapist.name}
                </h3>
                <p className="text-gray-600">{therapist.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= FEATURES ================= */}
        {/* <div
          className="bg-[#8ab72e] rounded-3xl p-8 lg:p-12"
          style={{
            fontFamily: "'Gantari', sans-serif",
            fontWeight: 400,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#465a1e] rounded-2xl flex items-center justify-center">
                    <feature.icon
                      className="w-8 h-8 text-[#e3f0c9]"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
