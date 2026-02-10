// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const HeroBanner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const slides = [
//     {
//       title: "AI Precision Recovery & Performance",
//       description:
//         "Clinically guided, AI-driven care for pain relief, functional recovery, and long-term everyday performance",
//       image:
//         "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80",
//     },
//     {
//       title: "Advanced Physiotherapy Solutions",
//       description:
//         "Expert care combining traditional methods with cutting-edge technology for optimal results",
//       image:
//         "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1920&q=80",
//     },
//     {
//       title: "Your Journey to Complete Wellness",
//       description:
//         "Personalized treatment plans designed to restore mobility and enhance your quality of life",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
//     },
//   ];

//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);

//   const minSwipeDistance = 50;

//   const onTouchStart = (e) => {
//     setTouchEnd(null);
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const onTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const onTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;

//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > minSwipeDistance;
//     const isRightSwipe = distance < -minSwipeDistance;

//     if (isLeftSwipe) {
//       nextSlide();
//     }
//     if (isRightSwipe) {
//       prevSlide();
//     }
//   };

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [isAutoPlaying, slides.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     setIsAutoPlaying(false);
//   };

//   return (
//     <div
//       className="relative w-full h-[450px] md:h-[520px] lg:h-[580px] overflow-hidden"
//       style={{ marginTop: 0, paddingTop: 0 }}
//       onTouchStart={onTouchStart}
//       onTouchMove={onTouchMove}
//       onTouchEnd={onTouchEnd}
//     >
//       {/* Slides Container */}
//       <div className="relative w-full h-full">
//         {slides.map((slide, index) => {
//           return (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//                 index === currentSlide
//                   ? "opacity-100 translate-x-0"
//                   : index < currentSlide
//                     ? "opacity-0 -translate-x-full"
//                     : "opacity-0 translate-x-full"
//               }`}
//             >
//               {/* Background Image with Overlay */}
//               <div className="absolute inset-0">
//                 <img
//                   src={slide.image}
//                   alt={slide.title}
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Dark overlay for better text readability */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
//               </div>

//               {/* Content - Centered */}
//               <div className="relative z-10 h-full flex items-center justify-center">
//                 <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
//                   <div className="max-w-4xl mx-auto text-center">
//                     {/* Title */}
//                     <h1
//                       className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 leading-tight"
//                       style={{
//                         fontFamily: "'Gantari', sans-serif",
//                         fontWeight: 700,
//                       }}
//                     >
//                       {slide.title}
//                     </h1>

//                     {/* Description */}
//                     <p
//                       className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4"
//                       style={{
//                         fontFamily: "'Gantari', sans-serif",
//                         fontWeight: 400,
//                       }}
//                     >
//                       {slide.description}
//                     </p>

//                     {/* Buttons */}
//                     <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6 px-4 sm:px-0">
//                       {/* Request Callback Button */}
//                       <a
//                         href="tel:+919220385419"
//                         className="group w-full sm:w-auto inline-flex items-center justify-center gap-2
//                px-5 sm:px-8 py-3.5 sm:py-4
//                bg-[#8ab72e] hover:bg-[#7aa625]
//                text-white rounded-full
//                transition-all duration-300
//                shadow-md hover:shadow-xl
//                active:scale-95 sm:hover:scale-105"
//                         style={{
//                           fontFamily: "'Gantari', sans-serif",
//                           fontWeight: 600,
//                         }}
//                       >
//                         <span className="text-sm sm:text-base">
//                           Request Callback
//                         </span>
//                         <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
//                       </a>

//                       {/* Book Appointment Button */}
//                       <Link
//                         to="/contact"
//                         className="group w-full sm:w-auto inline-flex items-center justify-center gap-2
//                px-5 sm:px-8 py-3.5 sm:py-4
//                bg-white hover:bg-gray-100
//                text-gray-900 rounded-full
//                transition-all duration-300
//                shadow-md hover:shadow-xl
//                active:scale-95 sm:hover:scale-105"
//                         style={{
//                           fontFamily: "'Gantari', sans-serif",
//                           fontWeight: 600,
//                         }}
//                       >
//                         <span className="text-sm sm:text-base">
//                           Book Appointment
//                         </span>
//                         <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Arrows - Light green transparent theme */}
//       <button
//         onClick={prevSlide}
//         className="hidden lg:block absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 bg-[#8ab72e]/20 backdrop-blur-sm text-white rounded-full hover:bg-[#8ab72e]/40 transition-all duration-300 z-20 shadow-lg"
//         style={{
//           boxShadow: "0 4px 15px rgba(138, 183, 46, 0.2)",
//         }}
//       >
//         <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="hidden lg:block absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 bg-[#8ab72e]/20 backdrop-blur-sm text-white rounded-full hover:bg-[#8ab72e]/40 transition-all duration-300 z-20 shadow-lg"
//         style={{
//           boxShadow: "0 4px 15px rgba(138, 183, 46, 0.2)",
//         }}
//       >
//         <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
//       </button>
//     </div>
//   );
// };

// export default HeroBanner;

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BannerVideoFile from "../../assets/Banner/BannerVideo.mp4";

const BannerVideo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "Best Physiotherapy Centre In Delhi-Ncr",
      description:
        "Dedicated to Complete Wellness with personalized care, advanced physiotherapy treatments, and lasting recovery results.",
      type: "video",
      videoSrc: BannerVideoFile, // Using imported video from assets
      posterImage:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80",
    },
  ];

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div
      className="relative w-full h-[450px] md:h-[520px] lg:h-[580px] overflow-hidden"
      style={{ marginTop: 0, paddingTop: 0 }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
              }`}
            >
              {/* Background Media (Video or Image) with Overlay */}
              <div className="absolute inset-0">
                {slide.type === "video" ? (
                  <video
                    key={index}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                  >
                    <source src={slide.videoSrc} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                )}
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              </div>

              {/* Content - Centered */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                  <div className="max-w-4xl mx-auto text-center">
                    {/* Title */}
                    <h1
  className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
    text-white leading-snug tracking-wide 
    mt-4 sm:mt-6 mb-4 sm:mb-6"
  style={{
    fontFamily: "'Anton', sans-serif",
    fontWeight: 400,
  }}
>
  Best Physiotherapy Centre{" "}
  <br className="hidden sm:block" />
  <span className="text-[#EAF6FF]">in Delhi-NCR</span>
</h1>


                    {/* Description */}
                   <p
  className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4"
  style={{
    fontFamily: "'Playwrite New Zealand Basic', sans-serif",
    fontWeight: 100,
  }}
>
  {slide.description}
</p>


                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6 px-4 sm:px-0">
                      {/* Request Callback Button */}
                      <a
                        href="tel:+919220385419"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2
      px-5 sm:px-8 py-3.5 sm:py-4
      bg-[#8ab72e] hover:bg-[#7aa625]
      text-white rounded-full
      transition-all duration-300
      shadow-md hover:shadow-xl
      active:scale-95 sm:hover:scale-105"
                        style={{
                          fontFamily: "'Gantari', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        <span className="text-sm sm:text-base">
                          Request Callback
                        </span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </a>

                      {/* Book Appointment Button */}
                      <Link
                        to="/contact"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2
      px-5 sm:px-8 py-3.5 sm:py-4
      bg-white hover:bg-gray-100
      text-gray-900 rounded-full
      transition-all duration-300
      shadow-md hover:shadow-xl
      active:scale-95 sm:hover:scale-105"
                        style={{
                          fontFamily: "'Gantari', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        <span className="text-sm sm:text-base">
                          Book Appointment
                        </span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerVideo;
