import { useEffect } from "react";
import hoverEffect from "hover-effect";
import cloud from "../assets/images/cloud.png";

export const useHoverEffect = (el, img1, img2) => {
  useEffect(() => {
    new hoverEffect({
      parent: el.current,
      intensity: 0.3,
      image1: img1,
      image2: img2,
      displacementImage: cloud,
    });
  }, [el, img1, img2]);
};
