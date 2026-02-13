// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { servicesData } from "./servicesData";
// import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

// export default function ServicesSlider({ cityName }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [cardsToShow, setCardsToShow] = useState(3);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const sliderRef = useRef(null);
//   const navigate = useNavigate();
//   const { citySlug } = useParams();
//   const animationRef = useRef(null);

//   // ================================
//   // RESPONSIVE CARDS
//   // ================================
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) setCardsToShow(1);
//       else if (window.innerWidth < 1024) setCardsToShow(2);
//       else setCardsToShow(3);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // ================================
//   // 🔄 INFINITE SMOOTH CIRCULAR SCROLL
//   // ================================
//   useEffect(() => {
//     if (!sliderRef.current || isHovered || isDragging) return;

//     const slider = sliderRef.current;
//     const speed = 1.5;
//     let animationId;

//     const originalCards = Array.from(slider.children);
//     const cloneCount = Math.ceil(cardsToShow) + 2;
    
//     for (let i = 0; i < cloneCount; i++) {
//       const clone = originalCards[i % originalCards.length].cloneNode(true);
//       slider.appendChild(clone);
//     }

//     const cardWidth = slider.children[0]?.offsetWidth || 0;
//     const gapWidth = 24;
//     const totalCardWidth = cardWidth + gapWidth;

//     const autoScroll = () => {
//       if (!slider) return;

//       slider.scrollLeft += speed;

//       const resetPoint = totalCardWidth * servicesData.length;
//       if (slider.scrollLeft >= resetPoint) {
//         slider.scrollLeft = 0;
//       }

//       animationId = requestAnimationFrame(autoScroll);
//     };

//     animationId = requestAnimationFrame(autoScroll);

//     return () => {
//       cancelAnimationFrame(animationId);
//       while (slider.children.length > originalCards.length) {
//         slider.removeChild(slider.lastChild);
//       }
//     };
//   }, [isHovered, cardsToShow, isDragging]);

//   // ================================
//   // TOUCH & MOUSE DRAG HANDLERS
//   // ================================
//   const handleDragStart = (e) => {
//     setIsDragging(true);
//     const pageX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;
//     setStartX(pageX - sliderRef.current.offsetLeft);
//     setScrollLeft(sliderRef.current.scrollLeft);
//   };

//   const handleDragMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
    
//     const pageX = e.type === 'touchmove' ? e.touches[0].pageX : e.pageX;
//     const x = pageX - sliderRef.current.offsetLeft;
//     const walk = (x - startX) * 2;
//     sliderRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleDragEnd = () => {
//     setIsDragging(false);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     handleDragEnd();
//   };

//   // ================================
//   // NAVIGATION BUTTONS - FIXED VERSION
//   // ================================
//   const scroll = (direction) => {
//     if (!sliderRef.current) return;
    
//     // Cancel any ongoing animation
//     if (animationRef.current) {
//       cancelAnimationFrame(animationRef.current);
//     }
    
//     const slider = sliderRef.current;
//     const cardWidth = slider.children[0]?.offsetWidth || 0;
//     const gapWidth = 24;
//     const scrollAmount = cardWidth + gapWidth;

//     const start = slider.scrollLeft;
//     const target = direction === 'left' 
//       ? Math.max(0, start - scrollAmount)
//       : start + scrollAmount;
    
//     const duration = 400;
//     const startTime = performance.now();

//     const animate = (currentTime) => {
//       const elapsed = currentTime - startTime;
//       const progress = Math.min(elapsed / duration, 1);
      
//       // Easing function
//       const easeInOutQuad = progress < 0.5
//         ? 2 * progress * progress
//         : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
//       slider.scrollLeft = start + (target - start) * easeInOutQuad;
      
//       if (progress < 1) {
//         animationRef.current = requestAnimationFrame(animate);
//       } else {
//         animationRef.current = null;
//       }
//     };

//     animationRef.current = requestAnimationFrame(animate);
//   };

//   // ================================
//   // HANDLE CARD CLICK
//   // ================================
//   const handleCardClick = (slug, e) => {
//     if (isDragging) {
//       e.preventDefault();
//       return;
//     }
    
//     if (citySlug) {
//       navigate(`/city/${citySlug}/${slug}`, { state: { cityName } });
//     } else {
//       navigate(`/service/${slug}`);
//     }
//   };

//   return (
//     <div className="w-full py-14 px-4 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         {/* HEADER WITH CITY NAME */}
//         {cityName && (
//           <div  
//             className="text-center mb-10"
//             style={{
//               fontFamily: "'Zalando Sans Expanded', sans-serif",
//               fontWeight: 200,
//             }}
//           >
//             <h2 className="text-4xl md:text-5xl text-gray-800 mb-4">
//               Treatment Expertise in {cityName}
//             </h2>
//             <div
//               className="flex items-center justify-center gap-2 text-[#8ab72e]"
//               style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}
//             >
//               <MapPin className="w-5 h-5" />
//               <p className="text-lg">Serving patients across {cityName}</p>
//             </div>
//             <h6 className="text-gray-600 mt-3 text-lg">
//               Explore premium physiotherapy services available in {cityName}
//             </h6>
//           </div>
//         )}

