
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
// import { citiesData } from "./data/citiesData";

// const MainPage = lazy(() => import("./pages/MainPage"));
// const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
// const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions/TermsAndConditions"));
// const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
// const AboutPage = lazy(() => import("./pages/NavbarPages/AboutPage/AboutPage"));
// const ServicesPage = lazy(() => import("./pages/NavbarPages/ServicesPage/ServicesPage"));
// const BlogPage = lazy(() => import("./pages/NavbarPages/BlogPage/BlogPage"));

// // ============================================================
// // ✅ OLD ROUTES → REDIRECT
// // ============================================================
// const RedirectCityAreaService = () => {
//   const { citySlug, areaSlug, serviceSlug } = useParams();
//   return <Navigate to={`/${serviceSlug}-treatment-in-${citySlug}-${areaSlug}`} replace />;
// };
// const RedirectCityArea = () => {
//   const { citySlug, areaSlug } = useParams();
//   return <Navigate to={`/physiotherapy-in-${citySlug}-${areaSlug}`} replace />;
// };
// const RedirectCityService = () => {
//   const { citySlug, serviceSlug } = useParams();
//   return <Navigate to={`/${serviceSlug}-treatment-in-${citySlug}`} replace />;
// };
// const RedirectCity = () => {
//   const { citySlug } = useParams();
//   return <Navigate to={`/physiotherapy-in-${citySlug}`} replace />;
// };

// // ============================================================
// // ✅ SMART ROUTER COMPONENT
// // fullSlug parse karke decide karta hai kaunsa component render ho
// //
// // URL Examples:
// //   /physiotherapy-in-noida-sector-33       → AreaPhysiotherapyDetailPage
// //   /knee-pain-treatment-in-delhi-janakpuri → AreaPhysiotherapyDetailPage
// //   /knee-pain-treatment-in-delhi           → AreaDetailPage
// //   /physiotherapy-in-delhi                 → CityOverviewPage
// // ============================================================
// const SmartRouter = () => {
//   const { fullSlug } = useParams();

//   // Parse fullSlug
//   const inIndex = fullSlug.lastIndexOf("-in-");

//   if (inIndex === -1) {
//     return <AreaDetailPage />;
//   }

//   const afterIn = fullSlug.slice(inIndex + 4);
//   const beforeIn = fullSlug.slice(0, inIndex);

//   // City slugs from citiesData — sorted longest first
//   const knownCities = citiesData
//     .map((c) => c.slug)
//     .filter(Boolean)
//     .sort((a, b) => b.length - a.length);

//   let citySlug = null;
//   let areaSlug = null;

//   for (const city of knownCities) {
//     if (afterIn === city) {
//       citySlug = city;
//       areaSlug = null;
//       break;
//     } else if (afterIn.startsWith(city + "-")) {
//       citySlug = city;
//       areaSlug = afterIn.slice(city.length + 1);
//       break;
//     }
//   }

//   if (!citySlug) {
//     citySlug = afterIn;
//     areaSlug = null;
//   }

//   const serviceSlug =
//     beforeIn === "physiotherapy"
//       ? null
//       : beforeIn.endsWith("-treatment")
//       ? beforeIn.slice(0, -"-treatment".length)
//       : beforeIn;

//   // ✅ City only → CityOverviewPage
//   if (!serviceSlug && !areaSlug) {
//     return <CityOverviewPage citySlug={citySlug} />;
//   }

//   // ✅ Has area → AreaPhysiotherapyDetailPage
//   // key={fullSlug} ensures full remount on every URL change
//   if (areaSlug) {
//     return (
//       <AreaPhysiotherapyDetailPage
//         key={fullSlug}
//         citySlug={citySlug}
//         areaSlug={areaSlug}
//         serviceSlug={serviceSlug}
//       />
//     );
//   }

//   // ✅ Service + City only → AreaDetailPage
//   return <AreaDetailPage />;
// };

// // ============================================================

// const App = () => {
//   return (
//     <>
//       <ScrollToTop />
//       <Suspense>
//         <Routes>
//           <Route element={<Layout />}>
//             <Route path="/" element={<MainPage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/services" element={<ServicesPage />} />
//             <Route path="/blogs" element={<BlogPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/terms" element={<TermsAndConditions />} />
//             <Route path="/privacy" element={<PrivacyPolicy />} />

//             <Route path="/service/:slug" element={<PhysiotherapyDetailPage />} />
//             <Route path="/physiotherapy/:slug" element={<PhysiotherapyDetailPage />} />
//             <Route path="/services/:slug" element={<PhysiotherapyDetailPage />} />

//             <Route path="/condition/:slug" element={<ConditionDetailPage />} />
//             <Route path="/conditions/:slug" element={<ConditionDetailPage />} />

//             <Route path="/cities" element={<CitySelectionPage />} />
//             <Route path="/blog/:slug" element={<BlogDetailPage />} />
//             <Route path="/therapists" element={<CertifiedTherapists />} />
//             <Route path="/physiotherapists/:citySlug" element={<PhysiotherapistsNearYou />} />

