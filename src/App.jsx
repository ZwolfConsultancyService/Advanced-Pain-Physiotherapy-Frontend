// import React, { Suspense, lazy } from "react";
// import { Routes, Route } from "react-router-dom";
// import Layout from "./Layout/Layout";
// import ScrollToTop from "./lib/ScrollToTop/ScrollToTop";
// import PhysiotherapyDetailPage from "./pages/DetailPage/PhysiotherapyDetailPage";
// import AreaDetailPage from "./pages/DetailPage/AreaDetailPage/AreaDetailPage";
// import CityOverviewPage from "./pages/CityOverviewPage/CityOverviewPage";
// import CitySelectionPage from "./components/CitySelection/CitySelection";
// import PhysiotherapistsNearYou from "./pages/PhysiotherapistsNearYou/PhysiotherapistsNearYou";
// import ConditionDetailPage from "./pages/DetailPage/ConditionDetailPage/ConditionDetailPage";
// import BlogDetailPage from "./pages/DetailPage/BlogDetailPage/BlogDetailPage";
// import AreaPhysiotherapyDetailPage from "./pages/DetailPage/AreaPhysiotherapyDetailPage/AreaPhysiotherapyDetailPage";
// import CertifiedTherapists from "./pages/CertifiedTherapists/CertifiedTherapists";
// import ClinicDetailPage from "./pages/DetailPage/ClinicDetailPage/ClinicDetailPage";
// import LocationDetailPage from "./components/SharmaOrthopedic /LocationDetailPage/LocationDetailPage";
// import ServiceDetailPage from "./components/SharmaOrthopedic /ServiceDetailPage/ServiceClinicDetailPage";
// import ServiceClinicDetailPage from "./components/SharmaOrthopedic /ServiceDetailPage/ServiceClinicDetailPage";
// import ParthMedicareServiceDetail from "./pages/DetailPage/ClinicDetailPage/ParthMedicareServiceDetail/ParthMedicareServiceDetail";
// import AshishServiceDetail from "./components/SharmaOrthopedic /ServiceDetailPage/AshishServiceDetail";

// // Lazy load components
// const MainPage = lazy(() => import("./pages/MainPage"));
// const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
// const TermsAndConditions = lazy(
//   () => import("./pages/TermsAndConditions/TermsAndConditions"),
// );
// const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
// const AboutPage = lazy(() => import("./pages/NavbarPages/AboutPage/AboutPage"));
// const ServicesPage = lazy(
//   () => import("./pages/NavbarPages/ServicesPage/ServicesPage"),
// );
// const BlogPage = lazy(() => import("./pages/NavbarPages/BlogPage/BlogPage"));

// // Modern Loader Component
// // const Loader = () => (
// //   <div className="min-h-screen flex items-center justify-center">
// //     <div className="relative">
// //       <div className="w-20 h-20 border-4 border-[#8ab72e] rounded-full animate-spin border-t-[#cee1a9]"></div>
// //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
// //         <div className="w-12 h-12 bg-[#8ab72e] rounded-full animate-pulse"></div>
// //       </div>
// //       <p className="mt-6 text-[#8ab72e]  text-center animate-pulse">
// //         Loading...
// //       </p>
// //     </div>
// //   </div>
// // );

// const App = () => {
//   return (
//     <>
//       <ScrollToTop />
//       <Suspense>
//         <Routes>
//           {/* Pages WITH Layout (your navbar/footer) */}
//           <Route element={<Layout />}>
//             {/* Main Pages */}
//             <Route path="/" element={<MainPage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/services" element={<ServicesPage />} />
//             <Route path="/blogs" element={<BlogPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/terms" element={<TermsAndConditions />} />
//             <Route path="/privacy" element={<PrivacyPolicy />} />

//             {/* Service Detail Pages */}
//             <Route
//               path="/service/:slug"
//               element={<PhysiotherapyDetailPage />}
//             />
//             <Route
//               path="/physiotherapy/:slug"
//               element={<PhysiotherapyDetailPage />}
//             />
//             <Route
//               path="/services/:slug"
//               element={<PhysiotherapyDetailPage />}
//             />

//             <Route path="/condition/:slug" element={<ConditionDetailPage />} />

//             {/* City Selection */}
//             <Route path="/cities" element={<CitySelectionPage />} />

//             {/* Area + Service */}
//             <Route
//               path="/city/:citySlug/area/:areaSlug/:serviceSlug"
//               element={<AreaPhysiotherapyDetailPage />}
//             />

//             {/* Area without service */}
//             <Route
//               path="/city/:citySlug/area/:areaSlug"
//               element={<AreaPhysiotherapyDetailPage />}
//             />

//             {/* City + Service */}
//             <Route
//               path="/city/:citySlug/:serviceSlug"
//               element={<AreaDetailPage />}
//             />

