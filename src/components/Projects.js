import Project from "./Project";

const data = [
  {
    id: 1,
    title: "Torque Xtreme: A Car Repair Service Website",
    img1: "https://images.pexels.com/photos/14910936/pexels-photo-14910936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/10879155/pexels-photo-10879155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Users can register and login through email/password, google or github account. Also can make order for a specific car repair service, and also add/edit services. Lastly, user authorization has been implemented using JWT in the server side.",
    tools: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "React.js",
      "Firebase",
      "Tailwind CSS",
    ],
    liveLink: "https://torque-xtreme.web.app",
    frontEndLink: "https://github.com/shohan-pherones/torque-xtreme",
    backEndLink: "https://github.com/shohan-pherones/torque-xtreme-server",
  },
  {
    id: 2,
    title: "Torque Xtreme: A Car Repair Service Website",
    img1: "https://images.pexels.com/photos/14910936/pexels-photo-14910936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/10879155/pexels-photo-10879155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Users can register and login through email/password, google or github account. Also can make order for a specific car repair service, and also add/edit services. Lastly, user authorization has been implemented using JWT in the server side.",
    tools: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "React.js",
      "Firebase",
      "Tailwind CSS",
    ],
    liveLink: "https://torque-xtreme.web.app",
    frontEndLink: "https://github.com/shohan-pherones/torque-xtreme",
    backEndLink: "https://github.com/shohan-pherones/torque-xtreme-server",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
