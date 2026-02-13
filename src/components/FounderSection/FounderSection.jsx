import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Quote,
  Award,
  Users,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Owner from "../../assets/Owner.png";

const FounderSection = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/clinic/Ashish-physiotherapy-centre");
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-3 sm:mb-4"
            style={{
              fontFamily: "'Zalando Sans Expanded', sans-serif",
              fontWeight: 200,
            }}
          >
            Meet Our <span className="text-[#8ab72e]">Founder</span>
          </h2>
          <h6
            style={{
              fontFamily: "'Gantari', sans-serif",
              fontWeight: 400,
            }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"
          >
            Visionary leader transforming healthcare & rehabilitation in India
          </h6>
        </div>

        {/* Founder Card */}
        <div
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
          style={{
            fontFamily: "'Gantari', sans-serif",
            fontWeight: 400,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Image with Overlay */}
            <div className="relative h-[350px] sm:h-[400px] md:h-full md:min-h-[600px] overflow-hidden">
              {/* Background Image */}
              <img
                src={Owner}
                alt="Dr. Ashish Sharma - Founder"
                className="absolute inset-0 w-full h-full object-cover object-[50%_20%] sm:object-[50%_30%] md:object-center"
              />

              {/* Gradient Overlay - Stronger on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:from-black md:via-black/10"></div>

              {/* Content Overlay - VISIBLE ON TABLET & DESKTOP (md and above) */}
              <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white z-10">
                <div className="mb-1">
                  <span className="inline-block px-3 py-1 bg-[#8ab72e] rounded-full text-xs font-medium mb-2">
                    Physiotherapist & Entrepreneur
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-1">
                  Dr. Ashish Sharma
                </h3>
                <p className="text-lg text-white text-opacity-90 mb-4">
                  Founder & CEO
                </p>

                {/* Contact Info */}
                {/* <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white text-opacity-90 text-xs">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="break-all">
                      advancedpainphysiotherapy@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-white text-opacity-90 text-xs">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>+91 9220385419</span>
                  </div>
                  <div className="flex items-center gap-2 text-white text-opacity-90 text-xs">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Kalkaji, Delhi</span>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Right Side - About & Quote */}
            <div className="p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              {/* MOBILE ONLY - Founder Info at top */}
              <div className="md:hidden mb-6 pb-6 border-b border-gray-200">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1.5 bg-[#8ab72e] rounded-full text-xs font-medium text-white">
                    Physiotherapist & Entrepreneur
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Dr. Ashish Sharma
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-4">
                  Founder & CEO
                </p>

                {/* Contact Info - Mobile */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                    <Mail className="w-4 h-4 text-[#8ab72e] flex-shrink-0" />
                    <span className="break-all">
                      advancedpainphysiotherapy@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                    <Phone className="w-4 h-4 text-[#8ab72e] flex-shrink-0" />
                    <span>+91 9220385419</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 text-[#8ab72e] flex-shrink-0" />
                    <span>Kalkaji, Delhi</span>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="mb-5 sm:mb-6">
  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
    <div className="w-1 h-5 sm:h-6 bg-[#8ab72e] rounded-full"></div>
    About Dr. Ashish Sharma
  </h4>

  <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3 text-justify">
    Dr. Ashish Sharma,PT is a highly skilled and patient-focused
    Physiotherapist in Delhi, with extensive experience in pain
    management, musculoskeletal rehabilitation, sports injury
    recovery, and post-operative physiotherapy. Known for a
    holistic and evidence-based approach, Dr. Ashish Sharma is
    committed to restoring mobility, reducing pain, and improving
    overall quality of life for patients across all age groups.
    With specialized expertise in orthopedic physiotherapy,
    neurological rehabilitation, spine care, posture correction,
    and physiotherapy for chronic back pain, neck pain, knee pain,
    and joint stiffness, Dr. Ashish Sharma combines advanced
    clinical techniques with personalized treatment plans tailored
    to each patient’s condition and lifestyle. Practicing in Delhi
    NCR, Dr. Ashish Sharma is widely recognized as a trusted
    physiotherapist in Delhi for:
  </p>

  <ul className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3 list-disc pl-5 space-y-1 text-left">
    <li>Back pain and slip disc treatment</li>
    <li>Cervical and lumbar spondylosis</li>
    <li>Sports injury physiotherapy</li>
    <li>Knee replacement and post-surgery rehabilitation</li>
    {/* <li>Stroke and neurological physiotherapy</li>
    <li>Shoulder pain, frozen shoulder, and rotator cuff injuries</li>
    <li>Sciatica, arthritis, and posture-related disorders</li> */}
  </ul>

  {/* <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-justify">
    Dr. Ashish Sharma integrates manual therapy, electrotherapy,
    dry needling, exercise therapy, and ergonomic correction to
    ensure long-term recovery rather than temporary relief. A
    strong believer in patient education, Dr. Ashish Sharma
    empowers individuals with preventive care strategies,
    corrective exercises, and lifestyle guidance.
  </p> */}
</div>

              {/* <div className="mb-5 sm:mb-6">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 sm:h-6 bg-[#8ab72e] rounded-full"></div>
                  About Dr. Ashish Sharma
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3">
                  Dr. Ashish Sharma,PT is a highly skilled and patient-focused
                  Physiotherapist in Delhi, with extensive experience in pain
                  management, musculoskeletal rehabilitation, sports injury
                  recovery, and post-operative physiotherapy. Known for a
                  holistic and evidence-based approach, Dr. Ashish Sharma is
                  committed to restoring mobility, reducing pain, and improving
                  overall quality of life for patients across all age groups.
                  With specialized expertise in orthopedic physiotherapy,
                  neurological rehabilitation, spine care, posture correction,
                  and physiotherapy for chronic back pain, neck pain, knee pain,
                  and joint stiffness, Dr. Ashish Sharma combines advanced
                  clinical techniques with personalized treatment plans tailored
                  to each patient’s condition and lifestyle. Practicing in Delhi
                  NCR, Dr. Ashish Sharma is widely recognized as a trusted
                  physiotherapist in Delhi for:
                </p>
                <ul className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3 list-disc pl-5 space-y-1">
                  <li>Back pain and slip disc treatment</li>
                  <li>Cervical and lumbar spondylosis</li>
                  <li>Sports injury physiotherapy</li>
                  <li>Knee replacement and post-surgery rehabilitation</li>
                  <li>Stroke and neurological physiotherapy</li>
                  <li>
                    Shoulder pain, frozen shoulder, and rotator cuff injuries
                  </li>
                  <li>Sciatica, arthritis, and posture-related disorders</li>
                </ul>
                <p>
                  Dr. Ashish Sharma integrates manual therapy, electrotherapy,
                  dry needling, exercise therapy, and ergonomic correction to
                  ensure long-term recovery rather than temporary relief. A
                  strong believer in patient education, Dr. Ashish Sharma
                  empowers individuals with preventive care strategies,
                  corrective exercises, and lifestyle guidance.
                </p>
              </div> */}

              {/* Stats Grid - Responsive */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#8ab72e] mx-auto mb-1 sm:mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-[#8ab72e]">
                    13+
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-600 mt-0.5">
                    Years Exp
                  </div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#8ab72e] mx-auto mb-1 sm:mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-[#8ab72e]">
                    15K+
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-600 mt-0.5">
                    Patients
                  </div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#8ab72e] mx-auto mb-1 sm:mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-[#8ab72e]">
                    Expert
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-600 mt-0.5">
                    Clinical
                  </div>
                </div>
              </div>

              {/* View More Button */}
              <button
                onClick={handleViewMore}
                className="w-full bg-[#8ab72e] hover:bg-[#6f9724] text-white px-6 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                View More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
