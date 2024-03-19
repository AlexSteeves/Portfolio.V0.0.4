import { projects } from "./projectData";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
export default function index() {
  return (
    <div
      id="projects"
      className="w-[100%] px-10 md:px-[10%] py-10 text-text flex flex-col gap-16 mt-20 "
    >
      <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold ">
        SELECTED WORKS
      </h2>
      {projects.map((project, i) => (
        <Project key={i} projectData={project} />
      ))}
    </div>
  );
}

function Project({ projectData }) {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-50%" });

  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };
  return (
    <div ref={body} className="flex flex-col gap-4 w-[80%] ">
      <div className="overflow-hidden">
        <motion.h3
          variants={animation}
          custom={1}
          animate={isInView ? "enter" : "initial"}
          className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase"
        >
         
          {projectData.title}
        </motion.h3>
      </div>

      <div className="overflow-hidden">
        <motion.p
          variants={animation}
          custom={2}
          animate={isInView ? "enter" : "initial"}
          className="text-xl md:text-2xl lg:text-3xl font-regular"
        >
          {projectData.description}
        </motion.p>
      </div>
      <div className="overflow-hidden">
        <motion.div variants={animation}
          custom={3}
          animate={isInView ? "enter" : "initial"} className="w-fit flex flex-col gap-2">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
            TECHNOLOGIES USED:
          </p>
          <ul className="grid grid-cols-2 list-disc list-inside gap-x-4">
            {projectData.skills.map((skill) => (
              <li
                className="text-md md:text-xl lg:text-2xl font-regular"
                key={skill}
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="overflow-hidden">
        <motion.button
        variants={animation}
        custom={3}
        animate={isInView ? "enter" : "initial"}
          onClick={() =>
            openWindow(
              "https://github.com/AlexSteeves/Nourish-MealPlanGenerator"
            )
          }
          className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-secondary px-8 py-2 bg-accent rounded-md text-text font-light transition duration-200 ease-linear w-[80%] md:w-[40%]"
        >
          LEARN MORE
        </motion.button>
      </div>
    </div>
  );
}
