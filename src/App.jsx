import { useState, useEffect, useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

import Home from "./sections/Home";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resources from "./pages/Resources";
import Sustainability from "./pages/Sustainability";

import useSmoothScroll from "./hooks/useSmoothScroll";

/* ---------------------------------- */
/* Scroll To Top On Route Change     */
/* ---------------------------------- */
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* ---------------------------------- */
/* Main App Component                */
/* ---------------------------------- */
function App() {
  const [loading, setLoading] = useState(true);

  // Lenis smooth scroll
  useSmoothScroll();

  // Loader timer
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/sustainability" element={<Sustainability />} />
      </Routes>
    </Router>
  );
}

export default App;