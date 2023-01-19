import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://images.pexels.com/photos/7736764/pexels-photo-7736764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  img2: "https://images.pexels.com/photos/3799361/pexels-photo-3799361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
