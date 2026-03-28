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
// // ✅ OLD ROUTES → REDIRECT (updated to new area-city format)
// // ============================================================
// const RedirectCityAreaService = () => {
//   const { citySlug, areaSlug, serviceSlug } = useParams();
//   // Old: /city/delhi/area/janakpuri/knee-pain  →  New: /knee-pain-treatment-in-janakpuri-delhi
//   return <Navigate to={`/${serviceSlug}-treatment-in-${areaSlug}-${citySlug}`} replace />;
// };
// const RedirectCityArea = () => {
//   const { citySlug, areaSlug } = useParams();
//   // Old: /city/delhi/area/janakpuri  →  New: /physiotherapy-in-janakpuri-delhi
//   return <Navigate to={`/physiotherapy-in-${areaSlug}-${citySlug}`} replace />;
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
// //
// // NEW URL format:  area PEHLE, city BAAD MEIN
// //
// // URL Examples:
// //   /physiotherapy-in-kaushambi-ghaziabad       → AreaPhysiotherapyDetailPage
// //   /knee-pain-treatment-in-janakpuri-delhi      → AreaPhysiotherapyDetailPage
// //   /knee-pain-treatment-in-delhi                → AreaDetailPage
// //   /physiotherapy-in-delhi                      → CityOverviewPage
// //   /physiotherapy-centre-in-ghaziabad           → PhysiotherapistsNearYou
// // ============================================================

// const NotFound = () => {
//   return (
//     <div style={{ padding: "100px", textAlign: "center" }}>
//       <h1>404 - Page Not Found</h1>
//     </div>
//   );
// };

// const toSlug = (str) =>
//   str
//     .toLowerCase()
//     .replace(/[^a-z0-9\s-]/g, "")
//     .replace(/\s+/g, "-");
// // const SmartRouter = () => {
// //   const { fullSlug } = useParams();

// //   // ✅ Check: physiotherapy-centre-in-{city}
// //   const centrePrefix = "physiotherapy-centre-in-";
// //   if (fullSlug.startsWith(centrePrefix)) {
// //     const citySlug = fullSlug.slice(centrePrefix.length);
// //     return <PhysiotherapistsNearYou citySlug={citySlug} />;
// //   }

// //   // Parse fullSlug
// //   const inIndex = fullSlug.lastIndexOf("-in-");

// //   if (inIndex === -1) {
// //     return <AreaDetailPage />;
// //   }

// //   const afterIn = fullSlug.slice(inIndex + 4); // e.g. "kaushambi-ghaziabad"
// //   const beforeIn = fullSlug.slice(0, inIndex); // e.g. "physiotherapy" or "knee-pain"

// //   // City slugs — sorted longest first to avoid partial matches
// //   const knownCities = citiesData
// //     .map((c) => c.slug)
// //     .filter(Boolean)
// //     .sort((a, b) => b.length - a.length);

// //   let citySlug = null;
// //   let areaSlug = null;

// //   // ✅ NEW FORMAT: {area}-{city}  → city is at the END
// //   for (const city of knownCities) {
// //     if (afterIn === city) {
// //       // Only city, no area → e.g. "physiotherapy-in-delhi"
// //       citySlug = city;
// //       areaSlug = null;
// //       break;
// //     } else if (afterIn.endsWith("-" + city)) {
// //       // area-city → e.g. "kaushambi-ghaziabad"
// //       citySlug = city;
// //       areaSlug = afterIn.slice(0, afterIn.length - city.length - 1); // extract "kaushambi"
// //       break;
// //     }
// //   }

// //   if (!citySlug) {
// //     citySlug = afterIn;
// //     areaSlug = null;
// //   }

// //   const serviceSlug =
// //     beforeIn === "physiotherapy"
// //       ? null
// //       : beforeIn.endsWith("-treatment")
// //       ? beforeIn.slice(0, -"-treatment".length)
// //       : beforeIn;

// //   // ✅ City only → CityOverviewPage
// //   if (!serviceSlug && !areaSlug) {
// //     return <CityOverviewPage citySlug={citySlug} />;
// //   }

