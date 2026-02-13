

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
// import { conditionsData, categories } from './ConditionsData.js';

// export default function ConditionsSection() {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsToShow, setCardsToShow] = useState(4);

//   // Filter conditions based on search and category
//   const filteredConditions = conditionsData.filter(condition => {
//     // ✅ FIX: Handle both old (name) and new (title) structure
//     const displayName = condition.title || condition.name || '';
//     const matchesSearch = displayName.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'All' || condition.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   // Responsive cards to show
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) setCardsToShow(1);
//       else if (window.innerWidth < 768) setCardsToShow(2);
//       else if (window.innerWidth < 1024) setCardsToShow(3);
//       else setCardsToShow(4);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Reset index when filters change
//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [searchTerm, selectedCategory]);

//   // Auto-slide
//   useEffect(() => {
//     if (filteredConditions.length <= cardsToShow) return;
    
//     const interval = setInterval(() => {
//       setCurrentIndex(prev => {
//         const maxIndex = filteredConditions.length - cardsToShow;
//         if (prev >= maxIndex) return 0;
//         return prev + 1;
//       });
//     }, 3500);
    
//     return () => clearInterval(interval);
//   }, [filteredConditions.length, cardsToShow]);

//   const goToPrevious = () => {
//     setCurrentIndex(prev => Math.max(0, prev - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex(prev => Math.min(filteredConditions.length - cardsToShow, prev + 1));
//   };

//   const canGoPrevious = currentIndex > 0;
//   const canGoNext = currentIndex < filteredConditions.length - cardsToShow;

//   // Navigate to condition detail page
//   const handleConditionClick = (condition) => {
//     // ✅ FIX: Handle both slug and name-based URL generation
//     let slug;
//     if (condition.slug) {
//       slug = condition.slug;
//     } else {
//       const displayName = condition.title || condition.name || '';
//       slug = displayName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
//     }
//     navigate(`/conditions/${slug}`, { state: { condition } });
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="w-full py-18 px-4 to-gray-50">  
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-16"
//          style={{
//                 fontFamily: "'Zalando Sans Expanded', sans-serif",
//                 fontWeight: 200,
//               }}  >
//           <div className="inline-block bg-[#8ab72e] text-white px-8 py-3 rounded-full text-xs mb-6 shadow-lg">
//             ✨ Expert Treatment
//           </div>
//           <h2 className="text-4xl md:text-5xl text-gray-800 mb-6">
//             Conditions We <span className="text-[#8ab72e]">Treat</span>
//           </h2>
        

