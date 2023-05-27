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
            As a MERN stack developer, I specialize in React, Redux, and
            Tailwind CSS. My focus is on building responsive and user-friendly
            web applications that provide a seamless experience for the
            end-user. With my extensive knowledge of the latest web development
            technologies and frameworks, such as Next.js, Prisma, and
            TypeScript, I create innovative solutions that meet the unique needs
            of my clients. From simple websites to complex web applications, I
            am committed to delivering high-quality work that exceeds
            expectations.
          </p>
          <p className="mt-10">
            Apart from my expertise in the MERN stack, I have a strong
            background in UI design and animation. I am proficient in using the
            GreenSock Animation Platform (GSAP) library to create dynamic and
            engaging user interfaces. My skills in creating smooth animations
            and transitions enhance the overall user experience. Additionally, I
            am well-versed in using other design tools, such as Figma, to create
            wireframes and mockups. Combining my technical skills with my
            artistic eye, I develop visually appealing and functional web
            applications that stand out in the market.
          </p>
          <a
            href="https://docs.google.com/document/d/1SWpuImu9yj-z4j9zI_7FrdVyYbhMBy8NdW_voI7a5V4/edit?usp=sharing"
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
