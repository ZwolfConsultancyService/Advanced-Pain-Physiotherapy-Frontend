import React, { useState, useEffect, useRef, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // ─── Responsive: track mobile/desktop ───────────────────────────────────────
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ─── Max index: on mobile show 1 card at a time, desktop show 2 ─────────────
  const visibleCount = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  // ─── API fetch ───────────────────────────────────────────────────────────────
  const fetchTestimonials = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/google-reviews`
      );

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json();

      const reviews = Array.isArray(data.reviews) ? data.reviews : [];

      if (reviews.length === 0) {
        setError("Abhi koi review available nahi hai.");
        setTestimonials([]);
        return;
      }

      const formatted = reviews.map((item, index) => ({
        id: index,
        name: item.author_name || "Anonymous",
        role: "Patient",
        image: item.profile_photo_url || "",
        comment: item.text || "",
        rating: typeof item.rating === "number" ? item.rating : 5,
      }));

      setTestimonials(formatted);
      setCurrentIndex(0);
    } catch (err) {
      console.error("Error fetching reviews:", err);
      setError("Reviews load nahi ho sake. Please baad mein try karein.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  // ─── Auto-slide ──────────────────────────────────────────────────────────────
  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (maxIndex <= 0) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
  }, [maxIndex]);

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [startInterval]);

  // ─── Navigation ─────────────────────────────────────────────────────────────
  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
    startInterval(); // reset timer on manual nav
  };

  const nextSlide = () => goTo(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  const prevSlide = () => goTo(currentIndex <= 0 ? maxIndex : currentIndex - 1);

  // ─── Slide width % per card ──────────────────────────────────────────────────
  // We use percentage-based translation instead of window.innerWidth
  const slidePercent = 100 / visibleCount;

  return (
    <div className="bg-[#ebf7c6] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6"
          style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
        >
          <div className="flex-1">
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

        {/* Body */}
        <div
          className="relative"
          style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
        >
          {/* Loading skeleton */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md animate-pulse">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-2xl" />
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded mb-2 w-3/4" />
                      <div className="h-3 bg-gray-200 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-4/5" />
                </div>
              ))}
            </div>
          )}

          {/* Error state */}
          {!loading && error && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">{error}</p>
              <button
                onClick={fetchTestimonials}
                className="px-6 py-2 bg-[#8ab72e] text-white rounded-full hover:bg-[#7aa526] transition"
              >
                Dobara Try Karein
              </button>
            </div>
          )}

          {/* Slider */}
          {!loading && !error && testimonials.length > 0 && (
            <>
              <div className="overflow-hidden" ref={containerRef}>
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    // Each card takes slidePercent% of container width
                    // We shift left by currentIndex * slidePercent%
                    transform: `translateX(-${currentIndex * slidePercent}%)`,
                    gap: 0, // gap handled via padding inside cards
                  }}
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      style={{
                        minWidth: `${slidePercent}%`,
                        fontFamily: "'Gantari', sans-serif",
                        fontWeight: 400,
                      }}
                      className="px-3"
                    >
                      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition h-full">
                        {/* Quote icon */}
                        <div className="flex justify-end mb-3">
                          <div className="w-10 h-10 bg-[#8ab72e] rounded-full flex items-center justify-center">
                            <Quote className="w-5 h-5 text-white" />
                          </div>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-4 mb-4">
                          {testimonial.image ? (
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-2xl object-cover flex-shrink-0"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  "https://ui-avatars.com/api/?name=" +
                                  encodeURIComponent(testimonial.name) +
                                  "&background=8ab72e&color=fff&size=64";
                              }}
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-2xl bg-[#8ab72e] flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                              {testimonial.name.charAt(0).toUpperCase()}
                            </div>
                          )}
                          <div>
                            <h3 className="text-lg text-gray-900">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>

                        {/* Comment */}
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          {testimonial.comment}
                        </p>

                        {/* Stars */}
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${
                                i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prev / Next buttons — only show if more than visibleCount cards */}
              {testimonials.length > visibleCount && (
                <>
                  <div className="flex justify-center gap-3 md:gap-4 mt-8">
                    <button
                      onClick={prevSlide}
                      className="w-11 h-11 rounded-full bg-white shadow hover:bg-[#8ab72e] hover:text-white transition flex items-center justify-center"
                      aria-label="Previous"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-11 h-11 rounded-full bg-white shadow hover:bg-[#8ab72e] hover:text-white transition flex items-center justify-center"
                      aria-label="Next"
                    >
                      <ChevronRight />
                    </button>
                  </div>

                  {/* Dots — one dot per valid index position */}
                  <div className="flex justify-center gap-2 mt-4">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-2 rounded-full transition-all ${
                          index === currentIndex ? "w-8 bg-[#8ab72e]" : "w-2 bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}