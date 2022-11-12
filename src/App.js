import Bio from "./components/Bio";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Bio />
      <Projects />
    </div>
  );
};

export default App;
