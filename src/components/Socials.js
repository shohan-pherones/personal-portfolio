import { useRef } from "react";
import { useGsapStagger } from "../lib/gsap";

const Socials = () => {
  const social1 = useRef(null);
  const social2 = useRef(null);
  const social3 = useRef(null);
  const social4 = useRef(null);
  const social5 = useRef(null);

  const socialArr = [social1, social2, social3, social4, social5];

  useGsapStagger(socialArr, false);

  return (
    <div className="socials flex gap-5 uppercase text-sm fixed left-10 top-[75%] origin-left -rotate-90 text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50">
      <a
        ref={social1}
        href="https://www.facebook.com/spectra.shohan"
        target="_blank"
        className="hover:text-cyan-400 duration-500"
      >
        Facebook
      </a>
      <a
        ref={social2}
        href="https://www.instagram.com/spectra.shohan"
        target="_blank"
        className="hover:text-cyan-400 duration-500"
      >
        Instagram
      </a>
      <a
        ref={social3}
        href="https://twitter.com/elysianshohan"
        target="_blank"
        className="hover:text-cyan-400 duration-500"
      >
        Twitter
      </a>
      <a
        ref={social4}
        href="https://www.linkedin.com/in/shohan-pherones"
        target="_blank"
        className="hover:text-cyan-400 duration-500"
      >
        LinkedIn
      </a>
      <a
        ref={social5}
        href="https://github.com/shohan-pherones"
        target="_blank"
        className="hover:text-cyan-400 duration-500"
      >
        GitHub
      </a>
    </div>
  );
};

export default Socials;
