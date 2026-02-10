// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { MapPin, Phone, Clock, Star, ArrowRight } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Yeh image ko tumhare assets se import karna hai
// const Sharma =
//   "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=600&fit=crop";

// // Complete Location Data - Sabhi areas ka data
// const locationData = {
//   badarpur: {
//     name: "Badarpur",
//     title: "Best Physiotherapist in Badarpur",
//     description:
//       "Expert physiotherapy and rehabilitation services in Badarpur with state-of-the-art facilities.",
//     nearbyAreas: [
//       "Jaitpur",
//       "Tughlakabad",
//       "Molarband",
//       "Sarita Vihar",
//       "Railway Colony",
//       "Jasola",
//       "Meethapur",
//       "Pehladpur",
//       "Tajpur Pahadi",
//     ],
//   },
//   jaitpur: {
//     name: "Jaitpur",
//     title: "Best Physiotherapist in Jaitpur",
//     description:
//       "Professional physiotherapy services serving Jaitpur with personalized treatment plans.",
//     parentLocation: "Badarpur",
//     nearbyAreas: ["Badarpur", "Tughlakabad", "Molarband", "Sarita Vihar"],
//   },
//   tughlakabad: {
//     name: "Tughlakabad",
//     title: "Best Physiotherapist in Tughlakabad",
//     description:
//       "Comprehensive physiotherapy and pain management services for Tughlakabad residents.",
//     parentLocation: "Badarpur",
//     nearbyAreas: ["Badarpur", "Jaitpur", "Molarband", "Govindpuri"],
//   },
//   molarband: {
//     name: "Molarband",
//     title: "Best Physiotherapist in Molarband",
//     description:
//       "Advanced physiotherapy treatments and rehabilitation services for Molarband community.",
//     parentLocation: "Badarpur",
//     nearbyAreas: ["Badarpur", "Jaitpur", "Tughlakabad", "Sarita Vihar"],
//   },
//   "sarita-vihar": {
//     name: "Sarita Vihar",
//     title: "Best Physiotherapist in Sarita Vihar",
//     description:
//       "Expert physiotherapy care and rehabilitation for Sarita Vihar residents.",
//     parentLocation: "Badarpur",
//     nearbyAreas: ["Badarpur", "Jaitpur", "Molarband", "Jasola"],
//   },
//   "railway-colony": {
//     name: "Railway Colony",
//     title: "Best Physiotherapist in Railway Colony",
//     description: "Quality physiotherapy services for Railway Colony area.",
//     parentLocation: "Badarpur",
//     nearbyAreas: ["Badarpur", "Jaitpur", "Molarband"],
//   },
//   jasola: {
//     name: "Jasola",
//     title: "Best Physiotherapist in Jasola",
//     description:
//       "Premium physiotherapy and orthopedic care for Jasola residents.",
//     parentLocation: "Badarpur",
//     nearbyAreas: ["Badarpur", "Sarita Vihar", "Molarband"],
//   },
//   meethapur: {
//     name: "Meethapur",
//     title: "Best Physiotherapist in Meethapur",
//     description: "Specialized physiotherapy treatments for Meethapur.",
//     parentLocation: "Badarpur",
//     nearbyAreas: ["Badarpur", "Jaitpur", "Tughlakabad"],
//   },
//   pehladpur: {
//     name: "Pehladpur",
//     title: "Best Physiotherapist in Pehladpur",
//     description: "Trusted physiotherapy services for Pehladpur.",
//     parentLocation: "Badarpur",
//     nearbyAreas: ["Badarpur", "Jaitpur", "Molarband"],
//   },
//   "tajpur-pahadi": {
//     name: "Tajpur Pahadi",
//     title: "Best Physiotherapist in Tajpur Pahadi",
//     description: "Comprehensive physiotherapy solutions for Tajpur Pahadi.",
//     parentLocation: "Badarpur",
//     nearbyAreas: ["Badarpur", "Jaitpur", "Tughlakabad"],
//   },
//   faridabad: {
//     name: "Faridabad",
//     title: "Best Physiotherapist in Faridabad",
//     description: "Top-rated physiotherapy services in Faridabad.",
//     nearbyAreas: [
//       "Sector 15",
//       "Sector 16",
//       "NIT",
//       "Old Faridabad",
//       "Ballabhgarh",
//       "Badarpur Border",
//     ],
//   },
// };

