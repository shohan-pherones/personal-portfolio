import { useRef } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const logoRef = useRef(null);

  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const li4 = useRef(null);
  const li5 = useRef(null);
  const li6 = useRef(null);

  const liArr = [li1, li2, li3, li4, li5, li6];

  return (
    <nav className="flex justify-between container mx-auto mt-20 uppercase">
      <div className="logo">
        <HashLink smooth to="#home" ref={logoRef} className="link">
          Md. Shohanur Rahman
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li ref={li1}>
          <HashLink smooth to="#home" className="link">
            Home
          </HashLink>
        </li>
        <li ref={li2}>
          <HashLink smooth to="#projects" className="link">
            My Projects
          </HashLink>
        </li>
        <li ref={li3}>
          <HashLink smooth to="#skills" className="link">
            My Skills
          </HashLink>
        </li>
        <li ref={li4}>
          <HashLink smooth to="#about" className="link">
            About Me
          </HashLink>
        </li>
        <li ref={li5}>
          <HashLink smooth to="#contact" className="link">
            Contact Me
          </HashLink>
        </li>
        <li ref={li6}>
          <a
            href="https://docs.google.com/document/d/1heAA15qIMAcIEHGPKMR1ZsyvuFdb7oG0MXFzkz46DQU/edit?usp=share_link"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            View My Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
