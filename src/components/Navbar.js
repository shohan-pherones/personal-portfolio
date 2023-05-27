import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useLinkRaster } from "../hooks/gsap";

const Navbar = ({ navInFooter }) => {
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);
  const link5Ref = useRef(null);
  const link6Ref = useRef(null);
  const link7Ref = useRef(null);

  const links = [
    link1Ref,
    link2Ref,
    link3Ref,
    link4Ref,
    link5Ref,
    link6Ref,
    link7Ref,
  ];

  useLinkRaster(links, 2);

  return (
    <nav
      className={`flex justify-between container mx-auto ${
        navInFooter ? "mt-40" : "mt-20"
      } uppercase`}
    >
      <div className="logo">
        <HashLink smooth to="#home" className="link" ref={link1Ref}>
          {navInFooter ? "Go to top" : "Md. Shohanur Rahman"}
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li>
          <HashLink smooth to="#home" className="link" ref={link2Ref}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects" className="link" ref={link3Ref}>
            My Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills" className="link" ref={link4Ref}>
            My Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className="link" ref={link5Ref}>
            About Me
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact" className="link" ref={link6Ref}>
            Contact Me
          </HashLink>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1SWpuImu9yj-z4j9zI_7FrdVyYbhMBy8NdW_voI7a5V4/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="link"
            ref={link7Ref}
          >
            View My Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
