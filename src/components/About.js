import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://images.pexels.com/photos/3996756/pexels-photo-3996756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  img2: "https://images.pexels.com/photos/13310288/pexels-photo-13310288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const About = () => {
  const aboutLeftRef = useRef(null);

  useHoverEffect(aboutLeftRef, data.img1, data.img2);

  return (
    <div className="about container mx-auto mt-40" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-wrapper mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            consectetur quod quaerat cum itaque quae autem dolores eum nobis
            aperiam! Facere nisi doloribus inventore eveniet ut beatae
            perferendis alias quasi.
          </p>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            tempore, ullam deserunt a repellendus quam quod totam corporis
            reprehenderit deleniti illum distinctio iusto exercitationem libero
            quo impedit fugiat quisquam veniam.
          </p>
          <a
            href="https://www.google.com"
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
