// import React, { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ParthLogo from "../../../../assets/ParthLogo.png";

// // Service Details Data
// const serviceDetails = {
//   "nursing-care": {
//     title: "Best Nursing Care In Delhi",
//     description:
//       "Comprehensive nursing care services provided by experienced and certified nurses in the comfort of your home.",
//     fullDescription:
//       "Our professional nursing care services ensure that patients receive high-quality medical attention at home. Our certified nurses are trained to handle various medical conditions, from post-operative care to chronic disease management. We provide personalized care plans tailored to each patient's unique needs, ensuring comfort, safety, and optimal recovery.",
//     benefits: [
//       "24/7 professional nursing support",
//       "Medication management and administration",
//       "Wound care and dressing",
//       "Vital signs monitoring",
//       "Patient hygiene and personal care",
//       "Medical equipment handling",
//       "Coordination with doctors and hospitals",
//       "Emergency response protocols",
//     ],
//     features: [
//       "Experienced and certified nurses",
//       "Customized care plans",
//       "Regular health monitoring",
//       "Compassionate and professional care",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop",
//     icon: "👨‍⚕️",
//   },
//   "home-nursing-care": {
//     title: "Best Home Nursing Care Delhi",
//     description:
//       "Expert nursing care delivered to your doorstep, ensuring comfort and convenience for patients and families.",
//     fullDescription:
//       "Home nursing care brings professional medical services directly to your home, eliminating the stress of hospital visits. Our nurses provide comprehensive care for elderly patients, post-surgical recovery, chronic illness management, and palliative care. We ensure that patients receive the same quality of care they would receive in a hospital, but in the familiar and comfortable environment of their own home.",
//     benefits: [
//       "Personalized one-on-one care",
//       "No need for hospital visits",
//       "Reduced risk of hospital-acquired infections",
//       "Family involvement in care process",
//       "Cost-effective compared to hospital stays",
//       "Flexible scheduling based on patient needs",
//       "Continuity of care with the same nurse",
//       "Emotional support for patients and families",
//     ],
//     features: [
//       "Qualified healthcare professionals",
//       "Advanced medical equipment at home",
//       "Regular doctor consultations",
//       "24/7 availability for emergencies",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&h=600&fit=crop",
//     icon: "🏠",
//   },
//   "Best blood-sample-collection In Delhi": {
//     title: "Blood Sample Collection",
//     description:
//       "Safe and hygienic blood sample collection services at your doorstep for all diagnostic tests.",
//     fullDescription:
//       "Our blood sample collection service provides a convenient and safe way to get your diagnostic tests done without visiting a laboratory. Our trained phlebotomists use sterile equipment and follow strict hygiene protocols to ensure accurate sample collection. Samples are transported immediately to certified laboratories for analysis, and results are delivered promptly.",
//     benefits: [
//       "Convenient home-based collection",
//       "Sterile and safe procedures",
//       "Experienced phlebotomists",
//       "Quick and painless collection",
//       "All types of blood tests available",
//       "Immediate lab processing",
//       "Digital and physical reports",
//       "Affordable pricing",
//     ],
//     features: [
//       "Early morning collection available",
//       "Same-day sample processing",
//       "Partnership with certified labs",
//       "Complete confidentiality maintained",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&h=600&fit=crop",
//     icon: "💉",
//   },
//   "home-blood-sample": {
//     title: "Best Home Blood Sample Collection In Delhi",
//     description:
//       "Professional blood collection service at home for routine check-ups, health screenings, and diagnostic tests.",
//     fullDescription:
//       "Our home blood sample collection service makes health monitoring easy and convenient. Whether you need routine blood work, pre-operative tests, or monitoring for chronic conditions, our trained professionals come to your home at your preferred time. We handle all types of blood tests including complete blood count, lipid profile, diabetes screening, liver function tests, kidney function tests, and specialized diagnostics.",
//     benefits: [
//       "No waiting in queues at labs",
//       "Suitable for elderly and bedridden patients",
//       "Children-friendly collection process",
//       "Fasting tests done early morning",
//       "Multiple family members can be tested",
//       "Comprehensive test packages available",
//       "Doctor consultation for report interpretation",
//       "Home visit charges minimal",
//     ],
//     features: [
//       "Government-certified laboratories",
//       "NABL accredited lab partners",
//       "Quick turnaround time for results",
//       "Online report access",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&h=600&fit=crop",
//     icon: "🩺",
//   },
//   "icu-setup-facility-at-home": {
//     title: "Best ICU Setup Facility at Home In Delhi",
//     description:
//       "Complete ICU setup at home with advanced medical equipment and 24/7 critical care nursing.",
//     fullDescription:
//       "Our home ICU setup service brings intensive care unit facilities to your home, providing critical care for patients who require continuous monitoring and advanced medical support. We set up complete ICU infrastructure including ventilators, cardiac monitors, oxygen support, infusion pumps, and other life-saving equipment. Our team of ICU-trained nurses and healthcare professionals provide round-the-clock monitoring and care.",
//     benefits: [
//       "Complete ICU equipment setup",
//       "24/7 ICU-trained nursing staff",
//       "Continuous vital parameter monitoring",
//       "Ventilator support and management",
//       "Oxygen therapy and respiratory care",
//       "Cardiac monitoring and support",
//       "Medication administration and management",
//       "Regular doctor visits and consultations",
//       "Emergency response protocols",
//       "Family can stay with patient",
//       "Reduced hospital infection risk",
//       "Cost-effective compared to hospital ICU",
//     ],
//     features: [
//       "State-of-the-art medical equipment",
//       "Experienced critical care team",
//       "Tie-ups with major hospitals",
//       "Ambulance on standby if needed",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=600&fit=crop",
//     icon: "🏥",
//   },
//   "affordable-home-nursing-facility": {
//     title: "Affordable Home Nursing Facility In Delhi",
//     description:
//       "Quality nursing care at affordable prices, making healthcare accessible to everyone.",
//     fullDescription:
//       "We believe that quality healthcare should be accessible to everyone. Our affordable home nursing facility provides professional medical care at transparent and reasonable prices. We offer various packages and customized care plans to suit different budgets without compromising on the quality of care. Our goal is to make professional nursing care available to all families, regardless of their financial situation.",
//     benefits: [
//       "Transparent and affordable pricing",
//       "No hidden charges",
//       "Flexible payment options",
//       "Multiple care packages available",
//       "Short-term and long-term care options",
//       "Same quality as premium services",
//       "Insurance claim assistance",
//       "Free initial consultation",
//       "Discounts for long-term care",
//       "Family packages available",
//       "EMI options for major procedures",
//       "Government scheme support",
//     ],
//     features: [
//       "Quality care at reasonable cost",
//       "Trained and certified staff",
//       "Regular quality audits",
//       "Patient satisfaction guarantee",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=600&fit=crop",
//     icon: "💰",
//   },
// };

