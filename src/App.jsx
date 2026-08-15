import { useState, useEffect, useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Removed Framer Motion completely from imports

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resources from "./pages/Resources";
import Sustainability from "./pages/Sustainability";

import useSmoothScroll from "./hooks/useSmoothScroll";

/* ---------------- Scroll To Top ---------------- */
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* ---------------- Standard Routes (No Framer Motion) ---------------- */
function AnimatedRoutes() {
  const location = useLocation();

  // We removed <AnimatePresence> and <motion.div> here. 
  // It is now a clean, standard React Router setup.
  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/sustainability" element={<Sustainability />} />
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
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;