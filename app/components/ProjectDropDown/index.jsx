"use client";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import Projects from "./Projects";
export default function index() {
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.column}>
      <div
        className={styles.container}
        onClick={() => setClicked(!clicked)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.blackBar}></div>
        <motion.p
          className={styles.leftText}
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ duration: 0.3, stiffness: 100 }}
          style={{ color: isHovered ? "white" : "black" }}
        >
          GPS Climate sss
        </motion.p>

        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: isHovered ? "0%" : "-100%" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
          }}
        />
      </div>

      {clicked && 
      <motion.div animate={{y:clicked ? "100%" : "0%"}} initial={{y:"0%"}} transition={{ duration: 1, ease: "easeInOut"}} >
        <Projects />
    </motion.div>}
    </div>
  );
}