// // Theme for Parth Medicare
// const theme = {
//   primary: "#eab308",
//   secondary: "#f97316",
//   accent: "#fbbf24",
//   dark: "#1f2937",
//   navBg: "bg-gradient-to-r from-[#eab308] to-[#f97316]",
//   buttonBg: "bg-[#eab308] hover:bg-[#f97316]",
// };

// export default function ParthMedicareServiceDetail() {
//   const { serviceSlug } = useParams();

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-out",
//     });
//     window.scrollTo(0, 0);
//   }, [serviceSlug]);

//   const service = serviceDetails[serviceSlug];

//   if (!service) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="text-center">
//           <h1 className="text-4xl  text-gray-800 mb-4">Service Not Found</h1>
//           <Link
//             to="/clinic/parth-medicare"
//             className="text-blue-600 hover:underline text-lg"
//           >
//             Go back to clinic page
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Navbar */}
//       <nav className={`${theme.navBg} text-white shadow-lg sticky top-0 z-50`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20 sm:h-24">
//             <Link
//               to="/clinic/parth-medicare"
//               className="flex items-center gap-3 sm:gap-4"
//             >
//               <img
//                 src={ParthLogo}
//                 alt="Parth Medicare Logo"
//                 className="h-12 sm:h-16 md:h-20 w-auto object-contain bg-white rounded-lg p-2 shadow-md"
//               />
//               <span className="hidden sm:block text-lg md:text-2xl  text-white drop-shadow-lg">
//                 PARTH MEDICARE
//               </span>
//             </Link>
//             <Link to="/contact">
//               <button
//                 className="bg-white px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 rounded-full  text-sm sm:text-base md:text-lg shadow-xl transition-all hover:scale-110 hover:shadow-2xl"
//                 style={{ color: theme.primary }}
//               >
//                 Book Now
//               </button>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//         {/* Breadcrumb */}
//         <div
//           className="mb-6 sm:mb-8 text-xs sm:text-sm text-gray-600"
//           data-aos="fade-down"
//         >
//           <Link to="/clinic/parth-medicare" className="hover:text-[#eab308]">
//             Home
//           </Link>
//           <span className="mx-2">/</span>