//         {/* INFINITE SMOOTH SLIDER WITH NAVIGATION BUTTONS */}
//         <div className="relative overflow-hidden group/slider px-12 md:px-0">
//           {/* LEFT BUTTON */}
//           <button
//             onClick={() => scroll('left')}
//             onMouseDown={(e) => e.stopPropagation()}
//             className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 
//             bg-white/95 hover:bg-[#8ab72e] shadow-xl rounded-full p-2 md:p-3
//             transition-all duration-300
//             md:opacity-0 md:group-hover/slider:opacity-100
//             hover:scale-110 active:scale-95 group/btn"
//             aria-label="Previous"
//           >
//             <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover/btn:text-white transition-colors" />
//           </button>

//           {/* RIGHT BUTTON */}
//           <button
//             onClick={() => scroll('right')}
//             onMouseDown={(e) => e.stopPropagation()}
//             className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 
//             bg-white/95 hover:bg-[#8ab72e] shadow-xl rounded-full p-2 md:p-3
//             transition-all duration-300
//             md:opacity-0 md:group-hover/slider:opacity-100
//             hover:scale-110 active:scale-95 group/btn"
//             aria-label="Next"
//           >
//             <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover/btn:text-white transition-colors" />
//           </button>

//           <div
//             ref={sliderRef}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={handleMouseLeave}
//             onMouseDown={handleDragStart}
//             onMouseMove={handleDragMove}
//             onMouseUp={handleDragEnd}
//             onTouchStart={handleDragStart}
//             onTouchMove={handleDragMove}
//             onTouchEnd={handleDragEnd}
//             className={`flex gap-6 overflow-x-auto md:overflow-x-hidden 
//             ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
//             scrollbar-hide`}
//             style={{ 
//               scrollBehavior: 'auto',
//               WebkitOverflowScrolling: 'touch'
//             }}
//           >
//             {servicesData.map((service, index) => (
//               <div
//                 key={`${service.id}-${index}`}
//                 className="flex-shrink-0"
//                 style={{ 
//                   width: `calc(${100 / cardsToShow}% - ${24 * (cardsToShow - 1) / cardsToShow}px)`,
//                   minWidth: '280px'
//                 }}
//               >
//                 <div
//                   onClick={(e) => handleCardClick(service.slug, e)}
//                   className="bg-white rounded-2xl overflow-hidden cursor-pointer
//                   transition-all duration-500 transform hover:-translate-y-1 group shadow-md hover:shadow-xl h-full
//                   select-none"
//                   draggable="false"
//                 >
//                   {/* IMAGE */}
//                   <div className="relative h-52 overflow-hidden">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover
//                       transition-transform duration-700 ease-in-out
//                       group-hover:scale-110 pointer-events-none"
//                       draggable="false"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//                     <div className="absolute top-4 right-4 bg-[#8ab72e] text-white px-3 py-1 rounded-full text-xs">
//                       {service.category}
//                     </div>

//                     {/* CITY BADGE */}
//                     {cityName && (
//                       <div
//                         className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs flex items-center gap-1"
//                         style={{
//                           fontFamily: "'Gantari', sans-serif",
//                           fontWeight: 400,
//                         }}
//                       >
//                         <MapPin className="w-3 h-3" />
//                         {cityName}
//                       </div>
//                     )}
//                   </div>

//                   {/* CONTENT */}
//                   <div
//                     className="p-6"
//                     style={{
//                       fontFamily: "'Gantari', sans-serif",
//                       fontWeight: 400,
//                     }}
//                   >
//                     <h3 className="text-xl text-gray-800 transition-colors duration-300 group-hover:text-[#8ab72e] mb-2">
//                       {service.title}
//                     </h3>

//                     {/* Description - Only on city pages */}
//                     {cityName && (
//                       <>
//                         <p
//                           className="text-sm text-gray-600 line-clamp-2"
//                           style={{
//                             fontFamily: "'Gantari', sans-serif",
//                             fontWeight: 400,
//                           }}
//                         >
//                           {service.description}
//                         </p>

