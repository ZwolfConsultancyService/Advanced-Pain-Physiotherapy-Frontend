import React, { useState, useEffect } from "react";
import { X, Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

const API_BASE_URL =
  "https://advanced-pain-physiotherapy-centre.onrender.com/api";

export default function AppointmentPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const appointmentData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        preferredDate: formData.date,
        preferredTime: formData.time,
        message: formData.message,
      };

      const response = await fetch(`${API_BASE_URL}/appointment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to book appointment");
      }

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          message: "",
        });
        onClose();
      }, 3000);
    } catch (error) {
      setError(
        error.message || "Failed to book appointment. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Popup */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-block bg-gradient-to-r from-[#8ab72e] to-[#6d9624] text-white px-4 py-1 rounded-full text-sm mb-4">
              📅 Book Appointment
            </div>
            <h2 className="text-3xl  text-gray-900 mb-2">
              Schedule Your Visit
            </h2>
            <p className="text-gray-600">We'll confirm within 24 hours</p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl  text-green-800 mb-2">
                Appointment Booked!
              </h3>
              <p className="text-green-700">
                Thank you for booking. We'll confirm your appointment shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 ">Booking Failed</p>
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-gray-700  mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#8ab72e] focus:outline-none transition-colors"
                  placeholder="John Doe"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block text-gray-700  mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#8ab72e] focus:outline-none transition-colors"
                  placeholder="email@example.com"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block text-gray-700  mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#8ab72e] focus:outline-none transition-colors"
                  placeholder="+91 0000000000"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700  mb-2">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#8ab72e] focus:outline-none transition-colors"
                    required
                    disabled={isLoading}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div>
                  <label className="block text-gray-700  mb-2">Time *</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#8ab72e] focus:outline-none transition-colors"
                    required
                    disabled={isLoading}
                  >
                    <option value="">Select</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700  mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#8ab72e] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your condition..."
                  disabled={isLoading}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-xl transition-all duration-300 text-lg  flex items-center justify-center gap-2 shadow-xl ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#8ab72e] to-[#6d9624] hover:scale-105"
                } text-white`}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Booking...
                  </>
                ) : (
                  <>
                    Book Appointment
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Quick Contact */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm mb-3">
              Or contact us directly
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="tel:+919220385419"
                className="flex items-center gap-2 text-[#8ab72e] hover:text-[#6d9624] "
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">Call Now</span>
              </a>
              <a
                href="mailto:advancedpainphysiotherapy@gmail.com"
                className="flex items-center gap-2 text-[#8ab72e] hover:text-[#6d9624] "
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
