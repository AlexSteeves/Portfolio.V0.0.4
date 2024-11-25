"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
const aboutText = [
  "I love building responsive and useable applications,",
  "with a focus on scalability.",
  "I have a strong passion for programming and love to learn new things.",
];

const aboutText2 =
  "I love building responsive and useable applications with a focus on scalability. I have a strong passion for programming and love to learn new things.";

export default function AboutMe() {
  return (
    <div className="w-full py-[10vh] bg-[#F5F5F5] z-10 rounded-t-2xl">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16 px-4 xl:px-8 text-cBackground">
        <div className="flex flex-col gap-2">
          <span className="uppercase text-[2rem] lg:text-[3rem] tracking-[0.1em] font-[600]">
            about me
          </span>
          <div className="flex flex-row">
            <h3 className="leading-[1.1] tracking-[-0.03em] font-[300] text-balance text-[1.5rem] lg:text-[2rem]">
              I love building responsive and useable applications with a focus
              on scalability. I have a strong passion for programming and love
              to learn new things.
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="uppercase text-[2rem] lg:text-[3rem] tracking-[0.1em] font-[600]">
            ENGINEERING
          </span>
          <h3 className="leading-[1.1] tracking-[-0.03em] font-[300] text-balance text-[1.5rem] lg:text-[2rem]">
            With a degree in Computer Engineering, work experience with Java,
            SQL as well as data science, and many projects built using
            React/Next.JS, I am interested in just about every part of Software
            whether that's low/high level programming, or frontend/backend.
          </h3>
        </div>
      </div>
    </div>
  );
}
const MaskText = ({ text, custom }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 1, triggerOnce: false });

  const animation = {
    initial: { y: "100%" },
    enter: {
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * custom,
      },
    },
  };

  {
    /* <span className="leading-[1.1] tracking-[-0.03em] font-[300] text-balance text-[1.5rem] lg:text-[2rem]">
          
          </span> */
  }
  return (
    <div className="overflow-hidden" ref={ref}>
      <motion.span
        variants={animation}
        initial="initial"
        animate={inView ? "enter" : "initial"}
        className="leading-[1.1] tracking-[-0.03em] font-[300] text-balance text-[1.5rem] lg:text-[2rem]"
      >
        {text}
      </motion.span>
    </div>
  );
};
