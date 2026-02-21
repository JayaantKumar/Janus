import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Home from "./sections/Home";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  const [loading, setLoading] = useState(true);

  useSmoothScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && <Home />}
    </>
  );
}

export default App;