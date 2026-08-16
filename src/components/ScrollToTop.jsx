import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scrolls to the top-left corner whenever the URL pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "smooth" if you want a smooth scroll animation instead
    });
  }, [pathname]);

  return null;
}