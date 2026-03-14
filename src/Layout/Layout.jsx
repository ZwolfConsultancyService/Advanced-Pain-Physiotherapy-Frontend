// import React from "react";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";

// const Layout = ({ children }) => {
//   return (
//     <div>
//     <Navbar />

//       <main className="w-full flex-1">
//     {children}
//   </main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TawkChat from "../components/Tawkchat/Tawkchat";
import PhysioChat from "../components/PhysioChat/PhysioChat";

const Layout = () => {
  return (
    <>
      <style>{`
        /* Force remove gap between navbar and content on mobile/tablet */
        @media (max-width: 1024px) {
          main {
            margin-top: -1px !important;
          }
        }
      `}</style>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="w-full flex-1" style={{ margin: 0, padding: 0 }}>
          <Outlet /> {/* children ki jagah Outlet use karo */}
        </main>
        <PhysioChat />
        <TawkChat />

        <Footer />
      </div>
    </>
  );
};

export default Layout;
