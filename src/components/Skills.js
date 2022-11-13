const Skills = () => {
  return (
    <div className="skills container mx-auto mt-40" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-wrapper grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 mt-40">
        <ul className="skills-wrapper-1 flex flex-col gap-10">
          <li className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">01.</span>
            <span className="skill-name">HTML</span>
          </li>
          <li className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">02.</span>
            <span className="skill-name">CSS</span>
          </li>
          <li className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">03.</span>
            <span className="skill-name">Bootstrap</span>
          </li>
          <li className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">04.</span>
            <span className="skill-name">Tailwind CSS</span>
          </li>
          <li className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">05.</span>
            <span className="skill-name">JavaScript (ES6+)</span>
          </li>
          <li className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">06.</span>
            <span className="skill-name">Parcel</span>
          </li>
        </ul>
        <ul className="skills-wrapper-2 flex flex-col gap-10">
          <li className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">07.</span>
            <span className="skill-name">GSAP</span>
          </li>
          <li className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">08.</span>
            <span className="skill-name">Axios</span>
          </li>
          <li className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">09.</span>
            <span className="skill-name">React.js</span>
          </li>
          <li className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">10.</span>
            <span className="skill-name">React Router</span>
          </li>
          <li className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">11.</span>
            <span className="skill-name">Redux.js</span>
          </li>
          <li className="skill-item flex gap-10 items-baseline">
            <span className="skill-number text-white/50">12.</span>
            <span className="skill-name">Redux Toolkit</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
