import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"; // <-- Imported our dedicated component

import Home from "./pages/Home";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Materials from "./pages/Materials";
import Sustainability from "./pages/Sustainability";
import OurServices from "./pages/OurServices";
import Blogs from "./pages/Blogs";
import Faq from "./pages/Faq";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import useSmoothScroll from "./hooks/useSmoothScroll";

/* ---------------- Standard Routes ---------------- */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/our-services" element={<OurServices />} />
      <Route path="/materials" element={<Materials />} />
      <Route path="/sustainability" element={<Sustainability />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

/* ---------------- Main App ---------------- */
function App() {
  const [loading, setLoading] = useState(true);

  useSmoothScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <ScrollToTop /> {/* Handles resetting scroll position on every page change */}
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;