//           <span className="text-gray-800">{service.title}</span>
//         </div>

//         {/* Hero Section */}
//         <div className="mb-12 sm:mb-16" data-aos="fade-up">
//           <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-6 sm:mb-8">
//             <img
//               src={service.image}
//               alt={service.title}
//               className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
//             <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
//               <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">
//                 {service.icon}
//               </div>
//               <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  mb-2 sm:mb-3 drop-shadow-lg">
//                 {service.title}
//               </h1>
//               <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 drop-shadow-md">
//                 {service.description}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Service Overview */}
//         <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
//           <div data-aos="fade-right">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl  text-gray-900 mb-4 sm:mb-6">
//               Service Overview
//             </h2>
//             <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
//               {service.fullDescription}
//             </p>

//             <div className="bg-gradient-to-r from-[#eab308] to-[#f97316] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl">
//               <h3 className="text-xl sm:text-2xl  mb-3 sm:mb-4">
//                 Why Choose Us?
//               </h3>
//               <ul className="space-y-2 sm:space-y-3">
//                 {service.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start gap-2 sm:gap-3">
//                     <span className="text-lg sm:text-xl mt-0.5 sm:mt-1">✓</span>
//                     <span className="text-sm sm:text-base">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div data-aos="fade-left">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl  text-gray-900 mb-4 sm:mb-6">
//               Key Benefits
//             </h2>
//             <div className="space-y-3 sm:space-y-4">
//               {service.benefits.map((benefit, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
//                   data-aos="fade-up"
//                   data-aos-delay={idx * 50}
//                 >
//                   <div className="flex items-start gap-3 sm:gap-4">
//                     <div
//                       className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white  text-sm sm:text-base"
//                       style={{ backgroundColor: theme.primary }}
//                     >
//                       {idx + 1}
//                     </div>
//                     <p className="text-sm sm:text-base text-gray-700 pt-1 sm:pt-2">
//                       {benefit}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div
//           className="bg-gradient-to-r from-[#eab308] to-[#f97316] rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl"
//           data-aos="zoom-in"
//         >
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  mb-3 sm:mb-4 md:mb-6">
//             Ready to Get Started?
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
//             Contact us today to schedule your service or to learn more about how
//             we can help you.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <Link to="/contact">
//               <button className="bg-white text-[#eab308] px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full  text-base sm:text-lg md:text-xl shadow-xl hover:scale-110 transition-all w-full sm:w-auto">
//                 Book Appointment
//               </button>
//             </Link>
//             <a href="tel:8076206304">
//               <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full  text-base sm:text-lg md:text-xl hover:bg-white hover:text-[#eab308] transition-all w-full sm:w-auto">
//                 Call: 8076206304
//               </button>
//             </a>
//           </div>
//         </div>