// //   // ✅ Has area → AreaPhysiotherapyDetailPage
// //   if (areaSlug) {
// //     return (
// //       <AreaPhysiotherapyDetailPage
// //         key={fullSlug}
// //         citySlug={citySlug}
// //         areaSlug={areaSlug}
// //         serviceSlug={serviceSlug}
// //       />
// //     );
// //   }

// //   // ✅ Service + City only → AreaDetailPage
// //   return <AreaDetailPage />;
// // };

// // ============================================================
// const SmartRouter = () => {
//   const { fullSlug } = useParams();

//   const knownCities = citiesData
//     .map((c) => c.slug)
//     .filter(Boolean)
//     .sort((a, b) => b.length - a.length);

//   // ✅ physiotherapy-centre-in-city
//   const centrePrefix = "physiotherapy-centre-in-";
//   if (fullSlug.startsWith(centrePrefix)) {
//     const citySlug = fullSlug.replace(centrePrefix, "");

//     if (!knownCities.includes(citySlug)) {
//       return <NotFound />;
//     }

//     return <PhysiotherapistsNearYou citySlug={citySlug} />;
//   }

//   const inIndex = fullSlug.lastIndexOf("-in-");

//   // ❌ invalid slug
//   if (inIndex === -1) {
//     return <NotFound />;
//   }

//   const beforeIn = fullSlug.slice(0, inIndex);
//   const afterIn = fullSlug.slice(inIndex + 4);

//   let citySlug = null;
//   let areaSlug = null;

// for (const city of knownCities) {

//   // ✅ case 2: city at start (FIRST CHECK)
//   if (afterIn.startsWith(city + "-")) {
//     citySlug = city;
//     areaSlug = afterIn.slice(city.length + 1);
//     break;
//   }

//   // ✅ case 1: city at end
//   if (afterIn.endsWith("-" + city)) {
//     citySlug = city;
//     areaSlug = afterIn.slice(0, afterIn.length - city.length - 1);
//     break;
//   }

//   // ✅ only city
//   if (afterIn === city) {
//     citySlug = city;
//     areaSlug = null;
//     break;
//   }
// }

//   // ❌ INVALID CITY → 404 (MAIN FIX)
//   // if (!citySlug) {
//   //   return <NotFound />;
//   // }

//   if (!citySlug || !knownCities.includes(citySlug)) {
//   return <NotFound />;
// }

// // ✅ area validation
// const cityData = citiesData.find((c) => c.slug === citySlug);

// const validAreaSlugs =
//   cityData?.areas.map((area) => toSlug(area)) || [];

// if (areaSlug && !validAreaSlugs.includes(areaSlug)) {
//   return <NotFound />;
// }

//   const serviceSlug =
//     beforeIn === "physiotherapy"
//       ? null
//       : beforeIn.endsWith("-treatment")
//       ? beforeIn.replace("-treatment", "")
//       : beforeIn;

//   // ✅ city only
//   if (!serviceSlug && !areaSlug) {
//     return <CityOverviewPage citySlug={citySlug} />;
//   }

//   // ✅ area + city
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

//   // ✅ service + city
//   return <AreaDetailPage />;
// };
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

//             {/* ✅ OLD /physiotherapists/:citySlug → redirect to new SEO URL */}
//             <Route path="/physiotherapists/:citySlug" element={<RedirectPhysiotherapists />} />

//             {/* Old city/area routes → redirect to new format */}
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

//           <Route path="*" element={<NotFound />} />
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
import AshishServiceDetail from "./components/SharmaOrthopedic /ServiceDetailPage/AshishServiceDetail";
import ParthMedicareServiceDetail from "./pages/DetailPage/ClinicDetailPage/ParthMedicareServiceDetail/ParthMedicareServiceDetail";

import { citiesData } from "./data/citiesData";

