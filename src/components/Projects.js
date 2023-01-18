import { useEffect, useRef } from "react";
import hoverEffect from "hover-effect";
import cloud from "../assets/images/cloud.png";
import reactShopping1 from "../assets/images/react-shopping-1.jpg";
import reactShopping2 from "../assets/images/react-shopping-2.jpg";
import reactTodo1 from "../assets/images/react-todo-1.jpg";
import reactTodo2 from "../assets/images/react-todo-2.jpg";
import foodVerse1 from "../assets/images/foodverse-1.jpg";
import foodVerse2 from "../assets/images/foodverse-2.jpg";
import torqueXtreme1 from "../assets/images/torque-xtreme-1.jpg";
import torqueXtreme2 from "../assets/images/torque-xtreme-2.jpg";

const Projects = () => {
  const projectRightRefOne = useRef(null);
  const projectRightRefTwo = useRef(null);
  const projectRightRefThree = useRef(null);
  const projectRightRefFour = useRef(null);

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
      image1: reactTodo1,
      image2: reactTodo2,
      displacementImage: cloud,
    });
  }, []);

  useEffect(() => {
    new hoverEffect({
      parent: projectRightRefThree.current,
      intensity: 0.3,
      image1: foodVerse1,
      image2: foodVerse2,
      displacementImage: cloud,
    });
  }, []);

  useEffect(() => {
    new hoverEffect({
      parent: projectRightRefFour.current,
      intensity: 0.3,
      image1: torqueXtreme1,
      image2: torqueXtreme2,
      displacementImage: cloud,
    });
  }, []);

  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        <div className="project grid grid-cols-1 xl:grid-cols-5 gap-20">
          <div className="project-left xl:col-span-3 flex flex-col gap-10">
            <span className="text-9xl text-white/20">01</span>
            <h3 className="uppercase text-5xl leading-relaxed text-cyan-400">
              React Shopping: An Online Electronics Accessories Store
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
              Tools: React.js, Redux.js, Redux Toolkit, RTK Query, Tailwind CSS
            </span>
            <div className="flex gap-20">
              <a
                href="https://github.com/shohan-pherones/react-shopping-client"
                target="_blank"
                rel="noreferrer"
                className="uppercase py-10 px-20 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
              >
                View in GitHub
              </a>
              <a
                href="https://react-shopping-shohan.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="uppercase py-10 px-20 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
              >
                View Live Demo
              </a>
            </div>
          </div>
          <div
            className="project-right xl:col-span-2 xl:justify-self-end row-start-1 xl:row-auto"
            ref={projectRightRefOne}
          ></div>
        </div>
        <div className="project grid grid-cols-1 xl:grid-cols-5 gap-20">
          <div className="project-left xl:col-span-3 flex flex-col gap-10">
            <span className="text-9xl text-white/20">02</span>
            <h3 className="uppercase text-5xl leading-relaxed text-cyan-400">
              React Todo App: A Simple Todo Application
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
            <span className="text-cyan-400">Tools: React.js, Tailwind CSS</span>
            <div className="flex gap-20">
              <a
                href="https://github.com/shohan-pherones/react-todo-app"
                target="_blank"
                rel="noreferrer"
                className="uppercase py-10 px-20 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
              >
                View in GitHub
              </a>
              <a
                href="https://react-todo-app-shohan.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="uppercase py-10 px-20 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
              >
                View Live Demo
              </a>
            </div>
          </div>
          <div
            className="project-right xl:col-span-2 xl:justify-self-end row-start-1 xl:row-auto"
            ref={projectRightRefTwo}
          ></div>
        </div>
        <div className="project grid grid-cols-1 xl:grid-cols-5 gap-20">
          <div className="project-left xl:col-span-3 flex flex-col gap-10">
            <span className="text-9xl text-white/20">03</span>
            <h3 className="uppercase text-5xl leading-relaxed text-cyan-400">
              Foodverse: A Recipe Finder Web Application
            </h3>
            <p className="text-white/75">
              Foodverse is a recipe web application, where an user can search
              different kinds of recipe and find the necessary ingredients for
              the specific recipe item. Also a recipe item can be saved into the
              local storage of the browser. It's easy to find different recipes
              for both vegetarians and meat eaters, as well as for people who
              want to lose weight.
            </p>
            <p className="text-white/75">
              Your one stop for recipes, Foodverse is the best app for any kind
              of cuisine and cooking level. Browse what's trending, plan your
              meals with our grocery list tool and browse recipes by
              ingredients. There’s nothing like a well-made meal to make you
              feel like a culinary genius!
            </p>
            <span className="text-cyan-400">
              Tools: React.js, React Router, Tailwind CSS
            </span>
            <div className="flex gap-20">
              <a
                href="https://github.com/shohan-pherones/foodverse"
                target="_blank"
                rel="noreferrer"
                className="uppercase py-10 px-20 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
              >
                View in GitHub
              </a>
              <a
                href="https://food-verse.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="uppercase py-10 px-20 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
              >
                View Live Demo
              </a>
            </div>
          </div>
          <div
            className="project-right xl:col-span-2 xl:justify-self-end row-start-1 xl:row-auto"
            ref={projectRightRefThree}
          ></div>
        </div>
        <div className="project grid grid-cols-1 xl:grid-cols-5 gap-20">
          <div className="project-left xl:col-span-3 flex flex-col gap-10">
            <span className="text-9xl text-white/20">04</span>
            <h3 className="uppercase text-5xl leading-relaxed text-cyan-400">
              Torque Xtreme: A Car Repair Service Website
            </h3>
            <p className="text-white/75">
              "Torque Xtreme" is a car repair service website, built using the
              most demanded texhnologies like MongoDB, Express.js, React.js and
              Node.js. The clean and modern UI is designed using Tailwind CSS.
            </p>
            <p className="text-white/75">
              Users can register and login through email/password, google or
              github account. Also can make order for a specific car repair
              service, and also add/edit services. Lastly, user authorization
              has been implemented using JWT in the server side.
            </p>
            <span className="text-cyan-400">
              Tools: Node.js, Express.js, MongoDB, JWT, React.js, Firebase,
              Tailwind CSS
            </span>
            <div className="flex gap-20">
              <a
                href="https://github.com/shohan-pherones/torque-xtreme"
                target="_blank"
                rel="noreferrer"
                className="uppercase py-10 px-20 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
              >
                View in GitHub
              </a>
              <a
                href="https://torque-xtreme.web.app"
                target="_blank"
                rel="noreferrer"
                className="uppercase py-10 px-20 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
              >
                View Live Demo
              </a>
            </div>
          </div>
          <div
            className="project-right xl:col-span-2 xl:justify-self-end row-start-1 xl:row-auto"
            ref={projectRightRefFour}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
