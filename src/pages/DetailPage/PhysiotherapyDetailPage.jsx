

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import { ChevronLeft, CheckCircle, Star } from "lucide-react";
// import { servicesData } from "../../components/ServiceCard/servicesData.js";
// import { servicesDataSpecialized } from "../../components/ServiceCard/servicesDataSpecialized.js";
// import { therapyData } from "../../components/TherapyExpertise/therapyData.js";
// import { conditionsData } from "../../components/ConditionsDataSection/ConditionsData.js";
// import RelatedConditionsSlider from "./RelatedConditionsSlider/RelatedConditionsSlider.jsx";
// import CitySelection from "../../components/CitySelection/CitySelection.jsx";

// // ─── Merge all services safely ────────────────────────────────────────────────
// const allServicesData = [
//   ...servicesData,
//   ...servicesDataSpecialized,
//   ...therapyData,
// ];

// const defaultBenefits = [
//   "Reduced pain and inflammation",
//   "Improved range of motion and flexibility",
//   "Increased strength and stability",
//   "Prevention of further injury",
//   "Enhanced blood circulation and nutrient exchange",
//   "Early return to work and sports activities",
// ];

// const getCategoryKeywords = (serviceCategory) => {
//   const mappings = {
//     "Spine Conditions":       ["Spinal", "Nerve"],
//     "Joint Conditions":       ["Shoulder", "Hand"],
//     "Knee Conditions":        ["Knee"],
//     Neurological:             ["Neurological", "Nerve"],
//     "Nerve Conditions":       ["Nerve"],
//     "Foot Conditions":        ["Foot"],
//     "Elbow Conditions":       ["Hand"],
//     "Pain Conditions":        ["Pain"],
//     "Sports Injury":          ["Sports Injury"],
//     "Specialized Care":       ["Specialized"],
//     "Respiratory Care":       ["Respiratory"],
//     "Post-Surgical Care":     ["Surgical"],
//     "Convenience Care":       ["Home"],
//     "Clinical Care":          ["Clinic"],
//     "Virtual Care":           ["Virtual", "Tele"],
//     "Athletic Performance":   ["Sports"],
//     "Orthopedic Care":        ["Ortho", "Joint"],
//     "Workplace Health":       ["Ergonomics"],
//     "Women's Wellness":       ["Women"],
//     "Child Development":      ["Pediatric", "Child"],
//     "Senior Care":            ["Geriatric", "Elder"],
//     "Recovery & Performance": ["Recovery", "Massage"],
//     "Surgical Recovery":      ["Surgery"],
//     "Spinal Health":          ["Spine", "Chiropractic"],
//     "Lymphatic Massage":      ["Lymphatic", "Massage"],
//     Chiropractic:             ["Chiropractic", "Adjustment"],
//   };
//   return mappings[serviceCategory] || [serviceCategory];
// };

// const getDetailedContent = (slug) => {
//   const service = allServicesData.find((s) => s && s.slug === slug);
//   return service?.sections || [];
// };

// export default function PhysiotherapyDetailPage() {
//   const { slug }    = useParams();
//   const navigate    = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);

//   // ── Safe find (null-guard) ────────────────────────────────────────────────
//   const service         = allServicesData.find((s) => s && s.slug === slug);
//   const detailedSections = getDetailedContent(slug);
//   const benefits        = service?.benefits || defaultBenefits;

//   const customTreatmentText =
//     service?.customTreatmentText ||
//     `If you are suffering from ${service?.title}, contact Dr. Ashish Sharma – Best Physiotherapist at Advanced Pain Physiotherapy Centre for effective pain relief and recovery.`;

//   // ── SEO values — priority: servicesData.seo → generic fallback ───────────
//   //
//   // servicesData.js mein har service ka unique seo object hai:
//   //   seo.title       → "Back Pain Treatment in Delhi | Advanced Pain Physiotherapy"
//   //   seo.description → 155-char unique description with location keywords
//   //   seo.keywords    → 10 targeted location+treatment keywords
//   //   seo.canonical   → exact canonical URL for that service page
//   //
//   // servicesDataSpecialized / therapyData mein seo object nahi hoga
//   // toh unke liye generic fallback use hoga automatically.

//   const seoTitle = service?.seo?.title
//     ?? (service
//       ? `${service.title} Treatment in Delhi | Advanced Pain Physiotherapy`
//       : "Physiotherapy Treatment | Advanced Pain Physiotherapy");

