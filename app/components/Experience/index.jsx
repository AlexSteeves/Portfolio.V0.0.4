import { experience } from "./ExperienceData";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import Slider from '../SharedComponents/Slider';
export default function index() {
  return (
    <>
      <Slider text="Experience" direction="1" />
      <div
        id="experience"
        className="w-[100%] pb-10 text-text flex flex-col mt-20 justify-center items-center gap-16"
      >
        {experience.map((job, i) => (
          <Experience key={i} experienceData={job} />
        ))}
      </div>
    </>
  );
}

function Experience({ experienceData }) {
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
      <div className = "w-full md:max-w-min bg-[#f4faf5] text-[#13481F] p-10 rounded-2xl">
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
          {experienceData.jobtitle}
        </motion.h3>
      </div>

      <div className="overflow-hidden">
        <motion.h2
          variants={animation}
          custom={2}
          animate={isInView ? "enter" : "initial"}
          className=" font-normal leading-[1] "
            style={{ fontSize: "calc(16px + 1vw)" }}
        >
          {experienceData.company}
        </motion.h2>
      </div>

      <div className="overflow-hidden">
        <motion.p
          variants={animation}
          custom={3}
          animate={isInView ? "enter" : "initial"}
          className="font-light pt-5 text-balance leading-[1.1]"
          style={{ fontSize: "calc(16px + 0.8vw)" }}
        >
          {experienceData.body}
        </motion.p>
      </div>

      <div className="overflow-hidden">
        <motion.div
          variants={animation}
          custom={3}
          animate={isInView ? "enter" : "initial"}
          className="w-fit flex flex-col gap-2"
        >
          <p className="font-semibold pt-5" style={{ fontSize: "calc(16px + 1vw)" }}>
            TECHNOLOGIES USED:
          </p>
          <ul className="grid grid-cols-2 list-disc list-inside gap-x-4"
              style={{ fontSize: "calc(16px + 0.5vw)" }}>
            {experienceData.skills.map((skill) => (
              <li
                className="font-regular whitespace-nowrap"
                key={skill}
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
