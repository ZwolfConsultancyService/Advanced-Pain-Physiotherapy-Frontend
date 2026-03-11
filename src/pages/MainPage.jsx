import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ServicesSlider from "../components/ServiceCard/ServicesSlider";
import AboutSection from "../components/About/AboutSection";
import ServicesCardsSection from "../components/ServiceCard/ServicesCardsSection";
import ServicesSection from "../components/ServiceCard/ServicesSection";
import TherapistsTeam from "../components/TherapistsTeam/TherapistsTeam";
import FAQSection from "../components/FAQSection/FAQSection";
import BlogSection from "../components/BlogSection/BlogSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import FloatingButtons from "../lib/FloatingButtons";
import PhysiotherapyClinics from "../components/PhysiotherapyClinics/PhysiotherapyClinics";
import CityNavigation from "../components/CityNavigation/CityNavigation";
import TherapyExpertiseSection from "../components/TherapyExpertise/TherapyExpertiseSection";
import ConditionsSection from "../components/ConditionsDataSection/ConditionsSection";
import FounderSection from "../components/FounderSection/FounderSection";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import PhysiotherapyFeesSection from "../components/PhysiotherapyFeesSection/PhysiotherapyFeesSection";
import { Helmet } from "react-helmet-async";
//import AppointmentPopup from "../pages/ContactPage/AppointmentPopup/AppointmentPopup"; // ✅ Import popup

const MainPage = () => {
  const [showPopup, setShowPopup] = useState(false); // ✅ Popup state

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });

    // ✅ 3 seconds baad popup open hoga
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Advanced Pain Physiotherapy Centre | Best Physiotherapist in Delhi NCR
        </title>
        <meta
          name="description"
          content="Advanced Pain Physiotherapy Centre offers expert physiotherapy treatment in Delhi NCR. Certified physiotherapists, advanced equipment, home care & tele-rehab services. Book appointment now."
        />
        <meta
          name="keywords"
          content="physiotherapy centre delhi, best physiotherapist delhi, pain physiotherapy, physiotherapy near me, advanced physiotherapy delhi ncr"
        />
        <link rel="canonical" href="https://www.advancedpainphysio.com/" />
        <meta
          property="og:title"
          content="Advanced Pain Physiotherapy Centre | Best Physiotherapist in Delhi NCR"
        />
        <meta
          property="og:description"
          content="Expert physiotherapy treatment in Delhi NCR. Certified physiotherapists, advanced equipment, home care & tele-rehab services."
        />
        <meta
          property="og:url"
          content="https://www.advancedpainphysiotherapy.com/"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* ✅ Popup Component */}
      {/* <AppointmentPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      /> */}

      {/* Mobile & Tablet specific spacing - Desktop unchanged */}
      <style>{`
        /* CRITICAL: Remove all gaps on mobile and tablet */
        @media (max-width: 1024px) {
          /* Force zero margin and padding for hero section */
          .hero-no-gap,
          .hero-no-gap > *,
          .hero-no-gap > div,
          .hero-no-gap section,
          .hero-no-gap * {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
        }
        
        /* Only apply to mobile (phone) */
        @media (max-width: 640px) {
          .mobile-section {
            margin: 0 !important;
            padding: 0 !important;
          }
          
          .mobile-section > *,
          .mobile-section > div,
          .mobile-section > div > div,
          .mobile-section > div > div > div {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          /* Force remove all py, my classes on mobile */
          .mobile-section [class*="py-"],
          .mobile-section [class*="my-"],
          .mobile-section [class*="pt-"],
          .mobile-section [class*="pb-"],
          .mobile-section [class*="mt-"],
          .mobile-section [class*="mb-"] {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          /* Extra tight gap for specific sections */
          .tight-gap,
          .tight-gap > *,
          .tight-gap > div,
          .tight-gap > div > div {
            padding-top: 0.25rem !important;
            padding-bottom: 0.25rem !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
        }
        
        /* Tablet spacing */
        @media (min-width: 641px) and (max-width: 1024px) {
          .mobile-section {
            margin: 0 !important;
            padding: 0 !important;
          }
          
          .mobile-section > *,
          .mobile-section > div,
          .mobile-section > div > div {
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          .mobile-section [class*="py-"],
          .mobile-section [class*="my-"] {
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          
          /* Tablet tight gap */
          .tight-gap,
          .tight-gap > *,
          .tight-gap > div {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
        }
        
        /* Desktop (1025px+) - NO CHANGES, keep original spacing */
        @media (min-width: 1025px) {
          .mobile-section {
            /* Desktop spacing remains untouched */
          }
        }
      `}</style>

      <div className="relative" style={{ margin: 0, padding: 0 }}>
        {/* <div className="hero-no-gap" style={{ margin: 0, padding: 0 }}>
          <section data-aos="fade-up" className="mobile-section" style={{ margin: 0, padding: 0 }}>
            <HeroBanner />
          </section>
        </div> */}

        <section
          data-aos="fade-up"
          className="mobile-section relative -mt-14 lg:-mt-18"
          style={{ margin: 0, padding: 0 }}
        >
          <HeroBanner />
        </section>

        {/* ... rest of your sections remain same ... */}

        <section
          data-aos="fade-up"
          data-aos-delay="200"
          className="mobile-section"
        >
          <AboutSection />
        </section>

        <section data-aos="fade-up" className="mobile-section">
          <ServicesSlider />
        </section>

        <section
          data-aos="fade-up"
          data-aos-delay="200"
          className="mobile-section"
        >
          <FounderSection />
        </section>

        <section
          data-aos="fade-up"
          data-aos-delay="300"
          className="mobile-section"
        >
          <ServicesSection />
        </section>

        <section
          data-aos="fade-up"
          data-aos-delay="400"
          className="mobile-section"
        >
          <ServicesCardsSection />
        </section>

        {/* <section data-aos="fade-up" data-aos-delay="500" className="mobile-section tight-gap">
          <TherapistsTeam />
        </section> */}

        <section
          data-aos="fade-up"
          data-aos-delay="600"
          className="mobile-section"
        >
          <TestimonialsSection />
        </section>

        <section
          data-aos="fade-up"
          data-aos-delay="400"
          className="mobile-section"
        >
          <TherapyExpertiseSection />
        </section>

        <section
          data-aos="fade-up"
          data-aos-delay="600"
          className="mobile-section tight-gap"
        >
          <ConditionsSection />
        </section>
        {/* 
        <section data-aos="fade-up" data-aos-delay="700" className="mobile-section tight-gap">
          <FAQSection />
        </section> */}

        <section
          id="city-navigation"
          data-aos="fade-up"
          data-aos-delay="700"
          className="mobile-section"
        >
          <PhysiotherapyFeesSection />
        </section>

        <section
          id="city-navigation"
          data-aos="fade-up"
          data-aos-delay="700"
          className="mobile-section"
        >
          <PhysiotherapyClinics />
        </section>

        {/* <section data-aos="fade-up" data-aos-delay="800" className="mobile-section">
          <BlogSection />
        </section> */}

        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="mobile-section"
        >
          <CityNavigation />
        </section>

        <FloatingButtons />
      </div>
    </>
  );
};

export default MainPage;
