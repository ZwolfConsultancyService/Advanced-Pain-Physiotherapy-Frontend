// // import React, { useState, useRef, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import {
// //   Menu,
// //   X,
// //   Facebook,
// //   Instagram,
// //   Phone,
// //   Mail,
// //   MapPin,
// //   ChevronDown,
// // } from "lucide-react";
// // import Logo from "../../assets/Logo.jpeg";

// // export default function Navbar() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [openDropdown, setOpenDropdown] = useState(null);
// //   const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
// //   const [isDropdownPinned, setIsDropdownPinned] = useState(false);
// //   const dropdownRef = useRef(null);
// //   const navigate = useNavigate();

// //   const handleLocationClick = (e) => {
// //     e.preventDefault();

// //     if (window.location.pathname === "/") {
// //       const citySection = document.getElementById("city-navigation");
// //       if (citySection) {
// //         citySection.scrollIntoView({ behavior: "smooth", block: "start" });
// //       }
// //     } else {
// //       navigate("/");
// //       setTimeout(() => {
// //         const citySection = document.getElementById("city-navigation");
// //         if (citySection) {
// //           citySection.scrollIntoView({ behavior: "smooth", block: "start" });
// //         }
// //       }, 100);
// //     }

// //     setIsMenuOpen(false);
// //   };

// //   // Close dropdown when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setOpenDropdown(null);
// //         setIsDropdownPinned(false);
// //       }
// //     };

// //     if (openDropdown) {
// //       document.addEventListener("mousedown", handleClickOutside);
// //     }

// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, [openDropdown]);

// //   // Helper function to convert service name to slug
// //   const convertToSlug = (text) => {
// //     // Remove "Treatment", "Rehabilitation", "Therapy" etc from the end
// //     const cleanedText = text
// //       .replace(
// //         /\s+(Treatment|Rehabilitation|Therapy|Care|Relief|Adjustment|Management|Exercises)$/i,
// //         "",
// //       )
// //       .trim();

// //     return cleanedText
// //       .toLowerCase()
// //       .replace(/\s+/g, "-")
// //       .replace(/[^a-z0-9-]/g, "");
// //   };

// //   const serviceCategories = [
// //     {
// //       name: "Orthopedic Rehabilitation",
// //       items: [
// //         "Back Pain Treatment",
// //         "Knee Pain Treatment",
// //         "Shoulder Pain Treatment",
// //         "Elbow Pain Treatment",
// //         "Hip Pain Treatment",
// //         "Wrist Pain Treatment",
// //         "Foot Pain Treatment",
// //         "Muscles Pain Treatment",
// //         "Neck Pain Treatment",
// //         "After Accident Pain Treatment",
// //         "Frozen Shoulder Treatment",
// //         "Arthritis Pain Treatment",
// //         "Osteoarthritis Pain Treatment",
// //         "Carpal Tunnel Syndrome Treatment",
// //       ],
// //     },
// //     {
// //       name: "Neurological Rehabilitation",
// //       items: [
// //         "Myasthenia Gravis Treatment",
// //         "Alzheimer's Treatment",
// //         "Stroke Treatment",
// //         "Paralysis Treatment",
// //         "Epilepsy Treatment",
// //         "Meningitis Treatment",
// //         "Spinal Cord Injury Rehabilitation",
// //         "Diabetic Neuropathy Treatment",
// //         "Encephalitis Treatment",
// //         "Sciatica Pain Treatment",
// //         "Slip Disc Pain Treatment",
// //         "Cervical Spondylitis Treatment",
// //         "Parkinson's Treatment",
// //       ],
// //     },
// //     {
// //       name: "Sports Rehabilitation",
// //       items: [
// //         "Golfer's Elbow Treatment",
// //         "Student Elbow Treatment",
// //         "Ligament Injury Rehabilitation",
// //         "ACL Injury Rehabilitation",
// //         "MCL Injury Rehabilitation",
// //         "PCL Injury Rehabilitation",
// //         "Meniscus Injury Rehabilitation",
// //         "Patella Mobilization Therapy",
// //         "Shoulder Ligament Sports Massage",
// //         "Performance Enhancing Treatment",
// //         "Sprain Ligament Treatment",
// //         "Strain Injury Rehabilitation",
// //         "Muscle Spasm Treatment",
// //         "Muscle Stiffness Treatment",
// //       ],
// //     },
// //     {
// //       name: "Lymphatic Massage",
// //       items: [
// //         "Lymphatic Massage after Liposuction",
// //         "Lymphatic Massage after Tummy Tuck",
// //         "Lymphatic Massage after Gynaecomastia",
// //         "Lymphatic Massage after Fat Grafting",
// //         "Lymphatic Massage after BBL",
// //         "Lymphatic Massage after Mummy Makeover",
// //         "Lymphatic Massage after Arm Liposuction",
// //         "Lymphatic Massage after Thigh Liposuction",
// //       ],
// //     },
// //     {
// //       name: "Chiropractic Treatment",
// //       items: [
// //         "Spinal Adjustment",
// //         "Shoulder Adjustment",
// //         "Neck Adjustment",
// //         "Elbow Adjustment",
// //         "Hip Adjustment",
// //         "Tail Bone Adjustment",
// //         "Wrist and Ankle Adjustment",
// //         "Muscle Stiffness Adjustment",
// //         "Soft Tissue Adjustment",
// //         "Spine Alignment Therapy",
// //         "Back Pain Chiropractic Care",
// //         "Neck Pain Adjustment",
// //         "Sciatica Pain Relief",
// //         "Posture Correction Therapy",
// //         "Joint Mobilization Treatment",
// //         "Slip Disc Chiropractic Care",
// //         "Sports Injury Chiropractic Treatment",
// //         "Chronic Pain Management",
// //         "Corrective Chiropractic Exercises",
// //       ],
// //     },
// //     {
// //       name: "Home Physiotherapy Rehabilitation",
// //       items: [
// //         "Home Physiotherapy after Paralysis",
// //         "Home Physiotherapy after Knee Replacement Surgery",
// //         "Home Physiotherapy after Stroke",
// //         "Home Physiotherapy after Hip Replacement Surgery",
// //         "Home Physiotherapy after Surgery",
// //         "Home Physiotherapy after Accident",
// //         "Home Physiotherapy for Back Pain",
// //         "Home Physiotherapy for Knee Pain",
// //         "Home Physiotherapy for Sciatica Pain",
// //         "Home Physiotherapy for Arthritis Pain",
// //         "Home Physiotherapy for Frozen Shoulder",
// //         "Home Physiotherapy for Muscle Stiffness",
// //         "Home Physiotherapy for Neck Spasms",
// //         "Home Physiotherapy for Parkinson's Disease",
// //         "Home Physiotherapy for Lymphatic Massage",
// //         "Home Physiotherapy after Liposuction",
// //         "Home Physiotherapy for Old Age Patients",
// //       ],
// //     },
// //   ];

// //   const navLinks = [
// //     { name: "Home", path: "/" },
// //     { name: "About", path: "/about" },
// //     { name: "Services", path: "/services" },
// //     { name: "Blogs", path: "/blogs" },
// //   ];

// //   const googleMapsUrl =
// //     "https://www.google.com/maps/search/?api=1&query=Advanced+Pain+Physiotherapy+Centre+Basement+Block+10+Nehru+Enclave+East+Kalkaji+New+Delhi+110019";

// //   const handleDropdownToggle = (categoryName) => {
// //     if (openDropdown === categoryName) {
// //       setOpenDropdown(null);
// //       setIsDropdownPinned(false);
// //     } else {
// //       setOpenDropdown(categoryName);
// //       setIsDropdownPinned(true);
// //     }
// //   };

// //   const handleMouseEnter = (categoryName) => {
// //     if (!isDropdownPinned) {
// //       setOpenDropdown(categoryName);
// //     }
// //   };

// //   const handleMouseLeave = () => {
// //     if (!isDropdownPinned) {
// //       setOpenDropdown(null);
// //     }
// //   };

// //   return (
// //     <div
// //       className="w-full"
// //       style={{
// //         fontFamily: "'Gantari', sans-serif",
// //         fontWeight: 400,
// //       }}
// //     >
// //       {/* Top Bar */}
// //       <div className="bg-[#8ab72e] text-white relative z-50">
// //         <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
// //           <div className="flex items-center justify-between gap-1 sm:gap-2 text-[10px] sm:text-xs lg:text-sm">
// //             {/* Mobile/Tablet - Icons Only */}
// //             <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
// //               <a
// //                 href="tel:+919220385419"
// //                 className="flex items-center gap-0.5 sm:gap-1 hover:text-[#343b24] transition"
// //                 title="Call Us"
// //               >
// //                 <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
// //                 <span className="hidden sm:inline text-[10px]">Call</span>
// //               </a>

