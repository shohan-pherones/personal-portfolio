import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useCustomCursor } from "./hooks/useCustomCursor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  let innerCursor = useRef(null);
  let outerCursor = useRef(null);

  // smooth scrolling
  useSmoothScroll();

  // custom cursor
  useCustomCursor(innerCursor, outerCursor);

  return (
    <div className="app">
      <ToastContainer />
      <div className="noise"></div>
      <CustomCursor innerCursor={innerCursor} outerCursor={outerCursor} />
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Navbar navInFooter />
      <Footer />
    </div>
  );
};

export default App;
