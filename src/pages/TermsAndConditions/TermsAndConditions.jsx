import React, { useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  FileText,
  Clock,
  CreditCard,
  Calendar,
  Shield,
  Info,
  Scale,
} from "lucide-react";
import { TbH6 } from "react-icons/tb";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: FileText,
      title: "Services",
      content:
        "Advanced Pain Physiotherapy Centre provides physiotherapy, pain management, rehabilitation, and related healthcare services. All treatments are provided by qualified professionals based on individual assessment.",
    },
    {
      icon: Calendar,
      title: "Appointments",
      points: [
        "Appointments are subject to availability.",
        "Patients are advised to arrive on time for scheduled appointments.",
        "Late arrival may result in reduced treatment time or rescheduling.",
      ],
    },
    {
      icon: CreditCard,
      title: "Payments",
      points: [
        "All fees must be paid as per the treatment plan discussed.",
        "Payments can be made in cash, UPI, or other accepted payment methods.",
        "Fees once paid are non-refundable unless otherwise stated.",
      ],
    },
    {
      icon: Clock,
      title: "Cancellation & Rescheduling",
      points: [
        "Appointments should be cancelled or rescheduled at least 24 hours in advance.",
        "Failure to inform may result in cancellation charges or loss of session.",
      ],
    },
    {
      icon: Info,
      title: "Medical Information",
      points: [
        "Patients must provide accurate and complete medical information.",
        "Advanced Pain Physiotherapy Centre is not responsible for issues arising due to incomplete or incorrect information provided by the patient.",
      ],
    },
    {
      icon: Shield,
      title: "Treatment Results",
      points: [
        "Physiotherapy results may vary from patient to patient.",
        "No guarantee is made regarding complete recovery or specific outcomes.",
      ],
    },
    {
      icon: Shield,
      title: "Privacy & Confidentiality",
      points: [
        "Patient information is handled in accordance with our Privacy Policy.",
        "All medical records are kept confidential unless disclosure is required by law.",
      ],
    },
    {
      icon: FileText,
      title: "Intellectual Property",
      points: [
        "All content on this website, including text, images, logos, and design, is the property of Advanced Pain Physiotherapy Centre.",
        "Unauthorized use or reproduction is prohibited.",
      ],
    },
    {
      icon: Info,
      title: "Website Use",
      points: [
        "You agree not to misuse the website or engage in unlawful activities.",
        "We reserve the right to restrict or terminate access if misuse is detected.",
      ],
    },
    {
      icon: Shield,
      title: "Limitation of Liability",
      content:
        "Advanced Pain Physiotherapy Centre shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.",
    },
    {
      icon: FileText,
      title: "Changes to Terms",
      content:
        "We reserve the right to modify these Terms & Conditions at any time. Updated terms will be posted on this page.",
    },
    {
      icon: Scale,
      title: "Governing Law",
      content:
        "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of New Delhi courts.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#8ab72e] to-[#7aa625] text-white py-16">
        <div
          className="max-w-4xl mx-auto px-4"
          style={{
            fontFamily: "'Zalando Sans Expanded', sans-serif",
            fontWeight: 200,
          }}
        >
          <div className="flex items-center justify-center mb-4">
            <FileText size={48} className="mr-4" />
          </div>
          <h1 className="text-4xl md:text-5xl text-center mb-4">
            Terms & Conditions
          </h1>
          <h6 className="text-center text-lg opacity-90">
            Last Updated: January 2026
          </h6>
          <div className="mt-6 text-center text-sm opacity-90">
            By accessing or using our website and services, you agree to comply
            with and be bound by the following Terms & Conditions.
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="max-w-4xl mx-auto px-4 py-12"
        style={{
          fontFamily: "'Gantari', sans-serif",
          fontWeight: 400,
        }}
      >
        {/* Clinic Info Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-l-4 border-[#8ab72e]">
          <h2 className="text-2xl  text-gray-800 mb-4">
            Advanced Pain Physiotherapy Centre
          </h2>
          <div className="space-y-3 text-gray-600">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-[#8ab72e] mt-1 flex-shrink-0" />
              <p>
                10/16 Basement, Block 10, Nehru Enclave East, Kalkaji, New Delhi
                – 110019
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-[#8ab72e] flex-shrink-0" />
              <a
                href="tel:+919220385419"
                className="hover:text-[#8ab72e] transition"
              >
                +91 9220385419
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-[#8ab72e] flex-shrink-0" />
              <a
                href="mailto:advancedpainphysiotherapy@gmail.com"
                className="hover:text-[#8ab72e] transition break-all"
              >
                advancedpainphysiotherapy@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#8ab72e] bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                    <Icon size={24} className="text-[#e0ebca]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl  text-gray-800 mb-3">
                      {index + 1}. {section.title}
                    </h3>

                    {section.content && (
                      <p className="text-gray-600 leading-relaxed">
                        {section.content}
                      </p>
                    )}

                    {section.points && (
                      <ul className="space-y-2">
                        {section.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <span className="text-[#8ab72e] mt-1.5 flex-shrink-0">
                              •
                            </span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-[#8ab72e] to-[#7aa625] rounded-2xl p-8 text-white">
          <h3 className="text-2xl  mb-4 text-center">Contact Information</h3>
          <h6 className="text-center mb-6 opacity-90">
            For any questions regarding these Terms & Conditions, please
            contact:
          </h6>
          <div className="space-y-3 max-w-md mx-auto">
            <div className="flex text-gray-700 items-start gap-3 bg-white bg-opacity-10 rounded-lg p-3">
              <MapPin size={20} className="mt-1 flex-shrink-0" />
              <p>
                10/16 Basement, Block 10, Nehru Enclave East, Kalkaji, New Delhi
                – 110019
              </p>
            </div>
            <div className="flex text-gray-700 items-center gap-3 bg-white bg-opacity-10 rounded-lg p-3">
              <Phone size={20} className="flex-shrink-0" />
              <a href="tel:+919220385419" className="hover:underline">
                +91 9220385419
              </a>
            </div>
            <div className="flex text-gray-700 items-center gap-3 bg-white bg-opacity-10 rounded-lg p-3">
              <Mail size={20} className="flex-shrink-0" />
              <a
                href="mailto:advancedpainphysiotherapy@gmail.com"
                className="hover:underline break-all"
              >
                advancedpainphysiotherapy@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-sm text-gray-500 border-t pt-6">
          <h6>
            Please read these terms carefully. By continuing to use our
            services, you acknowledge that you have read, understood, and agree
            to be bound by these Terms & Conditions.
          </h6>
        </div>
      </div>
    </div>
  );
}