// //               <a
// //                 href="https://wa.me/919220385419"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="flex items-center gap-0.5 sm:gap-1 hover:text-[#40492e] transition"
// //                 title="WhatsApp"
// //               >
// //                 <svg
// //                   className="w-3 h-3 sm:w-3.5 sm:h-3.5"
// //                   viewBox="0 0 24 24"
// //                   fill="currentColor"
// //                 >
// //                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
// //                 </svg>
// //                 <span className="hidden sm:inline text-[10px]">Chat</span>
// //               </a>

// //               <a
// //                 href={googleMapsUrl}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="flex items-center gap-0.5 sm:gap-1 hover:text-[#40492e] transition"
// //                 title="View Location"
// //               >
// //                 <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
// //                 <span className="hidden sm:inline text-[10px]">Map</span>
// //               </a>
// //             </div>

// //             {/* Desktop - Full Info */}
// //             <div className="hidden md:flex flex-wrap items-center gap-3 lg:gap-5 text-xs lg:text-sm">
// //               <a
// //                 href="tel:+919220385419"
// //                 className="flex items-center gap-1.5 hover:text-[#40492e] transition whitespace-nowrap"
// //               >
// //                 <Phone size={13} />
// //                 <span>+91 9220385419</span>
// //               </a>
// //               <a
// //                 href="mailto:advancedpainphysiotherapy@gmail.com"
// //                 className="hidden lg:flex items-center gap-1.5 hover:text-[#40492e] transition"
// //               >
// //                 <Mail size={13} />
// //                 <span className="truncate max-w-[200px] xl:max-w-none">
// //                   advancedpainphysiotherapy@gmail.com
// //                 </span>
// //               </a>

// //               <a
// //                 href={googleMapsUrl}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="hidden xl:flex items-center gap-1.5 hover:text-[#40492e] transition cursor-pointer group"
// //                 title="View on Google Maps"
// //               >
// //                 <MapPin
// //                   size={13}
// //                   className="flex-shrink-0 group-hover:scale-110 transition-transform"
// //                 />
// //                 <span className="group-hover:underline truncate max-w-[300px] 2xl:max-w-none">
// //                   10/16 Basement, Nehru Place Road, Greater Kailash 1,
// //                   Delhi-110048
// //                 </span>
// //               </a>
// //             </div>

// //             {/* Social Icons */}
// //             <div className="flex items-center gap-1.5 sm:gap-2">
// //               <a
// //                 href="https://www.facebook.com/profile.php?id=61584557627631"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="hover:text-blue-700 transition"
// //                 aria-label="Facebook"
// //               >
// //                 <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
// //               </a>
// //               <a
// //                 href="https://www.instagram.com/advancedphysio19?igsh=c2hpdzkyN21zZ2U="
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="hover:text-pink-800 transition"
// //                 aria-label="Instagram"
// //               >
// //                 <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Navbar */}
// //       <nav className="bg-white shadow-md sticky top-0 z-40">
// //         <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
// //           <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
// //             {/* Logo */}
// //             <Link
// //               to="/"
// //               className="flex items-center py-1 sm:py-2 space-x-1 sm:space-x-2 flex-shrink-0 min-w-0 max-w-[70%] sm:max-w-[75%] lg:max-w-none"
// //             >
// //               <div className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto flex items-center flex-shrink-0">
// //                 <img
// //                   src={Logo}
// //                   alt="Advanced Pain Physiotherapy Centre"
// //                   className="h-full w-auto object-contain"
// //                 />
// //               </div>

// //               <div className="flex flex-col min-w-0">
// //                 <span
// //                   className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-xl  leading-tight"
// //                   style={{ color: "#8ab72e" }}
// //                 >
// //                   <span className="hidden md:inline">
// //                     Advanced Pain Physiotherapy Centre
// //                   </span>
// //                   <span className="md:hidden">Advanced Pain Physio</span>
// //                 </span>
// //                 <p
// //                   className="text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs leading-tight mt-0.5"
// //                   style={{ color: "black" }}
// //                 >
// //                   <span className="hidden md:inline">
// //                     Dedicate to complete Physical wellness
// //                   </span>
// //                   <span className="md:hidden">Physical wellness</span>
// //                 </p>
// //               </div>
// //             </Link>

// //             {/* Desktop Menu */}
// //             <div className="hidden lg:flex items-center gap-4 xl:gap-8">
// //               {navLinks.map((link) => (
// //                 <Link
// //                   key={link.name}
// //                   to={link.path}
// //                   className="text-gray-700 hover:text-[#8ab72e] transition  text-sm xl:text-base"
// //                 >
// //                   {link.name}
// //                 </Link>
// //               ))}

// //               <button
// //                 onClick={handleLocationClick}
// //                 className="text-gray-700 hover:text-[#8ab72e] transition  text-sm xl:text-base"
// //               >
// //                 Location
// //               </button>

// //               <Link
// //                 to="/contact"
// //                 className="bg-[#8ab72e] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full hover:bg-[#7aa625] transition  shadow-md hover:shadow-lg text-sm xl:text-base whitespace-nowrap"
// //               >
// //                 Book Appointment
// //               </Link>
// //             </div>

// //             {/* Mobile Menu Button */}
// //             <button
// //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// //               className="lg:hidden text-gray-700 hover:text-[#8ab72e] transition p-1.5 sm:p-2 flex-shrink-0"
// //               aria-label="Toggle menu"
// //             >
// //               {isMenuOpen ? (
// //                 <X className="w-5 h-5 sm:w-6 sm:h-6" />
// //               ) : (
// //                 <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
// //               )}
// //             </button>
// //           </div>

// //           {/* Mobile Menu */}
// //           {isMenuOpen && (
// //             <div className="lg:hidden pb-3 sm:pb-4 space-y-1 sm:space-y-2 border-t pt-3 sm:pt-4 max-h-[70vh] overflow-y-auto">
// //               {navLinks.map((link) => (
// //                 <Link
// //                   key={link.name}
// //                   to={link.path}
// //                   className="block text-gray-700 hover:text-[#8ab72e] hover:bg-emerald-50 transition  py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm"
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   {link.name}
// //                 </Link>
// //               ))}

// //               {/* Mobile Services Dropdown */}
// //               <div className="border-t border-gray-100 pt-2 mt-2">
// //                 <button
// //                   onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
// //                   className="w-full flex items-center justify-between text-gray-700 hover:text-[#8ab72e] hover:bg-emerald-50 transition  py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm"
// //                 >
// //                   <span>All Services</span>
// //                   <ChevronDown
// //                     className="w-4 h-4"
// //                     style={{
// //                       transform: mobileServiceOpen
// //                         ? "rotate(180deg)"
// //                         : "rotate(0deg)",
// //                       transition: "transform 0.2s",
// //                     }}
// //                   />
// //                 </button>

// //                 {mobileServiceOpen && (
// //                   <div className="mt-2 space-y-2 pl-2 sm:pl-4 max-h-96 overflow-y-auto">
// //                     {serviceCategories.map((category, idx) => (
// //                       <div key={idx} className="mb-3">
// //                         <p className="text-[#8ab72e]  text-xs px-3 mb-1.5">
// //                           {category.name}
// //                         </p>
// //                         <div className="space-y-0.5">
// //                           {category.items.map((item, itemIdx) => (
// //                             <Link
// //                               key={itemIdx}
// //                               to={`/services/${convertToSlug(item)}`}
// //                               className="block text-gray-600 hover:text-[#8ab72e] hover:bg-gray-50 transition py-1.5 px-3 rounded text-xs"
// //                               onClick={() => {
// //                                 setIsMenuOpen(false);
// //                                 setMobileServiceOpen(false);
// //                               }}
// //                             >
// //                               {item}
// //                             </Link>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>

// //               <button
// //                 onClick={handleLocationClick}
// //                 className="w-full text-left text-gray-700 hover:text-[#8ab72e] hover:bg-emerald-50 transition  py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm"
// //               >
// //                 Location
// //               </button>

