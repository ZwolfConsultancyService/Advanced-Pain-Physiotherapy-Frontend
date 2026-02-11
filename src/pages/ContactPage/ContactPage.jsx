import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  AlertCircle,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const API_BASE_URL =
  "https://advanced-pain-physiotherapy-centre.onrender.com/api";

export default function ContactPage() {
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

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Transform data to match backend schema
      const appointmentData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        preferredDate: formData.date, // ✅ Backend expects "preferredDate"
        preferredTime: formData.time, // ✅ Backend expects "preferredTime"
        message: formData.message,
      };

      console.log("📤 Sending appointment data:", appointmentData);

      const response = await fetch(`${API_BASE_URL}/appointment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      console.log("📡 Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to book appointment");
      }

      const result = await response.json();
      console.log("✅ Appointment booked:", result);

      setIsSubmitted(true);

      // Reset form after 5 seconds
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
      }, 5000);
    } catch (error) {
      console.error("❌ Error booking appointment:", error.message);
      setError(
        error.message || "Failed to book appointment. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div
        className="bg-gradient-to-r from-[#8ab72e] to-[#6d9624] text-white py-20 px-4"
        data-aos="fade-down"
      >
        <div
          className="max-w-7xl mx-auto text-center"
          style={{
            fontFamily: "'Zalando Sans Expanded', sans-serif",
            fontWeight: 200,
          }}
        >
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm mb-6">
            📞 Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
            We're here to help you on your journey to recovery. Reach out to us
            today!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="max-w-7xl mx-auto px-4 py-16"
        style={{
          fontFamily: "'Gantari', sans-serif",
          fontWeight: 400,
        }}
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-10"
            data-aos="fade-right"
          >
            <h2 className="text-3xl text-gray-900 mb-2">Book an Appointment</h2>
            <p className="text-gray-600 mb-8">
              Schedule your visit and we'll confirm within 24 hours
            </p>

            {isSubmitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl text-green-800 mb-2">
                  Appointment Booked!
                </h3>
                <p className="text-green-700">
                  Thank you for booking. We'll confirm your appointment shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
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
                  <label className="block text-gray-700 mb-2">
                    Full Name *
                  </label>
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
                  <label className="block text-gray-700 mb-2">
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
                  <label className="block text-gray-700 mb-2">
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Preferred Date *
                    </label>
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
                    <label className="block text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#8ab72e] focus:outline-none transition-colors"
                      required
                      disabled={isLoading}
                    >
                      <option value="">Select a time slot</option>
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
                  <label className="block text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#8ab72e] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your condition or any special requirements..."
                    disabled={isLoading}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 px-6 rounded-xl transition-all duration-300 text-lg flex items-center justify-center gap-2 shadow-xl ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#8ab72e] hover:bg-[#6d9624] hover:scale-105"
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
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#8ab72e] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600 mb-2">Call us directly</p>
                  <a
                    href="tel:+919220385419"
                    className="text-[#8ab72e] hover:text-[#6d9624]  text-lg"
                  >
                    +91 9220385419
                  </a>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#8ab72e] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 mb-2">Send us an email</p>
                  <a
                    href="mailto:advancedpainphysiotherapy@gmail.com"
                    className="text-[#8ab72e] hover:text-[#6d9624]  break-all"
                  >
                    advancedpainphysiotherapy@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#8ab72e] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600 mb-2">Visit our clinic</p>
                  <p className="text-gray-800">
                    10/16 Basement, Block 10
                    <br />
                    Nehru Enclave East
                    <br />
                    Kalkaji, Delhi 110019
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#8ab72e] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Working Hours</h3>
                  <p className="text-gray-600 mb-3">We're open</p>
                  <div className="space-y-2 text-gray-800">
                    <p className="flex justify-between">
                      <span>Monday - Saturday:</span>
                      <span>9:00 AM - 8:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="text-red-600">Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div
              className="bg-gradient-to-r from-[#8ab72e] to-[#6d9624] rounded-3xl shadow-xl p-8"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <h3 className="text-2xl  text-white mb-4">Follow Us</h3>
              <p className="text-emerald-50 mb-6">
                Stay connected on social media
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61584557627631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 hover:bg-white rounded-xl flex items-center justify-center transition-all hover:scale-110"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/advancedphysio19?igsh=c2hpdzkyN21zZ2U="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 hover:bg-white rounded-xl flex items-center justify-center transition-all hover:scale-110"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                {/* <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 hover:bg-white rounded-xl flex items-center justify-center transition-all hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        {/* <div className="mt-16" data-aos="fade-up">
          <div className="bg-white rounded-3xl shadow-2xl p-4 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5420266894!2d77.25!3d28.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMzJzAwLjAiTiA3N8KwMTUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "1.5rem" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </div>
        </div> */}
        <div className="mt-16" data-aos="fade-up">
  <div className="bg-white rounded-3xl shadow-2xl p-4 overflow-hidden">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3861.927430305523!2d77.2539144981114!3d28.546506924945895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAdvanced%20Pain%20Physiotherapy%20Centre%20%7C%20Best%20Physiotherapy%20Centre%20in%20South%20Delhi%20-%20Spine%20%2C%20Sports%20%26%20Chiropractor%20Treatment%2C%20Basement%2C%20Block%2010%2C%20Nehru%20Enclave%20East%2C%20Kalkaji%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1770793493896!5m2!1sen!2sin" 
      width="100%" 
      height="450" 
      style={{ border: 0, borderRadius: "1.5rem" }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Advanced Pain Physiotherapy Centre - Kalkaji, New Delhi"
    ></iframe>
  </div>
</div>

     
      </div>
    </div>
  );
}
