 



// // import React, { useState, useEffect } from "react";
// // import { Link, useParams } from "react-router-dom";
// // import LocationSlider from "../../../components/SharmaOrthopedic /Location/Location";
// // import SharmaImage from "../../../assets/Sharma.jpeg";
// // import ParthMedicareImage from "../../../assets/ParthMedicareImage.jpg";
// // import AdvancedPainImage from "../../../assets/Owner.png";
// // import SharmaLogo from "../../../assets/SharmaLogo.png";
// // import ParthLogo from "../../../assets/ParthLogo.png";
// // import Logo from "../../../assets/Logo.jpeg";
// // import AOS from "aos";
// // import "aos/dist/aos.css";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay } from "swiper/modules";
// // import backpain from "../../../assets/services/1.png";
// // import chiropractorImage from '../../../assets/Specialities/2.png'
// // import slipdisc from "../../../assets/services/16.png";
// // import arthritis from "../../../assets/services/12.png";
// // import sciatic from "../../../assets/services/15.png";
// // import KneePain from "../../../assets/services/2.png";
// // import cervical from "../../../assets/services/17.png";
// // import ShoulderPain from "../../../assets/services/3.png";
// // import neck from "../../../assets/services/9.png";
// // import Cupping from '../../../assets/Therapy/11.png'
// // import sportsMassageImage from '../../../assets/Specialities/12.png'
// // import orthopedic from "../../../assets/services/13.png";
// // import parkinsons from "../../../assets/services/18.png";
// // import Home from '../../../assets/Specialities/1.png'
// // import nursingcare from '../../../assets/parth/1.png'
// // import nursinghome from '../../../assets/parth/2.png'
// // import bloodsimple from '../../../assets/parth/3.png'
// // import bloodsimplehome from '../../../assets/parth/4.png'
// // import icu from '../../../assets/parth/5.png'
// // import affordable from '../../../assets/parth/6.png'
// // import Physiotherapy from '../../../assets/sharma/2.png'
// // import lymphatic from '../../../assets/sharma/3.png'
// // import pain from '../../../assets/sharma/4.png'
// // import op from '../../../assets/sharma/5.png'
// // import affordablehome from '../../../assets/sharma/6.png'
// // import Physiotherapy01 from '../../../assets/sharma/1.png'

// // import "swiper/css";

// // // Clinic-specific themes with unique colors
// // const clinicThemes = {
// //   "Ashish-physiotherapy-centre": {
// //     primary: "#8ab72e",
// //     secondary: "#7aa625",
// //     accent: "#a8d444",
// //     dark: "#2d3748",
// //     navBg: "bg-gradient-to-r from-[#8ab72e] to-[#7aa625]",
// //     buttonBg: "bg-[#8ab72e] hover:bg-[#7aa625]",
// //     linkHover: "hover:text-[#8ab72e]",
// //   },
// //   "sharma-orthopedic-rehab-centre": {
// //     primary: "#16a34a",
// //     secondary: "#f97316",
// //     accent: "#22c55e",
// //     dark: "#1e293b",
// //     navBg: "bg-gradient-to-r from-[#16a34a] to-[#f97316]",
// //     buttonBg: "bg-[#16a34a] hover:bg-[#f97316]",
// //     linkHover: "hover:text-[#16a34a]",
// //   },
// //   "parth-medicare": {
// //     primary: "#eab308",
// //     secondary: "#f97316",
// //     accent: "#fbbf24",
// //     dark: "#1f2937",
// //     navBg: "bg-gradient-to-r from-[#eab308] to-[#f97316]",
// //     buttonBg: "bg-[#eab308] hover:bg-[#f97316]",
// //     linkHover: "hover:text-[#eab308]",
// //   },
// // };

// // // Clinic Images Object
// // const clinicImages = {
// //   "Ashish-physiotherapy-centre": AdvancedPainImage,
// //   "sharma-orthopedic-rehab-centre": SharmaImage,
// //   "parth-medicare": ParthMedicareImage,
// // };

// // // Clinic Logos Object
// // const clinicLogos = {
// //   "Ashish-physiotherapy-centre": Logo,
// //   "sharma-orthopedic-rehab-centre": SharmaLogo,
// //   "parth-medicare": ParthLogo,
// // };

// // // Clinics data with unique content
// // const clinicsData = {
// //   "Ashish-physiotherapy-centre": {
// //     id: 1,
// //     name: "Dr. Ashish Sharma",
// //     tagline: "Excellence in Pain Management & Rehabilitation",
// //     rating: 5.0,
// //     specialty: "Advanced Pain Management & Holistic Rehabilitation",
// //     address: "10/16, Block 10 Nehru Enclave East, Kalkaji, New Delhi 110019",
// //     mapLink:
// //       "https://www.google.com/maps/search/?api=1&query=Advanced+Pain+Physiotherapy+Centre+Kalkaji+Delhi",
// //     phone: "9220385419",
// //     email: "advancedpainphysiotherapy@gmail.com",
// //     hours: "8am To 8pm",
// //     facebook: "https://www.facebook.com/advancedpainphysiotherapy",
// //     Instagram: "https://www.instagram.com/advancedpainphysio/",
// //    description: "Dr. Ashish Sharma, PT is a highly skilled and patient-focused Physiotherapist in Delhi NCR with over 13 years of experience. He specializes in pain management, musculoskeletal rehabilitation, sports injury recovery, and post-operative physiotherapy. Dr. Ashish Sharma follows a holistic and evidence-based approach aimed at restoring mobility, reducing pain, and improving overall quality of life for patients of all age groups. His core expertise includes orthopedic physiotherapy, neurological rehabilitation, spine care, posture correction, and treatment of chronic back pain, neck pain, knee pain, joint stiffness, sciatica, arthritis, and posture-related disorders. Widely trusted in Delhi NCR, he is known for treating back pain and slip disc conditions, cervical and lumbar spondylosis, sports injuries, knee replacement and post-surgery rehabilitation, stroke and neurological conditions, shoulder pain, frozen shoulder, and rotator cuff injuries. Dr. Ashish Sharma integrates advanced physiotherapy techniques such as manual therapy, electrotherapy, dry needling, exercise therapy, and ergonomic correction to ensure long-term recovery. He strongly believes in patient education, preventive care, and personalized treatment planning. Known for his professionalism, ethical approach, compassion, and continuous learning, Dr. Ashish Sharma stays updated with the latest advancements in clinical physiotherapy, rehabilitation sciences, and sports medicine, making his practice one of the most trusted physiotherapy services in Delhi."
// // ,
// //     services: [
// //       {
// //         name: "Best Chiropractor",
// //         image:
// //           chiropractorImage,
// //       },
// //       {
// //         name: "Best Physiotherapy Center",
// //         image:
// //          Physiotherapy01,
// //       },
// //       {
// //         name: "Best Physiotherapist",
// //         image:
// //           Physiotherapy,
// //       },
// //       {
// //         name: "Best Back Pain Treatment",
// //         image:
// //          backpain,
// //       },
// //       {
// //         name: "Best Lymphatic Massage Therapist",
// //         image:
// //          lymphatic,
// //       },
// //       {
// //         name: "Best Sciatica Pain Treatment",
// //         image:
// //          sciatic,
// //       },
// //       {
// //         name: "Best Slip Disc Treatment",
// //         image:
// //           slipdisc,
// //       },
// //       {
// //         name: "Best Arthritis Treatment",
// //         image:
// //           arthritis,
// //       },
// //       {
// //         name: "Best Knee Pain Treatment",
// //         image:
// //           KneePain,
// //       },
// //       {
// //         name: "Best Cervical Pain Treatment",
// //         image:
// //          cervical,
// //       },
// //       {
// //         name: "Best Shoulder Pain Treatment",
// //         image:
// //           ShoulderPain,
// //       },
// //       {
// //         name: "Best Neck Spasm Treatment",
// //         image:
// //           neck,
// //       },
// //       {
// //         name: "Best Cupping Therapy",
// //         image:
// //          Cupping,
// //       },
// //       {
// //         name: "Best Sports Massage Therapy",
// //         image:
// //           sportsMassageImage,
// //       },
// //       {
// //         name: "Best Pain Relief Treatment",
// //         image:
// //           pain,
// //       },
// //       {
// //         name: "Best Orthopedic Rehab",
// //         image:
// //          orthopedic,
// //       },
// //       {
// //         name: "Best Parkinson's Treatment",
// //         image:
// //           parkinsons,
// //       },
// //       {
// //         name: "Best Post-Op Physiotherapy Treatment",
// //         image:
// //           op,
// //       },
// //       {
// //         name: "Best Home Physiotherapy",
// //         image:
// //           Home,
// //       },
// //       {
// //         name: "Affordable Home Physiotherapy",
// //         image:
// //          affordablehome,
// //       },
// //     ],
// //     gallery: [
// //       "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1200&h=800&fit=crop",
// //       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
// //       "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop",
// //     ],
// //   },
// //   "sharma-orthopedic-rehab-centre": {
// //     id: 2,
// //     name: "Sharma Orthopedic and Rehab Centre",
// //     tagline: "Your Partner in Complete Recovery",
// //     rating: 4.9,
// //     specialty: "Specialized Spine & Back Pain Treatment",
// //     address:
// //       "G 243 40 Feet Road, Near Aggarwal Medical Store, Badarpur, New Delhi 110044",
// //     mapLink:
// //       "https://www.google.com/maps/search/?api=1&query=Sharma+Orthopedic+Rehab+Center+G+241+40+Feet+Road+Badarpur+Delhi",
// //     phone: "9220385419",
// //     email: "sharma.ortho@example.com",
// //     hours: "8am To 10pm",
// //     facebook: "https://www.facebook.com/profile.php?id=61584935369686",
// //     Instagram: "https://www.instagram.com/sharma_ortho/",
// //     description:
// //       "Sharma orthopedic rehab center is dedicated for advanced orthopedic care with most effective treatment for Back Pain, Knee Pain, Shoulder Pain, Elbow Pain, Ankle Pain, Joints Pain , Arthritis Pain, Neck Pain, Hip Pain , Sciatica Pain and all kind of bone related pain. The center is led by Dr. Ashish Sharma- Best Ortho- Physiotherapist in Delhi - NCR. He is having 11+ years of experience to treat the different difficult problems of Joints and Spine. He is certified practitioner in Chiropractor and Osteopathic technique by which he used to treat his patient in minimum sessions. He is expert in Chronic Pain management of Sciatica, Slip Disc, Osteoarthritis, Osteoporosis, Rheumatoid Arthritis, Joint Arthritis pain with his advanced technology.",
// //     services: [
// //       {
// //         name: "Best Chiropractor",
// //         image:
// //           chiropractorImage,
// //       },
// //       {
// //         name: "Best Physiotherapy Center",
// //         image:
// //          Physiotherapy01,
// //       },
// //       {
// //         name: "Best Physiotherapist",
// //         image:
// //          Physiotherapy,
// //       },
// //       {
// //         name: "Best Back Pain Treatment",
// //         image:
// //          backpain,
// //       },
// //       {
// //         name: "Best Lymphatic Massage Therapist",
// //         image:
// //           lymphatic,
// //       },
// //       {
// //         name: "Best Sciatica Pain Treatment",
// //         image:
// //          sciatic,
// //       },
// //       {
// //         name: "Best Slip Disc Treatment",
// //         image:
// //           slipdisc,
// //       },
// //       {
// //         name: "Best Arthritis Treatment",
// //         image:
// //           arthritis,
// //       },
// //       {
// //         name: "Best Knee Pain Treatment",
// //         image:
// //           KneePain,
// //       },
// //       {
// //         name: "Best Cervical Pain Treatment",
// //         image:
// //          cervical,
// //       },
// //       {
// //         name: "Best Shoulder Pain Treatment",
// //         image:
// //           ShoulderPain,
// //       },
// //       {
// //         name: "Best Neck Spasm Treatment",
// //         image:
// //           neck,
// //       },
// //       {
// //         name: "Best Cupping Therapy",
// //         image:
// //          Cupping,
// //       },
// //       {
// //         name: "Best Sports Massage Therapy",
// //         image:
// //           sportsMassageImage,
// //       },
// //       {
// //         name: "Best Pain Relief Treatment",
// //         image:
// //           pain,
// //       },
// //       {
// //         name: "Best Orthopedic Rehab",
// //         image:
// //          orthopedic,
// //       },
// //       {
// //         name: "Best Parkinson's Treatment",
// //         image:
// //           parkinsons,
// //       },
// //       {
// //         name: "Best Post-Op Physiotherapy Treatment",
// //         image:
// //          op,
// //       },
// //       {
// //         name: "Best Home Physiotherapy",
// //         image:
// //           Home,
// //       },
// //       {
// //         name: "Affordable Home Physiotherapy",
// //         image:
// //          affordablehome,
// //       },
// //     ],
// //     gallery: [
// //       "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1200&h=800&fit=crop",
// //       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop",
// //       "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop",
// //     ],
// //   },
  
