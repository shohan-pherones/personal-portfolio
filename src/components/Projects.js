import Project from "./Project";

const data = [
  {
    id: 1,
    title: "Torque Xtreme — A car repair service",
    img1: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1674231025/Personal%20Portfolio/torque-xtreme-1_o6y8dx.jpg",
    img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1674231025/Personal%20Portfolio/torque-xtreme-2_qumvkp.jpg",
    description:
      "Users can register and login through email/password, google or github account. Users can make order for a specific car repair service as well as add/edit services. User authorization has been implemented using JWT on the server side",
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
    title: "React Shopping — An electronics store",
    img1: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1674231025/Personal%20Portfolio/react-shopping-1_lwzolq.jpg",
    img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1674231025/Personal%20Portfolio/react-shopping-2_ikp0h4.jpg",
    description:
      "Shopping cart functionality has been implemented using Redux Toolkit. All the product data has been served via JSON server and fetched using RTK Query. Cart items also saved into the local storage of the client’s browser",
    tools: [
      "React.js",
      "Redux.js",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
    ],
    liveLink: "https://react-shopping-shohan.netlify.app",
    frontEndLink: "https://github.com/shohan-pherones/react-shopping-client",
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
