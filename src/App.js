import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <div className="noise"></div>
      <Navbar />
      <Hero />
      <Bio />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
