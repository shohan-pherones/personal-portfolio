import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useFooterReveal } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useFooterReveal(footerRef);

  return (
    <footer className="my-40 text-center text-white/50 overflow-hidden">
      <p ref={footerRef}>
        &copy; {new Date().getFullYear()}{" "}
        <HashLink
          smooth
          to="#home"
          className="link hover:text-white duration-500"
        >
          Md. Shohanur Rahman
        </HashLink>
        . Crafted by yours truly
      </p>
    </footer>
  );
};

export default Footer;
