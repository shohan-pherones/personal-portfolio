import { useRef } from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const footerRef = useRef(null);

  return (
    <footer className="my-40 text-center text-white/50">
      <p ref={footerRef}>
        &copy; {new Date().getFullYear()}{" "}
        <HashLink smooth to="#home" className="link">
          Md. Shohanur Rahman
        </HashLink>
        . Crafted by yours truly
      </p>
    </footer>
  );
};

export default Footer;
