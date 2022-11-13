import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const thankyouText = "Thanks for visiting my portfolio";

  return (
    <div className="app">
      <div className="noise"></div>
      <Navbar />
      <Hero />
      <Socials />
      <Bio />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Navbar text={thankyouText} />
      <Footer />
    </div>
  );
};

export default App;