//             {/* Only City */}
//             <Route path="/city/:citySlug" element={<CityOverviewPage />} />

//             {/* Physiotherapists Near You */}
//             <Route
//               path="/physiotherapists/:citySlug"
//               element={<PhysiotherapistsNearYou />}
//             />

//             {/* Condition & Blog Detail Pages */}
//             <Route path="/conditions/:slug" element={<ConditionDetailPage />} />
//             <Route path="/blog/:slug" element={<BlogDetailPage />} />
//             <Route path="/therapists" element={<CertifiedTherapists />} />
//           </Route>

//           {/* Pages WITHOUT Layout (clinic ka apna navbar/footer) */}
//           <Route path="/clinic/:slug" element={<ClinicDetailPage />} />
//           <Route path="/location/:slug" element={<LocationDetailPage />} />
//           <Route
//             path="/clinic/:clinicSlug/service/:serviceSlug"
//             element={<ServiceClinicDetailPage />}
//           />
//           <Route
//             path="/clinic/Ashish-physiotherapy-centre/service/:serviceSlug"
//             element={<AshishServiceDetail />}
//           />
//           <Route
//             path="/clinic/parth-medicare/service/:serviceSlug"
//             element={<ParthMedicareServiceDetail />}
//           />
//         </Routes>
//       </Suspense>
//     </>
//   );
// };

// export default App;



// import React, { Suspense, lazy } from "react";
// import { Routes, Route, Navigate, useParams } from "react-router-dom";
// import Layout from "./Layout/Layout";
// import ScrollToTop from "./lib/ScrollToTop/ScrollToTop";
// import PhysiotherapyDetailPage from "./pages/DetailPage/PhysiotherapyDetailPage";
// import AreaDetailPage from "./pages/DetailPage/AreaDetailPage/AreaDetailPage";
// import CityOverviewPage from "./pages/CityOverviewPage/CityOverviewPage";
// import CitySelectionPage from "./components/CitySelection/CitySelection";
// import PhysiotherapistsNearYou from "./pages/PhysiotherapistsNearYou/PhysiotherapistsNearYou";
// import ConditionDetailPage from "./pages/DetailPage/ConditionDetailPage/ConditionDetailPage";
// import BlogDetailPage from "./pages/DetailPage/BlogDetailPage/BlogDetailPage";
// import AreaPhysiotherapyDetailPage from "./pages/DetailPage/AreaPhysiotherapyDetailPage/AreaPhysiotherapyDetailPage";
// import CertifiedTherapists from "./pages/CertifiedTherapists/CertifiedTherapists";
// import ClinicDetailPage from "./pages/DetailPage/ClinicDetailPage/ClinicDetailPage";
// import LocationDetailPage from "./components/SharmaOrthopedic /LocationDetailPage/LocationDetailPage";
// import ServiceClinicDetailPage from "./components/SharmaOrthopedic /ServiceDetailPage/ServiceClinicDetailPage";
// import ParthMedicareServiceDetail from "./pages/DetailPage/ClinicDetailPage/ParthMedicareServiceDetail/ParthMedicareServiceDetail";
// import AshishServiceDetail from "./components/SharmaOrthopedic /ServiceDetailPage/AshishServiceDetail";

// // Lazy load components
// const MainPage = lazy(() => import("./pages/MainPage"));
// const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
// const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions/TermsAndConditions"));
// const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
// const AboutPage = lazy(() => import("./pages/NavbarPages/AboutPage/AboutPage"));
// const ServicesPage = lazy(() => import("./pages/NavbarPages/ServicesPage/ServicesPage"));
// const BlogPage = lazy(() => import("./pages/NavbarPages/BlogPage/BlogPage"));

// // ============================================================
// // ✅ OLD ROUTES → REDIRECT TO NEW SEO FORMAT
// //
// // NEW FORMAT — sab ek hi URL segment mein (koi "/" nahi):
// //   /sports-injury-treatment-in-faridabad-nit   ✅
// //   /sports-injury-treatment-in-delhi           ✅
// //   /physiotherapy-in-delhi-janakpuri           ✅
// //   /physiotherapy-in-delhi                     ✅
// // ============================================================

// // /city/delhi/area/nit/knee-pain → /knee-pain-treatment-in-delhi-nit
// const RedirectCityAreaService = () => {
//   const { citySlug, areaSlug, serviceSlug } = useParams();
//   return <Navigate to={`/${serviceSlug}-treatment-in-${citySlug}-${areaSlug}`} replace />;
// };

// // /city/delhi/area/nit → /physiotherapy-in-delhi-nit
// const RedirectCityArea = () => {
//   const { citySlug, areaSlug } = useParams();
//   return <Navigate to={`/physiotherapy-in-${citySlug}-${areaSlug}`} replace />;
// };

