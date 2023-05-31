import { useRef } from "react";
import { useSocialBoxReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "Facebook",
    url: "https://www.facebook.com/spectra.shohan",
  },
  {
    id: 2,
    title: "Instagram",
    url: "https://www.instagram.com/spectra.shohan",
  },
  {
    id: 3,
    title: "Twitter",
    url: "https://twitter.com/elysianshohan",
  },
  {
    id: 4,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/shohan-pherones",
  },
  {
    id: 5,
    title: "GitHub",
    url: "https://github.com/shohan-pherones",
  },
  {
    id: 6,
    title: "Leetcode",
    url: "https://leetcode.com/spectrashohan",
  },
];

const Socials = () => {
  const socialBoxRef = useRef(null);

  useSocialBoxReveal(socialBoxRef, 2.5);

  return (
    <div
      className="socials flex gap-5 uppercase text-lg fixed left-10 top-[75%] origin-left -rotate-90 text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50"
      ref={socialBoxRef}
    >
      {data.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 duration-500"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