//   const seoDescription = service?.seo?.description
//     ?? (service
//       ? `Get expert ${service.title} treatment by certified physiotherapists at Advanced Pain Physiotherapy Centre, Kalkaji, South Delhi. Personalized care for faster recovery. Book now!`
//       : "Advanced Pain Physiotherapy Centre offers expert physiotherapy by certified professionals. Book your appointment today!");

//   const seoKeywords = service?.seo?.keywords
//     ?? (service
//       ? `${service.title} treatment delhi, ${service.title.toLowerCase()} physiotherapy kalkaji, best ${service.title.toLowerCase()} treatment south delhi, ${service.category} physiotherapy delhi, Advanced Pain Physiotherapy`
//       : "physiotherapy delhi, pain treatment kalkaji, Advanced Pain Physiotherapy");

//   // Self-canonical — unique per page (from seo object or auto-generated)
//   const canonicalUrl = service?.seo?.canonical
//     ?? `https://advancepainphysiotherapy.com/services/${slug}`;

//   // OG image — imported images are webpack objects, not strings → use fallback URL
//   const ogImage =
//     typeof service?.image === "string"
//       ? service.image
//       : "https://advancepainphysiotherapy.com/og-physiotherapy.jpg";

//   // ── Schema.org — MedicalProcedure ────────────────────────────────────────
//   const structuredData = service
//     ? {
//         "@context": "https://schema.org",
//         "@type": "MedicalProcedure",
//         name: service.title,
//         description: service.description,
//         url: canonicalUrl,
//         procedureType: "Physiotherapy",
//         provider: {
//           "@type": "MedicalBusiness",
//           name: "Advanced Pain Physiotherapy Centre",
//           url: "https://advancepainphysiotherapy.com",
//           telephone: "+91-9220385419",
//           address: {
//             "@type": "PostalAddress",
//             streetAddress: "Nehru Enclave",
//             addressLocality: "Kalkaji",
//             addressRegion: "South Delhi",
//             addressCountry: "IN",
//           },
//         },
//       }
//     : null;

//   useEffect(() => {
//     console.log("🔍 Slug:", slug);
//     console.log("✅ Service:", service?.title ?? "❌ NOT FOUND");
//     console.log("🏷️ SEO Title:", seoTitle);
//   }, [slug, service]);

//   // ── Safe related conditions (null-guard) ─────────────────────────────────
//   const getRelatedConditions = () => {
//     if (!service) return [];
//     const keywords = getCategoryKeywords(service.category);
//     return conditionsData.filter(
//       (condition) =>
//         condition &&
//         condition.slug &&
//         condition.category &&
//         keywords.some((kw) =>
//           condition.category.toLowerCase().includes(kw.toLowerCase())
//         )
//     );
//   };

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     const timer = setTimeout(() => setIsLoading(false), 300);
//     return () => clearTimeout(timer);
//   }, [slug]);

//   // ── Loading state ─────────────────────────────────────────────────────────
//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8ab72e] border-solid mx-auto mb-4" />
//           <p className="text-gray-600 text-lg">Loading therapy details...</p>
//         </div>
//       </div>
//     );
//   }

//   // ── 404 state ─────────────────────────────────────────────────────────────
//   if (!service) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center max-w-md mx-auto px-4">
//           <div className="text-6xl mb-4">😕</div>
//           <h2 className="text-3xl text-gray-700 mb-4">Service Not Found</h2>
//           <p className="text-gray-600 mb-3">The service you're looking for doesn't exist.</p>
//           <p className="text-sm text-gray-500 mb-6 font-mono bg-gray-100 p-3 rounded">
//             Slug: <span className="text-red-600">{slug}</span>
//           </p>
//           <button
//             onClick={() => navigate("/")}
//             className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300 transform hover:scale-105 shadow-lg"
//           >
//             ← Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // ── Main render ───────────────────────────────────────────────────────────
//   return (
//     <>
//       {/* ════════════════════════════════════════════════════════════════════
//           REACT HELMET — SEO
//           Title, description, keywords, canonical, OG, Twitter, Schema.org
//           All values come from servicesData.seo (unique per service).
//           servicesDataSpecialized / therapyData use generic fallback.
//       ════════════════════════════════════════════════════════════════════ */}
//       <Helmet>
//         {/* ── Primary SEO ── */}
//         <title>{seoTitle}</title>
//         <meta name="description" content={seoDescription} />
//         <meta name="keywords"    content={seoKeywords} />