//                         {/* LOCATION TAG */}
//                         <div
//                           className="mt-4 pt-4 border-t border-gray-100"
//                           style={{
//                             fontFamily: "'Gantari', sans-serif",
//                             fontWeight: 400,
//                           }}
//                         >
//                           <p className="text-xs text-gray-500">
//                             Available in{" "}
//                             <span className="text-[#8ab72e]">{cityName}</span>
//                           </p>
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* BOTTOM CTA */}
//         {cityName && (
//           <div
//             className="text-center mt-8"
//             style={{
//               fontFamily: "'Gantari', sans-serif",
//               fontWeight: 400,
//             }}
//           >
//             <p className="text-gray-600 text-sm">
//               Looking for treatment in {cityName}?
//               <Link
//                 to="/contact"
//                 className="text-[#8ab72e] ml-1 cursor-pointer hover:underline"
//               >
//                 Book a consultation today
//               </Link>
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { servicesData } from "./servicesData";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export default function ServicesSlider({ cityName }) {
  const [isHovered, setIsHovered] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const { citySlug } = useParams();
  const animationRef = useRef(null);

  // ================================
  // RESPONSIVE CARDS
  // ================================
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ================================
  // 🔄 INFINITE SMOOTH CIRCULAR SCROLL
  // ================================
  useEffect(() => {
    if (!sliderRef.current || isHovered || isDragging) return;

    const slider = sliderRef.current;
    const speed = 1.5;
    let animationId;

    const originalCards = Array.from(slider.children);
    const cloneCount = Math.ceil(cardsToShow) + 2;

    for (let i = 0; i < cloneCount; i++) {
      const clone = originalCards[i % originalCards.length].cloneNode(true);
      slider.appendChild(clone);
    }

    const cardWidth = slider.children[0]?.offsetWidth || 0;
    const gapWidth = 24;
    const totalCardWidth = cardWidth + gapWidth;

    const autoScroll = () => {
      if (!slider) return;
      slider.scrollLeft += speed;
      const resetPoint = totalCardWidth * servicesData.length;
      if (slider.scrollLeft >= resetPoint) {
        slider.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationId);
      while (slider.children.length > originalCards.length) {
        slider.removeChild(slider.lastChild);
      }
    };
  }, [isHovered, cardsToShow, isDragging]);

  // ================================
  // TOUCH & MOUSE DRAG HANDLERS
  // ================================
  const handleDragStart = (e) => {
    setIsDragging(true);
    const pageX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;
    setStartX(pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const pageX = e.type === 'touchmove' ? e.touches[0].pageX : e.pageX;
    const x = pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    handleDragEnd();
  };

  // ================================
  // NAVIGATION BUTTONS
  // ================================
  const scroll = (direction) => {
    if (!sliderRef.current) return;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const slider = sliderRef.current;
    const cardWidth = slider.children[0]?.offsetWidth || 0;
    const gapWidth = 24;
    const scrollAmount = cardWidth + gapWidth;

    const start = slider.scrollLeft;
    const target =
      direction === 'left'
        ? Math.max(0, start - scrollAmount)
        : start + scrollAmount;

    const duration = 400;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeInOutQuad =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      slider.scrollLeft = start + (target - start) * easeInOutQuad;

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  // ================================
  // HANDLE CARD CLICK
  // ================================
  const handleCardClick = (slug, e) => {
    if (isDragging) {
      e.preventDefault();
      return;
    }
    if (citySlug) {
      navigate(`/city/${citySlug}/${slug}`, { state: { cityName } });
    } else {
      navigate(`/service/${slug}`);
    }
  };

  return (
    <div className="w-full px-4 py-8 md:py-12 bg-white">
      {/* HEADER WITH CITY NAME */}
      {cityName && (
        <div className="max-w-7xl mx-auto mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Treatment Expertise in {cityName}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Explore premium physiotherapy services available in {cityName}
          </p>
        </div>
      )}

      {/* SLIDER WITH NAVIGATION */}
      <div className="max-w-7xl mx-auto relative group/slider">
        {/* LEFT BUTTON */}
        <button
          onClick={() => scroll('left')}
          onMouseDown={(e) => e.stopPropagation()}
          className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-[#8ab72e] shadow-xl rounded-full p-2 md:p-3 transition-all duration-300 md:opacity-0 md:group-hover/slider:opacity-100 hover:scale-110 active:scale-95 group/btn"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover/btn:text-white transition-colors" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => scroll('right')}
          onMouseDown={(e) => e.stopPropagation()}
          className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-[#8ab72e] shadow-xl rounded-full p-2 md:p-3 transition-all duration-300 md:opacity-0 md:group-hover/slider:opacity-100 hover:scale-110 active:scale-95 group/btn"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover/btn:text-white transition-colors" />
        </button>

        {/* CARDS CONTAINER */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          className={`flex gap-6 overflow-x-auto md:overflow-x-hidden ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          } scrollbar-hide px-4 md:px-0`}
          style={{
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {servicesData.map((service, index) => (
            <div
              key={`${service.slug}-${index}`}
              onClick={(e) => handleCardClick(service.slug, e)}
              className="flex-shrink-0 w-[280px] md:w-[calc(25%-18px)] cursor-pointer select-none group"
              draggable="false"
            >
              {/* CARD STRUCTURE - EXACTLY LIKE IMAGE */}
              <div className="space-y-4">
                {/* IMAGE WITH ROUNDED CORNERS - NO BACKGROUND */}
                <div className="relative w-full aspect-[3/3.2] overflow-hidden rounded-[32px] transition-all duration-500 group-hover:shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable="false"
                  />
                </div>
                
                {/* TITLE BELOW - NO BACKGROUND */}
                <h3 className="text-lg md:text-xl  text-gray-700 px-1">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA */}
      {cityName && (
        <div className="max-w-7xl mx-auto mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Looking for treatment in {cityName}? Book a consultation today
          </p>
        </div>
      )}
    </div>
  );
}