// // Clinic Data - Same for all locations
// const clinicData = {
//   name: "Sharma Orthopedic and Rehab Centre",
//   slug: "sharma-orthopedic-rehab-centre",
//   rating: 4.9,
//   tagline: "Your Partner in Complete Recovery",
//   specialty: "Specialized Spine & Back Pain Treatment",
//   address:
//     "G 243 40 Feet Road, Near Aggarwal Medical Store, Badarpur, New Delhi 110044",
//   phone: "9220385419",
//   hours: "8am To 10pm",
//   mapLink:
//     "https://www.google.com/maps/search/?api=1&query=Sharma+Orthopedic+Rehab+Center+G+241+40+Feet+Road+Badarpur+Delhi",
//   services: [
//     {
//       name: "Best Chiropractor",
//       image:
//         "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
//     },
//     {
//       name: "Best Physiotherapy Center",
//       image:
//         "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
//     },
//     {
//       name: "Best Back Pain Treatment",
//       image:
//         "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
//     },
//     {
//       name: "Best Sciatica Pain Treatment",
//       image:
//         "https://images.unsplash.com/photo-1591343395902-bde56a500d08?w=400&h=300&fit=crop",
//     },
//     {
//       name: "Best Slip Disc Treatment",
//       image:
//         "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
//     },
//     {
//       name: "Best Knee Pain Treatment",
//       image:
//         "https://images.unsplash.com/photo-1594737625785-1d87f6fc4014?w=400&h=300&fit=crop",
//     },
//     {
//       name: "Best Cervical Pain Treatment",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
//     },
//     {
//       name: "Best Shoulder Pain Treatment",
//       image:
//         "https://images.unsplash.com/photo-1584516509347-e49e0c71c58d?w=400&h=300&fit=crop",
//     },
//     {
//       name: "Best Arthritis Treatment",
//       image:
//         "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop",
//     },
//   ],
// };

// // Nearby Areas Slider Component
// const NearbyAreasSlider = ({ areas, currentLocation }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 6;
//   const totalPages = Math.ceil(areas.length / itemsPerPage);
//   const slideDuration = 4000;

//   useEffect(() => {
//     if (totalPages > 1) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % totalPages);
//       }, slideDuration);
//       return () => clearInterval(interval);
//     }
//   }, [totalPages]);

//   const visibleAreas = areas.slice(
//     currentIndex * itemsPerPage,
//     (currentIndex + 1) * itemsPerPage,
//   );

//   return (
//     <div
//       className="bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-16"
//       data-aos="fade-up"
//     >
//       <h3 className="text-3xl md:text-4xl  text-gray-900 mb-8 text-center">
//         We Also Serve Nearby Areas
//       </h3>

//       <div className="relative">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//           {visibleAreas.map((area, idx) => {
//             const areaSlug = area.toLowerCase().replace(/\s+/g, "-");
//             return (
//               <Link
//                 key={idx}
//                 to={`/location/${areaSlug}`}
//                 data-aos="zoom-in"
//                 data-aos-delay={idx * 50}
//               >
//                 <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center text-gray-700  hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all cursor-pointer hover:scale-105 shadow-md hover:shadow-xl">
//                   {area}
//                 </div>
//               </Link>
//             );
//           })}
//         </div>

