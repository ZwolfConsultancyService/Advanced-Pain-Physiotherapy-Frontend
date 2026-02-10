import React, { useState } from "react";
import { ArrowLeft, Check, Phone, Mail } from "lucide-react";

// Parth Medicare Services data with RED color theme
const parthServicesData = {
  "sports-injury-rehabilitation": {
    title: "Sports Injury Rehabilitation",
    category: "Sports Medicine",
    heroImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop",
    sideImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&h=800&fit=crop",
    about: {
      title: "About Sports Injury Rehabilitation",
      subtitle: "Sports Medicine",
      description:
        "Specialized rehabilitation program for athletes to recover from sports-related injuries and return to peak performance safely and effectively.",
      details: [
        "Sports injuries require specialized care and progressive rehabilitation protocols.",
        "Treatment includes sport-specific exercises, functional training, manual therapy, and performance enhancement techniques.",
        "Our programs are designed to not only heal injuries but also improve athletic performance and prevent future injuries.",
      ],
    },
    benefits: [
      "Faster recovery from sports injuries",
      "Improved athletic performance",
      "Enhanced strength and flexibility",
      "Injury prevention strategies",
      "Sport-specific conditioning",
      "Safe return to competition",
    ],
    treatment: {
      approach:
        "Progressive rehabilitation with sport-specific training and functional movement.",
      recovery: "Phased return-to-sport program with performance metrics.",
      prevention: "Injury prevention programs and performance optimization.",
    },
  },
  "athletic-performance-enhancement": {
    title: "Athletic Performance Enhancement",
    category: "Sports Performance",
    heroImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&h=600&fit=crop",
    sideImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop",
    about: {
      title: "About Performance Enhancement",
      subtitle: "Sports Performance",
      description:
        "Advanced training programs designed to maximize athletic potential through scientific methods and personalized coaching.",
      details: [
        "Performance enhancement focuses on improving speed, strength, power, and endurance.",
        "Programs include biomechanical analysis, movement optimization, and sport-specific training.",
        "Customized plans for different sports and competitive levels.",
      ],
    },
    benefits: [
      "Increased power and speed",
      "Enhanced endurance",
      "Better agility and coordination",
      "Improved reaction time",
      "Competitive edge",
      "Optimal performance",
    ],
    treatment: {
      approach:
        "Scientific training with biomechanical analysis and progressive overload.",
      recovery: "Periodized training with adequate recovery protocols.",
      prevention: "Movement screening and corrective exercises.",
    },
  },
  "running-injury-treatment": {
    title: "Running Injury Treatment",
    category: "Running Medicine",
    heroImage:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&h=600&fit=crop",
    sideImage:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=800&fit=crop",
    about: {
      title: "About Running Injury Treatment",
      subtitle: "Running Medicine",
      description:
        "Specialized treatment for runners dealing with overuse injuries, biomechanical issues, and performance limitations.",
      details: [
        "Common running injuries include runners knee, shin splints, plantar fasciitis, and IT band syndrome.",
        "Treatment includes gait analysis, biomechanical correction, strengthening, and gradual return to running.",
        "Focus on addressing root causes and preventing recurrence.",
      ],
    },
    benefits: [
      "Pain-free running",
      "Improved running form",
      "Enhanced endurance",
      "Injury prevention",
      "Faster recovery",
      "Performance improvement",
    ],
    treatment: {
      approach:
        "Gait analysis with corrective exercises and progressive running program.",
      recovery: "Gradual increase in running volume with monitoring.",
      prevention: "Running technique coaching and strength training.",
    },
  },
  "strength-&-conditioning": {
    title: "Strength & Conditioning",
    category: "Athletic Training",
    heroImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop",
    sideImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&h=800&fit=crop",
    about: {
      title: "About Strength & Conditioning",
      subtitle: "Athletic Training",
      description:
        "Comprehensive strength and conditioning programs designed to build power, speed, and endurance for athletic excellence.",
      details: [
        "Programs based on scientific principles of training and periodization.",
        "Includes Olympic lifts, plyometrics, speed training, and sport-specific exercises.",
        "Customized for individual athletes and team sports.",
      ],
    },
    benefits: [
      "Increased muscle strength",
      "Enhanced power output",
      "Improved speed and agility",
      "Better endurance",
      "Injury resilience",
      "Peak performance",
    ],
    treatment: {
      approach:
        "Periodized training with progressive resistance and power development.",
      recovery: "Structured recovery and deload phases.",
      prevention: "Movement quality and injury prevention focus.",
    },
  },
};

export default function ParthServiceDetailPage() {
  const [selectedService, setSelectedService] = useState(
    "sports-injury-rehabilitation",
  );
  const service = parthServicesData[selectedService];

  return (
    <div className="min-h-screen bg-white">
      {/* Service Selector */}
      <div className="bg-red-50 p-4">
        <div className="max-w-7xl mx-auto">
          <label className="block text-sm  text-gray-700 mb-2">
            Select Service to View:
          </label>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          >
            {Object.entries(parthServicesData).map(([key, svc]) => (
              <option key={key} value={key}>
                {svc.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Hero Section with Background Image - RED THEME */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.8), rgba(220, 38, 38, 0.8)), url(${service.heroImage})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-white hover:text-white/80 mb-6 transition-colors w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg">Back to Clinic</span>
          </button>

          {/* Title */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
              <Check className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                {service.title}
              </h1>
              <p className="text-xl text-white/90">{service.category}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: Image */}
          <div>
            <img
              src={service.sideImage}
              alt={service.about.title}
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl  text-gray-900 mb-2">
                  {service.about.title}
                </h2>
                <p className="text-red-600 text-lg">{service.about.subtitle}</p>
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {service.about.description}
            </p>

            <div className="space-y-4">
              {service.about.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits and Treatment Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Benefits Card */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl  text-gray-900">Benefits of Treatment</h3>
            </div>
            <ul className="space-y-3">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatment Approach Card */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl  text-gray-900">Treatment Approach</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className=" text-gray-900 mb-1">Treatment:</p>
                <p className="text-gray-700">{service.treatment.approach}</p>
              </div>
              <div>
                <p className=" text-gray-900 mb-1">Recovery:</p>
                <p className="text-gray-700">{service.treatment.recovery}</p>
              </div>
              <div>
                <p className=" text-gray-900 mb-1">Prevention:</p>
                <p className="text-gray-700">{service.treatment.prevention}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - RED THEME */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <Check className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-3xl md:text-4xl ">
              Get Expert Treatment Today
            </h3>
          </div>
          <p className="text-lg mb-6 text-white/90">
            Champions trust us, you can too! Contact{" "}
            <span className="">PARTH MEDICARE</span> for world-class{" "}
            {service.category.toLowerCase()} treatment in Delhi-NCR. Located at
            Nehru Enclave, Kalkaji, Delhi.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* Book Appointment → Contact Page */}
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-3 rounded-lg  hover:bg-gray-100 transition-all hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              Book Appointment
            </Link>

            {/* Call Now → Phone */}
            <a
              href="tel:9220385419"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-3 rounded-lg  hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call: 9220385419
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl mb-4 text-red-500">PARTH MEDICARE</h3>
              <p className="text-gray-400">Champions Trust Us, You Can Too</p>
            </div>
            <div>
              <h4 className="text-lg mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 8076206304</li>
                <li>📧 contact@parthmedicare.com</li>
                <li>🕒 7am To 9pm</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg mb-4">Location</h4>
              <p className="text-gray-400">
                10/16, Block 10
                <br />
                Nehru Enclave East
                <br />
                Kalkaji, Delhi 110019
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PARTH MEDICARE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