// //               <Link
// //                 to="/contact"
// //                 onClick={() => setIsMenuOpen(false)}
// //                 className="block mt-3 rounded-full bg-[#8ab72e] px-4 sm:px-6 py-2.5 sm:py-3 text-center text-white shadow-md transition hover:bg-[#7aa625] text-sm "
// //               >
// //                 Book Appointment
// //               </Link>
// //             </div>
// //           )}
// //         </div>

// //         {/* Service Categories Bar - Mobile & Tablet */}
// //         <div
// //           className="block lg:hidden bg-gray-50 border-t border-gray-200"
// //           style={{ margin: 10, padding: 3, marginBottom: 5, paddingBottom: 5 }}
// //         >
// //           <div
// //             className="max-w-7xl mx-auto px-3 sm:px-6"
// //             style={{ margin: "0 auto", padding: "0 0.5rem" }}
// //           >
// //             <div
// //               className="overflow-x-auto scrollbar-hide"
// //               style={{ margin: 0, padding: 0 }}
// //             >
// //               <div
// //                 className="flex items-center gap-1 sm:gap-2 py-2 sm:py-3 min-w-max px-1"
// //                 style={{ margin: 0, paddingBottom: 0 }}
// //               >
// //                 {serviceCategories.map((category, idx) => (
// //                   <button
// //                     key={idx}
// //                     onClick={() => {
// //                       setOpenDropdown(
// //                         openDropdown === category.name ? null : category.name,
// //                       );
// //                     }}
// //                     className="text-[10px] sm:text-xs text-gray-700 hover:text-[#8ab72e] transition  px-2 sm:px-3 py-1.5 sm:py-2 rounded-md hover:bg-white whitespace-nowrap flex items-center gap-1 bg-white shadow-sm"
// //                   >
// //                     {category.name}
// //                     <ChevronDown
// //                       size={12}
// //                       className="sm:w-3.5 sm:h-3.5"
// //                       style={{
// //                         transform:
// //                           openDropdown === category.name
// //                             ? "rotate(180deg)"
// //                             : "rotate(0deg)",
// //                         transition: "transform 0.2s",
// //                       }}
// //                     />
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Mobile Dropdown Content */}
// //             {openDropdown && (
// //               <div
// //                 className="px-2 sm:px-3"
// //                 style={{
// //                   margin: 0,
// //                   padding: "0 0.5rem",
// //                   paddingBottom: "0.75rem",
// //                   marginBottom: 0,
// //                 }}
// //               >
// //                 <div
// //                   className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 max-h-80 overflow-y-auto"
// //                   style={{ margin: 0, marginBottom: 0 }}
// //                 >
// //                   <p className="text-[#8ab72e]  text-xs sm:text-sm mb-2 sticky top-0 bg-white pb-2">
// //                     {openDropdown}
// //                   </p>
// //                   <div className="space-y-1">
// //                     {serviceCategories
// //                       .find((cat) => cat.name === openDropdown)
// //                       ?.items.map((item, itemIdx) => (
// //                         <Link
// //                           key={itemIdx}
// //                           to={`/services/${convertToSlug(item)}`}
// //                           className="block px-3 py-2 text-[11px] sm:text-xs text-gray-700 hover:text-[#8ab72e] hover:bg-gray-50 transition rounded"
// //                           onClick={() => setOpenDropdown(null)}
// //                         >
// //                           {item}
// //                         </Link>
// //                       ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* Service Categories Bar - Desktop Only */}
// //         <div className="hidden lg:block bg-gray-50 border-t border-gray-200">
// //           <div className="max-w-7xl mx-auto px-3 sm:px-4">
// //             <div className="flex items-center justify-center gap-1 py-3">
// //               {serviceCategories.map((category, idx) => (
// //                 <div
// //                   key={idx}
// //                   ref={openDropdown === category.name ? dropdownRef : null}
// //                   className="relative"
// //                   onMouseEnter={() => handleMouseEnter(category.name)}
// //                   onMouseLeave={handleMouseLeave}
// //                 >
// //                   <button
// //                     onClick={() => handleDropdownToggle(category.name)}
// //                     className="text-xs xl:text-sm text-gray-700 hover:text-[#8ab72e] transition  px-3 py-2 rounded-md hover:bg-white whitespace-nowrap flex items-center gap-1"
// //                   >
// //                     {category.name}
// //                     <ChevronDown
// //                       size={14}
// //                       style={{
// //                         transform:
// //                           openDropdown === category.name
// //                             ? "rotate(180deg)"
// //                             : "rotate(0deg)",
// //                         transition: "transform 0.2s",
// //                       }}
// //                     />
// //                   </button>

// //                   {/* Desktop Dropdown */}
// //                   {openDropdown === category.name && (
// //                     <div className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg border border-gray-200 min-w-[240px] py-2 z-50 max-h-96 overflow-y-auto">
// //                       {category.items.map((item, itemIdx) => (
// //                         <Link
// //                           key={itemIdx}
// //                           to={`/services/${convertToSlug(item)}`}
// //                           className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#8ab72e] hover:bg-gray-50 transition"
// //                           onClick={() => {
// //                             setOpenDropdown(null);
// //                             setIsDropdownPinned(false);
// //                           }}
// //                         >
// //                           {item}
// //                         </Link>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // }

// import React, { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Facebook,
//   Instagram,
//   Phone,
//   Mail,
//   MapPin,
//   ChevronDown,
// } from "lucide-react";
// import Logo from "../../assets/Logo.jpeg";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
//   const [isDropdownPinned, setIsDropdownPinned] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();

//   const handleLocationClick = (e) => {
//     e.preventDefault();

//     if (window.location.pathname === "/") {
//       const citySection = document.getElementById("city-navigation");
//       if (citySection) {
//         citySection.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     } else {
//       navigate("/");
//       setTimeout(() => {
//         const citySection = document.getElementById("city-navigation");
//         if (citySection) {
//           citySection.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//       }, 100);
//     }

//     setIsMenuOpen(false);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpenDropdown(null);
//         setIsDropdownPinned(false);
//       }
//     };

//     if (openDropdown) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [openDropdown]);

//   // Helper function to convert service name to slug
//   const convertToSlug = (text) => {
//     // Remove "Treatment", "Rehabilitation", "Therapy" etc from the end
//     const cleanedText = text
//       .replace(
//         /\s+(Treatment|Rehabilitation|Therapy|Care|Relief|Adjustment|Management|Exercises)$/i,
//         "",
//       )
//       .trim();

//     return cleanedText
//       .toLowerCase()
//       .replace(/\s+/g, "-")
//       .replace(/[^a-z0-9-]/g, "");
//   };

