import { HashLink } from "react-router-hash-link";

const Navbar = ({ navInFooter }) => {
  return (
    <nav
      className={`flex justify-between container mx-auto ${
        navInFooter ? "mt-40" : "mt-20"
      } uppercase`}
    >
      <div className="logo">
        <HashLink smooth to="#home" className="link">
          {navInFooter ? "Go to top" : "Sunerah Binte Ayesha"}
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li>
          <HashLink smooth to="#home" className="link">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects" className="link">
            My Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills" className="link">
            My Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className="link">
            About Me
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact" className="link">
            Contact Me
          </HashLink>
        </li>
        <li>
          <a
            href="https://www.google.com"
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
