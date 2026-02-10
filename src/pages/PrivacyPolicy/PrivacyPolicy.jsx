import React, { useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Lock,
  Eye,
  Database,
  Share2,
  Cookie,
  Link2,
  UserCheck,
  FileText,
} from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: "We may collect the following personal information:",
      points: [
        "Name",
        "Mobile number",
        "Email address",
        "Appointment or enquiry details",
        "Basic medical or health-related information (only for treatment purposes)",
      ],
      subContent: "This information is collected when you:",
      subPoints: [
        "Fill out forms on our website",
        "Book an appointment",
        "Contact us via phone or email",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: "We use the collected information for the following purposes:",
      points: [
        "To schedule and manage appointments",
        "To provide physiotherapy and related healthcare services",
        "To respond to your enquiries and requests",
        "To improve our services and patient experience",
        "To comply with legal and regulatory requirements",
      ],
    },
    {
      icon: Share2,
      title: "Sharing of Information",
      content:
        "We do not sell, trade, or rent your personal information to third parties.",
      subContent:
        "Your information may only be shared in the following situations:",
      subPoints: [
        "When required by law",
        "In case of a medical emergency",
        "To comply with legal or regulatory obligations",
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      content:
        "We implement reasonable administrative and technical security measures to protect your personal information from unauthorized access, misuse, or disclosure.",
      note: "However, please note that no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
    },
    {
      icon: Cookie,
      title: "Cookies",
      content: "Our website may use cookies to:",
      points: [
        "Improve user experience",
        "Analyze website traffic and performance",
      ],
      note: "You can choose to disable cookies through your browser settings.",
    },
    {
      icon: Link2,
      title: "Third-Party Links",
      content:
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external websites.",
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: "You have the right to:",
      points: [
        "Access your personal information",
        "Request correction or deletion of your data",
        "Object to the use of your personal information",
      ],
      note: "To exercise these rights, please contact us using the details provided below.",
    },
    {
      icon: FileText,
      title: "Changes to This Privacy Policy",
      content:
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section - Fully Responsive */}
      <div className="bg-gradient-to-r from-[#8ab72e] to-[#7aa625] text-white py-8 sm:py-12 md:py-16">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6"
          style={{
            fontFamily: "'Zalando Sans Expanded', sans-serif",
            fontWeight: 200,
          }}
        >
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Shield size={40} className="sm:w-12 sm:h-12 mr-3 sm:mr-4" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl  text-center mb-3 sm:mb-4 px-2">
            Privacy Policy
          </h1>
          <h6 className="text-center text-base sm:text-lg opacity-90 px-2">
            Last Updated: January 2026
          </h6>
          <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm opacity-90 max-w-3xl mx-auto px-4">
            Advanced Pain Physiotherapy Centre is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website or use our
            services.
          </div>
        </div>
      </div>

      {/* Main Content - Responsive Padding */}
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
        style={{
          fontFamily: "'Gantari', sans-serif",
          fontWeight: 400,
        }}
      >
        {/* Clinic Info Card - Responsive */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 border-l-4 border-[#8ab72e]">
          <h2 className="text-xl sm:text-2xl  text-gray-800 mb-3 sm:mb-4">
            Advanced Pain Physiotherapy Centre
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-gray-600">
            <div className="flex items-start gap-2 sm:gap-3">
              <MapPin
                size={18}
                className="sm:w-5 sm:h-5 text-[#8ab72e] mt-1 flex-shrink-0"
              />
              <p className="leading-relaxed">
                10/16 Basement, Block 10, Nehru Enclave East, Kalkaji, New Delhi
                – 110019
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Phone
                size={18}
                className="sm:w-5 sm:h-5 text-[#8ab72e] flex-shrink-0"
              />
              <a
                href="tel:+919220385419"
                className="hover:text-[#8ab72e] transition"
              >
                +91 9220385419
              </a>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <Mail
                size={18}
                className="sm:w-5 sm:h-5 text-[#8ab72e] mt-0.5 flex-shrink-0"
              />
              <a
                href="mailto:advancedpainphysiotherapy@gmail.com"
                className="hover:text-[#8ab72e] transition break-all leading-relaxed"
              >
                advancedpainphysiotherapy@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Privacy Sections - Responsive */}
        <div
          className="space-y-4 sm:space-y-6"
          style={{
            fontFamily: "'Gantari', sans-serif",
            fontWeight: 400,
          }}
        >
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6 border border-gray-100"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#8ab72e] bg-opacity-10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Icon size={20} className="sm:w-6 sm:h-6 text-[#e0ebca]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl  text-gray-800 mb-2 sm:mb-3 break-words">
                      {index + 1}. {section.title}
                    </h3>

                    {section.content && (
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3">
                        {section.content}
                      </p>
                    )}

                    {section.points && (
                      <ul className="space-y-1.5 sm:space-y-2 mb-2 sm:mb-3">
                        {section.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm sm:text-base text-gray-600"
                          >
                            <span className="text-[#8ab72e] mt-1 sm:mt-1.5 flex-shrink-0 text-lg">
                              •
                            </span>
                            <span className="leading-relaxed break-words">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.subContent && (
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-2 mt-3 sm:mt-4">
                        {section.subContent}
                      </p>
                    )}

                    {section.subPoints && (
                      <ul className="space-y-1.5 sm:space-y-2 mb-2 sm:mb-3">
                        {section.subPoints.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm sm:text-base text-gray-600"
                          >
                            <span className="text-[#8ab72e] mt-1 sm:mt-1.5 flex-shrink-0 text-lg">
                              •
                            </span>
                            <span className="leading-relaxed break-words">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.note && (
                      <div className="mt-2 sm:mt-3 bg-amber-50 border-l-4 border-amber-400 p-2.5 sm:p-3 rounded">
                        <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                          {section.note}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section - Responsive */}
        <div
          className="mt-8 sm:mt-12 bg-gradient-to-r from-[#8ab72e] to-[#7aa625] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white"
          style={{
            fontFamily: "'Gantari', sans-serif",
            fontWeight: 400,
          }}
        >
          <h3 className="text-xl sm:text-2xl  mb-3 sm:mb-4 text-center">
            Contact Us
          </h3>
          <p className="text-center text-sm sm:text-base mb-4 sm:mb-6 opacity-90 px-2">
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us at:
          </p>
          <div className="space-y-3 max-w-md mx-auto">
            <div className="flex text-gray-700  items-start gap-2 sm:gap-3 bg-white bg-opacity-10 rounded-lg p-2.5 sm:p-3">
              <MapPin
                size={18}
                className="sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0"
              />
              <p className="text-sm sm:text-base leading-relaxed">
                10/16 Basement, Block 10, Nehru Enclave East, Kalkaji, New Delhi
                – 110019
              </p>
            </div>
            <div className="flex text-gray-700  items-center gap-2 sm:gap-3 bg-white bg-opacity-10 rounded-lg p-2.5 sm:p-3">
              <Phone size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
              <a
                href="tel:+919220385419"
                className="hover:underline text-sm sm:text-base"
              >
                +91 9220385419
              </a>
            </div>
            <div className="flex text-gray-700  items-start gap-2 sm:gap-3 bg-white bg-opacity-10 rounded-lg p-2.5 sm:p-3">
              <Mail size={18} className="sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
              <a
                href="mailto:advancedpainphysiotherapy@gmail.com"
                className="hover:underline break-all text-sm sm:text-base leading-relaxed"
              >
                advancedpainphysiotherapy@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Commitment Badge - Responsive */}
        <div className="mt-6 sm:mt-8 text-center px-4">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-md border border-gray-200">
            <Shield
              size={20}
              className="sm:w-6 sm:h-6 text-[#8ab72e] flex-shrink-0"
            />
            <span className=" text-gray-700 text-sm sm:text-base">
              Your Privacy is Our Priority
            </span>
          </div>
        </div>

        {/* Disclaimer - Responsive */}
        <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500 border-t pt-4 sm:pt-6 px-4">
          <p className="leading-relaxed">
            By using our services, you acknowledge that you have read and
            understood this Privacy Policy and agree to its terms.
          </p>
        </div>
      </div>
    </div>
  );
}
