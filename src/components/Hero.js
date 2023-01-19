import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://i.ibb.co/9rTkkQ5/hero-image-1.jpg",
  img2: "https://i.ibb.co/CVbBPB9/hero-image-2.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);

  useHoverEffect(heroImageRef, data.img1, data.img2);

  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center">
      <div className="hero-image" ref={heroImageRef}></div>
      <h1 className="hero-headline-1">MERN Stack</h1>
      <h1 className="hero-headline-2">Developer</h1>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