//             {/* Old routes redirect */}
//             <Route path="/city/:citySlug/area/:areaSlug/:serviceSlug" element={<RedirectCityAreaService />} />
//             <Route path="/city/:citySlug/area/:areaSlug" element={<RedirectCityArea />} />
//             <Route path="/city/:citySlug/:serviceSlug" element={<RedirectCityService />} />
//             <Route path="/city/:citySlug" element={<RedirectCity />} />

//             {/* ✅ SINGLE CATCH-ALL — SmartRouter decides which component */}
//             <Route path="/:fullSlug" element={<SmartRouter />} />
//           </Route>

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
// import { citiesData } from "./data/citiesData";

// const MainPage = lazy(() => import("./pages/MainPage"));
// const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
// const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions/TermsAndConditions"));
// const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
// const AboutPage = lazy(() => import("./pages/NavbarPages/AboutPage/AboutPage"));
// const ServicesPage = lazy(() => import("./pages/NavbarPages/ServicesPage/ServicesPage"));
// const BlogPage = lazy(() => import("./pages/NavbarPages/BlogPage/BlogPage"));

// // ============================================================
// // ✅ OLD ROUTES → REDIRECT
// // ============================================================
// const RedirectCityAreaService = () => {
//   const { citySlug, areaSlug, serviceSlug } = useParams();
//   return <Navigate to={`/${serviceSlug}-treatment-in-${citySlug}-${areaSlug}`} replace />;
// };
// const RedirectCityArea = () => {
//   const { citySlug, areaSlug } = useParams();
//   return <Navigate to={`/physiotherapy-in-${citySlug}-${areaSlug}`} replace />;
// };
// const RedirectCityService = () => {
//   const { citySlug, serviceSlug } = useParams();
//   return <Navigate to={`/${serviceSlug}-treatment-in-${citySlug}`} replace />;
// };
// const RedirectCity = () => {
//   const { citySlug } = useParams();
//   return <Navigate to={`/physiotherapy-in-${citySlug}`} replace />;
// };

// // ✅ OLD /physiotherapists/:citySlug → NEW /physiotherapy-centre-in-:citySlug
// const RedirectPhysiotherapists = () => {
//   const { citySlug } = useParams();
//   return <Navigate to={`/physiotherapy-centre-in-${citySlug}`} replace />;
// };

// // ============================================================
// // ✅ SMART ROUTER COMPONENT
// // ============================================================
// const SmartRouter = () => {
//   const { fullSlug } = useParams();

//   // ✅ Check: physiotherapy-centre-in-{city}
//   const centrePrefix = "physiotherapy-centre-in-";
//   if (fullSlug.startsWith(centrePrefix)) {
//     const citySlug = fullSlug.slice(centrePrefix.length);
//     return <PhysiotherapistsNearYou citySlug={citySlug} />;
//   }

//   // Parse fullSlug for other routes
//   const inIndex = fullSlug.lastIndexOf("-in-");

//   if (inIndex === -1) {
//     return <AreaDetailPage />;
//   }

//   const afterIn = fullSlug.slice(inIndex + 4);
//   const beforeIn = fullSlug.slice(0, inIndex);

//   // City slugs from citiesData — sorted longest first
//   const knownCities = citiesData
//     .map((c) => c.slug)
//     .filter(Boolean)
//     .sort((a, b) => b.length - a.length);

//   let citySlug = null;
//   let areaSlug = null;

//   for (const city of knownCities) {
//     if (afterIn === city) {
//       citySlug = city;
//       areaSlug = null;
//       break;
//     } else if (afterIn.startsWith(city + "-")) {
//       citySlug = city;
//       areaSlug = afterIn.slice(city.length + 1);
//       break;
//     }
//   }

//   if (!citySlug) {
//     citySlug = afterIn;
//     areaSlug = null;
//   }

//   const serviceSlug =
//     beforeIn === "physiotherapy"
//       ? null
//       : beforeIn.endsWith("-treatment")
//       ? beforeIn.slice(0, -"-treatment".length)
//       : beforeIn;

//   // ✅ City only → CityOverviewPage
//   if (!serviceSlug && !areaSlug) {
//     return <CityOverviewPage citySlug={citySlug} />;
//   }

//   // ✅ Has area → AreaPhysiotherapyDetailPage
//   if (areaSlug) {
//     return (
//       <AreaPhysiotherapyDetailPage
//         key={fullSlug}
//         citySlug={citySlug}
//         areaSlug={areaSlug}
//         serviceSlug={serviceSlug}
//       />
//     );
//   }

//   // ✅ Service + City only → AreaDetailPage
//   return <AreaDetailPage />;
// };

// // ============================================================

// const App = () => {
//   return (
//     <>
//       <ScrollToTop />
//       <Suspense>
//         <Routes>
//           <Route element={<Layout />}>
//             <Route path="/" element={<MainPage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/services" element={<ServicesPage />} />
//             <Route path="/blogs" element={<BlogPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/terms" element={<TermsAndConditions />} />
//             <Route path="/privacy" element={<PrivacyPolicy />} />