//         {/* ── Self-canonical (unique per page — no duplicate content) ── */}
//         <link rel="canonical" href={canonicalUrl} />

//         {/* ── Open Graph (Facebook / WhatsApp / LinkedIn share) ── */}
//         <meta property="og:type"         content="website" />
//         <meta property="og:title"        content={seoTitle} />
//         <meta property="og:description"  content={seoDescription} />
//         <meta property="og:url"          content={canonicalUrl} />
//         <meta property="og:image"        content={ogImage} />
//         <meta property="og:image:width"  content="1200" />
//         <meta property="og:image:height" content="630" />
//         <meta property="og:image:alt"    content={`${service.title} treatment at Advanced Pain Physiotherapy`} />
//         <meta property="og:site_name"    content="Advanced Pain Physiotherapy" />
//         <meta property="og:locale"       content="en_IN" />

//         {/* ── Twitter Card ── */}
//         <meta name="twitter:card"        content="summary_large_image" />
//         <meta name="twitter:title"       content={seoTitle} />
//         <meta name="twitter:description" content={seoDescription} />
//         <meta name="twitter:image"       content={ogImage} />

//         {/* ── Crawl directives ── */}
//         <meta name="robots" content="index, follow" />

//         {/* ── Schema.org JSON-LD structured data ── */}
//         {structuredData && (
//           <script type="application/ld+json">
//             {JSON.stringify(structuredData)}
//           </script>
//         )}
//       </Helmet>
//       {/* ═══════════════════════════════════════════════════════════════════ */}

//       <div className="min-h-screen bg-gray-50">

//         {/* ── Hero Banner ── */}
//         <div
//           className="relative h-64 md:h-80 bg-gradient-to-r from-[#8ab72e] to-[#6d9424] overflow-hidden animate-fade-in"
//           style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
//         >
//           <div className="absolute inset-0 flex items-center">
//             <div className="max-w-7xl mx-auto px-4 w-full">
//               <button
//                 onClick={() => navigate(-1)}
//                 className="mb-4 flex items-center text-white hover:text-white/80 transition-colors"
//               >
//                 <ChevronLeft className="w-5 h-5 mr-1" />
//                 <span>Back</span>
//               </button>
//               <div className="flex items-center mb-3">
//                 <CheckCircle className="w-8 h-8 mr-3 text-white" />
//                 {/* h1 contains the service name — important for on-page SEO */}
//                 <h1 className="text-2xl md:text-4xl text-white animate-slide-up">
//                   {service.title}
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Main Content ── */}
//         <div
//           className="max-w-7xl mx-auto px-4 py-8 md:py-12"
//           style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
//         >
//           <div className="space-y-6">
//             <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

//               {/* Image */}
//               <div className="lg:col-span-2">
//                 <article className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-right">
//                   <img
//                     src={service.image}
//                     alt={`${service.title} treatment at Advanced Pain Physiotherapy Kalkaji Delhi`}
//                     loading="lazy"
//                     className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px] object-contain bg-gray-50"
//                   />
//                 </article>
//               </div>

//               {/* About section */}
//               <div className="lg:col-span-3">
//                 <article className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
//                   <div className="flex items-center mb-6">
//                     <div className="bg-[#8ab72e]/10 p-3 rounded-full mr-4">
//                       <CheckCircle className="w-8 h-8 text-[#8ab72e]" />
//                     </div>
//                     <h2 className="text-2xl md:text-3xl text-gray-800">
//                       About {service.title}
//                     </h2>
//                   </div>

//                   <div className="space-y-4 text-gray-700 leading-relaxed">
//                     <p className="text-base md:text-lg">{service.description}</p>

