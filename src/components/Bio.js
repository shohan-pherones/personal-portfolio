import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);

  return (
    <div className="bio mt-20 container mx-auto overflow-hidden">
      <p ref={bioRef}>
        Hi, I'm Shohan - a passionate MERN stack developer with a love for
        modern, scalable web applications. With expertise in MongoDB, Express,
        React, and Node.js, I thrive in collaborative environments and enjoy
        tackling new challenges. When I'm not coding, I enjoy outdoor activities
        and engaging in my favorite hobbies.
      </p>
    </div>
  );
};

export default Bio;