// //   "parth-medicare": {
// //     id: 3,
// //     name: "PARTH MEDICARE",
// //     tagline: "Champions Trust Us, You Can Too",
// //     rating: 4.8,
// //     specialty: "Home Healthcare & Nursing Services",
// //     address: "10/16, Block 10 Nehru Enclave East, Kalkaji 110019",
// //     mapLink:
// //       "https://www.google.com/maps/search/?api=1&query=Parth+Medicare+Nehru+Enclave+Kalkaji+Delhi",
// //     phone: "8076206304",
// //     email: "contact@parthmedicare.com",
// //     hours: "7am To 9pm",
// //     facebook: "#",
// //     Instagram: "#",
// //     description:
// //       "PARTH MEDICARE is a trusted home healthcare service provider offering professional nursing care, home nursing care, blood sample collection at home, home blood sample services, and ICU setup at home. We provide safe, hygienic, and affordable medical services delivered by trained and certified healthcare professionals. Our goal is to ensure hospital-level care at home for patients, including elderly care, post-surgery recovery, and critical care support, with a strong focus on comfort, quality, and reliability.",
// //     services: [
// //       {
// //         name: "Best Nursing Care",
// //         image:
// //           nursingcare,
// //       },
// //       {
// //         name: "Best Home Nursing Care",
// //         image:
// //          nursinghome,
// //       },
// //       {
// //         name: "Best Blood Sample Collection",
// //         image:
// //         bloodsimple,
// //       },
// //       {
// //         name: "Best Home Blood Sample",
// //         image:
// //          bloodsimplehome,
// //       },
// //       {
// //         name: "Best ICU Setup Facility at home",
// //         image:
// //           icu,
// //       },
// //       {
// //         name: "Affordable Home Nursing Facility",
// //         image:
// //          affordable,
// //       },
// //     ],
// //     gallery: [
// //       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop",
// //       "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&h=800&fit=crop",
// //       "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop",
// //     ],
// //   },
// // };
// // const testimonials = [
// //   {
// //     name: "Rajesh Kumar",
// //     rating: 5,
// //     text: "Excellent treatment! My back pain completely disappeared after just a few sessions. The staff is very professional and caring.",
// //     location: "South Delhi",
// //   },
// //   {
// //     name: "Priya Sharma",
// //     rating: 5,
// //     text: "Best physiotherapy center in the area. Dr. Sharma and team are highly skilled.",
// //     location: "South Delhi",
// //   },
// //   {
// //     name: "Amit Singh",
// //     rating: 5,
// //     text: "Amazing experience! The treatment for my knee pain was effective.",
// //     location: "South Delhi",
// //   },
// // ];

// // export default function ClinicDetailPage() {
// //   const { slug } = useParams();
// //   const [selectedImage, setSelectedImage] = useState(0);
// //   const [showAllServices, setShowAllServices] = useState(false);

// //   useEffect(() => {
// //     AOS.init({
// //       duration: 1000,
// //       once: true,
// //       easing: "ease-out",
// //     });

// //     // Add CSS for infinite scroll animation
// //     const style = document.createElement("style");
// //     style.textContent = `
// //       @keyframes scroll {
// //         0% {
// //           transform: translateX(0);
// //         }
// //         100% {
// //           transform: translateX(-50%);
// //         }
// //       }
// //       .animate-scroll {
// //         animation: scroll 120s linear infinite;
// //       }
// //       .animate-scroll:hover {
// //         animation-play-state: paused;
// //       }
// //     `;
// //     document.head.appendChild(style);

// //     return () => {
// //       document.head.removeChild(style);
// //     };
// //   }, []);

// //   const clinic = clinicsData[slug || "Ashish-physiotherapy-centre"];
// //   const theme = clinicThemes[slug || "Ashish-physiotherapy-centre"];
// //   const clinicImage = clinicImages[slug || "Ashish-physiotherapy-centre"];
// //   const clinicLogo = clinicLogos[slug || "Ashish-physiotherapy-centre"];

