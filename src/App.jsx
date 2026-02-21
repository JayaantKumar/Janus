import { useState, useEffect, useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

import Home from "./sections/Home";
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

/* ---------------- Animated Routes ---------------- */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/sustainability" element={<Sustainability />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
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