//   const serviceCategories = [
//     {
//       name: "Orthopedic Rehabilitation",
//       items: [
//         "Back Pain Treatment",
//         "Knee Pain Treatment",
//         "Shoulder Pain Treatment",
//         "Elbow Pain Treatment",
//         "Hip Pain Treatment",
//         "Wrist Pain Treatment",
//         "Foot Pain Treatment",
//         "Muscles Pain Treatment",
//         "Neck Pain Treatment",
//         "After Accident Pain Treatment",
//         "Frozen Shoulder Treatment",
//         "Arthritis Pain Treatment",
//         "Osteoarthritis Pain Treatment",
//         "Carpal Tunnel Syndrome Treatment",
//       ],
//     },
//     {
//       name: "Neurological Rehabilitation",
//       items: [
//         "Myasthenia Gravis Treatment",
//         "Alzheimer's Treatment",
//         "Stroke Treatment",
//         "Paralysis Treatment",
//         "Epilepsy Treatment",
//         "Meningitis Treatment",
//         "Spinal Cord Injury Rehabilitation",
//         "Diabetic Neuropathy Treatment",
//         "Encephalitis Treatment",
//         "Sciatica Pain Treatment",
//         "Slip Disc Pain Treatment",
//         "Cervical Spondylitis Treatment",
//         "Parkinson's Treatment",
//       ],
//     },
//     {
//       name: "Sports Rehabilitation",
//       items: [
//         "Golfer's Elbow Treatment",
//         "Student Elbow Treatment",
//         "Ligament Injury Rehabilitation",
//         "ACL Injury Rehabilitation",
//         "MCL Injury Rehabilitation",
//         "PCL Injury Rehabilitation",
//         "Meniscus Injury Rehabilitation",
//         "Patella Mobilization Therapy",
//         "Shoulder Ligament Sports Massage",
//         "Performance Enhancing Treatment",
//         "Sprain Ligament Treatment",
//         "Strain Injury Rehabilitation",
//         "Muscle Spasm Treatment",
//         "Muscle Stiffness Treatment",
//       ],
//     },
//     {
//       name: "Lymphatic Massage",
//       items: [
//         "Lymphatic Massage after Liposuction",
//         "Lymphatic Massage after Tummy Tuck",
//         "Lymphatic Massage after Gynaecomastia",
//         "Lymphatic Massage after Fat Grafting",
//         "Lymphatic Massage after BBL",
//         "Lymphatic Massage after Mummy Makeover",
//         "Lymphatic Massage after Arm Liposuction",
//         "Lymphatic Massage after Thigh Liposuction",
//       ],
//     },
//     {
//       name: "Chiropractic Treatment",
//       items: [
//         "Spinal Adjustment",
//         "Shoulder Adjustment",
//         "Neck Adjustment",
//         "Elbow Adjustment",
//         "Hip Adjustment",
//         "Tail Bone Adjustment",
//         "Wrist and Ankle Adjustment",
//         "Muscle Stiffness Adjustment",
//         "Soft Tissue Adjustment",
//         "Spine Alignment Therapy",
//         "Back Pain Chiropractic Care",
//         "Neck Pain Adjustment",
//         "Sciatica Pain Relief",
//         "Posture Correction Therapy",
//         "Joint Mobilization Treatment",
//         "Slip Disc Chiropractic Care",
//         "Sports Injury Chiropractic Treatment",
//         "Chronic Pain Management",
//         "Corrective Chiropractic Exercises",
//       ],
//     },
//     {
//       name: "Home Physiotherapy Rehabilitation",
//       items: [
//         "Home Physiotherapy after Paralysis",
//         "Home Physiotherapy after Knee Replacement Surgery",
//         "Home Physiotherapy after Stroke",
//         "Home Physiotherapy after Hip Replacement Surgery",
//         "Home Physiotherapy after Surgery",
//         "Home Physiotherapy after Accident",
//         "Home Physiotherapy for Back Pain",
//         "Home Physiotherapy for Knee Pain",
//         "Home Physiotherapy for Sciatica Pain",
//         "Home Physiotherapy for Arthritis Pain",
//         "Home Physiotherapy for Frozen Shoulder",
//         "Home Physiotherapy for Muscle Stiffness",
//         "Home Physiotherapy for Neck Spasms",
//         "Home Physiotherapy for Parkinson's Disease",
//         "Home Physiotherapy for Lymphatic Massage",
//         "Home Physiotherapy after Liposuction",
//         "Home Physiotherapy for Old Age Patients",
//       ],
//     },
//   ];

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Blogs", path: "/blogs" },
//   ];

//   const googleMapsUrl =
//     "https://www.google.com/maps/search/?api=1&query=Advanced+Pain+Physiotherapy+Centre+Basement+Block+10+Nehru+Enclave+East+Kalkaji+New+Delhi+110019";

//   const handleDropdownToggle = (categoryName) => {
//     if (openDropdown === categoryName) {
//       setOpenDropdown(null);
//       setIsDropdownPinned(false);
//     } else {
//       setOpenDropdown(categoryName);
//       setIsDropdownPinned(true);
//     }
//   };

//   const handleMouseEnter = (categoryName) => {
//     if (!isDropdownPinned) {
//       setOpenDropdown(categoryName);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!isDropdownPinned) {
//       setOpenDropdown(null);
//     }
//   };

//   return (
//     <div
//       className="w-full"
//       style={{
//         fontFamily: "'Gantari', sans-serif",
//         fontWeight: 400,
//       }}
//     >
//       {/* Top Bar */}
//       <div className="bg-[#8ab72e] text-white relative z-50">
//         <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
//           <div className="flex items-center justify-between gap-1 sm:gap-2 text-[10px] sm:text-xs lg:text-sm">
//             {/* Mobile/Tablet - Icons Only */}
//             <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
//               <a
//                 href="tel:+919220385419"
//                 className="flex items-center gap-0.5 sm:gap-1 hover:text-[#343b24] transition"
//                 title="Call Us"
//               >
//                 <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//                 <span className="hidden sm:inline text-[10px]">Call</span>
//               </a>

//               <a
//                 href="https://wa.me/919220385419"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-0.5 sm:gap-1 hover:text-[#40492e] transition"
//                 title="WhatsApp"
//               >
//                 <svg
//                   className="w-3 h-3 sm:w-3.5 sm:h-3.5"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
//                 </svg>
//                 <span className="hidden sm:inline text-[10px]">Chat</span>
//               </a>

//               <a
//                 href={googleMapsUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-0.5 sm:gap-1 hover:text-[#40492e] transition"
//                 title="View Location"
//               >
//                 <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//                 <span className="hidden sm:inline text-[10px]">Map</span>
//               </a>
//             </div>

//             {/* Desktop - Full Info */}
//             <div className="hidden md:flex flex-wrap items-center gap-3 lg:gap-5 text-xs lg:text-sm">
//               <a
//                 href="tel:+919220385419"
//                 className="flex items-center gap-1.5 hover:text-[#40492e] transition whitespace-nowrap"
//               >
//                 <Phone size={13} />
//                 <span>+91 9220385419</span>
//               </a>
//               <a
//                 href="mailto:advancedpainphysiotherapy@gmail.com"
//                 className="hidden lg:flex items-center gap-1.5 hover:text-[#40492e] transition"
//               >
//                 <Mail size={13} />
//                 <span className="truncate max-w-[200px] xl:max-w-none">
//                   advancedpainphysiotherapy@gmail.com
//                 </span>
//               </a>

//               <a
//                 href={googleMapsUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hidden xl:flex items-center gap-1.5 hover:text-[#40492e] transition cursor-pointer group"
//                 title="View on Google Maps"
//               >
//                 <MapPin
//                   size={13}
//                   className="flex-shrink-0 group-hover:scale-110 transition-transform"
//                 />
//                 <span className="group-hover:underline truncate max-w-[300px] 2xl:max-w-none">
//                   10/16 Basement, Nehru Place Road, Greater Kailash 1,
//                   Delhi-110048
//                 </span>
//               </a>
//             </div>

//             {/* Social Icons */}
//             <div className="flex items-center gap-1.5 sm:gap-2">
//               <a
//                 href="https://www.facebook.com/profile.php?id=61584557627631"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-700 transition"
//                 aria-label="Facebook"
//               >
//                 <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//               </a>
//               <a
//                 href="https://www.instagram.com/advancedphysio19?igsh=c2hpdzkyN21zZ2U="
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-pink-800 transition"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="bg-white shadow-md sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
//           <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
//             {/* Logo */}
//             <Link
//               to="/"
//               className="flex items-center py-1 sm:py-2 space-x-1 sm:space-x-2 flex-shrink-0 min-w-0 max-w-[70%] sm:max-w-[75%] lg:max-w-none"
//             >
//               <div className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto flex items-center flex-shrink-0">
//                 <img
//                   src={Logo}
//                   alt="Advanced Pain Physiotherapy Centre"
//                   className="h-full w-auto object-contain"
//                 />
//               </div>

//               <div className="flex flex-col min-w-0">
//                 <span
//                   className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-xl  leading-tight"
//                   style={{ color: "#8ab72e" }}
//                 >
//                   <span className="hidden md:inline">
//                     Advanced Pain Physiotherapy Centre
//                   </span>
//                   <span className="md:hidden">Advanced Pain Physio</span>
//                 </span>
//                 <p
//                   className="text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs leading-tight mt-0.5"
//                   style={{ color: "black" }}
//                 >
//                   <span className="hidden md:inline">
//                     Dedicate to complete Physical wellness
//                   </span>
//                   <span className="md:hidden">Physical wellness</span>
//                 </p>
//               </div>
//             </Link>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center gap-4 xl:gap-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="text-gray-700 hover:text-[#8ab72e] transition  text-sm xl:text-base"
//                 >
//                   {link.name}
//                 </Link>
//               ))}

//               <button
//                 onClick={handleLocationClick}
//                 className="text-gray-700 hover:text-[#8ab72e] transition  text-sm xl:text-base"
//               >
//                 Location
//               </button>

