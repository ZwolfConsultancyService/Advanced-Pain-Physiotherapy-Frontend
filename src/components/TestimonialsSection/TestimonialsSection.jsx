import React, { useState, useEffect } from "react";
import { ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dummyTestimonials = [
    {
      id: 1,
      name: "James Anderson",
      role: "Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      comment:
        "Amazing experience! The therapy helped me recover faster than expected.",
      rating: 5,
    },
    {
      id: 2,
      name: "Mario Deximersen",
      role: "Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
      comment: "Professional and caring team. Highly recommend their services.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Teacher",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      comment: "Best physiotherapy I have ever received. Thank you!",
      rating: 5,
    },
  ];

  const fetchTestimonials = async () => {
    setLoading(true);
    setTimeout(() => {
      setTestimonials(dummyTestimonials);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length <= 2) return;

    const timer = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.max(1, testimonials.length - 1)
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % Math.max(1, testimonials.length - 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, testimonials.length - 1)) %
        Math.max(1, testimonials.length - 1)
    );
  };

  return (
    <div className="bg-[#ebf7c6] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div className="flex-1"
           style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}>
            <div>
              <span className="text-[#8ab72e]">Testimonials</span>
            </div>
            <h2 className="text-2xl lg:text-4xl text-gray-900">
              Stories of Healing and Hope from
              <br />
              Our Patients
            </h2>
          </div>

         
        </div>

        {/* Slider */}
        <div className="relative"
         style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-md animate-pulse"
                >
                  <div className="h-4 bg-gray-200 rounded mb-3" />
                  <div className="h-3 bg-gray-200 rounded w-4/5" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
                  style={{
                    transform: `translateX(-${
                      currentIndex *
                      (typeof window !== "undefined" && window.innerWidth < 768
                        ? 100
                        : 50)
                    }%)`,
                  }}
                >
                  {testimonials.map((testimonial) => (
                    <div
                     style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
                      key={testimonial.id}
                      className="min-w-full md:min-w-[calc(50%-12px)] bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
                    >
                      <div className="flex justify-end mb-3">
                        <div className="w-10 h-10 bg-[#8ab72e] rounded-full flex items-center justify-center">
                          <Quote className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-2xl object-cover"
                        />
                        <div>
                          <h3 className="text-lg text-gray-900">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        {testimonial.comment}
                      </p>

                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center gap-3 md:gap-4 mt-8"
               style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}>
                <button
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-full bg-white shadow hover:bg-[#8ab72e] hover:text-white transition flex items-center justify-center"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-full bg-white shadow hover:bg-[#8ab72e] hover:text-white transition flex items-center justify-center"
                >
                  <ChevronRight />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.slice(0, -1).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-[#8ab72e]"
                        : "w-2 bg-gray-300"
                    }`}
                  />  
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