//           {/* Category Filter */}
//           {/* <div className="flex flex-wrap justify-center gap-3"  style={{
//                 fontFamily: "'Gantari', sans-serif",
//                 fontWeight: 400,
//               }}>
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-6 py-3 rounded-full text-sm transition-all duration-300 ${
//                   selectedCategory === category
//                     ? 'bg-[#8ab72e] text-white shadow-xl scale-110'
//                     : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg hover:scale-105'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div> */}
//         </div>

//         {/* Slider Section */}
//         {filteredConditions.length > 0 ? (
//           <div className="relative px-4 sm:px-8 md:px-12 mb-16">
//             {/* Previous Button */}
//             {filteredConditions.length > cardsToShow && (
//               <button
//                 onClick={goToPrevious}
//                 disabled={!canGoPrevious}
//                 className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-2xl transition-all duration-300 ${
//                   canGoPrevious 
//                     ? 'text-[#8ab72e] hover:bg-[#8ab72e] hover:text-white hover:scale-125' 
//                     : 'text-gray-300 cursor-not-allowed opacity-50'
//                 }`}
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>
//             )}

//             {/* Cards Container */}
//             <div className="overflow-hidden rounded-2xl"
//              style={{
//                 fontFamily: "'Gantari', sans-serif",
//                 fontWeight: 400,
//               }}>
//               <div
//                 className="flex transition-transform duration-700 ease-in-out"
//                 style={{
//                   transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`
//                 }}
//               >
//                 {filteredConditions.map((condition) => {
//                   // ✅ FIX: Get display name for rendering
//                   const displayName = condition.title || condition.name || 'Unknown Condition';
                  
//                   return (
//                     <div
//                       key={condition.id}
//                       className="px-3"
//                       style={{ minWidth: `${100 / cardsToShow}%` }}
//                     >
//                       <div 
//                         onClick={() => handleConditionClick(condition)}
//                         className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group h-full border-2 border-gray-100 cursor-pointer"
//                       >
//                         {/* Image Section */}
//                         <div className="relative h-56 overflow-hidden">
//                           <img
//                             src={condition.image}
//                             alt={displayName}
//                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                          
//                           {/* Category Badge */}
//                           <div className="absolute top-4 right-4 bg-[#8ab72e] text-white px-4 py-2 rounded-full text-xs shadow-xl backdrop-blur-sm">
//                             {condition.category}
//                           </div>

//                           {/* Checkmark Icon */}
//                           <div className="absolute bottom-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
//                             <CheckCircle className="w-6 h-6 text-[#8ab72e]" />
//                           </div>
//                         </div>

//                         {/* Content Section */}
//                         <div className="p-6">
//                           <h3 className="text-gray-900 text-xl mb-2 group-hover:text-[#8ab72e] transition-colors min-h-[56px] flex items-center">
//                             {displayName}
//                           </h3>
                          
//                           <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
//                             <span className="text-sm text-gray-500">View Details</span>
//                             <div className="w-8 h-8 bg-[#e8f1d7] rounded-full flex items-center justify-center group-hover:bg-[#8ab72e] transition-colors">
//                               <svg className="w-4 h-4 text-[#8ab72e] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Next Button */}
//             {filteredConditions.length > cardsToShow && (
//               <button
//                 onClick={goToNext}
//                 disabled={!canGoNext}
//                 className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-2xl transition-all duration-300 ${
//                   canGoNext 
//                     ? 'text-[#8ab72e] hover:bg-[#8ab72e] hover:text-white hover:scale-125' 
//                     : 'text-gray-300 cursor-not-allowed opacity-50'
//                 }`}
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             )}

//             {/* Dots Navigation */}
//             {filteredConditions.length > cardsToShow && (
//               <div className="flex justify-center gap-2 mt-10">
//                 {Array.from({ length: Math.ceil(filteredConditions.length / cardsToShow) }).map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`h-2.5 rounded-full transition-all duration-300 ${
//                       Math.floor(currentIndex / cardsToShow) === index
//                         ? 'w-12 bg-[#8ab72e] shadow-lg'
//                         : 'w-2.5 bg-gray-300 hover:bg-gray-400'
//                     }`}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         ) : (
//           /* No Results Message */
//           <div className="text-center py-16 mb-12"
//            style={{
//                 fontFamily: "'Gantari', sans-serif",
//                 fontWeight: 400,
//               }}>
//             <div className="text-gray-300 text-7xl mb-6">🔍</div>
//             <h3 className="text-3xl text-gray-900 mb-3">No conditions found</h3>
//             <p className="text-gray-600 text-lg mb-8">Try selecting a different category</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { conditionsData, categories } from './ConditionsData.js';

