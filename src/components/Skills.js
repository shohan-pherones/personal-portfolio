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
    skill: "GSAP",
  },
  {
    id: 8,
    skill: "React.js",
  },
  {
    id: 9,
    skill: "React Router",
  },
  {
    id: 10,
    skill: "Axios",
  },
  {
    id: 11,
    skill: "Redux.js",
  },
  {
    id: 12,
    skill: "Redux Toolkit",
  },
  {
    id: 13,
    skill: "Firebase",
  },
  {
    id: 14,
    skill: "Node.js",
  },
  {
    id: 15,
    skill: "Express.js",
  },
  {
    id: 16,
    skill: "MongoDB",
  },
];

const Skills = () => {
  return (
    <div className="skills container mx-auto mt-40" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-wrapper grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 mt-40">
        <ul className="skills-wrapper-1 flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill) => (
              <li
                key={skill.id}
                className="skill-item flex gap-10 items-baseline"
              >
                <span className="skill-number text-white/50">
                  {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                </span>
                <span className="skill-name">{skill.skill}</span>
              </li>
            ))}
        </ul>
        <ul className="skills-wrapper-2 flex flex-col gap-10">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill) => (
              <li
                key={skill.id}
                className="skill-item flex gap-10 items-baseline"
              >
                <span className="skill-number text-white/50">
                  {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                </span>
                <span className="skill-name">{skill.skill}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
