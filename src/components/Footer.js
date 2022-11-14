import { useRef } from "react";
import { useGsapDropping } from "../lib/gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useGsapDropping(footerRef);

  return (
    <footer className="my-40 text-center text-white/50">
      <p ref={footerRef}>
        &copy; {new Date().getFullYear()} Md. Shohanur Rahman. Crafted by yours
        truly
      </p>
    </footer>
  );
};

export default Footer;