//         {/* Other Services */}
//         <div className="mt-16 sm:mt-20" data-aos="fade-up">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl  text-gray-900 mb-6 sm:mb-8 md:mb-12 text-center">
//             Our Other Services
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {Object.entries(serviceDetails)
//               .filter(([slug]) => slug !== serviceSlug)
//               .map(([slug, otherService], idx) => (
//                 <Link
//                   key={slug}
//                   to={`/clinic/parth-medicare/service/${slug}`}
//                   data-aos="fade-up"
//                   data-aos-delay={idx * 100}
//                 >
//                   <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer">
//                     <div className="h-40 sm:h-48 overflow-hidden">
//                       <img
//                         src={otherService.image}
//                         alt={otherService.title}
//                         className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//                       />
//                     </div>
//                     <div className="p-4 sm:p-6">
//                       <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">
//                         {otherService.icon}
//                       </div>
//                       <h3 className="text-lg sm:text-xl  text-gray-800 mb-2">
//                         {otherService.title}
//                       </h3>
//                       <p className="text-sm sm:text-base text-gray-600">
//                         {otherService.description}
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-[#1f2937] text-white mt-16 sm:mt-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
//             <div>
//               <h3 className="text-xl sm:text-2xl  mb-3 sm:mb-4">
//                 PARTH MEDICARE
//               </h3>
//               <p className="text-sm sm:text-base text-gray-400">
//                 Champions Trust Us, You Can Too
//               </p>
//             </div>
//             <div>
//               <h4 className="text-base sm:text-lg  mb-3 sm:mb-4">
//                 Quick Links
//               </h4>
//               <ul className="space-y-2 text-sm sm:text-base text-gray-400">
//                 <li>
//                   <Link to="/" className="hover:text-white transition-colors">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/clinic/parth-medicare"
//                     className="hover:text-white transition-colors"
//                   >
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/contact"
//                     className="hover:text-white transition-colors"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-base sm:text-lg  mb-3 sm:mb-4">Services</h4>
//               <ul className="space-y-2 text-sm sm:text-base text-gray-400">
//                 <li>Nursing Care</li>
//                 <li>Blood Sample Collection</li>
//                 <li>ICU Setup at Home</li>
//                 <li>Home Healthcare</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-base sm:text-lg  mb-3 sm:mb-4">Contact</h4>
//               <ul className="space-y-2 text-sm sm:text-base text-gray-400">
//                 <li>📞 8076206304</li>
//                 <li>📧 contact@parthmedicare.com</li>
//                 <li>🕒 7am - 9pm</li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-400">
//             <p>&copy; 2025 PARTH MEDICARE. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }





import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ParthLogo from "../../../../assets/ParthLogo.png";
import nursingcare from '../../../../assets/parth/1.png'
import nursinghome from '../../../../assets/parth/2.png'
import bloodsimple from '../../../../assets/parth/3.png'
import bloodsimplehome from '../../../../assets/parth/4.png'
import icu from '../../../../assets/parth/5.png'
import affordable from '../../../../assets/parth/6.png'

// Service Details Data
const serviceDetails = {
  "nursing-care": {
    title: "Best Nursing Care In Delhi",
    description:
      "Comprehensive nursing care services provided by experienced and certified nurses in the comfort of your home.",
    aboutTitle: "About Nursing Care",
    aboutDescription:
      "Nursing care is a professional healthcare service where trained and certified nurses provide medical support and personal care to patients in their homes. It is ideal for elderly individuals, patients recovering from surgery, those with chronic illnesses, or anyone who needs regular medical monitoring. Nursing care includes medication management, wound care, vital signs monitoring, and assistance with daily activities, ensuring patients receive quality care in a comfortable environment.",
    aboutExtended:
      "Our professional nursing care services ensure that patients receive high-quality medical attention at home. Our certified nurses are trained to handle various medical conditions, from post-operative care to chronic disease management. We provide personalized care plans tailored to each patient's unique needs, ensuring comfort, safety, and optimal recovery. At Parth Medicare, we focus on delivering compassionate care that promotes healing and improves quality of life for both patients and their families.",
    benefits: [
      "24/7 professional nursing support",
      "Medication management and administration",
      "Wound care and dressing",
      "Vital signs monitoring",
      "Patient hygiene and personal care",
      "Medical equipment handling",
    ],
    features: [
      "Experienced and certified nurses",
      "Customized care plans",
      "Regular health monitoring",
      "Compassionate and professional care",
    ],
    image:
      nursingcare,
    icon: "👨‍⚕️",
  },
  "home-nursing-care": {
    title: "Best Home Nursing Care Delhi",
    description:
      "Expert nursing care delivered to your doorstep, ensuring comfort and convenience for patients and families.",
    aboutTitle: "About Home Nursing Care",
    aboutDescription:
      "Home nursing care is a service that brings professional medical care directly to your home, making it convenient for patients who cannot visit hospitals regularly. It is especially beneficial for bedridden patients, elderly individuals, and those recovering from major surgeries or illnesses. Home nursing ensures personalized attention, reduces hospital infection risks, and allows patients to recover in the comfort of their own home surrounded by family.",
    aboutExtended:
      "Home nursing care brings professional medical services directly to your home, eliminating the stress of hospital visits. Our nurses provide comprehensive care for elderly patients, post-surgical recovery, chronic illness management, and palliative care. We ensure that patients receive the same quality of care they would receive in a hospital, but in the familiar and comfortable environment of their own home. Parth Medicare is committed to providing exceptional home nursing services that prioritize patient well-being and family peace of mind.",
    benefits: [
      "Personalized one-on-one care",
      "No need for hospital visits",
      "Reduced risk of hospital-acquired infections",
      "Family involvement in care process",
      "Cost-effective compared to hospital stays",
      "Flexible scheduling based on patient needs",
    ],
    features: [
      "Qualified healthcare professionals",
      "Advanced medical equipment at home",
      "Regular doctor consultations",
      "24/7 availability for emergencies",
    ],
    image:
      nursinghome,
    icon: "🏠",
  },
  "blood-sample-collection": {
    title: "Blood Sample Collection",
    description:
      "Safe and hygienic blood sample collection services at your doorstep for all diagnostic tests.",
    aboutTitle: "About Blood Sample Collection",
    aboutDescription:
      "Blood sample collection is a diagnostic service where trained phlebotomists collect blood samples from patients at their homes for various laboratory tests. This service is essential for routine health check-ups, disease diagnosis, and monitoring chronic conditions like diabetes and cholesterol. Home-based blood collection eliminates the need to travel to diagnostic centers, saves time, and is especially helpful for elderly patients, children, and those with mobility issues.",
    aboutExtended:
      "Our blood sample collection service provides a convenient and safe way to get your diagnostic tests done without visiting a laboratory. Our trained phlebotomists use sterile equipment and follow strict hygiene protocols to ensure accurate sample collection. Samples are transported immediately to certified laboratories for analysis, and results are delivered promptly. At Parth Medicare, we prioritize patient comfort and safety, ensuring a seamless and stress-free diagnostic experience.",
    benefits: [
      "Convenient home-based collection",
      "Sterile and safe procedures",
      "Experienced phlebotomists",
      "Quick and painless collection",
      "All types of blood tests available",
      "Immediate lab processing",
    ],
    features: [
      "Early morning collection available",
      "Same-day sample processing",
      "Partnership with certified labs",
      "Complete confidentiality maintained",
    ],
    image:
     bloodsimple,
    icon: "💉",
  },
  "home-blood-sample": {
    title: "Best Home Blood Sample Collection In Delhi",
    description:
      "Professional blood collection service at home for routine check-ups, health screenings, and diagnostic tests.",
    aboutTitle: "About Home Blood Sample Collection",
    aboutDescription:
      "Home blood sample collection brings diagnostic testing to your doorstep, making health monitoring easy and accessible. Whether it's a routine health check-up, pre-operative screening, or monitoring for chronic diseases like diabetes or thyroid disorders, trained professionals collect blood samples at your home at a convenient time. This service is ideal for busy professionals, elderly patients, and families who want to avoid long waits at diagnostic centers.",
    aboutExtended:
      "Our home blood sample collection service makes health monitoring easy and convenient. Whether you need routine blood work, pre-operative tests, or monitoring for chronic conditions, our trained professionals come to your home at your preferred time. We handle all types of blood tests including complete blood count, lipid profile, diabetes screening, liver function tests, kidney function tests, and specialized diagnostics. Parth Medicare ensures accurate sample collection, timely lab processing, and quick delivery of reports for your convenience.",
    benefits: [
      "No waiting in queues at labs",
      "Suitable for elderly and bedridden patients",
      "Children-friendly collection process",
      "Fasting tests done early morning",
      "Multiple family members can be tested",
      "Comprehensive test packages available",
    ],
    features: [
      "Government-certified laboratories",
      "NABL accredited lab partners",
      "Quick turnaround time for results",
      "Online report access",
    ],
    image:
      bloodsimplehome,
    icon: "🩺",
  },
  "icu-setup-facility-at-home": {
    title: "Best ICU Setup Facility at Home In Delhi",
    description:
      "Complete ICU setup at home with advanced medical equipment and 24/7 critical care nursing.",
    aboutTitle: "About ICU Setup at Home",
    aboutDescription:
      "ICU setup at home is a specialized healthcare service that brings intensive care unit facilities to your home for critically ill patients who require continuous monitoring and advanced medical support. This service is ideal for patients recovering from major surgeries, those with severe chronic illnesses, or patients in need of palliative care. Home ICU setup includes ventilators, cardiac monitors, oxygen support, infusion pumps, and round-the-clock nursing care, providing hospital-level care in the comfort of home.",
    aboutExtended:
      "Our home ICU setup service brings intensive care unit facilities to your home, providing critical care for patients who require continuous monitoring and advanced medical support. We set up complete ICU infrastructure including ventilators, cardiac monitors, oxygen support, infusion pumps, and other life-saving equipment. Our team of ICU-trained nurses and healthcare professionals provide round-the-clock monitoring and care. At Parth Medicare, we ensure that patients receive the highest standard of critical care at home, reducing hospital costs while maintaining quality and safety.",
    benefits: [
      "Complete ICU equipment setup",
      "24/7 ICU-trained nursing staff",
      "Continuous vital parameter monitoring",
      "Ventilator support and management",
      "Oxygen therapy and respiratory care",
      "Cardiac monitoring and support",
    ],
    features: [
      "State-of-the-art medical equipment",
      "Experienced critical care team",
      "Tie-ups with major hospitals",
      "Ambulance on standby if needed",
    ],
    image:
      icu,
    icon: "🏥",
  },
  "affordable-home-nursing-facility": {
    title: "Affordable Home Nursing Facility In Delhi",
    description:
      "Quality nursing care at affordable prices, making healthcare accessible to everyone.",
    aboutTitle: "About Affordable Home Nursing",
    aboutDescription:
      "Affordable home nursing is a service that provides high-quality medical care at reasonable and transparent prices, making professional nursing accessible to all. Many families hesitate to hire home nursing due to cost concerns, but with affordable home nursing services, quality healthcare becomes accessible to everyone. This service offers the same level of care as premium services but with flexible payment options, packages, and transparent pricing to suit different budgets.",
    aboutExtended:
      "We believe that quality healthcare should be accessible to everyone. Our affordable home nursing facility provides professional medical care at transparent and reasonable prices. We offer various packages and customized care plans to suit different budgets without compromising on the quality of care. Our goal is to make professional nursing care available to all families, regardless of their financial situation. At Parth Medicare, we are committed to providing compassionate, professional, and affordable healthcare solutions for everyone.",
    benefits: [
      "Transparent and affordable pricing",
      "No hidden charges",
      "Flexible payment options",
      "Multiple care packages available",
      "Short-term and long-term care options",
      "Same quality as premium services",
    ],
    features: [
      "Quality care at reasonable cost",
      "Trained and certified staff",
      "Regular quality audits",
      "Patient satisfaction guarantee",
    ],
    image:
    affordable,
    icon: "💰",
  },
};

// Theme for Parth Medicare
const theme = {
  primary: "#eab308",
  secondary: "#f97316",
  accent: "#fbbf24",
  dark: "#1f2937",
  navBg: "bg-gradient-to-r from-[#eab308] to-[#f97316]",
  buttonBg: "bg-[#eab308] hover:bg-[#f97316]",
};

export default function ParthMedicareServiceDetail() {
  const { serviceSlug } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  const service = serviceDetails[serviceSlug];

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <Link
            to="/clinic/parth-medicare"
            className="text-blue-600 hover:underline text-lg"
          >
            Go back to clinic page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navbar */}
      <nav className={`${theme.navBg} text-white shadow-lg sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
            <Link
              to="/clinic/parth-medicare"
              className="flex items-center gap-2 sm:gap-3 flex-shrink min-w-0"
            >
              <img
                src={ParthLogo}
                alt="Parth Medicare Logo"
                className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain bg-white rounded-md sm:rounded-lg p-1 sm:p-2 shadow-md flex-shrink-0"
              />
              <span className="hidden sm:block text-sm md:text-xl lg:text-2xl font-bold text-white drop-shadow-lg truncate">
                PARTH MEDICARE
              </span>
            </Link>
            <Link to="/contact" className="flex-shrink-0">
              <button
                className="bg-white px-3 py-2 sm:px-5 sm:py-2.5 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                style={{ color: theme.primary }}
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Hero Section - Image and Title */}
        {/* <div className="mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
          <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3">
                {service.icon}
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 md:mb-3 drop-shadow-lg leading-tight">
                {service.title}
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-100 drop-shadow-md leading-snug">
                {service.description}
              </p>
            </div>
          </div>
        </div> */}

        {/* About Section with Image - NEW LAYOUT */}
        <div className="mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left - Image */}
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  src={service.image}
                  alt={service.aboutTitle}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right - Content */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-yellow-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {service.aboutTitle}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  {service.aboutDescription}
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {service.aboutExtended}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section - GRID LAYOUT */}
        <div className="mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Key Benefits
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-yellow-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-snug">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div
          className={`${theme.navBg} rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center text-white shadow-xl sm:shadow-2xl mb-8 sm:mb-12 md:mb-16`}
          data-aos="zoom-in"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Contact us today to schedule your service or to learn more about how we can help you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2">
            <a href="tel:8076206304" className="w-full sm:w-auto">
              <button
                className="w-full bg-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                style={{ color: theme.primary }}
              >
                Call: 8076206304
              </button>
            </a>

            <a
              href="https://wa.me/918076206304"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full bg-[#25D366] text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
                WhatsApp
              </button>
            </a>
          </div>
        </div> */}

        {/* Other Services */}
        <div data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center">
            Our Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {Object.entries(serviceDetails)
              .filter(([slug]) => slug !== serviceSlug)
              .map(([slug, otherService], idx) => (
                <Link
                  key={slug}
                  to={`/clinic/parth-medicare/service/${slug}`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                  className="block"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden h-full">
                    <div className="h-36 sm:h-40 md:h-48 overflow-hidden">
                      <img
                        src={otherService.image}
                        alt={otherService.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3 sm:p-4 md:p-6">
                      <div className="text-2xl sm:text-3xl md:text-4xl mb-1.5 sm:mb-2 md:mb-3">
                        {otherService.icon}
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-1.5 md:mb-2 leading-snug">
                        {otherService.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-snug line-clamp-2">
                        {otherService.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1f2937] text-white mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                PARTH MEDICARE
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">
                Champions Trust Us, You Can Too
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 md:mb-4">
                Quick Links
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-400">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/clinic/parth-medicare"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 md:mb-4">Services</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-400">
                <li>Nursing Care</li>
                <li>Blood Sample Collection</li>
                <li>ICU Setup at Home</li>
                <li>Home Healthcare</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 md:mb-4">Contact</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-400">
                <li>📞 8076206304</li>
                <li className="break-all">📧 contact@parthmedicare.com</li>
                <li>🕒 7am - 9pm</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-4 sm:pt-6 md:pt-8 text-center text-xs sm:text-sm md:text-base text-gray-400">
            <p>&copy; 2025 PARTH MEDICARE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}