//         {totalPages > 1 && (
//           <div className="flex justify-center gap-3 mt-8">
//             {Array.from({ length: totalPages }).map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentIndex(idx)}
//                 className={`w-3 h-3 rounded-full transition-all ${
//                   currentIndex === idx
//                     ? "bg-blue-600 w-8"
//                     : "bg-gray-300 hover:bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Main Component
// export default function LocationDetailPage() {
//   const { slug } = useParams();
//   const locationSlug = slug || "badarpur";
//   const location = locationData[locationSlug];
//   const [showAllServices, setShowAllServices] = useState(false);

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 100,
//     });
//   }, []);

//   if (!location) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="text-center">
//           <h1 className="text-4xl  text-gray-800 mb-4">Location Not Found</h1>
//           <Link to="/" className="text-blue-600 hover:underline text-lg">
//             Go back to home
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Banner */}
//       <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link
//             to="/"
//             className="inline-flex items-center gap-2 text-white hover:text-blue-100 mb-6 transition-colors group"
//             data-aos="fade-right"
//           >
//             <svg
//               className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M10 19l-7-7m0 0l7-7m-7 7h18"
//               />
//             </svg>
//             <span className="">Back to Home</span>
//           </Link>

//           <div className="flex items-center gap-3 mb-4" data-aos="fade-down">
//             <MapPin className="w-10 h-10" />
//             <h1 className="text-4xl md:text-5xl ">{location.title}</h1>
//           </div>
//           <p
//             className="text-xl text-blue-100"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             {location.description}
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Clinic Section */}
//         <div className="mb-16">
//           {/* Hero Section */}
//           <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
//             <div data-aos="fade-right">
//               <div className="flex items-center gap-2 mb-3">
//                 <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
//                 <span className="text-2xl  text-gray-900">
//                   {clinicData.rating}
//                 </span>
//                 <span className="text-gray-600">Rating</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl  text-gray-900 mb-4">
//                 {clinicData.name}
//               </h2>
//               <p className="text-xl md:text-2xl text-blue-600 mb-6">
//                 {clinicData.tagline}
//               </p>
//               <p className="text-lg text-gray-700 mb-8">
//                 {clinicData.specialty}
//               </p>

//               <Link to="/contact">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg  shadow-lg hover:shadow-xl transition-all hover:scale-105">
//                   Book Appointment Now
//                 </button>
//               </Link>
//             </div>

//             <div data-aos="fade-left">
//               <img
//                 src={Sharma}
//                 alt={clinicData.name}
//                 className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-2xl"
//               />
//             </div>
//           </div>

