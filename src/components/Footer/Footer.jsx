import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Heart,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#8ab72e] via-[#7da127] to-[#6a9620]">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* About Section */}
            <div className="space-y-5">
              <div>
                <h3
                  className="text-2xl text-white mb-2 flex items-center gap-2"
                  style={{
                    fontFamily: "'Zalando Sans Expanded', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  Advanced Pain
                </h3>
                <p className="text-white tracking-wide text-sm">
                  PHYSIOTHERAPY CENTRE
                </p>
              </div>
              <p
                style={{
                  fontFamily: "'Gantari', sans-serif",
                  fontWeight: 400,
                }}
                className="text-white/90 leading-relaxed text-sm"
              >
                Expert physiotherapy care dedicated to helping you achieve
                optimal health and wellness through personalized treatment.
              </p>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                >
                  <Facebook
                    size={18}
                    className="text-white group-hover:text-[#8ab72e] transition-colors"
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                >
                  <Instagram
                    size={18}
                    className="text-white group-hover:text-[#8ab72e] transition-colors"
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                >
                  <Linkedin
                    size={18}
                    className="text-white group-hover:text-[#8ab72e] transition-colors"
                  />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
            >
              <h4 className="text-white text-lg mb-6 relative inline-block">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-white/60 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <a
                      href={link.path}
                      className="group flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300"
                    >
                      <ArrowRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                      />
                      <span className="group-hover:translate-x-1 transition-transform text-sm">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
            >
              <h4 className="text-white text-lg mb-6 relative inline-block">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-white/60 rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                <li className="group flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-all mt-0.5">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <span className="text-white/90 text-sm leading-relaxed pt-2">
                    10/16 Basement, Block 10, Nehru Enclave East, Kalkaji 110019
                  </span>
                </li>
                <li className="group flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-all">
                    <Phone size={18} className="text-white" />
                  </div>
                  <a
                    href="tel:+919220385419"
                    className="text-white/90 hover:text-white transition text-sm"
                  >
                    +91 9220385419
                  </a>
                </li>
                <li className="group flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-all">
                    <Mail size={18} className="text-white" />
                  </div>
                  <a
                    href="mailto:advancedpainphysiotherapy@gmail.com"
                    className="text-white/90 hover:text-white transition text-sm break-all"
                  >
                    advancedpainphysiotherapy@gmail.com
                  </a>
                </li>
                <li className="group flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-all mt-0.5">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div className="text-sm pt-2">
                    <p className="text-white/90">Mon - Sun: 9AM - 10PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-white/20"></div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/90"
            style={{
              fontFamily: "'Gantari', sans-serif",
              fontWeight: 400,
            }}
          >
            <p>© 2026 Advanced Pain Physiotherapy. All rights reserved.</p>
            <div className="flex flex-wrap gap-6 items-center">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-white/40">•</span>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        {/* Company Credit Section */}
        <div className="relative bg-black/10 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div
              className="flex flex-col md:flex-row justify-center items-center gap-2 text-sm"
              style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
            >
              <span className="flex items-center gap-2 text-white/80">
                Designed & Developed by
              </span>

              <a
                href="https://zwolfconsultancy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-[#EAF6FF] transition-colors duration-300"
              >
                Zwolf Consultancy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