// //   if (!clinic) {
// //     return (
// //       <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //         <div className="text-center">
// //           <h1 className="text-4xl text-gray-800 mb-4">Clinic Not Found</h1>
// //           <a href="/" className="text-blue-600 hover:underline">
// //             Go back to home
// //           </a>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       {/* Simple Navbar - Only Logo and Book Now */}
// //       <nav className={`${theme.navBg} text-white shadow-lg sticky top-0 z-50`}>
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex justify-between items-center h-24">
// //             <div className="flex items-center">
// //               <a
// //                 href="/"
// //                 className="flex items-center gap-4 text-xl md:text-2xl tracking-wide "
// //               >
// //                 <img
// //                   src={clinicLogo}
// //                   alt={`${clinic.name} Logo`}
// //                   className="h-16 md:h-20 w-auto object-contain bg-white rounded-lg p-2 shadow-md"
// //                 />
// //                 <span className="hidden md:block text-white drop-shadow-lg">
// //                   {clinic.name}
// //                 </span>
// //               </a>
// //             </div>
// //             <button
// //               onClick={() => (window.location.href = "tel:9220385419")}
// //               className="bg-white px-6 py-3 md:px-10 md:py-4 rounded-full text-lg shadow-xl transition-all hover:scale-110 hover:shadow-2xl"
// //               style={{ color: theme.primary }}
// //             >
// //               📞 Call Now
// //             </button>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Main Content */}
// //       <main className="flex-1">
// //         <div className="bg-gradient-to-b from-gray-50 to-white">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// //             {/* Breadcrumb */}
// //             <div className="mb-6 text-sm text-gray-600" data-aos="fade-down">
// //               <a href="/" className={theme.linkHover}>
// //                 Home
// //               </a>
// //               <span className="mx-2">/</span>
// //               <span className="text-gray-800">{clinic.name}</span>
// //             </div>

// //             {/* Hero Content */}
// //             <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
// //               <div data-aos="fade-right">
// //                 <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
// //                   {clinic.name}
// //                 </h1>
// //                 <p
// //                   className="text-xl md:text-2xl mb-6"
// //                   style={{ color: theme.primary }}
// //                 >
// //                   {clinic.tagline}
// //                 </p>

// //                 <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
// //                   {clinic.description}
// //                 </p>
// //               </div>

// //               {/* Image Gallery - Now using clinic-specific image */}
// //               {/* <div data-aos="fade-left">
// //                 <img
// //                   src={clinicImage}
// //                   alt={clinic.name}
// //                   className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-2xl mb-4"
// //                 />
// //               </div> */}

// //               <div data-aos="fade-left">
// //                 <img
// //                   src={clinicImage}
// //                   alt={clinic.name}
// //                   className="w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-[580px] xl:h-[640px] object-cover object-center rounded-3xl shadow-2xl mb-4"
// //                 />
// //               </div>
// //             </div>

// //             {/* Services Section with Images */}
// //             <div id="services" className="mt-29">
// //               <h2
// //                 className="text-3xl md:text-4xl text-gray-900 mb-12 text-center"
// //                 data-aos="fade-up"
// //               >
// //                 Our Services
// //               </h2>

// //               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //                 {(showAllServices
// //                   ? clinic.services
// //                   : clinic.services.slice(0, 6)
// //                 ).map((service, idx) => {
// //                   // "Best" ko remove karke slug banao
// //                   const nameWithoutBest = service.name
// //                     .replace(/^Best\s+/i, "")
// //                     .trim();

// //                   // Slug mein convert karo
// //                   const serviceSlug = nameWithoutBest
// //                     .toLowerCase()
// //                     .replace(/\s+/g, "-")
// //                     .replace(/[^a-z0-9-]/g, "");

// //                   // Display name (Best removed)
// //                   const displayName = nameWithoutBest;

// //                   return (
// //                     <Link
// //                       key={idx}
// //                       to={`/clinic/${slug}/service/${serviceSlug}`}
// //                       data-aos="fade-up"
// //                       data-aos-delay={idx * 100}
// //                     >
// //                       <div className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
// //                         <div className="h-48 overflow-hidden">
// //                           <img
// //                             src={service.image}
// //                             alt={service.name}
// //                             className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
// //                           />
// //                         </div>
// //                         <div className="p-5">
// //                           <h3 className="text-lg text-gray-800 text-center ">
// //                             {displayName}
// //                           </h3>
// //                         </div>
// //                       </div>
// //                     </Link>
// //                   );
// //                 })}
// //               </div>

// //               {/* View More / View Less Button */}
// //               {clinic.services.length > 6 && (
// //                 <div className="text-center mt-8">
// //                   <button
// //                     onClick={() => setShowAllServices(!showAllServices)}
// //                     className={`${theme.buttonBg} text-white px-8 py-3 rounded-full text-lg shadow-lg transition-all hover:scale-105`}
// //                   >
// //                     {showAllServices ? "View Less" : "View More"}
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </main>

// //        {slug !== "Ashish-physiotherapy-centre" && (
// //         <div className="w-full mt-16 mb-16">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             {/* Heading */}
// //             <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-12">
// //               What Our Patients Say
// //             </h2>

// //             {/* Swiper Container */}
// //             <div className="w-full">
// //               <Swiper
// //                 modules={[Autoplay]}
// //                 autoplay={{
// //                   delay: 2500,
// //                   disableOnInteraction: false,
// //                 }}
// //                 loop={true}
// //                 spaceBetween={16}
// //                 slidesPerView={1}
// //                 breakpoints={{
// //                   // 📱 Mobile (0-639px): 1 card
// //                   0: {
// //                     slidesPerView: 1,
// //                     spaceBetween: 16,
// //                   },
// //                   // 📱 Tablet (640-1023px): 2 cards
// //                   640: {
// //                     slidesPerView: 2,
// //                     spaceBetween: 20,
// //                   },
// //                   // 💻 Laptop (1024px+): 3 cards
// //                   1024: {
// //                     slidesPerView: 3,
// //                     spaceBetween: 24,
// //                   },
// //                 }}
// //                 className="w-full pb-4"
// //               >
// //                 {[
// //                   {
// //                     name: "Rajesh Kumar",
// //                     location: "South Delhi",
// //                     review:
// //                       "Excellent treatment! My back pain disappeared after just a few sessions.",
// //                   },
// //                   {
// //                     name: "Priya Sharma",
// //                     location: "North Delhi",
// //                     review:
// //                       "Best physiotherapy center in Delhi. Very professional and caring staff.",
// //                   },
// //                   {
// //                     name: "Amit Singh",
// //                     location: "East Delhi",
// //                     review:
// //                       "Highly recommended! Got relief from chronic knee pain in just 2 weeks.",
// //                   },
// //                   {
// //                     name: "Neha Gupta",
// //                     location: "West Delhi",
// //                     review:
// //                       "Amazing experience. The therapists are very knowledgeable and supportive.",
// //                   },
// //                   {
// //                     name: "Vikas Verma",
// //                     location: "Central Delhi",
// //                     review:
// //                       "Great service! My shoulder mobility improved significantly.",
// //                   },
// //                 ].map((testimonial, i) => (
// //                   <SwiperSlide key={i} className="h-auto">
// //                     <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
// //                       {/* Stars */}
// //                       <div className="flex gap-1 mb-4">
// //                         {[...Array(5)].map((_, j) => (
// //                           <svg
// //                             key={j}
// //                             className="w-5 h-5 text-yellow-400 fill-current"
// //                             viewBox="0 0 20 20"
// //                           >
// //                             <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
// //                           </svg>
// //                         ))}
// //                       </div>

// //                       {/* Review Text */}
// //                       <p className="text-gray-700 italic mb-6 flex-grow text-base leading-relaxed">
// //                         "{testimonial.review}"
// //                       </p>

// //                       {/* Name & Location */}
// //                       <div className="border-t border-gray-200 pt-4">
// //                         <p className="font-semibold text-gray-900 text-lg">
// //                           {testimonial.name}
// //                         </p>
// //                         <p className="text-sm text-gray-600 mt-1">
// //                           {testimonial.location}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </SwiperSlide>
// //                 ))}
// //               </Swiper>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Location Slider - Only show for Sharma Orthopedic */}
// //       {slug === "sharma-orthopedic-rehab-centre" && <LocationSlider />}

// //       {/* Unique Footer for each clinic */}
// //       <footer
// //         className="text-white mt-20"
// //         style={{ backgroundColor: theme.dark }}
// //       >
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// //           <div className="grid md:grid-cols-3 gap-8">
// //             <div>
// //               <h3 className="text-2xl mb-4">{clinic.name}</h3>
// //               <p className="text-gray-400">{clinic.tagline}</p>
// //             </div>

// //             <div>
// //               <h4 className="text-lg mb-4">Quick Links</h4>
// //               <ul className="space-y-2 text-gray-400">
// //                 <li>
// //                   <a href="/" className="hover:text-white transition-colors">
// //                     Home
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a
// //                     href="#services"
// //                     className="hover:text-white transition-colors"
// //                   >
// //                     Services
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a
// //                     href="#contact"
// //                     className="hover:text-white transition-colors"
// //                   >
// //                     Contact
// //                   </a>
// //                 </li>
// //               </ul>
// //             </div>

