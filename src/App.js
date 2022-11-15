import { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Successful from "./components/Successful";
import Failed from "./components/Failed";

const App = () => {
  // Smooth scrolling
  const lenis = new Lenis({
    duration: 1.3,
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

  // Custom cursor
  let innerCursor = useRef(null);
  let outerCursor = useRef(null);

  function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.current.style.left = `${x}px`;
    innerCursor.current.style.top = `${y}px`;
    outerCursor.current.style.left = `${x}px`;
    outerCursor.current.style.top = `${y}px`;
  }

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="app">
      <div className="noise"></div>
      <CustomCursor innerCursor={innerCursor} outerCursor={outerCursor} />
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="successful" element={<Successful />} />
        <Route path="failed" element={<Failed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
