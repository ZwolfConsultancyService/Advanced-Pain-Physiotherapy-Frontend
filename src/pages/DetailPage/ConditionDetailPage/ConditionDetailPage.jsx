


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { ChevronLeft, CheckCircle } from "lucide-react";
// import { conditionsData } from "../../../components/ConditionsDataSection/ConditionsData.js";
// import RelatedConditionsSlider from "../RelatedConditionsSlider/RelatedConditionsSlider.jsx";
// import CitySelection from "../../../components/CitySelection/CitySelection.jsx";

// const getRelatedConditionsForCondition = (currentCondition) => {
//   if (!currentCondition) return [];

//   return conditionsData
//     .filter(
//       (condition) =>
//         condition.id !== currentCondition.id &&
//         condition.category === currentCondition.category,
//     )
//     .slice(0, 8);
// };

// export default function ConditionDetailPage() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isLoading, setIsLoading] = useState(true);

//   const condition =
//     location.state?.condition ||
//     conditionsData.find((c) => {
//       const conditionSlug = c.name
//         .toLowerCase()
//         .replace(/\s+/g, "-")
//         .replace(/[()]/g, "");
//       return conditionSlug === slug;
//     });

//   const relatedConditions = getRelatedConditionsForCondition(condition);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     const timer = setTimeout(() => setIsLoading(false), 300);
//     return () => clearTimeout(timer);
//   }, [slug]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8ab72e] border-solid mx-auto mb-4"></div>
//           <p className="text-gray-600 text-lg">Loading condition details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!condition) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-3xl text-gray-700 mb-4">Condition Not Found</h2>
//           <p className="text-gray-600 mb-6">
//             The condition you're looking for doesn't exist.
//           </p>
//           <button
//             onClick={() => navigate("/")}
//             className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300 transform hover:scale-105 shadow-lg"
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="min-h-screen bg-gray-50">
//         {/* Banner Section */}
//         <div
//           className="relative h-64 md:h-80 bg-gradient-to-r from-[#8ab72e] to-[#6d9424] overflow-hidden animate-fade-in"
//           style={{
//             fontFamily: "'Zalando Sans Expanded', sans-serif",
//             fontWeight: 200,
//           }}
//         >
//           <img
//             src={condition.image}
//             alt={condition.name}
//             className="w-full h-full object-cover opacity-30 transform hover:scale-105 transition-transform duration-700"
//           />
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
//                 <h1 className="text-2xl md:text-4xl text-white animate-slide-up">
//                   {condition.name}
//                 </h1>
//               </div>
//               <p className="text-white/90 mt-2 text-base md:text-lg animate-slide-up-delay">
//                 {condition.category} Condition
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Main Content - Full Width */}
//         <div
//           className="max-w-7xl mx-auto px-4 py-8 md:py-12"
//           style={{
//             fontFamily: "'Gantari', sans-serif",
//             fontWeight: 400,
//           }}
//         >
//           <div className="space-y-6">
//             {/* Image on Left and About Section on Right */}
//             <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
//               {/* Image Card - Left Side (2 columns) */}
//               <div className="lg:col-span-2">
//                 <article className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-right">
//                   <img
//                     src={condition.image}
//                     alt={condition.name}
//                     className="w-full h-77 lg:h-100 object-cover transform hover:scale-105 transition-transform duration-500"
//                     loading="lazy"
//                   />
//                 </article>
//               </div>

//               {/* About Section - Right Side (3 columns) */}
//               <div className="lg:col-span-3">
//                 <article className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
//                   <div className="flex items-center mb-6">
//                     <div className="bg-[#8ab72e]/10 p-3 rounded-full mr-4">
//                       <CheckCircle className="w-8 h-8 text-[#8ab72e]" />
//                     </div>
//                     <div>
//                       <h2 className="text-2xl md:text-3xl text-gray-800">
//                         Overview
//                       </h2>
//                       <p className="text-[#8ab72e]">
//                         {condition.category} Condition
//                       </p>
//                     </div>
//                   </div>

//                   {/* Paragraphs - Always start with "Physiotherapy" */}
//                   <div className="space-y-4 text-gray-700 leading-relaxed">
//                     <p>
//                       Physiotherapy for {condition.name} is a specialized medical treatment that focuses on the{" "}
//                       {condition.category.toLowerCase()} region. This condition requires comprehensive physiotherapy care and evidence-based rehabilitation techniques. Our expert physiotherapists at Advanced Pain Physiotherapy Centre use proven methods to help manage symptoms, reduce pain, and improve quality of life. With proper diagnosis and personalized treatment plans, patients can experience significant improvement in their condition and successfully return to their normal activities.
//                     </p>