//                     {detailedSections.length > 0 && detailedSections[0].content && (
//                       <div className="mt-6 space-y-4">
//                         {detailedSections[0].content.split("\n\n").map((paragraph, idx) => {
//                           if (paragraph.trim().endsWith(":")) {
//                             return (
//                               <h3 key={idx} className="text-xl font-bold text-gray-900 mt-6 mb-3">
//                                 {paragraph.trim()}
//                               </h3>
//                             );
//                           }
//                           if (paragraph.includes("•")) {
//                             const lines = paragraph.split("\n").filter((l) => l.trim());
//                             return (
//                               <div key={idx} className="bg-gradient-to-r from-[#8ab72e]/5 to-transparent p-5 rounded-lg border-l-4 border-[#8ab72e]">
//                                 <ul className="space-y-3">
//                                   {lines.map((line, li) => {
//                                     const text = line.replace("•", "").trim();
//                                     return text ? (
//                                       <li key={li} className="flex items-start">
//                                         <div className="bg-[#8ab72e] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
//                                           <CheckCircle className="w-3 h-3 text-white" />
//                                         </div>
//                                         <span className="text-gray-700 font-medium">{text}</span>
//                                       </li>
//                                     ) : null;
//                                   })}
//                                 </ul>
//                               </div>
//                             );
//                           }
//                           return paragraph.trim() ? (
//                             <p key={idx} className="text-base leading-relaxed">
//                               {paragraph.trim()}
//                             </p>
//                           ) : null;
//                         })}
//                       </div>
//                     )}

//                     <div className="mt-6 p-4 bg-[#8ab72e]/5 border-l-4 border-[#8ab72e] rounded-r-lg">
//                       <p className="text-base leading-relaxed text-gray-800 font-medium">
//                         {customTreatmentText}
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               </div>
//             </div>

//             {/* Remaining sections */}
//             {detailedSections.slice(1).map((section, sectionIndex) => (
//               <div key={sectionIndex} className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
//                 {section.content && (
//                   <div className="space-y-4">
//                     {section.content.split("\n\n").map((paragraph, idx) => {
//                       if (paragraph.trim().endsWith(":")) {
//                         return (
//                           <h3 key={idx} className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
//                             <Star className="w-6 h-6 mr-2 text-[#8ab72e]" />
//                             {paragraph.trim()}
//                           </h3>
//                         );
//                       }
//                       if (paragraph.includes("•")) {
//                         const lines = paragraph.split("\n").filter((l) => l.trim());
//                         return (
//                           <div key={idx} className="bg-gradient-to-r from-[#8ab72e]/5 to-transparent p-5 rounded-lg border-l-4 border-[#8ab72e]">
//                             <ul className="space-y-3">
//                               {lines.map((line, li) => {
//                                 const text = line.replace("•", "").trim();
//                                 return text ? (
//                                   <li key={li} className="flex items-start">
//                                     <div className="bg-[#8ab72e] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
//                                       <CheckCircle className="w-3 h-3 text-white" />
//                                     </div>
//                                     <span className="text-gray-700 font-medium">{text}</span>
//                                   </li>
//                                 ) : null;
//                               })}
//                             </ul>
//                           </div>
//                         );
//                       }
//                       return paragraph.trim() ? (
//                         <p key={idx} className="text-base leading-relaxed text-gray-700">
//                           {paragraph.trim()}
//                         </p>
//                       ) : null;
//                     })}
//                   </div>
//                 )}
//               </div>
//             ))}

//             {/* Benefits */}
//             <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
//               <div className="flex items-center mb-6">
//                 <div className="bg-[#8ab72e]/10 p-2 rounded-full mr-3">
//                   <CheckCircle className="w-6 h-6 text-[#8ab72e]" />
//                 </div>
//                 <h3 className="text-xl md:text-2xl text-gray-800">
//                   Benefits of {service.title} Physiotherapy
//                 </h3>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {benefits.map((benefit, index) => (
//                   <div
//                     key={index}
//                     className="bg-[#8ab72e]/5 rounded-lg p-4 hover:bg-[#8ab72e]/10 transition-all duration-300 border border-[#8ab72e]/20 transform hover:scale-105"
//                   >
//                     <div className="flex items-start">
//                       <div className="bg-[#8ab72e] rounded-full p-2 mr-3 mt-1 flex-shrink-0">
//                         <CheckCircle className="w-4 h-4 text-white" />
//                       </div>
//                       <p className="text-gray-700">{benefit}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>

//         <CitySelection serviceName={service.title} serviceSlug={slug} />
//       </div>

