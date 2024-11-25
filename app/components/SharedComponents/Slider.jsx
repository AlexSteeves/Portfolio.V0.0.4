"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Slider({ text, direction }) {
  const outputText = (text + " ").repeat(8);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sliderProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [-150 * direction, 150 * direction]
  );

  return (
    <div className="h-fill overflow-hidden bg-[#0F413F]" ref={container}>
      <motion.div
        className="whitespace-nowrap flex relative left-[-20%]"
        style={{ x: sliderProgress, willChange: "transform" }}
      >
        <p className="uppercase whitespace-nowrap mx-5 font-semibold text-[#F5F5F5] text-[3rem] md:text-[4rem] xl:text-[5rem]">
          {outputText}
        </p>
      </motion.div>
    </div>
  );
}