//                     <p>
//                       Physiotherapy treatment for {condition.name} addresses common symptoms including pain, discomfort, reduced mobility, stiffness, weakness, and functional limitations in the affected area. Patients may experience varying degrees of severity depending on the stage and nature of the condition. Early physiotherapy intervention and treatment can significantly improve outcomes and prevent further complications. Our physiotherapists conduct thorough assessments including detailed movement analysis, strength testing, range of motion evaluation, and functional assessment to create personalized treatment plans tailored to each patient's specific needs, goals, and lifestyle requirements.
//                     </p>

//                     <p>
//                       Physiotherapy helps understand that {condition.name} can be caused by various factors including acute injury, chronic overuse, repetitive strain, age-related degenerative changes, trauma, or underlying medical conditions. Risk factors may include poor posture, improper body mechanics, repetitive movements, previous injuries, genetic predisposition, inadequate conditioning, muscle imbalances, or lifestyle factors such as obesity, sedentary behavior, and occupational demands. Understanding these causes and risk factors through comprehensive physiotherapy assessment helps in developing effective prevention strategies, targeted treatment approaches, and long-term management plans to ensure optimal recovery and prevent recurrence.
//                     </p>
//                   </div>
//                 </article>
//               </div>
//             </div>

//             {/* Treatment and Recovery Section - Left Right Grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* Treatment - Left Card */}
//               <article className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-[#8ab72e]/10 p-2 rounded-full mr-3">
//                     <CheckCircle className="w-6 h-6 text-[#8ab72e]" />
//                   </div>
//                   <h3 className="text-xl md:text-2xl text-gray-800">
//                     Physiotherapy Treatment Approach
//                   </h3>
//                 </div>
//                 <p className="text-gray-700 leading-relaxed">
//                   Physiotherapy treatment for {condition.name} at Advanced Pain Physiotherapy Centre includes evidence-based manual therapy techniques, therapeutic exercises, pain management strategies, and functional training programs. Our physiotherapists use state-of-the-art equipment including electrotherapy, ultrasound, laser therapy, and proven protocols to ensure optimal recovery. Physiotherapy treatment plans are customized based on detailed individual assessment findings, ensuring the best possible outcomes. Our comprehensive physiotherapy approach may include joint mobilization, soft tissue techniques, neuromuscular re-education, proprioceptive training, progressive strengthening exercises, flexibility work, and patient education for long-term success.
//                 </p>
//               </article>

//               {/* Recovery - Right Card */}
//               <article className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-[#8ab72e]/10 p-2 rounded-full mr-3">
//                     <CheckCircle className="w-6 h-6 text-[#8ab72e]" />
//                   </div>
//                   <h3 className="text-xl md:text-2xl text-gray-800">
//                     Physiotherapy Recovery Timeline
//                   </h3>
//                 </div>
//                 <p className="text-gray-700 leading-relaxed">
//                   Physiotherapy recovery time for {condition.name} varies depending on severity, chronicity, individual factors, overall health status, and adherence to treatment protocols. Most patients undergoing regular physiotherapy see significant improvement within 4-12 weeks with consistent physiotherapy sessions and home exercise compliance. Our physiotherapists provide detailed guidance on home exercises, activity modification, ergonomic adjustments, lifestyle modifications, and self-management techniques to maintain long-term health. We emphasize comprehensive physiotherapy education and empower patients with self-management strategies to ensure lasting results, prevent future complications, and maintain optimal function. If you need expert physiotherapy for {condition.name} in Delhi, contact Dr. Ashish Sharma at Advanced Pain Physiotherapy Centre, Nehru Enclave, Kalkaji, South Delhi.
//                 </p>
//               </article>
//             </div>
//           </div>

//           {/* Related Conditions Slider */}
//           {/* {relatedConditions.length > 0 && (
//             <div className="mt-12">
//               <RelatedConditionsSlider conditions={relatedConditions} />
//             </div>
//           )} */}
//         </div>

//         {/* ✅ FIXED: City Selection with proper slug */}
//         <CitySelection 
//           serviceName={condition.name} 
//           serviceSlug={slug}
//         />
//       </div>