//       <style>{`
//         @keyframes fade-in       { from { opacity: 0; }                          to { opacity: 1; } }
//         @keyframes slide-up      { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes fade-in-right { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
//         .animate-fade-in        { animation: fade-in 0.6s ease-out; }
//         .animate-slide-up       { animation: slide-up 0.6s ease-out; }
//         .animate-slide-up-delay { animation: slide-up 0.6s ease-out 0.2s both; }
//         .animate-fade-in-right  { animation: fade-in-right 0.6s ease-out; }
//         html { scroll-behavior: smooth; }
//         ::-webkit-scrollbar       { width: 10px; }
//         ::-webkit-scrollbar-track { background: #f1f1f1; }
//         ::-webkit-scrollbar-thumb { background: #8ab72e; border-radius: 5px; }
//         ::-webkit-scrollbar-thumb:hover { background: #6d9424; }
//         * { box-sizing: border-box; }
//       `}</style>
//     </>
//   );
// }



import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, CheckCircle, Star, ChevronDown, PhoneCall } from "lucide-react";
import { servicesData } from "../../components/ServiceCard/servicesData.js";
import { servicesDataSpecialized } from "../../components/ServiceCard/servicesDataSpecialized.js";
import { therapyData } from "../../components/TherapyExpertise/therapyData.js";
import { conditionsData } from "../../components/ConditionsDataSection/ConditionsData.js";
import RelatedConditionsSlider from "./RelatedConditionsSlider/RelatedConditionsSlider.jsx";
import CitySelection from "../../components/CitySelection/CitySelection.jsx";

// ─── Merge all services safely ────────────────────────────────────────────────
const allServicesData = [
  ...servicesData,
  ...servicesDataSpecialized,
  ...therapyData,
];

const defaultBenefits = [
  "Reduced pain and inflammation",
  "Improved range of motion and flexibility",
  "Increased strength and stability",
  "Prevention of further injury",
  "Enhanced blood circulation and nutrient exchange",
  "Early return to work and sports activities",
];

const getCategoryKeywords = (serviceCategory) => {
  const mappings = {
    "Spine Conditions":       ["Spinal", "Nerve"],
    "Joint Conditions":       ["Shoulder", "Hand"],
    "Knee Conditions":        ["Knee"],
    Neurological:             ["Neurological", "Nerve"],
    "Nerve Conditions":       ["Nerve"],
    "Foot Conditions":        ["Foot"],
    "Elbow Conditions":       ["Hand"],
    "Pain Conditions":        ["Pain"],
    "Sports Injury":          ["Sports Injury"],
    "Specialized Care":       ["Specialized"],
    "Respiratory Care":       ["Respiratory"],
    "Post-Surgical Care":     ["Surgical"],
    "Convenience Care":       ["Home"],
    "Clinical Care":          ["Clinic"],
    "Virtual Care":           ["Virtual", "Tele"],
    "Athletic Performance":   ["Sports"],
    "Orthopedic Care":        ["Ortho", "Joint"],
    "Workplace Health":       ["Ergonomics"],
    "Women's Wellness":       ["Women"],
    "Child Development":      ["Pediatric", "Child"],
    "Senior Care":            ["Geriatric", "Elder"],
    "Recovery & Performance": ["Recovery", "Massage"],
    "Surgical Recovery":      ["Surgery"],
    "Spinal Health":          ["Spine", "Chiropractic"],
    "Lymphatic Massage":      ["Lymphatic", "Massage"],
    Chiropractic:             ["Chiropractic", "Adjustment"],
  };
  return mappings[serviceCategory] || [serviceCategory];
};

const getDetailedContent = (slug) => {
  const service = allServicesData.find((s) => s && s.slug === slug);
  return service?.sections || [];
};

