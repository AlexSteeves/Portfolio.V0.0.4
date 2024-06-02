import { projects } from "./projectData";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import Slider from "../SharedComponents/Slider";
export default function Index() {
  return (
    <>
      <Slider text="Selected Works" direction="-1" />
      <div
        id="projects"
        className="w-[100%] pb-10 text-text flex flex-col mt-20 justify-center items-center gap-16"
      >
        {projects.map((project, i) => (
          <Project key={i} projectData={project} />
        ))}
      </div>
    </>
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
    <div ref={body} className="flex flex-col gap-4 w-[80%]">
      <div className="w-full md:max-w-min bg-[#f4faf5] text-[#13481F] p-10 rounded-2xl">
        <div className="overflow-hidden">
          <motion.h3
            variants={animation}
            custom={1}
            animate={isInView ? "enter" : "initial"}
            className=" font-bold uppercase leading-[0.90] text wrap md:whitespace-nowrap"
            style={{
              fontSize: "calc(16px + 3vw)",
            }}
          >
            {projectData.title}
          </motion.h3>
        </div>

        <div className="overflow-hidden">
          <motion.p
            variants={animation}
            custom={2}
            animate={isInView ? "enter" : "initial"}
            className=" font-normal leading-[1.25] pt-5 text-balance"
            style={{ fontSize: "calc(16px + 0.9vw)" }}
          >
            {projectData.description}
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.div
            variants={animation}
            custom={3}
            animate={isInView ? "enter" : "initial"}
            className="w-fit flex flex-col gap-2"
          >
            <p
              className="pt-5 font-semibold"
              style={{ fontSize: "calc(16px + 1.2vw)" }}
            >
              TECHNOLOGIES USED:
            </p>
            <ul
              className="grid grid-cols-2 list-disc list-inside gap-x-4"
              style={{ fontSize: "calc(16px + 0.5vw)" }}
            >
              {projectData.skills.map((skill) => (
                <li className=" font-regular whitespace-nowrap" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="overflow-hidden mt-4">
          <motion.button
            variants={animation}
            custom={3}
            animate={isInView ? "enter" : "initial"}
            className=" hover:bg-[#13481F] bg-[#433BFF] text-[#f4faf5] font-semibold transition duration-300 ease-linear max-w-min whitespace-nowrap py-3 px-6 rounded-lg uppercase hover:drop-shadow-sm"
          >
            {" "}
            <a href={projectData.link} target="_blank">
              Visit the Repo
            </a>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