//       {/* CSS Animations */}
//       <style>{`
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes slide-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fade-in-right {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out;
//         }

//         .animate-slide-up {
//           animation: slide-up 0.6s ease-out;
//         }

//         .animate-slide-up-delay {
//           animation: slide-up 0.6s ease-out 0.2s both;
//         }

//         .animate-fade-in-right {
//           animation: fade-in-right 0.6s ease-out;
//         }

//         html {
//           scroll-behavior: smooth;
//         }

//         ::-webkit-scrollbar {
//           width: 10px;
//         }

//         ::-webkit-scrollbar-track {
//           background: #f1f1f1;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: #8ab72e;
//           border-radius: 5px;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: #6d9424;
//         }

//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
//     </>
//   );
// }



import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, CheckCircle } from "lucide-react";
import { conditionsData } from "../../../components/ConditionsDataSection/ConditionsData.js";
import RelatedConditionsSlider from "../RelatedConditionsSlider/RelatedConditionsSlider.jsx";
import CitySelection from "../../../components/CitySelection/CitySelection.jsx";

const getRelatedConditionsForCondition = (currentCondition) => {
  if (!currentCondition) return [];

  return conditionsData
    .filter(
      (condition) =>
        condition.id !== currentCondition.id &&
        condition.category === currentCondition.category,
    )
    .slice(0, 8);
};

