// // import React, { useState, useEffect } from 'react';
// // import { CheckCircle, ArrowRight, ChevronLeft, ChevronRight, Zap, Activity, Heart, Wind } from 'lucide-react';

// // export default function TherapyExpertiseSection() {
// //   const [therapies, setTherapies] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [cardsToShow, setCardsToShow] = useState(3);

// //   const therapyData = [
// //     {
// //       id: 1,
// //       title: "Ultrasound Therapy",
// //       description: "Deep tissue healing using high-frequency sound waves to reduce inflammation, promote blood flow and accelerate recovery",
// //       image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop",
// //       features: ["Pain reduction", "Tissue healing"],
// //       icon: <Activity className="w-6 h-6" />
// //     },
// //     {
// //       id: 2,
// //       title: "Interferential Therapy",
// //       description: "Advanced electrotherapy technique using medium-frequency currents to relieve pain and stimulate muscle healing",
// //       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
// //       features: ["Deep pain relief", "Muscle stimulation"],
// //       icon: <Zap className="w-6 h-6" />
// //     },
// //     {
// //       id: 3,
// //       title: "TENS Therapy",
// //       description: "Transcutaneous Electrical Nerve Stimulation delivers gentle electrical pulses to block pain signals effectively",
// //       image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
// //       features: ["Non-invasive pain relief", "Drug-free treatment"],
// //       icon: <Zap className="w-6 h-6" />
// //     },
// //     {
// //       id: 4,
// //       title: "Laser Therapy",
// //       description: "Low-level laser treatment promotes cellular regeneration, reduces inflammation and accelerates tissue repair",
// //       image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&h=400&fit=crop",
// //       features: ["Fast recovery", "Cellular healing"],
// //       icon: <Activity className="w-6 h-6" />
// //     },
// //     {
// //       id: 5,
// //       title: "Manual Therapy",
// //       description: "Hands-on techniques including joint mobilization and soft tissue manipulation for optimal movement restoration",
// //       image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
// //       features: ["Joint mobility", "Muscle relaxation"],
// //       icon: <Heart className="w-6 h-6" />
// //     },
// //     {
// //       id: 6,
// //       title: "Thermotherapy",
// //       description: "Therapeutic heat application to increase blood circulation, relax muscles and reduce stiffness and pain",
// //       image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
// //       features: ["Muscle relaxation", "Improved circulation"],
// //       icon: <Wind className="w-6 h-6" />
// //     },
// //     {
// //       id: 7,
// //       title: "Wax Therapy",
// //       description: "Warm paraffin wax treatment for arthritis, joint stiffness and chronic pain with deep heat penetration",
// //       image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=400&fit=crop",
// //       features: ["Joint relief", "Skin conditioning"],
// //       icon: <Wind className="w-6 h-6" />
// //     },
// //     {
// //       id: 8,
// //       title: "Dry Needling Therapy",
// //       description: "Precise needle insertion into trigger points to release muscle tension, improve mobility and reduce pain",
// //       image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop",
// //       features: ["Trigger point release", "Mobility improvement"],
// //       icon: <Activity className="w-6 h-6" />
// //     },
// //     {
// //       id: 9,
// //       title: "Spinal Decompression",
// //       description: "Gentle traction therapy to relieve pressure on spinal discs, nerves and reduce back and neck pain",
// //       image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
// //       features: ["Disc decompression", "Nerve relief"],
// //       icon: <Activity className="w-6 h-6" />
// //     },
// //     {
// //       id: 10,
// //       title: "Chiropractic Therapy",
// //       description: "Spinal adjustment and manipulation techniques to restore proper alignment and nervous system function",
// //       image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
// //       features: ["Spinal alignment", "Posture correction"],
// //       icon: <Activity className="w-6 h-6" />
// //     },
// //     {
// //       id: 11,
// //       title: "Kinesio Taping",
// //       description: "Strategic elastic tape application to support muscles, reduce pain, improve circulation and enhance performance",
// //       image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
// //       features: ["Muscle support", "Performance enhancement"],
// //       icon: <Heart className="w-6 h-6" />
// //     },
// //     {
// //       id: 12,
// //       title: "Cupping Therapy",
// //       description: "Traditional suction cup therapy to release muscle tension, improve blood flow and promote natural healing",
// //       image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
// //       features: ["Muscle release", "Blood circulation"],
// //       icon: <Wind className="w-6 h-6" />
// //     },
// //     {
// //       id: 13,
// //       title: "Acupuncture",
// //       description: "Ancient Chinese medicine using fine needles to stimulate specific points, balance energy and relieve pain",
// //       image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=400&fit=crop",
// //       features: ["Energy balance", "Holistic healing"],
// //       icon: <Activity className="w-6 h-6" />
// //     },
// //     {
// //       id: 14,
// //       title: "Myofascial Release",
// //       description: "Specialized massage technique targeting fascia to release restrictions, improve mobility and reduce chronic pain",
// //       image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=400&fit=crop",
// //       features: ["Fascia release", "Chronic pain relief"],
// //       icon: <Heart className="w-6 h-6" />
// //     },
// //     {
// //       id: 15,
// //       title: "Soft Tissue Mobilisation",
// //       description: "Manual therapy techniques to break down scar tissue, improve flexibility and restore normal tissue function",
// //       image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
// //       features: ["Scar tissue breakdown", "Flexibility improvement"],
// //       icon: <Heart className="w-6 h-6" />
// //     },
// //     {
// //       id: 16,
// //       title: "Traction Therapy",
// //       description: "Mechanical or manual stretching to decompress joints, relieve pressure and reduce pain in spine and limbs",
// //       image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
// //       features: ["Joint decompression", "Pain reduction"],
// //       icon: <Activity className="w-6 h-6" />
// //     },
// //     {
// //       id: 17,
// //       title: "Pelvic Floor Therapy",
// //       description: "Specialized physiotherapy for pelvic floor dysfunction, incontinence and post-pregnancy rehabilitation",
// //       image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
// //       features: ["Pelvic strength", "Post-pregnancy care"],
// //       icon: <Heart className="w-6 h-6" />
// //     },
// //     {
// //       id: 18,
// //       title: "Chest Physiotherapy",
// //       description: "Respiratory therapy techniques to clear airways, improve breathing and enhance lung function effectively",
// //       image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop",
// //       features: ["Airway clearance", "Breathing improvement"],
// //       icon: <Wind className="w-6 h-6" />
// //     },
// //     {
// //       id: 19,
// //       title: "Shockwave Therapy",
// //       description: "High-energy acoustic waves to stimulate healing in chronic tendon and soft tissue injuries naturally",
// //       image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
// //       features: ["Tendon healing", "Chronic pain relief"],
// //       icon: <Zap className="w-6 h-6" />
// //     },
// //     {
// //       id: 20,
// //       title: "Shortwave Therapy",
// //       description: "Electromagnetic energy therapy penetrating deep into tissues to reduce inflammation and promote healing",
// //       image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&h=400&fit=crop",
// //       features: ["Deep tissue heating", "Inflammation reduction"],
// //       icon: <Activity className="w-6 h-6" />
// //     },
// //     {
// //       id: 21,
// //       title: "Lymphatic Drainage Massage",
// //       description: "Gentle massage technique to stimulate lymph flow, reduce swelling and enhance immune system function",
// //       image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
// //       features: ["Swelling reduction", "Immune support"],
// //       icon: <Wind className="w-6 h-6" />
// //     }
// //   ];

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth < 640) {
// //         setCardsToShow(1);
// //       } else if (window.innerWidth < 1024) {
// //         setCardsToShow(2);
// //       } else {
// //         setCardsToShow(3);
// //       }
// //     };
// //     handleResize();
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   useEffect(() => {
// //     setLoading(true);
// //     setTimeout(() => {
// //       setTherapies(therapyData);
// //       setLoading(false);
// //     }, 500);
// //   }, []);

// //   useEffect(() => {
// //     if (therapies.length === 0) return;

// //     const interval = setInterval(() => {
// //       setCurrentIndex((prev) => {
// //         const maxIndex = therapies.length - cardsToShow;
// //         if (prev >= maxIndex) {
// //           return 0;
// //         }
// //         return prev + 1;
// //       });
// //     }, 3000);

// //     return () => clearInterval(interval);
// //   }, [therapies.length, cardsToShow]);

// //   const goToPrevious = () => {
// //     setCurrentIndex((prev) => Math.max(0, prev - 1));
// //   };

// //   const goToNext = () => {
// //     setCurrentIndex((prev) => Math.min(therapies.length - cardsToShow, prev + 1));
// //   };

// //   const canGoPrevious = currentIndex > 0;
// //   const canGoNext = currentIndex < therapies.length - cardsToShow;

// //   if (loading) {
// //     return (
// //       <div className="w-full min-h-screen bg-gradient-to-br  flex items-center justify-center p-4">
// //         <div className="text-center">
// //           <div className="inline-block animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-[#8ab72e] border-t-transparent"></div>
// //           <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg">Loading therapies...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
// //       {/* Hero Section - Fully Responsive */}
// //       <div className="bg-gradient-to-r from-[#8ab72e] to-[#6d9624] text-white py-12 sm:py-16 md:py-20 px-4">
// //         <div className="max-w-7xl mx-auto text-center">
// //           <div className="inline-block bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm  mb-4 sm:mb-6">
// //             ✨ Advanced Treatment Solutions
// //           </div>
// //           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-4 sm:mb-6">
// //             Therapy Expertise
// //           </h1>
// //           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-50 max-w-3xl mx-auto leading-relaxed px-4">
// //             Comprehensive range of specialized therapies tailored to your recovery needs and wellness goals
// //           </p>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
// //         {/* Stats Section - Responsive Grid */}
// //         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
// //           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
// //             <div className="text-2xl sm:text-3xl md:text-4xl  text-[#8ab72e] mb-1 sm:mb-2">21+</div>
// //             <div className="text-gray-600 text-xs sm:text-sm md:text-base">Therapies</div>
// //           </div>
// //           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
// //             <div className="text-2xl sm:text-3xl md:text-4xl  text-[#8ab72e] mb-1 sm:mb-2">1000+</div>
// //             <div className="text-gray-600 text-xs sm:text-sm md:text-base">Patients Treated</div>
// //           </div>
// //           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
// //             <div className="text-2xl sm:text-3xl md:text-4xl  text-[#8ab72e] mb-1 sm:mb-2">15+</div>
// //             <div className="text-gray-600 text-xs sm:text-sm md:text-base">Years Experience</div>
// //           </div>
// //           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
// //             <div className="text-2xl sm:text-3xl md:text-4xl text-[#8ab72e] mb-1 sm:mb-2">98%</div>
// //             <div className="text-gray-600 text-xs sm:text-sm md:text-base">Success Rate</div>
// //           </div>
// //         </div>

// //         {/* Section Header - Responsive Typography */}
// //         <div className="text-center mb-8 sm:mb-10 md:mb-12">
// //           <div className="inline-block bg-[#e8f1d7] text-[#8ab72e] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm  mb-4 sm:mb-6">
// //             Our Expertise
// //           </div>
// //           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-gray-800 mb-3 sm:mb-4 md:mb-6 px-4">
// //             Advanced <span className="text-[#8ab72e]">Therapy Solutions</span>
// //           </h2>
// //           <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
// //             Evidence-based treatment modalities combining traditional techniques with modern technology for optimal healing outcomes
// //           </p>
// //         </div>

// //         {/* Slider Section - Fully Responsive */}
// //         <div className="relative px-2 sm:px-4 md:px-8 lg:px-12">
// //           {/* Previous Button - Responsive */}
// //           <button
// //             onClick={goToPrevious}
// //             disabled={!canGoPrevious}
// //             className={`absolute left-0 sm:left-2 md:left-4 lg:left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 ${
// //               canGoPrevious
// //                 ? 'text-[#8ab72e] hover:bg-[#8ab72e] hover:text-white hover:scale-110'
// //                 : 'text-gray-300 cursor-not-allowed'
// //             }`}
// //           >
// //             <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
// //           </button>

// //           {/* Cards Container */}
// //           <div className="overflow-hidden">
// //             <div
// //               className="flex transition-transform duration-500 ease-out"
// //               style={{
// //                 transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
// //               }}
// //             >
// //               {therapies.map((therapy) => (
// //                 <div
// //                   key={therapy.id}
// //                   className="px-2 sm:px-3 md:px-4"
// //                   style={{ minWidth: `${100 / cardsToShow}%` }}
// //                 >
// //                   <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
// //                     <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
// //                       <img
// //                         src={therapy.image}
// //                         alt={therapy.title}
// //                         className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
// //                       />
// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
// //                       <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg">
// //                         <div className="text-[#8ab72e]">
// //                           {React.cloneElement(therapy.icon, { className: 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' })}
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <div className="p-4 sm:p-5 md:p-6">
// //                       <h3 className="text-lg sm:text-xl md:text-2xl  text-gray-800 mb-2 sm:mb-3">
// //                         {therapy.title}
// //                       </h3>
// //                       <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
// //                         {therapy.description}
// //                       </p>

// //                       <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 md:mb-6">
// //                         {therapy.features.map((feature, index) => (
// //                           <div key={index} className="flex items-center gap-2 sm:gap-3">
// //                             <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-[#e5f2cc] rounded-full flex items-center justify-center">
// //                               <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#8ab72e]" />
// //                             </div>
// //                             <span className="text-gray-700 text-xs sm:text-sm md:text-base ">{feature}</span>
// //                           </div>
// //                         ))}
// //                       </div>

// //                       <button className="w-full bg-[#8ab72e] text-white py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-5 md:px-6 rounded-lg sm:rounded-xl hover:bg-[#6d9624] transition-all duration-300  flex items-center justify-center gap-2 group shadow-lg text-xs sm:text-sm md:text-base">
// //                         Learn More
// //                         <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Next Button - Responsive */}
// //           <button
// //             onClick={goToNext}
// //             disabled={!canGoNext}
// //             className={`absolute right-0 sm:right-2 md:right-4 lg:right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 ${
// //               canGoNext
// //                 ? 'text-[#8ab72e] hover:bg-[#8ab72e] hover:text-white hover:scale-110'
// //                 : 'text-gray-300 cursor-not-allowed'
// //             }`}
// //           >
// //             <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
// //           </button>
// //         </div>

// //         {/* Dots Navigation - Responsive */}
// //         <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
// //           {Array.from({ length: Math.ceil(therapies.length / cardsToShow) }).map((_, index) => (
// //             <button
// //               key={index}
// //               onClick={() => setCurrentIndex(index * cardsToShow)}
// //               className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
// //                 Math.floor(currentIndex / cardsToShow) === index
// //                   ? 'w-8 sm:w-10 bg-[#8ab72e]'
// //                   : 'w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400'
// //               }`}
// //             />
// //           ))}
// //         </div>

// //         {/* CTA Section - Fully Responsive */}
// //         <div className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-[#8ab72e] to-[#6d9624] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center text-white shadow-2xl">
// //           <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  mb-3 sm:mb-4 px-4">
// //             Ready to Start Your Recovery Journey?
// //           </h3>
// //           <p className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-50 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
// //             Book a consultation with our expert physiotherapists and experience personalized care
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
// //             <button className="bg-white text-[#8ab72e] px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-emerald-50 transition-all duration-300  inline-flex items-center justify-center gap-2 shadow-xl hover:scale-105 text-sm sm:text-base">
// //               Book Appointment
// //               <ArrowRight className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// //             </button>
// //             <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white hover:text-[#8ab72e] transition-all duration-300  hover:scale-105 text-sm sm:text-base">
// //               Contact Us
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import {
//   CheckCircle,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   Zap,
//   Activity,
//   Heart,
//   Wind,
//   MapPin,
// } from "lucide-react";

// export default function TherapyExpertiseSection({ cityName }) {
//   const [therapies, setTherapies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsToShow, setCardsToShow] = useState(3);

//   const therapyData = [
//     {
//       id: 1,
//       title: "Ultrasound Therapy",
//       description:
//         "Deep tissue healing using high-frequency sound waves to reduce inflammation, promote blood flow and accelerate recovery",
//       image:
//         "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop",
//       features: ["Pain reduction", "Tissue healing"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 2,
//       title: "Interferential Therapy",
//       description:
//         "Advanced electrotherapy technique using medium-frequency currents to relieve pain and stimulate muscle healing",
//       image:
//         "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
//       features: ["Deep pain relief", "Muscle stimulation"],
//       icon: <Zap className="w-6 h-6" />,
//     },
//     {
//       id: 3,
//       title: "TENS Therapy",
//       description:
//         "Transcutaneous Electrical Nerve Stimulation delivers gentle electrical pulses to block pain signals effectively",
//       image:
//         "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
//       features: ["Non-invasive pain relief", "Drug-free treatment"],
//       icon: <Zap className="w-6 h-6" />,
//     },
//     {
//       id: 4,
//       title: "Laser Therapy",
//       description:
//         "Low-level laser treatment promotes cellular regeneration, reduces inflammation and accelerates tissue repair",
//       image:
//         "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&h=400&fit=crop",
//       features: ["Fast recovery", "Cellular healing"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 5,
//       title: "Manual Therapy",
//       description:
//         "Hands-on techniques including joint mobilization and soft tissue manipulation for optimal movement restoration",
//       image:
//         "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
//       features: ["Joint mobility", "Muscle relaxation"],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 6,
//       title: "Thermotherapy",
//       description:
//         "Therapeutic heat application to increase blood circulation, relax muscles and reduce stiffness and pain",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
//       features: ["Muscle relaxation", "Improved circulation"],
//       icon: <Wind className="w-6 h-6" />,
//     },
//     {
//       id: 7,
//       title: "Wax Therapy",
//       description:
//         "Warm paraffin wax treatment for arthritis, joint stiffness and chronic pain with deep heat penetration",
//       image:
//         "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=400&fit=crop",
//       features: ["Joint relief", "Skin conditioning"],
//       icon: <Wind className="w-6 h-6" />,
//     },
//     {
//       id: 8,
//       title: "Dry Needling Therapy",
//       description:
//         "Precise needle insertion into trigger points to release muscle tension, improve mobility and reduce pain",
//       image:
//         "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop",
//       features: ["Trigger point release", "Mobility improvement"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 9,
//       title: "Spinal Decompression",
//       description:
//         "Gentle traction therapy to relieve pressure on spinal discs, nerves and reduce back and neck pain",
//       image:
//         "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
//       features: ["Disc decompression", "Nerve relief"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 10,
//       title: "Chiropractic Therapy",
//       description:
//         "Spinal adjustment and manipulation techniques to restore proper alignment and nervous system function",
//       image:
//         "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
//       features: ["Spinal alignment", "Posture correction"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 11,
//       title: "Kinesio Taping",
//       description:
//         "Strategic elastic tape application to support muscles, reduce pain, improve circulation and enhance performance",
//       image:
//         "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
//       features: ["Muscle support", "Performance enhancement"],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 12,
//       title: "Cupping Therapy",
//       description:
//         "Traditional suction cup therapy to release muscle tension, improve blood flow and promote natural healing",
//       image:
//         "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
//       features: ["Muscle release", "Blood circulation"],
//       icon: <Wind className="w-6 h-6" />,
//     },
//     {
//       id: 13,
//       title: "Acupuncture",
//       description:
//         "Ancient Chinese medicine using fine needles to stimulate specific points, balance energy and relieve pain",
//       image:
//         "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=400&fit=crop",
//       features: ["Energy balance", "Holistic healing"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 14,
//       title: "Myofascial Release",
//       description:
//         "Specialized massage technique targeting fascia to release restrictions, improve mobility and reduce chronic pain",
//       image:
//         "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=400&fit=crop",
//       features: ["Fascia release", "Chronic pain relief"],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 15,
//       title: "Soft Tissue Mobilisation",
//       description:
//         "Manual therapy techniques to break down scar tissue, improve flexibility and restore normal tissue function",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
//       features: ["Scar tissue breakdown", "Flexibility improvement"],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 16,
//       title: "Traction Therapy",
//       description:
//         "Mechanical or manual stretching to decompress joints, relieve pressure and reduce pain in spine and limbs",
//       image:
//         "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
//       features: ["Joint decompression", "Pain reduction"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 17,
//       title: "Pelvic Floor Therapy",
//       description:
//         "Specialized physiotherapy for pelvic floor dysfunction, incontinence and post-pregnancy rehabilitation",
//       image:
//         "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
//       features: ["Pelvic strength", "Post-pregnancy care"],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 18,
//       title: "Chest Physiotherapy",
//       description:
//         "Respiratory therapy techniques to clear airways, improve breathing and enhance lung function effectively",
//       image:
//         "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop",
//       features: ["Airway clearance", "Breathing improvement"],
//       icon: <Wind className="w-6 h-6" />,
//     },
//     {
//       id: 19,
//       title: "Shockwave Therapy",
//       description:
//         "High-energy acoustic waves to stimulate healing in chronic tendon and soft tissue injuries naturally",
//       image:
//         "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
//       features: ["Tendon healing", "Chronic pain relief"],
//       icon: <Zap className="w-6 h-6" />,
//     },
//     {
//       id: 20,
//       title: "Shortwave Therapy",
//       description:
//         "Electromagnetic energy therapy penetrating deep into tissues to reduce inflammation and promote healing",
//       image:
//         "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&h=400&fit=crop",
//       features: ["Deep tissue heating", "Inflammation reduction"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 21,
//       title: "Lymphatic Drainage Massage",
//       description:
//         "Gentle massage technique to stimulate lymph flow, reduce swelling and enhance immune system function",
//       image:
//         "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
//       features: ["Swelling reduction", "Immune support"],
//       icon: <Wind className="w-6 h-6" />,
//     },
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setCardsToShow(1);
//       } else if (window.innerWidth < 1024) {
//         setCardsToShow(2);
//       } else {
//         setCardsToShow(3);
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setTherapies(therapyData);
//       setLoading(false);
//     }, 500);
//   }, []);

//   useEffect(() => {
//     if (therapies.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => {
//         const maxIndex = therapies.length - cardsToShow;
//         if (prev >= maxIndex) {
//           return 0;
//         }
//         return prev + 1;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [therapies.length, cardsToShow]);

//   const goToPrevious = () => {
//     setCurrentIndex((prev) => Math.max(0, prev - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prev) =>
//       Math.min(therapies.length - cardsToShow, prev + 1)
//     );
//   };

//   const canGoPrevious = currentIndex > 0;
//   const canGoNext = currentIndex < therapies.length - cardsToShow;

//   if (loading) {
//     return (
//       <div className="w-full min-h-screen bg-gradient-to-br  flex items-center justify-center p-4">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-[#8ab72e] border-t-transparent"></div>
//           <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg">
//             Loading therapies...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
//       {/* Hero Section - Only show when cityName exists */}
//       {cityName && (
//         <div className="bg-gradient-to-r from-[#8ab72e] to-[#6d9624] text-white py-12 sm:py-16 md:py-20 px-4">
//           <div className="max-w-7xl mx-auto text-center">
//             <div   style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }} className="inline-block bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
//               ✨ Advanced Treatment Solutions
//             </div>
//             <h1   style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
//               Therapy Expertise in {cityName}
//             </h1>
//             <div className="flex items-center justify-center gap-2 text-white/90 mb-4">
//               <MapPin className="w-5 h-5" />
//               <p className="text-lg">Available at our {cityName} clinic</p>
//             </div>
//             <p style={{
//             fontFamily: "'Gantari', sans-serif",
//             fontWeight: 400,
//           }} className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-50 max-w-3xl mx-auto leading-relaxed px-4">
//               Comprehensive range of specialized therapies in {cityName}{" "}
//               tailored to your recovery needs
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16"
//       style={{
//             fontFamily: "'Gantari', sans-serif",
//             fontWeight: 400,
//           }}>
//         {/* Stats Section */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
//           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
//             <div className="text-2xl sm:text-3xl md:text-4xl text-[#8ab72e] mb-1 sm:mb-2">
//               21+
//             </div>
//             <div className="text-gray-600 text-xs sm:text-sm md:text-base">
//               Therapies
//             </div>
//           </div>
//           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
//             <div className="text-2xl sm:text-3xl md:text-4xl text-[#8ab72e] mb-1 sm:mb-2">
//               1000+
//             </div>
//             <div className="text-gray-600 text-xs sm:text-sm md:text-base">
//               Patients Treated
//             </div>
//           </div>
//           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
//             <div className="text-2xl sm:text-3xl md:text-4xl text-[#8ab72e] mb-1 sm:mb-2">
//               15+
//             </div>
//             <div className="text-gray-600 text-xs sm:text-sm md:text-base">
//               Years Experience
//             </div>
//           </div>
//           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
//             <div className="text-2xl sm:text-3xl md:text-4xl text-[#8ab72e] mb-1 sm:mb-2">
//               98%
//             </div>
//             <div className="text-gray-600 text-xs sm:text-sm md:text-base">
//               Success Rate
//             </div>
//           </div>
//         </div>

//         {/* Section Header - Only show on home page */}
//         {!cityName && (
//           <div
//             className="text-center mb-12 sm:mb-16 md:mb-20 py-10 sm:py-14 md:py-16 bg-gradient-to-r from-[#8ab72e]/10 to-[#6d9624]/10 rounded-3xl"
//             style={{
//               fontFamily: "'Gantari', sans-serif",
//               fontWeight: 400,
//             }}
//           >
//             {/* Badge */}
//             <div   style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }} className="inline-block bg-[#e8f1d7] text-[#6d9624] px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm  tracking-wide mb-6 sm:mb-8">
//               Our Expertise
//             </div>

//             {/* Heading */}
//             <h2
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4 sm:mb-6 leading-tight px-4">
//               Advanced <span className="text-[#8ab72e]">Therapy Solutions</span>
//             </h2>

//             {/* Description */}
//             <p style={{
//             fontFamily: "'Gantari', sans-serif",
//             fontWeight: 400,
//           }} className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-6">
//               Evidence-based treatment modalities combining traditional
//               techniques with modern technology
//             </p>
//           </div>
//         )}

//         {/* Slider Section */}
//         <div className="relative px-2 sm:px-4 md:px-8 lg:px-12"
//         style={{
//             fontFamily: "'Gantari', sans-serif",
//             fontWeight: 400,
//           }}
//         >
//           {/* Previous Button */}
//           <button
//             onClick={goToPrevious}
//             disabled={!canGoPrevious}
//             className={`absolute left-0 sm:left-2 md:left-4 lg:left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 ${
//               canGoPrevious
//                 ? "text-[#8ab72e] hover:bg-[#8ab72e] hover:text-white hover:scale-110"
//                 : "text-gray-300 cursor-not-allowed"
//             }`}
//           >
//             <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
//           </button>

//           {/* Cards Container */}
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-out"
//               style={{
//                 transform: `translateX(-${
//                   currentIndex * (100 / cardsToShow)
//                 }%)`,
//               }}
//             >
//               {therapies.map((therapy) => (
//                 <div
//                   key={therapy.id}
//                   className="px-2 sm:px-3 md:px-4"
//                   style={{ minWidth: `${100 / cardsToShow}%` }}
//                 >
//                   <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
//                     <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
//                       <img
//                         src={therapy.image}
//                         alt={therapy.title}
//                         className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                       <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg">
//                         <div className="text-[#8ab72e]">
//                           {React.cloneElement(therapy.icon, {
//                             className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6",
//                           })}
//                         </div>
//                       </div>

//                       {/* City Badge - Only on city pages */}
//                       {cityName && (
//                         <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs  flex items-center gap-1">
//                           <MapPin className="w-3 h-3" />
//                           {cityName}
//                         </div>
//                       )}
//                     </div>

//                     <div className="p-4 sm:p-5 md:p-6"
//                     style={{
//             fontFamily: "'Gantari', sans-serif",
//             fontWeight: 400,
//           }}>
//                       <h3 className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-2 sm:mb-3">
//                         {therapy.title}
//                       </h3>
//                       <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
//                         {therapy.description}
//                       </p>

//                       <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 md:mb-6">
//                         {therapy.features.map((feature, index) => (
//                           <div
//                             key={index}
//                             className="flex items-center gap-2 sm:gap-3"
//                           >
//                             <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-[#e5f2cc] rounded-full flex items-center justify-center">
//                               <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#8ab72e]" />
//                             </div>
//                             <span className="text-gray-700 text-xs sm:text-sm md:text-base ">
//                               {feature}
//                             </span>
//                           </div>
//                         ))}
//                       </div>

//                       <button className="w-full bg-[#8ab72e] text-white py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-5 md:px-6 rounded-lg sm:rounded-xl hover:bg-[#6d9624] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg text-xs sm:text-sm md:text-base">
//                         Learn More
//                         <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Next Button */}
//           <button
//             onClick={goToNext}
//             disabled={!canGoNext}
//             className={`absolute right-0 sm:right-2 md:right-4 lg:right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 ${
//               canGoNext
//                 ? "text-[#8ab72e] hover:bg-[#8ab72e] hover:text-white hover:scale-110"
//                 : "text-gray-300 cursor-not-allowed"
//             }`}
//           >
//             <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
//           </button>
//         </div>

//         {/* Dots Navigation */}
//         <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
//           {Array.from({
//             length: Math.ceil(therapies.length / cardsToShow),
//           }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index * cardsToShow)}
//               className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
//                 Math.floor(currentIndex / cardsToShow) === index
//                   ? "w-8 sm:w-10 bg-[#8ab72e]"
//                   : "w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div
//           className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-[#8ab72e] to-[#6d9624] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center text-white shadow-2xl"
//           style={{
//             fontFamily: "'Gantari', sans-serif",
//             fontWeight: 400,
//           }}
//         >
//           <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  mb-3 sm:mb-4 px-4">
//             Ready to Start Your Recovery Journey
//             {cityName ? ` in ${cityName}` : ""}?
//           </h3>
//           <p style={{
//             fontFamily: "'Gantari', sans-serif",
//             fontWeight: 400,
//           }} className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-50 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
//             Book a consultation with our expert physiotherapists
//             {cityName ? ` in ${cityName}` : ""} and experience personalized care
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
//           style={{
//             fontFamily: "'Gantari', sans-serif",
//             fontWeight: 400,
//           }}>
//             <button className="bg-white text-[#8ab72e] px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-emerald-50 transition-all duration-300  inline-flex items-center justify-center gap-2 shadow-xl hover:scale-105 text-sm sm:text-base">
//               Book Appointment
//               <ArrowRight className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//             </button>
//             <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white hover:text-[#8ab72e] transition-all duration-300  hover:scale-105 text-sm sm:text-base">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom"; // ADD THIS
// import {
//   CheckCircle,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   Zap,
//   Activity,
//   Heart,
//   Wind,
//   MapPin,
// } from "lucide-react";

// export default function TherapyExpertiseSection({ cityName }) {
//   const navigate = useNavigate(); // ADD THIS
//   const [therapies, setTherapies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsToShow, setCardsToShow] = useState(3);

//   // Helper function to generate slug from title
//   const generateSlug = (title) => {
//     return title
//       .toLowerCase()
//       .replace(/\s+/g, "-")
//       .replace(/[^\w-]+/g, "");
//   };

//   const therapyData = [
//     {
//       id: 1,
//       title: "Ultrasound Therapy",
//       slug: "ultrasound-therapy", // ADD SLUG
//       description:
//         "Deep tissue healing using high-frequency sound waves to reduce inflammation, promote blood flow and accelerate recovery",
//       image:
//         "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop",
//       features: ["Pain reduction", "Tissue healing"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 2,
//       title: "Interferential Therapy",
//       slug: "interferential-therapy",
//       description:
//         "Advanced electrotherapy technique using medium-frequency currents to relieve pain and stimulate muscle healing",
//       image:
//         "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
//       features: ["Deep pain relief", "Muscle stimulation"],
//       icon: <Zap className="w-6 h-6" />,
//     },
//     {
//       id: 3,
//       title: "TENS Therapy",
//       slug: "tens-therapy",
//       description:
//         "Transcutaneous Electrical Nerve Stimulation delivers gentle electrical pulses to block pain signals effectively",
//       image:
//         "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
//       features: ["Non-invasive pain relief", "Drug-free treatment"],
//       icon: <Zap className="w-6 h-6" />,
//     },
//     {
//       id: 4,
//       title: "Laser Therapy",
//       slug: "laser-therapy",
//       description:
//         "Low-level laser treatment promotes cellular regeneration, reduces inflammation and accelerates tissue repair",
//       image:
//         "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&h=400&fit=crop",
//       features: ["Fast recovery", "Cellular healing"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 5,
//       title: "Manual Therapy",
//       slug: "manual-therapy",
//       description:
//         "Hands-on techniques including joint mobilization and soft tissue manipulation for optimal movement restoration",
//       image:
//         "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
//       features: ["Joint mobility", "Muscle relaxation"],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 6,
//       title: "Thermotherapy",
//       slug: "thermotherapy",
//       description:
//         "Therapeutic heat application to increase blood circulation, relax muscles and reduce stiffness and pain",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
//       features: ["Muscle relaxation", "Improved circulation"],
//       icon: <Wind className="w-6 h-6" />,
//     },
//     {
//       id: 7,
//       title: "Wax Therapy",
//       slug: "wax-therapy",
//       description:
//         "Warm paraffin wax treatment for arthritis, joint stiffness and chronic pain with deep heat penetration",
//       image:
//         "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=400&fit=crop",
//       features: ["Joint relief", "Skin conditioning"],
//       icon: <Wind className="w-6 h-6" />,
//     },
//     {
//       id: 8,
//       title: "Dry Needling Therapy",
//       slug: "dry-needling-therapy",
//       description:
//         "Precise needle insertion into trigger points to release muscle tension, improve mobility and reduce pain",
//       image:
//         "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop",
//       features: ["Trigger point release", "Mobility improvement"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 9,
//       title: "Spinal Decompression",
//       slug: "spinal-decompression",
//       description:
//         "Gentle traction therapy to relieve pressure on spinal discs, nerves and reduce back and neck pain",
//       image:
//         "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
//       features: ["Disc decompression", "Nerve relief"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 10,
//       title: "Chiropractic Therapy",
//       slug: "chiropractic-therapy",
//       description:
//         "Spinal adjustment and manipulation techniques to restore proper alignment and nervous system function",
//       image:
//         "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
//       features: ["Spinal alignment", "Posture correction"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 11,
//       title: "Kinesio Taping",
//       slug: "kinesio-taping",
//       description:
//         "Strategic elastic tape application to support muscles, reduce pain, improve circulation and enhance performance",
//       image:
//         "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
//       features: ["Muscle support", "Performance enhancement"],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 12,
//       title: "Cupping Therapy",
//       slug: "cupping-therapy",
//       description:
//         "Traditional suction cup therapy to release muscle tension, improve blood flow and promote natural healing",
//       image:
//         "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
//       features: ["Muscle release", "Blood circulation"],
//       icon: <Wind className="w-6 h-6" />,
//     },
//     {
//       id: 13,
//       title: "Acupuncture",
//       slug: "acupuncture",
//       description:
//         "Ancient Chinese medicine using fine needles to stimulate specific points, balance energy and relieve pain",
//       image:
//         "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=400&fit=crop",
//       features: ["Energy balance", "Holistic healing"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 14,
//       title: "Myofascial Release",
//       slug: "myofascial-release",
//       description:
//         "Specialized massage technique targeting fascia to release restrictions, improve mobility and reduce chronic pain",
//       image:
//         "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=400&fit=crop",
//       features: ["Fascia release", "Chronic pain relief"],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 15,
//       title: "Soft Tissue Mobilisation",
//       slug: "soft-tissue-mobilisation",
//       description:
//         "Manual therapy techniques to break down scar tissue, improve flexibility and restore normal tissue function",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
//       features: ["Scar tissue breakdown", "Flexibility improvement"],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 16,
//       title: "Traction Therapy",
//       slug: "traction-therapy",
//       description:
//         "Mechanical or manual stretching to decompress joints, relieve pressure and reduce pain in spine and limbs",
//       image:
//         "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
//       features: ["Joint decompression", "Pain reduction"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 17,
//       title: "Pelvic Floor Therapy",
//       slug: "pelvic-floor-therapy",
//       description:
//         "Specialized physiotherapy for pelvic floor dysfunction, incontinence and post-pregnancy rehabilitation",
//       image:
//         "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
//       features: ["Pelvic strength", "Post-pregnancy care"],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 18,
//       title: "Chest Physiotherapy",
//       slug: "chest-physiotherapy",
//       description:
//         "Respiratory therapy techniques to clear airways, improve breathing and enhance lung function effectively",
//       image:
//         "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop",
//       features: ["Airway clearance", "Breathing improvement"],
//       icon: <Wind className="w-6 h-6" />,
//     },
//     {
//       id: 19,
//       title: "Shockwave Therapy",
//       slug: "shockwave-therapy",
//       description:
//         "High-energy acoustic waves to stimulate healing in chronic tendon and soft tissue injuries naturally",
//       image:
//         "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
//       features: ["Tendon healing", "Chronic pain relief"],
//       icon: <Zap className="w-6 h-6" />,
//     },
//     {
//       id: 20,
//       title: "Shortwave Therapy",
//       slug: "shortwave-therapy",
//       description:
//         "Electromagnetic energy therapy penetrating deep into tissues to reduce inflammation and promote healing",
//       image:
//         "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&h=400&fit=crop",
//       features: ["Deep tissue heating", "Inflammation reduction"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 21,
//       title: "Lymphatic Drainage Massage",
//       slug: "lymphatic-drainage-massage",
//       description:
//         "Gentle massage technique to stimulate lymph flow, reduce swelling and enhance immune system function",
//       image:
//         "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
//       features: ["Swelling reduction", "Immune support"],
//       icon: <Wind className="w-6 h-6" />,
//     },
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setCardsToShow(1);
//       } else if (window.innerWidth < 1024) {
//         setCardsToShow(2);
//       } else {
//         setCardsToShow(3);
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setTherapies(therapyData);
//       setLoading(false);
//     }, 500);
//   }, []);

//   useEffect(() => {
//     if (therapies.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => {
//         const maxIndex = therapies.length - cardsToShow;
//         if (prev >= maxIndex) {
//           return 0;
//         }
//         return prev + 1;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [therapies.length, cardsToShow]);

//   const goToPrevious = () => {
//     setCurrentIndex((prev) => Math.max(0, prev - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prev) =>
//       Math.min(therapies.length - cardsToShow, prev + 1),
//     );
//   };

//   const canGoPrevious = currentIndex > 0;
//   const canGoNext = currentIndex < therapies.length - cardsToShow;

//   // ADD THIS: Navigation handler
//   const handleTherapyClick = (therapy) => {
//     navigate(`/physiotherapy/${therapy.slug}`);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   if (loading) {
//     return (
//       <div className="w-full min-h-screen bg-gradient-to-br  flex items-center justify-center p-4">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-[#8ab72e] border-t-transparent"></div>
//           <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg">
//             Loading therapies...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
//       {/* Hero Section - Only show when cityName exists */}
//       {cityName && (
//         <div className="bg-gradient-to-r from-[#8ab72e] to-[#6d9624] text-white py-12 sm:py-16 md:py-20 px-4">
//           <div className="max-w-7xl mx-auto text-center">
//             <div
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//               className="inline-block bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6"
//             >
//               ✨ Advanced Treatment Solutions
//             </div>
//             <h1
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6"
//             >
//               Therapy Expertise in {cityName}
//             </h1>
//             <div className="flex items-center justify-center gap-2 text-white/90 mb-4">
//               <MapPin className="w-5 h-5" />
//               <p className="text-lg">Available at our {cityName} clinic</p>
//             </div>
//             <p
//               style={{
//                 fontFamily: "'Gantari', sans-serif",
//                 fontWeight: 400,
//               }}
//               className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-50 max-w-3xl mx-auto leading-relaxed px-4"
//             >
//               Comprehensive range of specialized therapies in {cityName}{" "}
//               tailored to your recovery needs
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <div
//         className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16"
//         style={{
//           fontFamily: "'Gantari', sans-serif",
//           fontWeight: 400,
//         }}
//       >
      

//         {/* Section Header - Only show on home page */}
//         {!cityName && (
//           <div
//             className="text-center mb-12 sm:mb-16 md:mb-20 py-10 sm:py-14 md:py-16 bg-gradient-to-r from-[#8ab72e]/10 to-[#6d9624]/10 rounded-3xl"
//             style={{
//               fontFamily: "'Gantari', sans-serif",
//               fontWeight: 400,
//             }}
//           >
//             {/* Badge */}
//             <div
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//               className="inline-block bg-[#e8f1d7] text-[#6d9624] px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm  tracking-wide mb-6 sm:mb-8"
//             >
//               Our Expertise
//             </div>

//             {/* Heading */}
//             <h2
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4 sm:mb-6 leading-tight px-4"
//             >
//               Advanced <span className="text-[#8ab72e]">Therapy Solutions</span>
//             </h2>

//             {/* Description */}
           
//           </div>
//         )}

//         {/* Slider Section */}
//         <div
//           className="relative px-2 sm:px-4 md:px-8 lg:px-12"
//           style={{
//             fontFamily: "'Gantari', sans-serif",
//             fontWeight: 400,
//           }}
//         >
//           {/* Previous Button */}
//           <button
//             onClick={goToPrevious}
//             disabled={!canGoPrevious}
//             className={`absolute left-0 sm:left-2 md:left-4 lg:left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 ${
//               canGoPrevious
//                 ? "text-[#8ab72e] hover:bg-[#8ab72e] hover:text-white hover:scale-110"
//                 : "text-gray-300 cursor-not-allowed"
//             }`}
//           >
//             <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
//           </button>

//           {/* Cards Container */}
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-out"
//               style={{
//                 transform: `translateX(-${
//                   currentIndex * (100 / cardsToShow)
//                 }%)`,
//               }}
//             >
//               {therapies.map((therapy) => (
//                 <div
//                   key={therapy.id}
//                   className="px-2 sm:px-3 md:px-4"
//                   style={{ minWidth: `${100 / cardsToShow}%` }}
//                 >
//                   {/* ADD THIS: Wrap card in clickable div */}
//                   <div
//                     onClick={() => handleTherapyClick(therapy)}
//                     className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full cursor-pointer"
//                   >
//                     <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
//                       <img
//                         src={therapy.image}
//                         alt={therapy.title}
//                         className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                       <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg">
//                         <div className="text-[#8ab72e]">
//                           {React.cloneElement(therapy.icon, {
//                             className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6",
//                           })}
//                         </div>
//                       </div>

//                       {/* City Badge - Only on city pages */}
//                       {cityName && (
//                         <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs  flex items-center gap-1">
//                           <MapPin className="w-3 h-3" />
//                           {cityName}
//                         </div>
//                       )}
//                     </div>

//                     <div
//                       className="p-4 sm:p-5 md:p-6"
//                       style={{
//                         fontFamily: "'Gantari', sans-serif",
//                         fontWeight: 400,
//                       }}
//                     >
//                       <h3 className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-2 sm:mb-3">
//                         {therapy.title}
//                       </h3>
//                       <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
//                         {therapy.description}
//                       </p>

//                       <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 md:mb-6">
//                         {therapy.features.map((feature, index) => (
//                           <div
//                             key={index}
//                             className="flex items-center gap-2 sm:gap-3"
//                           >
//                             <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-[#e5f2cc] rounded-full flex items-center justify-center">
//                               <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#8ab72e]" />
//                             </div>
//                             <span className="text-gray-700 text-xs sm:text-sm md:text-base ">
//                               {feature}
//                             </span>
//                           </div>
//                         ))}
//                       </div>

//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation(); // Prevent double trigger
//                           handleTherapyClick(therapy);
//                         }}
//                         className="w-full bg-[#8ab72e] text-white py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-5 md:px-6 rounded-lg sm:rounded-xl hover:bg-[#6d9624] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg text-xs sm:text-sm md:text-base"
//                       >
//                         Learn More
//                         <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Next Button */}
//           <button
//             onClick={goToNext}
//             disabled={!canGoNext}
//             className={`absolute right-0 sm:right-2 md:right-4 lg:right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 ${
//               canGoNext
//                 ? "text-[#8ab72e] hover:bg-[#8ab72e] hover:text-white hover:scale-110"
//                 : "text-gray-300 cursor-not-allowed"
//             }`}
//           >
//             <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
//           </button>
//         </div>

//         {/* Dots Navigation */}
//         <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
//           {Array.from({
//             length: Math.ceil(therapies.length / cardsToShow),
//           }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index * cardsToShow)}
//               className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
//                 Math.floor(currentIndex / cardsToShow) === index
//                   ? "w-8 sm:w-10 bg-[#8ab72e]"
//                   : "w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>

//         {/* CTA Section */}
//         {/* <div
//           className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-[#8ab72e] to-[#6d9624] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center text-white shadow-2xl"
//           style={{
//             fontFamily: "'Gantari', sans-serif",
//             fontWeight: 400,
//           }}
//         >
//           <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  mb-3 sm:mb-4 px-4">
//             Ready to Start Your Recovery Journey
//             {cityName ? ` in ${cityName}` : ""}?
//           </h3>
//           <p style={{
//             fontFamily: "'Gantari', sans-serif",
//             fontWeight: 400,
//           }} className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-50 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
//             Book a consultation with our expert physiotherapists
//             {cityName ? ` in ${cityName}` : ""} and experience personalized care
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
//           style={{
//             fontFamily: "'Gantari', sans-serif",
//             fontWeight: 400,
//           }}>
//             <button className="bg-white text-[#8ab72e] px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-emerald-50 transition-all duration-300  inline-flex items-center justify-center gap-2 shadow-xl hover:scale-105 text-sm sm:text-base">
//               Book Appointment
//               <ArrowRight className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//             </button>
//             <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white hover:text-[#8ab72e] transition-all duration-300  hover:scale-105 text-sm sm:text-base">
//               Contact Us
//             </button>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   CheckCircle,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   Zap,
//   Activity,
//   Heart,
//   Wind,
//   MapPin,
// } from "lucide-react";

// export default function TherapyExpertiseSection({ cityName }) {
//   const navigate = useNavigate();
//   const [therapies, setTherapies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsToShow, setCardsToShow] = useState(3);

//   const generateSlug = (title) => {
//     return title
//       .toLowerCase()
//       .replace(/\s+/g, "-")
//       .replace(/[^\w-]+/g, "");
//   };

//   const therapyData = [
//     {
//       id: 1,
//       title: "Ultrasound Therapy",
//       slug: "ultrasound-therapy",
//       description:
//         "Deep tissue healing using high-frequency sound waves to reduce inflammation, promote blood flow and accelerate recovery",
//       features: ["Pain reduction", "Tissue healing"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 2,
//       title: "Interferential Therapy",
//       slug: "interferential-therapy",
//       description:
//         "Advanced electrotherapy technique using medium-frequency currents to relieve pain and stimulate muscle healing",
//       features: ["Deep pain relief", "Muscle stimulation"],
//       icon: <Zap className="w-6 h-6" />,
//     },
//     {
//       id: 3,
//       title: "TENS Therapy",
//       slug: "tens-therapy",
//       description:
//         "Transcutaneous Electrical Nerve Stimulation delivers gentle electrical pulses to block pain signals effectively",
//       features: ["Non-invasive pain relief", "Drug-free treatment"],
//       icon: <Zap className="w-6 h-6" />,
//     },
//     {
//       id: 4,
//       title: "Laser Therapy",
//       slug: "laser-therapy",
//       description:
//         "Low-level laser treatment promotes cellular regeneration, reduces inflammation and accelerates tissue repair",
//       features: ["Fast recovery", "Cellular healing"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 5,
//       title: "Manual Therapy",
//       slug: "manual-therapy",
//       description:
//         "Hands-on techniques including joint mobilization and soft tissue manipulation for optimal movement restoration",
//       features: ["Joint mobility", "Muscle relaxation"],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 6,
//       title: "Thermotherapy",
//       slug: "thermotherapy",
//       description:
//         "Therapeutic heat application to increase blood circulation, relax muscles and reduce stiffness and pain",
//       features: ["Muscle relaxation", "Improved circulation"],
//       icon: <Wind className="w-6 h-6" />,
//     },
//     {
//       id: 7,
//       title: "Wax Therapy",
//       slug: "wax-therapy",
//       description:
//         "Warm paraffin wax treatment for arthritis, joint stiffness and chronic pain with deep heat penetration",
//       features: ["Joint relief", "Skin conditioning"],
//       icon: <Wind className="w-6 h-6" />,
//     },
//     {
//       id: 8,
//       title: "Dry Needling Therapy",
//       slug: "dry-needling-therapy",
//       description:
//         "Precise needle insertion into trigger points to release muscle tension, improve mobility and reduce pain",
//       features: ["Trigger point release", "Mobility improvement"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 9,
//       title: "Spinal Decompression",
//       slug: "spinal-decompression",
//       description:
//         "Gentle traction therapy to relieve pressure on spinal discs, nerves and reduce back and neck pain",
//       features: ["Disc decompression", "Nerve relief"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 10,
//       title: "Chiropractic Therapy",
//       slug: "chiropractic-therapy",
//       description:
//         "Spinal adjustment and manipulation techniques to restore proper alignment and nervous system function",
//       features: ["Spinal alignment", "Posture correction"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 11,
//       title: "Kinesio Taping",
//       slug: "kinesio-taping",
//       description:
//         "Strategic elastic tape application to support muscles, reduce pain, improve circulation and enhance performance",
//       features: ["Muscle support", "Performance enhancement"],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 12,
//       title: "Cupping Therapy",
//       slug: "cupping-therapy",
//       description:
//         "Traditional suction cup therapy to release muscle tension, improve blood flow and promote natural healing",
//       features: ["Muscle release", "Blood circulation"],
//       icon: <Wind className="w-6 h-6" />,
//     },
//     {
//       id: 13,
//       title: "Acupuncture",
//       slug: "acupuncture",
//       description:
//         "Ancient Chinese medicine using fine needles to stimulate specific points, balance energy and relieve pain",
//       features: ["Energy balance", "Holistic healing"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 14,
//       title: "Myofascial Release",
//       slug: "myofascial-release",
//       description:
//         "Specialized massage technique targeting fascia to release restrictions, improve mobility and reduce chronic pain",
//       features: ["Fascia release", "Chronic pain relief"],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 15,
//       title: "Soft Tissue Mobilisation",
//       slug: "soft-tissue-mobilisation",
//       description:
//         "Manual therapy techniques to break down scar tissue, improve flexibility and restore normal tissue function",
//       features: ["Scar tissue breakdown", "Flexibility improvement"],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 16,
//       title: "Traction Therapy",
//       slug: "traction-therapy",
//       description:
//         "Mechanical or manual stretching to decompress joints, relieve pressure and reduce pain in spine and limbs",
//       features: ["Joint decompression", "Pain reduction"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 17,
//       title: "Pelvic Floor Therapy",
//       slug: "pelvic-floor-therapy",
//       description:
//         "Specialized physiotherapy for pelvic floor dysfunction, incontinence and post-pregnancy rehabilitation",
//       features: ["Pelvic strength", "Post-pregnancy care"],
//       icon: <Heart className="w-6 h-6" />,
//     },
//     {
//       id: 18,
//       title: "Chest Physiotherapy",
//       slug: "chest-physiotherapy",
//       description:
//         "Respiratory therapy techniques to clear airways, improve breathing and enhance lung function effectively",
//       features: ["Airway clearance", "Breathing improvement"],
//       icon: <Wind className="w-6 h-6" />,
//     },
//     {
//       id: 19,
//       title: "Shockwave Therapy",
//       slug: "shockwave-therapy",
//       description:
//         "High-energy acoustic waves to stimulate healing in chronic tendon and soft tissue injuries naturally",
//       features: ["Tendon healing", "Chronic pain relief"],
//       icon: <Zap className="w-6 h-6" />,
//     },
//     {
//       id: 20,
//       title: "Shortwave Therapy",
//       slug: "shortwave-therapy",
//       description:
//         "Electromagnetic energy therapy penetrating deep into tissues to reduce inflammation and promote healing",
//       features: ["Deep tissue heating", "Inflammation reduction"],
//       icon: <Activity className="w-6 h-6" />,
//     },
//     {
//       id: 21,
//       title: "Lymphatic Drainage Massage",
//       slug: "lymphatic-drainage-massage",
//       description:
//         "Gentle massage technique to stimulate lymph flow, reduce swelling and enhance immune system function",
//       features: ["Swelling reduction", "Immune support"],
//       icon: <Wind className="w-6 h-6" />,
//     },
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setCardsToShow(1);
//       } else if (window.innerWidth < 1024) {
//         setCardsToShow(2);
//       } else {
//         setCardsToShow(3);
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setTherapies(therapyData);
//       setLoading(false);
//     }, 500);
//   }, []);

//   useEffect(() => {
//     if (therapies.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => {
//         const maxIndex = therapies.length - cardsToShow;
//         if (prev >= maxIndex) {
//           return 0;
//         }
//         return prev + 1;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [therapies.length, cardsToShow]);

//   const goToPrevious = () => {
//     setCurrentIndex((prev) => Math.max(0, prev - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prev) =>
//       Math.min(therapies.length - cardsToShow, prev + 1),
//     );
//   };

//   const canGoPrevious = currentIndex > 0;
//   const canGoNext = currentIndex < therapies.length - cardsToShow;

//   const handleTherapyClick = (therapy) => {
//     navigate(`/physiotherapy/${therapy.slug}`);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   if (loading) {
//     return (
//       <div className="w-full min-h-screen bg-gradient-to-br flex items-center justify-center p-4">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-[#8ab72e] border-t-transparent"></div>
//           <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg">
//             Loading therapies...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full  bg-gradient-to-br from-gray-50 via-white to-emerald-50">
//       {/* Hero Section */}
//       {cityName && (
//         <div className="bg-gradient-to-r from-[#8ab72e] to-[#6d9624] text-white py-12 sm:py-16 md:py-20 px-4">
//           <div className="max-w-7xl mx-auto text-center">
//             <div
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//               className="inline-block bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6"
//             >
//               ✨ Advanced Treatment Solutions
//             </div>
//             <h1
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6"
//             >
//               Therapy Expertise in {cityName}
//             </h1>
//             <div className="flex items-center justify-center gap-2 text-white/90 mb-4">
//               <MapPin className="w-5 h-5" />
//               <p className="text-lg">Available at our {cityName} clinic</p>
//             </div>
//             {/* <p
//               style={{
//                 fontFamily: "'Gantari', sans-serif",
//                 fontWeight: 400,
//               }}
//               className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-50 max-w-3xl mx-auto leading-relaxed px-4"
//             >
//               Comprehensive range of specialized therapies in {cityName}{" "}
//               tailored to your recovery needs
//             </p> */}
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <div
//         className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16"
//         style={{
//           fontFamily: "'Gantari', sans-serif",
//           fontWeight: 400,
//         }}
//       >
//         {/* Section Header */}
//         {!cityName && (
//           <div
//             className="text-center mb-12 sm:mb-16 md:mb-20 py-10 sm:py-14 md:py-16 bg-gradient-to-r from-[#8ab72e]/10 to-[#6d9624]/10 rounded-3xl"
//             style={{
//               fontFamily: "'Gantari', sans-serif",
//               fontWeight: 400,
//             }}
//           >
//             <div
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//               className="inline-block bg-[#e8f1d7] text-[#6d9624] px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm tracking-wide mb-6 sm:mb-8"
//             >
//               Our Expertise
//             </div>

//             <h2
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4 sm:mb-6 leading-tight px-4"
//             >
//               Advanced <span className="text-[#8ab72e]">Therapy Solutions</span>
//             </h2>
//           </div>
//         )}

//         {/* Slider Section */}
//         <div
//           className="relative px-2 sm:px-4 md:px-8 lg:px-12"
//           style={{
//             fontFamily: "'Gantari', sans-serif",
//             fontWeight: 400,
//           }}
//         >
//           {/* Previous Button */}
//           <button
//             onClick={goToPrevious}
//             disabled={!canGoPrevious}
//             className={`absolute left-0 sm:left-2 md:left-4 lg:left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 ${
//               canGoPrevious
//                 ? "text-[#8ab72e] hover:bg-[#8ab72e] hover:text-white hover:scale-110"
//                 : "text-gray-300 cursor-not-allowed"
//             }`}
//           >
//             <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
//           </button>

//           {/* Cards Container */}
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-out"
//               style={{
//                 transform: `translateX(-${
//                   currentIndex * (100 / cardsToShow)
//                 }%)`,
//               }}
//             >
//               {therapies.map((therapy) => (
//                 <div
//                   key={therapy.id}
//                   className="px-2 sm:px-3 md:px-4"
//                   style={{ minWidth: `${100 / cardsToShow}%` }}
//                 >
//                   <div
//                     onClick={() => handleTherapyClick(therapy)}
//                     className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full cursor-pointer border-t-4 border-[#8ab72e]"
//                   >
//                     {/* Icon Header */}
//                     {/* <div className="bg-gradient-to-r from-[#8ab72e]/10 to-[#6d9624]/10 p-6 flex items-center justify-center">
//                       <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg">
//                         <div className="text-[#8ab72e]">
//                           {React.cloneElement(therapy.icon, {
//                             className: "w-8 h-8 sm:w-10 sm:h-10",
//                           })}
//                         </div>
//                       </div>
//                     </div> */}

//                     <div
//                       className="p-6 sm:p-7 md:p-8"
//                       style={{
//                         fontFamily: "'Gantari', sans-serif",
//                         fontWeight: 400,
//                       }}
//                     >
//                       <h3 className="text-xl sm:text-2xl md:text-2xl text-gray-800 mb-3 sm:mb-4 font-semibold">
//                         {therapy.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm sm:text-base md:text-base mb-5 sm:mb-6 leading-relaxed">
//                         {therapy.description}
//                       </p>

//                       <div className="space-y-3 mb-6">
//                         {therapy.features.map((feature, index) => (
//                           <div
//                             key={index}
//                             className="flex items-center gap-3"
//                           >
//                             <div className="flex-shrink-0 w-6 h-6 bg-[#e5f2cc] rounded-full flex items-center justify-center">
//                               <CheckCircle className="w-4 h-4 text-[#8ab72e]" />
//                             </div>
//                             <span className="text-gray-700 text-sm sm:text-base">
//                               {feature}
//                             </span>
//                           </div>
//                         ))}
//                       </div>

//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handleTherapyClick(therapy);
//                         }}
//                         className="w-full bg-[#8ab72e] text-white py-3 sm:py-3.5 px-5 rounded-xl hover:bg-[#6d9624] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg text-sm sm:text-base font-semibold"
//                       >
//                         Learn More
//                         <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Next Button */}
//           <button
//             onClick={goToNext}
//             disabled={!canGoNext}
//             className={`absolute right-0 sm:right-2 md:right-4 lg:right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 ${
//               canGoNext
//                 ? "text-[#8ab72e] hover:bg-[#8ab72e] hover:text-white hover:scale-110"
//                 : "text-gray-300 cursor-not-allowed"
//             }`}
//           >
//             <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
//           </button>
//         </div>

//         {/* Dots Navigation */}
//         {/* <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
//           {Array.from({
//             length: Math.ceil(therapies.length / cardsToShow),
//           }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index * cardsToShow)}
//               className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
//                 Math.floor(currentIndex / cardsToShow) === index
//                   ? "w-8 sm:w-10 bg-[#8ab72e]"
//                   : "w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400"
//               }`}
//             />
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Zap,
  Activity,
  Heart,
  Wind,
  MapPin,
} from "lucide-react";

export default function TherapyExpertiseSection({ cityName }) {
  const navigate = useNavigate();
  const [therapies, setTherapies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const therapyData = [
    {
      id: 1,
      title: "Ultrasound Therapy",
      slug: "ultrasound-therapy",
      description:
        "Deep tissue healing using high-frequency sound waves to reduce inflammation, promote blood flow and accelerate recovery",
      features: ["Pain reduction", "Tissue healing"],
      icon: <Activity className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Interferential Therapy",
      slug: "interferential-therapy",
      description:
        "Advanced electrotherapy technique using medium-frequency currents to relieve pain and stimulate muscle healing",
      features: ["Deep pain relief", "Muscle stimulation"],
      icon: <Zap className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "TENS Therapy",
      slug: "tens-therapy",
      description:
        "Transcutaneous Electrical Nerve Stimulation delivers gentle electrical pulses to block pain signals effectively",
      features: ["Non-invasive pain relief", "Drug-free treatment"],
      icon: <Zap className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Laser Therapy",
      slug: "laser-therapy",
      description:
        "Low-level laser treatment promotes cellular regeneration, reduces inflammation and accelerates tissue repair",
      features: ["Fast recovery", "Cellular healing"],
      icon: <Activity className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "Manual Therapy",
      slug: "manual-therapy",
      description:
        "Hands-on techniques including joint mobilization and soft tissue manipulation for optimal movement restoration",
      features: ["Joint mobility", "Muscle relaxation"],
      icon: <Heart className="w-6 h-6" />,
    },
    {
      id: 6,
      title: "Thermotherapy",
      slug: "thermotherapy",
      description:
        "Therapeutic heat application to increase blood circulation, relax muscles and reduce stiffness and pain",
      features: ["Muscle relaxation", "Improved circulation"],
      icon: <Wind className="w-6 h-6" />,
    },
    {
      id: 7,
      title: "Wax Therapy",
      slug: "wax-therapy",
      description:
        "Warm paraffin wax treatment for arthritis, joint stiffness and chronic pain with deep heat penetration",
      features: ["Joint relief", "Skin conditioning"],
      icon: <Wind className="w-6 h-6" />,
    },
    {
      id: 8,
      title: "Dry Needling Therapy",
      slug: "dry-needling-therapy",
      description:
        "Precise needle insertion into trigger points to release muscle tension, improve mobility and reduce pain",
      features: ["Trigger point release", "Mobility improvement"],
      icon: <Activity className="w-6 h-6" />,
    },
    {
      id: 9,
      title: "Spinal Decompression",
      slug: "spinal-decompression",
      description:
        "Gentle traction therapy to relieve pressure on spinal discs, nerves and reduce back and neck pain",
      features: ["Disc decompression", "Nerve relief"],
      icon: <Activity className="w-6 h-6" />,
    },
    {
      id: 10,
      title: "Chiropractic Therapy",
      slug: "chiropractic-therapy",
      description:
        "Spinal adjustment and manipulation techniques to restore proper alignment and nervous system function",
      features: ["Spinal alignment", "Posture correction"],
      icon: <Activity className="w-6 h-6" />,
    },
    {
      id: 11,
      title: "Kinesio Taping",
      slug: "kinesio-taping",
      description:
        "Strategic elastic tape application to support muscles, reduce pain, improve circulation and enhance performance",
      features: ["Muscle support", "Performance enhancement"],
      icon: <Heart className="w-6 h-6" />,
    },
    {
      id: 12,
      title: "Cupping Therapy",
      slug: "cupping-therapy",
      description:
        "Traditional suction cup therapy to release muscle tension, improve blood flow and promote natural healing",
      features: ["Muscle release", "Blood circulation"],
      icon: <Wind className="w-6 h-6" />,
    },
    {
      id: 13,
      title: "Acupuncture",
      slug: "acupuncture",
      description:
        "Ancient Chinese medicine using fine needles to stimulate specific points, balance energy and relieve pain",
      features: ["Energy balance", "Holistic healing"],
      icon: <Activity className="w-6 h-6" />,
    },
    {
      id: 14,
      title: "Myofascial Release",
      slug: "myofascial-release",
      description:
        "Specialized massage technique targeting fascia to release restrictions, improve mobility and reduce chronic pain",
      features: ["Fascia release", "Chronic pain relief"],
      icon: <Heart className="w-6 h-6" />,
    },
    {
      id: 15,
      title: "Soft Tissue Mobilisation",
      slug: "soft-tissue-mobilisation",
      description:
        "Manual therapy techniques to break down scar tissue, improve flexibility and restore normal tissue function",
      features: ["Scar tissue breakdown", "Flexibility improvement"],
      icon: <Heart className="w-6 h-6" />,
    },
    {
      id: 16,
      title: "Traction Therapy",
      slug: "traction-therapy",
      description:
        "Mechanical or manual stretching to decompress joints, relieve pressure and reduce pain in spine and limbs",
      features: ["Joint decompression", "Pain reduction"],
      icon: <Activity className="w-6 h-6" />,
    },
    {
      id: 17,
      title: "Pelvic Floor Therapy",
      slug: "pelvic-floor-therapy",
      description:
        "Specialized physiotherapy for pelvic floor dysfunction, incontinence and post-pregnancy rehabilitation",
      features: ["Pelvic strength", "Post-pregnancy care"],
      icon: <Heart className="w-6 h-6" />,
    },
    {
      id: 18,
      title: "Chest Physiotherapy",
      slug: "chest-physiotherapy",
      description:
        "Respiratory therapy techniques to clear airways, improve breathing and enhance lung function effectively",
      features: ["Airway clearance", "Breathing improvement"],
      icon: <Wind className="w-6 h-6" />,
    },
    {
      id: 19,
      title: "Shockwave Therapy",
      slug: "shockwave-therapy",
      description:
        "High-energy acoustic waves to stimulate healing in chronic tendon and soft tissue injuries naturally",
      features: ["Tendon healing", "Chronic pain relief"],
      icon: <Zap className="w-6 h-6" />,
    },
    {
      id: 20,
      title: "Shortwave Therapy",
      slug: "shortwave-therapy",
      description:
        "Electromagnetic energy therapy penetrating deep into tissues to reduce inflammation and promote healing",
      features: ["Deep tissue heating", "Inflammation reduction"],
      icon: <Activity className="w-6 h-6" />,
    },
    {
      id: 21,
      title: "Lymphatic Drainage Massage",
      slug: "lymphatic-drainage-massage",
      description:
        "Gentle massage technique to stimulate lymph flow, reduce swelling and enhance immune system function",
      features: ["Swelling reduction", "Immune support"],
      icon: <Wind className="w-6 h-6" />,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setTherapies(therapyData);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (therapies.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = therapies.length - cardsToShow;
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [therapies.length, cardsToShow]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      Math.min(therapies.length - cardsToShow, prev + 1),
    );
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < therapies.length - cardsToShow;

  // ✅ FIXED: Navigation goes to /physiotherapy/:slug (always)
  const handleTherapyClick = (therapy) => {
    navigate(`/physiotherapy/${therapy.slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br flex items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-[#8ab72e] border-t-transparent"></div>
          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg">
            Loading therapies...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      {/* Hero Section */}
      {cityName && (
        <div className="bg-gradient-to-r from-[#8ab72e] to-[#6d9624] text-white py-12 sm:py-16 md:py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
              className="inline-block bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6"
            >
              ✨ Advanced Treatment Solutions
            </div>
            <h1
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6"
            >
              Therapy Expertise in {cityName}
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/90 mb-4">
              <MapPin className="w-5 h-5" />
              <p className="text-lg">Available at our {cityName} clinic</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16"
        style={{
          fontFamily: "'Gantari', sans-serif",
          fontWeight: 400,
        }}
      >
        {/* Section Header */}
        {!cityName && (
          <div
            className="text-center mb-12 sm:mb-16 md:mb-20 py-10 sm:py-14 md:py-16 bg-gradient-to-r from-[#8ab72e]/10 to-[#6d9624]/10 rounded-3xl"
            style={{
              fontFamily: "'Gantari', sans-serif",
              fontWeight: 400,
            }}
          >
            <div
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
              className="inline-block bg-[#e8f1d7] text-[#6d9624] px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm tracking-wide mb-6 sm:mb-8"
            >
              Our Expertise
            </div>

            <h2
              style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4 sm:mb-6 leading-tight px-4"
            >
              Advanced <span className="text-[#8ab72e]">Therapy Solutions</span>
            </h2>
          </div>
        )}

        {/* Slider Section */}
        <div
          className="relative px-2 sm:px-4 md:px-8 lg:px-12"
          style={{
            fontFamily: "'Gantari', sans-serif",
            fontWeight: 400,
          }}
        >
          <button
            onClick={goToPrevious}
            disabled={!canGoPrevious}
            className={`absolute left-0 sm:left-2 md:left-4 lg:left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 ${
              canGoPrevious
                ? "text-[#8ab72e] hover:bg-[#8ab72e] hover:text-white hover:scale-110"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsToShow)
                }%)`,
              }}
            >
              {therapies.map((therapy) => (
                <div
                  key={therapy.id}
                  className="px-2 sm:px-3 md:px-4"
                  style={{ minWidth: `${100 / cardsToShow}%` }}
                >
                  <div
                    onClick={() => handleTherapyClick(therapy)}
                    className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full cursor-pointer border-t-4 border-[#8ab72e]"
                  >
                    <div
                      className="p-6 sm:p-7 md:p-8"
                      style={{
                        fontFamily: "'Gantari', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      <h3 className="text-xl sm:text-2xl md:text-2xl text-gray-800 mb-3 sm:mb-4 font-semibold">
                        {therapy.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base md:text-base mb-5 sm:mb-6 leading-relaxed">
                        {therapy.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {therapy.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3"
                          >
                            <div className="flex-shrink-0 w-6 h-6 bg-[#e5f2cc] rounded-full flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-[#8ab72e]" />
                            </div>
                            <span className="text-gray-700 text-sm sm:text-base">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTherapyClick(therapy);
                        }}
                        className="w-full bg-[#8ab72e] text-white py-3 sm:py-3.5 px-5 rounded-xl hover:bg-[#6d9624] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg text-sm sm:text-base font-semibold"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToNext}
            disabled={!canGoNext}
            className={`absolute right-0 sm:right-2 md:right-4 lg:right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 ${
              canGoNext
                ? "text-[#8ab72e] hover:bg-[#8ab72e] hover:text-white hover:scale-110"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
        </div>
      </div>
    </div>
  );
}