//             <Route path="/service/:slug" element={<PhysiotherapyDetailPage />} />
//             <Route path="/physiotherapy/:slug" element={<PhysiotherapyDetailPage />} />
//             <Route path="/services/:slug" element={<PhysiotherapyDetailPage />} />

//             <Route path="/condition/:slug" element={<ConditionDetailPage />} />
//             <Route path="/conditions/:slug" element={<ConditionDetailPage />} />

//             <Route path="/cities" element={<CitySelectionPage />} />
//             <Route path="/blog/:slug" element={<BlogDetailPage />} />
//             <Route path="/therapists" element={<CertifiedTherapists />} />

//             {/* ✅ OLD URL → 301 Redirect to new SEO URL */}
//             <Route path="/physiotherapists/:citySlug" element={<RedirectPhysiotherapists />} />

//             {/* Old routes redirect */}
//             <Route path="/city/:citySlug/area/:areaSlug/:serviceSlug" element={<RedirectCityAreaService />} />
//             <Route path="/city/:citySlug/area/:areaSlug" element={<RedirectCityArea />} />
//             <Route path="/city/:citySlug/:serviceSlug" element={<RedirectCityService />} />
//             <Route path="/city/:citySlug" element={<RedirectCity />} />

//             {/* ✅ SINGLE CATCH-ALL — SmartRouter decides which component */}
//             <Route path="/:fullSlug" element={<SmartRouter />} />
//           </Route>

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
// ✅ OLD ROUTES → REDIRECT (updated to new area-city format)
// ============================================================
const RedirectCityAreaService = () => {
  const { citySlug, areaSlug, serviceSlug } = useParams();
  // Old: /city/delhi/area/janakpuri/knee-pain  →  New: /knee-pain-treatment-in-janakpuri-delhi
  return <Navigate to={`/${serviceSlug}-treatment-in-${areaSlug}-${citySlug}`} replace />;
};
const RedirectCityArea = () => {
  const { citySlug, areaSlug } = useParams();
  // Old: /city/delhi/area/janakpuri  →  New: /physiotherapy-in-janakpuri-delhi
  return <Navigate to={`/physiotherapy-in-${areaSlug}-${citySlug}`} replace />;
};
const RedirectCityService = () => {
  const { citySlug, serviceSlug } = useParams();
  return <Navigate to={`/${serviceSlug}-treatment-in-${citySlug}`} replace />;
};
const RedirectCity = () => {
  const { citySlug } = useParams();
  return <Navigate to={`/physiotherapy-in-${citySlug}`} replace />;
};

// ✅ OLD /physiotherapists/:citySlug → NEW /physiotherapy-centre-in-:citySlug
const RedirectPhysiotherapists = () => {
  const { citySlug } = useParams();
  return <Navigate to={`/physiotherapy-centre-in-${citySlug}`} replace />;
};

// ============================================================
// ✅ SMART ROUTER COMPONENT
//
// NEW URL format:  area PEHLE, city BAAD MEIN
//
// URL Examples:
//   /physiotherapy-in-kaushambi-ghaziabad       → AreaPhysiotherapyDetailPage
//   /knee-pain-treatment-in-janakpuri-delhi      → AreaPhysiotherapyDetailPage
//   /knee-pain-treatment-in-delhi                → AreaDetailPage
//   /physiotherapy-in-delhi                      → CityOverviewPage
//   /physiotherapy-centre-in-ghaziabad           → PhysiotherapistsNearYou
// ============================================================
const SmartRouter = () => {
  const { fullSlug } = useParams();

  // ✅ Check: physiotherapy-centre-in-{city}
  const centrePrefix = "physiotherapy-centre-in-";
  if (fullSlug.startsWith(centrePrefix)) {
    const citySlug = fullSlug.slice(centrePrefix.length);
    return <PhysiotherapistsNearYou citySlug={citySlug} />;
  }

  // Parse fullSlug
  const inIndex = fullSlug.lastIndexOf("-in-");

  if (inIndex === -1) {
    return <AreaDetailPage />;
  }

  const afterIn = fullSlug.slice(inIndex + 4); // e.g. "kaushambi-ghaziabad"
  const beforeIn = fullSlug.slice(0, inIndex); // e.g. "physiotherapy" or "knee-pain"

  // City slugs — sorted longest first to avoid partial matches
  const knownCities = citiesData
    .map((c) => c.slug)
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  let citySlug = null;
  let areaSlug = null;

  // ✅ NEW FORMAT: {area}-{city}  → city is at the END
  for (const city of knownCities) {
    if (afterIn === city) {
      // Only city, no area → e.g. "physiotherapy-in-delhi"
      citySlug = city;
      areaSlug = null;
      break;
    } else if (afterIn.endsWith("-" + city)) {
      // area-city → e.g. "kaushambi-ghaziabad"
      citySlug = city;
      areaSlug = afterIn.slice(0, afterIn.length - city.length - 1); // extract "kaushambi"
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

            {/* ✅ OLD /physiotherapists/:citySlug → redirect to new SEO URL */}
            <Route path="/physiotherapists/:citySlug" element={<RedirectPhysiotherapists />} />

            {/* Old city/area routes → redirect to new format */}
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