//               <Link
//                 to="/contact"
//                 className="bg-[#8ab72e] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full hover:bg-[#7aa625] transition  shadow-md hover:shadow-lg text-sm xl:text-base whitespace-nowrap"
//               >
//                 Book Appointment
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden text-gray-700 hover:text-[#8ab72e] transition p-1.5 sm:p-2 flex-shrink-0"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <X className="w-5 h-5 sm:w-6 sm:h-6" />
//               ) : (
//                 <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
//               )}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="lg:hidden pb-3 sm:pb-4 space-y-1 sm:space-y-2 border-t pt-3 sm:pt-4 max-h-[70vh] overflow-y-auto">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="block text-gray-700 hover:text-[#8ab72e] hover:bg-emerald-50 transition  py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}

//               {/* Mobile Services Dropdown */}
//               <div className="border-t border-gray-100 pt-2 mt-2">
//                 <button
//                   onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
//                   className="w-full flex items-center justify-between text-gray-700 hover:text-[#8ab72e] hover:bg-emerald-50 transition  py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm"
//                 >
//                   <span>All Services</span>
//                   <ChevronDown
//                     className="w-4 h-4"
//                     style={{
//                       transform: mobileServiceOpen
//                         ? "rotate(180deg)"
//                         : "rotate(0deg)",
//                       transition: "transform 0.2s",
//                     }}
//                   />
//                 </button>

//                 {mobileServiceOpen && (
//                   <div className="mt-2 space-y-2 pl-2 sm:pl-4 max-h-96 overflow-y-auto">
//                     {serviceCategories.map((category, idx) => (
//                       <div key={idx} className="mb-3">
//                         <p className="text-[#8ab72e]  text-xs px-3 mb-1.5">
//                           {category.name}
//                         </p>
//                         <div className="space-y-0.5">
//                           {category.items.map((item, itemIdx) => (
//                             <Link
//                               key={itemIdx}
//                               to={`/services/${convertToSlug(item)}`}
//                               className="block text-gray-600 hover:text-[#8ab72e] hover:bg-gray-50 transition py-1.5 px-3 rounded text-xs"
//                               onClick={() => {
//                                 setIsMenuOpen(false);
//                                 setMobileServiceOpen(false);
//                                 window.scrollTo(0, 0);
//                               }}
//                             >
//                               {item}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <button
//                 onClick={handleLocationClick}
//                 className="w-full text-left text-gray-700 hover:text-[#8ab72e] hover:bg-emerald-50 transition  py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm"
//               >
//                 Location
//               </button>

//               <Link
//                 to="/contact"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block mt-3 rounded-full bg-[#8ab72e] px-4 sm:px-6 py-2.5 sm:py-3 text-center text-white shadow-md transition hover:bg-[#7aa625] text-sm "
//               >
//                 Book Appointment
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* Service Categories Bar - Mobile & Tablet */}
//         <div
//           className="block lg:hidden bg-gray-50 border-t border-gray-200"
//           style={{ margin: 10, padding: 3, marginBottom: 5, paddingBottom: 5 }}
//         >
//           <div
//             className="max-w-7xl mx-auto px-3 sm:px-6"
//             style={{ margin: "0 auto", padding: "0 0.5rem" }}
//           >
//             <div
//               className="overflow-x-auto scrollbar-hide"
//               style={{ margin: 0, padding: 0 }}
//             >
//               <div
//                 className="flex items-center gap-1 sm:gap-2 py-2 sm:py-3 min-w-max px-1"
//                 style={{ margin: 0, paddingBottom: 0 }}
//               >
//                 {serviceCategories.map((category, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setOpenDropdown(
//                         openDropdown === category.name ? null : category.name,
//                       );
//                     }}
//                     className="text-[10px] sm:text-xs text-gray-700 hover:text-[#8ab72e] transition  px-2 sm:px-3 py-1.5 sm:py-2 rounded-md hover:bg-white whitespace-nowrap flex items-center gap-1 bg-white shadow-sm"
//                   >
//                     {category.name}
//                     <ChevronDown
//                       size={12}
//                       className="sm:w-3.5 sm:h-3.5"
//                       style={{
//                         transform:
//                           openDropdown === category.name
//                             ? "rotate(180deg)"
//                             : "rotate(0deg)",
//                         transition: "transform 0.2s",
//                       }}
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Mobile Dropdown Content */}
//             {openDropdown && (
//               <div
//                 className="px-2 sm:px-3"
//                 style={{
//                   margin: 0,
//                   padding: "0 0.5rem",
//                   paddingBottom: "0.75rem",
//                   marginBottom: 0,
//                 }}
//               >
//                 <div
//                   className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 max-h-80 overflow-y-auto"
//                   style={{ margin: 0, marginBottom: 0 }}
//                 >
//                   <p className="text-[#8ab72e]  text-xs sm:text-sm mb-2 sticky top-0 bg-white pb-2">
//                     {openDropdown}
//                   </p>
//                   <div className="space-y-1">
//                     {serviceCategories
//                       .find((cat) => cat.name === openDropdown)
//                       ?.items.map((item, itemIdx) => (
//                         <Link
//                           key={itemIdx}
//                           to={`/services/${convertToSlug(item)}`}
//                           className="block px-3 py-2 text-[11px] sm:text-xs text-gray-700 hover:text-[#8ab72e] hover:bg-gray-50 transition rounded"
//                           onClick={() => {
//                             setOpenDropdown(null);
//                             window.scrollTo(0, 0);
//                           }}
//                         >
//                           {item}
//                         </Link>
//                       ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Service Categories Bar - Desktop Only */}
//         <div className="hidden lg:block bg-gray-50 border-t border-gray-200">
//           <div className="max-w-7xl mx-auto px-3 sm:px-4">
//             <div className="flex items-center justify-center gap-1 py-3">
//               {serviceCategories.map((category, idx) => (
//                 <div
//                   key={idx}
//                   ref={openDropdown === category.name ? dropdownRef : null}
//                   className="relative"
//                   onMouseEnter={() => handleMouseEnter(category.name)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <button
//                     onClick={() => handleDropdownToggle(category.name)}
//                     className="text-xs xl:text-sm text-gray-700 hover:text-[#8ab72e] transition  px-3 py-2 rounded-md hover:bg-white whitespace-nowrap flex items-center gap-1"
//                   >
//                     {category.name}
//                     <ChevronDown
//                       size={14}
//                       style={{
//                         transform:
//                           openDropdown === category.name
//                             ? "rotate(180deg)"
//                             : "rotate(0deg)",
//                         transition: "transform 0.2s",
//                       }}
//                     />
//                   </button>

//                   {/* Desktop Dropdown */}
//                   {openDropdown === category.name && (
//                     <div className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg border border-gray-200 min-w-[240px] py-2 z-50 max-h-96 overflow-y-auto">
//                       {category.items.map((item, itemIdx) => (
//                         <Link
//                           key={itemIdx}
//                           to={`/services/${convertToSlug(item)}`}
//                           className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#8ab72e] hover:bg-gray-50 transition"
//                           onClick={() => {
//                             setOpenDropdown(null);
//                             setIsDropdownPinned(false);
//                             window.scrollTo(0, 0);
//                           }}
//                         >
//                           {item}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }





// import React, { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Facebook,
//   Instagram,
//   Phone,
//   Mail,
//   MapPin,
//   ChevronDown,
// } from "lucide-react";
// import Logo from "../../assets/Logo.jpeg";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
//   const [isDropdownPinned, setIsDropdownPinned] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();

//   const handleLocationClick = (e) => {
//     e.preventDefault();

//     if (window.location.pathname === "/") {
//       const citySection = document.getElementById("city-navigation");
//       if (citySection) {
//         citySection.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     } else {
//       navigate("/");
//       setTimeout(() => {
//         const citySection = document.getElementById("city-navigation");
//         if (citySection) {
//           citySection.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//       }, 100);
//     }

//     setIsMenuOpen(false);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpenDropdown(null);
//         setIsDropdownPinned(false);
//       }
//     };

//     if (openDropdown) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [openDropdown]);

//   // Helper function to convert service name to slug
//   const convertToSlug = (text) => {
//     // Remove "Treatment", "Rehabilitation", "Therapy" etc from the end
//     const cleanedText = text
//       .replace(
//         /\s+(Treatment|Rehabilitation|Therapy|Care|Relief|Adjustment|Management|Exercises)$/i,
//         "",
//       )
//       .trim();

//     return cleanedText
//       .toLowerCase()
//       .replace(/\s+/g, "-")
//       .replace(/[^a-z0-9-]/g, "");
//   };