// Lazy pages
const MainPage = lazy(() => import("./pages/MainPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const AboutPage = lazy(() => import("./pages/NavbarPages/AboutPage/AboutPage"));
const ServicesPage = lazy(() => import("./pages/NavbarPages/ServicesPage/ServicesPage"));
const BlogPage = lazy(() => import("./pages/NavbarPages/BlogPage/BlogPage"));

// =========================
// 🔴 NOT FOUND
// =========================
const NotFound = () => (
  <div style={{ padding: "100px", textAlign: "center" }}>
    <h1>404 - Page Not Found</h1>
  </div>
);

// =========================
// 🔧 HELPER
// =========================
const toSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

// =========================
// 🔁 REDIRECTS
// =========================
const RedirectCityAreaService = () => {
  const { citySlug, areaSlug, serviceSlug } = useParams();
  return <Navigate to={`/${serviceSlug}-treatment-in-${areaSlug}-${citySlug}`} replace />;
};

const RedirectCityArea = () => {
  const { citySlug, areaSlug } = useParams();
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

const RedirectPhysiotherapists = () => {
  const { citySlug } = useParams();
  return <Navigate to={`/physiotherapy-centre-in-${citySlug}`} replace />;
};

// =========================
// 🧠 SMART ROUTER
// =========================
const SmartRouter = () => {
  const { fullSlug } = useParams();

  const knownCities = citiesData.map((c) => c.slug.toLowerCase());

  // ✅ physiotherapy-centre-in-city
  const centrePrefix = "physiotherapy-centre-in-";
  if (fullSlug.startsWith(centrePrefix)) {
    const citySlug = fullSlug.replace(centrePrefix, "").toLowerCase();

    if (!knownCities.includes(citySlug)) return <NotFound />;

    return <PhysiotherapistsNearYou citySlug={citySlug} />;
  }

  const inIndex = fullSlug.lastIndexOf("-in-");
  if (inIndex === -1) return <NotFound />;

  const beforeIn = fullSlug.slice(0, inIndex);
  const afterIn = fullSlug.slice(inIndex + 4).toLowerCase();

  let citySlug = null;
  let areaSlug = null;

  // ✅ detect city & area
  for (const city of knownCities) {
    // city-first
    if (afterIn.startsWith(city + "-")) {
      citySlug = city;
      areaSlug = afterIn.slice(city.length + 1);
      break;
    }

    // area-first
    if (afterIn.endsWith("-" + city)) {
      citySlug = city;
      areaSlug = afterIn.slice(0, afterIn.length - city.length - 1);
      break;
    }

    // only city
    if (afterIn === city) {
      citySlug = city;
      break;
    }
  }

  // ❌ invalid city
  if (!citySlug || !knownCities.includes(citySlug)) {
    return <NotFound />;
  }

  // ✅ area validation
  const cityData = citiesData.find((c) => c.slug === citySlug);

  const validAreaSlugs =
    cityData?.areas.map((area) => toSlug(area)) || [];

  if (areaSlug) {
    const cleanArea = toSlug(areaSlug);
    if (!validAreaSlugs.includes(cleanArea)) {
      return <NotFound />;
    }
    areaSlug = cleanArea;
  }

  // ✅ service
  const serviceSlug =
    beforeIn === "physiotherapy"
      ? null
      : beforeIn.endsWith("-treatment")
      ? beforeIn.replace("-treatment", "")
      : beforeIn;

  // city page
  if (!serviceSlug && !areaSlug) {
    return <CityOverviewPage citySlug={citySlug} />;
  }

  // area page
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

  return <AreaDetailPage />;
};

// =========================
// 🚀 APP
// =========================
const App = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
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

            <Route path="/physiotherapists/:citySlug" element={<RedirectPhysiotherapists />} />

            <Route path="/city/:citySlug/area/:areaSlug/:serviceSlug" element={<RedirectCityAreaService />} />
            <Route path="/city/:citySlug/area/:areaSlug" element={<RedirectCityArea />} />
            <Route path="/city/:citySlug/:serviceSlug" element={<RedirectCityService />} />
            <Route path="/city/:citySlug" element={<RedirectCity />} />

            <Route path="/:fullSlug" element={<SmartRouter />} />
          </Route>

          <Route path="/clinic/:slug" element={<ClinicDetailPage />} />
          <Route path="/location/:slug" element={<LocationDetailPage />} />
          <Route path="/clinic/:clinicSlug/service/:serviceSlug" element={<ServiceClinicDetailPage />} />
          <Route path="/clinic/Ashish-physiotherapy-centre/service/:serviceSlug" element={<AshishServiceDetail />} />
          <Route path="/clinic/parth-medicare/service/:serviceSlug" element={<ParthMedicareServiceDetail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
