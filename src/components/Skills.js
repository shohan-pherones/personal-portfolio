import { useRef } from "react";
import { useGsapHeadline, useGsapStagger } from "../lib/gsap";

const Skills = () => {
  const mySkillsRef = useRef(null);
  const skill1 = useRef(null);
  const skill2 = useRef(null);
  const skill3 = useRef(null);
  const skill4 = useRef(null);
  const skill5 = useRef(null);
  const skill6 = useRef(null);
  const skill7 = useRef(null);
  const skill8 = useRef(null);
  const skill9 = useRef(null);
  const skill10 = useRef(null);
  const skill11 = useRef(null);
  const skill12 = useRef(null);

  const skillArr = [
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
    skill7,
    skill8,
    skill9,
    skill10,
    skill11,
    skill12,
  ];

  useGsapHeadline(mySkillsRef);
  useGsapStagger(skillArr);

  return (
    <div className="skills container mx-auto mt-40">
      <h2 className="section-title" ref={mySkillsRef}>
        My Skills
      </h2>
      <div className="skills-wrapper grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 mt-40">
        <ul className="skills-wrapper-1 flex flex-col gap-10">
          <li ref={skill1} className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">01.</span>
            <span className="skill-name">HTML</span>
          </li>
          <li ref={skill2} className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">02.</span>
            <span className="skill-name">CSS</span>
          </li>
          <li ref={skill3} className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">03.</span>
            <span className="skill-name">Bootstrap</span>
          </li>
          <li ref={skill4} className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">04.</span>
            <span className="skill-name">Tailwind CSS</span>
          </li>
          <li ref={skill5} className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">05.</span>
            <span className="skill-name">JavaScript (ES6+)</span>
          </li>
          <li ref={skill6} className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">06.</span>
            <span className="skill-name">React.js</span>
          </li>
        </ul>
        <ul className="skills-wrapper-2 flex flex-col gap-10">
          <li ref={skill7} className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">07.</span>
            <span className="skill-name">React Router</span>
          </li>
          <li ref={skill8} className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">08.</span>
            <span className="skill-name">Redux.js</span>
          </li>
          <li ref={skill9} className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">09.</span>
            <span className="skill-name">Redux Toolkit</span>
          </li>
          <li ref={skill10} className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">10.</span>
            <span className="skill-name">Firebase</span>
          </li>
          <li ref={skill11} className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">11.</span>
            <span className="skill-name">TypeScript</span>
          </li>
          <li ref={skill12} className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">12.</span>
            <span className="skill-name">GSAP</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
