// import React from "react";
// import { Home, User, Heart, Award } from "lucide-react";

// export default function ServicesSection() {
//   const services = [
//     {
//       icon: Home,
//       title: "Home Physiotherapy",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       icon: User,
//       title: "Personalized Therapy",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       icon: Heart,
//       title: "Comfortable Healing",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       icon: Award,
//       title: "Certified Therapists",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//   ];

//   return (
//     <div
//       className="bg-[#8ab72e] py-16 px-4"
//       style={{
//         fontFamily: "'Gantari', sans-serif",
//         fontWeight: 400,
//       }}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
//             >
//               <div className="mb-6">
//                 <service.icon
//                   className="w-12 h-12 text-[#8ab72e]"
//                   strokeWidth={2.5}
//                 />
//               </div>
//               <h3 className="text-xl text-gray-900 mb-3">{service.title}</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, User, Heart, Award } from "lucide-react";

export default function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Home,
      title: "Home Physiotherapy",
      description:
        "Professional physiotherapy treatment delivered at your doorstep for comfort and convenience with personalized one-on-one care.",
      slug: "home-physiotherapist",
      clickable: true,
    },
    {
      icon: User,
      title: "Personalized Therapy",
      description:
        "Customized treatment plans designed specifically for your recovery needs and goals with expert guidance.",
      slug: "personalized-therapy",
      clickable: true,
    },
    {
      icon: Heart,
      title: "Comfortable Healing",
      description:
        "Gentle and effective healing techniques in a stress-free, comfortable environment for pain-free recovery.",
      slug: "comfortable-healing",
      clickable: true,
    },
    {
      icon: Award,
      title: "Certified Therapists",
      description:
        "Highly qualified and experienced therapists dedicated to your complete wellness and recovery journey.",
      slug: null,
      clickable: true,
      routePath: "/therapists", // 👈 Special route for therapists page
    },
  ];

  const handleServiceClick = (service) => {
    if (service.clickable) {
      if (service.routePath) {
        // Special route for therapists page
        navigate(service.routePath);
      } else if (service.slug) {
        // Regular service detail page
        navigate(`/service/${service.slug}`);
      }
    }
  };

  return (
    <div
      className="bg-[#8ab72e] py-16 px-4"
      style={{
        fontFamily: "'Gantari', sans-serif",
        fontWeight: 400,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service)}
              className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 group ${
                service.clickable
                  ? "hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                  : "cursor-default"
              }`}
            >
              <div className="mb-6">
                <service.icon
                  className={`w-12 h-12 transition-colors duration-300 ${
                    service.clickable
                      ? "text-[#8ab72e] group-hover:text-[#6d9424]"
                      : "text-[#8ab72e]"
                  }`}
                  strokeWidth={2.5}
                />
              </div>
              <h3 className="text-xl text-gray-900 mb-3 ">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Click indicator for clickable items */}
              {service.clickable && (
                <div className="mt-4 flex items-center text-[#8ab72e] text-sm  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
