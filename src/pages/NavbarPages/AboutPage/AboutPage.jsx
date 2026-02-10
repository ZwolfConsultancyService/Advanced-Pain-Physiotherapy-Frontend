import React, { useEffect } from "react";
import {
  Award,
  Users,
  Clock,
  Heart,
  CheckCircle,
  Target,
  Sparkles,
} from "lucide-react";
import FounderSection from "../../../components/FounderSection/FounderSection";
import AOS from "aos";
import "aos/dist/aos.css";
import TherapistsTeam from "../../../components/TherapistsTeam/TherapistsTeam";
import FAQSection from "../../../components/FAQSection/FAQSection";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const stats = [
    { icon: Users, value: "15K+", label: "Happy Patients" },
    { icon: Award, value: "13+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: Heart, value: "98%", label: "Success Rate" },
  ];

  const features = [
    "Expert Team Led by Dr. Ashish Sharma",
    "Orthopedic, Neurological & Sports Injury Treatment",
    "Personalized Treatment Plans",
    "Evidence-Based Therapeutic Approaches",
    "Comprehensive Pain Management",
    "Post-Surgery & Geriatric Rehabilitation",
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Every treatment plan is tailored to individual needs, ensuring personalized attention and optimal outcomes with genuine concern for wellbeing.",
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description:
        "Led by Dr. Ashish Sharma, we maintain the highest standards using evidence-based practices and cutting-edge treatment approaches.",
    },
    {
      icon: Users,
      title: "Experienced Leadership",
      description:
        "13+ years of expertise in treating Orthopedic, Neurological, Post-Operative, Geriatrics, Spinal and Sports injuries with proven results.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div
        className="w-full bg-gradient-to-r from-[#8ab72e] to-[#7aa625] text-white py-12 sm:py-16 md:py-20"
        data-aos="fade-down"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className="text-center"
            style={{
              fontFamily: "'Zalando Sans Expanded', sans-serif",
              fontWeight: 200,
            }}
          >
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 text-[#7aa625] px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base mb-4 sm:mb-6">
              <Sparkles size={18} />
              About Us
            </div>
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
              Advanced Pain Physiotherapy Centre
            </h1>
            <h6 className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto opacity-95 leading-relaxed px-4">
              Transforming lives through expert physiotherapy care and
              compassionate treatment since 2011
            </h6>
          </div>
        </div>
      </div>

      {/* Main About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Content */}
          <div
            className="order-1 lg:order-2"
            style={{
              fontFamily: "'Gantari', sans-serif",
              fontWeight: 400,
            }}
            data-aos="fade-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#e0faac] text-[#8ab72e] px-4 py-2 rounded-full text-sm mb-4 sm:mb-6">
              <Sparkles size={16} />
              Who We Are
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4 sm:mb-6"
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
            >
              Welcome to{" "}
              <span className="text-[#8ab72e]">
                Advanced Pain Physiotherapy Centre
              </span>
            </h2>

            {/* Founder Highlight */}
            <div className="bg-gradient-to-r from-[#8ab72e]/10 to-transparent border-l-4 border-[#8ab72e] p-3 sm:p-4 rounded-r-xl mb-4">
              <p className="text-gray-800 text-sm sm:text-base ">
                Founded by{" "}
                <span className="text-[#8ab72e] ">Dr. Ashish Sharma</span> - a
                passionate Physiotherapist, Entrepreneur, Educator, and
                Innovator
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4">
              At Advanced Pain Physiotherapy Centre, we are committed to
              transforming the healthcare and rehabilitation landscape in India.
              With a strong foundation in Clinical Physiotherapy and a visionary
              mindset, we've created a platform that bridges the gap between
              patients, professionals, and modern treatment solutions.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4">
              Located in Kalkaji, Delhi, our mission is to make quality
              physiotherapy accessible across India through both online and
              offline channels. Over the last{" "}
              <strong className="text-[#8ab72e]">13 years</strong>, we've
              successfully helped over{" "}
              <strong className="text-[#8ab72e]">15,000 patients</strong>{" "}
              achieve optimal health and wellness.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Dr. Ashish Sharma is highly skilled and experienced in treating
              Orthopedic, Neurological, Post-Operative, Geriatrics, Spinal and
              Sports injuries. Patients praise his knowledge, professionalism,
              thoroughness, and genuine concern for their wellbeing. His work
              blends clinical expertise, entrepreneurial energy, and a drive to
              build scalable impact in the healthcare space.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle
                    className="text-[#8ab72e] flex-shrink-0 mt-0.5 sm:mt-1"
                    size={18}
                  />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <a href="/contact">
              <button className="w-full sm:w-auto bg-[#8ab72e] text-white px-6 sm:px-8 py-3 rounded-full hover:bg-[#7aa625] transition shadow-lg hover:shadow-xl ">
                Book Appointment
              </button>
            </a>
          </div>

          {/* Image */}
          <div className="relative order-2 lg:order-1" data-aos="fade-right">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                alt="Advanced Pain Physiotherapy Centre Treatment"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-br from-[#8ab72e] to-[#6a9620] text-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl ">13+</div>
                <div className="text-xs sm:text-sm mt-1 ">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          style={{
            fontFamily: "'Gantari', sans-serif",
            fontWeight: 400,
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-gradient-to-br from-[#8ab72e] to-[#6a9620] rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16 shadow-xl"
          data-aos="fade-up"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm text-white rounded-xl sm:rounded-2xl mb-3 sm:mb-4 group-hover:bg-white/30 transition-all group-hover:scale-110">
                  <Icon size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl  text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/90 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Our Values Section */}
        {/* <div
          className="mb-12 sm:mb-16"
          style={{
            fontFamily: "'Zalando Sans Expanded', sans-serif",
            fontWeight: 200,
          }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-[#e0faac] text-[#8ab72e] px-4 py-2 rounded-full text-sm mb-4">
              <Sparkles size={16} />
              Our Values
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4">
              What Sets Us Apart
            </h2>
            <p
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
              className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Our commitment to excellence and patient care drives everything we
              do
            </p>
          </div>

          <div
            style={{
              fontFamily: "'Gantari', sans-serif",
              fontWeight: 400,
            }}
            className="grid md:grid-cols-3 gap-6 sm:gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#8ab72e] hover:shadow-xl transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-gradient-to-br from-[#8ab72e] to-[#6a9620] w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg sm:text-xl  text-gray-800 mb-3 sm:mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* Mission & Vision */}
        {/* <div
          style={{
            fontFamily: "'Gantari', sans-serif",
            fontWeight: 400,
          }}
          className="grid md:grid-cols-2 gap-6 sm:gap-8"
        >
          <div
            className="bg-white border-2 border-[#8ab72e]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:border-[#8ab72e] transition-all duration-300"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-[#8ab72e] to-[#6a9620] p-3 rounded-xl">
                <Target className="text-white w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3
                style={{
                  fontFamily: "'Zalando Sans Expanded', sans-serif",
                  fontWeight: 300,
                }}
                className="text-xl sm:text-2xl text-gray-800"
              >
                Our Mission
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              To provide world-class physiotherapy services that empower our
              patients to live pain-free, active lives. Led by Dr. Ashish
              Sharma, we are committed to excellence in treatment, continuous
              innovation, and compassionate care for every individual who walks
              through our doors.
            </p>
          </div>

          <div
            className="bg-white border-2 border-[#8ab72e]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:border-[#8ab72e] transition-all duration-300"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-[#8ab72e] to-[#6a9620] p-3 rounded-xl">
                <Heart className="text-white w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3
                style={{
                  fontFamily: "'Zalando Sans Expanded', sans-serif",
                  fontWeight: 300,
                }}
                className="text-xl sm:text-2xl text-gray-800"
              >
                Our Vision
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              To be the most trusted physiotherapy center in Delhi, recognized
              for our expertise, patient outcomes, and dedication to advancing
              the field of rehabilitation medicine. We strive to set new
              standards in physiotherapy care and help our community achieve
              lasting wellness through accessible, quality treatment.
            </p>
          </div>
        </div> */}
      </div>

      <section data-aos="fade-up">
        <FounderSection />
      </section>

      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="mobile-section tight-gap"
      >
        <TherapistsTeam />
      </section>


<section data-aos="fade-up" data-aos-delay="700" className="mobile-section tight-gap">
          <FAQSection />
        </section> 

      {/* CTA Section */}
      <div
        className="w-full py-12 sm:py-16 mt-10 sm:mt-16"
        style={{
          fontFamily: "'Zalando Sans Expanded', sans-serif",
          fontWeight: 200,
        }}
        data-aos="zoom-in"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-black mb-4 sm:mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p
            style={{
              fontFamily: "'Gantari', sans-serif",
              fontWeight: 400,
            }}
            className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto"
          >
            Book your consultation today and take the first step towards a
            pain-free life with Dr. Ashish Sharma
          </p>
          <a href="/contact">
            <button className="bg-[#8ab72e] text-white px-6 sm:px-8 py-3 rounded-full hover:bg-[#6a9620] transition shadow-lg hover:shadow-xl text-sm sm:text-base  hover:scale-105 duration-300">
              Schedule Appointment
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
