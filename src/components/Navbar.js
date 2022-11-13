import { Link } from "react-router-dom";

const Navbar = ({ text }) => {
  return (
    <nav className="flex justify-between container mx-auto mt-20 uppercase">
      <div className="logo">
        <h2>{text ? text : "Md. Shohanur Rahman"}</h2>
      </div>
      <ul className="links flex flex-col gap-3">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <a href="#projects" className="link">
            My Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="link">
            My Skills
          </a>
        </li>
        <li>
          <Link to="blogs" className="link">
            Read Blogs
          </Link>
        </li>
        <li>
          <a href="#about" className="link">
            About Me
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1uYTvxmeNsx7CpkKPszWqjAMfJgt2bs6HSyzBVK06mZU/edit?usp=sharing"
            target="_blank"
            className="link"
          >
            My Resume
          </a>
        </li>
        <li>
          <a href="#contact" className="link">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
