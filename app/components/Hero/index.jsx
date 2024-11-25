"use client";
/* eslint-disable react/no-unescaped-entities */

import styles from "./style.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
export default function Index() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen z-1"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <div className="whitespace-nowrap flex flex-col justify-center text-center text-text overflow-hidden">
          <div className="z-50 leading-[0.95] ">
            <p
              className="uppercase my-0 py-0 font-bold"
              style={{ fontSize: "calc(16px + 9vw)" }}
            >
              WELCOME, I'M
            </p>
            <p
              className=" uppercase my-0 font-bold"
              style={{ fontSize: "calc(16px + 9vw)" }}
            >
              ALEX STEEVES
            </p>
          </div>

          <h4
            className="mt-5 whitespace-normal z-50 "
            style={{ fontSize: "calc(16px + 1vw)" }}
          >
            Software developer and Computer Engineering Graduate
          </h4>
        </div>
      </div>
    </div>
  );
}