// ── Small accordion item for FAQs ──────────────────────────────────────────
function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-[#8ab72e]/20 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left px-5 py-4 bg-[#8ab72e]/5 hover:bg-[#8ab72e]/10 transition-colors"
      >
        <span className="font-semibold text-gray-800 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#8ab72e] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 py-4 bg-white text-gray-700 leading-relaxed border-t border-[#8ab72e]/10">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function PhysiotherapyDetailPage() {
  const { slug }    = useParams();
  const navigate    = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // ── Safe find (null-guard) ────────────────────────────────────────────────
  const service         = allServicesData.find((s) => s && s.slug === slug);
  const detailedSections = getDetailedContent(slug);
  const benefits        = service?.benefits || defaultBenefits;
  const whyChooseUs     = service?.whyChooseUs || [];
  const faqs            = service?.faqs || [];
  const heroSubheading  = service?.hero?.heading ? service.hero.subheading : service?.hero?.subheading;
  const heroCtaText     = service?.hero?.cta || "Book Your Assessment Today";
  const bottomCta       = service?.cta || null;
  const mainImageAlt    = service?.imageAltText?.[0]
    || `${service?.title} treatment at Advanced Pain Physiotherapy Kalkaji Delhi`;

  const customTreatmentText =
    service?.customTreatmentText ||
    `If you are suffering from ${service?.title}, contact Dr. Ashish Sharma – Best Physiotherapist at Advanced Pain Physiotherapy Centre for effective pain relief and recovery.`;

  // ── SEO values — priority: servicesData.seo → generic fallback ───────────
  const seoTitle = service?.seo?.title
    ?? (service
      ? `${service.title} Treatment in Delhi | Advanced Pain Physiotherapy`
      : "Physiotherapy Treatment | Advanced Pain Physiotherapy");

  const seoDescription = service?.seo?.description
    ?? (service
      ? `Get expert ${service.title} treatment by certified physiotherapists at Advanced Pain Physiotherapy Centre, Kalkaji, South Delhi. Personalized care for faster recovery. Book now!`
      : "Advanced Pain Physiotherapy Centre offers expert physiotherapy by certified professionals. Book your appointment today!");

  const seoKeywords = service?.seo?.keywords
    ?? (service
      ? `${service.title} treatment delhi, ${service.title.toLowerCase()} physiotherapy kalkaji, best ${service.title.toLowerCase()} treatment south delhi, ${service.category} physiotherapy delhi, Advanced Pain Physiotherapy`
      : "physiotherapy delhi, pain treatment kalkaji, Advanced Pain Physiotherapy");

  const canonicalUrl = service?.seo?.canonical
    ?? `https://advancepainphysiotherapy.com/services/${slug}`;

  const ogImage =
    typeof service?.image === "string"
      ? service.image
      : "https://advancepainphysiotherapy.com/og-physiotherapy.jpg";

  // ── Schema.org — MedicalProcedure ────────────────────────────────────────
  const structuredData = service
    ? {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        name: service.title,
        description: service.description,
        url: canonicalUrl,
        procedureType: "Physiotherapy",
        provider: {
          "@type": "MedicalBusiness",
          name: "Advanced Pain Physiotherapy Centre",
          url: "https://advancepainphysiotherapy.com",
          telephone: "+91-9220385419",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Nehru Enclave",
            addressLocality: "Kalkaji",
            addressRegion: "South Delhi",
            addressCountry: "IN",
          },
        },
      }
    : null;

  // ── Schema.org — FAQPage (only if faqs exist) ─────────────────────────────
  const faqStructuredData =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  useEffect(() => {
    console.log("🔍 Slug:", slug);
    console.log("✅ Service:", service?.title ?? "❌ NOT FOUND");
    console.log("🏷️ SEO Title:", seoTitle);
  }, [slug, service]);

  // ── Safe related conditions (null-guard) ─────────────────────────────────
  const getRelatedConditions = () => {
    if (!service) return [];
    const keywords = getCategoryKeywords(service.category);
    return conditionsData.filter(
      (condition) =>
        condition &&
        condition.slug &&
        condition.category &&
        keywords.some((kw) =>
          condition.category.toLowerCase().includes(kw.toLowerCase())
        )
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [slug]);

  // ── Loading state ─────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8ab72e] border-solid mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading therapy details...</p>
        </div>
      </div>
    );
  }

  // ── 404 state ─────────────────────────────────────────────────────────────
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-3xl text-gray-700 mb-4">Service Not Found</h2>
          <p className="text-gray-600 mb-3">The service you're looking for doesn't exist.</p>
          <p className="text-sm text-gray-500 mb-6 font-mono bg-gray-100 p-3 rounded">
            Slug: <span className="text-red-600">{slug}</span>
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  // ── Main render ───────────────────────────────────────────────────────────
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          REACT HELMET — SEO
      ════════════════════════════════════════════════════════════════════ */}
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords"    content={seoKeywords} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type"         content="website" />
        <meta property="og:title"        content={seoTitle} />
        <meta property="og:description"  content={seoDescription} />
        <meta property="og:url"          content={canonicalUrl} />
        <meta property="og:image"        content={ogImage} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"    content={`${service.title} treatment at Advanced Pain Physiotherapy`} />
        <meta property="og:site_name"    content="Advanced Pain Physiotherapy" />
        <meta property="og:locale"       content="en_IN" />

        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image"       content={ogImage} />

        <meta name="robots" content="index, follow" />

        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
        {faqStructuredData && (
          <script type="application/ld+json">
            {JSON.stringify(faqStructuredData)}
          </script>
        )}
      </Helmet>
      {/* ═══════════════════════════════════════════════════════════════════ */}

      <div className="min-h-screen bg-gray-50">

        {/* ── Hero Banner ── */}
        <div
          className="relative py-10 md:py-14 bg-gradient-to-r from-[#8ab72e] to-[#6d9424] overflow-hidden animate-fade-in"
          style={{ fontFamily: "'Zalando Sans Expanded', sans-serif", fontWeight: 200 }}
        >
          <div className="max-w-7xl mx-auto px-4 w-full">
            <button
              onClick={() => navigate(-1)}
              className="mb-4 flex items-center text-white hover:text-white/80 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              <span>Back</span>
            </button>

            <div className="flex items-center mb-3">
              <CheckCircle className="w-8 h-8 mr-3 text-white flex-shrink-0" />
              <h1 className="text-2xl md:text-4xl text-white animate-slide-up">
                {service.hero?.heading || service.title}
              </h1>
            </div>

            {/* Subheading — from service.hero.subheading */}
            {/* {heroSubheading && (
              <p className="text-white/90 text-base md:text-lg max-w-3xl mb-6 animate-slide-up-delay"
                 style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}>
                {heroSubheading}
              </p>
            )} */}

            {/* Hero CTA button */}
            {/* <a
              href="#book-appointment"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#6d9424] rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg animate-slide-up-delay"
              style={{ fontFamily: "'Gantari', sans-serif" }}
            >
              <PhoneCall className="w-4 h-4" />
              {heroCtaText}
            </a> */}
          </div>
        </div>

        {/* ── Main Content ── */}
        <div
          className="max-w-7xl mx-auto px-4 py-8 md:py-12"
          style={{ fontFamily: "'Gantari', sans-serif", fontWeight: 400 }}
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

              {/* Image */}
              <div className="lg:col-span-2">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-right">
                  <img
                    src={service.image}
                    alt={mainImageAlt}
                    loading="lazy"
                    className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px] object-contain bg-gray-50"
                  />
                </article>
              </div>

              {/* About section */}
              <div className="lg:col-span-3">
                <article className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#8ab72e]/10 p-3 rounded-full mr-4">
                      <CheckCircle className="w-8 h-8 text-[#8ab72e]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl text-gray-800">
                      About {service.title}
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-base md:text-lg">{service.description}</p>

                    {detailedSections.length > 0 && detailedSections[0].content && (
                      <div className="mt-6 space-y-4">
                        {detailedSections[0].content.split("\n\n").map((paragraph, idx) => {
                          if (paragraph.trim().endsWith(":")) {
                            return (
                              <h3 key={idx} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                                {paragraph.trim()}
                              </h3>
                            );
                          }
                          if (paragraph.includes("•")) {
                            const lines = paragraph.split("\n").filter((l) => l.trim());
                            return (
                              <div key={idx} className="bg-gradient-to-r from-[#8ab72e]/5 to-transparent p-5 rounded-lg border-l-4 border-[#8ab72e]">
                                <ul className="space-y-3">
                                  {lines.map((line, li) => {
                                    const text = line.replace("•", "").trim();
                                    return text ? (
                                      <li key={li} className="flex items-start">
                                        <div className="bg-[#8ab72e] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                                          <CheckCircle className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{text}</span>
                                      </li>
                                    ) : null;
                                  })}
                                </ul>
                              </div>
                            );
                          }
                          return paragraph.trim() ? (
                            <p key={idx} className="text-base leading-relaxed">
                              {paragraph.trim()}
                            </p>
                          ) : null;
                        })}
                      </div>
                    )}

                    <div className="mt-6 p-4 bg-[#8ab72e]/5 border-l-4 border-[#8ab72e] rounded-r-lg">
                      <p className="text-base leading-relaxed text-gray-800 font-medium">
                        {customTreatmentText}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            {/* Remaining sections (Why It Matters, Who Needs This, Treatment, Process, etc.) */}
            {detailedSections.slice(1).map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
                {section.title && (
                  <h2 className="text-2xl md:text-3xl text-gray-800 mb-4">{section.title}</h2>
                )}
                {section.content && (
                  <div className="space-y-4">
                    {section.content.split("\n\n").map((paragraph, idx) => {
                      if (paragraph.trim().endsWith(":")) {
                        return (
                          <h3 key={idx} className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Star className="w-6 h-6 mr-2 text-[#8ab72e]" />
                            {paragraph.trim()}
                          </h3>
                        );
                      }
                      if (paragraph.includes("•") || /^\d+\.\s/.test(paragraph.trim())) {
                        const lines = paragraph.split("\n").filter((l) => l.trim());
                        return (
                          <div key={idx} className="bg-gradient-to-r from-[#8ab72e]/5 to-transparent p-5 rounded-lg border-l-4 border-[#8ab72e]">
                            <ul className="space-y-3">
                              {lines.map((line, li) => {
                                const text = line.replace(/^•/, "").trim();
                                return text ? (
                                  <li key={li} className="flex items-start">
                                    <div className="bg-[#8ab72e] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                                      <CheckCircle className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{text}</span>
                                  </li>
                                ) : null;
                              })}
                            </ul>
                          </div>
                        );
                      }
                      return paragraph.trim() ? (
                        <p key={idx} className="text-base leading-relaxed text-gray-700">
                          {paragraph.trim()}
                        </p>
                      ) : null;
                    })}
                  </div>
                )}
              </div>
            ))}

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="bg-[#8ab72e]/10 p-2 rounded-full mr-3">
                  <CheckCircle className="w-6 h-6 text-[#8ab72e]" />
                </div>
                <h3 className="text-xl md:text-2xl text-gray-800">
                  Benefits of {service.title} Physiotherapy
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-[#8ab72e]/5 rounded-lg p-4 hover:bg-[#8ab72e]/10 transition-all duration-300 border border-[#8ab72e]/20 transform hover:scale-105"
                  >
                    <div className="flex items-start">
                      <div className="bg-[#8ab72e] rounded-full p-2 mr-3 mt-1 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us — only renders if service.whyChooseUs exists */}
            {whyChooseUs.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
                <div className="flex items-center mb-6">
                  <div className="bg-[#8ab72e]/10 p-2 rounded-full mr-3">
                    <Star className="w-6 h-6 text-[#8ab72e]" />
                  </div>
                  <h3 className="text-xl md:text-2xl text-gray-800">
                    Why Choose Us for {service.title}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-start bg-[#8ab72e]/5 rounded-lg p-4 border border-[#8ab72e]/20">
                      <div className="bg-[#8ab72e] rounded-full p-2 mr-3 mt-1 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs — only renders if service.faqs exists */}
            {faqs.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
                <div className="flex items-center mb-6">
                  <div className="bg-[#8ab72e]/10 p-2 rounded-full mr-3">
                    <CheckCircle className="w-6 h-6 text-[#8ab72e]" />
                  </div>
                  <h3 className="text-xl md:text-2xl text-gray-800">
                    Frequently Asked Questions
                  </h3>
                </div>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <FaqItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFaqIndex === index}
                      onToggle={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Bottom CTA banner — only renders if service.cta exists */}
            {bottomCta && (
              <div
                id="book-appointment"
                className="rounded-xl shadow-lg p-8 md:p-10 text-center bg-gradient-to-r from-[#8ab72e] to-[#6d9424] animate-fade-in"
              >
                <h3 className="text-2xl md:text-3xl text-white font-semibold mb-3">
                  {bottomCta.heading}
                </h3>
                {bottomCta.subtext && (
                  <p className="text-white/90 max-w-2xl mx-auto mb-6">
                    {bottomCta.subtext}
                  </p>
                )}
                <a
                  href="tel:+919220385419"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#6d9424] rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <PhoneCall className="w-5 h-5" />
                  {bottomCta.buttonText || "Book Your Appointment Now"}
                </a>
              </div>
            )}

          </div>
        </div>

        <CitySelection serviceName={service.title} serviceSlug={slug} />
      </div>

      <style>{`
        @keyframes fade-in       { from { opacity: 0; }                          to { opacity: 1; } }
        @keyframes slide-up      { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-right { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-in        { animation: fade-in 0.6s ease-out; }
        .animate-slide-up       { animation: slide-up 0.6s ease-out; }
        .animate-slide-up-delay { animation: slide-up 0.6s ease-out 0.2s both; }
        .animate-fade-in-right  { animation: fade-in-right 0.6s ease-out; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar       { width: 10px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #8ab72e; border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: #6d9424; }
        * { box-sizing: border-box; }
      `}</style>
    </>
  );
}