//           {/* Contact Info Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//             <div
//               className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
//               data-aos="zoom-in"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
//                   <MapPin className="w-7 h-7 text-white" />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <h3 className="text-xl  text-gray-900 mb-2">Address</h3>
//                   <a
//                     href={clinicData.mapLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-600 hover:text-blue-600 hover:underline break-words"
//                   >
//                     {clinicData.address}
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
//               data-aos="zoom-in"
//               data-aos-delay="100"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
//                   <Phone className="w-7 h-7 text-white" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-xl  text-gray-900 mb-2">Phone</h3>
//                   <a
//                     href={`tel:${clinicData.phone}`}
//                     className="text-gray-600 hover:text-blue-600 hover:underline text-xl "
//                   >
//                     {clinicData.phone}
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
//               data-aos="zoom-in"
//               data-aos-delay="200"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
//                   <Clock className="w-7 h-7 text-white" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-xl  text-gray-900 mb-2">Hours</h3>
//                   <p className="text-gray-600 text-xl ">{clinicData.hours}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Services Section */}
//           <div
//             className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12"
//             data-aos="fade-up"
//           >
//             <h3 className="text-3xl md:text-4xl  text-gray-900 mb-8 text-center">
//               Our Services
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {(showAllServices
//                 ? clinicData.services
//                 : clinicData.services.slice(0, 6)
//               ).map((service, idx) => {
//                 const serviceSlug = service.name
//                   .toLowerCase()
//                   .replace(/\s+/g, "-")
//                   .replace(/[^\w-]/g, "");
//                 return (
//                   <Link
//                     key={idx}
//                     to={`/clinic/${clinicData.slug}/service/${serviceSlug}`}
//                     data-aos="zoom-in"
//                     data-aos-delay={idx * 50}
//                   >
//                     <div className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
//                       <div className="h-48 overflow-hidden">
//                         <img
//                           src={service.image}
//                           alt={service.name}
//                           className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//                         />
//                       </div>
//                       <div className="p-5">
//                         <h3 className="text-lg text-gray-800 text-center ">
//                           {service.name}
//                         </h3>
//                       </div>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>

//             {clinicData.services.length > 6 && (
//               <div className="text-center mt-8">
//                 <button
//                   onClick={() => setShowAllServices(!showAllServices)}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg  shadow-lg transition-all hover:scale-105"
//                 >
//                   {showAllServices
//                     ? "View Less Services"
//                     : "View More Services"}
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Nearby Areas Slider */}
//         <NearbyAreasSlider
//           areas={location.nearbyAreas}
//           currentLocation={location.name}
//         />
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";
import { MapPin, Phone, Clock, Star, ArrowLeft } from "lucide-react";

// Complete Location Data with detailed information for each area
const locationData = {
  badarpur: {
    name: "Badarpur",
    title: "Best Physiotherapist in Badarpur",
    description: "Expert physiotherapy and rehabilitation services in Badarpur with state-of-the-art facilities.",
    detailedInfo: "Badarpur is a major residential and commercial hub in South Delhi. Our clinic serves thousands of patients with advanced physiotherapy treatments, offering specialized care for spine, joints, and sports injuries.",
    nearbyAreas: ["Jaitpur", "Tughlakabad", "Molarband", "Sarita Vihar", "Railway Colony", "Jasola", "Meethapur", "Pehladpur", "Tajpur Pahadi"],
    landmarks: ["Badarpur Metro Station", "Aggarwal Medical Store", "40 Feet Road", "Badarpur Border"],
  },
  jaitpur: {
    name: "Jaitpur",
    title: "Best Physiotherapist in Jaitpur",
    description: "Professional physiotherapy services serving Jaitpur with personalized treatment plans.",
    detailedInfo: "Jaitpur residents can access comprehensive physiotherapy care just minutes away. We specialize in treating chronic pain, sports injuries, and post-operative rehabilitation with evidence-based treatments.",
    parentLocation: "Badarpur",
    nearbyAreas: ["Badarpur", "Tughlakabad", "Molarband", "Sarita Vihar"],
    landmarks: ["Jaitpur Extension", "Jaitpur Village", "Main Market"],
  },
  tughlakabad: {
    name: "Tughlakabad",
    title: "Best Physiotherapist in Tughlakabad",
    description: "Comprehensive physiotherapy and pain management services for Tughlakabad residents.",
    detailedInfo: "Located near the historic Tughlakabad Fort area, our clinic provides modern physiotherapy solutions for residents. We focus on holistic healing and long-term pain management.",
    parentLocation: "Badarpur",
    nearbyAreas: ["Badarpur", "Jaitpur", "Molarband", "Govindpuri"],
    landmarks: ["Tughlakabad Fort", "Tughlakabad Metro Station", "Tughlakabad Extension"],
  },
  molarband: {
    name: "Molarband",
    title: "Best Physiotherapist in Molarband",
    description: "Advanced physiotherapy treatments and rehabilitation services for Molarband community.",
    detailedInfo: "Molarband patients benefit from our proximity and specialized treatment protocols. We offer customized rehabilitation programs for all age groups, from children to elderly patients.",
    parentLocation: "Badarpur",
    nearbyAreas: ["Badarpur", "Jaitpur", "Tughlakabad", "Sarita Vihar"],
    landmarks: ["Molarband Extension", "Community Center", "Local Market"],
  },
  "sarita-vihar": {
    name: "Sarita Vihar",
    title: "Best Physiotherapist in Sarita Vihar",
    description: "Expert physiotherapy care and rehabilitation for Sarita Vihar residents.",
    detailedInfo: "Serving the well-established Sarita Vihar community with premium physiotherapy services. Our clinic is easily accessible and offers flexible appointment timings for working professionals.",
    parentLocation: "Badarpur",
    nearbyAreas: ["Badarpur", "Jaitpur", "Molarband", "Jasola"],
    landmarks: ["Sarita Vihar Metro Station", "DDA Flats", "Apollo Hospital nearby"],
  },
  "railway-colony": {
    name: "Railway Colony",
    title: "Best Physiotherapist in Railway Colony",
    description: "Quality physiotherapy services for Railway Colony area.",
    detailedInfo: "Dedicated physiotherapy care for Railway Colony residents with focus on occupational health and ergonomic solutions. We understand the unique needs of railway employees and their families.",
    parentLocation: "Badarpur",
    nearbyAreas: ["Badarpur", "Jaitpur", "Molarband"],
    landmarks: ["Railway Colony Badarpur", "Railway Quarters", "Community Hall"],
  },
  jasola: {
    name: "Jasola",
    title: "Best Physiotherapist in Jasola",
    description: "Premium physiotherapy and orthopedic care for Jasola residents.",
    detailedInfo: "Jasola residents have access to top-tier physiotherapy treatments combining traditional techniques with modern technology. We specialize in sports medicine and workplace injury rehabilitation.",
    parentLocation: "Badarpur",
    nearbyAreas: ["Badarpur", "Sarita Vihar", "Molarband"],
    landmarks: ["Jasola Metro Station", "Jasola Vihar", "Apollo Hospital"],
  },
  meethapur: {
    name: "Meethapur",
    title: "Best Physiotherapist in Meethapur",
    description: "Specialized physiotherapy treatments for Meethapur.",
    detailedInfo: "Providing accessible and affordable physiotherapy care to the Meethapur community. Our treatments include manual therapy, electrotherapy, and personalized exercise programs.",
    parentLocation: "Badarpur",
    nearbyAreas: ["Badarpur", "Jaitpur", "Tughlakabad"],
    landmarks: ["Meethapur Extension", "Local Market", "Community Center"],
  },
  pehladpur: {
    name: "Pehladpur",
    title: "Best Physiotherapist in Pehladpur",
    description: "Trusted physiotherapy services for Pehladpur.",
    detailedInfo: "Expert physiotherapy care for Pehladpur residents focusing on pain relief and functional restoration. We treat all musculoskeletal conditions with advanced therapeutic techniques.",
    parentLocation: "Badarpur",
    nearbyAreas: ["Badarpur", "Jaitpur", "Molarband"],
    landmarks: ["Pehladpur Village", "Main Road", "Local Temple"],
  },
  "tajpur-pahadi": {
    name: "Tajpur Pahadi",
    title: "Best Physiotherapist in Tajpur Pahadi",
    description: "Comprehensive physiotherapy solutions for Tajpur Pahadi.",
    detailedInfo: "Serving Tajpur Pahadi with dedicated physiotherapy services including neurological rehabilitation, geriatric care, and pediatric physiotherapy. We're committed to improving quality of life.",
    parentLocation: "Badarpur",
    nearbyAreas: ["Badarpur", "Jaitpur", "Tughlakabad"],
    landmarks: ["Tajpur Pahadi", "Village Road", "Community Center"],
  },
  faridabad: {
    name: "Faridabad",
    title: "Best Physiotherapist in Faridabad",
    description: "Top-rated physiotherapy services in Faridabad with advanced treatment facilities.",
    detailedInfo: "Faridabad's premier physiotherapy center offering comprehensive rehabilitation services. We combine cutting-edge technology with experienced therapists to deliver exceptional results for patients across all Faridabad sectors.",
    nearbyAreas: ["Sector 15", "Sector 16", "NIT Faridabad", "Old Faridabad", "Ballabhgarh", "Badarpur Border", "New Industrial Town"],
    landmarks: ["Bata Chowk", "Nehru Ground", "YMCA", "Faridabad Railway Station", "Metro Station"],
  },
  "sector-15": {
    name: "Sector 15",
    title: "Best Physiotherapist in Sector 15 Faridabad",
    description: "Expert physiotherapy care for Sector 15 residents.",
    detailedInfo: "Conveniently located near Sector 15, we provide specialized physiotherapy treatments for residents. Our clinic offers personalized care plans focusing on quick recovery and long-term wellness.",
    parentLocation: "Faridabad",
    nearbyAreas: ["Faridabad", "Sector 16", "NIT Faridabad", "Old Faridabad"],
    landmarks: ["Sector 15 Market", "Community Center", "Main Road"],
  },
  "sector-16": {
    name: "Sector 16",
    title: "Best Physiotherapist in Sector 16 Faridabad",
    description: "Professional physiotherapy services in Sector 16 Faridabad.",
    detailedInfo: "Serving Sector 16 with advanced physiotherapy solutions including sports injury rehabilitation, post-surgical care, and chronic pain management. Our team is dedicated to your complete recovery.",
    parentLocation: "Faridabad",
    nearbyAreas: ["Faridabad", "Sector 15", "NIT Faridabad", "Ballabhgarh"],
    landmarks: ["Sector 16 Market", "Metro Station Nearby", "Parks"],
  },
  "nit-faridabad": {
    name: "NIT Faridabad",
    title: "Best Physiotherapist in NIT Faridabad",
    description: "Comprehensive physiotherapy care for NIT area residents.",
    detailedInfo: "NIT (New Industrial Town) residents benefit from our proximity and expertise. We specialize in workplace injury rehabilitation, ergonomic solutions, and preventive physiotherapy for industrial workers and office professionals.",
    parentLocation: "Faridabad",
    nearbyAreas: ["Faridabad", "Sector 15", "Sector 16", "Old Faridabad"],
    landmarks: ["NIT Market", "Industrial Area", "Housing Complex"],
  },
  "old-faridabad": {
    name: "Old Faridabad",
    title: "Best Physiotherapist in Old Faridabad",
    description: "Trusted physiotherapy services in Old Faridabad.",
    detailedInfo: "Serving the Old Faridabad community with time-tested physiotherapy methods combined with modern techniques. We focus on holistic healing and patient-centered care for all age groups.",
    parentLocation: "Faridabad",
    nearbyAreas: ["Faridabad", "NIT Faridabad", "Ballabhgarh", "Sector 15"],
    landmarks: ["Old Faridabad Market", "Railway Road", "Bus Stand"],
  },
  ballabhgarh: {
    name: "Ballabhgarh",
    title: "Best Physiotherapist in Ballabhgarh",
    description: "Quality physiotherapy treatments for Ballabhgarh residents.",
    detailedInfo: "Ballabhgarh's trusted physiotherapy center offering specialized treatments for musculoskeletal disorders, neurological conditions, and sports injuries. We're committed to restoring your mobility and quality of life.",
    parentLocation: "Faridabad",
    nearbyAreas: ["Faridabad", "Sector 16", "Old Faridabad", "Badarpur Border"],
    landmarks: ["Ballabhgarh Fort", "Main Market", "Metro Station"],
  },
  "badarpur-border": {
    name: "Badarpur Border",
    title: "Best Physiotherapist near Badarpur Border",
    description: "Convenient physiotherapy services near Badarpur Border.",
    detailedInfo: "Strategically located near Badarpur Border, our clinic serves patients from both Delhi and Faridabad. We offer flexible timings and comprehensive physiotherapy solutions for border area residents.",
    parentLocation: "Faridabad",
    nearbyAreas: ["Badarpur", "Faridabad", "Ballabhgarh", "Jaitpur"],
    landmarks: ["Border Check Post", "Highway", "Local Market"],
  },
};

// Clinic Data
const clinicData = {
  name: "Sharma Orthopedic and Rehab Centre",
  rating: 4.9,
  tagline: "Your Partner in Complete Recovery",
  specialty: "Specialized Spine & Back Pain Treatment",
  address: "G 243 40 Feet Road, Near Aggarwal Medical Store, Badarpur, New Delhi 110044",
  phone: "9220385419",
  hours: "8am To 10pm",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Sharma+Orthopedic+Rehab+Center+G+241+40+Feet+Road+Badarpur+Delhi",
  services: [
    { name: "Best Chiropractor", icon: "🦴" },
    { name: "Best Physiotherapy Center", icon: "💪" },
    { name: "Best Back Pain Treatment", icon: "🔙" },
    { name: "Best Sciatica Pain Treatment", icon: "⚡" },
    { name: "Best Slip Disc Treatment", icon: "💿" },
    { name: "Best Knee Pain Treatment", icon: "🦵" },
    { name: "Best Cervical Pain Treatment", icon: "🧘" },
    { name: "Best Shoulder Pain Treatment", icon: "💪" },
    { name: "Best Arthritis Treatment", icon: "🩺" },
  ],
  features: [
    "Advanced Equipment & Technology",
    "Experienced Physiotherapists",
    "Personalized Treatment Plans",
    "Post-Surgery Rehabilitation",
    "Sports Injury Management",
    "Geriatric Care Programs"
  ]
};

// Main App Component
export default function LocationDetailApp() {
  const [currentLocation, setCurrentLocation] = useState("badarpur");
  const [showAllServices, setShowAllServices] = useState(false);

  const location = locationData[currentLocation];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentLocation]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">
              Sharma Orthopedic & Rehab
            </h1>
            <a 
              href={`tel:${clinicData.phone}`}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Location Selector */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Select Your Location</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {Object.keys(locationData).map((key) => (
              <button
                key={key}
                onClick={() => setCurrentLocation(key)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  currentLocation === key
                    ? "bg-white text-blue-600 shadow-lg scale-105"
                    : "bg-blue-700 hover:bg-blue-600 text-white"
                }`}
              >
                {locationData[key].name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {location.title}
            </h1>
          </div>
          <p className="text-xl text-gray-700 mb-4">{location.description}</p>
          <p className="text-lg text-gray-600">{location.detailedInfo}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Clinic Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Clinic Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              <span className="text-2xl font-bold text-gray-900">{clinicData.rating}</span>
              <span className="text-gray-600">Rating</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {clinicData.name}
            </h2>
            <p className="text-xl text-blue-600 mb-4 font-semibold">
              {clinicData.tagline}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              {clinicData.specialty}
            </p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              Book Appointment Now
            </button>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                  <a
                    href={clinicData.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 hover:underline"
                  >
                    {clinicData.address}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                  <a
                    href={`tel:${clinicData.phone}`}
                    className="text-gray-600 hover:text-blue-600 hover:underline text-xl font-semibold"
                  >
                    {clinicData.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
                  <p className="text-gray-600 text-xl font-semibold">{clinicData.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Landmarks */}
        {location.landmarks && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nearby Landmarks in {location.name}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {location.landmarks.map((landmark, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center"
                >
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-gray-700 font-medium">{landmark}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllServices ? clinicData.services : clinicData.services.slice(0, 6)).map(
              (service, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border border-blue-100"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800">{service.name}</h4>
                </div>
              )
            )}
          </div>
          {clinicData.services.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all"
              >
                {showAllServices ? "View Less Services" : "View More Services"}
              </button>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clinicData.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <p className="font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Areas */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            We Also Serve Nearby Areas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {location.nearbyAreas.map((area, idx) => {
              const areaSlug = area.toLowerCase().replace(/\s+/g, "-");
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentLocation(areaSlug)}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center text-gray-700 font-medium hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all hover:scale-105 shadow-md"
                >
                  {area}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Recovery Journey?</h2>
          <p className="text-xl mb-6">
            Book your appointment today and experience expert physiotherapy care
          </p>
          <a
            href={`tel:${clinicData.phone}`}
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Call {clinicData.phone}
          </a>
        </div>
      </div>
    </div>
  );
}