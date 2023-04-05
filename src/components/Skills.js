import { useRef } from "react";
import {
  useSectionTitleReveal,
  useSkillLineReveal,
  useSkillInfoReveal,
} from "../hooks/gsap";

const data = [
  {
    id: 1,
    skill: "HTML",
  },
  {
    id: 2,
    skill: "CSS",
  },
  {
    id: 3,
    skill: "SASS",
  },
  {
    id: 4,
    skill: "Bootstrap",
  },
  {
    id: 5,
    skill: "Tailwind CSS",
  },
  {
    id: 6,
    skill: "JavaScript",
  },
  {
    id: 7,
    skill: "React.js",
  },
  {
    id: 8,
    skill: "React Router",
  },
  {
    id: 9,
    skill: "Redux.js",
  },
  {
    id: 10,
    skill: "Redux Toolkit",
  },
  {
    id: 11,
    skill: "Axios",
  },
  {
    id: 12,
    skill: "SWR",
  },
  {
    id: 13,
    skill: "GSAP",
  },
  {
    id: 14,
    skill: "Firebase",
  },
  {
    id: 15,
    skill: "TypeScript",
  },
  {
    id: 16,
    skill: "Next.js",
  },
  {
    id: 17,
    skill: "Node.js",
  },
  {
    id: 18,
    skill: "Express.js",
  },
  {
    id: 19,
    skill: "MongoDB",
  },
  {
    id: 20,
    skill: "Mongoose",
  },
  {
    id: 21,
    skill: "Prisma",
  },
  {
    id: 22,
    skill: "JWT",
  },
];

const Skills = () => {
  const skillTitleRef = useRef(null);
  const skillItemRef = useRef([]);
  const skillItem2Ref = useRef([]);
  const skillInfoRef = useRef([]);
  const skillInfo2Ref = useRef([]);

  useSectionTitleReveal(skillTitleRef);
  useSkillLineReveal(skillItemRef.current);
  useSkillLineReveal(skillItem2Ref.current);
  useSkillInfoReveal(skillInfoRef.current);
  useSkillInfoReveal(skillInfo2Ref.current);

  return (
    <div className="skills container mx-auto mt-40" id="skills">
      <div className="overflow-hidden">
        <h2 className="section-title" ref={skillTitleRef}>
          My Skills
        </h2>
      </div>
      <div className="skills-wrapper grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 mt-40">
        <ul className="skills-wrapper-1 flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                ref={(el) => (skillItemRef.current[i] = el)}
                key={skill.id}
                className="skill-item overflow-hidden"
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillInfoRef.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.skill}</span>
                </div>
              </li>
            ))}
        </ul>
        <ul className="skills-wrapper-2 flex flex-col gap-10">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                ref={(el) => (skillItem2Ref.current[i] = el)}
                key={skill.id}
                className="skill-item overflow-hidden"
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillInfo2Ref.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.skill}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