// //             <div>
// //               <h4 className="text-lg mb-4">Contact Info</h4>
// //               <ul className="space-y-2 text-gray-400">
// //                 <li>📞 {clinic.phone}</li>
// //                 <li>📧 {clinic.email}</li>
// //                 <li>🕒 {clinic.hours}</li>
// //               </ul>
// //             </div>
// //           </div>

// //           <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
// //             <p>&copy; 2025 {clinic.name}. All rights reserved.</p>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }




// import React, { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import LocationSlider from "../../../components/SharmaOrthopedic /Location/Location";
// import SharmaImage from "../../../assets/Sharma.jpeg";
// import ParthMedicareImage from "../../../assets/ParthMedicareImage.jpg";
// import AdvancedPainImage from "../../../assets/Owner.png";
// import SharmaLogo from "../../../assets/SharmaLogo.png";
// import ParthLogo from "../../../assets/ParthLogo.png";
// import Logo from "../../../assets/Logo.jpeg";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import { MapPin } from 'lucide-react';
// import backpain from "../../../assets/services/1.png";
// import chiropractorImage from '../../../assets/Specialities/2.png'
// import slipdisc from "../../../assets/services/16.png";
// import arthritis from "../../../assets/services/12.png";
// import sciatic from "../../../assets/services/15.png";
// import KneePain from "../../../assets/services/2.png";
// import cervical from "../../../assets/services/17.png";
// import ShoulderPain from "../../../assets/services/3.png";
// import neck from "../../../assets/services/9.png";
// import Cupping from '../../../assets/Therapy/11.png'
// import sportsMassageImage from '../../../assets/Specialities/12.png'
// import orthopedic from "../../../assets/services/13.png";
// import parkinsons from "../../../assets/services/18.png";
// import Home from '../../../assets/Specialities/1.png'
// import nursingcare from '../../../assets/parth/1.png'
// import nursinghome from '../../../assets/parth/2.png'
// import bloodsimple from '../../../assets/parth/3.png'
// import bloodsimplehome from '../../../assets/parth/4.png'
// import icu from '../../../assets/parth/5.png'
// import affordable from '../../../assets/parth/6.png'
// import Physiotherapy from '../../../assets/sharma/2.png'
// import lymphatic from '../../../assets/sharma/3.png'
// import pain from '../../../assets/sharma/4.png'
// import op from '../../../assets/sharma/5.png'
// import affordablehome from '../../../assets/sharma/6.png'
// import Physiotherapy01 from '../../../assets/sharma/1.png'

// import "swiper/css";

// // Clinic-specific themes with unique colors
// const clinicThemes = {
//   "Ashish-physiotherapy-centre": {
//     primary: "#8ab72e",
//     secondary: "#7aa625",
//     accent: "#a8d444",
//     dark: "#2d3748",
//     navBg: "bg-gradient-to-r from-[#8ab72e] to-[#7aa625]",
//     buttonBg: "bg-[#8ab72e] hover:bg-[#7aa625]",
//     linkHover: "hover:text-[#8ab72e]",
//   },
//   "sharma-orthopedic-rehab-centre": {
//     primary: "#16a34a",
//     secondary: "#f97316",
//     accent: "#22c55e",
//     dark: "#1e293b",
//     navBg: "bg-gradient-to-r from-[#16a34a] to-[#f97316]",
//     buttonBg: "bg-[#16a34a] hover:bg-[#f97316]",
//     linkHover: "hover:text-[#16a34a]",
//   },
//   "parth-medicare": {
//     primary: "#eab308",
//     secondary: "#f97316",
//     accent: "#fbbf24",
//     dark: "#1f2937",
//     navBg: "bg-gradient-to-r from-[#eab308] to-[#f97316]",
//     buttonBg: "bg-[#eab308] hover:bg-[#f97316]",
//     linkHover: "hover:text-[#eab308]",
//   },
// };

// // Clinic Images Object
// const clinicImages = {
//   "Ashish-physiotherapy-centre": AdvancedPainImage,
//   "sharma-orthopedic-rehab-centre": SharmaImage,
//   "parth-medicare": ParthMedicareImage,
// };

// // Clinic Logos Object
// const clinicLogos = {
//   "Ashish-physiotherapy-centre": Logo,
//   "sharma-orthopedic-rehab-centre": SharmaLogo,
//   "parth-medicare": ParthLogo,
// };

// // Clinics data with unique content
// const clinicsData = {
//   "Ashish-physiotherapy-centre": {
//     id: 1,
//     name: "Dr. Ashish Sharma",
//     tagline: "Excellence in Pain Management & Rehabilitation",
//     rating: 5.0,
//     specialty: "Advanced Pain Management & Holistic Rehabilitation",
//     address: "10/16, Block 10 Nehru Enclave East, Kalkaji, New Delhi 110019",
//     mapLink:
//       "https://www.google.com/maps/search/?api=1&query=Advanced+Pain+Physiotherapy+Centre+Kalkaji+Delhi",
//     phone: "9220385419",
//     email: "advancedpainphysiotherapy@gmail.com",
//     hours: "8am To 8pm",
//     facebook: "https://www.facebook.com/advancedpainphysiotherapy",
//     Instagram: "https://www.instagram.com/advancedpainphysio/",
//    description: "Dr. Ashish Sharma, PT is a highly skilled and patient-focused Physiotherapist in Delhi NCR with over 13 years of experience. He specializes in pain management, musculoskeletal rehabilitation, sports injury recovery, and post-operative physiotherapy. Dr. Ashish Sharma follows a holistic and evidence-based approach aimed at restoring mobility, reducing pain, and improving overall quality of life for patients of all age groups. His core expertise includes orthopedic physiotherapy, neurological rehabilitation, spine care, posture correction, and treatment of chronic back pain, neck pain, knee pain, joint stiffness, sciatica, arthritis, and posture-related disorders. Widely trusted in Delhi NCR, he is known for treating back pain and slip disc conditions, cervical and lumbar spondylosis, sports injuries, knee replacement and post-surgery rehabilitation, stroke and neurological conditions, shoulder pain, frozen shoulder, and rotator cuff injuries. Dr. Ashish Sharma integrates advanced physiotherapy techniques such as manual therapy, electrotherapy, dry needling, exercise therapy, and ergonomic correction to ensure long-term recovery. He strongly believes in patient education, preventive care, and personalized treatment planning. Known for his professionalism, ethical approach, compassion, and continuous learning, Dr. Ashish Sharma stays updated with the latest advancements in clinical physiotherapy, rehabilitation sciences, and sports medicine, making his practice one of the most trusted physiotherapy services in Delhi."
// ,
//     services: [
//       {
//         name: "Best Chiropractor",
//         image:
//           chiropractorImage,
//       },
//       {
//         name: "Best Physiotherapy Center",
//         image:
//          Physiotherapy01,
//       },
//       {
//         name: "Best Physiotherapist",
//         image:
//           Physiotherapy,
//       },
//       {
//         name: "Best Back Pain Treatment",
//         image:
//          backpain,
//       },
//       {
//         name: "Best Lymphatic Massage Therapist",
//         image:
//          lymphatic,
//       },
//       {
//         name: "Best Sciatica Pain Treatment",
//         image:
//          sciatic,
//       },
//       {
//         name: "Best Slip Disc Treatment",
//         image:
//           slipdisc,
//       },
//       {
//         name: "Best Arthritis Treatment",
//         image:
//           arthritis,
//       },
//       {
//         name: "Best Knee Pain Treatment",
//         image:
//           KneePain,
//       },
//       {
//         name: "Best Cervical Pain Treatment",
//         image:
//          cervical,
//       },
//       {
//         name: "Best Shoulder Pain Treatment",
//         image:
//           ShoulderPain,
//       },
//       {
//         name: "Best Neck Spasm Treatment",
//         image:
//           neck,
//       },
//       {
//         name: "Best Cupping Therapy",
//         image:
//          Cupping,
//       },
//       {
//         name: "Best Sports Massage Therapy",
//         image:
//           sportsMassageImage,
//       },
//       {
//         name: "Best Pain Relief Treatment",
//         image:
//           pain,
//       },
//       {
//         name: "Best Orthopedic Rehab",
//         image:
//          orthopedic,
//       },
//       {
//         name: "Best Parkinson's Treatment",
//         image:
//           parkinsons,
//       },
//       {
//         name: "Best Post-Op Physiotherapy Treatment",
//         image:
//           op,
//       },
//       {
//         name: "Best Home Physiotherapy",
//         image:
//           Home,
//       },
//       {
//         name: "Affordable Home Physiotherapy",
//         image:
//          affordablehome,
//       },
//     ],
//     gallery: [
//       "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop",
//     ],
//     showLocationCards: true, // Added flag
//   },
//   "sharma-orthopedic-rehab-centre": {
//     id: 2,
//     name: "Sharma Orthopedic and Rehab Centre",
//     tagline: "Your Partner in Complete Recovery",
//     rating: 4.9,
//     specialty: "Specialized Spine & Back Pain Treatment",
//     address:
//       "G 243 40 Feet Road, Near Aggarwal Medical Store, Badarpur, New Delhi 110044",
//     mapLink:
//       "https://www.google.com/maps/search/?api=1&query=Sharma+Orthopedic+Rehab+Center+G+241+40+Feet+Road+Badarpur+Delhi",
//     phone: "9220385419",
//     email: "sharma.ortho@example.com",
//     hours: "8am To 10pm",
//     facebook: "https://www.facebook.com/profile.php?id=61584935369686",
//     Instagram: "https://www.instagram.com/sharma_ortho/",
//     description:
//       "Sharma orthopedic rehab center is dedicated for advanced orthopedic care with most effective treatment for Back Pain, Knee Pain, Shoulder Pain, Elbow Pain, Ankle Pain, Joints Pain , Arthritis Pain, Neck Pain, Hip Pain , Sciatica Pain and all kind of bone related pain. The center is led by Dr. Ashish Sharma- Best Ortho- Physiotherapist in Delhi - NCR. He is having 11+ years of experience to treat the different difficult problems of Joints and Spine. He is certified practitioner in Chiropractor and Osteopathic technique by which he used to treat his patient in minimum sessions. He is expert in Chronic Pain management of Sciatica, Slip Disc, Osteoarthritis, Osteoporosis, Rheumatoid Arthritis, Joint Arthritis pain with his advanced technology.",
//     services: [
//       {
//         name: "Best Chiropractor",
//         image:
//           chiropractorImage,
//       },
//       {
//         name: "Best Physiotherapy Center",
//         image:
//          Physiotherapy01,
//       },
//       {
//         name: "Best Physiotherapist",
//         image:
//          Physiotherapy,
//       },
//       {
//         name: "Best Back Pain Treatment",
//         image:
//          backpain,
//       },
//       {
//         name: "Best Lymphatic Massage Therapist",
//         image:
//           lymphatic,
//       },
//       {
//         name: "Best Sciatica Pain Treatment",
//         image:
//          sciatic,
//       },
//       {
//         name: "Best Slip Disc Treatment",
//         image:
//           slipdisc,
//       },
//       {
//         name: "Best Arthritis Treatment",
//         image:
//           arthritis,
//       },
//       {
//         name: "Best Knee Pain Treatment",
//         image:
//           KneePain,
//       },
//       {
//         name: "Best Cervical Pain Treatment",
//         image:
//          cervical,
//       },
//       {
//         name: "Best Shoulder Pain Treatment",
//         image:
//           ShoulderPain,
//       },
//       {
//         name: "Best Neck Spasm Treatment",
//         image:
//           neck,
//       },
//       {
//         name: "Best Cupping Therapy",
//         image:
//          Cupping,
//       },
//       {
//         name: "Best Sports Massage Therapy",
//         image:
//           sportsMassageImage,
//       },
//       {
//         name: "Best Pain Relief Treatment",
//         image:
//           pain,
//       },
//       {
//         name: "Best Orthopedic Rehab",
//         image:
//          orthopedic,
//       },
//       {
//         name: "Best Parkinson's Treatment",
//         image:
//           parkinsons,
//       },
//       {
//         name: "Best Post-Op Physiotherapy Treatment",
//         image:
//          op,
//       },
//       {
//         name: "Best Home Physiotherapy",
//         image:
//           Home,
//       },
//       {
//         name: "Affordable Home Physiotherapy",
//         image:
//          affordablehome,
//       },
//     ],
//     gallery: [
//       "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop",
//     ],
//     showLocationCards: false, // No location cards, has LocationSlider instead
//   },
  
