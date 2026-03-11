import React, { useState } from "react";

const feesData = [
  { service: "Home Care Physiotherapy", price: "₹1000 – ₹1200" },
  { service: "Chiropractor Treatment", price: "₹1200" },
  { service: "Sports Massage Therapy", price:  "₹1800" },
  { service: "Tele-physiotherapy", price: "₹500" },
  { service: "Physical Therapy", price: "₹800" },
  { service: "Advanced Physiotherapy", price: "₹1200" },
  { service: "Sports Physiotherapy", price: "₹2000" },
  { service: "Traditional Physiotherapy", price: "₹800" },
  { service: "comprehensive Treatment", price: "₹1500" },
];

const PhysiotherapyFeesSection = ({ cityName = "" }) => {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <section
      className="py-12 px-4"
      style={{
        background: "#f7faf2",
        fontFamily: "'Gantari', sans-serif",
      }}
    >
      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-7">
          <h2
            className="text-2xl md:text-3xl text-[#1a3d1f] mb-2"
            style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 700 }}
          >
            Physiotherapy Fees / Charges
            {cityName && <span className="text-[#8ab72e]"> in {cityName}</span>}
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Transparent pricing at all Advanced Pain Physiotherapy Centre clinics.
          </p>
        </div>

        {/* Table */}
        <div
          className="bg-white rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 4px 24px rgba(138,183,46,0.10), 0 1px 6px rgba(0,0,0,0.05)" }}
        >
          {/* Header */}
          <div className="grid grid-cols-2 px-6 py-3 bg-[#f0f7e6] border-b border-gray-100">
            <span className="text-[#1a3d1f] text-sm font-semibold">Service / Treatment</span>
            <span className="text-[#1a3d1f] text-sm font-semibold text-right">Price</span>
          </div>

          {/* Rows */}
          {feesData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 px-6 py-3 border-b border-gray-50 transition-all duration-150 cursor-default"
              style={{
                background: hoveredRow === index ? "#f7faf2" : "transparent",
                borderLeft: hoveredRow === index ? "3px solid #8ab72e" : "3px solid transparent",
              }}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <span className="text-gray-700 text-sm">{item.service}</span>
              <span
                className="text-sm text-right font-semibold transition-colors duration-150"
                style={{ color: hoveredRow === index ? "#8ab72e" : "#1a3d1f" }}
              >
                {item.price}
              </span>
            </div>
          ))}

          <div className="py-2" />
        </div>

        {/* Note */}
        <p className="text-center text-gray-400 text-xs mt-5">
          * 10% discount on packages &nbsp;·&nbsp; Extended sessions may be charged higher
        </p>
      </div>
    </section>
  );
};

export default PhysiotherapyFeesSection;