//   const serviceCategories = [
//     {
//       name: "Orthopedic Rehabilitation",
//       items: [
//         "Back Pain Treatment",
//         "Knee Pain Treatment",
//         "Shoulder Pain Treatment",
//         "Elbow Pain Treatment",
//         "Hip Pain Treatment",
//         "Wrist Pain Treatment",
//         "Foot Pain Treatment",
//         "Muscles Pain Treatment",
//         "Neck Pain Treatment",
//         "After Accident Pain Treatment",
//         "Frozen Shoulder Treatment",
//         "Arthritis Pain Treatment",
//         "Osteoarthritis Pain Treatment",
//         "Carpal Tunnel Syndrome Treatment",
//       ],
//     },
//     {
//       name: "Neurological Rehabilitation",
//       items: [
//         "Myasthenia Gravis Treatment",
//         "Alzheimer's Treatment",
//         "Stroke Treatment",
//         "Paralysis Treatment",
//         "Epilepsy Treatment",
//         "Meningitis Treatment",
//         "Spinal Cord Injury Rehabilitation",
//         "Diabetic Neuropathy Treatment",
//         "Encephalitis Treatment",
//         "Sciatica Pain Treatment",
//         "Slip Disc Pain Treatment",
//         "Cervical Spondylitis Treatment",
//         "Parkinson's Treatment",
//       ],
//     },
//     {
//       name: "Sports Rehabilitation",
//       items: [
//         "Golfer's Elbow Treatment",
//         "Student Elbow Treatment",
//         "Ligament Injury Rehabilitation",
//         "ACL Injury Rehabilitation",
//         "MCL Injury Rehabilitation",
//         "PCL Injury Rehabilitation",
//         "Meniscus Injury Rehabilitation",
//         "Patella Mobilization Therapy",
//         "Shoulder Ligament Sports Massage",
//         "Performance Enhancing Treatment",
//         "Sprain Ligament Treatment",
//         "Strain Injury Rehabilitation",
//         "Muscle Spasm Treatment",
//         "Muscle Stiffness Treatment",
//       ],
//     },
//     {
//       name: "Lymphatic Massage",
//       items: [
//         "Lymphatic Massage after Liposuction",
//         "Lymphatic Massage after Tummy Tuck",
//         "Lymphatic Massage after Gynaecomastia",
//         "Lymphatic Massage after Fat Grafting",
//         "Lymphatic Massage after BBL",
//         "Lymphatic Massage after Mummy Makeover",
//         "Lymphatic Massage after Arm Liposuction",
//         "Lymphatic Massage after Thigh Liposuction",
//       ],
//     },
//     {
//       name: "Chiropractic Treatment",
//       items: [
//        " Spinal Adjustment", 
// "Shoulder Adjustment" ,
// "Neck Adjustment" ,
// "Elbow Adjustment" ,
// "Hip Adjustment" ,
// "Tail Bone Adjustment" ,
// 'Wrist and Ankle Adjustment' ,
// 'Muscle Stiffness Adjustment' ,
// "Soft tissue Adjustment" ,

//       ],
//     },
//     {
//       name: "Home Physiotherapy Rehabilitation",
//       items: [
//         "Home Physiotherapy after Paralysis",
//         "Home Physiotherapy after Knee Replacement Surgery",
//         "Home Physiotherapy after Stroke",
//         "Home Physiotherapy after Hip Replacement Surgery",
//         "Home Physiotherapy after Surgery",
//         "Home Physiotherapy after Accident",
//         "Home Physiotherapy for Back Pain",
//         "Home Physiotherapy for Knee Pain",
//         "Home Physiotherapy for Sciatica Pain",
//         "Home Physiotherapy for Arthritis Pain",
//         "Home Physiotherapy for Frozen Shoulder",
//         "Home Physiotherapy for Muscle Stiffness",
//         "Home Physiotherapy for Neck Spasms",
//         "Home Physiotherapy for Parkinson's Disease",
//         "Home Physiotherapy for Lymphatic Massage",
//         "Home Physiotherapy after Liposuction",
//         "Home Physiotherapy for Old Age Patients",
//       ],
//     },
//   ];

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Blogs", path: "/blogs" },
//   ];

//   const googleMapsUrl =
//     "https://www.google.com/maps/search/?api=1&query=Advanced+Pain+Physiotherapy+Centre+Basement+Block+10+Nehru+Enclave+East+Kalkaji+New+Delhi+110019";

//   const handleDropdownToggle = (categoryName) => {
//     if (openDropdown === categoryName) {
//       setOpenDropdown(null);
//       setIsDropdownPinned(false);
//     } else {
//       setOpenDropdown(categoryName);
//       setIsDropdownPinned(true);
//     }
//   };

//   const handleMouseEnter = (categoryName) => {
//     if (!isDropdownPinned) {
//       setOpenDropdown(categoryName);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!isDropdownPinned) {
//       setOpenDropdown(null);
//     }
//   };

//   return (
//     <div
//       className="w-full"
//       style={{
//         fontFamily: "'Gantari', sans-serif",
//         fontWeight: 400,
//       }}
//     >
//       {/* Top Bar */}
//       <div className="bg-[#8ab72e] text-white relative z-50">
//         <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
//           <div className="flex items-center justify-between gap-1 sm:gap-2 text-[10px] sm:text-xs lg:text-sm">
//             {/* Mobile/Tablet - Icons Only */}
//             <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
//               <a
//                 href="tel:+919220385419"
//                 className="flex items-center gap-0.5 sm:gap-1 hover:text-[#343b24] transition"
//                 title="Call Us"
//               >
//                 <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//                 <span className="hidden sm:inline text-[10px]">Call</span>
//               </a>

//               <a
//                 href="https://wa.me/919220385419"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-0.5 sm:gap-1 hover:text-[#40492e] transition"
//                 title="WhatsApp"
//               >
//                 <svg
//                   className="w-3 h-3 sm:w-3.5 sm:h-3.5"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
//                 </svg>
//                 <span className="hidden sm:inline text-[10px]">Chat</span>
//               </a>

//               <a
//                 href={googleMapsUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-0.5 sm:gap-1 hover:text-[#40492e] transition"
//                 title="View Location"
//               >
//                 <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//                 <span className="hidden sm:inline text-[10px]">Map</span>
//               </a>
//             </div>

//             {/* Desktop - Full Info */}
//             <div className="hidden md:flex flex-wrap items-center gap-3 lg:gap-5 text-xs lg:text-sm">
//               <a
//                 href="mailto:advancedpainphysiotherapy@gmail.com"
//                 className="flex items-center gap-1.5 hover:text-[#40492e] transition"
//               >
//                 <Mail size={13} />
//                 <span className="truncate max-w-[200px] xl:max-w-none">
//                   advancedpainphysiotherapy@gmail.com
//                 </span>
//               </a>

//               <a
//                 href={googleMapsUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-1.5 hover:text-[#40492e] transition cursor-pointer group"
//                 title="View on Google Maps"
//               >
//                 <MapPin
//                   size={13}
//                   className="flex-shrink-0 group-hover:scale-110 transition-transform"
//                 />
//                 <span className="group-hover:underline truncate max-w-[300px] 2xl:max-w-none">
//                   10/16 Basement, Nehru Place Road, Greater Kailash 1,
//                   Delhi-110048
//                 </span>
//               </a>
//             </div>

//             {/* Social Icons */}
//             <div className="flex items-center gap-1.5 sm:gap-2">
//               <a
//                 href="https://www.facebook.com/profile.php?id=61584557627631"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-700 transition"
//                 aria-label="Facebook"
//               >
//                 <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//               </a>
//               <a
//                 href="https://www.instagram.com/advancedphysio19?igsh=c2hpdzkyN21zZ2U="
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-pink-800 transition"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="bg-white shadow-md sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
//           <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
//             {/* Logo */}
//             <Link
//               to="/"
//               className="flex items-center py-1 sm:py-2 space-x-1 sm:space-x-2 flex-shrink-0 min-w-0 max-w-[70%] sm:max-w-[75%] lg:max-w-none"
//             >
//               <div className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto flex items-center flex-shrink-0">
//                 <img
//                   src={Logo}
//                   alt="Advanced Pain Physiotherapy Centre"
//                   className="h-full w-auto object-contain"
//                 />
//               </div>