//   "parth-medicare": {
//     id: 3,
//     name: "PARTH MEDICARE",
//     tagline: "Champions Trust Us, You Can Too",
//     rating: 4.8,
//     specialty: "Home Healthcare & Nursing Services",
//     address: "10/16, Block 10 Nehru Enclave East, Kalkaji 110019",
//     mapLink:
//       "https://www.google.com/maps/search/?api=1&query=Parth+Medicare+Nehru+Enclave+Kalkaji+Delhi",
//     phone: "8076206304",
//     email: "contact@parthmedicare.com",
//     hours: "7am To 9pm",
//     facebook: "#",
//     Instagram: "#",
//     description:
//       "PARTH MEDICARE is a trusted home healthcare service provider offering professional nursing care, home nursing care, blood sample collection at home, home blood sample services, and ICU setup at home. We provide safe, hygienic, and affordable medical services delivered by trained and certified healthcare professionals. Our goal is to ensure hospital-level care at home for patients, including elderly care, post-surgery recovery, and critical care support, with a strong focus on comfort, quality, and reliability.",
//     services: [
//       {
//         name: "Best Nursing Care",
//         image:
//           nursingcare,
//       },
//       {
//         name: "Best Home Nursing Care",
//         image:
//          nursinghome,
//       },
//       {
//         name: "Best Blood Sample Collection",
//         image:
//         bloodsimple,
//       },
//       {
//         name: "Best Home Blood Sample",
//         image:
//          bloodsimplehome,
//       },
//       {
//         name: "Best ICU Setup Facility at home",
//         image:
//           icu,
//       },
//       {
//         name: "Affordable Home Nursing Facility",
//         image:
//          affordable,
//       },
//     ],
//     gallery: [
//       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop",
//     ],
//     showLocationCards: true, // Added flag
//   },
// };

// const testimonials = [
//   {
//     name: "Rajesh Kumar",
//     rating: 5,
//     text: "Excellent treatment! My back pain completely disappeared after just a few sessions. The staff is very professional and caring.",
//     location: "South Delhi",
//   },
//   {
//     name: "Priya Sharma",
//     rating: 5,
//     text: "Best physiotherapy center in the area. Dr. Sharma and team are highly skilled.",
//     location: "South Delhi",
//   },
//   {
//     name: "Amit Singh",
//     rating: 5,
//     text: "Amazing experience! The treatment for my knee pain was effective.",
//     location: "South Delhi",
//   },
// ];

// // South Delhi Location Cards Component
// function SouthDelhiLocationCards({ theme }) {
//   const navigate = useNavigate();
  
//   const locations = [
//     { name: 'Kalkaji', slug: 'kalkaji' },
//     { name: 'Greater Kailash', slug: 'greater-kailash' },
//     { name: 'Nehru Place', slug: 'nehru-place' },
//     { name: 'Lajpat Nagar', slug: 'lajpat-nagar' }
//   ];

//   const handleLocationClick = (slug) => {
//     navigate(`/location/${slug}`);
//   };