export default function ConditionsSection() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const sliderRef = React.useRef(null);
  const animationRef = React.useRef(null);

  // Filter conditions based on search and category
  const filteredConditions = conditionsData.filter(condition => {
    const displayName = condition.title || condition.name || '';
    const matchesSearch = displayName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || condition.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Responsive cards to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 768) setCardsToShow(2);
      else if (window.innerWidth < 1024) setCardsToShow(3);
      else setCardsToShow(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ================================
  // 🔄 INFINITE SMOOTH CIRCULAR SCROLL
  // ================================
  useEffect(() => {
    if (!sliderRef.current || isHovered || isDragging || filteredConditions.length === 0) return;

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
    const gapWidth = 12;
    const totalCardWidth = cardWidth + gapWidth;

    const autoScroll = () => {
      if (!slider) return;
      slider.scrollLeft += speed;
      const resetPoint = totalCardWidth * filteredConditions.length;
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
  }, [isHovered, cardsToShow, isDragging, filteredConditions]);

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
    const gapWidth = 12;
    const scrollAmount = cardWidth + gapWidth;

    const start = slider.scrollLeft;
    const target = direction === 'left' ? Math.max(0, start - scrollAmount) : start + scrollAmount;

    const duration = 400;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeInOutQuad = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      slider.scrollLeft = start + (target - start) * easeInOutQuad;

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  // Navigate to condition detail page
  const handleConditionClick = (condition) => {
    let slug;
    if (condition.slug) {
      slug = condition.slug;
    } else {
      const displayName = condition.title || condition.name || '';
      slug = displayName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
    }
    navigate(`/conditions/${slug}`, { state: { condition } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full py-18 px-4 bg-white">  
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16"
         style={{
                fontFamily: "'Zalando Sans Expanded', sans-serif",
                fontWeight: 200,
              }}  >
          <div className="inline-block bg-[#8ab72e] text-white px-8 py-3 rounded-full text-xs mb-6 shadow-lg">
            ✨ Expert Treatment
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-6">
            Conditions We <span className="text-[#8ab72e]">Treat</span>
          </h2>
        </div>

        {/* Slider Section */}
        {filteredConditions.length > 0 ? (
          <div className="relative group/slider">
            {/* Left Button */}
            <button
              onClick={() => scroll('left')}
              onMouseDown={(e) => e.stopPropagation()}
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#8ab72e] shadow-xl rounded-full p-3 transition-all duration-300 md:opacity-0 md:group-hover/slider:opacity-100 hover:scale-110 active:scale-95 group/btn"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 group-hover/btn:text-white transition-colors" />
            </button>

            {/* Right Button */}
            <button
              onClick={() => scroll('right')}
              onMouseDown={(e) => e.stopPropagation()}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#8ab72e] shadow-xl rounded-full p-3 transition-all duration-300 md:opacity-0 md:group-hover/slider:opacity-100 hover:scale-110 active:scale-95 group/btn"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 group-hover/btn:text-white transition-colors" />
            </button>

            {/* Cards Container with Infinite Scroll */}
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
              className={`flex gap-3 overflow-x-auto md:overflow-x-hidden ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              } scrollbar-hide px-4 md:px-0`}
              style={{
                scrollBehavior: 'auto',
                WebkitOverflowScrolling: 'touch',
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}
            >
              {filteredConditions.map((condition, index) => {
                const displayName = condition.title || condition.name || 'Unknown Condition';
                
                return (
                  <div
                    key={`${condition.id}-${index}`}
                    onClick={() => handleConditionClick(condition)}
                    className="flex-shrink-0 w-[280px] md:w-[calc(25%-9px)] cursor-pointer select-none group"
                    draggable="false"
                  >
                    {/* CLEAN DESIGN - IMAGE WITH ROUNDED CORNERS */}
                    <div className="space-y-4">
                      {/* IMAGE - NO BACKGROUND */}
                      <div className="relative w-full aspect-[3/3.2] overflow-hidden rounded-[32px] transition-all duration-500 group-hover:shadow-xl">
                        <img
                          src={condition.image}
                          alt={displayName}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          draggable="false"
                        />
                      </div>
                      
                      {/* TITLE BELOW - NO BACKGROUND */}
                      <h3 className="text-lg md:text-xl  text-gray-700 px-1 group-hover:text-[#8ab72e] transition-colors">
                        {displayName}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* No Results Message */
          <div className="text-center py-16 mb-12"
           style={{
                fontFamily: "'Gantari', sans-serif",
                fontWeight: 400,
              }}>
            <div className="text-gray-300 text-7xl mb-6">🔍</div>
            <h3 className="text-3xl text-gray-900 mb-3">No conditions found</h3>
            <p className="text-gray-600 text-lg mb-8">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
}