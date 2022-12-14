import { useRef } from "react";
import { useGsapDropping } from "../lib/gsap";

const Bio = () => {
  const bioRef = useRef(null);
  useGsapDropping(bioRef);

  return (
    <div className="bio mt-20 container mx-auto">
      <p ref={bioRef}>
        Hi, I'm Md. Shohanur Rahman, and I'm your friendly neighbourhood
        developer. Currently, I'm focused on building unique and interactive web
        applications.
      </p>
    </div>
  );
};

export default Bio;
