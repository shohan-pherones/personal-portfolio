import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";

const App = () => {
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    smooth: true,
  });

  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="app">
      <div className="noise"></div>
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
