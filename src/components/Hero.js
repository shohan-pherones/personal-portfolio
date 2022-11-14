import { useEffect, useRef } from "react";
import hoverEffect from "hover-effect";
import {
  useGsapUpward,
  useGsapSidewalkRight,
  useGsapSidewalkLeft,
} from "../lib/gsap";
import cloud from "../assets/images/cloud.png";
import heroImage1 from "../assets/images/hero-image-1.jpg";
import heroImage2 from "../assets/images/hero-image-2.jpg";

const Hero = () => {
  const heroImageRef = useRef(null);
  const heroHeadline1 = useRef(null);
  const heroHeadline2 = useRef(null);

  useGsapUpward(heroImageRef);
  useGsapSidewalkRight(heroHeadline1);
  useGsapSidewalkLeft(heroHeadline2);

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
      <h1 className="hero-headline-1" ref={heroHeadline1}>
        Designer
      </h1>
      <h1 className="hero-headline-2" ref={heroHeadline2}>
        Developer
      </h1>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