// // /city/delhi/knee-pain → /knee-pain-treatment-in-delhi
// const RedirectCityService = () => {
//   const { citySlug, serviceSlug } = useParams();
//   return <Navigate to={`/${serviceSlug}-treatment-in-${citySlug}`} replace />;
// };

// // /city/delhi → /physiotherapy-in-delhi
// const RedirectCity = () => {
//   const { citySlug } = useParams();
//   return <Navigate to={`/physiotherapy-in-${citySlug}`} replace />;
// };

// // ============================================================

// const App = () => {
//   return (
//     <>
//       <ScrollToTop />
//       <Suspense>
//         <Routes>

//           {/* ✅ Pages WITH Layout */}
//           <Route element={<Layout />}>

//             {/* Main Pages */}
//             <Route path="/" element={<MainPage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/services" element={<ServicesPage />} />
//             <Route path="/blogs" element={<BlogPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/terms" element={<TermsAndConditions />} />
//             <Route path="/privacy" element={<PrivacyPolicy />} />

//             {/* Service Detail Pages */}
//             <Route path="/service/:slug" element={<PhysiotherapyDetailPage />} />
//             <Route path="/physiotherapy/:slug" element={<PhysiotherapyDetailPage />} />
//             <Route path="/services/:slug" element={<PhysiotherapyDetailPage />} />

//             {/* Condition Detail */}
//             <Route path="/condition/:slug" element={<ConditionDetailPage />} />
//             <Route path="/conditions/:slug" element={<ConditionDetailPage />} />

//             {/* City Selection */}
//             <Route path="/cities" element={<CitySelectionPage />} />

//             {/* Blog & Therapists */}
//             <Route path="/blog/:slug" element={<BlogDetailPage />} />
//             <Route path="/therapists" element={<CertifiedTherapists />} />

//             {/* Physiotherapists Near You */}
//             <Route path="/physiotherapists/:citySlug" element={<PhysiotherapistsNearYou />} />

//             {/* ============================================
//                 OLD ROUTES → AUTO REDIRECT to new format
//                 ============================================ */}
//             <Route path="/city/:citySlug/area/:areaSlug/:serviceSlug" element={<RedirectCityAreaService />} />
//             <Route path="/city/:citySlug/area/:areaSlug" element={<RedirectCityArea />} />
//             <Route path="/city/:citySlug/:serviceSlug" element={<RedirectCityService />} />
//             <Route path="/city/:citySlug" element={<RedirectCity />} />

//             {/* ============================================
//                 ✅ NEW SEO URL — SINGLE SEGMENT (no slash)

//                 /sports-injury-treatment-in-faridabad-nit
//                   → serviceSlug = "sports-injury"
//                   → citySlug    = "faridabad"
//                   → areaSlug    = "nit"

//                 /physiotherapy-in-delhi
//                   → city overview page

//                 parseFullSlug() in AreaDetailPage handles all parsing
//                 ============================================ */}
//             <Route path="/:fullSlug" element={<AreaDetailPage />} />

//           </Route>

//           {/* ✅ Pages WITHOUT Layout */}
//           <Route path="/clinic/:slug" element={<ClinicDetailPage />} />
//           <Route path="/location/:slug" element={<LocationDetailPage />} />
//           <Route path="/clinic/:clinicSlug/service/:serviceSlug" element={<ServiceClinicDetailPage />} />
//           <Route path="/clinic/Ashish-physiotherapy-centre/service/:serviceSlug" element={<AshishServiceDetail />} />
//           <Route path="/clinic/parth-medicare/service/:serviceSlug" element={<ParthMedicareServiceDetail />} />

//         </Routes>
//       </Suspense>
//     </>
//   );
// };

// export default App;


import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
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
import ServiceClinicDetailPage from "./components/SharmaOrthopedic /ServiceDetailPage/ServiceClinicDetailPage";
import ParthMedicareServiceDetail from "./pages/DetailPage/ClinicDetailPage/ParthMedicareServiceDetail/ParthMedicareServiceDetail";
import AshishServiceDetail from "./components/SharmaOrthopedic /ServiceDetailPage/AshishServiceDetail";
import { citiesData } from "./data/citiesData";

