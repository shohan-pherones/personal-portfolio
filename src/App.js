import About from "./components/About";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Bio />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default App;
