import React from "react";
import {
  Award,
  Users,
  Clock,
  Heart,
  CheckCircle,
  Target,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const navigate = useNavigate();
  // const stats = [
  //   { icon: Users, value: "15K+", label: "Happy Patients" },
  //   { icon: Award, value: "13+", label: "Years Experience" },
  //   { icon: Clock, value: "24/7", label: "Support Available" },
  //   { icon: Heart, value: "98%", label: "Success Rate" },
  // ];

  const features = [
    "Expert Team Led by Dr. Ashish Sharma",
    "Orthopedic, Neurological & Sports Injury Treatment",
    "Personalized Treatment Plans",
    "Evidence-Based Therapeutic Approaches",
    "Comprehensive Pain Management",
    "Post-Surgery & Geriatric Rehabilitation",
  ];

  return (
    <div className="w-full bg-white py-10 px-2 ">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center mb-8 md:mb-12">
          {/* Right - Content */}
          <div className="order-1 lg:order-2 ">
            <div
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
              className="inline-flex items-center gap-2 bg-[#e0faac] text-[#8ab72e] px-4 py-2 rounded-full text-sm mb-4"
            >
              <Sparkles size={16} />
              About Us
            </div>
            <h2
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
              className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4 md:mb-5 leading-tight"
            >
              Welcome to{" "}
              <span className="text-[#8ab72e]">
                Advanced Pain Physiotherapy Centre
              </span>
            </h2>

            {/* Founder Highlight */}
            {/* <div className="bg-gradient-to-r from-[#8ab72e]/10 to-transparent border-l-4 border-[#8ab72e] p-3 md:p-4 rounded-r-xl mb-4">
              <p
                style={{
                  fontFamily: "'Gantari', sans-serif",
                  fontWeight: 500,
                }}
                className="text-gray-800 text-sm md:text-base"
              >
                Founded by{" "}
                <span className="text-[#8ab72e] ">Dr. Ashish Sharma</span> - a
                passionate Physiotherapist, Entrepreneur, Educator, and
                Innovator committed to transforming healthcare in India
              </p>
            </div> */}

            <p
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
              className="text-gray-600  text-sm md:text-base leading-relaxed mb-3"
            >
              Advanced Pain Physiotherapy Centre is a leading physiotherapy
              centre in Delhi-NCR, providing advanced clinical physiotherapy and
              home-based physiotherapy services with a strong focus on long-term
              pain relief, mobility restoration, and functional recovery. We
              specialize in treating back pain, neck pain, knee pain, shoulder
              pain, slip disc, sciatica, sports injuries, post-surgical
              rehabilitation, stroke rehabilitation, neurological conditions,
              arthritis, posture correction, and chronic pain management using
              evidence-based physiotherapy protocols. Our services include
              orthopedic physiotherapy, sports physiotherapy, neurological
              physiotherapy, spine rehabilitation, geriatric physiotherapy,
              pediatric physiotherapy, manual therapy, electrotherapy, dry
              needling, cupping therapy, exercise therapy, posture correction,
              and mobility training.
            </p>

            <p
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
              className="text-gray-600 text-sm md:text-base leading-relaxed mb-3"
            >
              We offer{" "}
              <strong className="text-[#8ab72e]">
                home physiotherapy services
              </strong>{" "}
              across <strong className="text-[#8ab72e]">Delhi-NCR</strong>,
              including South Delhi, North Delhi, East Delhi, West Delhi,
              Central Delhi, Dwarka, Rohini, Pitampura, Janakpuri, Lajpat Nagar,
              Greater Kailash, Saket, Vasant Kunj, Karol Bagh, Patel Nagar, as
              well as Noida, Greater Noida, Ghaziabad, Indirapuram, Vaishali,
              Faridabad, Gurugram (Gurgaon), and surrounding NCR areas.
            </p>

            <p
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
              className="text-gray-600 text-sm md:text-base leading-relaxed mb-5"
            >
              At Advanced Pain Physiotherapy Centre, every patient receives a
              personalized physiotherapy treatment plan, delivered by
              experienced and certified physiotherapists, either at our modern
              physiotherapy clinic or in the comfort of their home.
            </p>

            {/* Features List */}
            {/* <div
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
              className="grid sm:grid-cols-2 gap-3 mb-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle
                    className="text-[#8ab72e] flex-shrink-0 mt-1"
                    size={18}
                  />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div> */}

            <button
              onClick={() => navigate("/contact")}
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 500,
              }}
              className="bg-[#8ab72e] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:bg-[#6f9724] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm md:text-base"
            >
              Book Appointment
            </button>
          </div>

          {/* Left - Image */}
          <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                alt="Advanced Pain Physiotherapy Treatment"
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover"
              />
            </div>
            {/* Floating Badge - Hidden on mobile */}
            <div
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 600,
              }}
              className="hidden md:block absolute -bottom-6 -right-6 bg-gradient-to-br from-[#8ab72e] to-[#6a9620] text-white p-8 rounded-2xl shadow-2xl"
            >
              <div className="text-center">
                <div className="text-5xl">13+</div>
                <div className="text-sm mt-2 ">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div
          style={{
            fontFamily: "'Gantari', sans-serif",
            fontWeight: 400,
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-gradient-to-br from-[#8ab72e] to-[#6a9620] rounded-3xl p-6 md:p-8 shadow-xl"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm text-white rounded-2xl mb-3 md:mb-4 group-hover:bg-white/30 transition-all group-hover:scale-110">
                  <Icon size={24} className="md:w-8 md:h-8" />
                </div>
                <div className="text-2xl md:text-4xl  text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/90 text-xs md:text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}
