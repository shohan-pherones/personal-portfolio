import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useCustomCursor } from "./hooks/useCustomCursor";

const App = () => {
  let innerCursor = useRef(null);
  let outerCursor = useRef(null);

  // Smooth scrolling
  useSmoothScroll();

  // Custom cursor
  useCustomCursor(innerCursor, outerCursor);

  return (
    <div className="app">
      <div className="noise"></div>
      <CustomCursor innerCursor={innerCursor} outerCursor={outerCursor} />
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
