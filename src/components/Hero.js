import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useHeadlineReveal, useImageScaler } from "../hooks/gsap";

const data = {
  img1: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1674222467/Personal%20Portfolio/hero-1_jcy0jj.jpg",
  img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1674222467/Personal%20Portfolio/hero-2_sk0wmq.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  const headline1Ref = useRef(null);
  const headline2Ref = useRef(null);

  const headlines = [headline1Ref, headline2Ref];

  useHoverEffect(heroImageRef, data.img1, data.img2);
  useHeadlineReveal(headlines, 1.5);
  useImageScaler(heroImageRef, 0.5);

  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-image" ref={heroImageRef}></div>
      <div className="shutter shutter-l overflow-hidden">
        <h1 className="hero-headline-1" ref={headline1Ref}>
          MERN Stack
        </h1>
      </div>
      <div className="shutter shutter-r overflow-hidden">
        <h1 className="hero-headline-2" ref={headline2Ref}>
          Developer
        </h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
