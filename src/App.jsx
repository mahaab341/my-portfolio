import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import JourneyJunctionDetail from "./pages/JourneyJunctionDetail.jsx";

const BG_COLOR = "#000000";

function MainLayout({ children }) {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: BG_COLOR, minHeight: "100vh" }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Detail Page */}
        <Route path="/projects/journey-junction" element={<JourneyJunctionDetail />} />
        
        {/* Main Layout for all portfolio sections */}
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                {/* Koi bhi route ho (/, /about, /skills), hamesha Home render hoga */}
                <Route path="/*" element={<Home />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}