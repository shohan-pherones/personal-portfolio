import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapStagger, useGsapDropping } from "../lib/gsap";

const Navbar = ({ text }) => {
  const logoRef = useRef(null);

  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const li4 = useRef(null);
  const li5 = useRef(null);
  const li6 = useRef(null);
  const li7 = useRef(null);

  const liArr = [li1, li2, li3, li4, li5, li6, li7];

  useGsapStagger(liArr);
  useGsapDropping(logoRef);

  return (
    <nav className="flex justify-between container mx-auto mt-20 uppercase">
      <div className="logo">
        <h2 ref={logoRef}>{text ? text : "Md. Shohanur Rahman"}</h2>
      </div>
      <ul className="links flex flex-col gap-3">
        <li ref={li1}>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li ref={li2}>
          <Link to="projects" className="link">
            My Projects
          </Link>
        </li>
        <li ref={li3}>
          <Link to="skills" className="link">
            My Skills
          </Link>
        </li>
        <li ref={li4}>
          <Link to="blogs" className="link">
            Read Blogs
          </Link>
        </li>
        <li ref={li5}>
          <Link to="about" className="link">
            About Me
          </Link>
        </li>
        <li ref={li6}>
          <a
            href="https://docs.google.com/document/d/1uYTvxmeNsx7CpkKPszWqjAMfJgt2bs6HSyzBVK06mZU/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            My Resume
          </a>
        </li>
        <li ref={li7}>
          <Link to="contact" className="link">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
