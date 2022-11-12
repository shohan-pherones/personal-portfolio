import { useEffect, useRef } from "react";
import hoverEffect from "hover-effect";
import cloud from "../assets/images/cloud.png";
import heroImage1 from "../assets/images/hero-image-1.jpg";
import heroImage2 from "../assets/images/hero-image-2.jpg";

const Hero = () => {
  const heroImageRef = useRef();

  useEffect(() => {
    new hoverEffect({
      parent: heroImageRef.current,
      intensity: 0.3,
      image1: heroImage1,
      image2: heroImage2,
      displacementImage: cloud,
    });
  }, []);

  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center">
      <div className="hero-image" ref={heroImageRef}></div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