//   return (
//     <div className="w-full bg-gray-50 py-12 mt-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-12">
//           Our South Delhi Locations
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {locations.map((location, index) => (
//             <button
//               key={index}
//               onClick={() => handleLocationClick(location.slug)}
//               className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer hover:scale-105 hover:-translate-y-1"
//               style={{
//                 borderTop: `4px solid ${theme.primary}`
//               }}
//             >
//               <div className="flex flex-col items-center gap-3">
//                 <MapPin className="w-8 h-8" style={{ color: theme.primary }} />
//                 <h3 className="text-xl text-gray-800 font-medium text-center">
//                   {location.name}
//                 </h3>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ClinicDetailPage() {
//   const { slug } = useParams();
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [showAllServices, setShowAllServices] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-out",
//     });

//     // Add CSS for infinite scroll animation
//     const style = document.createElement("style");
//     style.textContent = `
//       @keyframes scroll {
//         0% {
//           transform: translateX(0);
//         }
//         100% {
//           transform: translateX(-50%);
//         }
//       }
//       .animate-scroll {
//         animation: scroll 120s linear infinite;
//       }
//       .animate-scroll:hover {
//         animation-play-state: paused;
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   const clinic = clinicsData[slug || "Ashish-physiotherapy-centre"];
//   const theme = clinicThemes[slug || "Ashish-physiotherapy-centre"];
//   const clinicImage = clinicImages[slug || "Ashish-physiotherapy-centre"];
//   const clinicLogo = clinicLogos[slug || "Ashish-physiotherapy-centre"];

//   if (!clinic) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="text-center">
//           <h1 className="text-4xl text-gray-800 mb-4">Clinic Not Found</h1>
//           <a href="/" className="text-blue-600 hover:underline">
//             Go back to home
//           </a>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Simple Navbar - Only Logo and Book Now */}
//       <nav className={`${theme.navBg} text-white shadow-lg sticky top-0 z-50`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-24">
//             <div className="flex items-center">
//           <a  
//                 href="/"
//                 className="flex items-center gap-4 text-xl md:text-2xl tracking-wide "
//               >
//                 <img
//                   src={clinicLogo}
//                   alt={`${clinic.name} Logo`}
//                   className="h-16 md:h-20 w-auto object-contain bg-white rounded-lg p-2 shadow-md"
//                 />
//                 <span className="hidden md:block text-white drop-shadow-lg">
//                   {clinic.name}
//                 </span>
//               </a>
//             </div>
//             <button
//               onClick={() => (window.location.href = "tel:9220385419")}
//               className="bg-white px-6 py-3 md:px-10 md:py-4 rounded-full text-lg shadow-xl transition-all hover:scale-110 hover:shadow-2xl"
//               style={{ color: theme.primary }}
//             >
//               📞 Call Now
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="flex-1">
//         <div className="bg-gradient-to-b from-gray-50 to-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//             {/* Breadcrumb */}
//             <div className="mb-6 text-sm text-gray-600" data-aos="fade-down">
//               <a href="/" className={theme.linkHover}>
//                 Home
//               </a>
//               <span className="mx-2">/</span>
//               <span className="text-gray-800">{clinic.name}</span>
//             </div>

//             {/* Hero Content */}
//             <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//               <div data-aos="fade-right">
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
//                   {clinic.name}
//                 </h1>
//                 <p
//                   className="text-xl md:text-2xl mb-6"
//                   style={{ color: theme.primary }}
//                 >
//                   {clinic.tagline}
//                 </p>

//                 <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
//                   {clinic.description}
//                 </p>
//               </div>

//               <div data-aos="fade-left">
//                 <img
//                   src={clinicImage}
//                   alt={clinic.name}
//                   className="w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-[580px] xl:h-[640px] object-cover object-center rounded-3xl shadow-2xl mb-4"
//                 />
//               </div>
//             </div>

//             {/* Services Section with Images */}
//             <div id="services" className="mt-29">
//               <h2
//                 className="text-3xl md:text-4xl text-gray-900 mb-12 text-center"
//                 data-aos="fade-up"
//               >
//                 Our Services
//               </h2>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {(showAllServices
//                   ? clinic.services
//                   : clinic.services.slice(0, 6)
//                 ).map((service, idx) => {
//                   const nameWithoutBest = service.name
//                     .replace(/^Best\s+/i, "")
//                     .trim();

//                   const serviceSlug = nameWithoutBest
//                     .toLowerCase()
//                     .replace(/\s+/g, "-")
//                     .replace(/[^a-z0-9-]/g, "");

//                   const displayName = nameWithoutBest;

//                   return (
//                     <Link
//                       key={idx}
//                       to={`/clinic/${slug}/service/${serviceSlug}`}
//                       data-aos="fade-up"
//                       data-aos-delay={idx * 100}
//                     >
//                       <div className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
//                         <div className="h-48 overflow-hidden">
//                           <img
//                             src={service.image}
//                             alt={service.name}
//                             className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//                           />
//                         </div>
//                         <div className="p-5">
//                           <h3 className="text-lg text-gray-800 text-center ">
//                             {displayName}
//                           </h3>
//                         </div>
//                       </div>
//                     </Link>
//                   );
//                 })}
//               </div>

//               {/* View More / View Less Button */}
//               {clinic.services.length > 6 && (
//                 <div className="text-center mt-8">
//                   <button
//                     onClick={() => setShowAllServices(!showAllServices)}
//                     className={`${theme.buttonBg} text-white px-8 py-3 rounded-full text-lg shadow-lg transition-all hover:scale-105`}
//                   >
//                     {showAllServices ? "View Less" : "View More"}
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Testimonials - Show for all except Ashish */}
//       {slug !== "Ashish-physiotherapy-centre" && (
//         <div className="w-full mt-16 mb-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-12">
//               What Our Patients Say
//             </h2>

//             <div className="w-full">
//               <Swiper
//                 modules={[Autoplay]}
//                 autoplay={{
//                   delay: 2500,
//                   disableOnInteraction: false,
//                 }}
//                 loop={true}
//                 spaceBetween={16}
//                 slidesPerView={1}
//                 breakpoints={{
//                   0: {
//                     slidesPerView: 1,
//                     spaceBetween: 16,
//                   },
//                   640: {
//                     slidesPerView: 2,
//                     spaceBetween: 20,
//                   },
//                   1024: {
//                     slidesPerView: 3,
//                     spaceBetween: 24,
//                   },
//                 }}
//                 className="w-full pb-4"
//               >
//                 {[
//                   {
//                     name: "Rajesh Kumar",
//                     location: "South Delhi",
//                     review:
//                       "Excellent treatment! My back pain disappeared after just a few sessions.",
//                   },
//                   {
//                     name: "Priya Sharma",
//                     location: "North Delhi",
//                     review:
//                       "Best physiotherapy center in Delhi. Very professional and caring staff.",
//                   },
//                   {
//                     name: "Amit Singh",
//                     location: "East Delhi",
//                     review:
//                       "Highly recommended! Got relief from chronic knee pain in just 2 weeks.",
//                   },
//                   {
//                     name: "Neha Gupta",
//                     location: "West Delhi",
//                     review:
//                       "Amazing experience. The therapists are very knowledgeable and supportive.",
//                   },
//                   {
//                     name: "Vikas Verma",
//                     location: "Central Delhi",
//                     review:
//                       "Great service! My shoulder mobility improved significantly.",
//                   },
//                 ].map((testimonial, i) => (
//                   <SwiperSlide key={i} className="h-auto">
//                     <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
//                       <div className="flex gap-1 mb-4">
//                         {[...Array(5)].map((_, j) => (
//                           <svg
//                             key={j}
//                             className="w-5 h-5 text-yellow-400 fill-current"
//                             viewBox="0 0 20 20"
//                           >
//                             <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                           </svg>
//                         ))}
//                       </div>

//                       <p className="text-gray-700 italic mb-6 flex-grow text-base leading-relaxed">
//                         "{testimonial.review}"
//                       </p>

//                       <div className="border-t border-gray-200 pt-4">
//                         <p className="font-semibold text-gray-900 text-lg">
//                           {testimonial.name}
//                         </p>
//                         <p className="text-sm text-gray-600 mt-1">
//                           {testimonial.location}
//                         </p>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* South Delhi Location Cards - Show for Ashish & Parth */}
//       {clinic.showLocationCards && <SouthDelhiLocationCards theme={theme} />}

//       {/* Location Slider - Only show for Sharma Orthopedic */}
//       {slug === "sharma-orthopedic-rehab-centre" && <LocationSlider />}

//       {/* Unique Footer for each clinic */}
//       <footer
//         className="text-white mt-20"
//         style={{ backgroundColor: theme.dark }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="text-2xl mb-4">{clinic.name}</h3>
//               <p className="text-gray-400">{clinic.tagline}</p>
//             </div>

//             <div>
//               <h4 className="text-lg mb-4">Quick Links</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="/" className="hover:text-white transition-colors">
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#services"
//                     className="hover:text-white transition-colors"
//                   >
//                     Services
//                   </a>
//                 </li>
//                 <li>
//                  <a 
//                     href="#contact"
//                     className="hover:text-white transition-colors"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-lg mb-4">Contact Info</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>📞 {clinic.phone}</li>
//                 <li>📧 {clinic.email}</li>
//                 <li>🕒 {clinic.hours}</li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; 2025 {clinic.name}. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LocationSlider from "../../../components/SharmaOrthopedic /Location/Location";
import LocationCards from "../../../pages/DetailPage/ClinicDetailPage/LocationCards";
import SharmaImage from "../../../assets/Sharma.jpeg";
import ParthMedicareImage from "../../../assets/ParthMedicareImage.jpg";
import AdvancedPainImage from "../../../assets/Owner.png";
import SharmaLogo from "../../../assets/SharmaLogo.png";
import ParthLogo from "../../../assets/ParthLogo.png";
import Logo from "../../../assets/Logo.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import backpain from "../../../assets/services/1.png";
import chiropractorImage from '../../../assets/Specialities/2.png'
import slipdisc from "../../../assets/services/16.png";
import arthritis from "../../../assets/services/12.png";
import sciatic from "../../../assets/services/15.png";
import KneePain from "../../../assets/services/2.png";
import cervical from "../../../assets/services/17.png";
import ShoulderPain from "../../../assets/services/3.png";
import neck from "../../../assets/services/9.png";
import Cupping from '../../../assets/Therapy/11.png'
import sportsMassageImage from '../../../assets/Specialities/12.png'
import orthopedic from "../../../assets/services/13.png";
import parkinsons from "../../../assets/services/18.png";
import Home from '../../../assets/Specialities/1.png'
import nursingcare from '../../../assets/parth/1.png'
import nursinghome from '../../../assets/parth/2.png'
import bloodsimple from '../../../assets/parth/3.png'
import bloodsimplehome from '../../../assets/parth/4.png'
import icu from '../../../assets/parth/5.png'
import affordable from '../../../assets/parth/6.png'
import Physiotherapy from '../../../assets/sharma/2.png'
import lymphatic from '../../../assets/sharma/3.png'
import pain from '../../../assets/sharma/4.png'
import op from '../../../assets/sharma/5.png'
import affordablehome from '../../../assets/sharma/6.png'
import Physiotherapy01 from '../../../assets/sharma/1.png'

import "swiper/css";

// Clinic-specific themes with unique colors
const clinicThemes = {
  "Ashish-physiotherapy-centre": {
    primary: "#8ab72e",
    secondary: "#7aa625",
    accent: "#a8d444",
    dark: "#2d3748",
    navBg: "bg-gradient-to-r from-[#8ab72e] to-[#7aa625]",
    buttonBg: "bg-[#8ab72e] hover:bg-[#7aa625]",
    linkHover: "hover:text-[#8ab72e]",
  },
  "sharma-orthopedic-rehab-centre": {
    primary: "#16a34a",
    secondary: "#f97316",
    accent: "#22c55e",
    dark: "#1e293b",
    navBg: "bg-gradient-to-r from-[#16a34a] to-[#f97316]",
    buttonBg: "bg-[#16a34a] hover:bg-[#f97316]",
    linkHover: "hover:text-[#16a34a]",
  },
  "parth-medicare": {
    primary: "#eab308",
    secondary: "#f97316",
    accent: "#fbbf24",
    dark: "#1f2937",
    navBg: "bg-gradient-to-r from-[#eab308] to-[#f97316]",
    buttonBg: "bg-[#eab308] hover:bg-[#f97316]",
    linkHover: "hover:text-[#eab308]",
  },
};

// Clinic Images Object
const clinicImages = {
  "Ashish-physiotherapy-centre": AdvancedPainImage,
  "sharma-orthopedic-rehab-centre": SharmaImage,
  "parth-medicare": ParthMedicareImage,
};

// Clinic Logos Object
const clinicLogos = {
  "Ashish-physiotherapy-centre": Logo,
  "sharma-orthopedic-rehab-centre": SharmaLogo,
  "parth-medicare": ParthLogo,
};

// Clinics data with unique content
const clinicsData = {
  "Ashish-physiotherapy-centre": {
    id: 1,
    name: "Dr. Ashish Sharma",
    tagline: "Excellence in Pain Management & Rehabilitation",
    rating: 5.0,
    specialty: "Advanced Pain Management & Holistic Rehabilitation",
    address: "10/16, Block 10 Nehru Enclave East, Kalkaji, New Delhi 110019",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Advanced+Pain+Physiotherapy+Centre+Kalkaji+Delhi",
    phone: "9220385419",
    email: "advancedpainphysiotherapy@gmail.com",
    hours: "8am To 8pm",
    facebook: "https://www.facebook.com/advancedpainphysiotherapy",
    Instagram: "https://www.instagram.com/advancedpainphysio/",
   description: "Dr. Ashish Sharma, PT is a highly skilled and patient-focused Physiotherapist in Delhi NCR with over 13 years of experience. He specializes in pain management, musculoskeletal rehabilitation, sports injury recovery, and post-operative physiotherapy. Dr. Ashish Sharma follows a holistic and evidence-based approach aimed at restoring mobility, reducing pain, and improving overall quality of life for patients of all age groups. His core expertise includes orthopedic physiotherapy, neurological rehabilitation, spine care, posture correction, and treatment of chronic back pain, neck pain, knee pain, joint stiffness, sciatica, arthritis, and posture-related disorders. Widely trusted in Delhi NCR, he is known for treating back pain and slip disc conditions, cervical and lumbar spondylosis, sports injuries, knee replacement and post-surgery rehabilitation, stroke and neurological conditions, shoulder pain, frozen shoulder, and rotator cuff injuries. Dr. Ashish Sharma integrates advanced physiotherapy techniques such as manual therapy, electrotherapy, dry needling, exercise therapy, and ergonomic correction to ensure long-term recovery. He strongly believes in patient education, preventive care, and personalized treatment planning. Known for his professionalism, ethical approach, compassion, and continuous learning, Dr. Ashish Sharma stays updated with the latest advancements in clinical physiotherapy, rehabilitation sciences, and sports medicine, making his practice one of the most trusted physiotherapy services in Delhi."
,
    services: [
      {
        name: "Best Chiropractor",
        image:
          chiropractorImage,
      },
      {
        name: "Best Physiotherapy Center",
        image:
         Physiotherapy01,
      },
      {
        name: "Best Physiotherapist",
        image:
          Physiotherapy,
      },
      {
        name: "Best Back Pain Treatment",
        image:
         backpain,
      },
      {
        name: "Best Lymphatic Massage Therapist",
        image:
         lymphatic,
      },
      {
        name: "Best Sciatica Pain Treatment",
        image:
         sciatic,
      },
      {
        name: "Best Slip Disc Treatment",
        image:
          slipdisc,
      },
      {
        name: "Best Arthritis Treatment",
        image:
          arthritis,
      },
      {
        name: "Best Knee Pain Treatment",
        image:
          KneePain,
      },
      {
        name: "Best Cervical Pain Treatment",
        image:
         cervical,
      },
      {
        name: "Best Shoulder Pain Treatment",
        image:
          ShoulderPain,
      },
      {
        name: "Best Neck Spasm Treatment",
        image:
          neck,
      },
      {
        name: "Best Cupping Therapy",
        image:
         Cupping,
      },
      {
        name: "Best Sports Massage Therapy",
        image:
          sportsMassageImage,
      },
      {
        name: "Best Pain Relief Treatment",
        image:
          pain,
      },
      {
        name: "Best Orthopedic Rehab",
        image:
         orthopedic,
      },
      {
        name: "Best Parkinson's Treatment",
        image:
          parkinsons,
      },
      {
        name: "Best Post-Op Physiotherapy Treatment",
        image:
          op,
      },
      {
        name: "Best Home Physiotherapy",
        image:
          Home,
      },
      {
        name: "Affordable Home Physiotherapy",
        image:
         affordablehome,
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop",
    ],
  },
  "sharma-orthopedic-rehab-centre": {
    id: 2,
    name: "Sharma Orthopedic and Rehab Centre",
    tagline: "Your Partner in Complete Recovery",
    rating: 4.9,
    specialty: "Specialized Spine & Back Pain Treatment",
    address:
      "G 243 40 Feet Road, Near Aggarwal Medical Store, Badarpur, New Delhi 110044",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Sharma+Orthopedic+Rehab+Center+G+241+40+Feet+Road+Badarpur+Delhi",
    phone: "9220385419",
    email: "sharma.ortho@example.com",
    hours: "8am To 10pm",
    facebook: "https://www.facebook.com/profile.php?id=61584935369686",
    Instagram: "https://www.instagram.com/sharma_ortho/",
    description:
      "Sharma orthopedic rehab center is dedicated for advanced orthopedic care with most effective treatment for Back Pain, Knee Pain, Shoulder Pain, Elbow Pain, Ankle Pain, Joints Pain , Arthritis Pain, Neck Pain, Hip Pain , Sciatica Pain and all kind of bone related pain. The center is led by Dr. Ashish Sharma- Best Ortho- Physiotherapist in Delhi - NCR. He is having 11+ years of experience to treat the different difficult problems of Joints and Spine. He is certified practitioner in Chiropractor and Osteopathic technique by which he used to treat his patient in minimum sessions. He is expert in Chronic Pain management of Sciatica, Slip Disc, Osteoarthritis, Osteoporosis, Rheumatoid Arthritis, Joint Arthritis pain with his advanced technology.",
    services: [
      {
        name: "Best Chiropractor",
        image:
          chiropractorImage,
      },
      {
        name: "Best Physiotherapy Center",
        image:
         Physiotherapy01,
      },
      {
        name: "Best Physiotherapist",
        image:
         Physiotherapy,
      },
      {
        name: "Best Back Pain Treatment",
        image:
         backpain,
      },
      {
        name: "Best Lymphatic Massage Therapist",
        image:
          lymphatic,
      },
      {
        name: "Best Sciatica Pain Treatment",
        image:
         sciatic,
      },
      {
        name: "Best Slip Disc Treatment",
        image:
          slipdisc,
      },
      {
        name: "Best Arthritis Treatment",
        image:
          arthritis,
      },
      {
        name: "Best Knee Pain Treatment",
        image:
          KneePain,
      },
      {
        name: "Best Cervical Pain Treatment",
        image:
         cervical,
      },
      {
        name: "Best Shoulder Pain Treatment",
        image:
          ShoulderPain,
      },
      {
        name: "Best Neck Spasm Treatment",
        image:
          neck,
      },
      {
        name: "Best Cupping Therapy",
        image:
         Cupping,
      },
      {
        name: "Best Sports Massage Therapy",
        image:
          sportsMassageImage,
      },
      {
        name: "Best Pain Relief Treatment",
        image:
          pain,
      },
      {
        name: "Best Orthopedic Rehab",
        image:
         orthopedic,
      },
      {
        name: "Best Parkinson's Treatment",
        image:
          parkinsons,
      },
      {
        name: "Best Post-Op Physiotherapy Treatment",
        image:
         op,
      },
      {
        name: "Best Home Physiotherapy",
        image:
          Home,
      },
      {
        name: "Affordable Home Physiotherapy",
        image:
         affordablehome,
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop",
    ],
  },
  
  "parth-medicare": {
    id: 3,
    name: "PARTH MEDICARE",
    tagline: "Champions Trust Us, You Can Too",
    rating: 4.8,
    specialty: "Home Healthcare & Nursing Services",
    address: "10/16, Block 10 Nehru Enclave East, Kalkaji 110019",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Parth+Medicare+Nehru+Enclave+Kalkaji+Delhi",
    phone: "8076206304",
    email: "contact@parthmedicare.com",
    hours: "7am To 9pm",
    facebook: "#",
    Instagram: "#",
    description:
      "PARTH MEDICARE is a trusted home healthcare service provider offering professional nursing care, home nursing care, blood sample collection at home, home blood sample services, and ICU setup at home. We provide safe, hygienic, and affordable medical services delivered by trained and certified healthcare professionals. Our goal is to ensure hospital-level care at home for patients, including elderly care, post-surgery recovery, and critical care support, with a strong focus on comfort, quality, and reliability.",
    services: [
      {
        name: "Best Nursing Care",
        image:
          nursingcare,
      },
      {
        name: "Best Home Nursing Care",
        image:
         nursinghome,
      },
      {
        name: "Best Blood Sample Collection",
        image:
        bloodsimple,
      },
      {
        name: "Best Home Blood Sample",
        image:
         bloodsimplehome,
      },
      {
        name: "Best ICU Setup Facility at home",
        image:
          icu,
      },
      {
        name: "Affordable Home Nursing Facility",
        image:
         affordable,
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop",
    ],
  },
};
const testimonials = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Excellent treatment! My back pain completely disappeared after just a few sessions. The staff is very professional and caring.",
    location: "South Delhi",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Best physiotherapy center in the area. Dr. Sharma and team are highly skilled.",
    location: "South Delhi",
  },
  {
    name: "Amit Singh",
    rating: 5,
    text: "Amazing experience! The treatment for my knee pain was effective.",
    location: "South Delhi",
  },
];

export default function ClinicDetailPage() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });

    // Add CSS for infinite scroll animation
    const style = document.createElement("style");
    style.textContent = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-scroll {
        animation: scroll 120s linear infinite;
      }
      .animate-scroll:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const clinic = clinicsData[slug || "Ashish-physiotherapy-centre"];
  const theme = clinicThemes[slug || "Ashish-physiotherapy-centre"];
  const clinicImage = clinicImages[slug || "Ashish-physiotherapy-centre"];
  const clinicLogo = clinicLogos[slug || "Ashish-physiotherapy-centre"];

  if (!clinic) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl text-gray-800 mb-4">Clinic Not Found</h1>
          <a href="/" className="text-blue-600 hover:underline">
            Go back to home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple Navbar - Only Logo and Book Now */}
      <nav className={`${theme.navBg} text-white shadow-lg sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <a
                href="/"
                className="flex items-center gap-4 text-xl md:text-2xl tracking-wide "
              >
                <img
                  src={clinicLogo}
                  alt={`${clinic.name} Logo`}
                  className="h-16 md:h-20 w-auto object-contain bg-white rounded-lg p-2 shadow-md"
                />
                <span className="hidden md:block text-white drop-shadow-lg">
                  {clinic.name}
                </span>
              </a>
            </div>
            <button
              onClick={() => (window.location.href = "tel:9220385419")}
              className="bg-white px-6 py-3 md:px-10 md:py-4 rounded-full text-lg shadow-xl transition-all hover:scale-110 hover:shadow-2xl"
              style={{ color: theme.primary }}
            >
              📞 Call Now
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <div className="bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm text-gray-600" data-aos="fade-down">
              <a href="/" className={theme.linkHover}>
                Home
              </a>
              <span className="mx-2">/</span>
              <span className="text-gray-800">{clinic.name}</span>
            </div>

            {/* Hero Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div data-aos="fade-right">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
                  {clinic.name}
                </h1>
                <p
                  className="text-xl md:text-2xl mb-6"
                  style={{ color: theme.primary }}
                >
                  {clinic.tagline}
                </p>

                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  {clinic.description}
                </p>
              </div>

              {/* Image Gallery - Now using clinic-specific image */}
              {/* <div data-aos="fade-left">
                <img
                  src={clinicImage}
                  alt={clinic.name}
                  className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-2xl mb-4"
                />
              </div> */}

              <div data-aos="fade-left">
                <img
                  src={clinicImage}
                  alt={clinic.name}
                  className="w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-[580px] xl:h-[640px] object-cover object-center rounded-3xl shadow-2xl mb-4"
                />
              </div>
            </div>

            {/* Services Section with Images */}
            <div id="services" className="mt-29">
              <h2
                className="text-3xl md:text-4xl text-gray-900 mb-12 text-center"
                data-aos="fade-up"
              >
                Our Services
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(showAllServices
                  ? clinic.services
                  : clinic.services.slice(0, 6)
                ).map((service, idx) => {
                  // "Best" ko remove karke slug banao
                  const nameWithoutBest = service.name
                    .replace(/^Best\s+/i, "")
                    .trim();

                  // Slug mein convert karo
                  const serviceSlug = nameWithoutBest
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "");

                  // Display name (Best removed)
                  const displayName = nameWithoutBest;

                  return (
                    <Link
                      key={idx}
                      to={`/clinic/${slug}/service/${serviceSlug}`}
                      data-aos="fade-up"
                      data-aos-delay={idx * 100}
                    >
                      <div className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                        <div className="h-48 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg text-gray-800 text-center ">
                            {displayName}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* View More / View Less Button */}
              {clinic.services.length > 6 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAllServices(!showAllServices)}
                    className={`${theme.buttonBg} text-white px-8 py-3 rounded-full text-lg shadow-lg transition-all hover:scale-105`}
                  >
                    {showAllServices ? "View Less" : "View More"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

       {slug !== "Ashish-physiotherapy-centre" && (
        <div className="w-full mt-16 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-12">
              What Our Patients Say
            </h2>

            {/* Swiper Container */}
            <div className="w-full">
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  // 📱 Mobile (0-639px): 1 card
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                  },
                  // 📱 Tablet (640-1023px): 2 cards
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  // 💻 Laptop (1024px+): 3 cards
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                className="w-full pb-4"
              >
                {[
                  {
                    name: "Rajesh Kumar",
                    location: "South Delhi",
                    review:
                      "Excellent treatment! My back pain disappeared after just a few sessions.",
                  },
                  {
                    name: "Priya Sharma",
                    location: "North Delhi",
                    review:
                      "Best physiotherapy center in Delhi. Very professional and caring staff.",
                  },
                  {
                    name: "Amit Singh",
                    location: "East Delhi",
                    review:
                      "Highly recommended! Got relief from chronic knee pain in just 2 weeks.",
                  },
                  {
                    name: "Neha Gupta",
                    location: "West Delhi",
                    review:
                      "Amazing experience. The therapists are very knowledgeable and supportive.",
                  },
                  {
                    name: "Vikas Verma",
                    location: "Central Delhi",
                    review:
                      "Great service! My shoulder mobility improved significantly.",
                  },
                ].map((testimonial, i) => (
                  <SwiperSlide key={i} className="h-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, j) => (
                          <svg
                            key={j}
                            className="w-5 h-5 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-700 italic mb-6 flex-grow text-base leading-relaxed">
                        "{testimonial.review}"
                      </p>

                      {/* Name & Location */}
                      <div className="border-t border-gray-200 pt-4">
                        <p className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}

      {/* Location Cards - Show for Ashish and Parth only */}
      {(slug === "Ashish-physiotherapy-centre" || slug === "parth-medicare") && <LocationCards clinicSlug={slug} />}

      {/* Location Slider - Only show for Sharma Orthopedic */}
      {slug === "sharma-orthopedic-rehab-centre" && <LocationSlider />}

      {/* Unique Footer for each clinic */}
      <footer
        className="text-white mt-20"
        style={{ backgroundColor: theme.dark }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl mb-4">{clinic.name}</h3>
              <p className="text-gray-400">{clinic.tagline}</p>
            </div>

            <div>
              <h4 className="text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 {clinic.phone}</li>
                <li>📧 {clinic.email}</li>
                <li>🕒 {clinic.hours}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 {clinic.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}