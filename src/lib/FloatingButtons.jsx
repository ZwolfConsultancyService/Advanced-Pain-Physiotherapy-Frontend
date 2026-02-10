import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="hidden lg:flex fixed right-3 bottom-16 z-50 flex-col gap-3">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919220385419"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="
          w-12 h-12
          rounded-full
          bg-[#25D366]
          grid place-items-center
          shadow-xl
          hover:scale-110
          transition-transform duration-200
        "
      >
        <FaWhatsapp className="text-white text-[22px]" />
      </a>

      {/* Call */}
      <a
        href="tel:+919220385419"
        aria-label="Call"
        className="
          w-12 h-12
          rounded-full    
          bg-[#25D366]
          grid place-items-center
          shadow-xl
          hover:scale-110
          transition-transform duration-200
        "
      >
        <Phone size={22} className="text-white" />
      </a>

    </div>
  );
}
