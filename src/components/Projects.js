import { useEffect, useRef } from "react";
import hoverEffect from "hover-effect";
import cloud from "../assets/images/cloud.png";
import reactShopping1 from "../assets/images/react-shopping-1.jpg";
import reactShopping2 from "../assets/images/react-shopping-2.jpg";

const Projects = () => {
  const projectRightRefOne = useRef();
  const projectRightRefTwo = useRef();

  useEffect(() => {
    new hoverEffect({
      parent: projectRightRefOne.current,
      intensity: 0.3,
      image1: reactShopping1,
      image2: reactShopping2,
      displacementImage: cloud,
    });
  }, []);

  useEffect(() => {
    new hoverEffect({
      parent: projectRightRefTwo.current,
      intensity: 0.3,
      image1: reactShopping1,
      image2: reactShopping2,
      displacementImage: cloud,
    });
  }, []);

  return (
    <div className="projects container mx-auto mt-20">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-wrapper mt-20 flex flex-col gap-40">
        <div className="project grid grid-cols-5 gap-20">
          <div className="project-left col-span-3 flex flex-col gap-10">
            <span className="text-9xl text-white/20">01</span>
            <h3 className="uppercase text-5xl leading-relaxed text-cyan-400">
              React Shopping: An online electronics accessories store
            </h3>
            <p className="text-white/75">
              React shopping is a one-stop store for all your favorite
              electronics accessories. We bring the latest gadgets to your
              doorstep with an exclusive price-match policy before, during and
              after the sale.
            </p>
            <p className="text-white/75">
              React shopping is a top retailer of electronics accessories. The
              most popular categories are mobile accessories, computer parts, TV
              & gaming accessories, and more.
            </p>
            <span className="text-cyan-400">
              Tools: React.js, Redux.js, Redux Toolkit, RTK Query
            </span>
            <div className="flex gap-20">
              <a
                href="https://github.com/shohan-pherones/react-shopping-client"
                target="_blank"
                className="uppercase py-10 px-20 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
              >
                View in GitHub
              </a>
              <a
                href="https://react-shopping-shohan.netlify.app"
                target="_blank"
                className="uppercase py-10 px-20 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
              >
                View Live Demo
              </a>
            </div>
          </div>
          <div
            className="project-right col-span-2 justify-self-end"
            ref={projectRightRefOne}
          ></div>
        </div>
        <div className="project grid grid-cols-5 gap-20">
          <div className="project-left col-span-3 flex flex-col gap-10">
            <span className="text-9xl text-white/20">02</span>
            <h3 className="uppercase text-5xl leading-relaxed text-cyan-400">
              React Todo App: A simple todo application
            </h3>
            <p className="text-white/75">
              This is a todo application built with React.js and backend API
              server written in Node.js. It's a simple, intuitive, and elegant
              UI for managing your todo list. It comes with a number of great
              features such as creating, updating or deleting tasks from the
              list.
            </p>
            <p className="text-white/75">
              Our app is very simple and straightforward. We have a clean
              interface that makes it easy to see what's happening, and how you
              can manage your tasks.
            </p>
            <span className="text-cyan-400">
              Tools: React.js, Tailwind CSS, JSON Server
            </span>
            <div className="flex gap-20">
              <a
                href="https://github.com/shohan-pherones/react-todo-app"
                target="_blank"
                className="uppercase py-10 px-20 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
              >
                View in GitHub
              </a>
              <a
                href="https://react-todo-app-shohan.netlify.app"
                target="_blank"
                className="uppercase py-10 px-20 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
              >
                View Live Demo
              </a>
            </div>
          </div>
          <div
            className="project-right col-span-2 justify-self-end"
            ref={projectRightRefTwo}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
