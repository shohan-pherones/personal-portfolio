import About from "./components/About";
import Bio from "./components/Bio";
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
    </div>
  );
};

export default App;
