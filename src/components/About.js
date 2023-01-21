import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import {
  useSectionTitleReveal,
  useProjectLeftRightReaveal,
} from "../hooks/gsap";

const data = {
  img1: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1674222467/Personal%20Portfolio/about-2_ps72st.jpg",
  img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1674222467/Personal%20Portfolio/about-1_zymowl.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);
  const aboutTitleRef = useRef(null);

  const aboutSides = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useSectionTitleReveal(aboutTitleRef);
  useProjectLeftRightReaveal(aboutSides);

  return (
    <div className="about container mx-auto mt-40" id="about">
      <div className="overflow-hidden">
        <h2 className="section-title" ref={aboutTitleRef}>
          About Me
        </h2>
      </div>
      <div className="about-wrapper mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right" ref={aboutRightRef}>
          <p>
            I am a MERN stack developer with a strong focus on React, Redux, and
            Tailwind CSS. I specialize in building responsive and user-friendly
            web applications that provide a seamless experience for the
            end-user. With my in-depth knowledge of the latest web development
            technologies and frameworks, I am able to create innovative
            solutions that meet the needs of my clients. Whether it's a simple
            website or a complex web application, I am committed to delivering
            high-quality work that exceeds expectations.
          </p>
          <p className="mt-10">
            In addition to my expertise in the MERN stack, I also have a strong
            background in UI design and animation. I am skilled in using the
            GreenSock Animation Platform (GSAP) library to create dynamic and
            engaging user interfaces. I have experience in creating smooth
            animations and transitions that enhance the overall user experience.
            I am also well-versed in using other design tools such as Adobe XD
            and Figma to create wireframes and mockups. My ability to combine my
            technical skills with my artistic eye allows me to create visually
            appealing and functional web applications that stand out in the
            market.
          </p>
          <a
            href="https://docs.google.com/document/d/1heAA15qIMAcIEHGPKMR1ZsyvuFdb7oG0MXFzkz46DQU/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block py-8 px-14 border uppercase rounded-full border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
