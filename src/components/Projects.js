import { useRef } from "react";
import Project from "./Project";
import { useSectionTitleReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title:
      "Euphoria E-commerce Website Built with Next.js: Redefining Online Shopping",
    img1: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1681647025/Personal%20Portfolio/euphoria-1_pyu27o.jpg",
    img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1681647024/Personal%20Portfolio/euphoria-2_pwsyj3.jpg",
    description:
      "Welcome to Euphoria E-commerce, your one-stop destination for all your online shopping needs. Our platform is built on a powerful technology stack, including Next.js, React, Prisma, Tailwind, Redux Toolkit, and Stripe, to deliver a seamless shopping experience.",
    tools: [
      "Next.js",
      "Prisma",
      "MongoDB",
      "Stripe",
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    liveLink: "https://euphoria-ecommerce.vercel.app",
    sourceCodeLink: "https://github.com/shohan-pherones/euphoria-ecommerce",
  },
  {
    id: 2,
    title: "Raptor Media — A full-stack social media app",
    img1: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1680934541/Personal%20Portfolio/raptor-1_gfkcnt.jpg",
    img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1680934541/Personal%20Portfolio/raptor-2_d5hclv.jpg",
    description:
      "Introducing the ultimate Raptor Media platform built with the latest and greatest technologies! I have used Next.js, Prisma, Tailwind CSS, and NextAuth with TypeScript to create a powerful and modern social media platform that's sure to impress.",
    tools: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "MongoDB",
      "NextAuth",
      "React.js",
      "Zustand",
      "Axios",
      "SWR",
      "Tailwind CSS",
    ],
    liveLink: "https://raptor-media.vercel.app",
    sourceCodeLink: "https://github.com/shohan-pherones/raptor-media",
  },
  {
    id: 3,
    title: "Orbit Council — A powerful project management app",
    img1: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1677308467/Personal%20Portfolio/o-c-1_m8oyn3.jpg",
    img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1677308467/Personal%20Portfolio/o-c-2_wvneli.jpg",
    description:
      "Orbit Council is a powerful project management app built using the MERN stack. With Orbit Council, users can create, update, and delete their own projects with ease. The app is highly secure, featuring robust JWT authentication and frontend route protection.",
    tools: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "React.js",
      "Context API",
      "Tailwind CSS",
    ],
    liveLink: "https://orbit-council.netlify.app",
    frontEndLink: "https://github.com/shohan-pherones/orbit-council-client",
    backEndLink: "https://github.com/shohan-pherones/orbit-council-server",
  },
  {
    id: 4,
    title: "Torque Xtreme — A car repair service",
    img1: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1674231025/Personal%20Portfolio/torque-xtreme-1_o6y8dx.jpg",
    img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1674231025/Personal%20Portfolio/torque-xtreme-2_qumvkp.jpg",
    description:
      "Xtreme Torque is a state-of-the-art car repair website that provides a hassle-free experience for customers to order services from the comfort of their homes. The website is built using the MERN (MongoDB, Express, React, and Node.js) stack, ensuring fast and responsive performance.",
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
    id: 5,
    title: "Self-Played Snake Game with Genetic Algorithm and Neural Network",
    img1: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1680934541/Personal%20Portfolio/snake-1_veumf9.jpg",
    img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1680934541/Personal%20Portfolio/snake-2_rkxatt.jpg",
    description:
      "This is a self-played snake game that uses genetic algorithm and neural network to learn and improve its gameplay over time. The game is built using the p5.js library for graphics and user interface, and the tensorflow.js and neataptic libraries for machine learning.",
    tools: [
      "p5.js",
      "TensorFlow.js",
      "Neataptic",
      "Genetic Algorithm",
      "Neural Network",
      "JavaScript",
    ],
    liveLink: "https://snake-game-self-played.netlify.app",
    sourceCodeLink: "https://github.com/shohan-pherones/snake-game-self-played",
  },
];

const Projects = () => {
  const projectTitleRef = useRef(null);

  useSectionTitleReveal(projectTitleRef);

  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <div className="overflow-hidden">
        <h2 className="section-title" ref={projectTitleRef}>
          My Projects
        </h2>
      </div>
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
