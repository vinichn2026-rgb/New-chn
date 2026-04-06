import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top of window on every route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Using instant to avoid any weird lag during page loads
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