const MainPage = lazy(() => import("./pages/MainPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const AboutPage = lazy(() => import("./pages/NavbarPages/AboutPage/AboutPage"));
const ServicesPage = lazy(() => import("./pages/NavbarPages/ServicesPage/ServicesPage"));
const BlogPage = lazy(() => import("./pages/NavbarPages/BlogPage/BlogPage"));

// ============================================================
// ✅ OLD ROUTES → REDIRECT
// ============================================================
const RedirectCityAreaService = () => {
  const { citySlug, areaSlug, serviceSlug } = useParams();
  return <Navigate to={`/${serviceSlug}-treatment-in-${citySlug}-${areaSlug}`} replace />;
};
const RedirectCityArea = () => {
  const { citySlug, areaSlug } = useParams();
  return <Navigate to={`/physiotherapy-in-${citySlug}-${areaSlug}`} replace />;
};
const RedirectCityService = () => {
  const { citySlug, serviceSlug } = useParams();
  return <Navigate to={`/${serviceSlug}-treatment-in-${citySlug}`} replace />;
};
const RedirectCity = () => {
  const { citySlug } = useParams();
  return <Navigate to={`/physiotherapy-in-${citySlug}`} replace />;
};

// ============================================================
// ✅ SMART ROUTER COMPONENT
// fullSlug parse karke decide karta hai kaunsa component render ho
//
// URL Examples:
//   /physiotherapy-in-noida-sector-33       → AreaPhysiotherapyDetailPage
//   /knee-pain-treatment-in-delhi-janakpuri → AreaPhysiotherapyDetailPage
//   /knee-pain-treatment-in-delhi           → AreaDetailPage
//   /physiotherapy-in-delhi                 → CityOverviewPage
// ============================================================
const SmartRouter = () => {
  const { fullSlug } = useParams();

  // Parse fullSlug
  const inIndex = fullSlug.lastIndexOf("-in-");

  if (inIndex === -1) {
    return <AreaDetailPage />;
  }

  const afterIn = fullSlug.slice(inIndex + 4);
  const beforeIn = fullSlug.slice(0, inIndex);

  // City slugs from citiesData — sorted longest first
  const knownCities = citiesData
    .map((c) => c.slug)
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  let citySlug = null;
  let areaSlug = null;

  for (const city of knownCities) {
    if (afterIn === city) {
      citySlug = city;
      areaSlug = null;
      break;
    } else if (afterIn.startsWith(city + "-")) {
      citySlug = city;
      areaSlug = afterIn.slice(city.length + 1);
      break;
    }
  }

  if (!citySlug) {
    citySlug = afterIn;
    areaSlug = null;
  }

  const serviceSlug =
    beforeIn === "physiotherapy"
      ? null
      : beforeIn.endsWith("-treatment")
      ? beforeIn.slice(0, -"-treatment".length)
      : beforeIn;

  // ✅ City only → CityOverviewPage
  if (!serviceSlug && !areaSlug) {
    return <CityOverviewPage citySlug={citySlug} />;
  }

  // ✅ Has area → AreaPhysiotherapyDetailPage
  // key={fullSlug} ensures full remount on every URL change
  if (areaSlug) {
    return (
      <AreaPhysiotherapyDetailPage
        key={fullSlug}
        citySlug={citySlug}
        areaSlug={areaSlug}
        serviceSlug={serviceSlug}
      />
    );
  }

  // ✅ Service + City only → AreaDetailPage
  return <AreaDetailPage />;
};

// ============================================================

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            <Route path="/service/:slug" element={<PhysiotherapyDetailPage />} />
            <Route path="/physiotherapy/:slug" element={<PhysiotherapyDetailPage />} />
            <Route path="/services/:slug" element={<PhysiotherapyDetailPage />} />

            <Route path="/condition/:slug" element={<ConditionDetailPage />} />
            <Route path="/conditions/:slug" element={<ConditionDetailPage />} />

            <Route path="/cities" element={<CitySelectionPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/therapists" element={<CertifiedTherapists />} />
            <Route path="/physiotherapists/:citySlug" element={<PhysiotherapistsNearYou />} />

            {/* Old routes redirect */}
            <Route path="/city/:citySlug/area/:areaSlug/:serviceSlug" element={<RedirectCityAreaService />} />
            <Route path="/city/:citySlug/area/:areaSlug" element={<RedirectCityArea />} />
            <Route path="/city/:citySlug/:serviceSlug" element={<RedirectCityService />} />
            <Route path="/city/:citySlug" element={<RedirectCity />} />

            {/* ✅ SINGLE CATCH-ALL — SmartRouter decides which component */}
            <Route path="/:fullSlug" element={<SmartRouter />} />
          </Route>

          <Route path="/clinic/:slug" element={<ClinicDetailPage />} />
          <Route path="/location/:slug" element={<LocationDetailPage />} />
          <Route path="/clinic/:clinicSlug/service/:serviceSlug" element={<ServiceClinicDetailPage />} />
          <Route path="/clinic/Ashish-physiotherapy-centre/service/:serviceSlug" element={<AshishServiceDetail />} />
          <Route path="/clinic/parth-medicare/service/:serviceSlug" element={<ParthMedicareServiceDetail />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;