export default function ConditionDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Find condition by slug
  const condition =
    location.state?.condition ||
    conditionsData.find((c) => {
      // Handle both old structure (name) and new structure (slug)
      if (c.slug) {
        return c.slug === slug;
      } else {
        const conditionSlug = c.name
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[()]/g, "");
        return conditionSlug === slug;
      }
    });

  const relatedConditions = getRelatedConditionsForCondition(condition);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8ab72e] border-solid mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading condition details...</p>
        </div>
      </div>
    );
  }

  if (!condition) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl text-gray-700 mb-4">Condition Not Found</h2>
          <p className="text-gray-600 mb-6">
            The condition you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-4 bg-[#8ab72e] text-white rounded-lg hover:bg-[#6d9424] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Get display name - use title if available, otherwise name
  const displayName = condition.title || condition.name;

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Banner Section */}
        <div
          className="relative h-64 md:h-80 bg-gradient-to-r from-[#8ab72e] to-[#6d9424] overflow-hidden animate-fade-in"
          style={{
            fontFamily: "'Zalando Sans Expanded', sans-serif",
            fontWeight: 200,
          }}
        >
         
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <button
                onClick={() => navigate(-1)}
                className="mb-4 flex items-center text-white hover:text-white/80 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                <span>Back</span>
              </button>
              <div className="flex items-center mb-3">
                <CheckCircle className="w-8 h-8 mr-3 text-white" />
                <h1 className="text-2xl md:text-4xl text-white animate-slide-up">
                  {displayName}
                </h1>
              </div>
              <p className="text-white/90 mt-2 text-base md:text-lg animate-slide-up-delay">
                {condition.category}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Full Width */}
        <div
          className="max-w-7xl mx-auto px-4 py-8 md:py-12"
          style={{
            fontFamily: "'Gantari', sans-serif",
            fontWeight: 400,
          }}
        >
          <div className="space-y-6">
            {/* Image on Left and About Section on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Image Card - Left Side (2 columns) */}
              <div className="lg:col-span-2">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-right">
                  <img
                    src={condition.image}
                    alt={displayName}
                    className="w-full h-77 lg:h-100 object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </article>
              </div>

              {/* About Section - Right Side (3 columns) */}
              <div className="lg:col-span-3">
                <article className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#8ab72e]/10 p-3 rounded-full mr-4">
                      <CheckCircle className="w-8 h-8 text-[#8ab72e]" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl text-gray-800">
                        {condition.sections?.[0]?.title || "Overview"}
                      </h2>
                      <p className="text-[#8ab72e]">
                        {condition.category}
                      </p>
                    </div>
                  </div>

                  {/* Description or Content */}
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    {condition.description && (
                      <p className="whitespace-pre-line">{condition.description}</p>
                    )}
                    
                    {condition.sections?.[0]?.content && (
                      <div className="whitespace-pre-line mt-4">
                        {condition.sections[0].content}
                      </div>
                    )}
                    
                    {/* Fallback for old structure */}
                    {!condition.description && !condition.sections && (
                      <>
                        <p>
                          Physiotherapy for {displayName} is a specialized medical treatment that focuses on the{" "}
                          {condition.category.toLowerCase()} region. This condition requires comprehensive physiotherapy care and evidence-based rehabilitation techniques. Our expert physiotherapists at Advanced Pain Physiotherapy Centre use proven methods to help manage symptoms, reduce pain, and improve quality of life. With proper diagnosis and personalized treatment plans, patients can experience significant improvement in their condition and successfully return to their normal activities.
                        </p>

                        <p>
                          Physiotherapy treatment for {displayName} addresses common symptoms including pain, discomfort, reduced mobility, stiffness, weakness, and functional limitations in the affected area. Patients may experience varying degrees of severity depending on the stage and nature of the condition. Early physiotherapy intervention and treatment can significantly improve outcomes and prevent further complications. Our physiotherapists conduct thorough assessments including detailed movement analysis, strength testing, range of motion evaluation, and functional assessment to create personalized treatment plans tailored to each patient's specific needs, goals, and lifestyle requirements.
                        </p>

                        <p>
                          Physiotherapy helps understand that {displayName} can be caused by various factors including acute injury, chronic overuse, repetitive strain, age-related degenerative changes, trauma, or underlying medical conditions. Risk factors may include poor posture, improper body mechanics, repetitive movements, previous injuries, genetic predisposition, inadequate conditioning, muscle imbalances, or lifestyle factors such as obesity, sedentary behavior, and occupational demands. Understanding these causes and risk factors through comprehensive physiotherapy assessment helps in developing effective prevention strategies, targeted treatment approaches, and long-term management plans to ensure optimal recovery and prevent recurrence.
                        </p>
                      </>
                    )}
                  </div>
                </article>
              </div>
            </div>

            {/* Treatment Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Treatment - Left Card */}
              <article className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
                <div className="flex items-center mb-4">
                  <div className="bg-[#8ab72e]/10 p-2 rounded-full mr-3">
                    <CheckCircle className="w-6 h-6 text-[#8ab72e]" />
                  </div>
                  <h3 className="text-xl md:text-2xl text-gray-800">
                    {condition.sections?.[1]?.title || "Physiotherapy Treatment Approach"}
                  </h3>
                </div>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {condition.sections?.[1]?.content || 
                    `Physiotherapy treatment for ${displayName} at Advanced Pain Physiotherapy Centre includes evidence-based manual therapy techniques, therapeutic exercises, pain management strategies, and functional training programs. Our physiotherapists use state-of-the-art equipment including electrotherapy, ultrasound, laser therapy, and proven protocols to ensure optimal recovery. Physiotherapy treatment plans are customized based on detailed individual assessment findings, ensuring the best possible outcomes. Our comprehensive physiotherapy approach may include joint mobilization, soft tissue techniques, neuromuscular re-education, proprioceptive training, progressive strengthening exercises, flexibility work, and patient education for long-term success.`
                  }
                </div>
              </article>

              {/* Benefits or Recovery - Right Card */}
              <article className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
                <div className="flex items-center mb-4">
                  <div className="bg-[#8ab72e]/10 p-2 rounded-full mr-3">
                    <CheckCircle className="w-6 h-6 text-[#8ab72e]" />
                  </div>
                  <h3 className="text-xl md:text-2xl text-gray-800">
                    {condition.benefits ? "Benefits" : "Physiotherapy Recovery Timeline"}
                  </h3>
                </div>
                
                {condition.benefits ? (
                  <ul className="space-y-3">
                    {condition.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-[#8ab72e] mr-3 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 leading-relaxed">
                    Physiotherapy recovery time for {displayName} varies depending on severity, chronicity, individual factors, overall health status, and adherence to treatment protocols. Most patients undergoing regular physiotherapy see significant improvement within 4-12 weeks with consistent physiotherapy sessions and home exercise compliance. Our physiotherapists provide detailed guidance on home exercises, activity modification, ergonomic adjustments, lifestyle modifications, and self-management techniques to maintain long-term health. We emphasize comprehensive physiotherapy education and empower patients with self-management strategies to ensure lasting results, prevent future complications, and maintain optimal function. If you need expert physiotherapy for {displayName} in Delhi, contact Dr. Ashish Sharma at Advanced Pain Physiotherapy Centre, Nehru Enclave, Kalkaji, South Delhi.
                  </p>
                )}
              </article>
            </div>

            {/* Custom Treatment Text (if available) */}
            {condition.customTreatmentText && (
              <article className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
                <div className="flex items-center mb-4">
                  <div className="bg-[#8ab72e]/10 p-2 rounded-full mr-3">
                    <CheckCircle className="w-6 h-6 text-[#8ab72e]" />
                  </div>
                  <h3 className="text-xl md:text-2xl text-gray-800">
                    Our Personalized Treatment
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {condition.customTreatmentText}
                </p>
              </article>
            )}
          </div>

          {/* Related Conditions Slider */}
          {/* {relatedConditions.length > 0 && (
            <div className="mt-12">
              <RelatedConditionsSlider conditions={relatedConditions} />
            </div>
          )} */}
        </div>

        {/* City Selection with proper slug */}
        <CitySelection 
          serviceName={displayName} 
          serviceSlug={condition.slug || slug}
        />
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.6s ease-out 0.2s both;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #8ab72e;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #6d9424;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}