import Hero from "./Hero";
import Bio from "./Bio";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Bio />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Navbar />
    </div>
  );
};

export default Home;