//               <div className="flex flex-col min-w-0">
//                 <span
//                   className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-xl  leading-tight"
//                   style={{ color: "#8ab72e" }}
//                 >
//                   <span className="hidden md:inline">
//                     Advanced Pain Physiotherapy Centre
//                   </span>
//                   <span className="md:hidden">
//                     Advanced Pain Physiotherapy Centre
//                   </span>
//                 </span>
//                 <p
//                   className="text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs leading-tight mt-0.5"
//                   style={{ color: "black" }}
//                 >
//                   <span className="hidden md:inline">
//                     Dedicate to complete Physical wellness
//                   </span>
//                   <span className="md:hidden">
//                     Dedicate to complete Physical wellness
//                   </span>
//                 </p>
//               </div>
//             </Link>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center gap-4 xl:gap-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="text-gray-700 hover:text-[#8ab72e] transition  text-sm xl:text-base"
//                 >
//                   {link.name}
//                 </Link>
//               ))}

//               <button
//                 onClick={handleLocationClick}
//                 className="text-gray-700 hover:text-[#8ab72e] transition  text-sm xl:text-base"
//               >
//                 Location
//               </button>

//               <Link
//                 to="/contact"
//                 className="bg-[#8ab72e] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full hover:bg-[#7aa625] transition  shadow-md hover:shadow-lg text-sm xl:text-base whitespace-nowrap"
//               >
//                 Book Appointment
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden text-gray-700 hover:text-[#8ab72e] transition p-1.5 sm:p-2 flex-shrink-0"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <X className="w-5 h-5 sm:w-6 sm:h-6" />
//               ) : (
//                 <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
//               )}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="lg:hidden pb-3 sm:pb-4 space-y-1 sm:space-y-2 border-t pt-3 sm:pt-4 max-h-[70vh] overflow-y-auto">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="block text-gray-700 hover:text-[#8ab72e] hover:bg-emerald-50 transition  py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}

//               {/* Mobile Services Dropdown */}
//               <div className="border-t border-gray-100 pt-2 mt-2">
//                 <button
//                   onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
//                   className="w-full flex items-center justify-between text-gray-700 hover:text-[#8ab72e] hover:bg-emerald-50 transition  py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm"
//                 >
//                   <span>All Services</span>
//                   <ChevronDown
//                     className="w-4 h-4"
//                     style={{
//                       transform: mobileServiceOpen
//                         ? "rotate(180deg)"
//                         : "rotate(0deg)",
//                       transition: "transform 0.2s",
//                     }}
//                   />
//                 </button>

//                 {mobileServiceOpen && (
//                   <div className="mt-2 space-y-2 pl-2 sm:pl-4 max-h-96 overflow-y-auto">
//                     {serviceCategories.map((category, idx) => (
//                       <div key={idx} className="mb-3">
//                         <p className="text-[#8ab72e]  text-xs px-3 mb-1.5">
//                           {category.name}
//                         </p>
//                         <div className="space-y-0.5">
//                           {category.items.map((item, itemIdx) => (
//                             <Link
//                               key={itemIdx}
//                               to={`/services/${convertToSlug(item)}`}
//                               className="block text-gray-600 hover:text-[#8ab72e] hover:bg-gray-50 transition py-1.5 px-3 rounded text-xs"
//                               onClick={() => {
//                                 setIsMenuOpen(false);
//                                 setMobileServiceOpen(false);
//                                 window.scrollTo(0, 0);
//                               }}
//                             >
//                               {item}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <button
//                 onClick={handleLocationClick}
//                 className="w-full text-left text-gray-700 hover:text-[#8ab72e] hover:bg-emerald-50 transition  py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm"
//               >
//                 Location
//               </button>

//               <Link
//                 to="/contact"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block mt-3 rounded-full bg-[#8ab72e] px-4 sm:px-6 py-2.5 sm:py-3 text-center text-white shadow-md transition hover:bg-[#7aa625] text-sm "
//               >
//                 Book Appointment
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* Service Categories Bar - Desktop Only */}
//         <div className="hidden lg:block bg-gray-50 border-t border-gray-200">
//           <div className="max-w-7xl mx-auto px-3 sm:px-4">
//             <div className="flex items-center justify-center gap-1 py-3">
//               {serviceCategories.map((category, idx) => (
//                 <div
//                   key={idx}
//                   ref={openDropdown === category.name ? dropdownRef : null}
//                   className="relative"
//                   onMouseEnter={() => handleMouseEnter(category.name)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <button
//                     onClick={() => handleDropdownToggle(category.name)}
//                     className="text-xs xl:text-sm text-gray-700 hover:text-[#8ab72e] transition  px-3 py-2 rounded-md hover:bg-white whitespace-nowrap flex items-center gap-1"
//                   >
//                     {category.name}
//                     <ChevronDown
//                       size={14}
//                       style={{
//                         transform:
//                           openDropdown === category.name
//                             ? "rotate(180deg)"
//                             : "rotate(0deg)",
//                         transition: "transform 0.2s",
//                       }}
//                     />
//                   </button>

//                   {/* Desktop Dropdown */}
//                   {openDropdown === category.name && (
//                     <div className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg border border-gray-200 min-w-[240px] py-2 z-50 max-h-96 overflow-y-auto">
//                       {category.items.map((item, itemIdx) => (
//                         <Link
//                           key={itemIdx}
//                           to={`/services/${convertToSlug(item)}`}
//                           className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#8ab72e] hover:bg-gray-50 transition"
//                           onClick={() => {
//                             setOpenDropdown(null);
//                             setIsDropdownPinned(false);
//                             window.scrollTo(0, 0);
//                           }}
//                         >
//                           {item}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }




import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";
import Logo from "../../assets/Logo.jpeg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const navigate = useNavigate();

  const handleLocationClick = (e) => {
    e.preventDefault();

    if (window.location.pathname === "/") {
      const citySection = document.getElementById("city-navigation");
      if (citySection) {
        citySection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const citySection = document.getElementById("city-navigation");
        if (citySection) {
          citySection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }

    setIsMenuOpen(false);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Helper function to convert service name to slug
  const convertToSlug = (text) => {
    // Remove "Treatment", "Rehabilitation", "Therapy" etc from the end
    const cleanedText = text
      .replace(
        /\s+(Treatment|Rehabilitation|Therapy|Care|Relief|Adjustment|Management|Exercises)$/i,
        "",
      )
      .trim();

    return cleanedText
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  const serviceCategories = [
    {
      name: "Orthopedic Rehabilitation",
      items: [
        "Back Pain Treatment",
        "Knee Pain Treatment",
        "Shoulder Pain Treatment",
        "Elbow Pain Treatment",
        "Hip Pain Treatment",
        "Wrist Pain Treatment",
        "Foot Pain Treatment",
        "Muscles Pain Treatment",
        "Neck Pain Treatment",
        "After Accident Pain Treatment",
        "Frozen Shoulder Treatment",
        "Arthritis Pain Treatment",
        "Osteoarthritis Pain Treatment",
        "Carpal Tunnel Syndrome Treatment",
      ],
    },
    {
      name: "Neurological Rehabilitation",
      items: [
        "Myasthenia Gravis Treatment",
        "Alzheimer's Treatment",
        "Stroke Treatment",
        "Paralysis Treatment",
        "Epilepsy Treatment",
        "Meningitis Treatment",
        "Spinal Cord Injury Rehabilitation",
        "Diabetic Neuropathy Treatment",
        "Encephalitis Treatment",
        "Sciatica Pain Treatment",
        "Slip Disc Pain Treatment",
        "Cervical Spondylitis Treatment",
        "Parkinson's Treatment",
      ],
    },
    {
      name: "Sports Rehabilitation",
      items: [
        "Golfer's Elbow Treatment",
        "Student Elbow Treatment",
        "Ligament Injury Rehabilitation",
        "ACL Injury Rehabilitation",
        "MCL Injury Rehabilitation",
        "PCL Injury Rehabilitation",
        "Meniscus Injury Rehabilitation",
        "Patella Mobilization Therapy",
        "Shoulder Ligament Sports Massage",
        "Performance Enhancing Treatment",
        "Sprain Ligament Treatment",
        "Strain Injury Rehabilitation",
        "Muscle Spasm Treatment",
        "Muscle Stiffness Treatment",
      ],
    },
    {
      name: "Lymphatic Massage",
      items: [
        "Lymphatic Massage after Liposuction",
        "Lymphatic Massage after Tummy Tuck",
        "Lymphatic Massage after Gynaecomastia",
        "Lymphatic Massage after Fat Grafting",
        "Lymphatic Massage after BBL",
        "Lymphatic Massage after Mummy Makeover",
        "Lymphatic Massage after Arm Liposuction",
        "Lymphatic Massage after Thigh Liposuction",
      ],
    },
    {
      name: "Chiropractic Treatment",
      items: [
        "Spinal Adjustment",
        "Shoulder Adjustment",
        "Neck Adjustment",
        "Elbow Adjustment",
        "Hip Adjustment",
        "Tail Bone Adjustment",
        "Wrist and Ankle Adjustment",
        "Muscle Stiffness Adjustment",
        "Soft tissue Adjustment",
      ],
    },
    {
      name: "Home Physiotherapy Rehabilitation",
      items: [
        "Home Physiotherapy after Paralysis",
        "Home Physiotherapy after Knee Replacement Surgery",
        "Home Physiotherapy after Stroke",
        "Home Physiotherapy after Hip Replacement Surgery",
        "Home Physiotherapy after Surgery",
        "Home Physiotherapy after Accident",
        "Home Physiotherapy for Back Pain",
        "Home Physiotherapy for Knee Pain",
        "Home Physiotherapy for Sciatica Pain",
        "Home Physiotherapy for Arthritis Pain",
        "Home Physiotherapy for Frozen Shoulder",
        "Home Physiotherapy for Muscle Stiffness",
        "Home Physiotherapy for Neck Spasms",
        "Home Physiotherapy for Parkinson's Disease",
        "Home Physiotherapy for Lymphatic Massage",
        "Home Physiotherapy after Liposuction",
        "Home Physiotherapy for Old Age Patients",
      ],
    },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
  ];

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Advanced+Pain+Physiotherapy+Centre+Basement+Block+10+Nehru+Enclave+East+Kalkaji+New+Delhi+110019";

  // Improved dropdown handlers with smooth delay
  const handleMouseEnter = (categoryName) => {
    // Clear any existing timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    // Open immediately on hover
    setOpenDropdown(categoryName);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow moving to dropdown
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // 200ms delay - enough time to move mouse to dropdown
  };

  const handleDropdownEnter = () => {
    // Clear timeout when mouse enters dropdown
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const handleDropdownLeave = () => {
    // Close dropdown when leaving
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  return (
    <div
      className="w-full"
      style={{
        fontFamily: "'Gantari', sans-serif",
        fontWeight: 400,
      }}
    >
      {/* Top Bar */}
      <div className="bg-[#8ab72e] text-white relative z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
          <div className="flex items-center justify-between gap-1 sm:gap-2 text-[10px] sm:text-xs lg:text-sm">
            {/* Mobile/Tablet - Icons Only */}
            <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
              <a
                href="tel:+919220385419"
                className="flex items-center gap-0.5 sm:gap-1 hover:text-[#343b24] transition"
                title="Call Us"
              >
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline text-[10px]">Call</span>
              </a>

              <a
                href="https://wa.me/919220385419"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-0.5 sm:gap-1 hover:text-[#40492e] transition"
                title="WhatsApp"
              >
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="hidden sm:inline text-[10px]">Chat</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-0.5 sm:gap-1 hover:text-[#40492e] transition"
                title="View Location"
              >
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline text-[10px]">Map</span>
              </a>
            </div>

            {/* Desktop - Full Info */}
            <div className="hidden md:flex flex-wrap items-center gap-3 lg:gap-5 text-xs lg:text-sm">
              <a
                href="mailto:advancedpainphysiotherapy@gmail.com"
                className="flex items-center gap-1.5 hover:text-[#40492e] transition"
              >
                <Mail size={13} />
                <span className="truncate max-w-[200px] xl:max-w-none">
                  advancedpainphysiotherapy@gmail.com
                </span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#40492e] transition cursor-pointer group"
                title="View on Google Maps"
              >
                <MapPin
                  size={13}
                  className="flex-shrink-0 group-hover:scale-110 transition-transform"
                />
                <span className="group-hover:underline truncate max-w-[300px] 2xl:max-w-none">
                  10/16 Basement, Nehru Place Road, Greater Kailash 1,
                  Delhi-110048
                </span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=61584557627631"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://www.instagram.com/advancedphysio19?igsh=c2hpdzkyN21zZ2U="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-800 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center py-1 sm:py-2 space-x-1 sm:space-x-2 flex-shrink-0 min-w-0 max-w-[70%] sm:max-w-[75%] lg:max-w-none"
            >
              <div className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto flex items-center flex-shrink-0">
                <img
                  src={Logo}
                  alt="Advanced Pain Physiotherapy Centre"
                  className="h-full w-auto object-contain"
                />
              </div>

              <div className="flex flex-col min-w-0">
                <span
                  className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-xl leading-tight"
                  style={{ color: "#8ab72e" }}
                >
                  <span className="hidden md:inline">
                    Advanced Pain Physiotherapy Centre
                  </span>
                  <span className="md:hidden">
                    Advanced Pain Physiotherapy Centre
                  </span>
                </span>
                <p
                  className="text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs leading-tight mt-0.5"
                  style={{ color: "black" }}
                >
                  <span className="hidden md:inline">
                    Dedicate to complete Physical wellness
                  </span>
                  <span className="md:hidden">
                    Dedicate to complete Physical wellness
                  </span>
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 hover:text-[#8ab72e] transition text-sm xl:text-base"
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={handleLocationClick}
                className="text-gray-700 hover:text-[#8ab72e] transition text-sm xl:text-base"
              >
                Location
              </button>

              <Link
                to="/contact"
                className="bg-[#8ab72e] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full hover:bg-[#7aa625] transition shadow-md hover:shadow-lg text-sm xl:text-base whitespace-nowrap"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-[#8ab72e] transition p-1.5 sm:p-2 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-3 sm:pb-4 space-y-1 sm:space-y-2 border-t pt-3 sm:pt-4 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-gray-700 hover:text-[#8ab72e] hover:bg-emerald-50 transition py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Services Dropdown */}
              <div className="border-t border-gray-100 pt-2 mt-2">
                <button
                  onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                  className="w-full flex items-center justify-between text-gray-700 hover:text-[#8ab72e] hover:bg-emerald-50 transition py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm"
                >
                  <span>All Services</span>
                  <ChevronDown
                    className="w-4 h-4"
                    style={{
                      transform: mobileServiceOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>

                {mobileServiceOpen && (
                  <div className="mt-2 space-y-2 pl-2 sm:pl-4 max-h-96 overflow-y-auto">
                    {serviceCategories.map((category, idx) => (
                      <div key={idx} className="mb-3">
                        <p className="text-[#8ab72e] text-xs px-3 mb-1.5">
                          {category.name}
                        </p>
                        <div className="space-y-0.5">
                          {category.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              to={`/services/${convertToSlug(item)}`}
                              className="block text-gray-600 hover:text-[#8ab72e] hover:bg-gray-50 transition py-1.5 px-3 rounded text-xs"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setMobileServiceOpen(false);
                                window.scrollTo(0, 0);
                              }}
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={handleLocationClick}
                className="w-full text-left text-gray-700 hover:text-[#8ab72e] hover:bg-emerald-50 transition py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-sm"
              >
                Location
              </button>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-3 rounded-full bg-[#8ab72e] px-4 sm:px-6 py-2.5 sm:py-3 text-center text-white shadow-md transition hover:bg-[#7aa625] text-sm"
              >
                Book Appointment
              </Link>
            </div>
          )}
        </div>

        {/* Service Categories Bar - Desktop Only */}
        <div className="hidden lg:block bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-3 sm:px-4">
            <div className="flex items-center justify-center gap-1 py-3">
              {serviceCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(category.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="text-xs xl:text-sm text-gray-700 hover:text-[#8ab72e] transition px-3 py-2 rounded-md hover:bg-white whitespace-nowrap flex items-center gap-1"
                  >
                    {category.name}
                    <ChevronDown
                      size={14}
                      style={{
                        transform:
                          openDropdown === category.name
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    />
                  </button>

                  {/* Desktop Dropdown */}
                  {openDropdown === category.name && (
                    <div
                      className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg border border-gray-200 min-w-[280px] py-2 z-50 max-h-96 overflow-y-auto"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {category.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          to={`/services/${convertToSlug(item)}`}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#8ab72e] hover:bg-gray-50 transition"
                          onClick={() => {
                            setOpenDropdown(null);
                            window.scrollTo(0, 0);
                          }}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}