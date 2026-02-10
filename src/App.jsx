import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import ScrollToTop from "./lib/ScrollToTop/ScrollToTop";
import PhysiotherapyDetailPage from "./pages/DetailPage/PhysiotherapyDetailPage";
import AreaDetailPage from "./pages/DetailPage/AreaDetailPage/AreaDetailPage";
import CityOverviewPage from "./pages/CityOverviewPage/CityOverviewPage";
import CitySelectionPage from "./components/CitySelection/CitySelection";
import PhysiotherapistsNearYou from "./pages/PhysiotherapistsNearYou/PhysiotherapistsNearYou";
import ConditionDetailPage from "./pages/DetailPage/ConditionDetailPage/ConditionDetailPage";
import BlogDetailPage from "./pages/DetailPage/BlogDetailPage/BlogDetailPage";
import AreaPhysiotherapyDetailPage from "./pages/DetailPage/AreaPhysiotherapyDetailPage/AreaPhysiotherapyDetailPage";
import CertifiedTherapists from "./pages/CertifiedTherapists/CertifiedTherapists";
import ClinicDetailPage from "./pages/DetailPage/ClinicDetailPage/ClinicDetailPage";
import LocationDetailPage from "./components/SharmaOrthopedic /LocationDetailPage/LocationDetailPage";
import ServiceDetailPage from "./components/SharmaOrthopedic /ServiceDetailPage/ServiceClinicDetailPage";
import ServiceClinicDetailPage from "./components/SharmaOrthopedic /ServiceDetailPage/ServiceClinicDetailPage";
import ParthMedicareServiceDetail from "./pages/DetailPage/ClinicDetailPage/ParthMedicareServiceDetail/ParthMedicareServiceDetail";
import AshishServiceDetail from "./components/SharmaOrthopedic /ServiceDetailPage/AshishServiceDetail";

// Lazy load components
const MainPage = lazy(() => import("./pages/MainPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const TermsAndConditions = lazy(
  () => import("./pages/TermsAndConditions/TermsAndConditions"),
);
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const AboutPage = lazy(() => import("./pages/NavbarPages/AboutPage/AboutPage"));
const ServicesPage = lazy(
  () => import("./pages/NavbarPages/ServicesPage/ServicesPage"),
);
const BlogPage = lazy(() => import("./pages/NavbarPages/BlogPage/BlogPage"));

// Modern Loader Component
// const Loader = () => (
//   <div className="min-h-screen flex items-center justify-center">
//     <div className="relative">
//       <div className="w-20 h-20 border-4 border-[#8ab72e] rounded-full animate-spin border-t-[#cee1a9]"></div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//         <div className="w-12 h-12 bg-[#8ab72e] rounded-full animate-pulse"></div>
//       </div>
//       <p className="mt-6 text-[#8ab72e]  text-center animate-pulse">
//         Loading...
//       </p>
//     </div>
//   </div>
// );

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense>
        <Routes>
          {/* Pages WITH Layout (your navbar/footer) */}
          <Route element={<Layout />}>
            {/* Main Pages */}
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            {/* Service Detail Pages */}
            <Route
              path="/service/:slug"
              element={<PhysiotherapyDetailPage />}
            />
            <Route
              path="/physiotherapy/:slug"
              element={<PhysiotherapyDetailPage />}
            />
            <Route
              path="/services/:slug"
              element={<PhysiotherapyDetailPage />}
            />

            <Route path="/condition/:slug" element={<ConditionDetailPage />} />

            {/* City Selection */}
            <Route path="/cities" element={<CitySelectionPage />} />

            {/* Area + Service */}
            <Route
              path="/city/:citySlug/area/:areaSlug/:serviceSlug"
              element={<AreaPhysiotherapyDetailPage />}
            />

            {/* Area without service */}
            <Route
              path="/city/:citySlug/area/:areaSlug"
              element={<AreaPhysiotherapyDetailPage />}
            />

            {/* City + Service */}
            <Route
              path="/city/:citySlug/:serviceSlug"
              element={<AreaDetailPage />}
            />

            {/* Only City */}
            <Route path="/city/:citySlug" element={<CityOverviewPage />} />

            {/* Physiotherapists Near You */}
            <Route
              path="/physiotherapists/:citySlug"
              element={<PhysiotherapistsNearYou />}
            />

            {/* Condition & Blog Detail Pages */}
            <Route path="/conditions/:slug" element={<ConditionDetailPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/therapists" element={<CertifiedTherapists />} />
          </Route>

          {/* Pages WITHOUT Layout (clinic ka apna navbar/footer) */}
          <Route path="/clinic/:slug" element={<ClinicDetailPage />} />
          <Route path="/location/:slug" element={<LocationDetailPage />} />
          <Route
            path="/clinic/:clinicSlug/service/:serviceSlug"
            element={<ServiceClinicDetailPage />}
          />
          <Route 
  path="/clinic/Ashish-physiotherapy-centre/service/:serviceSlug" 
  element={<AshishServiceDetail />} 
/>
          <Route
            path="/clinic/parth-medicare/service/:serviceSlug"
            element={<ParthMedicareServiceDetail />}
          />
        </Routes>
       
  
      </Suspense>
    </>
  );
};

export default App;
