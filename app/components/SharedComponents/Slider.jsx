"use client";
import { motion, useTransform } from "framer-motion";

export default function Slider({ text, direction, progress }) {
  const outputText = (text + " ").repeat(8);

  const translateX = useTransform(
    progress,
    [0, 1],
    [-450 * direction, 450 * direction]
  );

  return (
    <div className="overflow-hidden bg-[#0F413F]" r>
      <motion.div
        className="whitespace-nowrap flex relative left-[-40%]"
        style={{ x: translateX, willChange: "transform" }}
      >
        <p className="uppercase whitespace-nowrap mx-5 font-semibold text-[#F5F5F5] text-[3rem] md:text-[4rem] xl:text-[5rem]">
          {outputText}
        </p>
      </motion.div>
    </div>
  );
}
