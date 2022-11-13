import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";

const App = () => {
  return (
    <div className="app parallax-parent">
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
