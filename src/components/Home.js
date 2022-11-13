import Hero from "./Hero";
import Bio from "./Bio";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

const Home = () => {
  const thankyouText = "Thanks for visiting my portfolio";

  return (
    <>
      <Hero />
      <Bio />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Navbar text={thankyouText} />
    </>
  );
};

export default Home;
